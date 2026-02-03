const questionsTenYears = [
  // ==================== Mises en situation (十年卡) ====================
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Madame X a une entreprise de logistique. Madame Y, qui a des difficultés de mobilité, vient postuler. Que peut faire Madame X ?",
    options: [
      "Madame X peut la refuser directement à cause de son handicap",
      "Madame X doit lui faire passer l'entretien comme pour un candidat valide",
      "Madame X doit l'embaucher immédiatement",
      "Madame Y ne devrait pas venir passer l'entretien"
    ],
    answer: 1,
    explanation: `
A) ❌ Madame X peut la refuser directement à cause de son handicap
FR : Faux. Refuser un candidat à cause de son handicap est une discrimination interdite par la loi.
中：错误。因为残疾而直接拒绝求职者属于违法歧视。

B) ✅ Madame X doit lui faire passer l'entretien comme pour un candidat valide
FR : Correct ! Tous les candidats doivent être traités de manière égale.
中：正确！所有候选人都应被平等对待，包括面试机会。

C) ❌ Madame X doit l'embaucher immédiatement
FR : Faux. L'employeur n'est pas obligé d'embaucher, mais doit évaluer les compétences.
中：错误。雇主没有义务立刻录用，但必须公平评估能力。

D) ❌ Madame Y ne devrait pas venir passer l'entretien
FR : Faux. Toute personne a le droit de postuler à un emploi.
中：错误。任何人都有应聘工作的权利。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Monsieur X publie une critique du gouvernement sur Facebook. Que dit la liberté d'expression ?",
    options: [
      "Il peut en parler seulement avec sa famille, pas sur Internet",
      "Il doit uniquement dire du bien du gouvernement",
      "Il peut exprimer son opinion tant qu'il respecte la loi",
      "Il n'a pas le droit de parler de politique"
    ],
    answer: 2,
    explanation: `
A) ❌ Il peut en parler seulement avec sa famille, pas sur Internet
FR : Faux. La liberté d'expression ne se limite pas à la famille.
中：错误。言论自由不限于家庭内部。

B) ❌ Il doit uniquement dire du bien du gouvernement
FR : Faux. La liberté d'expression permet de critiquer le gouvernement.
中：错误。言论自由允许批评政府。

C) ✅ Il peut exprimer son opinion tant qu'il respecte la loi
FR : Correct ! La liberté d'expression s'exerce dans le respect des lois et des autres.
中：正确。言论自由是在遵守法律和尊重他人的前提下表达观点。

D) ❌ Il n'a pas le droit de parler de politique
FR : Faux. Les citoyens peuvent discuter de politique librement dans le cadre légal.
中：错误。公民可以在法律允许范围内自由讨论政治。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Un homme peut-il avoir plusieurs épouses en France ?",
    options: [
      "C'est interdit",
      "C'est possible",
      "C'est autorisé pour certaines religions",
      "C'est décidé par le ministre"
    ],
    answer: 0,
    explanation: `
A) ✅ C'est interdit
FR : Correct ! La polygamie est strictement interdite en France pour tous, quelle que soit la religion ou la culture. Le mariage doit être monogame.
中：正确。法国严格禁止一夫多妻制，不论宗教或文化背景如何，婚姻必须是一夫一妻制。

B) ❌ C'est possible
FR : Faux. La loi française ne permet pas d'avoir plusieurs épouses simultanément.
中：错误。法国法律不允许同时有多个妻子。

C) ❌ C'est autorisé pour certaines religions
FR : Faux. Aucune religion ne peut légalement autoriser la polygamie en France ; la loi prime toujours sur la religion.
中：错误。在法国，没有宗教可以合法允许一夫多妻制；法律高于宗教。

D) ❌ C'est décidé par le ministre
FR : Faux. Le mariage polygame n'est pas une question de décision administrative, c'est interdit par la loi.
中：错误。一夫多妻制不是行政决定问题，而是法律禁止的行为。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "La répudiation de sa femme est :",
    options: [
      "Légale",
      "Interdite",
      "Autorisée seulement pour certaines religions",
      "Facultative"
    ],
    answer: 1,
    explanation: `
A) ❌ Légale
FR : Faux. La répudiation unilatérale (mettre fin au mariage sans procédure judiciaire) est interdite en France. Le divorce doit suivre une procédure légale.
中：错误。在法国，单方面驱逐妻子（无司法程序解除婚姻）是非法的。离婚必须经过法律程序。

B) ✅ Interdite
FR : Correct ! On ne peut pas répudier sa femme comme dans certaines traditions anciennes. La loi protège le mariage et les droits de chacun.
中：正确。在法国，不能像某些古老传统那样随意休妻。法律保护婚姻及每个人的权利。

C) ❌ Autorisée seulement pour certaines religions
FR : Faux. La loi française interdit la répudiation quelle que soit la religion.
中：错误。无论宗教信仰如何，法国法律都禁止驱逐妻子。

