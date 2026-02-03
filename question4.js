const questionsFourYears = [
  // ==================== Mises en situation ====================
  {
    category: "Mises en situation",
    难度: "中等",
    question: "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence physique, sexe...) ?",
    options: [
      "Oui, dans certaines situations",
      "Non, dans aucun cas",
      "Oui, avec le consentement des autres",
      "Non, en métropole française"
    ],
    answer: 1,
    explanation: `
a) ❌ Oui, dans certaines situations
FR : Faux. Il n'existe aucune situation où l'insulte publique est autorisée.
中：错误。法律中不存在任何允许公开侮辱他人的情况。

b) ✅ Non, dans aucun cas
FR : Correct ! Insulter quelqu'un publiquement pour ce type de raison est interdit par la loi.
中：正确！因为残疾、外貌或性别等原因公开侮辱他人，在任何情况下都是违法的。

c) ❌ Oui, avec le consentement des autres
FR : Faux. Le consentement des autres ne rend pas l'insulte légale.
中：错误。即使他人同意，侮辱行为仍然是违法的。

d) ❌ Non, en métropole française
FR : Faux. L'interdiction s'applique partout en France, pas seulement en métropole.
中：错误。该法律适用于整个法国，而不仅仅是本土地区。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence physique, sexe...) ?",
    options: [
      "Non interdit par la loi",
      "Parfois autorisé",
      "Autorisé en ligne, interdit dans la vie réelle",
      "Autorisé en famille"
    ],
    answer: 0,
    explanation: `
a) ✅ Non interdit par la loi
FR : Correct ! L'insulte publique discriminatoire est interdite par la loi.
中：正确！歧视性的公开侮辱行为是法律明确禁止的。

b) ❌ Parfois autorisé
FR : Faux. Ce n'est jamais autorisé.
中：错误。这种行为从来不被允许。

c) ❌ Autorisé en ligne, interdit dans la vie réelle
FR : Faux. Les insultes en ligne sont aussi punies par la loi.
中：错误。网络上的侮辱同样违法。

d) ❌ Autorisé en famille
FR : Faux. Le cadre familial ne justifie pas une insulte publique.
中：错误。家庭关系不能成为公开侮辱的理由。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Un enfant peut-il refuser d'aller à l'école pour une raison religieuse ?",
    options: [
      "Oui, toujours",
      "Non",
      "Seulement si ses parents sont d'accord",
      "Seulement à partir de 16 ans"
    ],
    answer: 1,
    explanation: `
A) ❌ Oui, toujours
FR : Faux. En France, l'instruction est obligatoire pour tous les enfants de 3 à 16 ans, quelle que soit leur religion ou conviction. Refuser l'école pour une raison religieuse est donc interdit.
中：错误。在法国，3 到 16 岁的儿童必须接受教育，不论其宗教信仰如何，因此因宗教原因拒绝上学是不允许的。

B) ✅ Non
FR : Correct ! L'école publique est obligatoire et neutre sur le plan religieux. Les enfants doivent y aller, indépendamment de leurs croyances ou de celles de leurs parents.
中：正确。公立学校是义务教育，并且宗教中立，儿童必须上学，无论他们或父母的信仰如何。

C) ❌ Seulement si ses parents sont d'accord
FR : Faux. Même avec l'accord des parents, l'enfant doit suivre l'école obligatoire.
中：错误。即使父母同意，孩子仍必须接受义务教育。

D) ❌ Seulement à partir de 16 ans
FR : Faux. L'obligation scolaire commence dès 3 ans et se termine à 16 ans.
中：错误。义务教育从 3 岁开始，到 16 岁结束。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Une mère refuse actuellement que sa fille de 8 ans participe au cours de sport parce qu'il y a des garçons. Que dit la loi ?",
    options: [
      "C'est interdit dans une école publique",
      "C'est possible si l'enseignant est d'accord",
      "C'est toujours interdit dans toutes les écoles",
      "C'est autorisé seulement à l'école privée"
    ],
    answer: 0,
    explanation: `
A) ✅ C'est interdit dans une école publique
FR : Correct ! Dans les écoles publiques, l'égalité entre filles et garçons doit être respectée. On ne peut pas exclure un enfant d'une activité en raison de son sexe ou de la présence de l'autre sexe.
中：正确。在公立学校，男女平等必须得到尊重。不能因为孩子的性别或其他性别的存在而让孩子缺席某项活动。

B) ❌ C'est possible si l'enseignant est d'accord
FR : Faux. L'enseignant ne peut pas autoriser des discriminations basées sur le sexe.
中：错误。教师不能允许基于性别的歧视行为。

C) ❌ C'est toujours interdit dans toutes les écoles
FR : Faux. Dans les écoles privées confessionnelles, certaines règles peuvent différer, mais dans le public, c'est strictement interdit.
中：错误。在宗教私立学校中规则可能不同，但在公立学校中严格禁止。

D) ❌ C'est autorisé seulement à l'école privée
FR : Faux. Même dans le privé, les droits fondamentaux comme l'égalité ne peuvent pas être totalement ignorés, surtout pour les établissements recevant des financements publics.
中：错误。即使在私立学校，基本权利（如平等）仍必须得到一定保障，尤其是那些接受公立资金的学校。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Une personne a-t-elle le droit de ne pas croire en une religion ?",
    options: [
      "Non",
      "Oui",
      "Seulement à l'âge adulte",
      "Seulement si elle est fonctionnaire"
    ],
    answer: 1,
    explanation: `
A) ❌ Non
FR : Faux. La liberté de conscience garantit le droit de croire ou de ne pas croire, sans pression extérieure.
中：错误。良心自由保障每个人都有信仰或不信仰的权利，不受外界强制。

B) ✅ Oui
FR : Correct ! En France, chacun peut choisir de ne pas adhérer à une religion. Cette liberté est protégée par la Constitution et par le principe de laïcité.
中：正确。在法国，每个人都可以选择不信仰任何宗教。这一自由受到宪法和世俗原则的保护。

C) ❌ Seulement à l'âge adulte
FR : Faux. La liberté de conscience s'exerce dès l'enfance, bien que certaines décisions majeures soient encadrées par la loi.
中：错误。良心自由从儿童时期就存在，虽然一些重大决定可能受到法律约束。

D) ❌ Seulement si elle est fonctionnaire
FR : Faux. La liberté de croire ou de ne pas croire s'applique à tous, indépendamment de la profession.
中：错误。信仰自由适用于所有人，与职业无关。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "En tant que parent, peut-on refuser que son enfant participe aux cours de sport à l'école car ils sont mixtes ?",
    options: [
      "Oui, toujours",
      "Non",
      "Oui, si l'école est d'accord",
      "Oui, seulement à l'âge de 10 ans"
    ],
    answer: 1,
    explanation: `
A) ❌ Oui, toujours
FR : Faux. Dans les écoles publiques, la loi garantit l'égalité entre filles et garçons : on ne peut pas exclure un enfant d'un cours de sport pour cette raison.
中：错误。在公立学校中，法律保障男女平等，不能因为课程是混合班就拒绝孩子参加体育课。

B) ✅ Non
FR : Correct ! Les parents ne peuvent pas refuser la participation de leur enfant à des activités mixtes dans les écoles publiques. Tous les élèves doivent être traités de manière équitable.
中：正确。父母不能拒绝孩子参加公立学校的混合活动。所有学生都必须受到平等对待。

C) ❌ Oui, si l'école est d'accord
FR : Faux. Même avec l'accord de l'école, la discrimination basée sur le sexe est interdite.
中：错误。即使学校同意，基于性别的歧视也是违法的。

D) ❌ Oui, seulement à l'âge de 10 ans
FR : Faux. Il n'existe pas d'âge légal pour refuser les activités mixtes : toutes les activités scolaires doivent respecter l'égalité dès le plus jeune âge.
中：错误。没有允许拒绝混合活动的法定年龄，所有课程都必须从小保障平等。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Peut-on brûler publiquement un drapeau français ?",
    options: [
      "Oui",
      "Non",
      "Oui, seulement dans certaines régions",
      "Oui, si on est citoyen"
    ],
    answer: 1,
    explanation: `
A) ❌ Oui
FR : Faux. Brûler publiquement le drapeau français constitue une atteinte aux symboles de la République et est interdit par la loi.
中：错误。公开焚烧法国国旗属于对共和国象征的侮辱，法律禁止这种行为。

B) ✅ Non
FR : Correct ! La loi française protège les symboles nationaux, dont le drapeau, et interdit de les dégrader ou de les brûler publiquement.
中：正确。法国法律保护国家象征，包括国旗，禁止公开破坏或焚烧国旗。

C) ❌ Oui, seulement dans certaines régions
FR : Faux. L'interdiction est valable sur tout le territoire français, sans exception régionale.
中：错误。禁止行为在全法国范围内适用，没有地区例外。

D) ❌ Oui, si on est citoyen
FR : Faux. Être citoyen français ne donne pas le droit de brûler le drapeau.
中：错误。成为法国公民也不能公开焚烧国旗。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Madame X et Madame Y sont des étrangères résidant en France. Elles souhaitent créer une association d'aide aux étrangers.",
    options: [
      "Elles peuvent la créer, mais doivent la déclarer à la préfecture",
      "Elles ne peuvent pas créer d'association parce qu'elles ne sont pas de nationalité française.",
      "Elles peuvent créer une association, mais seulement après avoir adhéré à une autre association.",
      "Elles peuvent créer librement une association, sans condition de nationalité particulière."
    ],
    answer: 0,
    explanation: `
A) ✅ Elles peuvent la créer, mais doivent la déclarer à la préfecture
FR : Correct ! En France, toute personne, française ou étrangère résidant légalement, peut créer une association. Selon la loi de 1901, la plupart des associations doivent être déclarées à la préfecture pour obtenir la personnalité juridique et la capacité de recevoir des subventions ou de gérer un compte bancaire.
中：正确。在法国，任何合法居留的人员，无论国籍，都可以创建协会。根据1901年的法律，大多数协会需向省政府（préfecture）登记，以获得法人资格，并能够接受补助或开设银行账户。

B) ❌ Elles ne peuvent pas créer d'association parce qu'elles ne sont pas de nationalité française
FR : Faux. La nationalité française n'est pas un prérequis pour créer une association.
中：错误。创建协会不要求拥有法国国籍。

C) ❌ Elles peuvent créer une association, mais seulement après avoir adhéré à une autre association
FR : Faux. Il n'y a aucune obligation de rejoindre une autre association avant d'en créer une.
中：错误。创建协会前不需要加入其他协会。

D) ❌ Elles peuvent créer librement une association, sans condition de nationalité particulière
FR : Faux. Bien que la nationalité ne soit pas une condition, la création doit être déclarée à la préfecture pour être légalement reconnue. La formulation "librement, sans condition" ignore cette obligation légale.
中：错误。虽然国籍不是限制条件，但协会要获得法律承认，必须向省政府登记。"自由创建，无条件"这一说法忽略了这一法律要求。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Un employeur refuse d'embaucher des femmes dans son entreprise. Que dit la loi ?",
    options: [
      "C'est légal",
      "C'est interdit",
      "C'est permis pour certaines entreprises",
      "C'est permis si l'employeur est homme"
    ],
    answer: 1,
    explanation: `
A) ❌ C'est légal
FR : Faux. La loi française interdit toute discrimination à l'embauche basée sur le sexe.
中：错误。法国法律禁止基于性别的招聘歧视。

B) ✅ C'est interdit
FR : Correct ! Selon le Code du travail et les lois sur l'égalité, il est interdit de refuser un emploi à une personne uniquement parce qu'elle est une femme. Tous les candidats doivent être traités sur leurs compétences et qualifications.
中：正确。根据劳动法及平等权利法律，仅因为性别拒绝雇佣是违法的。所有求职者都应根据能力和资历平等对待。

C) ❌ C'est permis pour certaines entreprises
FR : Faux. La loi s'applique à toutes les entreprises, quelle que soit leur taille ou leur secteur.
中：错误。法律适用于所有企业，无论规模或行业。

D) ❌ C'est permis si l'employeur est homme
FR : Faux. Le sexe de l'employeur n'a aucune incidence : la discrimination est interdite.
中：错误。雇主的性别无关紧要，性别歧视都是禁止的。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "À l'école publique, qui peut porter des signes religieux très visibles ?",
    options: [
      "Tous les élèves",
      "Aucun élève",
      "Seulement les enseignants",
      "Les parents"
    ],
    answer: 1,
    explanation: `
A) ❌ Tous les élèves
FR : Faux. Les élèves du primaire et secondaire dans les écoles publiques ne peuvent pas porter de signes religieux ostensibles, conformément à la loi de 2004 sur la laïcité à l'école.
中：错误。根据2004年学校世俗法，公立学校的小学生和中学生不能佩戴明显的宗教标志。

B) ✅ Aucun élève
FR : Correct ! La loi interdit aux élèves de porter des signes ou tenues religieuses trop visibles afin de garantir la neutralité de l'école et le respect de la liberté de conscience de tous.
中：正确。法律禁止学生佩戴明显的宗教标志或服饰，以确保学校中立，并尊重所有人的信仰自由。

C) ❌ Seulement les enseignants
FR : Faux. Les enseignants, eux aussi, doivent respecter la neutralité religieuse dans le cadre de leur fonction.
中：错误。教师在履行职务时也必须遵守宗教中立原则。

D) ❌ Les parents
FR : Faux. La règle concerne les élèves dans l'établissement ; les parents ne sont pas concernés directement, mais ne peuvent pas non plus imposer de signes religieux aux élèves.
中：错误。此规定针对校内学生，家长不直接受限，但也不能强制学生佩戴宗教标志。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "À l'école publique, qui peut porter des signes religieux très visibles ?",
    options: [
      "Seuls les élèves peuvent en porter",
      "Seuls les enseignants peuvent en porter",
      "Ni les enseignants ni les élèves ne peuvent en porter",
      "Seuls les directeurs d'école peuvent en porter"
    ],
    answer: 2,
    explanation: `
A) ❌ Seuls les élèves peuvent en porter
FR : Faux. Les élèves ne peuvent pas porter de signes religieux visibles dans les écoles publiques.
中：错误。公立学校的学生不能佩戴明显宗教标志。

B) ❌ Seuls les enseignants peuvent en porter
FR : Faux. Les enseignants doivent respecter la neutralité religieuse dans leur rôle d'éducateur.
中：错误。教师在履行教育职责时必须遵守宗教中立原则。

C) ✅ Ni les enseignants ni les élèves ne peuvent en porter
FR : Correct ! La loi impose la neutralité dans les écoles publiques : ni les élèves ni les enseignants ne peuvent afficher de signes religieux visibles.
中：正确。法律要求公立学校保持中立：学生和教师都不得佩戴明显宗教标志。

D) ❌ Seuls les directeurs d'école peuvent en porter
FR : Faux. Les directeurs sont également soumis à la neutralité religieuse dans l'exercice de leurs fonctions.
中：错误。校长在执行职务时也必须遵守宗教中立原则。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Qui doit respecter le principe de neutralité religieuse dans une préfecture ?",
    options: [
      "Les agents publics",
      "Les citoyens seulement",
      "Les étrangers",
      "Les entreprises"
    ],
    answer: 0,
    explanation: `
A) ✅ Les agents publics
FR : Correct ! Les agents publics travaillant dans une préfecture doivent respecter la neutralité religieuse : ils ne doivent pas afficher leurs convictions religieuses pendant leur service et doivent traiter tous les usagers de manière impartiale, sans favoritisme ni discrimination.
中：正确。在省政府工作的公职人员必须遵守宗教中立原则：工作期间不得展示个人宗教信仰，并且要对所有使用公共服务的民众公平公正，不偏袒也不歧视。

B) ❌ Les citoyens seulement
FR : Faux. Les citoyens peuvent avoir leurs convictions religieuses personnelles, mais ce sont les agents publics qui doivent être neutres dans le cadre de leurs fonctions.
中：错误。公民可以有个人宗教信仰，但必须在职责范围内保持中立的是公职人员。

C) ❌ Les étrangers
FR : Faux. La neutralité religieuse ne s'applique pas spécifiquement aux étrangers, mais à ceux qui exercent une fonction publique.
中：错误。宗教中立原则并非针对外国人，而是针对执行公共职务的人。

D) ❌ Les entreprises
FR : Faux. Les entreprises privées ne sont pas soumises au principe de neutralité religieuse de la même manière que les services publics.
中：错误。私营企业不需像公共服务机构一样严格遵守宗教中立原则。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Madame X veut changer de religion. Elle doit :",
    options: [
      "Obtenir l'accord de son père",
      "Obtenir l'accord de son mari",
      "Pouvoir le faire si elle le souhaite",
      "Obtenir l'accord de son employeur"
    ],
    answer: 2,
    explanation: `
A) ❌ Obtenir l'accord de son père
FR : Faux. L'accord d'un parent n'est pas nécessaire ; chacun est libre de changer de religion.
中：错误。改变宗教信仰不需要父母同意，每个人都有自由选择的权利。

B) ❌ Obtenir l'accord de son mari
FR : Faux. Le mari n'a aucun droit légal d'empêcher quelqu'un de changer de religion.
中：错误。丈夫无权阻止配偶改变信仰。

C) ✅ Pouvoir le faire si elle le souhaite
FR : Correct ! En France, toute personne est libre de choisir ou de changer sa religion selon sa conscience, sans autorisation.
中：正确。在法国，每个人都有权根据自己的信仰自由选择或改变宗教，不需要获得任何许可。

D) ❌ Obtenir l'accord de son employeur
FR : Faux. L'employeur n'a aucun rôle dans la liberté religieuse.
中：错误。雇主在宗教自由方面没有权力。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Monsieur Y est élève dans une école publique et veut porter un symbole religieux très visible. Il peut :",
    options: [
      "Oui, toujours",
      "Non",
      "Seulement avec autorisation des parents",
      "Seulement les enseignants peuvent"
    ],
    answer: 1,
    explanation: `
