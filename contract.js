/* ============================================================
 * contract.js — Génération automatique du contrat de formation (version pdfmake)
 *
 * Dépend de pdfmake (+ vfs_fonts) chargé dans admin.html. html2pdf n'est plus nécessaire.
 *   <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js"></script>
 *   <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"></script>
 *
 * opts.studentSignature : data URI PNG de la signature du stagiaire (signature en ligne)
 * opts.date             : date du contrat (par défaut : aujourd'hui)
 * Expose : window.ContractGenerator.generate(reg, opts) -> Promise<Blob>   (PDF)
 *          window.ContractGenerator.buildHtml(reg, opts) -> string         (aperçu HTML)
 *
 * Principe : le contrat est décrit une seule fois sous forme de "modèle" neutre
 * (buildModel). Ce modèle est converti soit en définition pdfmake (PDF réel avec
 * texte sélectionnable, pagination native), soit en HTML (aperçu).
 * Convention de texte : **gras**, \n = saut de ligne.
 * ============================================================ */
(function () {
    'use strict';

    // ---------- Configuration (modifiez ici, pas dans le gabarit) ----------
    const CONFIG = {
        org: {
            name: 'MILLE VOILES',
            legalForm: 'Association loi 1901',
            address: '36 allées des Plantes, 94800 Villejuif',
            siret: '99073651400011',
            representative: 'ZHOU Xuefeng',
            trainerName: 'Xuefeng ZHOU',
            trainerQualification: "Ingénieur pédagogique, titulaire d'un master",
            trainerExperience: '4 ans',
            iban: 'FR76 1027 8060 6600 0207 2420 193',
            bic: 'CMCIFR2A',
            email: '2025qianfan@gmail.com',
            website: 'www.assmv.fr',
            place: 'Villejuif'
        },
        // La date de fin est calculée automatiquement : date de début + durationMonths.
        defaults: { hours: 16, price: 200, durationMonths: 6 },
        // Images placées à côté de admin.html (facultatives : ignorées si absentes). PNG ou JPEG uniquement.
        logo: 'logo.png',
        signature: 'signature_organisme.jpeg'
    };

    const BLUE = '#0056b3';

    const TYPE_INFO = {
        n: { suffix: 'naturalisation', demand: 'la demande de naturalisation française' },
        r: { suffix: 'carte de résident de 10 ans', demand: 'la demande de Carte de résident' },
        m: { suffix: 'carte de séjour pluriannuelle', demand: 'la demande de carte de séjour pluriannuelle' },
        default: { suffix: '', demand: 'la demande de titre de séjour ou de naturalisation' }
    };
    const PAY_LABELS = { wechat: 'WeChat Pay', alipay: 'Alipay', xiaohongshu: 'Xiaohongshu', cb: 'carte bancaire' };

    // ---------- Utilitaires ----------
    function clean(s) { return String(s == null ? '' : s).replace(/\*\*/g, ''); } // données saisies : pas de balisage
    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
    function frDate(d) {
        return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    }
    function frDateFromString(s) {
        if (!s) return '';
        const m = String(s).match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (!m) return String(s);
        return frDate(new Date(parseInt(m[1], 10), parseInt(m[2], 10) - 1, parseInt(m[3], 10)));
    }
    // Ajoute n mois ; si le jour n'existe pas, on prend le dernier jour du mois.
    function addMonths(d, n) {
        const r = new Date(d.getFullYear(), d.getMonth() + n, 1);
        const lastDay = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate();
        r.setDate(Math.min(d.getDate(), lastDay));
        return r;
    }
    // Nombre entier (0–9999) en lettres françaises
    function numberToFrench(n) {
        n = Math.max(0, Math.floor(Number(n) || 0));
        const u = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf',
            'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
        const tens = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];
        function below100(x) {
            if (x < 17) return u[x];
            if (x < 20) return 'dix-' + u[x - 10];
            if (x < 70) {
                const d = Math.floor(x / 10), r = x % 10;
                return tens[d] + (r === 1 ? ' et un' : r ? '-' + u[r] : '');
            }
            if (x < 80) { const r = x - 60; return 'soixante' + (r === 11 ? ' et onze' : '-' + below100(r)); }
            const r = x - 80;
            return r === 0 ? 'quatre-vingts' : 'quatre-vingt-' + below100(r);
        }
        function below1000(x) {
            const h = Math.floor(x / 100), r = x % 100;
            if (h === 0) return below100(r);
            if (h === 1) return 'cent' + (r ? ' ' + below100(r) : '');
            return u[h] + ' cent' + (r ? ' ' + below100(r) : 's');
        }
        if (n < 1000) return below1000(n);
        const k = Math.floor(n / 1000), r = n % 1000;
        return (k === 1 ? 'mille' : below1000(k) + ' mille') + (r ? ' ' + below1000(r) : '');
    }

    // ============================================================
    // 1) MODÈLE NEUTRE DU CONTRAT
    // Blocs : title, sub, p, h, ul, kv, keep, sig
    // ============================================================
    function buildModel(reg, opts) {
        opts = opts || {};
        const o = CONFIG.org;
        const baseDate = (opts.date instanceof Date && !isNaN(opts.date.getTime())) ? opts.date : new Date();
        const today = frDate(baseDate);
        const endDate = frDate(addMonths(baseDate, CONFIG.defaults.durationMonths));
        const tt = TYPE_INFO[String(reg.type || '').toLowerCase()] || TYPE_INFO.default;
        const courseTitle = 'Préparation à l’Examen civique' + (tt.suffix ? ' – ' + tt.suffix : '');
        const payLabel = PAY_LABELS[reg.payment_method];
        const payText = payLabel
            ? 'paiement via ' + payLabel + (reg.order_number ? ' (commande n° ' + clean(reg.order_number) + ')' : '') + ', avant le début de la formation (au plus tard 7 jours avant la première séance)'
            : 'virement bancaire ou paiement en espèces, avant le début de la formation (au plus tard 7 jours avant la première séance)';

        const hours = parseInt(reg.pack_hours, 10) || parseInt(reg.credit, 10) || CONFIG.defaults.hours;
        const price = parseInt(reg.estimated_price, 10) || parseInt(reg.pack_price, 10) || CONFIG.defaults.price;
        const priceWords = numberToFrench(price);
        const priceWordsCap = priceWords.charAt(0).toUpperCase() + priceWords.slice(1);
        const rhythm = hours % 2 === 0 ? (hours / 2) + ' séances de 2 heures' : 'selon le planning convenu';
        const name = clean(reg.name);

        const traineeRows = [
            ['Nom et prénom :', '**' + name + '**'],
            ['Email :', clean(reg.email || '—')]
        ];
        if (reg.address) traineeRows.push(['Adresse :', clean(reg.address)]);
        if (reg.phone) traineeRows.push(['Téléphone :', clean(reg.phone)]);
        if (reg.birth_date) {
            traineeRows.push(['Né(e) le :', frDateFromString(reg.birth_date) +
                (reg.birth_place ? ' à ' + clean(reg.birth_place) : '')]);
        }

        const P = function (x, o2) { return Object.assign({ t: 'p', x: x }, o2 || {}); };
        const H = function (x) { return { t: 'h', x: x }; };
        const UL = function (items) { return { t: 'ul', items: items }; };
        const KV = function (rows, o2) { return Object.assign({ t: 'kv', rows: rows }, o2 || {}); };
        const KEEP = function (blocks) { return { t: 'keep', blocks: blocks }; };

        const modules = ['Principes et valeurs de la République', 'Système institutionnel et politique',
            'Droits et devoirs', 'Histoire, géographie et culture', 'Vie dans la société française'];

        return [
            { t: 'title', x: 'CONTRAT DE FORMATION' },
            { t: 'sub', x: courseTitle },

            P(`**Entre les soussignés :**`),
            P(`**L'organisme de formation**`),
            KV([
                ['Nom :', '**' + o.name + '**'],
                ['Forme juridique :', o.legalForm],
                ['Adresse :', o.address],
                ['SIRET :', o.siret],
                ['Représenté par :', o.representative]
            ]),
            P(`Ci-après dénommé **« l'Organisme de formation »**,`),
            P(`**Et**`, { mt: 8 }),
            P(`**Le stagiaire**`),
            KV(traineeRows),
            P(`Ci-après dénommé **« le Stagiaire »**,`),
            P(`Il est convenu ce qui suit :`),

            H(`Article 1 – Objet du contrat`),
            P(`Le présent contrat a pour objet la réalisation d'une action de formation intitulée :`),
            P(`**« ` + courseTitle + ` »**`, { center: true }),
            P(`Cette formation vise à préparer le stagiaire à l’Examen civique prévu dans le cadre de ` + tt.demand + `, selon les modalités en vigueur à la date de la formation.`),
            P(`**Objectifs pédagogiques :**\nÀ l'issue de la formation, le stagiaire sera capable de :`, { mt: 6 }),
            UL([
                `Comprendre toutes les informations liées à l’Examen civique (inscription, consultation des résultats, etc.) ;`,
                { x: `Maîtriser les cinq modules suivants :`, sub: modules },
                `Appliquer des stratégies de passage de l’examen pour optimiser ses résultats ;`,
                `Réaliser des simulations complètes dans les conditions de l’examen.`
            ]),

            H(`Article 2 – Contenu de la formation`),
            P(`La formation est structurée autour des modules suivants :`),
            UL(modules),
            P(`Chaque module comprend :`),
            UL([
                `des apports théoriques ;`,
                `la présentation des modalités et méthodes de l'examen ;`,
                `des exercices d'entraînement, tests de simulation et mises en situation ;`,
                `un support pédagogique fourni au stagiaire pour révision et approfondissement.`
            ]),
            P(`La répartition des heures se fait par module, avec un renforcement ciblé en fonction des besoins du stagiaire.`),

            H(`Article 3 – Organisation de la formation`),
            KV([
                ['Durée totale :', hours + ' heures'],
                ['Rythme :', rhythm],
                ['Modalité :', 'formation à distance (Google Meet)'],
                ['Période :', 'Du ' + today + ' au ' + endDate],
                ['Horaires :', 'à définir selon la demande du stagiaire']
            ], { keyBold: true }),
            KEEP([P(`**Confirmation des dates**\nLe Stagiaire doit confirmer les dates et horaires des séances au plus tard dans un délai de 7 jours ouvrables après la signature du contrat.\nÀ défaut de confirmation dans ce délai, l'Organisme se réserve le droit d'annuler la réservation. Dans ce cas, le Stagiaire pourra demander une nouvelle planification, sous réserve de disponibilité.`)]),
            KEEP([P(`**Réservation**\nLe stagiaire doit réserver au moins 2 jours ouvrables avant la séance. En cas d'annulation ou de non-validation de la réservation, le stagiaire devra reprogrammer une nouvelle séance en respectant le délai de 2 jours ouvrables.`)]),

            H(`Article 4 – Moyens pédagogiques et techniques`),
            UL([
                `Cours structurés en visioconférence`,
                `Exercices pratiques`,
                `Accès gratuit aux ressources pédagogiques en ligne internes de l'Association (` + o.website + `), incluant des exercices, des mind maps, des points clés à retenir, des erreurs fréquentes et des synthèses de contenu.`,
                `Accès à une plateforme d'apprentissage en ligne : identifiant correspondant au prénom de l'utilisateur, mot de passe : **` + clean(reg.password || '—') + `** (modifiable par l'utilisateur).`,
                `Support et réponses via WeChat`,
                `Outil de visioconférence : Google Meet – Le lien sera envoyé au stagiaire par email avant chaque séance.`
            ]),
            P(`**Important :** Les séances ne sont pas enregistrées. Aucune vidéo ou audio ne sera fournie.`),

            H(`Article 5 – Évaluation des acquis et attestation`),
            P(`**Conditions de délivrance de l'attestation interne :**\nLe stagiaire recevra une attestation de fin de formation (interne, non officielle) si :`),
            UL([`Taux de présence ≥ 90 %`, `Score au test simulé ≥ 32/40`]),
            P(`Le test simulé est réalisé à la fin de la dernière séance. Le barème est communiqué au stagiaire avant le test.\nSi le stagiaire n'atteint pas ces critères, une séance de rattrapage gratuite (2 fois) est proposée.\n**Rattrapage :** 2 séances en ligne de 2 heures.`),

            H(`Article 6 – Formation complémentaire en cas d’échec à l’examen`),
            P(`L’octroi de cette formation complémentaire gratuite repose sur une évaluation pédagogique réalisée par l’organisme sur la base de critères objectifs, notamment le niveau initial du stagiaire, son assiduité et le respect du parcours de formation défini. À ce titre, l’éligibilité à la formation complémentaire gratuite est conditionnée au respect cumulatif des éléments suivants :`),
            UL([
                `réalisation obligatoire d’un test de positionnement (pré-test) à l’entrée en formation ;`,
                `suivi du parcours pédagogique recommandé par l’organisme, incluant le volume d’heures défini ;`,
                `participation régulière aux séances de formation ;`,
                `validation pédagogique du formateur ou du conseiller pédagogique concernant la progression du stagiaire ;`,
                `réalisation d’un test blanc ou d’une évaluation finale interne, lorsque celle-ci est proposée.`
            ]),
            P(`Toute inscription à l’examen ou toute démarche liée à l’examen effectuée sans validation préalable et écrite de l’organisme ne saurait engager la responsabilité de ce dernier et ne donne pas droit à la formation complémentaire gratuite.`),
            P(`L’organisme se réserve la possibilité de refuser ou de différer l’accès à la formation complémentaire gratuite si les conditions pédagogiques ci-dessus ne sont pas remplies de manière satisfaisante.`),
            P(`**Dispositions finales :** La formation complémentaire gratuite est un dispositif d’accompagnement pédagogique et ne constitue pas une obligation de résultat. Toute violation des présentes dispositions peut entraîner la non-éligibilité à la formation complémentaire gratuite, sans préjudice des autres droits de l’organisme.`),

            H(`Article 7 – Encadrement`),
            KV([
                ['Nom du formateur :', o.trainerName],
                ['Qualification :', o.trainerQualification],
                ['Expérience :', o.trainerExperience]
            ], { keyBold: true }),

            H(`Article 8 – Conditions financières`),
            KV([
                ['Coût total de la formation :', '**' + price + ' € (' + priceWordsCap + ' euros)**'],
                ['TVA :', 'non applicable – article 293 B du CGI'],
                ['Modalité de paiement :', payText]
            ], { keyBold: true }),
            KEEP([P(`**Coordonnées bancaires :**\nIBAN : ` + o.iban + `\nBIC : ` + o.bic)]),

            H(`Article 9 – Annulation et remboursement (strict)`),
            KEEP([P(`**1. Droit de rétractation (14 jours)**\nConformément aux articles L.221-18 et suivants du Code de la consommation, le Stagiaire dispose d'un délai de 14 jours calendaires à compter de la signature du contrat pour exercer son droit de rétractation, sans pénalité et sans justification.\nEn cas de rétractation dans ce délai, le remboursement est intégral.`)]),
            KEEP([
                P(`**2. Annulation avant le début de la formation**`),
                KV([
                    [`Annulation jusqu'à 7 jours avant la première séance :`, 'remboursement total (100 %)'],
                    [`Annulation entre 7 et 3 jours avant la première séance :`, 'remboursement de 50 %'],
                    [`Annulation moins de 3 jours avant la première séance :`, 'non remboursable']
                ])
            ]),
            KEEP([P(`**3. Absence ou annulation après le début de la formation**\nSi la formation a déjà commencé (même partiellement) : aucun remboursement ne sera effectué. Le Stagiaire pourra demander une reprogrammation ou une reprise de la formation sous conditions.`)]),
            KEEP([P(`**4. Cas de force majeure ou impossibilité de fournir la formation**\nL'Organisme s'engage à reprogrammer la séance ou à proposer un formateur équivalent. Si impossible, remboursement des séances non réalisées.\n**Toute formation commencée est considérée comme due en raison de la mise à disposition immédiate des ressources pédagogiques.**`)]),

            H(`Article 10 – Données personnelles (RGPD)`),
            P(`Les données sont collectées pour la gestion administrative, pédagogique et la facturation.\n**Responsable du traitement :** ` + o.name + `\n**Durée de conservation :** 3 ans\nLe Stagiaire dispose d'un droit d'accès, de rectification, d'opposition et de suppression des données.\n**Contact :** ` + o.email),

            H(`Article 11 – Propriété intellectuelle, utilisation des supports pédagogiques et confidentialité`),
            P(`L’ensemble des contenus pédagogiques mis à disposition du Stagiaire dans le cadre de la formation (notamment supports de cours, exercices, documents, ressources numériques, schémas, vidéos et tout autre matériel associé) demeure la propriété exclusive de l’Organisme ou de ses éventuels partenaires, sauf mention expresse contraire.`),
            P(`Ces contenus sont fournis exclusivement pour les besoins personnels du Stagiaire, dans le cadre strict de sa formation. Ils ne peuvent en aucun cas être reproduits, copiés, modifiés, distribués, transmis, cédés, vendus ou exploités à des fins commerciales, en tout ou partie, sans l’autorisation écrite préalable de l’Organisme.`),
            P(`Les séances de formation dispensées en visioconférence ainsi que l’ensemble des échanges pédagogiques associés sont strictement confidentiels. À ce titre, toute captation, enregistrement audio ou vidéo, capture d’écran ou rediffusion, totale ou partielle, est interdite sans accord écrit préalable de l’Organisme.`),
            P(`Le non-respect des dispositions du présent article pourra entraîner des mesures appropriées, incluant notamment la suspension temporaire ou définitive de l’accès aux supports et/ou à la formation, sans préjudice de tout recours légal que l’Organisme se réserve le droit d’exercer pour obtenir réparation du préjudice subi.`),

            H(`Article 12 – Litiges`),
            P(`Sous réserve des dispositions légales impératives en matière de protection du consommateur, le tribunal compétent est celui du siège social de l’Organisme.`),

            { t: 'sig', place: o.place, date: today, org: o.representative, name: name,
                sigImg: opts.studentSignature || null }
        ];
    }

    // ============================================================
    // 2) CONVERSION EN DÉFINITION PDFMAKE
    // ============================================================
    function runs(s) {
        return String(s).split('**').map(function (t, i) { return { text: t, bold: i % 2 === 1 }; })
            .filter(function (r) { return r.text !== ''; });
    }

    const NO_BORDERS = {
        hLineWidth: function () { return 0; }, vLineWidth: function () { return 0; },
        paddingTop: function () { return 1.5; }, paddingBottom: function () { return 1.5; },
        paddingLeft: function () { return 0; }, paddingRight: function () { return 12; }
    };

    function toPdfNode(b, imgs) {
        switch (b.t) {
            case 'title':
                return { text: b.x, fontSize: 22, bold: true, color: BLUE, alignment: 'center', margin: [0, 0, 0, 8] };
            case 'sub':
                return {
                    table: { widths: ['*'], body: [[{ text: b.x, bold: true, alignment: 'center', fillColor: '#f5f5f5', margin: [0, 4, 0, 4] }]] },
                    layout: {
                        hLineColor: function () { return BLUE; }, vLineColor: function () { return BLUE; },
                        hLineWidth: function () { return 0.7; }, vLineWidth: function () { return 0.7; }
                    },
                    margin: [0, 0, 0, 12]
                };
            case 'h':
                // headlineLevel + pageBreakBefore : un titre n'est jamais seul en bas de page
                return { text: b.x, style: 'h3', headlineLevel: 1 };
            case 'p':
                return { text: runs(b.x), alignment: b.center ? 'center' : 'left', margin: [0, b.mt || 3, 0, 3] };
            case 'ul': {
                const items = [];
                b.items.forEach(function (it) {
                    if (typeof it === 'string') { items.push({ text: runs(it) }); return; }
                    items.push({ text: runs(it.x) });
                    items.push({ ul: it.sub.map(function (s) { return { text: runs(s) }; }), type: 'circle', margin: [0, 1, 0, 1] });
                });
                return { ul: items, margin: [8, 2, 0, 4] };
            }
            case 'kv':
                return {
                    table: {
                        dontBreakRows: true,
                        widths: ['auto', '*'],
                        body: b.rows.map(function (r) {
                            return [{ text: runs(b.keyBold ? '**' + r[0] + '**' : r[0]) }, { text: runs(r[1]) }];
                        })
                    },
                    layout: NO_BORDERS,
                    margin: [14, 2, 0, 4]
                };
            case 'keep':
                return { stack: b.blocks.map(function (x) { return toPdfNode(x, imgs); }), unbreakable: true };
            case 'sig': {
                const left = [
                    { text: runs(`**Pour l'Organisme de formation**`) },
                    { text: runs('Nom et prénom : **' + b.org + '**') },
                    { text: 'Signature :' }
                ];
                if (imgs.signature) left.push({ image: imgs.signature, fit: [160, 75], alignment: 'center', margin: [0, 4, 0, 0] });
                const right = [
                    { text: runs('**Le Stagiaire**') },
                    { text: runs('Nom et prénom : **' + b.name + '**') },
                    { text: runs('Mention : **« Lu et approuvé »**') },
                    { text: 'Signature :' },
                    b.sigImg
                        ? { image: b.sigImg, fit: [150, 60], alignment: 'center', margin: [0, 8, 0, 0] }
                        : { canvas: [{ type: 'rect', x: 0, y: 0, w: 150, h: 60, lineWidth: 0.8 }], margin: [38, 8, 0, 0] }
                ];
                return {
                    unbreakable: true,
                    stack: [
                        { text: 'Fait à ' + b.place + ', le ' + b.date, margin: [0, 16, 0, 0] },
                        { columns: [{ width: '*', stack: left, alignment: 'center' }, { width: '*', stack: right, alignment: 'center' }], columnGap: 16, margin: [0, 14, 0, 0] },
                        { text: 'Le présent contrat est établi en un exemplaire original pour chaque partie.' + (b.sigImg ? '\nSigné électroniquement par le Stagiaire le ' + b.date + '.' : ''), alignment: 'center', color: '#777', fontSize: 8.5, margin: [0, 18, 0, 0] }
                    ]
                };
            }
        }
        return { text: '' };
    }

    function buildDocDefinition(model, imgs, reg) {
        const o = CONFIG.org;
        const W = 453; // largeur utile : 595,28 − 2 × 71 pt (25 mm)
        const line = function (m) {
            return { canvas: [{ type: 'line', x1: 0, y1: 0, x2: W, y2: 0, lineWidth: 0.6, lineColor: '#444' }], margin: m };
        };
        return {
            pageSize: 'A4',
            pageMargins: [71, 85, 71, 68],
            info: { title: 'Contrat de formation – ' + clean(reg.name), author: o.name },
            defaultStyle: { font: 'Roboto', fontSize: 10, lineHeight: 1.25, color: '#111' },
            styles: { h3: { fontSize: 11.5, bold: true, color: BLUE, margin: [0, 12, 0, 4] } },
            header: function () {
                return {
                    margin: [71, 20, 71, 0],
                    stack: [
                        {
                            columns: [
                                imgs.logo ? { image: imgs.logo, fit: [150, 44], width: 150 } : { text: '', width: 150 },
                                {
                                    width: '*', margin: [0, 6, 0, 0], stack: [
                                        { text: o.name, bold: true, fontSize: 11, color: BLUE, alignment: 'right' },
                                        { text: o.legalForm, fontSize: 9, alignment: 'right' }
                                    ]
                                }
                            ]
                        },
                        line([0, 4, 0, 0])
                    ]
                };
            },
            footer: function (current, count) {
                return {
                    margin: [71, 8, 71, 0],
                    stack: [
                        line([0, 0, 0, 4]),
                        {
                            columns: [
                                { width: 120, text: '' },
                                { width: '*', text: current + '/' + count, alignment: 'center', fontSize: 9 },
                                { width: 150, text: 'Contrat de formation à distance', alignment: 'right', fontSize: 8 }
                            ]
                        }
                    ]
                };
            },
            // Ne jamais laisser un titre d'article en bas de page sans la suite
            pageBreakBefore: function (node, followingNodesOnPage) {
                return node.headlineLevel === 1 && followingNodesOnPage.length === 0;
            },
            content: model.map(function (b) { return toPdfNode(b, imgs); })
        };
    }

    // ============================================================
    // 3) CONVERSION EN HTML (aperçu)
    // ============================================================
    function htmlRuns(s) {
        return String(s).split('**').map(function (t, i) {
            const e = esc(t).replace(/\n/g, '<br>');
            return i % 2 === 1 ? '<strong>' + e + '</strong>' : e;
        }).join('');
    }
    function toHtmlNode(b, imgs) {
        switch (b.t) {
            case 'title': return '<h1 style="font-size:24pt;color:' + BLUE + ';text-align:center;margin:6px 0 10px">' + esc(b.x) + '</h1>';
            case 'sub': return '<div style="border:1px solid ' + BLUE + ';background:#f5f5f5;border-radius:5px;padding:8px;text-align:center;font-weight:bold;margin-bottom:14px">' + esc(b.x) + '</div>';
            case 'h': return '<h3 style="font-size:12pt;color:' + BLUE + ';margin:14px 0 5px">' + esc(b.x) + '</h3>';
            case 'p': return '<p style="margin:' + (b.mt || 4) + 'px 0 4px;' + (b.center ? 'text-align:center' : '') + '">' + htmlRuns(b.x) + '</p>';
            case 'ul': return '<ul style="margin:3px 0;padding-left:22px">' + b.items.map(function (it) {
                if (typeof it === 'string') return '<li>' + htmlRuns(it) + '</li>';
                return '<li>' + htmlRuns(it.x) + '<ul>' + it.sub.map(function (s) { return '<li>' + htmlRuns(s) + '</li>'; }).join('') + '</ul></li>';
            }).join('') + '</ul>';
            case 'kv': return '<table style="border-collapse:collapse;margin:4px 0 4px 28px">' + b.rows.map(function (r) {
                return '<tr><td style="white-space:nowrap;vertical-align:top;padding:1px 14px 1px 0">' + htmlRuns(b.keyBold ? '**' + r[0] + '**' : r[0]) + '</td><td style="padding:1px 0">' + htmlRuns(r[1]) + '</td></tr>';
            }).join('') + '</table>';
            case 'keep': return '<div style="page-break-inside:avoid">' + b.blocks.map(function (x) { return toHtmlNode(x, imgs); }).join('') + '</div>';
            case 'sig': return '<p style="margin-top:16px">Fait à ' + esc(b.place) + ', le ' + esc(b.date) + '</p>' +
                '<table style="width:100%;margin-top:18px"><tr><td style="width:50%;text-align:center;vertical-align:top"><strong>Pour l\'Organisme de formation</strong><br>Nom et prénom : <strong>' + esc(b.org) + '</strong><br>Signature :<br>' +
                (imgs.signature ? '<img style="width:190px;max-height:90px;object-fit:contain" src="' + imgs.signature + '">' : '') + '</td>' +
                '<td style="width:50%;text-align:center;vertical-align:top"><strong>Le Stagiaire</strong><br>Nom et prénom : <strong>' + esc(b.name) + '</strong><br>Mention : <strong>« Lu et approuvé »</strong><br>Signature :' + (b.sigImg ? '<img style="width:150px;max-height:60px;object-fit:contain;display:block;margin:8px auto" src="' + b.sigImg + '">' : '<div style="border:1px solid #333;height:60px;width:150px;margin:8px auto"></div>') + '</td></tr></table>' +
                '<div style="margin-top:18px;text-align:center;color:#777;font-size:9pt;border-top:1px solid #999;padding-top:6px">Le présent contrat est établi en un exemplaire original pour chaque partie.</div>';
        }
        return '';
    }
    function buildHtml(reg, opts) {
        opts = opts || {};
        const imgs = opts.images || {};
        return '<div style="font-family:Roboto,Arial,sans-serif;font-size:10.5pt;line-height:1.4;color:#111">' +
            buildModel(reg, opts).map(function (b) { return toHtmlNode(b, imgs); }).join('') + '</div>';
    }

    // ============================================================
    // 4) IMAGES + GÉNÉRATION
    // ============================================================
    // pdfmake n'accepte que PNG/JPEG en data URI. Retourne null si absente ou non supportée.
    function loadImageAsDataUri(src) {
        return fetch(src, { cache: 'no-cache' })
            .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.blob(); })
            .then(function (blob) {
                return new Promise(function (resolve, reject) {
                    const fr = new FileReader();
                    fr.onload = function () { resolve(fr.result); };
                    fr.onerror = reject;
                    fr.readAsDataURL(blob);
                });
            })
            .then(function (uri) { return /^data:image\/(png|jpe?g);/i.test(uri) ? uri : null; })
            .catch(function () { return null; });
    }

    function makeBlob(docDefinition) {
        return new Promise(function (resolve, reject) {
            try {
                const ret = window.pdfMake.createPdf(docDefinition).getBlob(resolve); // 0.2.x : callback
                if (ret && typeof ret.then === 'function') ret.then(resolve, reject);   // 0.3.x : promesse
            } catch (e) { reject(e); }
        });
    }

    function generate(reg, opts) {
        if (typeof window.pdfMake === 'undefined') {
            return Promise.reject(new Error('pdfmake non chargé'));
        }
        opts = opts || {};
        return Promise.all([loadImageAsDataUri(CONFIG.logo), loadImageAsDataUri(CONFIG.signature)])
            .then(function (r) {
                const model = buildModel(reg, opts);
                const build = function (imgs) { return makeBlob(buildDocDefinition(model, imgs, reg)); };
                return build({ logo: r[0], signature: r[1] }).catch(function (err) {
                    // Dernier recours : réessayer sans aucune image
                    console.warn('PDF avec images échoué, nouvelle tentative sans images :', err);
                    return build({});
                });
            });
    }

    window.ContractGenerator = { generate: generate, buildHtml: buildHtml, config: CONFIG };
})();