D) ❌ Facultative
FR : Faux. La répudiation n'est pas une option légale ; seule la procédure de divorce encadrée par la loi est possible.
中：错误。驱逐妻子不是合法选择，只有通过法律程序的离婚才被允许。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Que peut faire un usager du service public dans une mairie ?",
    options: [
      "Demander un document administratif",
      "Organiser un événement religieux",
      "Imposer sa religion",
      "Modifier la loi"
    ],
    answer: 0,
    explanation: `
A) ✅ Demander un document administratif
FR : Correct ! Les usagers des services publics, comme dans une mairie, peuvent effectuer des démarches administratives : demander une carte d'identité, un passeport, un acte de naissance, ou tout autre document officiel. Cela relève de leurs droits civiques et de l'accès aux services publics.
中：正确。公共服务的使用者（如市政厅）可以办理行政事务：申请身份证、护照、出生证明或其他官方文件。这属于公民权利和公共服务的基本保障。

B) ❌ Organiser un événement religieux
FR : Faux. Une mairie est un service public laïc ; elle ne peut pas organiser ou promouvoir un événement religieux.
中：错误。市政厅是世俗公共机构，不能组织或推广宗教活动。

C) ❌ Imposer sa religion
FR : Faux. Selon le principe de laïcité, personne ne peut imposer sa religion dans un service public.
中：错误。根据世俗原则，任何人都不能在公共服务机构中强制推广自己的宗教信仰。

D) ❌ Modifier la loi
FR : Faux. Les citoyens ne peuvent pas modifier la loi directement dans une mairie ; cela relève du pouvoir législatif.
中：错误。公民不能直接在市政厅修改法律，这是立法机关的职权范围。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "难",
    question: "Madame X et Monsieur Y occupent des postes similaires dans la même entreprise. Laquelle des situations suivantes n'est pas conforme au principe d'égalité ?",
    options: [
      "Monsieur Y perçoit un salaire plus élevé que Madame X en raison d'une expérience professionnelle plus importante.",
      "Bien que Madame X soit en situation de handicap, elle bénéficie des mêmes conditions de travail et de traitement que Monsieur Y.",
      "Le congé maternité de Madame X est plus long que le congé de Monsieur Y.",
      "Le salaire de Madame X est réduit en raison de ses opinions politiques différentes de celles de son employeur"
    ],
    answer: 3,
    explanation: `
A) ❌ Monsieur Y perçoit un salaire plus élevé que Madame X en raison d'une expérience professionnelle plus importante
FR : Faux. Ici, la différence de salaire est justifiée par l'expérience professionnelle, ce qui respecte le principe d'égalité puisque les critères sont objectifs.
中：错误。这里工资差异是由于工作经验不同造成的，这是客观标准，符合平等原则。

B) ❌ Bien que Madame X soit en situation de handicap, elle bénéficie des mêmes conditions de travail et de traitement que Monsieur Y
FR : Faux. Cette situation est conforme à l'égalité : les personnes en situation de handicap doivent avoir un traitement équitable, avec des adaptations si nécessaire.
中：错误。这种情况符合平等原则：残障人士应享有公平待遇，并根据需要进行适当调整。

C) ❌ Le congé maternité de Madame X est plus long que le congé de Monsieur Y
FR : Faux. Le congé maternité est spécifique à la maternité et ne constitue pas une violation du principe d'égalité.
中：错误。产假是针对生育的特殊安排，不违反平等原则。

D) ✅ Le salaire de Madame X est réduit en raison de ses opinions politiques différentes de celles de son employeur
FR : Correct ! Réduire le salaire d'une personne pour ses opinions politiques constitue une discrimination, ce qui est contraire au principe d'égalité.
中：正确。因政治观点不同而降低工资属于歧视行为，违反平等原则。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "难",
    question: "Monsieur Y se rend à la préfecture pour effectuer une démarche concernant son permis de conduire. Il souhaite être reçu par un agent qui partage la religion bouddhiste afin d'échanger avec lui. Laquelle des propositions suivantes est correcte ?",
    options: [
      "Il a le droit de choisir, car il est possible de discuter librement de sa religion dans un service public.",
      "Il n'a pas le droit de choisir, car la religion ne peut pas être prise en compte dans un service public.",
      "Seuls les agents peuvent le choisir, car eux seuls ont le droit d'exprimer et de discuter de leur religion.",
      "Les agents ne peuvent pas le choisir, car ils n'ont pas le droit de discuter de religion dans l'exercice de leurs fonctions."
    ],
    answer: 1,
    explanation: `
A) ❌ Il a le droit de choisir, car il est possible de discuter librement de sa religion dans un service public
FR : Faux. Dans un service public, la religion des agents ne doit pas influencer le service rendu aux usagers ; choisir un agent en fonction de sa religion serait contraire au principe de neutralité.
中：错误。在公共服务中，公职人员的宗教信仰不得影响服务；根据宗教选择工作人员违反中立原则。

B) ✅ Il n'a pas le droit de choisir, car la religion ne peut pas être prise en compte dans un service public
FR : Correct ! Le principe de neutralité impose que les usagers soient traités de manière égale, indépendamment de leur religion ou de celle de l'agent.
中：正确。中立原则要求服务对象不受自己或工作人员宗教信仰的影响，每个人都应平等对待。

C) ❌ Seuls les agents peuvent le choisir, car eux seuls ont le droit d'exprimer et de discuter de leur religion
FR : Faux. Les agents ne peuvent pas utiliser leur religion pour influencer les choix des usagers.
中：错误。公职人员不得利用宗教信仰影响服务对象的选择。

D) ❌ Les agents ne peuvent pas le choisir, car ils n'ont pas le droit de discuter de religion dans l'exercice de leurs fonctions
FR : Faux. Les agents peuvent avoir des croyances personnelles, mais le principe de neutralité impose qu'ils ne les affichent pas et ne les utilisent pas dans le cadre du service public.
中：错误。公职人员可以有个人信仰，但中立原则要求他们在工作中不展示或利用宗教信仰。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "难",
    question: "Madame X a organisé une activité terroriste au nom de la liberté de réunion. Que dit la loi ?",
    options: [
      "C'est autorisé",
      "C'est interdit",
      "C'est toléré si personne n'est blessé",
      "C'est seulement interdit si l'État l'interdit formellement"
    ],
    answer: 1,
    explanation: `