A) ❌ Oui, toujours
FR : Faux. La Charte de la laïcité interdit le port de signes religieux ostensibles pour les élèves.
中：错误。学校世俗宪章禁止学生佩戴明显的宗教标志。

B) ✅ Non
FR : Correct ! Les élèves dans les écoles publiques ne peuvent pas porter de signes religieux très visibles afin de respecter la neutralité et la liberté de conscience de tous.
中：正确。公立学校的学生不得佩戴明显宗教标志，以维护中立和所有学生的信仰自由。

C) ❌ Seulement avec autorisation des parents
FR : Faux. Même avec l'autorisation des parents, cela reste interdit à l'école publique.
中：错误。即使有父母同意，公立学校仍禁止佩戴明显宗教标志。

D) ❌ Seulement les enseignants peuvent
FR : Faux. Les enseignants doivent également respecter la neutralité religieuse dans l'exercice de leurs fonctions.
中：错误。教师在履行职务时也必须保持宗教中立。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Monsieur Y veut prier à l'école pendant les cours. Que peut-il faire ?",
    options: [
      "Pratiquer librement dans la classe",
      "Ne pas prier pendant les cours",
      "Demander au directeur de changer l'emploi du temps",
      "Organiser un groupe de prière obligatoire"
    ],
    answer: 1,
    explanation: `
A) ❌ Pratiquer librement dans la classe
FR : Faux. Prier pendant les cours interrompt le fonctionnement de l'école et n'est pas autorisé.
中：错误。在课堂上祈祷会打断正常教学活动，因此不允许。

B) ✅ Ne pas prier pendant les cours
FR : Correct ! À l'école publique, la prière doit se faire en dehors des heures de cours et dans un cadre privé.
中：正确。在公立学校，祈祷必须在课外时间进行，并在私人空间内完成。

C) ❌ Demander au directeur de changer l'emploi du temps
FR : Faux. L'école n'est pas obligée d'adapter l'emploi du temps pour des pratiques religieuses personnelles.
中：错误。学校没有义务为个人宗教活动调整课程表。

D) ❌ Organiser un groupe de prière obligatoire
FR : Faux. Aucun élève ne peut imposer la prière aux autres.
中：错误。学生不能强制其他人参加祈祷。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Madame X ne croit en aucune religion.",
    options: [
      "Elle doit choisir une religion",
      "Elle a le droit de ne pas croire",
      "Elle doit demander l'accord de ses parents",
      "Elle doit cacher son absence de croyance"
    ],
    answer: 1,
    explanation: `
A) ❌ Elle doit choisir une religion
FR : Faux. La laïcité garantit la liberté de conscience, y compris le droit de ne pas croire.
中：错误。世俗原则保障信仰自由，包括不信仰的权利。

B) ✅ Elle a le droit de ne pas croire
FR : Correct ! Chaque personne est libre de croire ou de ne pas croire en toute conscience.
中：正确。每个人都可以自由选择信仰或不信仰。

C) ❌ Elle doit demander l'accord de ses parents
FR : Faux. Les convictions personnelles ne nécessitent pas l'autorisation des parents.
中：错误。个人信仰不需要父母同意。

D) ❌ Elle doit cacher son absence de croyance
FR : Faux. Il n'y a aucune obligation de cacher ses convictions ou son absence de croyance.
中：错误。不需要隐藏个人信仰或不信仰。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Un agent public dans une mairie doit :",
    options: [
      "Favoriser certaines religions",
      "Être neutre vis-à-vis des usagers",
      "Imposer sa religion",
      "Promouvoir sa croyance personnelle"
    ],
    answer: 1,
    explanation: `
A) ❌ Favoriser certaines religions
FR : Faux. L'État et ses agents doivent rester neutres.
中：错误。国家及其公职人员必须保持中立。

B) ✅ Être neutre vis-à-vis des usagers
FR : Correct ! La neutralité signifie que l'agent public ne favorise ni ne discrimine personne pour des raisons religieuses.
中：正确。中立意味着公职人员不得因宗教原因偏袒或歧视任何人。

C) ❌ Imposer sa religion
FR : Faux. Il est strictement interdit aux agents publics d'imposer leurs convictions.
中：错误。公职人员不得强制推行个人宗教信仰。

D) ❌ Promouvoir sa croyance personnelle
FR : Faux. Les agents publics doivent éviter toute promotion de leur religion dans le cadre de leur travail.
中：错误。公职人员在工作中不得宣传个人宗教信仰。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "À l'école publique, les enseignants :",
    options: [
      "Peuvent imposer leur religion aux élèves",
      "Doivent rester neutres",
      "Peuvent organiser des prières obligatoires",
      "Peuvent refuser les élèves qui ne croient pas"
    ],
    answer: 1,
    explanation: `
A) ❌ Peuvent imposer leur religion aux élèves
FR : Faux. Cela est strictement interdit par la laïcité.
中：错误。世俗原则严格禁止教师强制学生信仰宗教。

B) ✅ Doivent rester neutres
FR : Correct ! Les enseignants doivent respecter la neutralité religieuse, afin que tous les élèves puissent exercer leur liberté de conscience.
中：正确。教师必须保持宗教中立，确保所有学生都能自由选择信仰或不信仰。

C) ❌ Peuvent organiser des prières obligatoires
FR : Faux. Les prières obligatoires sont interdites à l'école publique.
中：错误。公立学校禁止强制性祈祷。

D) ❌ Peuvent refuser les élèves qui ne croient pas
FR : Faux. Aucun élève ne peut être exclu de l'école publique pour ses convictions ou non-croyances.
中：错误。学生不能因信仰或不信仰而被公立学校拒收。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Les parents de Madame X veulent que leur fille ne porte pas de symbole religieux à l'école. Que dit la loi ?",
    options: [
      "L'école publique peut l'interdire",
      "Les parents imposent la loi",
      "La fille peut le porter librement",
      "Seul le maire décide"
    ],
    answer: 0,
    explanation: `
A) ✅ L'école publique peut l'interdire
FR : Correct ! Dans les écoles publiques, le principe de laïcité interdit le port de signes religieux très visibles par les élèves. Les parents ne peuvent pas contourner cette règle.
中：正确。公立学校遵循世俗原则，禁止学生佩戴显著的宗教标志。家长不能规避这条规定。

B) ❌ Les parents imposent la loi
FR : Faux. Les parents n'ont pas le pouvoir d'imposer la loi à l'école publique.
中：错误。家长不能在公立学校强制执行法律。

C) ❌ La fille peut le porter librement
FR : Faux. Le port de signes religieux visibles est interdit dans les écoles publiques.
中：错误。公立学校禁止佩戴明显的宗教标志。

D) ❌ Seul le maire décide
FR : Faux. La loi s'applique à toutes les écoles publiques, pas seulement sur décision du maire.
中：错误。法律适用于所有公立学校，不由市长决定。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Un employeur refuse d'embaucher des femmes. Que dit la loi ?",
    options: [
      "C'est légal",
      "C'est interdit",
      "C'est autorisé si l'entreprise est privée",
      "C'est permis selon l'âge"
    ],
    answer: 1,
    explanation: `
A) ❌ C'est légal
FR : Faux. La loi interdit toute discrimination basée sur le sexe dans l'emploi.
中：错误。法律禁止在招聘中基于性别的歧视。

B) ✅ C'est interdit
FR : Correct ! Refuser d'embaucher une femme simplement à cause de son sexe constitue une discrimination interdite par la loi.
中：正确。单纯因为性别拒绝招聘属于法律禁止的歧视。

C) ❌ C'est autorisé si l'entreprise est privée
FR : Faux. La loi sur la non-discrimination s'applique également aux entreprises privées.
中：错误。非歧视法律同样适用于私营企业。

D) ❌ C'est permis selon l'âge
FR : Faux. L'âge n'autorise pas la discrimination basée sur le sexe.
中：错误。年龄因素不能成为性别歧视的理由。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Monsieur X et Madame Y ont des revenus différents. L'égalité signifie :",
    options: [
      "Tous doivent avoir le même revenu",
      "Tous ont les mêmes droits",
      "Les hommes ont plus de droits",
      "Les riches ont plus de droits"
    ],
    answer: 1,
    explanation: `
A) ❌ Tous doivent avoir le même revenu
FR : Faux. L'égalité ne signifie pas uniformité des revenus.
中：错误。平等并不意味着收入必须完全相同。

B) ✅ Tous ont les mêmes droits
FR : Correct ! L'égalité républicaine signifie que tous les citoyens ont les mêmes droits devant la loi, indépendamment de leur revenu.
中：正确。公民平等意味着所有人在法律面前拥有同等权利，与收入无关。

C) ❌ Les hommes ont plus de droits
FR : Faux. La loi garantit l'égalité entre hommes et femmes.
中：错误。法律保障男女平等。

D) ❌ Les riches ont plus de droits
FR : Faux. Les droits ne dépendent pas de la richesse.
中：错误。权利不以财富多少而定。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Un ministre peut-il insulter quelqu'un ?",
    options: [
      "Oui, parce qu'il est ministre",
      "Non, seulement le président peut le faire",
      "Non, car tous les citoyens sont égaux",
      "Oui, mais seulement envers ses subordonnés"
    ],
    answer: 2,
    explanation: `
A) ❌ Oui, parce qu'il est ministre
FR : Faux. Être ministre ne donne aucun droit de violer la loi ou d'insulter quelqu'un.
中：错误。担任部长不赋予违法或侮辱他人的权利。

B) ❌ Non, seulement le président peut le faire
FR : Faux. Même le président n'a pas le droit d'insulter quelqu'un légalement.
中：错误。即便是总统，也无权合法侮辱他人。

C) ✅ Non, car tous les citoyens sont égaux
FR : Correct ! Tous les citoyens sont égaux devant la loi, y compris les ministres ; personne n'a le droit d'insulter légalement quelqu'un.
中：正确。所有人在法律面前平等，包括部长在内，没有人可以合法地侮辱他人。

D) ❌ Oui, mais seulement envers ses subordonnés
FR : Faux. Même envers subordonnés, insulter quelqu'un constitue une violation des droits et peut être sanctionné.
中：错误。即便对下属，侮辱行为也是违法的，会受到处罚。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Madame X veut exprimer ses idées dans un journal. Elle doit :",
    options: [
      "Tout dire sans limite",
      "Respecter la loi",
      "Harceler les autres",
      "Éviter de respecter les droits des autres"
    ],
    answer: 1,
    explanation: `
A) ❌ Tout dire sans limite
FR : Faux. La liberté d'expression doit être exercée dans le respect de la loi ; on ne peut pas diffamer ou harceler.
中：错误。言论自由必须遵守法律，不能进行诽谤或骚扰。

B) ✅ Respecter la loi
FR : Correct ! La liberté d'expression permet d'exprimer ses idées, mais toujours dans le cadre légal.
中：正确。言论自由允许表达观点，但必须在法律框架内进行。

C) ❌ Harceler les autres
FR : Faux. Harcèlement n'est pas protégé par la liberté d'expression.
中：错误。骚扰他人不受言论自由保护。

D) ❌ Éviter de respecter les droits des autres
FR : Faux. La liberté d'expression ne permet pas de violer les droits d'autrui.
中：错误。言论自由不能侵犯他人权利。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Monsieur Y veut voyager librement en France. La liberté de circulation signifie :",
    options: [
      "Pouvoir voyager uniquement à l'étranger",
      "Pouvoir se déplacer librement sur le territoire",
      "Pouvoir choisir ses impôts",
      "Pouvoir s'absenter de l'école"
    ],
    answer: 1,
    explanation: `
a) ❌ Pouvoir voyager uniquement à l'étranger
FR : Faux. La liberté de circulation concerne les déplacements sur le territoire, et non uniquement à l'étranger.
中：错误。行动自由指在本国境内的自由流动，而不是只在国外旅行。

b) ✅ Pouvoir se déplacer librement sur le territoire
FR : Correct. La liberté de circulation garantit le droit de se déplacer librement sur le territoire.
中：正确。行动自由保障个人在领土范围内自由出行的权利。

c) ❌ Pouvoir choisir ses impôts
FR : Faux. La liberté de circulation n'a aucun lien avec le choix des impôts.
中：错误。行动自由与选择税收无关。

d) ❌ Pouvoir s'absenter de l'école
FR : Faux. La liberté de circulation ne dispense pas des obligations légales, comme la scolarité.
中：错误。行动自由不能免除法律义务，例如接受义务教育。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Une personne veut rejoindre une association culturelle. La liberté d'association lui permet :",
    options: [
      "De la créer ou la rejoindre",
      "D'imposer des adhérents",
      "D'obliger tout le monde à adhérer",
      "De créer des impôts"
    ],
    answer: 0,
    explanation: `
a) ✅ De la créer ou la rejoindre
FR : Correct. La liberté d'association permet de créer une association ou d'en devenir membre.
中：正确。结社自由允许个人创建协会或加入协会。

b) ❌ D'imposer des adhérents
FR : Faux. La liberté d'association ne permet pas d'imposer des membres à une association.
中：错误。结社自由不允许强制指定或强行加入成员。

c) ❌ D'obliger tout le monde à adhérer
FR : Faux. Personne ne peut obliger tout le monde à adhérer à une association.
中：错误。不能强迫所有人加入某个协会。

d) ❌ De créer des impôts
FR : Faux. La liberté d'association n'a aucun lien avec la création d'impôts.
中：错误。结社自由与征税无关。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Madame X voit un drapeau bleu-blanc-rouge à l'école. Ce drapeau représente :",
    options: [
      "La République française",
      "L'Union européenne",
      "La monarchie",
      "Napoléon"
    ],
    answer: 0,
    explanation: `
a) ✅ La République française
FR : Correct. Le drapeau bleu-blanc-rouge est le drapeau national de la République française.
中：正确。蓝白红三色旗是法国共和国的国旗。

b) ❌ L'Union européenne
FR : Faux. Le drapeau de l'Union européenne est bleu avec des étoiles jaunes.
中：错误。欧盟旗是蓝底黄星，与蓝白红三色旗不同。

c) ❌ La monarchie
FR : Faux. La monarchie n'a pas de drapeau officiel actuel en France.
中：错误。法国目前不是君主制，君主制没有官方国旗。

d) ❌ Napoléon
FR : Faux. Le drapeau bleu-blanc-rouge représente la République, pas Napoléon.
中：错误。蓝白红三色旗代表共和国，而非拿破仑个人。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Un enfant veut exprimer ses idées à l'école. Il peut :",
    options: [
      "Harceler ses camarades",
      "Respecter la loi",
      "Dire tout ce qu'il veut sans limite",
      "Ignorer les droits des autres"
    ],
    answer: 1,
    explanation: `
a) ❌ Harceler ses camarades
FR : Faux. Le harcèlement est interdit et ne fait pas partie de la liberté d'expression.
中：错误。骚扰同学是禁止的，不属于言论自由范围。

b) ✅ Respecter la loi
FR : Correct. La liberté d'expression existe, mais elle doit respecter la loi et les droits des autres.
中：正确。言论自由存在，但必须遵守法律并尊重他人的权利。

c) ❌ Dire tout ce qu'il veut sans limite
FR : Faux. La liberté d'expression n'est pas absolue et connaît des limites.
中：错误。言论自由不是无限的，有法律和规则限制。

d) ❌ Ignorer les droits des autres
FR : Faux. L'expression des idées doit respecter les droits d'autrui.
中：错误。表达观点必须尊重他人的权利。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Un agent public porte un symbole religieux visible pendant son service. Que dit le principe de neutralité ?",
    options: [
      "C'est autorisé",
      "Ce n'est pas autorisé",
      "Autorisé selon la religion",
      "Autorisé avec l'accord des usagers"
    ],
    answer: 1,
    explanation: `
a) ❌ C'est autorisé
FR : Faux. Le principe de neutralité interdit les signes religieux visibles pour les agents publics en service.
中：错误。中立原则禁止公职人员在工作时佩戴明显宗教标志。

b) ✅ Ce n'est pas autorisé
FR : Correct. Le principe de neutralité impose que les agents publics ne portent pas de signes religieux visibles pendant leur service.
中：正确。中立原则要求公职人员在工作期间不得佩戴明显宗教标志。

c) ❌ Autorisé selon la religion
FR : Faux. La neutralité ne dépend pas de la religion.
中：错误。中立原则不因宗教不同而有不同规则。

d) ❌ Autorisé avec l'accord des usagers
FR : Faux. Même avec l'accord des usagers, la neutralité interdit les signes religieux visibles.
中：错误。即使使用者同意，中立原则仍禁止。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Madame X ne croit en aucune religion. La loi française :",
    options: [
      "L'oblige à croire",
      "Respecte son choix",
      "L'oblige à se déclarer",
      "L'interdit"
    ],
    answer: 1,
    explanation: `
a) ❌ L'oblige à croire
FR : Faux. La loi ne peut pas obliger une personne à croire.
中：错误。法律不能强迫某人信仰宗教。

b) ✅ Respecte son choix
FR : Correct. La liberté de conscience permet de ne croire en aucune religion.
中：正确。良心自由允许不信任何宗教，法律尊重这一选择。

c) ❌ L'oblige à se déclarer
FR : Faux. La loi ne demande pas à une personne de déclarer son absence de croyance.
中：错误。法律不要求人们声明自己不信教。

d) ❌ L'interdit
FR : Faux. La loi ne interdit pas l'athéisme ou l'absence de religion.
中：错误。法律不禁止无神论或不信宗教。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Une mairie refuse un service à cause d'une croyance. Cette situation est :",
    options: [
      "Conforme",
      "Discriminatoire",
      "Normale",
      "Autorisée"
    ],
    answer: 1,
    explanation: `
