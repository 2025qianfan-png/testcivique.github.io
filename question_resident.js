

const question_resident = [
  
{
    id: "ds0082",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "À quoi correspond la date du 14 juillet ?",
    options: [
      "Le début de la Révolution française en 1789",
      "L'adoption de la Déclaration des droits de l'homme et du citoyen en 1789",
       "La proclamation de la Première République française en 1792",
      "La fin de la Révolution française en 1799"
    ],
    answer: 0,
    explanation: `A) ✅ Le début de la Révolution française en 1789\nFR : Exact ! La prise de la Bastille le 14 juillet 1789 marque le début de la Révolution française.\n中：正确！1789年7月14日攻占巴士底狱，标志法国大革命开始。\n\nB) ❌ L'adoption de la Déclaration des droits de l'homme et du citoyen en 1789\nFR : La Déclaration a été adoptée le 26 août 1789, pas le 14 juillet.\n中：《人权与公民权宣言》是在1789年8月26日，而不是7月14日。\n\nC) ❌ La proclamation de la Première République française en 1792\nFR : La Première République a été proclamée le 22 septembre 1792.\n中：法国第一共和国成立于1792年9月22日。\n\nD) ❌ La fin de la Révolution française en 1799\nFR : La Révolution française s'est terminée en 1799 avec l'arrivée de Napoléon au pouvoir.\n中：法国大革命结束于1799年拿破仑上台。`.trim()
  },
  {
    id: "ds0083",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Où peut-on voir la devise de la République ?",
    options: [
      "Sur les actes de naissance",
      "Sur les tickets de caisse des magasins",
      "Sur les affiches publicitaires privées",
      "Dans les bulletins de vote des élections uniquement"
    ],
    answer: 0,
    explanation: `A) ✅ Sur les actes de naissance\nFR : Correct ! La devise figure sur certains documents officiels comme les actes de naissance.\n中：正确。共和国格言出现在一些官方文件上，如出生证明。\n\nB) ❌ Sur les tickets de caisse des magasins\nFR : Faux. Les tickets de caisse sont privés et n'ont pas de valeur officielle.\n中：错误。商店小票是私人文件，不属于官方场所。\n\nC) ❌ Sur les affiches publicitaires privées\nFR : Faux. Les publicités privées ne sont pas des supports officiels.\n中：错误。私人广告不是官方载体。\n\nD) ❌ Dans les bulletins de vote des élections uniquement\nFR : Faux. La devise n'est pas limitée aux bulletins de vote.\n中：错误。共和国格言不仅仅出现在选票上。`.trim()
  },
  {
    id: "ds0084",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Que signifie la liberté ?",
    options: [
      "Peut insulter des inconnus",
      "Peut exprimer ses idées à haute voix dans la rue",
      "Peut publier tout sur les réseaux sociaux",
      "Peut exprimer ses opinions dans le respect de la loi"
    ],
    answer: 3,
    explanation: `A) ❌ Peut insulter des inconnus\nFR : Faux. Insulter les autres est interdit par la loi.\n中：错误。辱骂他人是违法的。\n\nB) ❌ Peut exprimer ses idées à haute voix dans la rue\nFR : Faux. C'est possible seulement si cela respecte la loi et les autres.\n中：错误。只有在不违法、不影响他人时才可以。\n\nC) ❌ Peut publier tout sur les réseaux sociaux\nFR : Faux. Les réseaux sociaux sont aussi soumis à la loi.\n中：错误。网络言论同样受法律约束。\n\nD) ✅ Peut exprimer ses opinions dans le respect de la loi\nFR : Correct ! La liberté existe dans le respect des règles.\n中：正确。自由是在法律允许范围内表达观点。`.trim()
  },
  {
    id: "ds0085",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Que signifie la liberté ?",
    options: [
      "Tout le monde est égal",
      "Nous devons aider les autres",
      "Nous pouvons faire ce que nous voulons sans tenir compte des autres",
      "Nous pouvons faire ce que nous voulons tant que cela ne nuit pas aux autres et respecte la loi"
    ],
    answer: 3,
    explanation: `A) ❌ Tout le monde est égal\nFR : Faux. Cela correspond à l'égalité, pas à la liberté.\n中：错误。这是平等的定义。\n\nB) ❌ Nous devons aider les autres\nFR : Faux. Cela correspond à la fraternité.\n中：错误。这是博爱的含义。\n\nC) ❌ Nous pouvons faire ce que nous voulons sans tenir compte des autres\nFR : Faux. La liberté ne doit pas nuire aux autres.\n中：错误。自由不能伤害他人。\n\nD) ✅ Nous pouvons faire ce que nous voulons tant que cela respecte la loi et les autres\nFR : Correct ! C'est la définition de la liberté en République.\n中：正确。自由是在尊重法律和他人的前提下。`.trim()
  },
  {
    id: "ds0086",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "La liberté de circulation permet à toute personne de :",
    options: [
      "Se déplacer librement sur le territoire",
      "Choisir ses impôts",
      "S'absenter de l'école",
      "Voyager uniquement à l'étranger"
    ],
    answer: 0,
    explanation: `A) ✅ Se déplacer librement sur le territoire\nFR : Correct ! La liberté de circulation garantit à toute personne le droit de se déplacer librement sur le territoire français, que ce soit pour travailler, étudier ou se rendre dans un autre lieu.\n中：正确。行动自由保障每个人在法国境内自由移动的权利，无论是工作、学习还是前往其他地方。\n\nB) ❌ Choisir ses impôts\nFR : Faux. Le choix des impôts relève des lois fiscales, pas de la liberté de circulation.\n中：错误。税收规定由法律决定，不属于行动自由的范畴。\n\nC) ❌ S'absenter de l'école\nFR : Faux. L'obligation scolaire impose à tous les enfants de suivre l'école, indépendamment de la liberté de circulation.\n中：错误。义务教育要求儿童上学，行动自由不能成为逃学的理由。\n\nD) ❌ Voyager uniquement à l'étranger\nFR : Faux. La liberté de circulation concerne principalement le territoire national, pas uniquement les voyages internationaux.\n中：错误。行动自由主要涉及国内流动，而不仅限于出国旅行。`.trim()
  },
  {
    id: "ds0087",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Complétez ces paroles de la Marseillaise : \"Aux armes [...] ! Formez vos bataillons\"",
    options: ["Citoyens", "Patriotes", "Soldats", "Français"],
    answer: 0,
    explanation: `A) ✅ Citoyens\nFR : Correct ! Le refrain célèbre l'engagement des citoyens pour défendre la patrie et former les bataillons révolutionnaires.\n中：正确。这句歌词呼吁公民团结起来保卫祖国，并组建革命队伍。\n\nB) ❌ Patriotes\nFR : Faux. Bien que proche en sens, le texte officiel dit « citoyens ».\n中：错误。虽然意思接近，但官方歌词使用的是"citoyens"。\n\nC) ❌ Soldats\nFR : Faux. Le mot exact n'est pas « soldats » mais « citoyens ».\n中：错误。歌词中使用的不是"soldats"，而是"citoyens"。\n\nD) ❌ Français\nFR : Faux. 官方歌词中使用的是"citoyens"，而不是"français"。\n中：错误。官方歌词中用的是"citoyens"，不是"français"。`.trim()
  },
  {
    id: "ds0088",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Complétez les paroles de la Marseillaise : \"Allons enfants de la patrie [...]\"",
    options: ["Le jour de gloire est arrivé", "Chantons ensemble", "À la victoire", "Ensemble pour la France"],
    answer: 0,
    explanation: `A) ✅ Le jour de gloire est arrivé\nFR : Correct ! Cette phrase emblématique est le début du refrain et symbolise l'appel à la défense de la nation et à la victoire.\n中：正确。这句经典歌词是副歌的开头，象征呼吁保卫国家和争取胜利。\n\nB) ❌ Chantons ensemble\nFR : Faux. Cette formulation ne figure pas dans le texte officiel.\n中：错误。歌词中没有"Chantons ensemble"这句话。\n\nC) ❌ À la victoire\nFR : Faux. Le sens est proche, mais la formule officielle est : « Le jour de gloire est arrivé ».
\n中：错误。意思接近，但官方歌词是"Le jour de gloire est arrivé"。\n\nD) ❌ Ensemble pour la France\nFR : Faux. Ça ne fait pas partie des paroles officielles.\n中：错误。不是官方歌词的一部分。`.trim()
  },
  {
    id: "ds0089",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    options: [
      "Ils servent à financer les services publics",
      "Ils servent uniquement à payer les fonctionnaires",
      "Ils sont facultatifs",
      "Ils financent seulement l'armée"
    ],
    answer: 0,
    explanation: `A) ✅ Ils servent à financer les services publics\nFR : Correct ! Les impôts permettent de financer l'éducation, la santé, la sécurité, les routes et d'autres services essentiels pour la société.\n中：正确。税收用于资助教育、医疗、安全、道路等社会必需服务。\n\nB) ❌ Ils servent uniquement à payer les fonctionnaires\nFR : Faux. Les impôts servent à financer l'ensemble des dépenses publiques, pas seulement les salaires des fonctionnaires.\n中：错误。税收用于资助所有公共支出，而不仅仅是公务员工资。\n\nC) ❌ Ils sont facultatifs\nFR : Faux. Payer des impôts est une obligation légale pour tous ceux qui remplissent les conditions fiscales.\n中：错误。缴税是法律规定的义务，不是可选择的。\n\nD) ❌ Ils financent seulement l'armée\nFR : Faux. Les impôts financent l'ensemble des dépenses publiques, pas seulement l'armée.\n中：错误。税收资助所有公共支出，而不仅仅是军队。`.trim()
  },
  {
    id: "ds0090",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    options: [
      "C'est une manifestation de la fraternité",
      "C'est une manifestation de l'égalité",
      "C'est une manifestation de la liberté",
      "C'est une manifestation de la monarchie"
    ],
    answer: 0,
    explanation: `A) ✅ C'est une manifestation de la fraternité\nFR : Correct ! En contribuant aux impôts, chacun participe à la solidarité nationale : l'argent sert à aider ceux qui en ont besoin et à financer les services pour tous.\n中：正确。缴税体现了博爱精神：每个人都为国家的团结作贡献，税款用于帮助有需要的人和资助公共服务。\n\nB) ❌ C'est une manifestation de l'égalité\nFR : Faux. L'impôt ne garantit pas que tout le monde soit égal, bien que certains impôts progressifs visent à réduire les inégalités.\n中：错误。税收本身不保证人人平等，虽然某些累进税有助于缩小差距。\n\nC) ❌ C'est une manifestation de la liberté\nFR : Faux. Payer des impôts est une obligation légale, pas un exercice direct de liberté individuelle.\n中：错误。缴税是法律义务，不是直接体现个人自由。\n\nD) ❌ C'est une manifestation de la monarchie\nFR : Faux. Les impôts financent l'État républicain, pas une monarchie.\n中：错误。税收用于资助共和制国家，而不是君主制。`.trim()
  },
  {
    id: "ds0091",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quelle est la couleur du bonnet porté par Marianne sur certains timbres ?",
    options: ["Bleu", "Rouge", "Blanc", "Vert"],
    answer: 1,
    explanation: `A) ❌ Bleu\nFR : Faux. Le bonnet phrygien de Marianne n'est pas bleu.\n中：错误。玛丽安（Marianne）佩戴的自由帽不是蓝色的。\n\nB) ✅ Rouge\nFR : Correct ! Sur de nombreux timbres et représentations officielles, Marianne porte un bonnet phrygien rouge, symbole de la liberté et de la Révolution française.\n中：正确。在许多邮票和官方形象中，玛丽安佩戴红色的自由帽，象征自由和法国大革命精神。\n\nC) ❌ Blanc\nFR : Faux. Le bonnet phrygien n'est pas blanc ; le blanc peut apparaître ailleurs dans le drapeau tricolore mais pas sur le bonnet de Marianne.\n中：错误。自由帽不是白色的；白色可能出现在三色旗中，但不是玛丽安的帽子颜色。\n\nD) ❌ Vert\nFR : Faux. Le vert n'est pas associé au bonnet de Marianne.\n中：错误。绿色与玛丽安的帽子无关。`.trim()
  },
  {
    id: "ds0092",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Dans une démocratie, tous les citoyens :",
    options: [
      "Ont les mêmes droits",
      "Ont le même revenu",
      "Peuvent imposer leurs idées",
      "Sont soumis à une religion obligatoire"
    ],
    answer: 0,
    explanation: `A) ✅ Ont les mêmes droits\nFR : Correct ! Dans une démocratie, tous les citoyens sont égaux devant la loi et disposent des mêmes droits fondamentaux, indépendamment de leur richesse, religion ou statut social.\n中：正确。在民主国家，所有公民在法律面前平等，享有相同的基本权利，与财富、宗教或社会地位无关。\n\nB) ❌ Ont le même revenu\nFR : Faux. La démocratie ne signifie pas que tous doivent avoir le même revenu ; elle garantit l'égalité des droits, pas l'égalité économique.\n中：错误。民主不意味着所有人的收入都相同，它保障的是权利平等，而非经济平等。\n\nC) ❌ Peuvent imposer leurs idées\nFR : Faux. Dans une démocratie, chacun peut exprimer ses idées, mais personne ne peut les imposer aux autres.\n中：错误。在民主国家，每个人可以表达自己的观点，但不能强制他人接受。\n\nD) ❌ Sont soumis à une religion obligatoire\nFR : Faux. La démocratie garantit la liberté de conscience et aucune religion n'est obligatoire.\n中：错误。民主保障信仰自由，没有强制宗教。`.trim()
  },
  {
    id: "ds0093",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Les impôts servent à :",
    options: [
      "Financer les services publics",
      "Financer seulement les fonctionnaires",
      "Financer seulement l'armée",
      "Ne sont pas obligatoires"
    ],
    answer: 0,
    explanation: `A) ✅ Financer les services publics\nFR : Correct.\nLes impôts permettent de financer les services publics et les dépenses de l'État.\n中：正确。\n税收用于资助公共服务和国家支出。\n\nB) ❌ Financer seulement les fonctionnaires\nFR : Faux.\nLes impôts financent beaucoup plus que les seuls fonctionnaires.\n中：错误。\n税收不仅用于支付公职人员，还用于其他公共支出。\n\nC) ❌ Financer seulement l'armée\nFR : Faux.\nL'armée est financée par les impôts, mais ce n'est pas la seule dépense.\n中：错误。\n军队是税收支出的一部分，但不是唯一用途。\n\nD) ❌ Ne sont pas obligatoires\nFR : Faux.\nLe paiement des impôts est obligatoire selon la loi.\n中：错误。\n缴纳税款是法律规定的义务。`.trim()
  },
  {
    id: "ds0094",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Pour protéger les citoyens contre les discriminations, l'État :",
    options: [
      "Encourage que les hommes et les femmes aient des salaires différents",
      "Sanctionne les actes de discrimination",
      "Ne fait rien",
      "Favorise certaines personnes selon leur origine"
    ],
    answer: 1,
    explanation: `A) ❌ Encourage que les hommes et les femmes aient des salaires différents\nFR : Faux.\nL'État ne peut pas encourager des inégalités salariales entre hommes et femmes.\n中：错误。\n国家不会鼓励男女工资差异。\n\nB) ✅ Sanctionne les actes de discrimination\nFR : Correct.\nL'État sanctionne les discriminations pour protéger l'égalité des citoyens.\n中：正确。\n国家对歧视行为进行处罚，以保护公民平等权利。\n\nC) ❌ Ne fait rien\nFR : Faux.\nL'État agit contre les discriminations par la loi et les sanctions.\n中：错误。\n国家不会对歧视行为置之不理，而是通过法律进行干预。\n\nD) ❌ Favorise certaines personnes selon leur origine\nFR : Faux.\nL'État ne doit pas favoriser des personnes selon leur origine, cela serait discriminatoire.\n中：错误。\n国家不能根据出身偏袒某些人，否则就是歧视。`.trim()
  },
  {
    id: "ds0095",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La République est dite « sociale » car elle :",
    options: [
      "Favorise une classe",
      "Protège les plus fragiles",
      "Interdit le travail",
      "Supprime les impôts"
    ],
    answer: 1,
    explanation: `A) ❌ Favorise une classe\nFR : Faux.\nLa République sociale ne favorise pas une classe en particulier.\n中：错误。\n社会共和国不偏袒任何特定阶层。\n\nB) ✅ Protège les plus fragiles\nFR : Correct.\nLa République dite sociale vise à protéger les personnes les plus vulnérables.\n中：正确。\n社会共和国旨在保护最脆弱的人群。\n\nC) ❌ Interdit le travail\nFR : Faux.\nLa République ne prohibe pas le travail.\n中：错误。\n共和国不禁止工作。\n\nD) ❌ Supprime les impôts\nFR : Faux.\nLa République ne supprime pas les impôts.\n中：错误。\n共和国不会取消税收。`.trim()
  },
  {
    id: "ds0096",
    type: "carte resident",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La liberté d'opinion est :",
    options: ["Interdite", "Garantie", "Réservée aux adultes", "Soumise à autorisation"],
    answer: 1,
    explanation: `A) ❌ Interdite\nFR : Faux.\nLa liberté d'opinion n'est pas interdite.\n中：错误。\n观点自由不是禁止的。\n\nB) ✅ Garantie\nFR : Correct.\nLa liberté d'opinion est garantie par la loi.\n中：正确。\n观点自由受法律保障。\n\nC) ❌ Réservée aux adultes\nFR : Faux.\nLa liberté d'opinion ne dépend pas uniquement de l'âge.\n中：错误。\n观点自由不只限于成年人。\n\nD) ❌ Soumise à autorisation\nFR : Faux.\nLa liberté d'opinion n'exige pas d'autorisation.\n中：错误。\n观点自由不需要许可。`.trim()
  },

  // === Laïcité 十年卡题目 ===
  // 注：在原文档中，十年卡部分标注为"十年卡"
  {
    id: "la0020",
    type: "carte resident",
    category: "Laïcité",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Concernant la pratique de la religion, quelle proposition est correcte ?",
    options: [
      "Il est interdit d'exprimer ses convictions religieuses en public",
      "Chacun peut pratiquer la religion de son choix ou ne pas en pratiquer",
      "Tout le monde doit pratiquer la même religion",
      "La famille doit avoir la même religion"
    ],
    answer: 1,
    explanation: "❌ A. Il est interdit d'exprimer ses convictions religieuses en public - Faux. La liberté religieuse permet à chacun d'exprimer ses convictions dans le respect des lois et de l'ordre public.\n中：错误。宗教自由允许每个人在法律和公共秩序允许的范围内表达自己的宗教信仰。\n\n✅ B. Chacun peut pratiquer la religion de son choix ou ne pas en pratiquer - Correct ! La laïcité et la liberté de conscience garantissent le droit de croire, de ne pas croire, ou de choisir sa religion librement, sans contrainte de l'État ou de la famille.\n中：正确。世俗原则和良心自由保障每个人有权信仰、无信仰，或自由选择自己的宗教，不受国家或家庭强制。\n\n❌ C. Tout le monde doit pratiquer la même religion - Faux. La République française est laïque et interdit toute obligation religieuse uniforme pour tous.\n中：错误。法国是世俗国家，不允许对所有人统一强制信仰某种宗教。\n\n❌ D. La famille doit avoir la même religion - Faux. Les membres d'une même famille sont libres de croire ou ne pas croire selon leurs choix personnels.\n中：错误。同一家人中的每个人都可以根据个人选择自由决定是否信仰宗教。"
  },
  {
    id: "la0021",
    type: "carte resident",
    category: "Laïcité",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Quel droit est garanti par la laïcité ?",
    options: [
      "Liberté de conscience et de ne pas adhérer à une religion",
      "Ne pas payer d'impôts",
      "Travailler moins",
      "Ne pas respecter la loi"
    ],
    answer: 0,
    explanation: "✅ A. Liberté de conscience et de ne pas adhérer à une religion - Correct ! La laïcité garantit à chaque personne la liberté de croire ou de ne pas croire, et assure la neutralité de l'État vis-à-vis des religions. Cela signifie que chacun peut pratiquer sa religion librement, ou choisir de ne pas en avoir, sans subir de pression ou de discrimination.\n中：正确。世俗原则保障每个人有信仰或不信仰的自由，并确保国家对宗教保持中立。这意味着每个人可以自由地信仰宗教，也可以选择不信仰，而不受到任何压力或歧视。\n\n❌ B. Ne pas payer d'impôts - Faux. La laïcité ne concerne pas les obligations fiscales ; elle ne dispense pas des impôts.\n中：错误。世俗原则不涉及缴税义务，不能免税。\n\n❌ C. Travailler moins - Faux. La laïcité ne modifie pas les règles du travail ou du temps de travail.\n中：错误。世俗原则不会改变工作时间或工作规定。\n\n❌ D. Ne pas respecter la loi - Faux. La liberté de conscience doit toujours s'exercer dans le respect de la loi. La laïcité ne permet pas de violer les lois.\n中：错误。信仰自由必须在遵守法律的前提下行使，世俗原则不允许违法行为。"
  },
  {
    id: "la0022",
    type: "carte resident",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Qu'est ce qui est interdit par la Charte de la laïcité à l'école ?",
    options: [
      "Porter des signes religieux très visibles",
      "Apprendre à lire",
      "Faire du sport",
      "Manger à la cantine"
    ],
    answer: 0,
    explanation: "✅ A. Porter des signes religieux très visibles - Correct ! La Charte de la laïcité à l'école interdit aux élèves de porter des signes religieux ostensibles (comme le voile, la kippa ou de grandes croix) afin de préserver la neutralité de l'école et le respect de la liberté de conscience de tous les élèves.\n中：正确。学校世俗宪章禁止学生佩戴明显宗教标志（如头巾、小圆帽或大十字架），以维护学校中立，并尊重所有学生的信仰自由。\n\n❌ B. Apprendre à lire - Faux. La lecture fait partie du programme scolaire obligatoire et n'a aucun lien avec la laïcité.\n中：错误。阅读是学校的必修课程，与世俗原则无关。\n\n❌ C. Faire du sport - Faux. Les élèves peuvent pratiquer le sport, même dans le cadre de cours mixtes, tant que cela respecte les règles de neutralité et d'égalité.\n中：错误。学生可以参加体育活动，即便男女混合，只要遵守中立和平等原则。\n\n❌ D. Manger à la cantine - Faux. Les repas à la cantine ne sont pas interdits ; certaines adaptations sont possibles pour respecter les convictions religieuses (repas sans porc, etc.).\n中：错误。学生可以在食堂用餐，必要时可根据宗教信仰进行饮食调整（如不吃猪肉等）。"
  },
  {
    id: "la0023",
    type: "carte resident",
    category: "Laïcité",
    difficulté: "difficile",
    typeQuestion: "examen original", // 有红色o标志
    question: "En application de la laïcité, que doit respecter un agent public ?",
    options: [
      "Porter ses convictions religieuses",
      "Être neutre vis-à-vis des usagers",
      "Faire la promotion d'une religion",
      "Imposer sa religion"
    ],
    answer: 1,
    explanation: "❌ A. Porter ses convictions religieuses - Faux. Un agent public ne doit pas afficher ses convictions religieuses pendant l'exercice de ses fonctions afin de respecter la neutralité du service public.\n中：错误。公职人员在履行职务期间不得展示个人宗教信仰，以维护公共服务的中立性。\n\n✅ B. Être neutre vis-à-vis des usagers - Correct ! La laïcité impose aux agents publics d'être neutres envers les usagers : ils doivent traiter chacun de manière égale, sans favoritisme ni discrimination liée à la religion.\n中：正确。世俗原则要求公职人员对服务对象保持中立：平等对待每个人，不因宗教信仰偏袒或歧视任何人。\n\n❌ C. Faire la promotion d'une religion - Faux. L'État est neutre, donc un agent public ne doit promouvoir aucune religion.\n中：错误。国家保持中立，公职人员不得推广任何宗教。\n\n❌ D. Imposer sa religion - Faux. Il est strictement interdit d'imposer sa religion à des usagers ou collègues.\n中：错误。禁止将个人宗教强加给服务对象或同事。"
  },
  {
    id: "la0024",
    type: "carte resident",
    category: "Laïcité",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有红色o标志
    question: "La neutralité de l'État selon la laïcité signifie :",
    options: [
      "L'État favorise financièrement uniquement les religions qui lui donnent de l'argent",
      "L'État ne reçoit ni ne donne de l'argent à aucune religion",
      "L'État choisit quelle religion soutenir selon sa popularité",
      "L'État peut subventionner certaines religions si elles sont très anciennes"
    ],
    answer: 1,
    explanation: "❌ A. L'État favorise financièrement uniquement les religions qui lui donnent de l'argent - Faux. L'État ne favorise aucune religion, quelle que soit leur contribution financière.\n中：错误。国家不会因为宗教提供资金而偏袒任何宗教。\n\n✅ B. L'État ne reçoit ni ne donne de l'argent à aucune religion - Correct ! La laïcité impose que l'État ne finance ni ne soutienne financièrement aucune religion.\n中：正确。世俗原则要求国家不资助任何宗教，也不接受宗教资金。\n\n❌ C. L'État choisit quelle religion soutenir selon sa popularité - Faux. L'État ne doit soutenir aucune religion, même si elle est populaire.\n中：错误。国家不能根据宗教的受欢迎程度来支持某个宗教。\n\n❌ D. L'État peut subventionner certaines religions si elles sont très anciennes - Faux. L'ancienneté d'une religion ne justifie pas un financement public.\n中：错误。宗教是否古老不能作为国家资助的理由。"
  },
  {
    id: "la0025",
    type: "carte resident",
    category: "Laïcité",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有红色o标志
    question: "La neutralité religieuse de l'État implique :",
    options: [
      "L'absence de croyance",
      "L'impartialité",
      "L'interdiction des religions",
      "L'obligation de croire"
    ],
    answer: 1,
    explanation: "❌ A. L'absence de croyance - Faux. La neutralité ne signifie pas que l'État doit être athée ou sans croyance.\n中：错误。中立并不意味着国家必须无神或不信仰。\n\n✅ B. L'impartialité - Correct ! La neutralité religieuse signifie que l'État doit être impartial envers toutes les religions.\n中：正确。宗教中立意味着国家对所有宗教保持公正、不偏袒。\n\n❌ C. L'interdiction des religions - Faux. La neutralité n'interdit pas les religions, elle interdit seulement leur influence sur l'État.\n中：错误。中立不禁止宗教，只是不允许宗教影响国家事务。\n\n❌ D. L'obligation de croire - Faux. La neutralité ne rend pas la croyance obligatoire.\n中：错误。中立不会强制信仰。"
  },
    // === Mises en situation 情景模块（十年卡）===
  {
    id: "si0035",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Madame X a une entreprise de logistique. Madame Y, qui a des difficultés de mobilité, vient postuler. Que peut faire Madame X ?",
    options: [
      "Madame X peut la refuser directement à cause de son handicap",
      "Madame X doit lui faire passer l'entretien comme pour un candidat valide",
      "Madame X doit l'embaucher immédiatement",
      "Madame Y ne devrait pas venir passer l'entretien"
    ],
    answer: 1,
    explanation: "❌ A. Madame X peut la refuser directement à cause de son handicap - Faux. Refuser un candidat à cause de son handicap est une discrimination interdite par la loi.\n中：错误。因为残疾而直接拒绝求职者属于违法歧视。\n\n✅ B. Madame X doit lui faire passer l'entretien comme pour un candidat valide - Correct ! Tous les candidats doivent être traités de manière égale.\n中：正确！所有候选人都应被平等对待，包括面试机会。\n\n❌ C. Madame X doit l'embaucher immédiatement - Faux. L'employeur n'est pas obligé d'embaucher, mais doit évaluer les compétences.\n中：错误。雇主没有义务立刻录用，但必须公平评估能力。\n\n❌ D. Madame Y ne devrait pas venir passer l'entretien - Faux. Toute personne a le droit de postuler à un emploi.\n中：错误。任何人都有应聘工作的权利。"
  },
  {
    id: "si0036",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Monsieur X publie une critique du gouvernement sur Facebook. Que dit la liberté d'expression ?",
    options: [
      "Il peut en parler seulement avec sa famille, pas sur Internet",
      "Il doit uniquement say du bien du gouvernement",
      "Il peut exprimer son opinion tant qu'il respecte la loi",
      "Il n'a pas le droit de parler de politique"
    ],
    answer: 2,
    explanation: "❌ A. Il peut en parler seulement avec sa famille, pas sur Internet - Faux. La liberté d'expression ne se limite pas à la famille.\n中：错误。言论自由不限于家庭内部。\n\n❌ B. Il doit uniquement say du bien du gouvernement - Faux. La liberté d'expression permet de critiquer le gouvernement.\n中：错误。言论自由允许批评政府。\n\n✅ C. Il peut exprimer son opinion tant qu'il respecte la loi - Correct ! La liberté d'expression s'exerce dans le respect des lois et des autres.\n中：正确。言论自由是在遵守法律和尊重他人的前提下表达观点。\n\n❌ D. Il n'a pas le droit de parler de politique - Faux. Les citoyens peuvent discuter de politique librement dans le cadre légal.\n中：错误。公民可以在法律允许范围内自由讨论政治。"
  },
  {
    id: "si0037",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Un homme peut-il avoir plusieurs épouses en France ?",
    options: [
      "C'est interdit",
      "C'est possible",
      "C'est autorisé pour certaines religions",
      "C'est décidé par le ministre"
    ],
    answer: 0,
    explanation: "✅ A. C'est interdit - Correct ! La polygamie est strictement interdite en France pour tous, quelle que soit la religion ou la culture. Le mariage doit être monogame.\n中：正确。法国严格禁止一夫多妻制，不论宗教或文化背景如何，婚姻必须是一夫一妻制。\n\n❌ B. C'est possible - Faux. La loi française ne permet pas d'avoir plusieurs épouses simultanément.\n中：错误。法国法律不允许同时有多个妻子。\n\n❌ C. C'est autorisé pour certaines religions - Faux. Aucune religion ne peut légalement autoriser la polygamie en France ; la loi prime toujours sur la religion.\n中：错误。在法国，没有宗教可以合法允许一夫多妻制；法律高于宗教。\n\n❌ D. C'est décidé par le ministre - Faux. Le mariage polygame n'est pas une question de décision administrative, c'est interdit par la loi.\n中：错误。一夫多妻制不是行政决定问题，而是法律禁止的行为。"
  },
  {
    id: "si0038",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有红色o标志
    question: "La répudiation de sa femme est :",
    options: [
      "Légale",
      "Interdite",
      "Autorisée seulement pour certaines religions",
      "Facultative"
    ],
    answer: 1,
    explanation: "❌ A. Légale - Faux. La répudiation unilatérale (mettre fin au mariage sans procédure judiciaire) est interdite en France. Le divorce doit suivre une procédure légale.\n中：错误。在法国，单方面驱逐妻子（无司法程序解除婚姻）是非法的。离婚必须经过法律程序。\n\n✅ B. Interdite - Correct ! On ne peut pas répudier sa femme comme dans certaines traditions anciennes. La loi protège le mariage et les droits de chacun.\n中：正确。在法国，不能像某些古老传统那样随意休妻。法律保护婚姻及每个人的权利。\n\n❌ C. Autorisée seulement pour certaines religions - Faux. La loi française interdit la répudiation quelle que soit la religion.\n中：错误。无论宗教信仰如何，法国法律都禁止驱逐妻子。\n\n❌ D. Facultative - Faux. La répudiation n'est pas une option légale ; seule la procédure de divorce encadrée par la loi est possible.\n中：错误。驱逐妻子不是合法选择，只有通过法律程序的离婚才被允许。"
  },
  {
    id: "si0039",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有红色o标志
    question: "Que peut faire un usager du service public dans une mairie ?",
    options: [
      "Demander un document administratif",
      "Organiser un événement religieux",
      "Imposer sa religion",
      "Modifier la loi"
    ],
    answer: 0,
    explanation: "✅ A. Demander un document administratif - Correct ! Les usagers des services publics, comme dans une mairie, peuvent effectuer des démarches administratives : demander une carte d'identité, un passeport, un acte de naissance, ou tout autre document officiel. Cela relève de leurs droits civiques et de l'accès aux services publics.\n中：正确。公共服务的使用者（如市政厅）可以办理行政事务：申请身份证、护照、出生证明或其他官方文件。这属于公民权利和公共服务的基本保障。\n\n❌ B. Organiser un événement religieux - Faux. Une mairie est un service public laïc ; elle ne peut pas organiser ou promouvoir un événement religieux.\n中：错误。市政厅是世俗公共机构，不能组织或推广宗教活动。\n\n❌ C. Imposer sa religion - Faux. Selon le principe de laïcité, personne ne peut imposer sa religion dans un service public.\n中：错误。根据世俗原则，任何人都不能在公共服务机构中强制推广自己的宗教信仰。\n\n❌ D. Modifier la loi - Faux. Les citoyens ne peuvent pas modifier la loi directement dans une mairie ; cela relève du pouvoir législatif.\n中：错误。公民不能直接在市政厅修改法律，这是立法机关的职权范围。"
  },
  {
    id: "si0040",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 无o标志
    question: "Madame X et Monsieur Y occupent des postes similaires dans la même entreprise. Laquelle des situations suivantes n'est pas conforme au principe d'égalité ?",
    options: [
      "Monsieur Y perçoit un salaire plus élevé que Madame X en raison d'une expérience professionnelle plus importante.",
      "Bien que Madame X soit en situation de handicap, elle bénéficie des mêmes conditions de travail et de traitement que Monsieur Y.",
      "Le congé maternité de Madame X est plus long que le congé de Monsieur Y.",
      "Le salaire de Madame X est réduit en raison de ses opinions politiques différentes de celles de son employeur"
    ],
    answer: 3,
    explanation: "❌ A. Monsieur Y perçoit un salaire plus élevé que Madame X en raison d'une expérience professionnelle plus importante - Faux. Ici, la différence de salaire est justifiée par l'expérience professionnelle, ce qui respecte le principe d'égalité puisque les critères sont objectifs.\n中：错误。这里工资差异是由于工作经验不同造成的，这是客观标准，符合平等原则。\n\n❌ B. Bien que Madame X soit en situation de handicap, elle bénéficie des mêmes conditions de travail et de traitement que Monsieur Y - Faux. Cette situation est conforme à l'égalité : les personnes en situation de handicap doivent avoir un traitement équitable, avec des adaptations si nécessaire.\n中：错误。这种情况符合平等原则：残障人士应享有公平待遇，并根据需要进行适当调整。\n\n❌ C. Le congé maternité de Madame X est plus long que le congé de Monsieur Y - Faux. Le congé maternité est spécifique à la maternité et ne constitue pas une violation du principe d'égalité.\n中：错误。产假是针对生育的特殊安排，不违反平等原则。\n\n✅ D. Le salaire de Madame X est réduit en raison de ses opinions politiques différentes de celles de son employeur - Correct ! Réduire le salaire d'une personne pour ses opinions politiques constitue une discrimination, ce qui est contraire au principe d'égalité.\n中：正确。因政治观点不同而降低工资属于歧视行为，违反平等原则。"
  },

  {
    id: "si0041",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 无o标志
    question: "Monsieur Y se rend à la préfecture pour effectuer une démarche concernant son permis de conduire. Il souhaite être reçu par un agent qui partage la religion bouddhiste afin d'échanger avec lui. Laquelle des propositions suivantes est correcte ?",
    options: [
      "Il a le droit de choisir, car il est possible de discuter librement de sa religion dans un service public.",
      "Il n'a pas le droit de choisir, car la religion ne peut pas être prise en compte dans un service public.",
      "Seuls les agents peuvent le choisir, car eux seuls ont le droit d'exprimer et de discuter de leur religion.",
      "Les agents ne peuvent pas le choisir, car ils n'ont pas le droit de discuter de religion dans l'exercice de leurs fonctions."
    ],
    answer: 1,
    explanation: "❌ A. Il a le droit de choisir, car il est possible de discuter librement de sa religion dans un service public - Faux. Dans un service public, la religion des agents ne doit pas influencer le service rendu aux usagers ; choisir un agent en fonction de sa religion serait contraire au principe de neutralité.\n中：错误。在公共服务中，公职人员的宗教信仰不得影响服务；根据宗教选择工作人员违反中立原则。\n\n✅ B. Il n'a pas le droit de choisir, car la religion ne peut pas être prise en compte dans un service public - Correct ! Le principe de neutralité impose que les usagers soient traités de manière égale, indépendamment de leur religion ou de celle de l'agent.\n中：正确。中立原则要求服务对象不受自己或工作人员宗教信仰的影响，每个人都应平等对待。\n\n❌ C. Seuls les agents peuvent le choisir, car eux seuls ont le droit d'exprimer et de discuter de leur religion - Faux. Les agents ne peuvent pas utiliser leur religion pour influencer les choix des usagers.\n中：错误。公职人员不得利用宗教信仰影响服务对象的选择。\n\n❌ D. Les agents ne peuvent pas le choisir, car ils n'ont pas le droit de discuter de religion dans l'exercice de leurs fonctions - Faux. Les agents peuvent avoir des croyances personnelles, mais le principe de neutralité impose qu'ils ne les affichent pas et ne les utilisent pas dans le cadre du service public.\n中：错误。公职人员可以有个人信仰，但中立原则要求他们在工作中不展示或利用宗教信仰。"
  },
  {
    id: "si0042",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 无o标志
    question: "Madame X a organisé une activité terroriste au nom de la liberté de réunion. Que dit la loi ?",
    options: [
      "C'est autorisé",
      "C'est interdit",
      "C'est toléré si personne n'est blessé",
      "C'est seulement interdit si l'État l'interdit formellement"
    ],
    answer: 1,
    explanation: "❌ A. C'est autorisé - Faux. La liberté de réunion ne peut jamais justifier une activité terroriste.\n中：错误。集会自由不能成为恐怖主义活动的正当理由。\n\n✅ B. C'est interdit - Correct ! Toute activité terroriste est strictement interdite par la loi, quelle que soit la justification invoquée.\n中：正确。任何恐怖主义活动都被法律严格禁止，不论以何种理由进行。\n\n❌ C. C'est toléré si personne n'est blessé - Faux. Une activité terroriste est interdite même en l'absence de victimes.\n中：错误。即使没有人员受伤，恐怖主义活动仍然是非法的。\n\n❌ D. C'est seulement interdit si l'État l'interdit formellement - Faux. La loi interdit le terrorisme de manière générale, sans nécessité d'une interdiction spécifique de l'État.\n中：错误。恐怖主义行为本身即被法律禁止，不需要国家另行特别禁止。"
  },
  {
    id: "si0043",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 无o标志
    question: "Madame X veut organiser un événement religieux à la mairie. Que peut-elle faire ?",
    options: [
      "Elle peut organiser librement son événement religieux dans la mairie",
      "Elle ne peut pas organiser d'événement religieux dans la mairie",
      "Elle peut organiser l'événement uniquement si la mairie appartient à sa religion",
      "Elle peut organiser l'événement seulement si elle paie un droit spécial"
    ],
    answer: 1,
    explanation: "❌ A. Elle peut organiser librement son événement religieux dans la mairie - Faux. La mairie est un lieu de service public soumis au principe de neutralité.\n中：错误。市政厅属于公共服务场所，必须遵守中立原则。\n\n✅ B. Elle ne peut pas organiser d'événement religieux dans la mairie - Correct ! Les événements religieux ne peuvent pas être organisés dans un lieu de service public.\n中：正确。宗教活动不得在公共服务场所组织举行。\n\n❌ C. Elle peut organiser l'événement uniquement si la mairie appartient à sa religion - Faux. Une mairie n'appartient à aucune religion.\n中：错误。市政厅不属于任何宗教。\n\n❌ D. Elle peut organiser l'événement seulement si elle paie un droit spécial - Faux. Le paiement d'un droit ne permet pas de déroger au principe de neutralité.\n中：错误。缴纳费用不能使公共服务场所偏离中立原则。"
  },
  {
    id: "si0044",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Madame X est enseignante dans un collège public. Elle souhaite faire la promotion de sa religion auprès des élèves. Que dit la loi ?",
    options: [
      "Elle peut le faire librement pendant les cours",
      "Elle ne peut pas promouvoir sa religion auprès des élèves",
      "Elle peut le faire seulement avec l'autorisation des parents",
      "Elle peut le faire mais uniquement en dehors de l'établissement"
    ],
    answer: 1,
    explanation: "❌ A. Elle peut le faire librement pendant les cours - Faux. Dans un établissement public, les enseignants doivent respecter la neutralité et ne peuvent pas promouvoir une religion.\n中：错误。在公立学校，教师必须保持中立，不能在课堂上宣传宗教。\n\n✅ B. Elle ne peut pas promouvoir sa religion auprès des élèves - Correct ! La neutralité du service public interdit toute promotion religieuse par un enseignant dans un établissement public.\n中：正确。公共服务中立原则禁止教师在公立学校宣传宗教。\n\n❌ C. Elle peut le faire seulement avec l'autorisation des parents - Faux. Même avec l'autorisation des parents, un enseignant ne peut pas promouvoir sa religion dans un établissement public.\n中：错误。即使得到家长同意，教师在公立学校仍不能宣传宗教。\n\n❌ D. Elle peut le faire mais uniquement en dehors de l'établissement - Faux. Même en dehors de l'établissement, un enseignant ne doit pas utiliser sa position professionnelle pour promouvoir une religion auprès des élèves.\n中：错误。教师不能利用其职业身份向学生宣传宗教，即使在校外也不允许。"
  },
  {
    id: "si0045",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Un élève veut pratiquer sa religion en dehors des cours. Il peut :",
    options: [
      "Oui, librement",
      "Non",
      "Seulement si les enseignants le permettent",
      "Seulement les jours fériés"
    ],
    answer: 0,
    explanation: "✅ A. Oui, librement - Correct ! Hors des heures de cours, un élève peut pratiquer sa religion dans le respect des règles de l'établissement.\n中：正确。在课外时间，学生可以自由进行宗教活动，但需遵守学校规定。\n\n❌ B. Non - Faux. La pratique religieuse en dehors des cours est autorisée.\n中：错误。课外时间的宗教活动是允许的。\n\n❌ C. Seulement si les enseignants le permettent - Faux. Les enseignants ne peuvent pas interdire la pratique religieuse en dehors des cours, sauf si cela viole les règles de l'établissement.\n中：错误。教师不能单方面禁止课外宗教活动，除非违反学校规则。\n\n❌ D. Seulement les jours fériés - Faux. La pratique religieuse n'est pas limitée aux seuls jours fériés.\n中：错误。宗教活动不只限于节假日。"
  },
  {
    id: "si0046",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Un citoyen critique une décision politique dans un journal. Il agit :",
    options: [
      "Illégalement",
      "Dans le cadre de la liberté d'expression",
      "Contre la Constitution",
      "Contre la démocratie"
    ],
    answer: 1,
    explanation: "❌ A. Illégalement - Faux. La critique politique est autorisée dans le cadre de la liberté d'expression.\n中：错误。在报纸上批评政治决定属于言论自由范围，不是违法。\n\n✅ B. Dans le cadre de la liberté d'expression - Correct ! La liberté d'expression permet de critiquer les décisions politiques.\n中：正确。言论自由允许对政治决定进行批评。\n\n❌ C. Contre la Constitution - Faux. La Constitution protège la liberté d'expression.\n中：错误。宪法保障言论自由，因此不违反宪法。\n\n❌ D. Contre la démocratie - Faux. La critique politique fait partie du débat démocratique.\n中：错误。政治批评属于民主讨论的一部分，不反对民主。"
  },
  {
    id: "si0047",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Un élève est traité différemment à cause de son origine. Cela viole :",
    options: [
      "L'égalité",
      "La fraternité",
      "La neutralité",
      "La tradition"
    ],
    answer: 0,
    explanation: "✅ A. L'égalité - Correct ! Traiter un élève différemment en raison de son origine constitue une violation de l'égalité.\n中：正确。因出身而区别对待学生违反平等原则。\n\n❌ B. La fraternité - Faux. Cela concerne surtout l'égalité et la non-discrimination.\n中：错误。这主要违反平等与反歧视原则，而非博爱。\n\n❌ C. La neutralité - Faux. La neutralité concerne l'État et les services publics, pas directement la situation.\n中：错误。中立主要适用于公共服务与国家机构，不直接指向此情境。\n\n❌ D. La tradition - Faux. La tradition n'est pas une norme juridique protégée dans ce contexte.\n中：错误。传统不是该情境下的法律原则。"
  },
  
 {
  id: "si0048",
  type: "carte resident",
  category: "Mises en situation",
  difficulté: "simple",
  typeQuestion: "examen original", // 有红色o标志
  question: "En France, peut-on créer librement une association pour aider les personnes âgées ?",
  options: [
    "Oui, on peut la créer librement",
    "Il faut obligatoirement l’autorisation de la mairie",
    "Il faut l’autorisation de la police",
    "Il faut l’accord des parents"
  ],
  answer: 0,
  explanation: 
"✅ A. Oui, on peut la créer librement – Correct !\n\
FR : En France, la liberté d’association est garantie par la loi de 1901. Toute personne peut créer librement une association, notamment pour aider les personnes âgées, dans le respect de la loi.\n\
中：正确。\n\
法国《1901年结社法》保障结社自由，任何人都可以依法自由成立协会，例如帮助老年人的协会。\n\n\
❌ B. Il faut obligatoirement l’autorisation de la mairie – Faux.\n\
FR : Il n’est pas nécessaire d’obtenir une autorisation préalable de la mairie pour créer une association.\n\
中：错误。\n\
成立协会不需要事先获得市政府的批准。\n\n\
❌ C. Il faut l’autorisation de la police – Faux.\n\
FR : La police n’intervient pas dans la création d’une association.\n\
中：错误。\n\
警察机构不参与协会成立的审批。\n\n\
❌ D. Il faut l’accord des parents – Faux.\n\
FR : L’accord des parents n’est pas requis pour créer une association.\n\
中：错误。\n\
成立协会不需要家长同意。"
},
{
  id: "si0049",
  type: "carte resident",
  category: "Mises en situation",
  difficulté: "moyen",
  typeQuestion: "examen original", // 有红色o标志
  question: "En France, peut-on répudier sa femme ?",
  options: [
    "Oui, si le père de la femme est d’accord",
    "Non, c’est interdit par la loi",
    "Oui, si le frère de la femme est d’accord",
    "Non, car on ne peut pas hériter de sa femme"
  ],
  answer: 1,
  explanation:
"❌ A. Oui, si le père de la femme est d’accord – Faux.\n\
FR : L’accord du père n’a aucune valeur juridique. La répudiation est interdite en France, quelle que soit l’opinion de la famille.\n\
中：错误。\n\
妻子父亲的同意在法律上没有任何效力，在法国，无论家庭是否同意，休妻都是被禁止的。\n\n\
✅ B. Non, c’est interdit par la loi – Correct !\n\
FR : En France, la répudiation est interdite. La fin d’un mariage ne peut se faire que par une procédure légale de divorce devant un juge.\n\
中：正确。\n\
在法国，休妻是被法律禁止的。婚姻只能通过依法进行的离婚程序来解除。\n\n\
❌ C. Oui, si le frère de la femme est d’accord – Faux.\n\
FR : Le frère de la femme n’a aucun pouvoir légal sur le mariage.\n\
中：错误。\n\
妻子的兄弟对婚姻没有任何法律决定权。\n\n\
❌ D. Non, car on ne peut pas hériter de sa femme – Faux.\n\
FR : La raison de l’interdiction n’est pas liée à l’héritage, mais au respect de l’égalité et des droits des époux.\n\
中：错误。\n\
禁止休妻的原因不是继承问题，而是为了保护夫妻平等与个人权利。"
},
{
  id: "si0050",
  type: "carte resident",
  category: "Mises en situation",
  difficulté: "moyen",
  typeQuestion: "examen original", // 有红色o标志
  question: "Une femme peut-elle porter un voile religieux dans la rue en France ?",
  options: [
    "Non, c’est interdit par la loi",
    "Oui, au nom de la liberté de conscience",
    "Non, personne n’a le droit de le porter",
    "Oui, seulement dans certaines régions"
  ],
  answer: 0,
  explanation:
"✅ A. Non, c’est interdit par la loi – Correct !\n\
FR : En France, le port du voile intégral couvrant le visage (comme le niqab ou la burqa) est interdit dans l’espace public, y compris dans la rue, afin de garantir l’ordre public et le vivre-ensemble.\n\
中：正确。\n\
在法国，遮挡整个面部的宗教头巾（如罩袍、面纱）在公共空间（包括街道）是被法律禁止的，这是为了维护公共秩序和社会共同生活。\n\n\
❌ B. Oui, au nom de la liberté de conscience – Faux.\n\
FR : La liberté de conscience existe, mais elle connaît des limites. Elle ne permet pas de porter un voile couvrant entièrement le visage dans l’espace public.\n\
中：错误。\n\
良心自由是存在的，但并非无限，不能据此在公共场所佩戴遮挡面部的头巾。\n\n\
❌ C. Non, personne n’a le droit de le porter – Faux.\n\
FR : La loi n’interdit pas tous les signes religieux, mais uniquement ceux qui dissimulent le visage dans l’espace public.\n\
中：错误。\n\
法律并未禁止所有宗教标志，而是针对在公共场所遮挡面部的行为。\n\n\
❌ D. Oui, seulement dans certaines régions – Faux.\n\
FR : L’interdiction s’applique sur tout le territoire français, sans exception régionale.\n\
中：错误。\n\
该禁令适用于整个法国，没有任何地区例外。"
},
{
  id: "si0051",
  type: "carte resident",
  category: "Mises en situation",
  difficulté: "simple",
  typeQuestion: "examen original", // 有红色o标志
  question: "Une entreprise recrute un homme et une femme pour le même poste mais leur propose des salaires différents. Cette situation est :",
  options: [
    "Une discrimination interdite",
    "Autorisée si l’employeur le souhaite",
    "Interdite car tous les salariés doivent avoir exactement le même salaire",
    "Autorisée dans certains secteurs"
  ],
  answer: 0,
  explanation:
"✅ A. Une discrimination interdite – Correct !\n\
FR : La discrimination salariale fondée sur le sexe est interdite par la loi. Tous les salariés occupant le même poste doivent recevoir un salaire équitable selon des critères objectifs.\n\
中：正确。\n\
基于性别的薪资歧视是违法的。担任同一岗位的员工应根据客观标准获得公平薪酬。\n\n\
❌ B. Autorisée si l’employeur le souhaite – Faux.\n\
FR : L’employeur ne peut pas décider arbitrairement de payer différemment hommes et femmes pour le même travail.\n\
中：错误。\n\
雇主不能随意决定对同一岗位的男女支付不同薪酬。\n\n\
❌ C. Interdite car tous les salariés doivent avoir exactement le même salaire – Faux.\n\
FR : La loi interdit la discrimination, mais les salaires peuvent varier selon l’expérience, les qualifications ou la performance, pas selon le sexe.\n\
中：错误。\n\
法律禁止歧视，但工资可以因经验、资历或绩效不同而有所差异，不能因性别不同。\n\n\
❌ D. Autorisée dans certains secteurs – Faux.\n\
FR : La loi sur l’égalité salariale s’applique à tous les secteurs professionnels.\n\
中：错误。\n\
平等薪酬的法律适用于所有行业，没有行业例外。"
},
{
  id: "si0052",
  type: "carte resident",
  category: "Mises en situation",
  difficulté: "moyen",
  typeQuestion: "examen original", // 有红色o标志
  question: "Un employeur refuse d’embaucher une femme parce qu’elle est enceinte. Cette situation est :",
  options: [
    "Une discrimination interdite",
    "Autorisée si l’employeur le souhaite",
    "Interdite seulement avec l’accord de la police",
    "Autorisée car la grossesse est une situation particulière"
  ],
  answer: 0,
  explanation:
"✅ A. Une discrimination interdite – Correct !\n\
FR : Refuser l’embauche d’une personne en raison de sa grossesse constitue une discrimination prohibée par la loi. La grossesse ne peut pas être un motif de refus d’emploi.\n\
中：正确。\n\
因怀孕而拒绝招聘属于法律禁止的歧视。怀孕不能成为拒绝就业的理由。\n\n\
❌ B. Autorisée si l’employeur le souhaite – Faux.\n\
FR : L’employeur n’a pas le droit d’agir ainsi, même s’il s’agit de son choix personnel.\n\
中：错误。\n\
即使是雇主的个人意愿，也不能因怀孕而拒绝招聘。\n\n\
❌ C. Interdite seulement avec l’accord de la police – Faux.\n\
FR : La police n’a aucun rôle dans l’autorisation ou l’interdiction des discriminations à l’embauche.\n\
中：错误。\n\
警方无权决定招聘中的歧视是否合法。\n\n\
❌ D. Autorisée car la grossesse est une situation particulière – Faux.\n\
FR : La loi protège les femmes enceintes contre toute discrimination professionnelle.\n\
中：错误。\n\
法律明确保护孕妇不受职业歧视，怀孕不能作为拒绝录用的理由。"
},
{
  id: "si0053",
  type: "carte resident",
  category: "Mises en situation",
  difficulté: "moyen",
  typeQuestion: "examen original", // 有红色o标志
  question: "Madame X et Monsieur Y sont en couple mais n’ont pas la même religion. Monsieur Y exige que Madame X adopte sa religion pour se marier. Cette situation :",
  options: [
    "Porte atteinte à la liberté de conscience",
    "Est conforme aux valeurs de la République",
    "Est obligatoire selon la loi française",
    "Est justifiée par la tradition"
  ],
  answer: 0,
  explanation:
"✅ A. Porte atteinte à la liberté de conscience – Correct !\n\
FR : Obliger quelqu’un à changer de religion pour se marier viole sa liberté de conscience et son droit à choisir ses croyances.\n\
中：正确。\n\
强迫某人为了结婚而改变宗教信仰侵犯了其良心自由以及选择信仰的权利。\n\n\
❌ B. Est conforme aux valeurs de la République – Faux.\n\
FR : Les valeurs républicaines respectent la liberté de conscience ; imposer un changement de religion est donc contraire à ces valeurs.\n\
中：错误。\n\
共和价值观强调尊重良心自由，强迫改变宗教信仰违背这些价值观。\n\n\
❌ C. Est obligatoire selon la loi française – Faux.\n\
FR : La loi française n’impose aucune religion pour le mariage.\n\
中：错误。\n\
法国法律不要求结婚必须信奉某种宗教。\n\n\
❌ D. Est justifiée par la tradition – Faux.\n\
FR : La tradition ne peut jamais justifier une atteinte aux droits individuels et à la liberté de conscience.\n\
中：错误。\n\
传统不能成为侵犯个人权利和良心自由的理由。"
},

{
  id: "si0054",
   type: "carte resident",
  category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original",
  question: "Monsieur Y porte une croix visible en se rendant à la mairie pour effectuer une démarche. Que dit le principe de neutralité ?",
  options: [
    "C’est autorisé",
    "Ce n’est pas autorisé",
    "Autorisé seulement si l’usager est d’accord",
    "Autorisé selon la religion de l’agent"
  ],
  answer: 0,
  explanation: "✅ A. C’est autorisé - Correct ! Le principe de neutralité concerne principalement les agents publics dans l’exercice de leurs fonctions. Un usager (citoyen) peut porter des signes religieux dans un service public, tant que cela ne trouble pas l’ordre public. Monsieur Y peut donc porter une croix visible en se rendant à la mairie.\n中：正确。法国的中立原则主要适用于公共服务人员（agent public），要求其在工作中保持宗教中立。普通市民（usager）在公共服务场所佩戴宗教标志是允许的，只要不影响公共秩序。因此，Y先生前往市政厅办理事务时佩戴十字架是允许的。\n\n❌ B. Ce n’est pas autorisé - Faux. Le principe de neutralité ne s’applique pas aux usagers. Interdire à un citoyen de porter un signe religieux constituerait une atteinte excessive à la liberté de conscience.\n中：错误。中立原则并不适用于普通市民，禁止市民佩戴宗教标志会过度限制其思想和宗教自由。\n\n❌ C. Autorisé seulement si l’usager est d’accord - Faux. Le principe de neutralité ne dépend pas de l’accord d’un autre usager. La question porte sur le droit individuel du citoyen.\n中：错误。中立原则与其他人是否同意无关，关注的是市民个人的权利。\n\n❌ D. Autorisé selon la religion de l’agent - Faux. La neutralité ne dépend pas de la religion de l’agent. Au contraire, l’agent public doit rester neutre quelles que soient ses convictions. De plus, la situation concerne un usager, non un agent.\n中：错误。中立原则不是根据工作人员的宗教信仰来判断的，而且本题讨论的是市民而非公共服务人员。"
}

,

  {
    id: "in0063", // 延续多年卡编号
    type: "carte resident",
    category: "Institutions", 
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel rôle principal a le Sénat dans le processus législatif ?",
    options: [
      "Élire le Président de la République",
      "Proposer, amender et voter les lois",
      "Nommer les ministres",
      "Organiser les élections"
    ],
    answer: 1, // B
    explanation: `❌ A. Élire le Président de la République - Faux. Le Président de la République est élu au suffrage universel direct (ou indirect pour certains cas). Le Sénat ne l'élit pas.
中：错误。总统由全民投票选举，参议院不选总统。

✅ B. Proposer, amender et voter les lois - Correct. Le Sénat participe à l'élaboration des lois : il peut proposer des amendements et voter les textes, au même titre que l'Assemblée nationale.
中：正确。参议院参与法律制定，可提出修正案并投票通过法律。

❌ C. Nommer les ministres - Faux. Les ministres sont nommés par le Président de la République, sur proposition du Premier ministre.
中：错误。部长由总统任命，总理提名。

❌ D. Organiser les élections - Faux. L'organisation des élections est une compétence de l'État, pas du Sénat.
中：错误。选举组织属于国家职能，不是参议院。`
  },
  {
    id: "in0064",
    type: "carte resident",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Dans quel bâtiment siège l'Assemblée nationale ?",
    options: [
      "Hôtel de Matignon",
      "Palais Bourbon", 
      "Palais de l'Élysée",
      "Conseil d'État"
    ],
    answer: 1, // B
    explanation: `❌ A. Hôtel de Matignon - Faux. L'Hôtel de Matignon est la résidence du Premier ministre.
中：错误。马蒂尼翁是总理官邸。

✅ B. Palais Bourbon - Correct. L'Assemblée nationale siège au Palais Bourbon, à Paris.
中：正确。国民议会在巴黎的波旁宫开会。

❌ C. Palais de l'Élysée - Faux. L'Élysée est la résidence du Président.
中：错误。爱丽舍宫是总统官邸。

❌ D. Conseil d'État - Faux. Le Conseil d'État est une institution administrative, pas le siège du Parlement.
中：错误。国务委员会是行政机构，不是议会所在地。`
  },

  {
    id: "de0070",
    type: "carte resident",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：1 中（没有o）
    question: "A-t-on le droit de ne pas respecter une loi ?",
    options: [
      "Oui, lorsqu'une loi paraît injuste selon l'opinion personnelle",
      "Oui, lorsqu'une personne pense agir pour une bonne cause",
      "Non, seulement si la loi concerne la sécurité publique",
      "Non, car il existe des moyens légaux pour contester ou changer une loi (vote, justice)"
    ],
    answer: 3,
    explanation: `❌ A. Faux. Une opinion personnelle ne permet pas de désobéir à la loi.
中：错误。个人认为法律不公，并不赋予不遵守法律的权利。

❌ B. Faux. Agir pour une « bonne cause » ne justifie pas le non-respect de la loi.
中：错误。即使出于"好意"，也不能作为违法的理由。

❌ C. Faux. Toutes les lois doivent être respectées, pas uniquement celles liées à la sécurité.
中：错误。法律并不仅在涉及公共安全时才必须遵守。

✅ D. Correct ! Dans un État de droit, on ne désobéit pas à la loi : on la conteste par des moyens légaux.
中：正确。在法治国家中，法律不能被随意违反，而应通过合法方式（投票、司法）来修改或挑战。`
  },
  {
    id: "de0071",
    type: "carte resident",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：2 中（没有o）
    question: "Quand sont élus les sénateurs ?",
    options: [
      "Tous les cinq ans, avec un renouvellement total à chaque fois",
      "Tous les six ans, mais la moitié est renouvelée tous les trois ans",
      "Tous les trois ans, avec un renouvellement total à chaque fois",
      "Tous les six ans, avec un renouvellement total à chaque fois"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Les sénateurs ne sont pas élus tous les cinq ans.
中：错误。参议员不是每五年选举一次。

✅ B. Correct ! Le Sénat est renouvelé par moitié tous les trois ans.
中：正确。参议院每三年改选一半，参议员任期为六年。

❌ C. Faux. Le renouvellement est partiel, pas total.
中：错误。参议院不是整体改选。

❌ D. Faux. Le renouvellement n'est jamais total.
中：错误。参议院不会一次性全部改选。`
  },
  {
    id: "de0072",
    type: "carte resident",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：3 中（没有o）
    question: "Qui peut voter aux élections en France ?",
    options: [
      "Toute personne vivant en France, quelle que soit sa nationalité",
      "Seules les personnes âgées de 18 ans et plus, quelle que soit leur nationalité",
      "Les citoyens français âgés de 18 ans et plus, inscrits sur les listes électorales",
      "Les citoyens français et les citoyens de l'Union européenne, sans condition d'âge"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Le droit de vote est lié à la citoyenneté.
中：错误。投票权与公民身份有关。

❌ B. Faux. La nationalité est une condition essentielle.
中：错误。国籍是重要条件。

✅ C. Correct ! Ce sont les conditions légales du droit de vote en France.
中：正确。这是法国投票权的法定条件。

❌ D. Faux. L'âge minimum reste 18 ans.
中：错误。投票仍需年满 18 岁。`
  },
  {
    id: "de0073",
    type: "carte resident",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：4 中（没有o）
    question: "Qu'est-ce que le multipartisme ?",
    options: [
      "Une manifestation de la démocratie",
      "Une manifestation de la monarchie",
      "Une manifestation de la dictature",
      "Une forme de régime autoritaire"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! Le multipartisme permet l'expression de différentes opinions politiques.
中：正确。多党制体现了民主中多元政治观点的表达。

❌ B. Faux. La monarchie ne repose pas sur le pluralisme politique.
中：错误。君主制不以政治多元为基础。

❌ C. Faux. Les dictatures interdisent souvent les partis politiques.
中：错误。独裁政权通常禁止多党制。

❌ D. Faux. Le multipartisme s'oppose aux régimes autoritaires.
中：错误。多党制与威权体制相对立。`
  },
  {
    id: "de0074",
    type: "carte resident",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：5 中（没有o）
    question: "Qu'est-ce qu'un référendum ?",
    options: [
      "Une consultation directe des citoyens par vote",
      "Une décision prise uniquement par le gouvernement",
      "Une élection des représentants politiques",
      "Une réunion des chefs d'État"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! Le référendum permet au peuple de se prononcer directement.
中：正确。公投让公民直接通过投票表达意见。

❌ B. Faux. Le référendum implique les citoyens.
中：错误。公投不是政府单方面决定。

❌ C. Faux. Le référendum porte sur une question, pas sur des personnes.
中：错误。公投不是选举代表。

❌ D. Faux. Il ne s'agit pas d'une réunion politique.
中：错误。公投不是国家领导人会议。`
  },
  {
    id: "de0075",
    type: "carte resident",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：6 中（没有o）
    question: "Quelle est une manifestation concrète de l'État de droit ?",
    options: [
      "La loi est au-dessus du pouvoir et des autorités politiques",
      "Le gouvernement peut modifier la loi à volonté",
      "Seuls les tribunaux peuvent promulguer des lois",
      "Les autorités politiques ne sont pas soumises à la loi"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! Dans un État de droit, le pouvoir est soumis à la loi.
中：正确。在法治国家，权力必须服从法律。

❌ B. Faux. Les lois sont modifiées selon une procédure démocratique.
中：错误。法律修改必须遵循民主程序。

❌ C. Faux. Les lois sont votées par le Parlement.
中：错误。法律由议会制定，而非法院。

❌ D. Faux. Elles sont soumises au droit comme tous.
中：错误。政治当局同样必须遵守法律。`
  },
  {
    id: "de0076",
    type: "carte resident",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：7 中（没有o）
    question: "Le droit à la sûreté protège contre :",
    options: [
      "Les maladies",
      "Les arrestations et emprisonnements arbitraires",
      "La fiscalité",
      "La corruption politique"
    ],
    answer: 1,
    explanation: `❌ A. Faux. La sûreté concerne la liberté individuelle.
中：错误。人身安全权不涉及疾病。

✅ B. Correct ! Le droit à la sûreté protège contre l'arbitraire de l'État.
中：正确。人身安全权防止任意逮捕和拘禁。

❌ C. Faux. Les impôts relèvent du droit fiscal.
中：错误。税收属于财政法律问题。

❌ D. Faux. La corruption est un autre domaine juridique.
中：错误。腐败属于其他法律领域。`
  },
  {
    id: "de0077",
    type: "carte resident",
    category: "Démocratie et droit de vote",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 文档：8 难（没有o）
    question: "L'État arbitraire est :",
    options: [
      "Respectueux de la loi",
      "Un État de droit",
      "Le contraire de l'État de droit",
      "Un système démocratique parfait"
    ],
    answer: 2,
    explanation: `❌ A. Faux. L'arbitraire signifie l'absence de respect de la loi.
中：错误。专断意味着不尊重法律。

❌ B. Faux. L'État arbitraire est l'opposé de l'État de droit.
中：错误。专断国家与法治国家相对立。

✅ C. Correct ! L'État arbitraire agit sans respecter la loi.
中：正确。专断国家是不受法律约束的国家。

❌ D. Faux. L'arbitraire est incompatible avec la démocratie.
中：错误。专断与民主不相容。`
  },
  {
    id: "de0078",
    type: "carte resident",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：9 中（没有o）
    question: "Madame X veut que son mari vote à sa place car elle est malade. Que doit-elle faire ?",
    options: [
      "Lui remettre son bulletin et il vote pour elle",
      "Rien, elle ne peut pas voter si elle est malade",
      "Faire une procuration officielle afin que son mari puisse voter en son nom",
      "Voter ensemble dans l'isoloir"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Cela est interdit par la loi.
中：错误。这种行为是违法的。

❌ B. Faux. Elle peut voter par procuration.
中：错误。她可以通过投票委托。

✅ C. Correct ! La procuration est la seule solution légale.
中：正确。正式投票委托是唯一合法方式。

❌ D. Faux. Le vote doit être strictement individuel.
中：错误。投票必须是个人行为。`
  },
  {
    id: "de0079",
    type: "carte resident",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：10 中（没有o）
    question: "Un voisin offre de l'argent à Monsieur Y pour qu'il vote pour un candidat précis. Que doit faire pour lui ?",
    options: [
      "Accepter, c'est légal car chacun choisit librement",
      "Refuser, le vote doit être personnel et la corruption est interdite",
      "Accepter, mais partager le vote avec un ami",
      "Voter pour un autre candidat pour tromper le voisin"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Il s'agit d'une corruption électorale.
中：错误。这属于选举贿赂。

✅ B. Correct ! Acheter un vote est illégal.
中：正确。贿赂选票是违法行为。

❌ C. Faux. Le vote ne se partage pas et la corruption reste interdite.
中：错误。投票不可分享，贿赂仍然违法。

❌ D. Faux. La situation doit être refusée, pas contournée.
中：错误。应直接拒绝，而不是规避。`
  },

  {
    id: "dr1001",
    type: "carte resident",
    category: "Droits fondamentaux",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 标记为"难"，无"o"
    question: "La présomption d'innocence signifie que :",
    options: [
      "Tout accusé est coupable",
      "Toute personne est innocente avant jugement",
      "La police décide de la culpabilité",
      "Le procès n'est pas nécessaire"
    ],
    answer: 1,
    explanation: `❌ A. Tout accusé est coupable - Faux. La présomption d'innocence suppose le contraire.
中：错误。推定无罪正好相反。

✅ B. Toute personne est innocente avant jugement - Correct ! Tant que le jugement n'est pas rendu, la personne est présumée innocente.
中：正确。判决前任何人都被视为无罪。

❌ C. La police décide de la culpabilité - Faux. La culpabilité est décidée par un juge.
中：错误。是否有罪由法官判定。

❌ D. Le procès n'est pas nécessaire - Faux. Le procès est nécessaire pour établir la vérité.
中：错误。需要审判程序。`
  },
  {
    id: "dr1002",
    type: "carte resident",
    category: "Droits fondamentaux",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 标记为"难"，无"o"
    question: "La Charte de l'environnement a été intégrée à la Constitution en :",
    options: [
      "1789",
      "1946",
      "2004",
      "2005"
    ],
    answer: 3,
    explanation: `❌ A. 1789 - Faux. À cette époque, la Charte n'existait pas encore.
中：错误。1789年时环境宪章尚不存在。

❌ B. 1946 - Faux. Ce n'est pas l'année d'intégration de la Charte.
中：错误。1946年并未将环境宪章纳入宪法。

❌ C. 2004 - Faux. La Charte a été adoptée en 2004 mais intégrée l'année suivante.
中：错误。2004年通过但不是纳入宪法的年份。

✅ D. 2005 - Correct ! La Charte de l'environnement a été intégrée à la Constitution en 2005.
中：正确。环境宪章于2005年纳入宪法。`
  },
  {
    id: "dr1003",
    type: "carte resident",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Le droit à l'intégrité de la personne concerne :",
    options: [
      "Le patrimoine",
      "Le corps et l'esprit",
      "La nationalité",
      "Le logement"
    ],
    answer: 1,
    explanation: `❌ A. Le patrimoine - Faux. Le patrimoine concerne les biens, pas l'intégrité.
中：错误。财产属于财产权，不属于人身完整权。

✅ B. Le corps et l'esprit - Correct ! Il protège le corps et l'esprit contre toute atteinte.
中：正确。保护身体与精神完整不受侵害。

❌ C. La nationalité - Faux. La nationalité concerne l'appartenance à un État.
中：错误。国籍属于身份权。

❌ D. Le logement - Faux. Le logement relève du droit au logement, pas de l'intégrité.
中：错误。住房权不是人身完整权。`
  },
  {
    id: "dr1004",
    type: "carte resident",
    category: "Droits fondamentaux",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 标记为"难"，无"o"
    question: "Le consentement libre et éclairé est obligatoire notamment pour :",
    options: [
      "Les élections",
      "Les actes médicaux",
      "Les contrats de travail",
      "Les voyages"
    ],
    answer: 1,
    explanation: `❌ A. Les élections - Faux. Les élections reposent sur le vote, pas sur un consentement médical.
中：错误。选举不是"知情同意"的范畴。

✅ B. Les actes médicaux - Correct ! Toute intervention médicale nécessite un consentement libre et éclairé.
中：正确。医疗行为必须取得知情同意。

❌ C. Les contrats de travail - Faux. Ils reposent sur un accord, mais pas sur le principe du consentement médical.
中：错误。劳动合同不是医疗知情同意。

❌ D. Les voyages - Faux. Voyager ne nécessite pas un consentement libre et éclairé.
中：错误。旅行不涉及此概念。`
  },
  {
    id: "dr1005",
    type: "carte resident",
    category: "Droits fondamentaux",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 标记为"难"，无"o"
    question: "La DDHC affirme des droits :",
    options: [
      "Temporaires",
      "Universels",
      "Conditionnels",
      "Réservés aux citoyens"
    ],
    answer: 1,
    explanation: `❌ A. Temporaires - Faux. Les droits énoncés sont considérés comme permanents.
中：错误。宣言所述权利被认为是永久的。

✅ B. Universels - Correct ! La Déclaration des droits de l'homme et du citoyen affirme des droits universels.
中：正确。宣言强调普遍人权。

❌ C. Conditionnels - Faux. Les droits ne sont pas conditionnés à une situation particulière.
中：错误。不是有条件的权利。

❌ D. Réservés aux citoyens - Faux. Beaucoup de droits sont reconnus à tous les êtres humains.
中：错误。不是仅限公民。`
  },
  {
    id: "dr1006",
    type: "carte resident",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Un avocat a pour rôle principal de :",
    options: [
      "Arrêter les suspects",
      "Conseiller et défendre",
      "Écrire les lois",
      "Surveiller les prisons"
    ],
    answer: 1,
    explanation: `❌ A. Arrêter les suspects - Faux. L'arrestation est le rôle de la police.
中：错误。逮捕由警察执行。

✅ B. Conseiller et défendre - Correct ! L'avocat conseille et défend son client devant la justice.
中：正确。律师的主要职责是提供法律咨询并为当事人辩护。

❌ C. Écrire les lois - Faux. Les lois sont rédigées par le législateur (Parlement).
中：错误。立法由议会负责。

❌ D. Surveiller les prisons - Faux. La surveillance des prisons est une mission de l'administration pénitentiaire.
中：错误。监狱由监狱管理机构负责。`
  },
  {
    id: "dr1007",
    type: "carte resident",
    category: "Droits fondamentaux",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 标记为"难"，无"o"
    question: "La déchéance de nationalité correspond :",
    options: [
      "À une peine de prison",
      "À la perte de la nationalité française",
      "À une expulsion automatique",
      "À une amende administrative"
    ],
    answer: 1,
    explanation: `❌ A. À une peine de prison - Faux. Ce n'est pas la même chose qu'une peine de prison.
中：错误。不是监禁刑罚。

✅ B. À la perte de la nationalité française - Correct ! La déchéance de nationalité est la perte de la nationalité française par décision de justice.
中：正确。剥夺国籍是指通过司法决定失去法国国籍。

❌ C. À une expulsion automatique - Faux. Ce n'est pas automatique et dépend de la situation.
中：错误。不是自动驱逐。

❌ D. À une amende administrative - Faux. Ce n'est pas une amende.
中：错误。不是罚款。`
  },

 {
    id: "od0070",
    type: "carte resident",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La prostitution correspond à :",
    options: [
      "Un échange gratuit",
      "Un échange d'un acte sexuel contre de l'argent",
      "Une relation amoureuse",
      "Un travail ordinaire"
    ],
    answer: 1,
    explanation: "❌ A. Un échange gratuit - Faux. La prostitution implique une rémunération, pas un échange gratuit.\n中：错误。卖淫是有报酬的，不是免费交换。\n\n✅ B. Un échange d'un acte sexuel contre de l'argent - Correct ! La prostitution consiste à fournir un acte sexuel en échange d'une rémunération.\n中：正确。卖淫是以金钱换取性行为。\n\n❌ C. Une relation amoureuse - Faux. La prostitution n'est pas une relation sentimentale, c'est un échange économique.\n中：错误。卖淫不是恋爱关系，而是经济交换。\n\n❌ D. Un travail ordinaire - Faux. La prostitution n'est pas considérée comme un travail ordinaire au sens légal ; elle est souvent liée à l'exploitation.\n中：错误。从法律意义上讲，卖淫不是普通工作，并常与剥削相关。"
  },
  {
    id: "od0071",
    type: "carte resident",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Le proxénétisme consiste à :",
    options: [
      "Aider une personne",
      "Tirer profit de la prostitution d'autrui",
      "Informer la police",
      "Protéger une victime"
    ],
    answer: 1,
    explanation: "❌ A. Aider une personne - Faux. Le proxénétisme n'est pas une aide, c'est une exploitation.\n中：错误。拉皮条不是帮助，而是剥削。\n\n✅ B. Tirer profit de la prostitution d'autrui - Correct ! Le proxénétisme consiste à exploiter la prostitution d'une autre personne pour en tirer un bénéfice.\n中：正确。拉皮条是利用他人卖淫获利。\n\n❌ C. Informer la police - Faux. Informer la police n'a rien à voir avec le proxénétisme.\n中：错误。向警方举报与拉皮条无关。\n\n❌ D. Protéger une victime - Faux. Le proxénétisme exploite la victime, ne la protège pas.\n中：错误。拉皮条剥削受害者，不是保护。"
  },
  // 以下是十年卡部分（从si0119开始）
  {
    id: "si0119",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y perd sa nationalité française par décision de l'État. De quoi s'agit-il ?",
    options: [
      "D'une expulsion",
      "D'une déchéance de nationalité",
      "D'une sanction pénale",
      "D'un divorce"
    ],
    answer: 1,
    explanation: "❌ A. D'une expulsion - Faux. L'expulsion concerne le fait de renvoyer une personne hors du territoire, pas la perte de la nationalité.\n中：错误。驱逐是将人遣返出境，不等于丧失国籍。\n\n✅ B. D'une déchéance de nationalité - Correct ! La déchéance de nationalité signifie que l'État retire la nationalité française à une personne.\n中：正确。剥夺国籍指国家决定取消某人的法国国籍。\n\n❌ C. D'une sanction pénale - Faux. La déchéance peut être liée à une décision politique/administrative, ce n'est pas une peine pénale directe.\n中：错误。剥夺国籍不是普通刑罚，不等同刑事处罚。\n\n❌ D. D'un divorce - Faux. Le divorce concerne le mariage, pas la nationalité.\n中：错误。离婚是婚姻关系问题，与国籍无关。"
  },
  {
    id: "si0120",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y est convoqué devant un tribunal. Que peut-il demander ?",
    options: [
      "Être jugé sans défense",
      "Être assisté par un avocat",
      "Ne pas se présenter",
      "Choisir seul sa peine"
    ],
    answer: 1,
    explanation: "❌ A. Être jugé sans défense - Faux. Tout accusé a le droit à une défense, donc être jugé sans défense n'est pas un choix normal.\n中：错误。被告有权获得辩护，不能选择无辩护审判。\n\n✅ B. Être assisté par un avocat - Correct ! Toute personne convoquée peut demander à être assistée ou défendue par un avocat.\n中：正确。任何被传唤者可要求律师协助或辩护。\n\n❌ C. Ne pas se présenter - Faux. Ne pas se présenter peut entraîner des sanctions ou une procédure particulière.\n中：错误。不出庭可能会被处罚或启动特殊程序。\n\n❌ D. Choisir seul sa peine - Faux. La peine est décidée par le juge selon la loi, pas par l'accusé.\n中：错误。刑罚由法官依法决定，不能由当事人自行选择。"
  },
  {
    id: "si0121",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y entend un enfant crier régulièrement chez son voisin. Quelle attitude est correcte ?",
    options: [
      "Ignorer la situation",
      "Signaler la situation aux services compétents",
      "Punir l'enfant lui-même",
      "Publier sur les réseaux sociaux"
    ],
    answer: 1,
    explanation: "❌ A. Ignorer la situation - Faux. Ignorer peut laisser une situation de danger se poursuivre.\n中：错误。忽视可能导致危险持续发生。\n\n✅ B. Signaler la situation aux services compétents - Correct ! En cas de suspicion de danger ou de maltraitance, il faut alerter les autorités ou services compétents.\n中：正确。若怀疑存在危险或虐待，应向有关部门举报。\n\n❌ C. Punir l'enfant lui-même - Faux. Ce n'est pas à un voisin de punir un enfant.\n中：错误。邻居无权自行惩罚孩子。\n\n❌ D. Publier sur les réseaux sociaux - Faux. Publier peut être dangereux et ne résout pas la situation.\n中：错误。发布到网络可能造成伤害且无法解决问题。"
  },
  {
    id: "si0122",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X donne une gifle à son enfant pour le corriger. En France, ce geste est :",
    options: [
      "Autorisé",
      "Interdit par la loi",
      "Recommandé",
      "Sans conséquence"
    ],
    answer: 1,
    explanation: "❌ A. Autorisé - Faux. La violence physique sur un enfant est interdite.\n中：错误。对儿童施加身体暴力是违法的。\n\n✅ B. Interdit par la loi - Correct ! Les violences physiques sur un enfant sont interdites et peuvent être sanctionnées.\n中：正确。对儿童的身体暴力是禁止的，会受到处罚。\n\n❌ C. Recommandé - Faux. La loi ne recommande pas la violence.\n中：错误。法律不建议使用暴力。\n\n❌ D. Sans conséquence - Faux. Cela peut être considéré comme maltraitance et entraîner des sanctions.\n中：错误。可能被认定为虐待并受到处罚。"
  },
  {
    id: "si0123",
    type: "carte resident",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X est tirée au sort pour être jurée d'assises. Cela signifie qu'elle va :",
    options: [
      "Être avocate",
      "Participer à un procès criminel",
      "Être policière",
      "Écrire la loi"
    ],
    answer: 1,
    explanation: "❌ A. Être avocate - Faux. Être jurée n'est pas être avocat.\n中：错误。陪审员不是律师。\n\n✅ B. Participer à un procès criminel - Correct ! Les jurés d'assises participent aux procès de crimes (cour d'assises).\n中：正确。陪审员参与重罪审判（刑事法庭）。\n\n❌ C. Être policière - Faux. La police n'a rien à voir avec le rôle de juré.\n中：错误。陪审员不是警察。\n\n❌ D. Écrire la loi - Faux. Les lois sont écrites par le Parlement, pas par les jurés.\n中：错误。法律由议会制定，陪审员不负责立法。"
  },
  
  {
    id: "gh0082",
    type: "carte resident",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 1 中 → 没有o
    question: "Comment appelle-t-on le régime politique de la France avant 1789 ?",
    options: ["Une république", "Une monarchie constitutionnelle", "Une monarchie absolue de droit divin", "Un empire"],
    answer: 2,
    explanation: `❌ A. Une république - Faux. Avant 1789, la France n'était pas une république.\n中：错误。1789年前法国不是共和国。\n\n❌ B. Une monarchie constitutionnelle - Faux. La monarchie constitutionnelle apparaît après 1789 (après la Révolution).\n中：错误。君主立宪制是在1789年后出现的。\n\n✅ C. Une monarchie absolue de droit divin - Correct ! Avant 1789, la France est une monarchie absolue fondée sur le droit divin (le roi a un pouvoir total).\n中：正确！1789年前法国是神授绝对君主制，国王拥有全部权力。\n\n❌ D. Un empire - Faux. L'Empire apparaît plus tard, sous Napoléon.\n中：错误。帝国是在拿破仑时期出现的。`
  },
  {
    id: "gh0083",
    type: "carte resident",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 2 中 → 没有o
    question: "Quelle défaite affaiblit fortement Napoléon en 1812 ?",
    options: ["Austerlitz", "Leipzig", "La campagne de Russie", "Waterloo"],
    answer: 2,
    explanation: `❌ A. Austerlitz - Faux. Austerlitz est une grande victoire de Napoléon (1805).\n中：错误。奥斯特利茨是拿破仑的胜利。\n\n❌ B. Leipzig - Faux. Leipzig est une défaite importante, mais en 1813.\n中：错误。莱比锡战役发生在1813年。\n\n✅ C. La campagne de Russie - Correct ! La campagne de Russie (1812) est une défaite majeure qui affaiblit Napoléon.\n中：正确！1812年俄国远征失败严重削弱了拿破仑。\n\n❌ D. Waterloo - Faux. Waterloo (1815) met fin à l'Empire, mais ce n'est pas 1812.\n中：错误。滑铁卢是1815年，结束帝国。`
  },
  {
    id: "gh0084",
    type: "carte resident",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 3 中 → 没有o
    question: "Quel droit reste limité sous la Monarchie de Juillet ?",
    options: ["La liberté de la presse", "Le suffrage universel", "Le droit de propriété", "Le droit à l'éducation"],
    answer: 1,
    explanation: `❌ A. La liberté de la presse - Faux. La liberté de la presse existe, mais elle est contrôlée et limitée, ce n'est pas le droit le plus restreint.\n中：错误。新闻自由存在但受控制，并不是最核心的受限权利。\n\n✅ B. Le suffrage universel - Correct ! Sous la Monarchie de Juillet, le suffrage est censitaire : seuls les hommes riches peuvent voter, donc le droit de vote est limité.\n中：正确！七月王政时期实行财产选举制，只有富人才能投票，选举权受到限制。\n\n❌ C. Le droit de propriété - Faux. Le droit de propriété est protégé et reconnu.\n中：错误。财产权受到保护。\n\n❌ D. Le droit à l'éducation - Faux. L'éducation n'est pas le droit le plus limité à cette période.\n中：错误。教育权不是最受限制的权利。`
  },
  {
    id: "gh0085",
    type: "carte resident",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 4 中 → 没有o
    question: "Quel événement marque la fin de la monarchie en France en 1792 ?",
    options: ["La prise de la Bastille", "La fuite à Varennes", "La proclamation de la République", "Le sacre de Napoléon"],
    answer: 2,
    explanation: `❌ A. La prise de la Bastille - Faux. La prise de la Bastille a lieu en 1789, c'est le début de la Révolution, pas la fin de la monarchie.\n中：错误。巴士底狱被攻占发生在1789年，是革命开始。\n\n❌ B. La fuite à Varennes - Faux. La fuite à Varennes se déroule en 1791, c'est une tentative d'évasion du roi, mais la monarchie n'est pas encore officiellement abolie.\n中：错误。凡尔赛逃亡发生在1791年，君主制尚未正式结束。\n\n✅ C. La proclamation de la République - Correct ! En 1792, la République est proclamée (9 août 1792), ce qui marque la fin officielle de la monarchie.\n中：正确！1792年（8月9日）宣布共和国，标志着君主制正式结束。\n\n❌ D. Le sacre de Napoléon - Faux. Le sacre de Napoléon a lieu en 1804, bien après la fin de la monarchie.\n中：错误。拿破仑加冕发生在1804年，远在君主制结束之后。`
  },
  {
  id: "tg0086",
  type: "carte resident",
  category: "Territoires et géographie",
  difficulté: "moyen",
  typeQuestion: "examen original",
  question: "Quel est le premier traité ayant établi la base de l’Union européenne ?",
  options: [
    "Traité de Maastricht",
    "Traité de Rome",
    "Traité de Lisbonne",
    "Traité de Nice"
  ],
  answer: 1,
  explanation: "❌ A. Traité de Maastricht - Faux, parce que le traité de Maastricht (1992) a créé l'Union européenne, mais ce n'est pas le premier traité fondateur.\n中：错误，因为《马斯特里赫特条约》虽然创建了欧盟，但不是第一个奠基条约。\n\n✅ B. Traité de Rome - Correct, parce que le traité de Rome (1957) est le premier traité important qui a créé la Communauté économique européenne, base de l'Union européenne.\n中：正确，因为《罗马条约》（1957）是第一个建立欧洲经济共同体的关键条约，是欧盟成立的基础。\n\n❌ C. Traité de Lisbonne - Faux, parce que le traité de Lisbonne (2007) réforme les institutions de l'Union, mais ce n'est pas le premier traité.\n中：错误，因为《里斯本条约》是对欧盟机构的改革条约，不是第一个。\n\n❌ D. Traité de Nice - Faux, parce que le traité de Nice (2001) a modifié les règles de fonctionnement de l'Union, mais ce n'est pas le premier traité.\n中：错误，因为《尼斯条约》只是修改欧盟运作规则，不是第一个。"
},
{
  id: "tg0087",
  type: "carte resident",
  category: "Culture générale",
  difficulté: "moyen",
  typeQuestion: "examen original",
  question: "Qui est Marguerite Yourcenar ?",
  options: [
    "Une peintre",
    "Une écrivaine",
    "Une musicienne",
    "Une scientifique"
  ],
  answer: 1,
  explanation: "❌ A. Une peintre - Faux. Yourcenar n’était pas peintre, mais écrivaine.\n中：错误。于尔瑟纳不是画家，而是作家。\n\n✅ B. Une écrivaine - Correct. Marguerite Yourcenar (1903-1987) est une célèbre écrivaine française, connue notamment pour son roman Mémoires d’Hadrien. Elle est la première femme élue à l’Académie française en 1980.\n中：正确。玛格丽特·于尔瑟纳（1903-1987）是法国著名作家，代表作包括《哈德良回忆录》。她于1980年成为第一位当选法国科学院的女性成员。\n\n❌ C. Une musicienne - Faux. Elle n’était pas musicienne et n’a pas composé de musique.\n中：错误。她不是音乐家，也没有创作音乐。\n\n❌ D. Une scientifique - Faux. Yourcenar n’était pas scientifique, mais écrivain et intellectuelle.\n中：错误。于尔瑟纳不是科学家，而是作家和知识分子。"
},



  {
    id: "ap0051", // 十年卡ID从0101开始
    type: "carte resident",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 十年卡题目没有"o"标记
    question: "La jouissance légale des biens signifie que les parents peuvent :",
    options: [
      "Vendre les biens librement",
      "Utiliser les revenus pour l'enfant",
      "Garder l'argent sans limite",
      "Transférer les biens"
    ],
    answer: 1,
    explanation: `❌ A. Vendre les biens librement - Faux. **parce que** la vente des biens de l'enfant est encadrée par la loi.\n中：错误，因为出售孩子财产受法律限制。\n\n✅ B. Utiliser les revenus pour l'enfant - Correct ! **parce que** les parents doivent gérer les biens dans l'intérêt de l'enfant.\n中：正确，因为父母必须用这些财产收益为孩子利益服务。\n\n❌ C. Garder l'argent sans limite - Faux. **parce que** l'argent doit être utilisé pour l'enfant.\n中：错误，因为资金需用于孩子。\n\n❌ D. Transférer les biens - Faux. **parce que** les transferts sont réglementés.\n中：错误，因为不能随意转让。`
  },
  {
  id: "ap0052",
  type: "examen original",
  category: "Autorité parentale et système éducatif",
  difficulté: "moyen",
  question: "Un père peut-il donner une fessée à son enfant ?",
  options: [
    "Oui, s’il a l’accord de la mère",
    "Oui, si c’est pour corriger",
    "Non, parce que toute violence éducative est interdite par la loi",
    "Oui, si l’enfant a fait une faute grave"
  ],
  answer: 2,
  explanation: "a) Faux : même avec accord, la violence est interdite.\nb) Faux : toute violence éducative est interdite.\nc) Correct : depuis 2019, toute violence physique ou psychologique est interdite.\nd) Faux : aucune faute ne justifie la violence."
},
{
  id: "ap0053",
  type: "examen original",
  category:" Autorité parentale et système éducatif",
  difficulté: "moyen",
  question: "Les parents peuvent faire quoi pour un enfant de 6 ans ? Quelle réponse est fausse ?",
  options: [
    "Participer aux élections des représentants des parents d’élèves",
    "Suivre la scolarité et les progrès de l’enfant",
   " Discuter avec l’enseignant des difficultés de l’enfant",
    "hoisir les matières et les cours de l’enfant"
  ],
  answer: 3,
  explanation:" A) Correct : droit de voter aux élections des représentants.\nB) Correct : suivre l’éducation et les progrès.\nC) Correct : échanger avec l’enseignant.\nD) Faux : matières et emploi du temps définis par l’école, pas par les parents."
}
,
    {
    id: "tr0053",
    type: "carte resident",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "examen original", // 十年卡题目，视为原题
    question: "Le contrat de professionnalisation permet de :",
    options: [
      "Travailler sans contrat",
      "Suivre une formation en travaillant",
      "Faire du bénévolat",
      "Recevoir le RSA"
    ],
    answer: 1,
    explanation: `❌ A. Travailler sans contrat - Faux, parce que c'est justement un contrat de travail. Donc ce n'est pas sans contrat.
    中：错误，因为它本身就是劳动合同，所以不是无合同工作。
    
    ✅ B. Suivre une formation en travaillant - Correct, parce que le contrat de professionnalisation combine emploi et formation. Donc on apprend tout en travaillant.
    中：正确，因为职业培训合同是工作与培训结合，所以边工作边学习。
    
    ❌ C. Faire du bénévolat - Faux, parce que le bénévolat n'est pas rémunéré et n'est pas un contrat de professionnalisation.
    中：错误，因为志愿服务无薪，不属于此合同。
    
    ❌ D. Recevoir le RSA - Faux, parce que le RSA est une aide sociale, pas un contrat.
    中：错误，因为RSA不是合同。`
  },
  {
    id: "tr0054",
    type: "carte resident",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Le **règlement intérieur** s'applique dans une entreprise de :",
    options: [
      "Plus de 10 salariés",
      "Plus de 50 salariés",
      "Moins de 5 salariés",
      "Toutes les entreprises"
    ],
    answer: 1,
    explanation: `❌ A. Plus de 10 salariés - Faux, parce que le seuil légal est 50 salariés, pas 10.
    中：错误，因为法律规定的门槛是50人，不是10人。
    
    ✅ B. Plus de 50 salariés - Correct, parce que le règlement intérieur est obligatoire uniquement dans les entreprises qui ont **au moins 50 salariés**. Donc si l'entreprise a 50 salariés ou plus, elle doit en avoir un.
    中：正确，因为内部规章制度只在员工人数≥50的公司中是强制性的，所以只有50人以上公司必须制定。
    
    ❌ C. Moins de 5 salariés - Faux, parce que ce sont les très petites entreprises, où le règlement intérieur n'est pas obligatoire.
    中：错误，因为小于5人的企业不需要强制制定。
    
    ❌ D. Toutes les entreprises - Faux, parce que ce n'est pas obligatoire pour toutes.
    中：错误，因为并非所有公司都需要。`
  },
  {
    id: "tr0055",
    type: "carte resident",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Le travail non déclaré entraîne :",
    options: [
      "La sécurité sociale pour le salarié",
      "L'absence de droits sociaux et des sanctions pour l'employeur",
      "Des vacances supplémentaires",
      "Un bonus de l'employeur"
    ],
    answer: 1,
    explanation: `❌ A. La sécurité sociale pour le salarié - Faux, parce que sans déclaration il n'y a pas de cotisations sociales. Donc le salarié n'a pas de sécurité sociale.
    中：错误，因为未申报没有缴纳社保，所以员工没有社会保障。
    
    ✅ B. L'absence de droits sociaux et des sanctions pour l'employeur - Correct, parce que le travail non déclaré prive le salarié de droits et expose l'employeur à des sanctions. Donc c'est une infraction grave.
    中：正确，因为未申报剥夺员工权益并使雇主受罚，所以是严重违法。
    
    ❌ C. Des vacances supplémentaires - Faux, parce que il n'y a pas de congés payés sans déclaration.
    中：错误，因为未申报没有带薪假。
    
    ❌ D. Un bonus de l'employeur - Faux, parce que la loi ne prévoit pas de bonus pour l'illégalité.
    中：错误，因为违法不会得到奖金。`
  },
  {
    id: "tr0056",
    type: "carte resident",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "L'inspection du travail :",
    options: [
      "Donne des cours de français",
      "Vérifie le respect du droit du travail",
      "Organise les mariages",
      "Distribue le RSA"
    ],
    answer: 1,
    explanation: `❌ A. Donne des cours de français - Faux, parce que ce n'est pas sa mission.
    中：错误，因为不是它的职责。
    
    ✅ B. Vérifie le respect du droit du travail - Correct, parce que l'inspection contrôle les conditions de travail, contrats, heures, sécurité, etc. Donc elle veille au respect de la loi.
    中：正确，因为劳动监察检查劳动法执行情况，所以确保合法。
    
    ❌ C. Organise les mariages - Faux, parce que cela relève de la mairie.
    中：错误，因为婚姻由市政府处理。
    
    ❌ D. Distribue le RSA - Faux, parce que le RSA est géré par la CAF.
    中：错误，因为RSA由CAF管理。`
  },
  {
    id: "tr0057",
    type: "carte resident",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Un employeur peut rompre un CDI pour :",
    options: [
      "Faute grave du salarié",
      "Changer de quartier",
      "Acheter une maison",
      "Décider de vacances"
    ],
    answer: 0,
    explanation: `✅ A. Faute grave du salarié - Correct, parce que un CDI peut être rompu pour une cause réelle et sérieuse comme une faute grave. Donc c'est une raison légale.
    中：正确，因为CDI可以因真实且严重的原因（如重大过失）而解除，所以这是合法理由。
    
    ❌ B. Changer de quartier - Faux, parce que ce n'est pas une raison valable pour rompre un CDI.
    中：错误，因为搬家不是解除CDI的有效理由。
    
    ❌ C. Acheter une maison - Faux, parce que les raisons personnelles de l'employeur ne justifient pas une rupture de CDI.
    中：错误，因为雇主的个人原因不能作为解除CDI的理由。
    
    ❌ D. Décider de vacances - Faux, parce que les vacances ne sont pas une cause de rupture de contrat.
    中：错误，因为假期不是解除合同的原因。`
  },
{
  id: "tr0058",
  type: "carte resident",
  category: "Travail",
  difficulté: "moyen",
  typeQuestion: "examen original",
  question: "Un employeur peut rompre un CDI pour :",
  options: [
    "Pour un motif réel et sérieux",
    "Pour changer de quartier",
    "Pour acheter une maison",
    "Pour décider de vacances"
  ],
  answer: 0,
  explanation: "✅ A. Pour un motif réel et sérieux - Correct ! Un employeur peut rompre un CDI uniquement s’il existe un motif réel et sérieux (ex : faute, insuffisance professionnelle, motif économique, etc.).\n中：正确！雇主只有在存在真实且合理的理由时才能解除CDI（例如：员工犯错、工作能力不足、经济原因等）。\n\n❌ B. Pour changer de quartier - Faux. Changer de quartier est un choix personnel du salarié, ce n’est pas un motif légal pour rompre un CDI.\n中：错误。搬家换区是个人原因，不构成合法解雇理由。\n\n❌ C. Pour acheter une maison - Faux. Acheter une maison est un projet personnel, cela ne justifie pas la rupture d’un CDI par l’employeur.\n中：错误。买房属于个人生活安排，不是合法解雇理由。\n\n❌ D. Pour décider de vacances - Faux. Décider de prendre des vacances n’est pas un motif pour rompre un CDI.\n中：错误。休假不是合法解雇理由。"
}
,
  {
    id: "tr0059",
    type: "carte resident",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Le CHSCT (Comité d'Hygiène, de Sécurité et des Conditions de Travail) a pour rôle :",
    options: [
      "D'améliorer les conditions de travail et prévenir les risques professionnels",
      "D'organiser les fêtes d'entreprise",
      "De gérer les salaires",
      "De recruter du personnel"
    ],
    answer: 0,
    explanation: `✅ A. D'améliorer les conditions de travail et prévenir les risques professionnels - Correct, parce que le CHSCT est chargé de veiller à la protection de la santé et sécurité des salariés. Donc c'est sa mission principale.
    中：正确，因为CHSCT负责确保员工的健康与安全保护，所以这是其主要任务。
    
    ❌ B. D'organiser les fêtes d'entreprise - Faux, parce que ce n'est pas son rôle.
    中：错误，因为这不是它的职责。
    
    ❌ C. De gérer les salaires - Faux, parce que cela relève de la direction et des ressources humaines.
    中：错误，因为这属于管理层和人力资源部门。
    
    ❌ D. De recruter du personnel - Faux, parce que le recrutement n'est pas la mission du CHSCT.
    中：错误，因为招聘不是CHSCT的职责。`
  },
  {
    id: "tr0060",
    type: "carte resident",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Le délégué du personnel a pour mission :",
    options: [
      "De représenter les salariés auprès de l'employeur",
      "De diriger l'entreprise",
      "De fixer les salaires",
      "D'embaucher et licencier"
    ],
    answer: 0,
    explanation: `✅ A. De représenter les salariés auprès de l'employeur - Correct, parce que le délégué du personnel est élu pour présenter les réclamations individuelles ou collectives des salariés. Donc c'est son rôle principal.
    中：正确，因为员工代表被选举出来向雇主提出个人或集体诉求，所以这是其主要职责。
    
    ❌ B. De diriger l'entreprise - Faux, parce que cela relève de la direction, pas des délégués.
    中：错误，因为这属于管理层，不是员工代表的职责。
    
    ❌ C. De fixer les salaires - Faux, parce que les salaires sont fixés par l'employeur dans le respect de la loi et des conventions collectives.
    中：错误，因为工资由雇主在法律和集体协议框架内确定。
    
    ❌ D. D'embaucher et licencier - Faux, parce que ce sont des prérogatives de l'employeur.
    中：错误，因为这是雇主的权力。`
  }
  ,
  {
    id: "ir0048",
    type: "carte resident",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "examen original", // 十年卡题目
    question: "Qui a droit à la résiliation du bail avant terme sous certaines conditions ?",
    options: [
      "Le bailleur uniquement",
      "Le locataire uniquement",
      "Le bailleur et le locataire",
      "La mairie"
    ],
    answer: 2,
    explanation: `❌ A. Le bailleur uniquement - Faux, parce que le bailleur ne peut pas résilier seul sans respecter la loi.
    中：错误，因为房东不能单方面在任何条件下提前终止合同。
    
    ❌ B. Le locataire uniquement - Faux, parce que le locataire peut résilier, mais le bailleur peut aussi le faire dans certains cas (ex : non-paiement).
    中：错误，因为房客能提前解约，但房东在特定情况下也可。
    
    ✅ C. Le bailleur et le locataire - Correct, parce que la loi prévoit des cas où chacun peut résilier selon les règles (préavis, motifs légaux). Donc les deux parties peuvent y avoir droit.
    中：正确，因为法律规定在合法理由下双方都可以提前解约，所以房东和房客都有可能。
    
    ❌ D. La mairie - Faux, parce que la mairie n'intervient pas directement dans la résiliation du bail.
    中：错误，因为市政府不直接决定合同解除。`
  }
];