a) ❌ C'est autorisé
FR : Faux. La liberté de réunion ne peut jamais justifier une activité terroriste.
中：错误。集会自由不能成为恐怖主义活动的正当理由。

b) ✅ C'est interdit
FR : Correct. Toute activité terroriste est strictement interdite par la loi, quelle que soit la justification invoquée.
中：正确。任何恐怖主义活动都被法律严格禁止，不论以何种理由进行。

c) ❌ C'est toléré si personne n'est blessé
FR : Faux. Une activité terroriste est interdite même en l'absence de victimes.
中：错误。即使没有人员受伤，恐怖主义活动仍然是非法的。

d) ❌ C'est seulement interdit si l'État l'interdit formellement
FR : Faux. La loi interdit le terrorisme de manière générale, sans nécessité d'une interdiction spécifique de l'État.
中：错误。恐怖主义行为本身即被法律禁止，不需要国家另行特别禁止。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "难",
    question: "Madame X veut organiser un événement religieux à la mairie. Que peut-elle faire ?",
    options: [
      "Elle peut organiser librement son événement religieux dans la mairie",
      "Elle ne peut pas organiser d'événement religieux dans la mairie",
      "Elle peut organiser l'événement uniquement si la mairie appartient à sa religion",
      "Elle peut organiser l'événement seulement si elle paie un droit spécial"
    ],
    answer: 1,
    explanation: `
a) ❌ Elle peut organiser librement son événement religieux dans la mairie
FR : Faux. La mairie est un lieu de service public soumis au principe de neutralité.
中：错误。市政厅属于公共服务场所，必须遵守中立原则。

b) ✅ Elle ne peut pas organiser d'événement religieux dans la mairie
FR : Correct. Les événements religieux ne peuvent pas être organisés dans un lieu de service public.
中：正确。宗教活动不得在公共服务场所组织举行。

c) ❌ Elle peut organiser l'événement uniquement si la mairie appartient à sa religion
FR : Faux. Une mairie n'appartient à aucune religion.
中：错误。市政厅不属于任何宗教。

d) ❌ Elle peut organiser l'événement seulement si elle paie un droit spécial
FR : Faux. Le paiement d'un droit ne permet pas de déroger au principe de neutralité.
中：错误。缴纳费用不能使公共服务场所偏离中立原则。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Madame X est enseignante dans un collège public. Elle souhaite faire la promotion de sa religion auprès des élèves. Que dit la loi ?",
    options: [
      "Elle peut le faire librement pendant les cours",
      "Elle ne peut pas promouvoir sa religion auprès des élèves",
      "Elle peut le faire seulement avec l'autorisation des parents",
      "Elle peut le faire mais uniquement en dehors de l'établissement"
    ],
    answer: 1,
    explanation: `
a) ❌ Elle peut le faire librement pendant les cours
FR : Faux. Dans un établissement public, les enseignants doivent respecter la neutralité et ne peuvent pas promouvoir une religion.
中：错误。在公立学校，教师必须保持中立，不能在课堂上宣传宗教。

b) ✅ Elle ne peut pas promouvoir sa religion auprès des élèves
FR : Correct. La neutralité du service public interdit toute promotion religieuse par un enseignant dans un établissement public.
中：正确。公共服务中立原则禁止教师在公立学校宣传宗教。

c) ❌ Elle peut le faire seulement avec l'autorisation des parents
FR : Faux. Même avec l'autorisation des parents, un enseignant ne peut pas promouvoir sa religion dans un établissement public.
中：错误。即使得到家长同意，教师在公立学校仍不能宣传宗教。

d) ❌ Elle peut le faire mais uniquement en dehors de l'établissement
FR : Faux. Même en dehors de l'établissement, un enseignant ne doit pas utiliser sa position professionnelle pour promouvoir une religion auprès des élèves.
中：错误。教师不能利用其职业身份向学生宣传宗教，即使在校外也不允许。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Un élève veut pratiquer sa religion en dehors des cours. Il peut :",
    options: [
      "Oui, librement",
      "Non",
      "Seulement si les enseignants le permettent",
      "Seulement les jours fériés"
    ],
    answer: 0,
    explanation: `
a) ✅ Oui, librement
FR : Correct. Hors des heures de cours, un élève peut pratiquer sa religion dans le respect des règles de l'établissement.
中：正确。在课外时间，学生可以自由进行宗教活动，但需遵守学校规定。

b) ❌ Non
FR : Faux. La pratique religieuse en dehors des cours est autorisée.
中：错误。课外时间的宗教活动是允许的。

c) ❌ Seulement si les enseignants le permettent
FR : Faux. Les enseignants ne peuvent pas interdire la pratique religieuse en dehors des cours, sauf si cela viole les règles de l'établissement.
中：错误。教师不能单方面禁止课外宗教活动，除非违反学校规则。

d) ❌ Seulement les jours fériés
FR : Faux. La pratique religieuse n'est pas limitée aux seuls jours fériés.
中：错误。宗教活动不只限于节假日。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Un citoyen critique une décision politique dans un journal. Il agit :",
    options: [
      "Illégalement",
      "Dans le cadre de la liberté d'expression",
      "Contre la Constitution",
      "Contre la démocratie"
    ],
    answer: 1,
    explanation: `