a) ❌ Conforme
FR : Faux. Refuser un service à cause d'une croyance est contraire au principe d'égalité.
中：错误。因宗教信仰拒绝提供服务违反平等原则。

b) ✅ Discriminatoire
FR : Correct. Refuser un service en raison d'une croyance est une discrimination.
中：正确。因信仰而拒绝服务属于歧视行为。

c) ❌ Normale
FR : Faux. Ce comportement n'est pas normal dans un service public.
中：错误。在公共服务中这种行为不正常。

d) ❌ Autorisé
FR : Faux. Cela n'est pas autorisé, car c'est discriminatoire.
中：错误。这是不允许的，因为属于歧视。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Un citoyen refuse de respecter une loi pour des raisons personnelles. Que dit la République ?",
    options: [
      "C'est acceptable",
      "La loi s'impose à tous",
      "Cela dépend de la religion",
      "Cela dépend de l'âge"
    ],
    answer: 1,
    explanation: `
a) ❌ C'est acceptable
FR : Faux. La République impose le respect de la loi à tous.
中：错误。共和国要求所有人遵守法律。

b) ✅ La loi s'impose à tous
FR : Correct. La loi s'applique à tous, sans exception.
中：正确。法律适用于所有人，没有例外。

c) ❌ Cela dépend de la religion
FR : Faux. Les croyances religieuses ne permettent pas d'échapper à la loi.
中：错误。宗教信仰不能成为不遵守法律的理由。

d) ❌ Cela dépend de l'âge
FR : Faux. La loi s'applique à tous, quel que soit l'âge, selon les règles.
中：错误。法律适用于所有人，不因年龄而改变（按法律规定执行）
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Une personne exprime une opinion sans insulter ni discriminer. Elle exerce :",
    options: [
      "Sa liberté d'expression",
      "Une infraction",
      "Une provocation",
      "Une discrimination"
    ],
    answer: 0,
    explanation: `
a) ✅ Sa liberté d'expression
FR : Correct. Exprimer une opinion de manière respectueuse relève de la liberté d'expression.
中：正确。以尊重方式表达观点属于言论自由。

b) ❌ Une infraction
FR : Faux. Si l'expression respecte la loi, ce n'est pas une infraction.
中：错误。只要符合法律，这不是违法行为。

c) ❌ Une provocation
FR : Faux. Il n'y a pas de provocation si l'expression est respectueuse.
中：错误。如果表达方式尊重他人，不构成挑衅。

d) ❌ Une discrimination
FR : Faux. Sans insulte ni discrimination, ce n'est pas une discrimination.
中：错误。没有侮辱或歧视就不属于歧视行为。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "简单",
    question: "Un employeur traite différemment deux salariés à cause de leur sexe. Cette situation est :",
    options: [
      "Légale",
      "Interdite",
      "Traditionnelle",
      "Acceptable"
    ],
    answer: 1,
    explanation: `
a) ❌ Légale
FR : Faux. La discrimination au travail selon le sexe est interdite.
中：错误。职场中因性别差别对待属于非法歧视。

b) ✅ Interdite
FR : Correct. La discrimination selon le sexe est interdite par la loi.
中：正确。法律禁止基于性别的歧视。

c) ❌ Traditionnelle
FR : Faux. La tradition ne justifie pas une discrimination.
中：错误。传统不能成为歧视的理由。

d) ❌ Acceptable
FR : Faux. C'est inacceptable car c'est discriminatoire.
中：错误。这是不可接受的，因为属于歧视。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Un citoyen respecte les lois et les autres. Il agit selon :",
    options: [
      "Les valeurs républicaines",
      "Ses intérêts",
      "Sa religion",
      "Son origine"
    ],
    answer: 0,
    explanation: `
a) ✅ Les valeurs républicaines
FR : Correct. Respecter les lois et les autres correspond aux valeurs républicaines.
中：正确。遵守法律并尊重他人符合共和价值观。

b) ❌ Ses intérêts
FR : Faux. Le respect des lois ne dépend pas uniquement des intérêts personnels.
中：错误。遵守法律不只是出于个人利益。

c) ❌ Sa religion
FR : Faux. Le respect des lois est indépendant de la religion.
中：错误。遵守法律与宗教无关。

d) ❌ Son origine
FR : Faux. Le respect des lois n'est pas basé sur l'origine.
中：错误。遵守法律不取决于出身。
    `.trim()
  },

  // ==================== Laïcité ====================
  {
    category: "Laïcité",
    难度: "简单",
    question: "Une personne peut-elle changer librement de religion ?",
    options: [
      "Non",
      "Oui",
      "Seulement avec autorisation",
      "Seulement à l'âge adulte"
    ],
    answer: 1,
    explanation: `
A) ❌ Non
FR : Faux. En France, la liberté de conscience garantit à chacun le droit de changer de religion ou de conviction.
中：错误。在法国，良心自由保障每个人有改变宗教或信仰的权利。

B) ✅ Oui
FR : Correct ! En France, toute personne est libre de choisir, de changer ou d'abandonner une religion, conformément au principe de liberté de conscience.
中：正确。在法国，每个人都可以自由选择、改变或不信仰任何宗教，这是良心自由的一部分。

C) ❌ Seulement avec autorisation
FR : Faux. Aucun accord administratif ou religieux n'est nécessaire pour changer de religion.
中：错误。改变宗教不需要任何行政或宗教方面的许可。

D) ❌ Seulement à l'âge adulte
FR : Faux. La liberté de conscience existe à tout âge.
中：错误。良心自由不受年龄限制。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "简单",
    question: "Une personne peut-elle changer librement de religion ?",
    options: [
      "Seuls les hommes peuvent",
      "Seuls ceux qui paient des impôts peuvent",
      "Seulement avec le consentement des parents",
      "Tant que l'on le souhaite"
    ],
    answer: 3,
    explanation: `
A) ❌ Seuls les hommes peuvent
FR : Faux. La liberté de religion s'applique aussi bien aux femmes qu'aux hommes.
中：错误。宗教自由同样适用于女性和男性。

B) ❌ Seuls ceux qui paient des impôts peuvent
FR : Faux. Le paiement des impôts n'a aucun lien avec la liberté de religion.
中：错误。是否纳税与宗教自由无关。

C) ❌ Seulement avec le consentement des parents
FR : Faux. En France, la liberté de conscience est un droit fondamental de la personne.
中：错误。在法国，良心自由是个人的基本权利。

D) ✅ Tant que l'on le souhaite
FR : Correct ! Chacun est libre de changer de religion ou de conviction à tout moment de sa vie.
中：正确。每个人都可以在任何时候自由改变自己的宗教或信仰。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "中等",
    question: "\"La France est une République indivisible, ..., démocratique et sociale\". Complétez cette phrase extraite de l'article 1er de la Constitution :",
    options: [
      "Laïque",
      "Monarchique",
      "Sociale",
      "Populaire"
    ],
    answer: 0,
    explanation: `
A) ✅ Laïque
FR : Correct ! La laïcité est un principe fondamental de la République française, inscrit dans la Constitution.
中：正确。世俗性是法国共和国的基本原则之一，并写入宪法。

B) ❌ Monarchique
FR : Faux. La France n'est pas une monarchie mais une république.
中：错误。法国不是君主制国家。

C) ❌ Sociale
FR : Faux. Le mot « sociale » est déjà présent dans la phrase.
中：错误。"社会的"已经包含在原句中。

D) ❌ Populaire
FR : Faux. Ce terme ne figure pas dans l'article 1er de la Constitution.
中：错误。该词不在宪法第一条中。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "简单",
    question: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
    options: [
      "1905",
      "1789",
      "1958",
      "1881"
    ],
    answer: 0,
    explanation: `
A) ✅ 1905
FR : Correct ! La loi de 1905 fonde officiellement la séparation des Églises et de l'État en France.
中：正确。1905 年法律正式确立了政教分离原则。

B) ❌ 1789
FR : Faux. 1789 correspond à la Révolution française.
中：错误。1789 年是法国大革命时期。

C) ❌ 1958
FR : Faux. 1958 correspond à la Constitution de la Ve République.
中：错误。1958 年是第五共和国宪法颁布年。

D) ❌ 1881
FR : Faux. Cette date concerne les lois sur la liberté de la presse.
中：错误。1881 年与新闻自由法有关。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "中等",
    question: "Que permet le principe de laïcité ?",
    options: [
      "De choisir sa religion à l'école",
      "D'assurer la neutralité de l'État",
      "De favoriser une religion",
      "De pratiquer la religion à l'école"
    ],
    answer: 1,
    explanation: `
A) ❌ De choisir sa religion à l'école
FR : Faux. L'école publique doit rester neutre sur le plan religieux.
中：错误。公立学校必须保持宗教中立。

B) ✅ D'assurer la neutralité de l'État
FR : Correct ! La laïcité garantit que l'État ne favorise ni ne combat aucune religion.
中：正确。世俗原则确保国家对所有宗教保持中立。

C) ❌ De favoriser une religion
FR : Faux. La laïcité interdit toute préférence religieuse de l'État.
中：错误。世俗原则禁止国家偏向某一宗教。

D) ❌ De pratiquer la religion à l'école
FR : Faux. Les pratiques religieuses n'ont pas leur place dans l'école publique.
中：错误。宗教活动不应出现在公立学校中。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "简单",
    question: "Que permet le principe de laïcité ?",
    options: [
      "La liberté de conscience",
      "L'obligation de pratiquer une religion",
      "L'interdiction de toutes les religions",
      "Le versement d'allocations aux croyants"
    ],
    answer: 0,
    explanation: `
A) ✅ La liberté de conscience
FR : Correct ! Le principe de la laïcité garantit la liberté de conscience. Cela signifie que chaque personne est libre de croire, de ne pas croire, de changer de religion ou de conviction, sans pression de l'État ou d'une religion.
中：正确。世俗原则保障良心自由，也就是每个人都有信仰、不信仰或改变宗教与思想信念的自由，不受国家或宗教的强制。

B) ❌ L'obligation de pratiquer une religion
FR : Faux. La laïcité s'oppose à toute obligation religieuse et protège le droit de ne pas pratiquer de religion.
中：错误。世俗原则反对任何宗教义务，保护不进行宗教实践的权利。

C) ❌ L'interdiction de toutes les religions
FR : Faux. La laïcité ne supprime pas les religions : elle garantit leur liberté dans le respect de la loi et de l'ordre public.
中：错误。世俗原则并不禁止宗教，而是在法律和公共秩序范围内保障宗教自由。

D) ❌ Le versement d'allocations aux croyants
FR : Faux. En République française, les aides sociales ne dépendent pas de la religion ou des croyances.
中：错误。法国的社会福利与个人是否信仰宗教无关。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "简单",
    question: "Quel droit est garanti par la laïcité ?",
    options: [
      "Le droit de changer de religion",
      "Le droit de ne pas payer d'impôts",
      "Le droit de ne pas respecter la loi",
      "Le droit de travailler moins"
    ],
    answer: 0,
    explanation: `
A) ✅ Le droit de changer de religion
FR : Correct ! La laïcité garantit la liberté de conscience, y compris le droit de changer de religion.
中：正确。世俗原则保障改变宗教信仰的权利。

B) ❌ Le droit de ne pas payer d'impôts
FR : Faux. La religion n'exonère pas des obligations légales.
中：错误。宗教信仰不能免除纳税义务。

C) ❌ Le droit de ne pas respecter la loi
FR : Faux. La loi s'impose à tous.
中：错误。法律对所有人都具有约束力。

D) ❌ Le droit de travailler moins
FR : Faux. Ce droit n'est pas lié à la laïcité.
中：错误。该权利与世俗原则无关。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "中等",
    question: "Pourquoi le principe de laïcité doit-il être respecté à l'école ?",
    options: [
      "Pour imposer la religion de l'État",
      "Pour garantir que les élèves soient traités équitablement",
      "Pour choisir la religion des enfants",
      "Pour enseigner une seule religion"
    ],
    answer: 1,
    explanation: `
A) ❌ Pour imposer la religion de l'État
FR : Faux. L'État n'impose aucune religion.
中：错误。国家不强制任何宗教。

B) ✅ Pour garantir que les élèves soient traités équitablement
FR : Correct ! La laïcité permet d'assurer l'égalité et le respect de tous les élèves, quelles que soient leurs convictions.
中：正确。世俗原则保证所有学生不因宗教信仰不同而受到不公平对待。

C) ❌ Pour choisir la religion des enfants
FR : Faux. L'école n'a pas ce rôle.
中：错误。学校无权决定儿童的宗教。

D) ❌ Pour enseigner une seule religion
FR : Faux. L'enseignement religieux n'existe pas dans l'école publique.
中：错误。公立学校不教授宗教。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "简单",
    question: "Qu'est-ce que la laïcité ?",
    options: [
      "La liberté de religion et la neutralité de l'État",
      "L'obligation d'être religieux",
      "La promotion d'une religion",
      "L'interdiction des fêtes religieuses"
    ],
    answer: 0,
    explanation: `
A) ✅ La liberté de religion et la neutralité de l'État
FR : Correct ! La laïcité garantit à la fois la liberté de conscience et la neutralité de l'État vis-à-vis des religions.
中：正确。世俗原则既保障宗教自由，也确保国家保持中立。

B) ❌ L'obligation d'être religieux
FR : Faux. La laïcité n'impose aucune croyance.
中：错误。世俗原则不强制信仰。

C) ❌ La promotion d'une religion
FR : Faux. L'État ne favorise aucune religion.
中：错误。国家不推广任何宗教。

D) ❌ L'interdiction des fêtes religieuses
FR : Faux. Les fêtes religieuses peuvent être célébrées dans le cadre privé.
中：错误。宗教节日可以在私人领域庆祝。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "中等",
    question: "Concernant la pratique de la religion, quelle proposition est correcte ?",
    options: [
      "L'État impose une religion",
      "Chacun peut pratiquer sa religion librement",
      "Les enseignants doivent imposer leur religion",
      "Les élèves ne peuvent pratiquer aucune religion"
    ],
    answer: 1,
    explanation: `
A) ❌ L'État impose une religion
FR : Faux. La République française est laïque : l'État ne favorise aucune religion et n'en impose aucune à ses citoyens.
中：错误。法国是世俗国家，政府不偏袒任何宗教，也不强制公民信仰某种宗教。

B) ✅ Chacun peut pratiquer sa religion librement
FR : Correct ! La liberté de religion est un droit fondamental. Chacun peut croire, ne pas croire, changer de religion et pratiquer sa foi dans le respect des lois et de l'ordre public.
中：正确。宗教自由是基本权利，每个人都可以信仰、自由选择或改变宗教，并在法律和公共秩序允许的范围内进行宗教活动。

C) ❌ Les enseignants doivent imposer leur religion
FR : Faux. Dans les écoles publiques, les enseignants doivent respecter la neutralité religieuse et ne pas imposer leurs convictions aux élèves.
中：错误。公立学校教师必须保持宗教中立，不得向学生灌输自己的宗教信仰。

D) ❌ Les élèves ne peuvent pratiquer aucune religion
FR : Faux. Les élèves ont le droit de pratiquer leur religion à titre privé, mais les activités religieuses ne peuvent pas perturber le fonctionnement de l'école publique.
中：错误。学生可以私下进行宗教活动，但不能影响公立学校的正常运行。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "中等",
    question: "Pourquoi le principe de laïcité doit-il être respecté à l'école ?",
    options: [
      "Pour imposer la religion",
      "Pour garantir la liberté de conscience",
      "Pour choisir la religion des enfants",
      "Pour enseigner une seule religion"
    ],
    answer: 1,
    explanation: `
A) ❌ Pour imposer la religion
FR : Faux. La laïcité interdit l'imposition de toute religion dans les écoles publiques.
中：错误。世俗原则禁止在公立学校强制灌输任何宗教。

B) ✅ Pour garantir la liberté de conscience
FR : Correct ! Le principe de laïcité à l'école garantit que chaque élève puisse avoir ou ne pas avoir de religion, et que personne ne subisse de pression ou de discrimination religieuse. Cela permet un environnement scolaire neutre, respectueux de tous les élèves.
中：正确。学校遵守世俗原则可以保证每个学生可以有宗教信仰或不信仰宗教，同时没人受到宗教压力或歧视。这确保学校环境中立且尊重所有学生。

C) ❌ Pour choisir la religion des enfants
FR : Faux. L'État ou l'école ne choisit pas la religion des élèves ; c'est un droit personnel et familial.
中：错误。国家或学校不能替孩子选择宗教信仰，这是个人和家庭的权利。