a) ❌ Illégalement
FR : Faux. La critique politique est autorisée dans le cadre de la liberté d'expression.
中：错误。在报纸上批评政治决定属于言论自由范围，不是违法。

b) ✅ Dans le cadre de la liberté d'expression
FR : Correct. La liberté d'expression permet de critiquer les décisions politiques.
中：正确。言论自由允许对政治决定进行批评。

c) ❌ Contre la Constitution
FR : Faux. La Constitution protège la liberté d'expression.
中：错误。宪法保障言论自由，因此不违反宪法。

d) ❌ Contre la démocratie
FR : Faux. La critique politique fait partie du débat démocratique.
中：错误。政治批评属于民主讨论的一部分，不反对民主。
    `.trim()
  },
  {
    category: "Mises en situation",
    难度: "中等",
    question: "Un élève est traité différemment à cause de son origine. Cela viole :",
    options: [
      "L'égalité",
      "La fraternité",
      "La neutralité",
      "La tradition"
    ],
    answer: 0,
    explanation: `
a) ✅ L'égalité
FR : Correct. Traiter un élève différemment en raison de son origine constitue une violation de l'égalité.
中：正确。因出身而区别对待学生违反平等原则。

b) ❌ La fraternité
FR : Faux. Cela concerne surtout l'égalité et la non-discrimination.
中：错误。这主要违反平等与反歧视原则，而非博爱。

c) ❌ La neutralité
FR : Faux. La neutralité concerne l'État et les services publics, pas directement la situation.
中：错误。中立主要适用于公共服务与国家机构，不直接指向此情境。

d) ❌ La tradition
FR : Faux. La tradition n'est pas une norme juridique protégée dans ce contexte.
中：错误。传统不是该情境下的法律原则。
    `.trim()
  },

  // ==================== Laïcité (十年卡) ====================
  {
    category: "Laïcité",
    难度: "中等",
    question: "Concernant la pratique de la religion, quelle proposition est correcte ?",
    options: [
      "Il est interdit d'exprimer ses convictions religieuses en public",
      "Chacun peut pratiquer la religion de son choix ou ne pas en pratiquer",
      "Tout le monde doit pratiquer la même religion",
      "La famille doit avoir la même religion"
    ],
    answer: 1,
    explanation: `
A) ❌ Il est interdit d'exprimer ses convictions religieuses en public
FR : Faux. La liberté religieuse permet à chacun d'exprimer ses convictions dans le respect des lois et de l'ordre public.
中：错误。宗教自由允许每个人在法律和公共秩序允许的范围内表达自己的宗教信仰。

B) ✅ Chacun peut pratiquer la religion de son choix ou ne pas en pratiquer
FR : Correct ! La laïcité et la liberté de conscience garantissent le droit de croire, de ne pas croire, ou de choisir sa religion librement, sans contrainte de l'État ou de la famille.
中：正确。世俗原则和良心自由保障每个人有权信仰、无信仰，或自由选择自己的宗教，不受国家或家庭强制。

C) ❌ Tout le monde doit pratiquer la même religion
FR : Faux. La République française est laïque et interdit toute obligation religieuse uniforme pour tous.
中：错误。法国是世俗国家，不允许对所有人统一强制信仰某种宗教。

D) ❌ La famille doit avoir la même religion
FR : Faux. Les membres d'une même famille sont libres de croire ou ne pas croire selon leurs choix personnels.
中：错误。同一家人中的每个人都可以根据个人选择自由决定是否信仰宗教。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "中等",
    question: "Quel droit est garanti par la laïcité ?",
    options: [
      "Liberté de conscience et de ne pas adhérer à une religion",
      "Ne pas payer d'impôts",
      "Travailler moins",
      "Ne pas respecter la loi"
    ],
    answer: 0,
    explanation: `
A) ✅ Liberté de conscience et de ne pas adhérer à une religion
FR : Correct ! La laïcité garantit à chaque personne la liberté de croire ou de ne pas croire, et assure la neutralité de l'État vis-à-vis des religions. Cela signifie que chacun peut pratiquer sa religion librement, ou choisir de ne pas en avoir, sans subir de pression ou de discrimination.
中：正确。世俗原则保障每个人有信仰或不信仰的自由，并确保国家对宗教保持中立。这意味着每个人可以自由地信仰宗教，也可以选择不信仰，而不受到任何压力或歧视。

B) ❌ Ne pas payer d'impôts
FR : Faux. La laïcité ne concerne pas les obligations fiscales ; elle ne dispense pas des impôts.
中：错误。世俗原则不涉及缴税义务，不能免税。

C) ❌ Travailler moins
FR : Faux. La laïcité ne modifie pas les règles du travail ou du temps de travail.
中：错误。世俗原则不会改变工作时间或工作规定。

D) ❌ Ne pas respecter la loi
FR : Faux. La liberté de conscience doit toujours s'exercer dans le respect de la loi. La laïcité ne permet pas de violer les lois.
中：错误。信仰自由必须在遵守法律的前提下行使，世俗原则不允许违法行为。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "难",
    question: "Qu'est ce qui est interdit par la Charte de la laïcité à l'école ?",
    options: [
      "Porter des signes religieux très visibles",
      "Apprendre à lire",
      "Faire du sport",
      "Manger à la cantine"
    ],
    answer: 0,
    explanation: `
A) ✅ Porter des signes religieux très visibles
FR : Correct ! La Charte de la laïcité à l'école interdit aux élèves de porter des signes religieux ostensibles (comme le voile, la kippa ou de grandes croix) afin de préserver la neutralité de l'école et le respect de la liberté de conscience de tous les élèves.
中：正确。学校世俗宪章禁止学生佩戴明显宗教标志（如头巾、小圆帽或大十字架），以维护学校中立，并尊重所有学生的信仰自由。

B) ❌ Apprendre à lire
FR : Faux. La lecture fait partie du programme scolaire obligatoire et n'a aucun lien avec la laïcité.
中：错误。阅读是学校的必修课程，与世俗原则无关。

C) ❌ Faire du sport
FR : Faux. Les élèves peuvent pratiquer le sport, même dans le cadre de cours mixtes, tant que cela respecte les règles de neutralité et d'égalité.
中：错误。学生可以参加体育活动，即便男女混合，只要遵守中立和平等原则。

D) ❌ Manger à la cantine
FR : Faux. Les repas à la cantine ne sont pas interdits ; certaines adaptations sont possibles pour respecter les convictions religieuses (repas sans porc, etc.).
中：错误。学生可以在食堂用餐，必要时可根据宗教信仰进行饮食调整（如不吃猪肉等）。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "难",
    question: "En application de la laïcité, que doit respecter un agent public ?",
    options: [
      "Porter ses convictions religieuses",
      "Être neutre vis-à-vis des usagers",
      "Faire la promotion d'une religion",
      "Imposer sa religion"
    ],
    answer: 1,
    explanation: `
A) ❌ Porter ses convictions religieuses
FR : Faux. Un agent public ne doit pas afficher ses convictions religieuses pendant l'exercice de ses fonctions afin de respecter la neutralité du service public.
中：错误。公职人员在履行职务期间不得展示个人宗教信仰，以维护公共服务的中立性。

B) ✅ Être neutre vis-à-vis des usagers
FR : Correct ! La laïcité impose aux agents publics d'être neutres envers les usagers : ils doivent traiter chacun de manière égale, sans favoritisme ni discrimination liée à la religion.
中：正确。世俗原则要求公职人员对服务对象保持中立：平等对待每个人，不因宗教信仰偏袒或歧视任何人。

C) ❌ Faire la promotion d'une religion
FR : Faux. L'État est neutre, donc un agent public ne doit promouvoir aucune religion.
中：错误。国家保持中立，公职人员不得推广任何宗教。

D) ❌ Imposer sa religion
FR : Faux. Il est strictement interdit d'imposer sa religion à des usagers ou collègues.
中：错误。禁止将个人宗教强加给服务对象或同事。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "中等",
    question: "La neutralité de l'État selon la laïcité signifie :",
    options: [
      "L'État favorise financièrement uniquement les religions qui lui donnent de l'argent",
      "L'État ne reçoit ni ne donne de l'argent à aucune religion",
      "L'État choisit quelle religion soutenir selon sa popularité",
      "L'État peut subventionner certaines religions si elles sont très anciennes"
    ],
    answer: 1,
    explanation: `
a) ❌ L'État favorise financièrement uniquement les religions qui lui donnent de l'argent
FR : Faux. L'État ne favorise aucune religion, quelle que soit leur contribution financière.
中：错误。国家不会因为宗教提供资金而偏袒任何宗教。

b) ✅ L'État ne reçoit ni ne donne de l'argent à aucune religion
FR : Correct. La laïcité impose que l'État ne finance ni ne soutienne financièrement aucune religion.
中：正确。世俗原则要求国家不资助任何宗教，也不接受宗教资金。

c) ❌ L'État choisit quelle religion soutenir selon sa popularité
FR : Faux. L'État ne doit soutenir aucune religion, même si elle est populaire.
中：错误。国家不能根据宗教的受欢迎程度来支持某个宗教。

d) ❌ L'État peut subventionner certaines religions si elles sont très anciennes
FR : Faux. L'ancienneté d'une religion ne justifie pas un financement public.
中：错误。宗教是否古老不能作为国家资助的理由。
    `.trim()
  },
  {
    category: "Laïcité",
    难度: "中等",
    question: "La neutralité religieuse de l'État implique :",
    options: [
      "L'absence de croyance",
      "L'impartialité",
      "L'interdiction des religions",
      "L'obligation de croire"
    ],
    answer: 1,
    explanation: `
a) ❌ L'absence de croyance
FR : Faux. La neutralité ne signifie pas que l'État doit être athée ou sans croyance.
中：错误。中立并不意味着国家必须无神或不信仰。

b) ✅ L'impartialité
FR : Correct. La neutralité religieuse signifie que l'État doit être impartial envers toutes les religions.
中：正确。宗教中立意味着国家对所有宗教保持公正、不偏袒。

c) ❌ L'interdiction des religions
FR : Faux. La neutralité n'interdit pas les religions, elle interdit seulement leur influence sur l'État.
中：错误。中立不禁止宗教，只是不允许宗教影响国家事务。

d) ❌ L'obligation de croire
FR : Faux. La neutralité ne rend pas la croyance obligatoire.
中：错误。中立不会强制信仰。
    `.trim()
  },

  // ==================== Devise et symboles (十年卡) ====================
  {
    category: "Devise et symboles",
    难度: "难",
    question: "À quoi correspond la date du 14 juillet ?",
    options: [
      "Le début de la Révolution française en 1789",
      "L'adoption de la Déclaration des droits de l'homme et du citoyen en 1789",
      "La proclamation de la Première République française en 1792",
      "La fin de la Révolution française en 1799"
    ],
    answer: 0,
    explanation: `