D) ❌ Pour enseigner une seule religion
FR : Faux. La laïcité impose la neutralité religieuse et interdit d'enseigner une religion spécifique dans l'école publique.
中：错误。世俗原则要求宗教中立，禁止在公立学校教授某一特定宗教。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "中等",
    question: "Selon le principe de laïcité, que signifie la neutralité de l'État ?",
    options: [
      "Favoriser certaines religions",
      "Ne pas favoriser ni discriminer aucune religion",
      "Imposer la religion d'État",
      "Interdire toutes les religions"
    ],
    answer: 1,
    explanation: `
A) ❌ Favoriser certaines religions
FR : Faux. La neutralité de l'État interdit de favoriser une religion particulière.
中：错误。国家中立原则禁止偏袒任何特定宗教。

B) ✅ Ne pas favoriser ni discriminer aucune religion
FR : Correct ! La neutralité de l'État signifie qu'il doit rester impartial vis-à-vis de toutes les religions. L'État ne soutient aucune religion et ne discrimine aucune croyance, permettant à chacun de pratiquer sa foi librement ou de ne pas en avoir.
中：正确。国家中立意味着对所有宗教保持公正：既不支持任何宗教，也不歧视任何信仰，使每个人都可以自由信仰或选择不信仰。

C) ❌ Imposer la religion d'État
FR : Faux. La laïcité interdit l'imposition de toute religion par l'État.
中：错误。世俗原则禁止国家强制推行任何宗教。

D) ❌ Interdire toutes les religions
FR : Faux. La neutralité ne signifie pas interdire la religion ; chacun reste libre de croire ou de ne pas croire.
中：错误。中立并不等于禁止宗教，每个人仍可自由选择信仰或不信仰。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "简单",
    question: "La laïcité impose-t-elle aux agents publics d'être neutres vis-à-vis des usagers ?",
    options: [
      "Oui",
      "Non",
      "Seulement aux enseignants",
      "Seulement aux policiers"
    ],
    answer: 0,
    explanation: `
A) ✅ Oui
FR : Correct ! La laïcité impose aux agents publics, comme les fonctionnaires ou les employés de services publics, d'être neutres vis-à-vis des usagers. Cela signifie qu'ils ne doivent pas afficher leurs convictions religieuses et doivent traiter tous les citoyens de manière égale et impartiale.
中：正确。世俗原则要求公职人员（如公务员或公共服务工作人员）对使用者保持中立，即不得展示个人宗教信仰，并且必须平等、公正地对待所有公民。

B) ❌ Non
FR : Faux. La neutralité est obligatoire pour les agents publics dans l'exercice de leurs fonctions.
中：错误。公职人员在履行职务时必须保持中立。

C) ❌ Seulement aux enseignants
FR : Faux. Tous les agents publics doivent respecter cette neutralité, pas seulement les enseignants.
中：错误。所有公职人员都必须遵守中立原则，不仅仅是教师。

D) ❌ Seulement aux policiers
FR : Faux. La neutralité s'applique à tous les agents publics, pas uniquement aux policiers.
中：错误。中立原则适用于所有公职人员，而不仅仅是警察。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "中等",
    question: "Que garantit le principe de laïcité ?",
    options: [
      "Liberté de conscience",
      "Obligation religieuse",
      "Favoritisme religieux",
      "Imposition d'une religion"
    ],
    answer: 0,
    explanation: `
A) ✅ Liberté de conscience
FR : Correct ! La laïcité garantit la liberté de conscience, c'est-à-dire le droit pour chacun de croire ou de ne pas croire, sans pression ni discrimination de la part de l'État ou d'autres citoyens.
中：正确。世俗原则保障信仰自由，即每个人都可以选择信仰或不信仰，不受国家或他人的压力与歧视。

B) ❌ Obligation religieuse
FR : Faux. La laïcité interdit d'imposer une religion.
中：错误。世俗原则禁止强制宗教信仰。

C) ❌ Favoritisme religieux
FR : Faux. La laïcité impose la neutralité de l'État, donc aucun favoritisme religieux n'est permis.
中：错误。世俗原则要求国家中立，因此不允许任何宗教偏袒。

D) ❌ Imposition d'une religion
FR : Faux. La laïcité interdit d'imposer une religion à quiconque.
中：错误。世俗原则禁止向任何人强制灌输宗教信仰。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "简单",
    question: "La laïcité dans la vie quotidienne signifie que :",
    options: [
      "Personne n'a le droit de croire en une religion",
      "Tout le monde est obligé de croire en une religion",
      "Les personnes qui travaillent sont obligées de croire en une religion",
      "Chacun est libre de croire ou de ne pas croire"
    ],
    answer: 3,
    explanation: `
A) ❌ Personne n'a le droit de croire en une religion
FR : Faux. La laïcité ne restreint pas le droit de croire, elle garantit la liberté de conscience.
中：错误。世俗原则不限制信仰自由，而是保障信仰自由。

B) ❌ Tout le monde est obligé de croire en une religion
FR : Faux. La laïcité interdit toute obligation religieuse.
中：错误。世俗原则禁止任何宗教强制行为。

C) ❌ Les personnes qui travaillent sont obligées de croire en une religion
FR : Faux. Les adultes ou travailleurs ne sont soumis à aucune obligation religieuse.
中：错误。成年人或工作者不受任何宗教义务约束。

D) ✅ Chacun est libre de croire ou de ne pas croire
FR : Correct ! La laïcité garantit que chaque personne peut choisir librement sa foi ou l'absence de foi, dans le respect des lois et des droits d'autrui.
中：正确。世俗原则保障每个人可以自由选择信仰或不信仰，同时尊重法律与他人的权利。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "简单",
    question: "Que représente la laïcité ?",
    options: [
      "La neutralité de l'État et la liberté de conscience",
      "L'obligation d'être religieux",
      "La promotion d'une religion",
      "L'interdiction des fêtes religieuses"
    ],
    answer: 0,
    explanation: `
A) ✅ La neutralité de l'État et la liberté de conscience
FR : Correct ! La laïcité signifie que l'État est neutre face aux religions et que chaque individu dispose de la liberté de conscience, garantissant ainsi l'égalité et le respect de toutes les convictions.
中：正确。世俗原则意味着国家对宗教保持中立，同时每个人拥有信仰自由，保障平等并尊重所有信仰。

B) ❌ L'obligation d'être religieux
FR : Faux. La laïcité interdit toute obligation religieuse.
中：错误。世俗原则禁止任何宗教义务。

C) ❌ La promotion d'une religion
FR : Faux. L'État ne doit favoriser aucune religion.
中：错误。国家不得偏袒或推广任何宗教。

D) ❌ L'interdiction des fêtes religieuses
FR : Faux. La laïcité ne supprime pas les fêtes religieuses privées ou familiales ; elle assure simplement la neutralité dans les institutions publiques.
中：错误。世俗原则不禁止私人或家庭宗教节日，只是保证公共机构中立。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "简单",
    question: "La France reconnaît-elle une religion officielle ?",
    options: [
      "Oui",
      "Non",
      "Seulement le catholicisme",
      "Selon les régions"
    ],
    answer: 1,
    explanation: `
a) ❌ Oui
FR : Faux. La France est un État laïque et ne reconnaît aucune religion officielle.
中：错误。法国是世俗国家，不承认任何官方宗教。

b) ✅ Non
FR : Correct. La France ne reconnaît aucune religion officielle.
中：正确。法国不承认官方宗教。

c) ❌ Seulement le catholicisme
FR : Faux. Le catholicisme n'est pas une religion officielle en France.
中：错误。天主教不是法国的官方宗教。

d) ❌ Selon les régions
FR : Faux. La laïcité s'applique sur tout le territoire national, sans distinction régionale.
中：错误。世俗原则在全国范围内统一适用，不因地区而异。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "简单",
    question: "Le principe de neutralité s'applique principalement :",
    options: [
      "Aux agents publics",
      "Aux élèves uniquement",
      "Aux associations privées",
      "Aux familles"
    ],
    answer: 0,
    explanation: `
a) ✅ Aux agents publics
FR : Correct. Le principe de neutralité s'applique aux agents publics dans l'exercice de leurs fonctions.
中：正确。中立原则主要适用于公职人员在履行职务时。

b) ❌ Aux élèves uniquement
FR : Faux. Le principe de neutralité ne s'applique pas uniquement aux élèves.
中：错误。中立原则不仅适用于学生。

c) ❌ Aux associations privées
FR : Faux. La neutralité de l'État ne s'applique pas directement aux associations privées.
中：错误。国家中立原则不直接适用于私人协会。

d) ❌ Aux familles
FR : Faux. Le principe de neutralité ne s'applique pas principalement aux familles.
中：错误。中立原则不是主要针对家庭。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "简单",
    question: "L'État français est :",
    options: [
      "Religieux",
      "Neutre",
      "Confessionnel",
      "Monarchique"
    ],
    answer: 1,
    explanation: `
a) ❌ Religieux
FR : Faux. L'État français n'est pas religieux.
中：错误。法国国家不是宗教性的。

b) ✅ Neutre
FR : Correct. L'État français est neutre sur le plan religieux (principe de laïcité).
中：正确。法国国家在宗教问题上保持中立（世俗原则）。

c) ❌ Confessionnel
FR : Faux. L'État français n'est pas confessionnel.
中：错误。法国不是宗教国家。

d) ❌ Monarchique
FR : Faux. La France est une République, pas une monarchie.
中：错误。法国是共和国，不是君主制。
    `.trim()
  },

  // ==================== Devise et symboles ====================
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "À quoi correspond la date du 14 juillet ?",
    options: [
      "La fête du travail",
      "La fête nationale française",
      "La prise des femmes",
      "Festival de musique"
    ],
    answer: 1,
    explanation: `
a) ❌ La fête du travail
FR : La fête du travail a lieu le 1er mai, pas le 14 juillet.
中：劳动节是5月1日，不是7月14日。

b) ✅ La fête nationale française
FR : Correct ! Le 14 juillet est la fête nationale française, commémorant la Révolution.
中：正确！7月14日是法国国庆日，纪念法国大革命。

c) ❌ La prise des femmes
FR : Cet événement n'existe pas dans l'histoire française.
中：历史上没有"占领妇女"这个事件。

d) ❌ Festival de musique
FR : Il peut y avoir des festivals, mais ce n'est pas une fête nationale.
中：有音乐节，但这不是国家节日。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "À quoi correspond la date du 14 juillet ?",
    options: [
      "La prise de la Bastille",
      "L'Armistice de la Première Guerre mondiale",
      "La Victoire de 1945",
      "La Journée de l'Europe"
    ],
    answer: 0,
    explanation: `
a) ✅ La prise de la Bastille
FR : Exact ! Le 14 juillet 1789, la Bastille a été prise, marquant le début de la Révolution française.
中：正确！1789年7月14日，攻占巴士底狱，标志法国大革命开始。

b) ❌ L'Armistice de la Première Guerre mondiale
FR : L'armistice de la Première Guerre mondiale a eu lieu le 11 novembre 1918.
中：第一次世界大战停战日是1918年11月11日，不是7月14日。

c) ❌ La Victoire de 1945
FR : La victoire de la Seconde Guerre mondiale en Europe est célébrée le 8 mai 1945.
中：第二次世界大战欧洲胜利日是1945年5月8日。

d) ❌ La Journée de l'Europe
FR : La Journée de l'Europe se célèbre le 9 mai.
中：欧洲日是5月9日，不是7月14日。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quel est l'un des symboles de la République française ?",
    options: [
      "La tour Eiffel",
      "Le coq gaulois",
      "Marianne",
      "La Joconde"
    ],
    answer: 2,
    explanation: `
a) ❌ La tour Eiffel
FR : La tour Eiffel est un symbole de Paris et de la France, mais pas spécifiquement de la République.
中：埃菲尔铁塔是巴黎和法国的象征，但不是共和国的象征。

b) ❌ Le coq gaulois
FR : Le coq est un symbole historique de la France, mais moins officiel pour la République.
中：高卢雄鸡是法国的历史象征，但不是共和国官方象征。

c) ✅ Marianne
FR : Correct ! Marianne est le symbole officiel de la République française, représentant la liberté et la raison. En dehors de cela, les symboles de la France comprennent également le drapeau, la devise française, La Marseillaise et la fête nationale.
中：正确！玛丽安娜是法国共和国的官方象征，代表自由和理性。除此之外法国的象征还有国旗/法国格言/马赛曲/国庆节

d) ❌ La Joconde
FR : La Joconde est une œuvre d'art célèbre, mais pas un symbole républicain.
中：《蒙娜丽莎》是著名艺术品，但不是共和国象征。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quel est l'un des symboles de la République française ?",
    options: [
      "Le drapeau français",
      "Le Louvre",
      "Le président",
      "Le drapeau de l'Union européenne"
    ],
    answer: 0,
    explanation: `
A) ✅ Le drapeau français
FR : Correct ! Le drapeau bleu, blanc, rouge est un symbole officiel de la République française. En dehors de cela, les symboles de la France comprennent également Marianne, la devise française, La Marseillaise et la fête nationale.
中：正确！蓝白红三色旗是法国共和国的官方象征。此之外法国的象征还有玛丽安娜/法国格言/马赛曲/国庆节

B) ❌ Le Louvre
FR : Le Louvre est un musée célèbre, pas un symbole de la République.
中：卢浮宫是著名博物馆，不是共和国象征。

C) ❌ Le président
FR : Le président est un fonctionnaire, pas un symbole officiel de la République.
中：总统是官员，不是共和国象征。

D) ❌ Le drapeau de l'Union européenne
FR : C'est le symbole de l'Union européenne, pas de la République française.
中：这是欧盟旗帜，不是法国共和国的象征。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quel est l'un des symboles de la République française ?",
    options: [
      "Liberté, Égalité, Fraternité",
      "La mairie",
      "La Joconde",
      "Paris"
    ],
    answer: 0,
    explanation: `
A) ✅ Liberté, Égalité, Fraternité
FR : Correct ! C'est la devise de la République française. C'est aussi un symbole officiel de la République française. En dehors de cela, les symboles de la France comprennent également le drapeau français, la devise française, La Marseillaise et la fête nationale.
中：正确！"自由、平等、博爱"是法国共和国的格言。也是法国共和国的官方象征。此之外法国的象征还有国旗/法国格言/马赛曲/国庆节

B) ❌ La mairie
FR : La mairie est un bâtiment administratif, pas un symbole national.
中：市政厅是行政建筑，不是国家象征。

C) ❌ La Joconde
FR : Une œuvre d'art célèbre, mais pas un symbole républicain.
中：著名艺术品，但不是共和国象征。

D) ❌ Paris
FR : La capitale, mais pas un symbole officiel de la République.
中：首都，但不是共和国象征。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Le principe d'égalité signifie que :",
    options: [
      "Tous les citoyens ont les mêmes droits",
      "Tous les citoyens doivent avoir le même revenu",
      "Les hommes ont plus de droits que les femmes",
      "Les riches ont plus de droits que les pauvres"
    ],
    answer: 0,
    explanation: `
a) ✅ Tous les citoyens ont les mêmes droits
FR : Correct ! Tous les citoyens, indépendamment de leur origine, sexe ou richesse, ont les mêmes droits.
中：正确！所有公民，无论出身、性别或财富，都享有相同权利。

b) ❌ Tous les citoyens doivent avoir le même revenu
FR : Faux. L'égalité des droits ne signifie pas égalité des revenus.
中：错误。平等原则是权利平等，不是收入平等。

c) ❌ Les hommes ont plus de droits que les femmes
FR : Faux. C'est contraire au principe d'égalité.
中：错误。男性比女性权利更多违背平等原则。

d) ❌ Les riches ont plus de droits que les pauvres
FR : Faux. Tous doivent avoir les mêmes droits, riches ou pauvres.
中：错误。无论贫富，所有人权利相同。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "\"Liberté, égalité, fraternité\", c'est :",
    options: [
      "Une chanson populaire",
      "La devise de la République française",
      "Un poème de Victor Hugo",
      "Une citation d'un roi"
    ],
    answer: 1,
    explanation: `
a) ❌ Une chanson populaire
FR : Faux. Ce n'est pas une chanson.
中：错误。这不是一首歌曲。

b) ✅ La devise de la République française
FR : Correct ! C'est la devise officielle de la République.
中：正确！这是法国共和国的官方格言。

c) ❌ Un poème de Victor Hugo
FR : Faux. Ce n'est pas un poème.
中：错误。这不是雨果的诗。

d) ❌ Une citation d'un roi
FR : Faux. Elle vient de la Révolution française, pas d'un roi.
中：错误。它来源于法国大革命，不是国王的名言。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "\"Liberté, égalité, fraternité\", c'est :",
    options: [
      "Fait partie de notre patrimoine national",
      "Une expression utilisée uniquement pendant la Révolution française",
      "Une devise qui s'applique seulement aux citoyens français adultes",
      "Une phrase inventée pour les fêtes nationales modernes"
    ],
    answer: 0,
    explanation: `
a) ✅ Fait partie de notre patrimoine national
FR : Correct ! Cette devise fait partie du patrimoine de la République française et symbolise ses valeurs.
中：正确！这句格言是法国共和国的国家遗产，象征其核心价值。

b) ❌ Une expression utilisée uniquement pendant la Révolution française
FR : Faux. Elle continue à être utilisée aujourd'hui.
中：错误。这句话直到今天仍在使用，不仅仅是大革命时期。

c) ❌ Une devise qui s'applique seulement aux citoyens français adultes
FR : Faux. Elle s'applique à tous les citoyens, adultes ou non.
中：错误。这适用于所有公民，不仅仅是成年人。

d) ❌ Une phrase inventée pour les fêtes nationales modernes
FR : Faux. Elle date de la Révolution française, pas inventée pour les fêtes modernes.
中：错误。这句话起源于法国大革命，不是现代国庆发明的。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Certains métiers peuvent-ils être réservés aux hommes ?",
    options: [
      "Oui",
      "Non",
      "Selon le revenu",
      "Selon l'âge"
    ],
    answer: 1,
    explanation: `