a) ✅ Le début de la Révolution française en 1789
FR : Exact ! La prise de la Bastille le 14 juillet 1789 marque le début de la Révolution française.
中：正确！1789年7月14日攻占巴士底狱，标志法国大革命开始。

b) ❌ L'adoption de la Déclaration des droits de l'homme et du citoyen en 1789
FR : La Déclaration a été adoptée le 26 août 1789, pas le 14 juillet.
中：《人权与公民权宣言》是在1789年8月26日，而不是7月14日。

c) ❌ La proclamation de la Première République française en 1792
FR : La Première République a été proclamée le 22 septembre 1792.
中：法国第一共和国成立于1792年9月22日。

d) ❌ La fin de la Révolution française en 1799
FR : La Révolution française s'est terminée en 1799 avec l'arrivée de Napoléon au pouvoir.
中：法国大革命结束于1799年拿破仑上台。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Où peut-on voir la devise de la République ?",
    options: [
      "Sur les actes de naissance",
      "Sur les tickets de caisse des magasins",
      "Sur les affiches publicitaires privées",
      "Dans les bulletins de vote des élections uniquement"
    ],
    answer: 0,
    explanation: `
A) ✅ Sur les actes de naissance
FR : Correct ! La devise figure sur certains documents officiels comme les actes de naissance.
中：正确。共和国格言出现在一些官方文件上，如出生证明。

B) ❌ Sur les tickets de caisse des magasins
FR : Faux. Les tickets de caisse sont privés et n'ont pas de valeur officielle.
中：错误。商店小票是私人文件，不属于官方场所。

C) ❌ Sur les affiches publicitaires privées
FR : Faux. Les publicités privées ne sont pas des supports officiels.
中：错误。私人广告不是官方载体。

D) ❌ Dans les bulletins de vote des élections uniquement
FR : Faux. La devise n'est pas limitée aux bulletins de vote.
中：错误。共和国格言不仅仅出现在选票上。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Que signifie la liberté ?",
    options: [
      "Peut insulter des inconnus",
      "Peut exprimer ses idées à haute voix dans la rue",
      "Peut publier tout sur les réseaux sociaux",
      "Peut exprimer ses opinions dans le respect de la loi"
    ],
    answer: 3,
    explanation: `
A) ❌ Peut insulter des inconnus
FR : Faux. Insulter les autres est interdit par la loi.
中：错误。辱骂他人是违法的。

B) ❌ Peut exprimer ses idées à haute voix dans la rue
FR : Faux. C'est possible seulement si cela respecte la loi et les autres.
中：错误。只有在不违法、不影响他人时才可以。

C) ❌ Peut publier tout sur les réseaux sociaux
FR : Faux. Les réseaux sociaux sont aussi soumis à la loi.
中：错误。网络言论同样受法律约束。

D) ✅ Peut exprimer ses opinions dans le respect de la loi
FR : Correct ! La liberté existe dans le respect des règles.
中：正确。自由是在法律允许范围内表达观点。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Que signifie la liberté ?",
    options: [
      "Tout le monde est égal",
      "Nous devons aider les autres",
      "Nous pouvons faire ce que nous voulons sans tenir compte des autres",
      "Nous pouvons faire ce que nous voulons tant que cela ne nuit pas aux autres et respecte la loi"
    ],
    answer: 3,
    explanation: `
A) ❌ Tout le monde est égal
FR : Faux. Cela correspond à l'égalité, pas à la liberté.
中：错误。这是平等的定义。

B) ❌ Nous devons aider les autres
FR : Faux. Cela correspond à la fraternité.
中：错误。这是博爱的含义。

C) ❌ Nous pouvons faire ce que nous voulons sans tenir compte des autres
FR : Faux. La liberté ne doit pas nuire aux autres.
中：错误。自由不能伤害他人。

D) ✅ Nous pouvons faire ce que nous voulons tant que cela respecte la loi et les autres
FR : Correct ! C'est la définition de la liberté en République.
中：正确。自由是在尊重法律和他人的前提下。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "La liberté de circulation permet à toute personne de :",
    options: [
      "Se déplacer librement sur le territoire",
      "Choisir ses impôts",
      "S'absenter de l'école",
      "Voyager uniquement à l'étranger"
    ],
    answer: 0,
    explanation: `
A) ✅ Se déplacer librement sur le territoire
FR : Correct ! La liberté de circulation garantit à toute personne le droit de se déplacer librement sur le territoire français, que ce soit pour travailler, étudier ou se rendre dans un autre lieu.
中：正确。行动自由保障每个人在法国境内自由移动的权利，无论是工作、学习还是前往其他地方。

B) ❌ Choisir ses impôts
FR : Faux. Le choix des impôts relève des lois fiscales, pas de la liberté de circulation.
中：错误。税收规定由法律决定，不属于行动自由的范畴。

C) ❌ S'absenter de l'école
FR : Faux. L'obligation scolaire impose à tous les enfants de suivre l'école, indépendamment de la liberté de circulation.
中：错误。义务教育要求儿童上学，行动自由不能成为逃学的理由。