a) ❌ Oui
FR : Faux. La loi interdit la discrimination fondée sur le sexe.
中：错误。法律禁止基于性别的歧视。

b) ✅ Non
FR : Correct ! Hommes et femmes ont accès aux mêmes métiers.
中：正确！男女可以从事同样的职业。

c) ❌ Selon le revenu
FR : Faux. Le revenu n'a aucun lien avec l'accès à un métier.
中：错误。收入与是否能从事某职业无关。

d) ❌ Selon l'âge
FR : Faux. La question concerne le sexe, pas l'âge.
中：错误。这里讨论的是性别，不是年龄。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Certains métiers peuvent-ils être réservés aux hommes ?",
    options: [
      "Oui, parce que certains métiers sont très difficiles pour les femmes",
      "Non, car l'égalité est un principe fondamental",
      "Oui, si toutes les femmes sont d'accord",
      "Non, car les femmes sont toujours moins payées"
    ],
    answer: 1,
    explanation: `
A) ❌ Oui, parce que certains métiers sont très difficiles pour les femmes
FR : Faux. La difficulté d'un métier ne justifie pas une exclusion.
中：错误。职业困难不能成为排斥女性的理由。

B) ✅ Non, car l'égalité est un principe fondamental
FR : Correct ! L'égalité entre les femmes et les hommes est un principe fondamental.
中：正确！男女平等是共和国的基本原则。

C) ❌ Oui, si toutes les femmes sont d'accord
FR : Faux. Même avec un accord, la discrimination reste interdite.
中：错误。即使女性同意，歧视仍然违法。

D) ❌ Non, car les femmes sont toujours moins payées
FR : Faux. L'inégalité salariale entre les femmes et les hommes due au sexe est également contraire au principe d'égalité.
中：错误。男女因性别原因导致的工资不平等也是违背平等原则的。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "De quand date la Constitution de la Ve République ?",
    options: [
      "1789",
      "1958",
      "1946",
      "1871"
    ],
    answer: 1,
    explanation: `
a) ❌ 1789
FR : Faux. 1789 correspond à la Révolution française.
中：错误。1789年是法国大革命。

b) ✅ 1958
FR : Correct ! La Constitution de la Ve République date de 1958.
中：正确！第五共和国宪法制定于1958年。

c) ❌ 1946
FR : Faux. C'est la Constitution de la IVe République.
中：错误。这是第四共和国宪法。

d) ❌ 1871
FR : Faux. Cette date correspond à la Commune de Paris.
中：错误。这与巴黎公社有关。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Le régime de la France est :",
    options: [
      "Une monarchie",
      "Une république",
      "Une dictature",
      "Une confédération"
    ],
    answer: 1,
    explanation: `
a) ❌ Une monarchie
FR : Faux. La France n'a plus de roi.
中：错误。法国早已不是君主制。

b) ✅ Une république
FR : Correct ! La France est une République.
中：正确！法国是共和国。

c) ❌ Une dictature
FR : Faux. Le pouvoir est exercé par des élus.
中：错误。法国由民选代表执政。

d) ❌ Une confédération
FR : Faux. La France est un État unitaire.
中：错误。法国是单一制国家。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Le régime de la France est :",
    options: [
      "Une démocratie",
      "Un régime autoritaire",
      "Une monarchie absolue",
      "Une dictature militaire"
    ],
    answer: 0,
    explanation: `
A) ✅ Une démocratie
FR : Correct ! Les citoyens élisent leurs représentants.
中：正确！公民通过选举选出代表。

B) ❌ Un régime autoritaire
FR : Faux. Les libertés fondamentales sont garanties.
中：错误。法国保障基本自由。

C) ❌ Une monarchie absolue
FR : Faux. Il n'y a pas de roi en France.
中：错误。法国没有国王。

D) ❌ Une dictature militaire
FR : Faux. L'armée ne gouverne pas le pays.
中：错误。军队不掌权。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Lequel de ces symboles représente officiellement la République française ?",
    options: [
      "La tour Eiffel",
      "Le drapeau tricolore",
      "La statue de la Liberté",
      "Le Louvre"
    ],
    answer: 1,
    explanation: `
a) ❌ La tour Eiffel
FR : Symbole de Paris, pas officiel de la République.
中：巴黎象征，不是共和国官方象征。

b) ✅ Le drapeau tricolore
FR : Symbole officiel de la République française.
中：法国共和国的官方象征。

c) ❌ La statue de la Liberté
FR : Située aux États-Unis.
中：位于美国。

d) ❌ Le Louvre
FR : Musée, pas symbole politique.
中：博物馆，不是政治象征。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Où peut-on voir la devise de la République ?",
    options: [
      "Dans toutes les maisons",
      "À la mairie",
      "Sur les réseaux sociaux",
      "Au bureau"
    ],
    answer: 1,
    explanation: `
A) ❌ Dans toutes les maisons
FR : Faux. La devise n'est pas obligatoire dans les maisons privées.
中：错误。共和国格言不要求出现在私人住宅中。

B) ✅ À la mairie
FR : Correct ! La devise est affichée dans les bâtiments officiels comme la mairie.
中：正确。共和国格言会出现在市政府等公共机构中。

C) ❌ Sur les réseaux sociaux
FR : Faux. Les réseaux sociaux ne sont pas des lieux officiels de l'État.
中：错误。社交网络不是国家官方场所。

D) ❌ Au bureau
FR : Faux. Un bureau privé n'est pas obligatoire.
中：错误。普通办公室不是强制的。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Où peut-on voir la devise de la République ?",
    options: [
      "Pièces de monnaie et timbres",
      "Publicités commerciales",
      "Livres scolaires",
      "Affiches de cinéma"
    ],
    answer: 0,
    explanation: `
A) ✅ Pièces de monnaie et timbres
FR : Correct ! La devise figure souvent sur les pièces de monnaie et les timbres officiels.
中：正确。共和国格言常印在硬币和邮票上。

B) ❌ Publicités commerciales
FR : Faux. Les publicités sont privées et ne représentent pas l'État.
中：错误。商业广告属于私人领域，不代表国家。

C) ✅ Livres scolaires
FR : Correct ! Les livres scolaires expliquent les valeurs de la République.
中：正确。教材中会介绍共和国的价值观。

D) ❌ Affiches de cinéma
FR : Faux. Les affiches de cinéma ne sont pas des supports officiels.
中：错误。电影海报不是国家官方载体。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Qu'est-ce que l'égalité ?",
    options: [
      "Que tous les citoyens ont exactement le même revenu",
      "Que tous les citoyens ont les mêmes droits",
      "Que tous les citoyens doivent avoir les mêmes opinions",
      "Que tous les citoyens doivent pratiquer la même religion"
    ],
    answer: 1,
    explanation: `
a) ❌ FR : Faux. L'égalité ne signifie pas que tout le monde gagne la même chose.
中：错误。平等不代表所有人收入一样。

B) ✅ Que tous les citoyens ont les mêmes droits
FR : Correct ! L'égalité signifie l'égalité des droits devant la loi.
中：正确。平等指法律面前人人权利相同。

C) ❌ Que tous les citoyens doivent avoir les mêmes opinions
FR : Faux. Chacun est libre de penser différemment.
中：错误。每个人都有思想自由。

D) ❌ Que tous les citoyens doivent pratiquer la même religion
FR : Faux. La République respecte la liberté de religion.
中：错误。共和国尊重宗教自由。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Qu'est-ce que l'égalité ?",
    options: [
      "Les hommes ont des privilèges",
      "Les riches ont des privilèges",
      "Le président a des privilèges",
      "Égalité entre hommes et femmes"
    ],
    answer: 3,
    explanation: `
A) ❌ Les hommes ont des privilèges
FR : Faux. L'égalité refuse toute forme de privilège.
中：错误。平等反对任何特权。

B) ❌ Les riches ont des privilèges
FR : Faux. La loi est la même pour tous les citoyens.
中：错误。法律对所有公民一视同仁。

C) ❌ Le président a des privilèges
FR : Faux. Même le président doit respecter la loi.
中：错误。总统也必须遵守法律。

D) ✅ Égalité entre hommes et femmes
FR : Correct ! Les hommes et les femmes ont les mêmes droits.
中：正确。男女享有同等权利。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Que signifie la liberté ?",
    options: [
      "Pouvoir faire tout ce que l'on veut sans limite",
      "Pouvoir agir dans le respect de la loi",
      "Pouvoir obliger les autres à suivre ses idées",
      "Ne pas payer d'impôts"
    ],
    answer: 1,
    explanation: `
A) ❌ Pouvoir faire tout ce que l'on veut sans limite
FR : Faux. La liberté a des limites fixées par la loi.
中：错误。自由不是没有限制的。

B) ✅ Pouvoir agir dans le respect de la loi
FR : Correct ! La liberté s'exerce dans le cadre des lois.
中：正确。自由必须在法律范围内。

C) ❌ Pouvoir obliger les autres à suivre ses idées
FR : Faux. Forcer les autres n'est pas la liberté.
中：错误。强迫他人不是自由。

D) ❌ Ne pas payer d'impôts
FR : Faux. Payer des impôts est un devoir citoyen.
中：错误。纳税是公民义务。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "La liberté d'expression signifie :",
    options: [
      "Dire tout ce que l'on veut sans aucune limite",
      "Critiquer et insulter les autres librement",
      "Pouvoir exprimer ses idées et opinions dans le respect des lois et des autres",
      "Être toujours d'accord avec la majorité"
    ],
    answer: 2,
    explanation: `
A) ❌ Dire tout ce que l'on veut sans aucune limite
FR : Faux. La liberté d'expression a des limites légales.
中：错误。言论自由有法律限制。

B) ❌ Critiquer et insulter les autres librement
FR : Faux. Insulter est puni par la loi.
中：错误。侮辱他人是违法的。

C) ✅ Pouvoir exprimer ses idées et opinions dans le respect des lois et des autres
FR : Correct ! C'est la définition officielle de la liberté d'expression.
中：正确。在尊重法律和他人的情况下表达观点。

D) ❌ Être toujours d'accord avec la majorité
FR : Faux. On peut avoir une opinion différente.
中：错误。可以有不同意见。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Que signifie le mot \"fraternité\" dans la devise française ?",
    options: [
      "Solidarité entre citoyens",
      "Amitié seulement entre frères",
      "Partage obligatoire des biens",
      "Exclusion de ceux qui sont différents"
    ],
    answer: 0,
    explanation: `
A) ✅ Solidarité entre citoyens
FR : Correct ! La fraternité signifie l'entraide et la solidarité entre tous les citoyens.
中：正确。博爱意味着公民之间互相帮助和团结。

B) ❌ Amitié seulement entre frères
FR : Faux. La fraternité ne se limite pas aux membres de la famille.
中：错误。博爱不限于亲兄弟之间。

C) ❌ Partage obligatoire des biens
FR : Faux. La fraternité ne signifie pas qu'il faut partager ses biens de force.
中：错误。博爱并不意味着必须强制共享财物。

D) ❌ Exclusion de ceux qui sont différents
FR : Faux. La fraternité inclut tout le monde, sans discrimination.
中：错误。博爱包含所有人，不排斥不同的人。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Que signifie le mot \"fraternité\" dans la devise française ?",
    options: [
      "Chacun doit penser uniquement à lui-même",
      "Les citoyens doivent s'entraider et se respecter",
      "Tout le monde doit avoir les mêmes opinions",
      "Les citoyens doivent obéir sans discuter"
    ],
    answer: 1,
    explanation: `
A) ❌ Chacun doit penser uniquement à lui-même
FR : Faux. La fraternité s'oppose à l'égoïsme.
中：错误。博爱反对只顾自己。

B) ✅ Les citoyens doivent s'entraider et se respecter
FR : Correct ! La fraternité signifie la solidarité, l'entraide et le respect entre les citoyens.
中：正确。博爱意味着公民之间互相帮助和尊重。

C) ❌ Tout le monde doit avoir les mêmes opinions
FR : Faux. La fraternité respecte la diversité des opinions.
中：错误。博爱尊重观点多样性。

D) ❌ Les citoyens doivent obéir sans discuter
FR : Faux. La fraternité ne signifie pas l'obéissance aveugle.
中：错误。博爱不等于盲目服从。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "La Sécurité sociale est une manifestation de :",
    options: [
      "La liberté",
      "L'égalité",
      "La fraternité",
      "Le bonheur"
    ],
    answer: 2,
    explanation: `
A) ❌ La liberté
FR : Faux. La Sécurité sociale n'est pas une liberté individuelle.
中：错误。社会保障不是一种自由。

B) ❌ L'égalité
FR : Faux. Même si elle favorise l'égalité, elle repose surtout sur la solidarité.
中：错误。虽然促进平等，但核心是团结。

C) ✅ La fraternité
FR : Correct ! La Sécurité sociale repose sur la solidarité entre les citoyens.la CAF et les systèmes de retraite et de prise en charge des personnes âgées sont des manifestations concrètes de la solidarité et de la bienveillance sociale.
中：正确。社会保障体现博爱精神。caf和养老也都是博爱的体现。

D) ❌ Le bonheur
FR : Faux. Le bonheur n'est pas un principe républicain.
中：错误。幸福不是共和国原则。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quel animal est un symbole de la France ?",
    options: [
      "Le lion",
      "Le coq",
      "L'aigle",
      "L'ours"
    ],
    answer: 1,
    explanation: `
A) ❌ Le lion
FR : Faux. Le lion n'est pas un symbole français.
中：错误。狮子不是法国象征。

B) ✅ Le coq
FR : Correct ! Le coq est un symbole historique de la France.
中：正确。公鸡是法国的象征。

C) ❌ L'aigle
FR : Faux. L'aigle est associé à d'autres pays.
中：错误。鹰象征其他国家。

D) ❌ L'ours
FR : Faux. L'ours n'est pas un symbole national.
中：错误。熊不是法国象征。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Quel est l'un des rôles des associations ?",
    options: [
      "Gérer les écoles",
      "Aider les personnes dans le besoin pour favoriser la solidarité",
      "Créer des impôts",
      "Définir les lois"
    ],
    answer: 1,
    explanation: `
A) ❌ Gérer les écoles
FR : Faux. Les écoles sont gérées par l'État ou les collectivités.
中：错误。学校由国家或地方管理。

B) ✅ Aider les personnes dans le besoin pour favoriser la solidarité
FR : Correct ! Les associations favorisent l'entraide et la solidarité.
中：正确。协会帮助弱势群体，促进团结。

C) ❌ Créer des impôts
FR : Faux. Les impôts sont décidés par l'État.
中：错误。税收由国家制定。

D) ❌ Définir les lois
FR : Faux. Les lois sont votées par le Parlement.
中：错误。法律由议会制定。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quel est le nom de l'hymne national ?",
    options: [
      "La Marseillaise",
      "La Carmagnole",
      "Le Chant du départ",
      "Le Chant des partisans"
    ],
    answer: 0,
    explanation: `
A) ✅ La Marseillaise
FR : Correct ! La Marseillaise est l'hymne national français.
中：正确。《马赛曲》是法国国歌。

B) ❌ La Carmagnole
FR : Faux. Ce n'est pas l'hymne national.
中：错误。不是国歌。

C) ❌ Le Chant du départ
FR : Faux. Ce n'est pas l'hymne officiel.
中：错误。不是官方国歌。

D) ❌ Le Chant des partisans
FR : Faux. C'est un chant de la Résistance.
中：错误。它是抵抗运动歌曲。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Quel symbole de la République française est tricolore ?",
    options: [
      "Le drapeau",
      "Marianne",
      "Le coq",
      "La Marseillaise"
    ],
    answer: 0,
    explanation: `
A) ✅ Le drapeau
FR : Correct ! Le drapeau est bleu, blanc et rouge.
中：正确。国旗是三色的。

B) ❌ Marianne
FR : Faux. Marianne n'est pas tricolore.
中：错误。玛丽安娜不是三色象征。

C) ❌ Le coq
FR : Faux. Le coq n'est pas tricolore.
中：错误。公鸡不是三色。

D) ❌ La Marseillaise
FR : Faux. C'est un chant, pas un symbole tricolore.
中：错误。国歌不是三色象征。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quelle est la date de la fête nationale française ?",
    options: [
      "1er mai",
      "14 juillet",
      "11 novembre",
      "25 décembre"
    ],
    answer: 1,
    explanation: `
A) ❌ 1er mai
FR : Faux. C'est la fête du Travail.
中：错误。5 月 1 日是劳动节。

B) ✅ 14 juillet
FR : Correct ! C'est la fête nationale française.
中：正确。7 月 14 日是法国国庆。

C) ❌ 11 novembre
FR : Faux. C'est l'Armistice de 1918.
中：错误。11 月 11 日是停战纪念日。

D) ❌ 25 décembre
FR : Faux. C'est Noël.
中：错误。12 月 25 日是圣诞节。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quelle est la devise de la République française ?",
    options: [
      "Liberté, fraternité",
      "Liberté, égalité, fraternité",
      "Egalité, fraternité",
      "Paix, liberté, égalité"
    ],
    answer: 1,
    explanation: `
A) ❌ Liberté, fraternité
FR : Faux. Il manque l'égalité.
中：错误。缺少"平等"。

B) ✅ Liberté, égalité, fraternité
FR : Correct ! C'est la devise officielle.
中：正确。这是共和国格言。

C) ❌ Égalité, fraternité
FR : Faux. Il manque la liberté.
中：错误。缺少"自由"。

D) ❌ Paix, liberté, égalité
FR : Faux. Ce n'est pas la devise officielle.
中：错误。不是官方格言。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quelle est la langue officielle de la République française ?",
    options: [
      "Anglais",
      "Espagnol",
      "Français",
      "Allemand"
    ],
    answer: 2,
    explanation: `
A) ❌ Anglais
FR : Faux.
中：错误。

B) ❌ Espagnol
FR : Faux.
中：错误。

C) ✅ Français
FR : Correct ! Le français est la langue officielle.
中：正确。法语是官方语言。

D) ❌ Allemand
FR : Faux.
中：错误。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quelle est la place de la langue française dans la République ?",
    options: [
      "Langue secondaire",
      "Langue officielle",
      "Langue facultative",
      "Langue régionale"
    ],
    answer: 1,
    explanation: `
A) ❌ Langue secondaire
FR : Faux.
中：错误。

B) ✅ Langue officielle
FR : Correct ! La Constitution reconnaît le français.
中：正确。宪法规定法语为官方语言。

C) ❌ Langue facultative
FR : Faux.
中：错误。

D) ❌ Langue régionale
FR : Faux.
中：错误。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Quelle liberté permet à chacun d'exprimer ses idées ?",
    options: [
      "Liberté de circulation",
      "Liberté d'expression",
      "Liberté religieuse",
      "Liberté d'association"
    ],
    answer: 1,
    explanation: `
A) ❌ Liberté de circulation
FR : Faux. La liberté de circulation concerne le droit de se déplacer librement sur le territoire, par exemple choisir son lieu de résidence ou voyager, mais elle ne concerne pas l'expression des opinions ou des idées.
中：错误。行动自由指的是在领土内自由出行、居住或旅行的权利，并不涉及表达思想或观点。

B) ✅ Liberté d'expression
FR : Correct ! La liberté d'expression permet à chaque citoyen d'exprimer ses idées, ses opinions et ses convictions, à l'oral, à l'écrit ou par d'autres moyens, tout en respectant les lois de la République, notamment celles qui protègent l'ordre public et les droits d'autrui.
中：正确。言论自由允许每个公民通过口头、书面或其他方式表达自己的思想、观点和信念，但必须遵守共和国的法律，尊重公共秩序以及他人的权利。

C) ❌ Liberté religieuse
FR : Faux. La liberté religieuse garantit le droit de croire ou de ne pas croire et de pratiquer une religion, mais elle ne concerne pas directement l'expression générale des opinions politiques ou sociales.
中：错误。宗教自由保障信仰或不信仰以及宗教实践的权利，但不等同于表达所有思想和社会、政治观点的自由。

D) ❌ Liberté d'association
FR : Faux. La liberté d'association permet de créer ou de rejoindre une association avec d'autres personnes, mais elle ne correspond pas directement au droit individuel d'exprimer ses idées.
中：错误。结社自由是指与他人共同成立或加入组织的权利，而不是直接表达个人思想的自由。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Quelle proposition est correcte ? La liberté d'expression :",
    options: [
      "Permet de tout dire sans conséquence",
      "Permet d'exprimer ses idées dans le respect de la loi",
      "Permet de harceler les autres",
      "N'existe pas en France"
    ],
    answer: 1,
    explanation: `
A) ❌ Permet de tout dire sans conséquence
FR : Faux. En France, la liberté d'expression n'est pas absolue : elle est encadrée par la loi afin d'éviter les propos diffamatoires, les insultes, la haine ou l'incitation à la violence.
中：错误。在法国，言论自由不是无限的，它受到法律约束，以防止诽谤、侮辱、仇恨言论或煽动暴力。

B) ✅ Permet d'exprimer ses idées dans le respect de la loi
FR : Correct ! La liberté d'expression permet à chacun d'exprimer librement ses opinions, mais dans le respect des lois de la République, qui protègent la dignité humaine, la sécurité publique et les droits des autres citoyens.
中：正确。言论自由允许公民自由表达意见，但必须遵守共和国的法律，这些法律旨在保护人的尊严、公共安全以及他人的权利。

C) ❌ Permet de harceler les autres
FR : Faux. Le harcèlement est interdit par la loi et constitue une atteinte aux droits et à la dignité des personnes.
中：错误。骚扰行为是法律明确禁止的，侵犯了他人的权利和尊严。

D) ❌ N'existe pas en France
FR : Faux. La liberté d'expression est un droit fondamental garanti par la Constitution française et par la Déclaration des droits de l'homme et du citoyen.
中：错误。言论自由是法国宪法和《人权和公民权宣言》所保障的基本权利。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quelles sont les couleurs du drapeau français ?",
    options: [
      "Bleu, blanc, rouge",
      "Vert, blanc, rouge",
      "Rouge, jaune, bleu",
      "Bleu, blanc, vert"
    ],
    answer: 0,
    explanation: `
A) ✅ Bleu, blanc, rouge
FR : Correct ! Le drapeau français est composé de trois bandes verticales bleu, blanc et rouge, symboles de la République et de l'unité nationale.
中：正确。法国国旗由蓝、白、红三条竖色组成，象征共和国和民族团结。

B) ❌ Vert, blanc, rouge
FR : Faux. Ces couleurs correspondent à d'autres drapeaux nationaux, mais pas à celui de la France.
中：错误。这种颜色组合属于其他国家，而不是法国。

C) ❌ Rouge, jaune, bleu
FR : Faux. Le jaune ne fait pas partie des couleurs du drapeau français.
中：错误。黄色不是法国国旗的颜色。

D) ❌ Bleu, blanc, vert
FR : Faux. Le vert n'est pas une couleur du drapeau français.
中：错误。绿色不属于法国国旗的颜色。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Qu'est-ce que la Marseillaise ?",
    options: [
      "Une danse traditionnelle",
      "L'hymne national français",
      "Une devise",
      "Une fête"
    ],
    answer: 1,
    explanation: `
A) ❌ Une danse traditionnelle
FR : Faux. La Marseillaise est un chant, et non une danse.
中：错误。《马赛曲》是一首歌曲，而不是舞蹈。

B) ✅ L'hymne national français
FR : Correct ! La Marseillaise est l'hymne national de la France. Elle est chantée lors des cérémonies officielles et symbolise les valeurs de la République, comme la liberté et la défense de la nation.
中：正确。《马赛曲》是法国国歌，在官方仪式上演唱，象征自由、共和国价值和保卫国家的精神。

C) ❌ Une devise
FR : Faux. La devise de la République est « Liberté, Égalité, Fraternité ».
中：错误。共和国的格言是"自由、平等、博爱"。

D) ❌ Une fête
FR : Faux. La Marseillaise n'est pas une fête mais un chant national.
中：错误。《马赛曲》不是节日，而是国歌。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "难",
    question: "Qu'est ce qui est traditionnellement organisé sur les Champs Élysées le 14 juillet pour célébrer la fête nationale ?",
    options: [
      "Un défilé militaire",
      "Un marché",
      "Un festival de musique",
      "Une compétition sportive"
    ],
    answer: 0,
    explanation: `
A) ✅ Un défilé militaire
FR : Correct ! Chaque 14 juillet, un grand défilé militaire est organisé sur les Champs-Élysées afin de célébrer la fête nationale et de rendre hommage aux forces armées françaises.
中：正确。每年 7 月 14 日，香榭丽舍大街都会举行大型阅兵式，以庆祝国庆并向法国军队致敬。

B) ❌ Un marché
FR : Faux. Il ne s'agit pas d'un événement commercial.
中：错误。这不是商业集市活动。

C) ❌ Un festival de musique
FR : Faux. Le 14 juillet est avant tout marqué par le défilé militaire officiel.
中：错误。7 月 14 日的主要官方活动是阅兵式。

D) ❌ Une compétition sportive
FR : Faux. Aucune compétition sportive nationale n'est organisée ce jour-là sur les Champs-Élysées.
中：错误。当天不会在香榭丽舍大街举行国家级体育比赛。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Quand a lieu le défilé militaire ?",
    options: [
      "La fête nationale",
      "Noël",
      "Le 1er mai",
      "Le jour de l'An"
    ],
    answer: 0,
    explanation: `
A) ✅ La fête nationale
FR : Correct ! Le défilé militaire a lieu le 14 juillet, jour de la fête nationale française.
中：正确。阅兵式在法国国庆日 7 月 14 日举行。

B) ❌ Noël
FR : Faux. Noël est une fête religieuse et familiale.
中：错误。圣诞节是宗教和家庭节日。

C) ❌ Le 1er mai
FR : Faux. Le 1er mai est la fête du Travail.
中：错误。5 月 1 日是劳动节。

D) ❌ Le jour de l'An
FR : Faux. Le Nouvel An n'est pas associé au défilé militaire.
中：错误。元旦不举行阅兵式。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Qui est Marianne ?",
    options: [
      "Une reine française",
      "Une figure symbolique de la République",
      "Une peintre célèbre",
      "Une héroïne de roman"
    ],
    answer: 1,
    explanation: `
A) ❌ Une reine française
FR : Faux. Marianne n'a jamais été une personne réelle ni une reine.
中：错误。玛丽安娜不是历史人物，也不是女王。

B) ✅ Une figure symbolique de la République
FR : Correct ! Marianne est la figure symbolique de la République française. Elle représente les valeurs républicaines telles que la liberté, l'égalité et la citoyenneté.
中：正确。玛丽安娜是法兰西共和国的象征人物，代表自由、平等和公民精神等共和国价值。

C) ❌ Une peintre célèbre
FR : Faux. Marianne n'est pas une artiste.
中：错误。玛丽安娜不是画家。

D) ❌ Une héroïne de roman
FR : Faux. Elle ne provient pas d'une œuvre littéraire.
中：错误。她不是小说人物。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "En France, l'égalité devant la loi signifie que :",
    options: [
      "Certaines personnes peuvent être au-dessus des lois",
      "La loi s'applique différemment selon la religion",
      "La loi est la même pour tous, sans distinction",
      "La loi dépend du revenu de la personne"
    ],
    answer: 2,
    explanation: `
A) ❌ Certaines personnes peuvent être au-dessus des lois
FR : Faux. En République française, aucun individu n'est au-dessus de la loi, quels que soient son statut social, sa fonction ou son pouvoir.
中：错误。在法国共和国中，不论社会地位、身份或权力如何，没有任何人可以凌驾于法律之上。

B) ❌ La loi s'applique différemment selon la religion
FR : Faux. La République française est laïque : la loi s'applique de la même manière à tous, sans distinction de religion ou de croyance.
中：错误。法国是世俗国家，法律不因宗教或信仰不同而区别对待。

C) ✅ La loi est la même pour tous, sans distinction
FR : Correct ! L'égalité devant la loi signifie que tous les citoyens sont soumis aux mêmes règles juridiques, sans discrimination liée à l'origine, à la religion, au sexe, à l'opinion ou à la situation sociale.
中：正确。法律面前人人平等，意味着所有人都遵守同一套法律规则，不因出身、宗教、性别、观点或社会状况而有所不同。

D) ❌ La loi dépend du revenu de la personne
FR : Faux. Les lois ne varient pas en fonction de la richesse ou de la situation économique.
中：错误。法律不因个人收入或经济状况而改变。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "La liberté d'expression en France :",
    options: [
      "Est totale, sans limite",
      "Est autorisée mais encadrée par la loi",
      "Est interdite sur internet",
      "Est réservée aux citoyens français"
    ],
    answer: 1,
    explanation: `
A) ❌ Est totale, sans limite
FR : Faux. La liberté d'expression n'est pas absolue : elle est limitée par la loi afin de protéger l'ordre public, la dignité humaine et les droits des autres.
中：错误。言论自由不是无限的，它受到法律限制，以保护公共秩序、人的尊严和他人的权利。

B) ✅ Est autorisée mais encadrée par la loi
FR : Correct ! En France, chacun peut exprimer ses idées librement, mais cette liberté s'exerce dans un cadre légal qui interdit notamment la diffamation, l'incitation à la haine et la violence.
中：正确。在法国，公民可以自由表达意见，但必须在法律框架内进行，法律禁止诽谤、仇恨言论和煽动暴力。

C) ❌ Est interdite sur internet
FR : Faux. La liberté d'expression s'applique aussi sur internet, même si les règles juridiques y sont strictement appliquées.
中：错误。言论自由同样适用于互联网，只是同样受法律严格约束。

D) ❌ Est réservée aux citoyens français
FR : Faux. La liberté d'expression est un droit fondamental qui s'applique à toute personne vivant en France, pas uniquement aux citoyens français.
中：错误。言论自由是基本权利，不仅限于法国公民，所有在法国的人都享有。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
    options: [
      "Ne pas voter",
      "Payer ses impôts",
      "Insulter un fonctionnaire",
      "Boycotter les élections"
    ],
    answer: 1,
    explanation: `
A) ❌ Ne pas voter
FR : Faux. Ne pas voter n'est pas une participation active à la vie citoyenne.
中：错误。不投票不是积极的公民参与行为。

B) ✅ Payer ses impôts
FR : Correct ! Payer ses impôts est un devoir citoyen et contribue au financement des services publics et au fonctionnement de la République.
中：正确。缴税是公民义务，有助于公共服务和国家运作。

C) ❌ Insulter un fonctionnaire
FR : Faux. Les insultes ne constituent pas une participation constructive à la vie citoyenne.
中：错误。侮辱公务员不是建设性的公民参与行为。

D) ❌ Boycotter les élections
FR : Faux. Boycotter les élections n'est pas une participation positive, au contraire, cela réduit l'implication civique.
中：错误。抵制选举不是积极的公民参与，反而削弱了公民责任。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
    options: [
      "Voter lors des élections",
      "Regarder la télévision tous les soirs",
      "Acheter des vêtements de marque",
      "Jouer aux jeux vidéo"
    ],
    answer: 0,
    explanation: `
A) ✅ Voter lors des élections
FR : Correct ! Voter est l'exemple le plus direct et important de participation citoyenne dans une démocratie.
中：正确。投票是民主国家最直接、最重要的公民参与形式。

B) ❌ Regarder la télévision tous les soirs
FR : Faux. Regarder la télévision est une activité personnelle, pas une participation citoyenne.
中：错误。看电视是个人行为，不属于公民参与。

C) ❌ Acheter des vêtements de marque
FR : Faux. 购物行为与公民责任无关。
中：错误。购买品牌服饰与公民责任无关。

D) ❌ Jouer aux jeux vidéo
FR : Faux. Jouer aux jeux vidéo est une activité de loisir, pas une participation civique.
中：错误。玩电子游戏属于娱乐活动，不算公民参与。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Que garantit la liberté d'expression ?",
    options: [
      "Le droit de dire tout ce que l'on veut sans limite",
      "Le droit d'exprimer ses idées dans le respect de la loi",
      "Le droit de nuire aux autres",
      "Le droit d'éviter l'école"
    ],
    answer: 1,
    explanation: `
A) ❌ Le droit de dire tout ce que l'on veut sans limite
FR : Faux. La liberté d'expression n'est pas absolue : elle est encadrée par la loi pour protéger les autres et l'ordre public.
中：错误。言论自由不是无限制的，法律对其进行规范以保护他人和公共秩序。

B) ✅ Le droit d'exprimer ses idées dans le respect de la loi
FR : Correct ! En France, chacun peut exprimer ses opinions librement, tant que cela respecte la loi (interdiction de diffamation, incitation à la haine ou violence).
中：正确。在法国，每个人都可以自由表达意见，但必须遵守法律（禁止诽谤、仇恨言论和煽动暴力）。

C) ❌ Le droit de nuire aux autres
FR : Faux. La liberté d'expression ne protège pas les comportements nuisibles aux autres.
中：错误。言论自由不保护伤害他人的行为。

D) ❌ Le droit d'éviter l'école
FR : Faux. Cela n'a aucun lien avec la liberté d'expression.
中：错误。逃学与言论自由无关。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "À quoi sert un titre de séjour ?",
    options: [
      "Pour voyager à l'étranger",
      "Pour résider légalement en France",
      "Pour voter",
      "Pour obtenir un emploi"
    ],
    answer: 1,
    explanation: `
A) ❌ Pour voyager à l'étranger
FR : Faux. Un passeport sert à voyager, pas un titre de séjour.
中：错误。护照用于出国旅行，居留证不是。

B) ✅ Pour résider légalement en France
FR : Correct ! Un titre de séjour permet aux étrangers de vivre légalement en France pour une durée déterminée ou permanente selon le type de titre.
中：正确。居留证允许外国人在法国合法居住，时间长短取决于证件类型。

C) ❌ Pour voter
FR : Faux. Le droit de vote est réservé aux citoyens français ou certaines élections pour les étrangers résidents, pas lié au titre de séjour.
中：错误。投票权属于法国公民，某些选举中允许居住外国人，但居留证本身不赋予投票权。

D) ❌ Pour obtenir un emploi
FR : Faux. Certains titres de séjour permettent de travailler, mais ce n'est pas la fonction principale du document.
中：错误。部分居留证允许工作，但这不是其主要功能。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Sur quel site internet peut-on retrouver le symbole de la République française ?",
    options: [
      "Gouvernement.fr",
      "Wikipédia",
      "Facebook",
      "Twitter"
    ],
    answer: 0,
    explanation: `