D) ❌ Voyager uniquement à l'étranger
FR : Faux. La liberté de circulation concerne principalement le territoire national, pas uniquement les voyages internationaux.
中：错误。行动自由主要涉及国内流动，而不仅限于出国旅行。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Complétez ces paroles de la Marseillaise : \"Aux armes [...] ! Formez vos bataillons\"",
    options: [
      "Citoyens",
      "Patriotes",
      "Soldats",
      "Français"
    ],
    answer: 0,
    explanation: `
A) ✅ Citoyens
FR : Correct ! Le refrain célèbre l'engagement des citoyens pour défendre la patrie et former les bataillons révolutionnaires.
中：正确。这句歌词呼吁公民团结起来保卫祖国，并组建革命队伍。

B) ❌ Patriotes
FR : Faux. Bien que proche en sens, le texte officiel dit « citoyens ».
中：错误。虽然意思接近，但官方歌词使用的是"citoyens"。

C) ❌ Soldats
FR : Faux. Le mot exact n'est pas « soldats » mais « citoyens ».
中：错误。歌词中使用的不是"soldats"，而是"citoyens"。

D) ❌ Français
FR : Faux. 官方歌词中使用的是"citoyens"，而不是"français"。
中：错误。官方歌词中用的是"citoyens"，不是"français"。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "简单",
    question: "Complétez les paroles de la Marseillaise : \"Allons enfants de la patrie [...]\"",
    options: [
      "Le jour de gloire est arrivé",
      "Chantons ensemble",
      "À la victoire",
      "Ensemble pour la France"
    ],
    answer: 0,
    explanation: `
A) ✅ Le jour de gloire est arrivé
FR : Correct ! Cette phrase emblématique est le début du refrain et symbolise l'appel à la défense de la nation et à la victoire.
中：正确。这句经典歌词是副歌的开头，象征呼吁保卫国家和争取胜利。

B) ❌ Chantons ensemble
FR : Faux. Cette formulation ne figure pas dans le texte officiel.
中：错误。歌词中没有"Chantons ensemble"这句话。

C) ❌ À la victoire
FR : Faux. Bien que意思相近，但官方歌词是"Le jour de gloire est arrivé"。
中：错误。意思接近，但官方歌词是"Le jour de gloire est arrivé"。

D) ❌ Ensemble pour la France
FR : Faux. 这不是官方歌词的一部分。
中：错误。不是官方歌词的一部分。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    options: [
      "Ils servent à financer les services publics",
      "Ils servent uniquement à payer les fonctionnaires",
      "Ils sont facultatifs",
      "Ils financent seulement l'armée"
    ],
    answer: 0,
    explanation: `
A) ✅ Ils servent à financer les services publics
FR : Correct ! Les impôts permettent de financer l'éducation, la santé, la sécurité, les routes et d'autres services essentiels pour la société.
中：正确。税收用于资助教育、医疗、安全、道路等社会必需服务。

B) ❌ Ils servent uniquement à payer les fonctionnaires
FR : Faux. Les impôts servent à financer l'ensemble des dépenses publiques, pas seulement les salaires des fonctionnaires.
中：错误。税收用于资助所有公共支出，而不仅仅是公务员工资。

C) ❌ Ils sont facultatifs
FR : Faux. Payer des impôts est une obligation légale pour tous ceux qui remplissent les conditions fiscales.
中：错误。缴税是法律规定的义务，不是可选择的。

D) ❌ Ils financent seulement l'armée
FR : Faux. Les impôts financent l'ensemble des dépenses publiques, pas seulement l'armée.
中：错误。税收资助所有公共支出，而不仅仅是军队。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    options: [
      "C'est une manifestation de la fraternité",
      "C'est une manifestation de l'égalité",
      "C'est une manifestation de la liberté",
      "C'est une manifestation de la monarchie"
    ],
    answer: 0,
    explanation: `
A) ✅ C'est une manifestation de la fraternité
FR : Correct ! En contribuant aux impôts, chacun participe à la solidarité nationale : l'argent sert à aider ceux qui en ont besoin et à financer les services pour tous.
中：正确。缴税体现了博爱精神：每个人都为国家的团结作贡献，税款用于帮助有需要的人和资助公共服务。

B) ❌ C'est une manifestation de l'égalité
FR : Faux. L'impôt ne garantit pas que tout le monde soit égal, bien que certains impôts progressifs visent à réduire les inégalités.
中：错误。税收本身不保证人人平等，虽然某些累进税有助于缩小差距。

C) ❌ C'est une manifestation de la liberté
FR : Faux. Payer des impôts est une obligation légale, pas un exercice direct de liberté individuelle.
中：错误。缴税是法律义务，不是直接体现个人自由。

D) ❌ C'est une manifestation de la monarchie
FR : Faux. Les impôts financent l'État républicain, pas une monarchie.
中：错误。税收用于资助共和制国家，而不是君主制。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Quelle est la couleur du bonnet porté par Marianne sur certains timbres ?",
    options: [
      "Bleu",
      "Rouge",
      "Blanc",
      "Vert"
    ],
    answer: 1,
    explanation: `
A) ❌ Bleu
FR : Faux. Le bonnet phrygien de Marianne n'est pas bleu.
中：错误。玛丽安（Marianne）佩戴的自由帽不是蓝色的。

B) ✅ Rouge
FR : Correct ! Sur de nombreux timbres et représentations officielles, Marianne porte un bonnet phrygien rouge, symbole de la liberté et de la Révolution française.
中：正确。在许多邮票和官方形象中，玛丽安佩戴红色的自由帽，象征自由和法国大革命精神。

C) ❌ Blanc
FR : Faux. Le bonnet phrygien n'est pas blanc ; le blanc peut apparaître ailleurs dans le drapeau tricolore mais pas sur le bonnet de Marianne.
中：错误。自由帽不是白色的；白色可能出现在三色旗中，但不是玛丽安的帽子颜色。

D) ❌ Vert
FR : Faux. Le vert n'est pas associé au bonnet de Marianne.
中：错误。绿色与玛丽安的帽子无关。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Dans une démocratie, tous les citoyens :",
    options: [
      "Ont les mêmes droits",
      "Ont le même revenu",
      "Peuvent imposer leurs idées",
      "Sont soumis à une religion obligatoire"
    ],
    answer: 0,
    explanation: `