A) ✅ Gouvernement.fr
FR : Correct ! Le site officiel du gouvernement français publie tous les symboles officiels de la République (drapeau, devise, Marianne...).
中：正确。法国政府官方网站展示所有共和国官方象征（国旗、格言、玛丽安娜像等）。

B) ❌ Wikipédia
FR : Faux. Wikipédia est une source d'information générale, pas le site officiel de l'État.
中：错误。维基百科是信息来源，不是官方政府网站。

C) ❌ Facebook
FR : Faux. Facebook n'est pas un site officiel.
中：错误。Facebook 不是官方站点。

D) ❌ Twitter
FR : Faux. Twitter n'est pas une source officielle d'informations sur les symboles de l'État.
中：错误。Twitter 不是关于国家象征的官方信息来源。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "En application de la liberté individuelle, quelle proposition est correcte ? Une personne peut :",
    options: [
      "Agir librement dans le respect de la loi",
      "Faire ce qu'elle veut sans conséquence",
      "Ne pas respecter les droits des autres",
      "Imposer ses idées"
    ],
    answer: 0,
    explanation: `
A) ✅ Agir librement dans le respect de la loi
FR : Correct ! La liberté individuelle permet à chacun de faire ce qu'il souhaite, tant que ses actions respectent la loi et les droits d'autrui.
中：正确。个人自由允许每个人按照自己的意愿行事，但必须遵守法律并尊重他人权利。

B) ❌ Faire ce qu'elle veut sans conséquence
FR : Faux. La liberté n'exclut pas les responsabilités et les limites légales.
中：错误。自由不意味着可以无视责任或法律限制。

C) ❌ Ne pas respecter les droits des autres
FR : Faux. La liberté individuelle s'exerce dans le cadre des droits d'autrui.
中：错误。个人自由必须在尊重他人权利的前提下行使。

D) ❌ Imposer ses idées
FR : Faux. La liberté n'autorise pas la contrainte sur autrui.
中：错误。自由不允许强制别人接受自己的观点。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Que fait l'État pour lutter contre les discriminations ?",
    options: [
      "Il interdit certaines professions",
      "Il met en place des lois et des programmes",
      "Il favorise certaines religions",
      "Il ne fait rien"
    ],
    answer: 1,
    explanation: `
A) ❌ Il interdit certaines professions
FR : Faux. L'État ne supprime pas des professions pour lutter contre les discriminations ; il agit par la loi et les programmes éducatifs.
中：错误。政府不会为了打击歧视而禁止某些职业，而是通过法律和教育项目来解决问题。

B) ✅ Il met en place des lois et des programmes
FR : Correct ! L'État français a créé des lois contre le racisme, le sexisme, l'homophobie et d'autres formes de discrimination, ainsi que des programmes de sensibilisation et de soutien.
中：正确。法国政府制定了反对种族主义、性别歧视、恐同症等歧视行为的法律，并实施宣传教育和支持项目。

C) ❌ Il favorise certaines religions
FR : Faux. La République française est laïque : elle ne favorise aucune religion.
中：错误。法国是世俗国家，不偏袒任何宗教。

D) ❌ Il ne fait rien
FR : Faux. L'État agit activement contre les discriminations.
中：错误。政府积极采取行动反对歧视。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Que représente Marianne ?",
    options: [
      "La République",
      "La monarchie",
      "La France de Napoléon",
      "La liberté d'expression"
    ],
    answer: 0,
    explanation: `
A) ✅ La République
FR : Correct ! Marianne est un symbole de la République française, représentant la liberté, l'égalité et la fraternité. On la retrouve sur les timbres, les pièces et dans les mairies.
中：正确。玛丽安象征法国共和国，代表自由、平等与博爱。她出现在邮票、硬币和市政厅等场所。

B) ❌ La monarchie
FR : Faux. La monarchie n'est pas représentée par Marianne.
中：错误。玛丽安不代表君主制。

C) ❌ La France de Napoléon
FR : Faux. Marianne symbolise la République, pas l'Empire de Napoléon.
中：错误。玛丽安象征共和国，而非拿破仑时期的法国。

D) ❌ La liberté d'expression
FR : Faux. Bien qu'elle incarne des valeurs de liberté, elle représente l'ensemble de la République, pas uniquement la liberté d'expression.
中：错误。她虽体现自由价值，但代表的是整个共和国，而非仅仅言论自由。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Qu'est-ce que la liberté d'association ?",
    options: [
      "Le droit de créer ou rejoindre une association",
      "Le droit d'imposer des associations",
      "L'obligation de rejoindre une association",
      "Le droit de créer des impôts"
    ],
    answer: 0,
    explanation: `
A) ✅ Le droit de créer ou rejoindre une association
FR : Correct ! La liberté d'association permet à toute personne de fonder ou de rejoindre une association pour défendre des idées, organiser des activités ou aider la communauté.
中：正确。结社自由允许每个人创建或加入协会，以传播理念、组织活动或帮助社区。

B) ❌ Le droit d'imposer des associations
FR : Faux. Personne ne peut obliger d'autres à rejoindre une association.
中：错误。没有人可以强制他人加入协会。

C) ❌ L'obligation de rejoindre une association
FR : Faux. La participation à une association est volontaire, pas obligatoire.
中：错误。加入协会是自愿的，不是强制的。

D) ❌ Le droit de créer des impôts
FR : Faux. Les impôts sont décidés par l'État, pas par les associations.
中：错误。税收由政府决定，而非协会制定。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Qu'est-ce que la liberté ?",
    options: [
      "Le droit de faire tout ce qu'on veut",
      "Le droit d'agir dans le respect de la loi",
      "Le droit d'imposer ses idées",
      "Le droit de violer les règles"
    ],
    answer: 1,
    explanation: `
A) ❌ Le droit de faire tout ce qu'on veut
FR : Faux. La liberté n'est pas absolue : elle doit toujours respecter la loi et les droits d'autrui.
中：错误。自由不是绝对的，它必须遵守法律并尊重他人的权利。

B) ✅ Le droit d'agir dans le respect de la loi
FR : Correct ! La liberté consiste à pouvoir faire des choix et agir selon sa volonté, tout en respectant les lois et les droits des autres. C'est le principe fondamental de la République française.
中：正确。自由意味着可以按照自己的意愿做出选择和行动，但必须遵守法律并尊重他人的权利，这是法国共和国的基本原则。

C) ❌ Le droit d'imposer ses idées
FR : Faux. Imposer ses idées aux autres viole la liberté d'autrui.
中：错误。强加自己的想法给他人会侵犯他人的自由。

D) ❌ Le droit de violer les règles
FR : Faux. La liberté n'autorise pas à enfreindre les règles ou les lois.
中：错误。自由不允许违反规则或法律。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quand chante-t-on La Marseillaise ?",
    options: [
      "Lors de la fête nationale",
      "Lors d'une cérémonie de mariage",
      "Lors d'obsèques",
      "Lors d'un anniversaire privé"
    ],
    answer: 0,
    explanation: `
A) ✅ Lors de la fête nationale
FR : Correct ! L'hymne national français, La Marseillaise, est chanté lors du 14 juillet, la fête nationale, ainsi que lors d'autres cérémonies officielles.
中：正确。法国国歌《马赛曲》在7月14日国庆日以及其他官方仪式上演唱。

B) ❌ Lors d'une cérémonie de mariage
FR : Faux. La Marseillaise n'est pas un hymne spécifique aux mariages.
中：错误。《马赛曲》不是婚礼专用国歌。

C) ❌ Lors d'obsèques
FR : Faux. Elle n'est pas chantée lors des funérailles ordinaires, sauf cérémonies officielles exceptionnelles.
中：错误。通常葬礼不会演唱《马赛曲》，除非是特殊官方仪式。

D) ❌ Lors d'un anniversaire privé
FR : Faux. Les anniversaires privés ne nécessitent pas l'hymne national.
中：错误。私人生日场合不需要唱国歌。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Une des valeurs de la devise républicaine est l'égalité. Qu'est-ce que cela signifie ?",
    options: [
      "Tous les citoyens doivent avoir le même revenu",
      "Tous les citoyens ont les mêmes droits",
      "Certains citoyens ont plus de droits",
      "L'État décide de l'égalité"
    ],
    answer: 1,
    explanation: `
A) ❌ Tous les citoyens doivent avoir le même revenu
FR : Faux. L'égalité ne signifie pas que tout le monde doit avoir exactement le même revenu, mais que tous doivent bénéficier des mêmes droits devant la loi et les institutions.
中：错误。平等并不意味着每个人收入完全相同，而是所有人在法律和制度面前享有平等权利。

B) ✅ Tous les citoyens ont les mêmes droits
FR : Correct ! L'égalité signifie que chaque citoyen, quel que soit son sexe, son origine ou sa religion, doit avoir les mêmes droits et être traité de manière équitable par la loi.
中：正确。平等意味着每位公民，无论性别、出身或宗教，都应享有相同权利，并受到法律公平对待。

C) ❌ Certains citoyens ont plus de droits
FR : Faux. La République garantit que personne n'a plus de droits qu'un autre citoyen.
中：错误。共和国保障没有人拥有比其他公民更多的权利。

D) ❌ L'État décide de l'égalité
FR : Faux. L'État garantit l'égalité par la loi, mais ne choisit pas arbitrairement qui est égal ou non.
中：错误。国家通过法律保障平等，而不是任意决定谁平等。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quelle est la place de la langue française dans la République ?",
    options: [
      "Langue secondaire",
      "Langue officielle",
      "Langue facultative",
      "Langue régionale"
    ],
    answer: 1,
    explanation: `
A) ❌ Langue secondaire
FR : Faux. Le français n'est pas secondaire, c'est la langue principale de la République.
中：错误。法语不是次要语言，而是共和国的主要语言。

B) ✅ Langue officielle
FR : Correct ! Le français est la langue officielle de la République française, utilisée dans l'administration, l'enseignement et la vie publique.
中：正确。法语是法国的官方语言，用于政府行政、教育和公共生活。

C) ❌ Langue facultative
FR : Faux. Elle n'est pas optionnelle, elle est obligatoire dans les documents officiels et l'administration.
中：错误。法语不是可选语言，在官方文件和行政事务中是必须使用的。

D) ❌ Langue régionale
FR : Faux. Bien que certaines langues régionales existent, le français reste la langue officielle nationale.
中：错误。虽然存在地方语言，但法语是全国官方语言。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quels sont des symboles officiels de la République française ?",
    options: [
      "Marianne, le drapeau tricolore, la Marseillaise",
      "Le coq seulement",
      "La tour Eiffel",
      "Napoléon"
    ],
    answer: 0,
    explanation: `
A) ✅ Marianne, le drapeau tricolore, la Marseillaise
FR : Correct ! Ces symboles représentent la République : Marianne incarne les valeurs républicaines, le drapeau tricolore est le symbole national, et La Marseillaise est l'hymne national.
中：正确。这些象征代表共和国：玛丽安体现共和国价值观，三色旗是国家象征，《马赛曲》是国歌。

B) ❌ Le coq seulement
FR : Faux. Le coq est un symbole populaire mais non officiel de la République.
中：错误。公鸡是民间象征，但不是官方象征。

C) ❌ La tour Eiffel
FR : Faux. La tour Eiffel est un monument emblématique mais pas un symbole officiel de la République.
中：错误。埃菲尔铁塔是标志性建筑，但不是共和国官方象征。

D) ❌ Napoléon
FR : Faux. Napoléon représente l'Empire et l'Histoire, pas la République actuelle.
中：错误。拿破仑代表帝国和历史，而不是现行共和国。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Le régime de la France est :",
    options: [
      "Monarchie",
      "Démocratie",
      "Dictature",
      "Confédération"
    ],
    answer: 1,
    explanation: `
A) ❌ Monarchie
FR : Faux. La France n'a pas de roi ni de reine depuis la Révolution française.
中：错误。法国自法国大革命后没有国王或女王。

B) ✅ Démocratie
FR : Correct ! La France est une démocratie : le pouvoir vient du peuple, les citoyens votent et participent à la vie politique.
中：正确。法国是民主国家：权力来源于人民，公民通过投票参与政治生活。

C) ❌ Dictature
FR : Faux. La France garantit les libertés et les droits fondamentaux des citoyens, contrairement à une dictature.
中：错误。法国保障公民自由和基本权利，不是独裁制度。

D) ❌ Confédération
FR : Faux. La France est un État unitaire et non une confédération d'États indépendants.
中：错误。法国是单一制国家，不是独立州的邦联。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Que dit l'article 1er de la Constitution française ?",
    options: [
      "La France est une République indivisible, laïque, démocratique et sociale",
      "La France est une monarchie",
      "La France est une confédération",
      "La France est une dictature"
    ],
    answer: 0,
    explanation: `
A) ✅ La France est une République indivisible, laïque, démocratique et sociale
FR : Correct ! L'article 1er de la Constitution de 1958 définit la France comme une République qui ne peut être divisée, qui respecte la laïcité, garantit la démocratie et prend en compte la dimension sociale.
中：正确。1958年宪法第1条规定法国为不可分割的共和国，尊重世俗原则，保障民主制度，并重视社会公正。

B) ❌ La France est une monarchie
FR : Faux. La France n'est plus une monarchie depuis la Révolution française.
中：错误。自法国大革命以来，法国不再是君主制国家。

C) ❌ La France est une confédération
FR : Faux. La France est un État unitaire, pas une confédération de plusieurs États.
中：错误。法国是单一制国家，而非由多个州组成的邦联。

D) ❌ La France est une dictature
FR : Faux. La France est une République démocratique, donc pas une dictature.
中：错误。法国是民主共和国，而非独裁国家。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Qu'est-ce qui est traditionnellement organisé sur les Champs Élysées le 14 juillet ?",
    options: [
      "Un feu d'artifice géant",
      "Un concert en plein air",
      "Un défilé militaire",
      "Une parade de chars décorés"
    ],
    answer: 2,
    explanation: `
A) ❌ Un feu d'artifice géant
FR : Faux. Bien que des feux d'artifice aient lieu à Paris le 14 juillet, le défilé militaire sur les Champs Élysées est l'événement traditionnel et emblématique.
中：错误。虽然巴黎会有焰火表演，但香榭丽舍大道上的阅兵仪式才是传统和标志性活动。

B) ❌ Un concert en plein air
FR : Faux. Des concerts peuvent être organisés dans certains lieux, mais ce n'est pas la tradition principale des Champs Élysées.
中：错误。虽然某些地方会有露天音乐会，但香榭丽舍大道上的传统活动不是音乐会。

C) ✅ Un défilé militaire
FR : Correct ! Le 14 juillet, jour de la fête nationale française, un défilé militaire officiel a lieu sur les Champs Élysées à Paris, en présence des autorités et du président de la République.
中：正确。7月14日法国国庆日，香榭丽舍大道上会举行官方军事阅兵，总统及政府官员会出席。

D) ❌ Une parade de chars décorés
FR : Faux. Il n'y a pas de parade de chars décorés sur les Champs Élysées comme tradition nationale.
中：错误。香榭丽舍大道上没有装饰坦克或彩车游行的传统活动。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Dans les écoles, on peut voir la devise :",
    options: [
      "Liberté, égalité, fraternité",
      "Liberté et fraternité",
      "Paix et liberté",
      "Égalité et fraternité"
    ],
    answer: 0,
    explanation: `
a) ✅ Liberté, égalité, fraternité
FR : Correct. « Liberté, égalité, fraternité » est la devise de la République française.
中：正确。"自由、平等、博爱"是法国共和国的格言。

b) ❌ Liberté et fraternité
FR : Faux. La devise officielle comprend aussi « égalité ».
中：错误。官方格言还包含"平等"。

c) ❌ Paix et liberté
FR : Faux. La devise officielle n'est pas « paix et liberté ».
中：错误。官方格言不是"和平与自由"。

d) ❌ Égalité et fraternité
FR : Faux. La devise officielle inclut également « liberté ».
中：错误。官方格言还包括"自由"。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Pour vivre légalement en France, un étranger a besoin de :",
    options: [
      "Un passeport",
      "Un titre de séjour",
      "Une carte bancaire",
      "Un permis de conduire"
    ],
    answer: 1,
    explanation: `
a) ❌ Un passeport
FR : Faux. Le passeport seul ne suffit pas pour vivre légalement en France.
中：错误。护照本身不足以合法居住在法国。

b) ✅ Un titre de séjour
FR : Correct. Un étranger doit posséder un titre de séjour valide pour vivre légalement en France.
中：正确。外国人必须持有有效居留证才能在法国合法居住。

c) ❌ Une carte bancaire
FR : Faux. Une carte bancaire n'est pas un document nécessaire pour vivre légalement en France.
中：错误。银行卡不是合法居住所必须的文件。

d) ❌ Un permis de conduire
FR : Faux. Un permis de conduire n'est pas requis pour vivre légalement en France.
中：错误。驾照不是合法居住的必要条件。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Quel texte fondateur affirme les libertés fondamentales en France ?",
    options: [
      "La Constitution",
      "Le règlement intérieur des écoles",
      "Le code du travail uniquement",
      "Les lois locales"
    ],
    answer: 0,
    explanation: `
a) ✅ La Constitution
FR : Correct. La Constitution affirme les libertés fondamentales en France.
中：正确。宪法确认法国的基本自由权利。

b) ❌ Le règlement intérieur des écoles
FR : Faux. Le règlement intérieur ne définit pas les libertés fondamentales.
中：错误。校规不规定基本自由权利。

c) ❌ Le code du travail uniquement
FR : Faux. Le code du travail concerne les règles du travail, pas l'ensemble des libertés fondamentales.
中：错误。劳动法典只涉及劳动规则，不是全部基本自由的来源。

d) ❌ Les lois locales
FR : Faux. Les lois locales ne définissent pas les libertés fondamentales.
中：错误。地方法律不构成基本自由的根本来源。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "La République française repose sur combien de valeurs principales dans sa devise ?",
    options: [
      "Deux",
      "Trois",
      "Quatre",
      "Cinq"
    ],
    answer: 1,
    explanation: `