A) ✅ Ont les mêmes droits
FR : Correct ! Dans une démocratie, tous les citoyens sont égaux devant la loi et disposent des mêmes droits fondamentaux, indépendamment de leur richesse, religion ou statut social.
中：正确。在民主国家，所有公民在法律面前平等，享有相同的基本权利，与财富、宗教或社会地位无关。

B) ❌ Ont le même revenu
FR : Faux. La démocratie ne signifie pas que tous doivent avoir le même revenu ; elle garantit l'égalité des droits, pas l'égalité économique.
中：错误。民主不意味着所有人的收入都相同，它保障的是权利平等，而非经济平等。

C) ❌ Peuvent imposer leurs idées
FR : Faux. Dans une démocratie, chacun peut exprimer ses idées, mais personne ne peut les imposer aux autres.
中：错误。在民主国家，每个人可以表达自己的观点，但不能强制他人接受。

D) ❌ Sont soumis à une religion obligatoire
FR : Faux. La démocratie garantit la liberté de conscience et aucune religion n'est obligatoire.
中：错误。民主保障信仰自由，没有强制宗教。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Les impôts servent à :",
    options: [
      "Financer les services publics",
      "Financer seulement les fonctionnaires",
      "Financer seulement l'armée",
      "Ne sont pas obligatoires"
    ],
    answer: 0,
    explanation: `
a) ✅ Financer les services publics
FR : Correct. Les impôts permettent de financer les services publics et les dépenses de l'État.
中：正确。税收用于资助公共服务和国家支出。

b) ❌ Financer seulement les fonctionnaires
FR : Faux. Les impôts financent beaucoup plus que les seuls fonctionnaires.
中：错误。税收不仅用于支付公职人员，还用于其他公共支出。

c) ❌ Financer seulement l'armée
FR : Faux. L'armée est financée par les impôts, mais ce n'est pas la seule dépense.
中：错误。军队是税收支出的一部分，但不是唯一用途。

d) ❌ Ne sont pas obligatoires
FR : Faux. Le paiement des impôts est obligatoire selon la loi.
中：错误。缴纳税款是法律规定的义务。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "Pour protéger les citoyens contre les discriminations, l'État :",
    options: [
      "Encourage que les hommes et les femmes aient des salaires différents",
      "Sanctionne les actes de discrimination",
      "Ne fait rien",
      "Favorise certaines personnes selon leur origine"
    ],
    answer: 1,
    explanation: `
a) ❌ Encourage que les hommes et les femmes aient des salaires différents
FR : Faux. L'État ne peut pas encourager des inégalités salariales entre hommes et femmes.
中：错误。国家不会鼓励男女工资差异。

b) ✅ Sanctionne les actes de discrimination
FR : Correct. L'État sanctionne les discriminations pour protéger l'égalité des citoyens.
中：正确。国家对歧视行为进行处罚，以保护公民平等权利。

c) ❌ Ne fait rien
FR : Faux. L'État agit contre les discriminations par la loi et les sanctions.
中：错误。国家不会对歧视行为置之不理，而是通过法律进行干预。

d) ❌ Favorise certaines personnes selon leur origine
FR : Faux. L'État ne doit pas favoriser des personnes selon leur origine, cela serait discriminatoire.
中：错误。国家不能根据出身偏袒某些人，否则就是歧视。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "La République est dite « sociale » car elle :",
    options: [
      "Favorise une classe",
      "Protège les plus fragiles",
      "Interdit le travail",
      "Supprime les impôts"
    ],
    answer: 1,
    explanation: `
a) ❌ Favorise une classe
FR : Faux. La République sociale ne favorise pas une classe en particulier.
中：错误。社会共和国不偏袒任何特定阶层。

b) ✅ Protège les plus fragiles
FR : Correct. La République dite sociale vise à protéger les personnes les plus vulnérables.
中：正确。社会共和国旨在保护最脆弱的人群。

c) ❌ Interdit le travail
FR : Faux. La République ne prohibe pas le travail.
中：错误。共和国不禁止工作。

d) ❌ Supprime les impôts
FR : Faux. La République ne supprime pas les impôts.
中：错误。共和国不会取消税收。
    `.trim()
  },
  {
    category: "Devise et symboles",
    难度: "中等",
    question: "La liberté d'opinion est :",
    options: [
      "Interdite",
      "Garantie",
      "Réservée aux adultes",
      "Soumise à autorisation"
    ],
    answer: 1,
    explanation: `
a) ❌ Interdite
FR : Faux. La liberté d'opinion n'est pas interdite.
中：错误。观点自由不是禁止的。

b) ✅ Garantie
FR : Correct. La liberté d'opinion est garantie par la loi.
中：正确。观点自由受法律保障。

c) ❌ Réservée aux adultes
FR : Faux. La liberté d'opinion ne dépend pas uniquement de l'âge.
中：错误。观点自由不只限于成年人。

d) ❌ Soumise à autorisation
FR : Faux. La liberté d'opinion n'exige pas d'autorisation.
中：错误。观点自由不需要许可。
    `.trim()
  }
];