a) ❌ Deux
FR : Faux. La devise contient trois valeurs.
中：错误。格言包含三项价值观。

b) ✅ Trois
FR : Correct. La devise « Liberté, égalité, fraternité » comprend trois valeurs principales.
中：正确。"自由、平等、博爱"包含三项主要价值观。

c) ❌ Quatre
FR : Faux. La devise n'en contient pas quatre.
中：错误。格言不是四项。

d) ❌ Cinq
FR : Faux. La devise n'en contient pas cinq.
中：错误。格言不是五项。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "La démocratie signifie que le pouvoir appartient :",
    options: [
      "Au roi",
      "À l'armée",
      "Au peuple",
      "À la religion"
    ],
    answer: 2,
    explanation: `
a) ❌ Au roi
FR : Faux. En démocratie, le pouvoir n'appartient pas au roi.
中：错误。在民主制度中，权力不属于国王。

b) ❌ À l'armée
FR : Faux. En démocratie, le pouvoir ne revient pas à l'armée.
中：错误。在民主制度中，权力不属于军队。

c) ✅ Au peuple
FR : Correct. La démocratie signifie que le pouvoir appartient au peuple.
中：正确。民主意味着权力属于人民。

d) ❌ À la religion
FR : Faux. En démocratie, le pouvoir ne dépend pas d'une religion.
中：错误。在民主制度中，权力不属于宗教。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Le respect des lois est :",
    options: [
      "Facultatif",
      "Obligatoire pour tous",
      "Réservé aux fonctionnaires",
      "Optionnel selon les croyances"
    ],
    answer: 1,
    explanation: `
a) ❌ Facultatif
FR : Faux. Le respect des lois n'est pas facultatif.
中：错误。遵守法律不是可选择的。

b) ✅ Obligatoire pour tous
FR : Correct. Les lois s'appliquent à tous, et leur respect est obligatoire.
中：正确。法律适用于所有人，必须遵守。

c) ❌ Réservé aux fonctionnaires
FR : Faux. Les lois s'appliquent à tous, pas seulement aux fonctionnaires.
中：错误。法律不仅适用于公职人员，而是适用于所有人。

d) ❌ Optionnel selon les croyances
FR : Faux. Les croyances ne permettent pas d'échapper à la loi.
中：错误。信仰不能成为不遵守法律的理由。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Quel document fixe les règles fondamentales de l'organisation de l'État ?",
    options: [
      "La Constitution",
      "Le règlement scolaire",
      "Le livret de famille",
      "Le passeport"
    ],
    answer: 0,
    explanation: `
a) ✅ La Constitution
FR : Correct. La Constitution fixe les règles fondamentales de l'organisation de l'État.
中：正确。宪法规定国家组织的基本规则。

b) ❌ Le règlement scolaire
FR : Faux. Le règlement scolaire concerne uniquement l'organisation de l'école.
中：错误。校规只涉及学校的管理规则。

c) ❌ Le livret de famille
FR : Faux. Le livret de famille est un document d'état civil, pas un texte fondamental de l'État.
中：错误。家庭手册是民事证明文件，不是国家基本法律。

d) ❌ Le passeport
FR : Faux. Le passeport est un document de voyage, pas un texte qui organise l'État.
中：错误。护照是旅行证件，不是国家组织的法律文件。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "La République garantit-elle l'égalité entre les femmes et les hommes ?",
    options: [
      "Non",
      "Oui",
      "Seulement dans le travail",
      "Seulement dans la famille"
    ],
    answer: 1,
    explanation: `
a) ❌ Non
FR : Faux. La République garantit l'égalité entre femmes et hommes.
中：错误。共和国保障男女平等。

b) ✅ Oui
FR : Correct. La République garantit l'égalité entre les femmes et les hommes.
中：正确。共和国保障男女平等。

c) ❌ Seulement dans le travail
FR : Faux. L'égalité s'applique dans tous les domaines.
中：错误。平等适用于所有领域。

d) ❌ Seulement dans la famille
FR : Faux. L'égalité n'est pas limitée à la famille.
中：错误。平等不只限于家庭领域。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "L'égalité signifie que la loi s'applique :",
    options: [
      "Différemment selon les personnes",
      "De la même manière pour tous",
      "Selon la religion",
      "Selon la richesse"
    ],
    answer: 1,
    explanation: `
a) ❌ Différemment selon les personnes
FR : Faux. L'égalité signifie l'application identique de la loi.
中：错误。平等意味着法律对所有人相同适用。

b) ✅ De la même manière pour tous
FR : Correct. L'égalité signifie que la loi s'applique de la même manière pour tous.
中：正确。平等意味着法律对所有人一视同仁。

c) ❌ Selon la religion
FR : Faux. La religion ne doit pas influencer l'application de la loi.
中：错误。宗教不能影响法律适用。

d) ❌ Selon la richesse
FR : Faux. La richesse ne doit pas influencer l'application de la loi.
中：错误。财富不能影响法律适用。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "La liberté de conscience concerne :",
    options: [
      "Les opinions religieuses ou non",
      "Le choix du métier",
      "Le droit de vote",
      "Le paiement des impôts"
    ],
    answer: 0,
    explanation: `
a) ✅ Les opinions religieuses ou non
FR : Correct. La liberté de conscience protège les opinions religieuses et non religieuses.
中：正确。良心自由保护宗教或非宗教的信仰与观点。

b) ❌ Le choix du métier
FR : Faux. Le choix du métier relève d'une autre liberté.
中：错误。职业选择属于其他自由范畴。

c) ❌ Le droit de vote
FR : Faux. Le droit de vote n'est pas la liberté de conscience.
中：错误。投票权不属于良心自由。

d) ❌ Le paiement des impôts
FR : Faux. Le paiement des impôts n'est pas lié à la liberté de conscience.
中：错误。缴税与良心自由无关。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "La liberté individuelle a pour limite principale :",
    options: [
      "Les traditions",
      "Les droits des autres et la loi",
      "L'opinion publique",
      "L'âge"
    ],
    answer: 1,
    explanation: `
a) ❌ Les traditions
FR : Faux. Les traditions ne sont pas la limite principale de la liberté individuelle.
中：错误。传统不是个人自由的主要限制。

b) ✅ Les droits des autres et la loi
FR : Correct. La liberté individuelle est limitée par les droits des autres et par la loi.
中：正确。个人自由的主要限制是他人权利和法律。

c) ❌ L'opinion publique
FR : Faux. L'opinion publique ne constitue pas une limite juridique principale.
中：错误。舆论不是主要的法律限制。

d) ❌ L'âge
FR : Faux. L'âge peut influencer certaines règles, mais ce n'est pas la limite principale.
中：错误。年龄不是个人自由的主要限制。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Un citoyen doit respecter :",
    options: [
      "Uniquement ses opinions",
      "La loi",
      "Seulement les règles locales",
      "Les traditions religieuses"
    ],
    answer: 1,
    explanation: `
a) ❌ Uniquement ses opinions
FR : Faux. Un citoyen ne doit pas uniquement respecter ses opinions, mais aussi les règles communes.
中：错误。公民不能只遵守自己的观点，还必须遵守公共规则。

b) ✅ La loi
FR : Correct. Un citoyen doit respecter la loi, qui s'applique à tous.
中：正确。公民必须遵守法律，法律对所有人都适用。

c) ❌ Seulement les règles locales
FR : Faux. Les règles locales ne remplacent pas la loi nationale.
中：错误。地方规则不能取代国家法律。

d) ❌ Les traditions religieuses
FR : Faux. Les traditions religieuses ne sont pas obligatoires pour tous, sauf si elles sont imposées par la loi.
中：错误。宗教传统不对所有人具有强制性，只有法律规定的情况才必须遵守。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Un service public doit traiter les usagers :",
    options: [
      "Différemment selon leurs croyances",
      "De manière égale",
      "Selon leur origine",
      "Selon leur genre"
    ],
    answer: 1,
    explanation: `
a) ❌ Différemment selon leurs croyances
FR : Faux. Le service public doit être neutre et ne pas traiter différemment selon les croyances.
中：错误。公共服务必须保持中立，不应根据信仰区别对待。

b) ✅ De manière égale
FR : Correct. Le service public doit traiter tous les usagers de manière égale.
中：正确。公共服务应平等对待所有使用者。

c) ❌ Selon leur origine
FR : Faux. La nationalité ou l'origine ne doit pas influencer le traitement.
中：错误。出身或国籍不应影响服务对待方式。

d) ❌ Selon leur genre
FR : Faux. Le genre ne doit pas influencer le traitement.
中：错误。性别不应影响公共服务的对待方式。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "La République française reconnaît :",
    options: [
      "Des citoyens supérieurs",
      "Des droits égaux",
      "Une religion dominante",
      "Des privilèges héréditaires"
    ],
    answer: 1,
    explanation: `
a) ❌ Des citoyens supérieurs
FR : Faux. La République reconnaît l'égalité entre tous les citoyens.
中：错误。共和国不承认任何公民优越。

b) ✅ Des droits égaux
FR : Correct. La République reconnaît l'égalité des droits pour tous.
中：正确。共和国承认所有人的平等权利。

c) ❌ Une religion dominante
FR : Faux. La République est laïque et ne reconnaît aucune religion dominante.
中：错误。共和国是世俗的，不承认任何主导宗教。

d) ❌ Des privilèges héréditaires
FR : Faux. La République refuse les privilèges héréditaires.
中：错误。共和国反对世袭特权。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Le respect de la loi est une :",
    options: [
      "Option",
      "Obligation civique",
      "Tradition",
      "Recommandation"
    ],
    answer: 1,
    explanation: `
a) ❌ Option
FR : Faux. Le respect de la loi n'est pas optionnel.
中：错误。遵守法律不是可选的。

b) ✅ Obligation civique
FR : Correct. Respecter la loi est une obligation civique pour tous.
中：正确。遵守法律是每个公民的义务。

c) ❌ Tradition
FR : Faux. Le respect de la loi n'est pas une simple tradition.
中：错误。遵守法律不是传统，而是义务。

d) ❌ Recommandation
FR : Faux. Ce n'est pas une recommandation, c'est une obligation.
中：错误。这不是建议，而是义务。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Les règles communes permettent :",
    options: [
      "Le désordre",
      "Le vivre-ensemble",
      "La discrimination",
      "La hiérarchie religieuse"
    ],
    answer: 1,
    explanation: `
a) ❌ Le désordre
FR : Faux. Les règles communes visent à éviter le désordre.
中：错误。共同规则旨在避免混乱。

b) ✅ Le vivre-ensemble
FR : Correct. Les règles communes permettent de vivre ensemble en société.
中：正确。共同规则促进社会共同生活。

c) ❌ La discrimination
FR : Faux. Les règles communes doivent empêcher la discrimination.
中：错误。共同规则应防止歧视。

d) ❌ La hiérarchie religieuse
FR : Faux. Les règles communes ne créent pas de hiérarchie religieuse.
中：错误。共同规则不建立宗教等级。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "La liberté s'exerce :",
    options: [
      "Sans aucune limite",
      "Dans le cadre de la loi",
      "Selon l'origine",
      "Selon la religion"
    ],
    answer: 1,
    explanation: `
a) ❌ Sans aucune limite
FR : Faux. La liberté n'est pas absolue.
中：错误。自由不是无限的。

b) ✅ Dans le cadre de la loi
FR : Correct. La liberté s'exerce dans le respect de la loi.
中：正确。自由必须在法律框架内行使。

c) ❌ Selon l'origine
FR : Faux. La liberté ne dépend pas de l'origine.
中：错误。自由不取决于出身。

d) ❌ Selon la religion
FR : Faux. La liberté ne dépend pas de la religion.
中：错误。自由不取决于宗教。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "La République assure la protection :",
    options: [
      "De certains groupes",
      "De tous les citoyens",
      "Des croyants uniquement",
      "Des riches"
    ],
    answer: 1,
    explanation: `
a) ❌ De certains groupes
FR : Faux. La République protège tous les citoyens, pas seulement certains groupes.
中：错误。共和国保护所有公民，而不是某些特定群体。

b) ✅ De tous les citoyens
FR : Correct. La République assure la protection de tous les citoyens.
中：正确。共和国保障所有公民的保护。

c) ❌ Des croyants uniquement
FR : Faux. La protection ne dépend pas de la croyance religieuse.
中：错误。保护不取决于宗教信仰。

d) ❌ Des riches
FR : Faux. La protection n'est pas réservée aux riches.
中：错误。保护不只针对富人。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "L'égalité interdit :",
    options: [
      "Toute différence",
      "Les discriminations",
      "Les opinions",
      "Les débats"
    ],
    answer: 1,
    explanation: `
a) ❌ Toute différence
FR : Faux. L'égalité n'interdit pas toute différence, mais interdit les discriminations.
中：错误。平等不禁止所有差异，而是禁止歧视。

b) ✅ Les discriminations
FR : Correct. L'égalité interdit les discriminations.
中：正确。平等禁止歧视行为。

c) ❌ Les opinions
FR : Faux. L'égalité ne supprime pas les opinions.
中：错误。平等不剥夺意见。

d) ❌ Les débats
FR : Faux. L'égalité ne supprime pas les débats.
中：错误。平等不禁止讨论。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "La loi s'applique :",
    options: [
      "Aux étrangers seulement",
      "À tous",
      "Aux fonctionnaires uniquement",
      "Aux croyants"
    ],
    answer: 1,
    explanation: `
a) ❌ Aux étrangers seulement
FR : Faux. La loi s'applique à tous, pas seulement aux étrangers.
中：错误。法律适用于所有人，不仅限于外国人。

b) ✅ À tous
FR : Correct. La loi s'applique à tous sur le territoire.
中：正确。法律适用于所有人。

c) ❌ Aux fonctionnaires uniquement
FR : Faux. La loi ne s'applique pas uniquement aux fonctionnaires.
中：错误。法律不只适用于公职人员。

d) ❌ Aux croyants
FR : Faux. La loi s'applique à tous, croyants ou non.
中：错误。法律适用于所有人，无论是否信仰。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "La République française protège :",
    options: [
      "Les libertés",
      "Les discriminations",
      "Les privilèges",
      "Les exclusions"
    ],
    answer: 0,
    explanation: `
a) ✅ Les libertés
FR : Correct. La République protège les libertés des citoyens.
中：正确。共和国保护公民的自由。

b) ❌ Les discriminations
FR : Faux. La République lutte contre les discriminations.
中：错误。共和国反对歧视。

c) ❌ Les privilèges
FR : Faux. La République refuse les privilèges.
中：错误。共和国反对特权。

d) ❌ Les exclusions
FR : Faux. La République lutte contre les exclusions.
中：错误。共和国反对排斥。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Le respect mutuel est lié à :",
    options: [
      "L'égalité",
      "La hiérarchie",
      "La richesse",
      "La religion"
    ],
    answer: 0,
    explanation: `
a) ✅ L'égalité
FR : Correct. Le respect mutuel est lié au principe d'égalité entre tous.
中：正确。相互尊重与人人平等原则相关。

b) ❌ La hiérarchie
FR : Faux. Le respect mutuel ne dépend pas d'une hiérarchie.
中：错误。相互尊重不依赖等级制度。

c) ❌ La richesse
FR : Faux. Le respect mutuel ne dépend pas de la richesse.
中：错误。相互尊重与财富无关。

d) ❌ La religion
FR : Faux. Le respect mutuel ne dépend pas de la religion.
中：错误。相互尊重不取决于宗教。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Les règles communes servent à :",
    options: [
      "Diviser",
      "Organiser la vie en société",
      "Exclure",
      "Imposer une religion"
    ],
    answer: 1,
    explanation: `
a) ❌ Diviser
FR : Faux. Les règles communes visent à unir et organiser la société.
中：错误。共同规则旨在团结和组织社会，而不是分裂。

b) ✅ Organiser la vie en société
FR : Correct. Les règles communes servent à organiser la vie en société.
中：正确。共同规则用于组织社会生活。

c) ❌ Exclure
FR : Faux. Les règles communes ne visent pas à exclure.
中：错误。共同规则不是为了排斥。

d) ❌ Imposer une religion
FR : Faux. Les règles communes ne servent pas à imposer une religion.
中：错误。共同规则不用于强制宗教。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Un citoyen peut avoir :",
    options: [
      "Une seule opinion autorisée",
      "Des opinions différentes",
      "Une opinion imposée",
      "Aucune opinion"
    ],
    answer: 1,
    explanation: `
a) ❌ Une seule opinion autorisée
FR : Faux. Les citoyens peuvent avoir des opinions différentes.
中：错误。公民可以有不同观点，而不是只有一个被允许的观点。

b) ✅ Des opinions différentes
FR : Correct. Un citoyen peut avoir des opinions différentes.
中：正确。公民可以持有不同的意见。

c) ❌ Une opinion imposée
FR : Faux. Une opinion ne peut pas être imposée.
中：错误。意见不能被强制。

d) ❌ Aucune opinion
FR : Faux. Tout citoyen peut avoir une opinion.
中：错误。每个公民都可以有自己的观点。
    `.trim()
  }
];
