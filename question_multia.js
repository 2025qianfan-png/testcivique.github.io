const question_multi = [
  // ==================== Cartes multi-années (1-80) ====================
  {
    id: "ds0001",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "À quoi correspond la date du 14 juillet ?",
    options: ["La fête du travail", "La fête nationale française", "La prise des femmes", "Festival de musique"],
    answer: 1,
    explanation: `A) ❌ La fête du travail\nFR : La fête du travail a lieu le 1er mai, pas le 14 juillet.\n中：劳动节是5月1日，不是7月14日。\n\nB) ✅ La fête nationale française\nFR : Correct ! Le 14 juillet est la fête nationale française, commémorant la Révolution.\n中：正确！7月14日是法国国庆日，纪念法国大革命。\n\nC) ❌ La prise des femmes\nFR : Cet événement n'existe pas dans l'histoire française.\n中：历史上没有"占领妇女"这个事件。\n\nD) ❌ Festival de musique\nFR : Il peut y avoir des festivals, mais ce n'est pas une fête nationale.\n中：有音乐节，但这不是国家节日。`.trim()
  },
  {
    id: "ds0002",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "À quoi correspond la date du 14 juillet ?",
    options: ["La prise de la Bastille", "L'Armistice de la Première Guerre mondiale", "La Victoire de 1945", "La Journée de l'Europe"],
    answer: 0,
    explanation: `A) ✅ La prise de la Bastille\nFR : Exact ! Le 14 juillet 1789, la Bastille a été prise, marquant le début de la Révolution française.\n中：正确！1789年7月14日，攻占巴士底狱，标志法国大革命开始。\n\nB) ❌ L'Armistice de la Première Guerre mondiale\nFR : L'armistice de la Première Guerre mondiale a eu lieu le 11 novembre 1918.\n中：第一次世界大战停战日是1918年11月11日，不是7月14日。\n\nC) ❌ La Victoire de 1945\nFR : La victoire de la Seconde Guerre mondiale en Europe est célébrée le 8 mai 1945.\n中：第二次世界大战欧洲胜利日是1945年5月8日。\n\nD) ❌ La Journée de l'Europe\nFR : La Journée de l'Europe se célèbre le 9 mai.\n中：欧洲日是5月9日，不是7月14日。`.trim()
  },
  {
    id: "ds0003",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est l'un des symboles de la République française ?",
    options: ["La tour Eiffel", "Le coq gaulois", "Marianne", "La Joconde"],
    answer: 2,
    explanation: `A) ❌ La tour Eiffel\nFR : La tour Eiffel est un symbole de Paris et de la France, mais pas spécifiquement de la République.\n中：埃菲尔铁塔是巴黎和法国的象征，但不是共和国的象征。\n\nB) ❌ Le coq gaulois\nFR : Le coq est un symbole historique de la France, mais moins officiel pour la République.\n中：高卢雄鸡是法国的历史象征，但不是共和国官方象征。\n\nC) ✅ Marianne\nFR : Correct ! Marianne est le symbole officiel de la République française, représentant la liberté et la raison. En dehors de cela, les symboles de la France comprennent également le drapeau, la devise française, La Marseillaise et la fête nationale.\n中：正确！玛丽安娜是法国共和国的官方象征，代表自由和理性。除此之外法国的象征还有国旗/法国格言/马赛曲/国庆节\n\nD) ❌ La Joconde\nFR : La Joconde est une œuvre d'art célèbre, mais pas un symbole républicain.\n中：《蒙娜丽莎》是著名艺术品，但不是共和国象征。`.trim()
  },
  {
    id: "ds0004",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quel est l'un des symboles de la République française ?",
    options: ["Le drapeau français", "Le Louvre", "Le président", "Le drapeau de l'Union européenne"],
    answer: 0,
    explanation: `A) ✅ Le drapeau français\nFR : Correct ! Le drapeau bleu, blanc, rouge est un symbole officiel de la République française. En dehors de cela, les symboles de la France comprennent également Marianne, la devise française, La Marseillaise et la fête nationale.\n中：正确！蓝白红三色旗是法国共和国的官方象征。此之外法国的象征还有玛丽安娜/法国格言/马赛曲/国庆节\n\nB) ❌ Le Louvre\nFR : Le Louvre est un musée célèbre, pas un symbole de la République.\n中：卢浮宫是著名博物馆，不是共和国象征。\n\nC) ❌ Le président\nFR : Le président est un fonctionnaire, pas un symbole officiel de la République.\n中：总统是官员，不是共和国象征。\n\nD) ❌ Le drapeau de l'Union européenne\nFR : C'est le symbole de l'Union européenne, pas de la République française.\n中：这是欧盟旗帜，不是法国共和国的象征。`.trim()
  },
  {
    id: "ds0005",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quel est l'un des symboles de la République française ?",
    options: ["Liberté, Égalité, Fraternité", "La mairie", "La Joconde", "Paris"],
    answer: 0,
    explanation: `A) ✅ Liberté, Égalité, Fraternité\nFR : Correct ! C'est la devise de la République française. C'est aussi un symbole officiel de la République française. En dehors de cela, les symboles de la France comprennent également le drapeau français, la devise française, La Marseillaise et la fête nationale.\n中：正确！"自由、平等、博爱"是法国共和国的格言。也是法国共和国的官方象征。此之外法国的象征还有国旗/法国格言/马赛曲/国庆节\n\nB) ❌ La mairie\nFR : La mairie est un bâtiment administratif, pas un symbole national.\n中：市政厅是行政建筑，不是国家象征。\n\nC) ❌ La Joconde\nFR : Une œuvre d'art célèbre, mais pas un symbole républicain.\n中：著名艺术品，但不是共和国象征。\n\nD) ❌ Paris\nFR : La capitale, mais pas un symbole officiel de la République.\n中：首都，但不是共和国象征。`.trim()
  },
  {
    id: "ds0006",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Le principe d'égalité signifie que :",
    options: ["Tous les citoyens ont les mêmes droits", "Tous les citoyens doivent avoir le même revenu", "Les hommes ont plus de droits que les femmes", "Les riches ont plus de droits que les pauvres"],
    answer: 0,
    explanation: `A) ✅ Tous les citoyens ont les mêmes droits\nFR : Correct ! Tous les citoyens, indépendamment de leur origine, sexe ou richesse, ont les mêmes droits.\n中：正确！所有公民，无论出身、性别或财富，都享有相同权利。\n\nB) ❌ Tous les citoyens doivent avoir le même revenu\nFR : Faux. L'égalité des droits ne signifie pas égalité des revenus.\n中：错误。平等原则是权利平等，不是收入平等。\n\nC) ❌ Les hommes ont plus de droits que les femmes\nFR : Faux. C'est contraire au principe d'égalité.\n中：错误。男性比女性权利更多违背平等原则。\n\nD) ❌ Les riches ont plus de droits que les pauvres\nFR : Faux. Tous doivent avoir les mêmes droits, riches ou pauvres.\n中：错误。无论贫富，所有人权利相同`.trim()
  },
  {
    id: "ds0007",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "\"Liberté, égalité, fraternité\", c'est :",
    options: ["Une chanson populaire", "La devise de la République française", "Un poème de Victor Hugo", "Une citation d'un roi"],
    answer: 1,
    explanation: `A) ❌ Une chanson populaire\nFR : Faux. Ce n'est pas une chanson.\n中：错误。这不是一首歌曲。\n\nB) ✅ La devise de la République française\nFR : Correct ! C'est la devise officielle de la République.\n中：正确！这是法国共和国的官方格言。\n\nC) ❌ Un poème de Victor Hugo\nFR : Faux. Ce n'est pas un poème.\n中：错误。这不是雨果的诗。\n\nD) ❌ Une citation d'un roi\nFR : Faux. Elle vient de la Révolution française, pas d'un roi.\n中：错误。它来源于法国大革命，不是国王的名言。`.trim()
  },
  {
    id: "ds0008",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "\"Liberté, égalité, fraternité\", c'est :",
    options: ["Fait partie de notre patrimoine national", "Une expression utilisée uniquement pendant la Révolution française", "Une devise qui s'applique seulement aux citoyens français adultes", "Une phrase inventée pour les fêtes nationales modernes"],
    answer: 0,
    explanation: `A) ✅ Fait partie de notre patrimoine national\nFR : Correct ! Cette devise fait partie du patrimoine de la République française et symbolise ses valeurs.\n中：正确！这句格言是法国共和国的国家遗产，象征其核心价值。\n\nB) ❌ Une expression utilisée uniquement pendant la Révolution française\nFR : Faux. Elle continue à être utilisée aujourd'hui.\n中：错误。这句话直到今天仍在使用，不仅仅是大革命时期。\n\nC) ❌ Une devise qui s'applique seulement aux citoyens français adultes\nFR : Faux. Elle s'applique à tous les citoyens, adultes ou non.\n中：错误。这适用于所有公民，不仅仅是成年人。\n\nD) ❌ Une phrase inventée pour les fêtes nationales modernes\nFR : Faux. Elle date de la Révolution française, pas inventée pour les fêtes modernes.\n中：错误。这句话起源于法国大革命，不是现代国庆发明的。`.trim()
  },
  {
    id: "ds0009",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Certains métiers peuvent-ils être réservés aux hommes ?",
    options: ["Oui", "Non", "Selon le revenu", "Selon l'âge"],
    answer: 1,
    explanation: `A) ❌ Oui\nFR : Faux. La loi interdit la discrimination fondée sur le sexe.\n中：错误。法律禁止基于性别的歧视。\n\nB) ✅ Non\nFR : Correct ! Hommes et femmes ont accès aux mêmes métiers.\n中：正确！男女可以从事同样的职业。\n\nC) ❌ Selon le revenu\nFR : Faux. Le revenu n'a aucun lien avec l'accès à un métier.\n中：错误。收入与是否能从事某职业无关。\n\nD) ❌ Selon l'âge\nFR : Faux. La question concerne le sexe, pas l'âge.\n中：错误。这里讨论的是性别，不是年龄。`.trim()
  },
  {
    id: "ds0010",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Certains métiers peuvent-ils être réservés aux hommes ?",
    options: ["Oui, parce que certains métiers sont très difficiles pour les femmes", "Non, car l'égalité est un principe fondamental", "Oui, si toutes les femmes sont d'accord", "Non, car les femmes sont toujours moins payées"],
    answer: 1,
    explanation: `A) ❌ Oui, parce que certains métiers sont très difficiles pour les femmes\nFR : Faux. La difficulté d'un métier ne justifie pas une exclusion.\n中：错误。职业困难不能成为排斥女性的理由。\n\nB) ✅ Non, car l'égalité est un principe fondamental\nFR : Correct ! L'égalité entre les femmes et les hommes est un principe fondamental.\n中：正确！男女平等是共和国的基本原则。\n\nC) ❌ Oui, si toutes les femmes sont d'accord\nFR : Faux. Même avec un accord, la discrimination reste interdite.\n中：错误。即使女性同意，歧视仍然违法。\n\nD) ❌ Non, car les femmes sont toujours moins payées\nFR : Faux. L'inégalité salariale entre les femmes et les hommes due au sexe est également contraire au principe d'égalité.\n中：错误。男女因性别原因导致的工资不平等也是违背平等原则的`.trim()
  },
  {
    id: "ds0011",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "De quand date la Constitution de la Ve République ?",
    options: ["1789", "1958", "1946", "1871"],
    answer: 1,
    explanation: `A) ❌ 1789\nFR : Faux. 1789 correspond à la Révolution française.\n中：错误。1789年是法国大革命。\n\nB) ✅ 1958\nFR : Correct ! La Constitution de la Ve République date de 1958.\n中：正确！第五共和国宪法制定于1958年。\n\nC) ❌ 1946\nFR : Faux. C'est la Constitution de la IVe République.\n中：错误。这是第四共和国宪法。\n\nD) ❌ 1871\nFR : Faux. Cette date correspond à la Commune de Paris.\n中：错误。这与巴黎公社有关。`.trim()
  },
  {
    id: "ds0012",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Le régime de la France est :",
    options: ["Une monarchie", "Une république", "Une dictature", "Une confédération"],
    answer: 1,
    explanation: `A) ❌ Une monarchie\nFR : Faux. La France n'a plus de roi.\n中：错误。法国早已不是君主制。\n\nB) ✅ Une république\nFR : Correct ! La France est une République.\n中：正确！法国是共和国。\n\nC) ❌ Une dictature\nFR : Faux. Le pouvoir est exercé par des élus.\n中：错误。法国由民选代表执政。\n\nD) ❌ Une confédération\nFR : Faux. La France est un État unitaire.\n中：错误。法国是单一制国家。`.trim()
  },
  {
    id: "ds0013",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le régime de la France est :",
    options: ["Une démocratie", "Un régime autoritaire", "Une monarchie absolue", "Une dictature militaire"],
    answer: 0,
    explanation: `A) ✅ Une démocratie\nFR : Correct ! Les citoyens élisent leurs représentants.\n中：正确！公民通过选举选出代表。\n\nB) ❌ Un régime autoritaire\nFR : Faux. Les libertés fondamentales sont garanties.\n中：错误。法国保障基本自由。\n\nC) ❌ Une monarchie absolue\nFR : Faux. Il n'y a pas de roi en France.\n中：错误。法国没有国王。\n\nD) ❌ Une dictature militaire\nFR : Faux. L'armée ne gouverne pas le pays.\n中：错误。军队不掌权。`.trim()
  },
  {
    id: "ds0014",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Lequel de ces symboles représente officiellement la République française ?",
    options: ["La tour Eiffel", "Le drapeau tricolore", "La statue de la Liberté", "Le Louvre"],
    answer: 1,
    explanation: `A) ❌ La tour Eiffel\nFR : Symbole de Paris, pas officiel de la République.\n中：巴黎象征，不是共和国官方象征。\n\nB) ✅ Le drapeau tricolore\nFR : Symbole officiel de la République française.\n中：法国共和国的官方象征。\n\nC) ❌ La statue de la Liberté\nFR : Située aux États-Unis.\n中：位于美国。\n\nD) ❌ Le Louvre\nFR : Musée, pas symbole politique.\n中：博物馆，不是政治象征。`.trim()
  },
  {
    id: "ds0015",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Où peut-on voir la devise de la République ?",
    options: ["Dans toutes les maisons", "À la mairie", "Sur les réseaux sociaux", "Au bureau"],
    answer: 1,
    explanation: `A) ❌ Dans toutes les maisons\nFR : Faux. La devise n'est pas obligatoire dans les maisons privées.\n中：错误。共和国格言不要求出现在私人住宅中。\n\nB) ✅ À la mairie\nFR : Correct ! La devise est affichée dans les bâtiments officiels comme la mairie.\n中：正确。共和国格言会出现在市政府等公共机构中。\n\nC) ❌ Sur les réseaux sociaux\nFR : Faux. Les réseaux sociaux ne sont pas des lieux officiels de l'État.\n中：错误。社交网络不是国家官方场所。\n\nD) ❌ Au bureau\nFR : Faux. Un bureau privé n'est pas obligatoire.\n中：错误。普通办公室不是强制的。`.trim()
  },
  {
    id: "ds0016",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Où peut-on voir la devise de la République ?",
    options: ["Pièces de monnaie et timbres", "Publicités commerciales", "Sur les bâtiments scolaires officiels", "Affiches de cinéma"],
    answer: 0,
    explanation: `A) ✅ Pièces de monnaie et timbres\nFR : Correct ! La devise figure souvent sur les pièces de monnaie et les timbres officiels.\n中：正确。共和国格言常印在硬币和邮票上。\n\nB) ❌ Publicités commerciales\nFR : Faux. Les publicités sont privées et ne représentent pas l'État.\n中：错误。商业广告属于私人领域，不代表国家。\n\nC)❌ Sur les bâtiments scolaires officiels
FR : Faux Les bâtiments scolaires ne sont pas obligatoirement des lieux officiels pour la devise.
中：错误。学校建筑不是必须出现格言。 ✅ Livres scolaires\nFR : Correct ! Les livres scolaires expliquent les valeurs de la République.\n中：正确。教材中会介绍共和国的价值观。\n\nD) ❌ Affiches de cinéma\nFR : Faux. Les affiches de cinéma ne sont pas des supports officiels.\n中：错误。电影海报不是国家官方载体。`.trim()
  },
  {
    id: "ds0017",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qu'est-ce que l'égalité ?",
    options: ["Que tous les citoyens ont exactement le même revenu", "Que tous les citoyens ont les mêmes droits", "Que tous les citoyens doivent avoir les mêmes opinions", "Que tous les citoyens doivent pratiquer la même religion"],
    answer: 1,
    explanation: `A) ❌ Que tous les citoyens ont exactement le même revenu\nFR : Faux. L'égalité ne signifie pas que tout le monde gagne la même chose.\n中：错误。平等不代表所有人收入一样。\n\nB) ✅ Que tous les citoyens ont les mêmes droits\nFR : Correct ! L'égalité signifie l'égalité des droits devant la loi.\n中：正确。平等指法律面前人人权利相同。\n\nC) ❌ Que tous les citoyens doivent avoir les mêmes opinions\nFR : Faux. Chacun est libre de penser différemment.\n中：错误。每个人都有思想自由。\n\nD) ❌ Que tous les citoyens doivent pratiquer la même religion\nFR : Faux. La République respecte la liberté de religion.\n中：错误。共和国尊重宗教自由。`.trim()
  },
  {
    id: "ds0018",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Qu'est-ce que l'égalité ?",
    options: ["Les hommes ont des privilèges", "Les riches ont des privilèges", "Le président a des privilèges", "Égalité entre hommes et femmes"],
    answer: 3,
    explanation: `A) ❌ Les hommes ont des privilèges\nFR : Faux. L'égalité refuse toute forme de privilège.\n中：错误。平等反对任何特权。\n\nB) ❌ Les riches ont des privilèges\nFR : Faux. La loi est la même pour tous les citoyens.\n中：错误。法律对所有公民一视同仁。\n\nC) ❌ Le président a des privilèges\nFR : Faux. Même le président doit respecter la loi.\n中：错误。总统也必须遵守法律。\n\nD) ✅ Égalité entre hommes et femmes\nFR : Correct ! Les hommes et les femmes ont les mêmes droits.\n中：正确。男女享有同等权利。`.trim()
  },
  {
    id: "ds0019",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Que signifie la liberté ?",
    options: ["Pouvoir faire tout ce que l'on veut sans limite", "Pouvoir agir dans le respect de la loi", "Pouvoir obliger les autres à suivre ses idées", "Ne pas payer d'impôts"],
    answer: 1,
    explanation: `A) ❌ Pouvoir faire tout ce que l'on veut sans limite\nFR : Faux. La liberté a des limites fixées par la loi.\n中：错误。自由不是没有限制的。\n\nB) ✅ Pouvoir agir dans le respect de la loi\nFR : Correct ! La liberté s'exerce dans le cadre des lois.\n中：正确。自由必须在法律范围内。\n\nC) ❌ Pouvoir obliger les autres à suivre ses idées\nFR : Faux. Forcer les autres n'est pas la liberté.\n中：错误。强迫他人不是自由。\n\nD) ❌ Ne pas payer d'impôts\nFR : Faux. Payer des impôts est un devoir citoyen.\n中：错误。纳税是公民义务。`.trim()
  },
  {
    id: "ds0020",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La liberté d'expression signifie :",
    options: ["Dire tout ce que l'on veut sans aucune limite", "Critiquer et insulter les autres librement", "Pouvoir exprimer ses idées et opinions dans le respect des lois et des autres", "Être toujours d'accord avec la majorité"],
    answer: 2,
    explanation: `A) ❌ Dire tout ce que l'on veut sans aucune limite\nFR : Faux. La liberté d'expression a des limites légales.\n中：错误。言论自由有法律限制。\n\nB) ❌ Critiquer et insulter les autres librement\nFR : Faux. Insulter est puni par la loi.\n中：错误。侮辱他人是违法的。\n\nC) ✅ Pouvoir exprimer ses idées et opinions dans le respect des lois et des autres\nFR : Correct ! C'est la définition officielle de la liberté d'expression.\n中：正确。在尊重法律和他人的情况下表达观点。\n\nD) ❌ Être toujours d'accord avec la majorité\nFR : Faux. On peut avoir une opinion différente.\n中：错误。可以有不同意见。`.trim()
  },
  {
    id: "ds0021",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Que signifie le mot \"fraternité\" dans la devise française ?",
    options: ["Solidarité entre citoyens", "Amitié seulement entre frères", "Partage obligatoire des biens", "Exclusion de ceux qui sont différents"],
    answer: 0,
    explanation: `A) ✅ Solidarité entre citoyens\nFR : Correct ! La fraternité signifie l'entraide et la solidarité entre tous les citoyens.\n中：正确。博爱意味着公民之间互相帮助和团结。\n\nB) ❌ Amitié seulement entre frères\nFR : Faux. La fraternité ne se limite pas aux membres de la famille.\n中：错误。博爱不限于亲兄弟之间。\n\nC) ❌ Partage obligatoire des biens\nFR : Faux. La fraternité ne signifie pas qu'il faut partager ses biens de force.\n中：错误。博爱并不意味着必须强制共享财物。\n\nD) ❌ Exclusion de ceux qui sont différents\nFR : Faux. La fraternité inclut tout le monde, sans discrimination.\n中：错误。博爱包含所有人，不排斥不同的人。`.trim()
  },
  {
    id: "ds0022",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Que signifie le mot \"fraternité\" dans la devise française ?",
    options: ["Chacun doit penser uniquement à lui-même", "Les citoyens doivent s'entraider et se respecter", "Tout le monde doit avoir les mêmes opinions", "Les citoyens doivent obéir sans discuter"],
    answer: 1,
    explanation: `A) ❌ Chacun doit penser uniquement à lui-même\nFR : Faux. La fraternité s'oppose à l'égoïsme.\n中：错误。博爱反对只顾自己。\n\nB) ✅ Les citoyens doivent s'entraider et se respecter\nFR : Correct ! La fraternité signifie la solidarité, l'entraide et le respect entre les citoyens.\n中：正确。博爱意味着公民之间互相帮助和尊重。\n\nC) ❌ Tout le monde doit avoir les mêmes opinions\nFR : Faux. La fraternité respecte la diversité des opinions.\n中：错误。博爱尊重观点多样性。\n\nD) ❌ Les citoyens doivent obéir sans discuter\nFR : Faux. La fraternité ne signifie pas l'obéissance aveugle.\n中：错误。博爱不等于盲目服从。`.trim()
  },
  {
    id: "ds0023",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La Sécurité sociale est une manifestation de :",
    options: ["La liberté", "L'égalité", "La fraternité", "Le bonheur"],
    answer: 2,
    explanation: `A) ❌ La liberté\nFR : Faux. La Sécurité sociale n'est pas une liberté individuelle.\n中：错误。社会保障不是一种自由。\n\nB) ❌ L'égalité\nFR : Faux. Même si elle favorise l'égalité, elle repose surtout sur la solidarité.\n中：错误。虽然促进平等，但核心是团结。\n\nC) ✅ La fraternité\nFR : Correct ! La Sécurité sociale repose sur la solidarité entre les citoyens.la CAF et les systèmes de retraite et de prise en charge des personnes âgées sont des manifestations concrètes de la solidarité et de la bienveillance sociale.\n中：正确。社会保障体现博爱精神。caf和养老也都是博爱的体现\n\nD) ❌ Le bonheur\nFR : Faux. Le bonheur n'est pas un principe républicain.\n中：错误。幸福不是共和国原则。`.trim()
  },
  {
    id: "ds0024",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel animal est un symbole de la France ?",
    options: ["Le lion", "Le coq", "L'aigle", "L'ours"],
    answer: 1,
    explanation: `A) ❌ Le lion\nFR : Faux. Le lion n'est pas un symbole français.\n中：错误。狮子不是法国象征。\n\nB) ✅ Le coq\nFR : Correct ! Le coq est un symbole historique de la France.\n中：正确。公鸡是法国的象征。\n\nC) ❌ L'aigle\nFR : Faux. L'aigle est associé à d'autres pays.\n中：错误。鹰象征其他国家。\n\nD) ❌ L'ours\nFR : Faux. L'ours n'est pas un symbole national.\n中：错误。熊不是法国象征。`.trim()
  },
  {
    id: "ds0025",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel est l'un des rôles des associations ?",
    options: ["Gérer les écoles", "Aider les personnes dans le besoin pour favoriser la solidarité", "Créer des impôts", "Définir les lois"],
    answer: 1,
    explanation: `A) ❌ Gérer les écoles\nFR : Faux. Les écoles sont gérées par l'État ou les collectivités.\n中：错误。学校由国家或地方管理。\n\nB) ✅ Aider les personnes dans le besoin pour favoriser la solidarité\nFR : Correct ! Les associations favorisent l'entraide et la solidarité.\n中：正确。协会帮助弱势群体，促进团结。\n\nC) ❌ Créer des impôts\nFR : Faux. Les impôts sont décidés par l'État.\n中：错误。税收由国家制定。\n\nD) ❌ Définir les lois\nFR : Faux. Les lois sont votées par le Parlement.\n中：错误。法律由议会制定。`.trim()
  },
  {
    id: "ds0026",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est le nom de l'hymne national ?",
    options: ["La Marseillaise", "La Carmagnole", "Le Chant du départ", "Le Chant des partisans"],
    answer: 0,
    explanation: `A) ✅ La Marseillaise\nFR : Correct ! La Marseillaise est l'hymne national français.\n中：正确。《马赛曲》是法国国歌。\n\nB) ❌ La Carmagnole\nFR : Faux. Ce n'est pas l'hymne national.\n中：错误。不是国歌。\n\nC) ❌ Le Chant du départ\nFR : Faux. Ce n'est pas l'hymne officiel.\n中：错误。不是官方国歌。\n\nD) ❌ Le Chant des partisans\nFR : Faux. C'est un chant de la Résistance.\n中：错误。它是抵抗运动歌曲。`.trim()
  },
  {
    id: "ds0027",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel symbole de la République française est tricolore ?",
    options: ["Le drapeau", "Marianne", "Le coq", "La Marseillaise"],
    answer: 0,
    explanation: `A) ✅ Le drapeau\nFR : Correct ! Le drapeau est bleu, blanc et rouge.\n中：正确。国旗是三色的。\n\nB) ❌ Marianne\nFR : Faux. Marianne n'est pas tricolore.\n中：错误。玛丽安娜不是三色象征。\n\nC) ❌ Le coq\nFR : Faux. Le coq n'est pas tricolore.\n中：错误。公鸡不是三色。\n\nD) ❌ La Marseillaise\nFR : Faux. C'est un chant, pas un symbole tricolore.\n中：错误。国歌不是三色象征。`.trim()
  },
  {
    id: "ds0028",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle est la date de la fête nationale française ?",
    options: ["1er mai", "14 juillet", "11 novembre", "25 décembre"],
    answer: 1,
    explanation: `A) ❌ 1er mai\nFR : Faux. C'est la fête du Travail.\n中：错误。5月1日是劳动节。\n\nB) ✅ 14 juillet\nFR : Correct ! C'est la fête nationale française.\n中：正确。7月14日是法国国庆。\n\nC) ❌ 11 novembre\nFR : Faux. C'est l'Armistice de 1918.\n中：错误。11月11日是停战纪念日。\n\nD) ❌ 25 décembre\nFR : Faux. C'est Noël.\n中：错误。12月25日是圣诞节。`.trim()
  },
  {
    id: "ds0029",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle est la devise de la République française ?",
    options: ["Liberté, fraternité", "Liberté, égalité, fraternité", "Égalité, fraternité", "Paix, liberté, égalité"],
    answer: 1,
    explanation: `A) ❌ Liberté, fraternité\nFR : Faux. Il manque l'égalité.\n中：错误。缺少"平等"。\n\nB) ✅ Liberté, égalité, fraternité\nFR : Correct ! C'est la devise officielle.\n中：正确。这是共和国格言。\n\nC) ❌ Égalité, fraternité\nFR : Faux. Il manque la liberté.\n中：错误。缺少"自由"。\n\nD) ❌ Paix, liberté, égalité\nFR : Faux. Ce n'est pas la devise officielle.\n中：错误。不是官方格言。`.trim()
  },
  {
    id: "ds0030",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle est la langue officielle de la République française ?",
    options: ["Anglais", "Espagnol", "Français", "Allemand"],
    answer: 2,
    explanation: `A) ❌ Anglais\nFR : Faux.\n中：错误。\n\nB) ❌ Espagnol\nFR : Faux.\n中：错误。\n\nC) ✅ Français\nFR : Correct ! Le français est la langue officielle.\n中：正确。法语是官方语言。\n\nD) ❌ Allemand\nFR : Faux.\n中：错误。`.trim()
  },
  {
    id: "ds0031",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle est la place de la langue française dans la République ?",
    options: ["Langue secondaire", "Langue officielle", "Langue facultative", "Langue régionale"],
    answer: 1,
    explanation: `A) ❌ Langue secondaire\nFR : Faux.\n中：错误。\n\nB) ✅ Langue officielle\nFR : Correct ! La Constitution reconnaît le français.\n中：正确。宪法规定法语为官方语言。\n\nC) ❌ Langue facultative\nFR : Faux.\n中：错误。\n\nD) ❌ Langue régionale\nFR : Faux.\n中：错误。`.trim()
  },
  {
    id: "ds0032",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle liberté permet à chacun d'exprimer ses idées ?",
    options: ["Liberté de circulation", "Liberté d'expression", "Liberté religieuse", "Liberté d'association"],
    answer: 1,
    explanation: `A) ❌ Liberté de circulation\nFR : Faux. La liberté de circulation concerne le droit de se déplacer librement sur le territoire, par exemple choisir son lieu de résidence ou voyager, mais elle ne concerne pas l'expression des opinions ou des idées.\n中：错误。行动自由指的是在领土内自由出行、居住或旅行的权利，并不涉及表达思想或观点。\n\nB) ✅ Liberté d'expression\nFR : Correct ! La liberté d'expression permet à chaque citoyen d'exprimer ses idées, ses opinions et ses convictions, à l'oral, à l'écrit ou par d'autres moyens, tout en respectant les lois de la République, notamment celles qui protègent l'ordre public et les droits d'autrui.\n中：正确。言论自由允许每个公民通过口头、书面或其他方式表达自己的思想、观点和信念，但必须遵守共和国的法律，尊重公共秩序以及他人的权利。\n\nC) ❌ Liberté religieuse\nFR : Faux. La liberté religieuse garantit le droit de croire ou de ne pas croire et de pratiquer une religion, mais elle ne concerne pas directement l'expression générale des opinions politiques ou sociales.\n中：错误。宗教自由保障信仰或不信仰以及宗教实践的权利，但不等同于表达所有思想和社会、政治观点的自由。\n\nD) ❌ Liberté d'association\nFR : Faux. La liberté d'association permet de créer ou de rejoindre une association avec d'autres personnes, mais elle ne correspond pas directement au droit individuel d'exprimer ses idées.\n中：错误。结社自由是指与他人共同成立或加入组织的权利，而不是直接表达个人思想的自由。`.trim()
  },
  {
    id: "ds0033",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle proposition est correcte ? La liberté d'expression :",
    options: ["Permet de tout dire sans conséquence", "Permet d'exprimer ses idées dans le respect de la loi", "Permet de harceler les autres", "N'existe pas en France"],
    answer: 1,
    explanation: `A) ❌ Permet de tout dire sans conséquence\nFR : Faux. En France, la liberté d'expression n'est pas absolue : elle est encadrée par la loi afin d'éviter les propos diffamatoires, les insultes, la haine ou l'incitation à la violence.\n中：错误。在法国，言论自由不是无限的，它受到法律约束，以防止诽谤、侮辱、仇恨言论或煽动暴力。\n\nB) ✅ Permet d'exprimer ses idées dans le respect de la loi\nFR : Correct ! La liberté d'expression permet à chacun d'exprimer librement ses opinions, mais dans le respect des lois de la République, qui protègent la dignité humaine, la sécurité publique et les droits des autres citoyens.\n中：正确。言论自由允许公民自由表达意见，但必须遵守共和国的法律，这些法律旨在保护人的尊严、公共安全以及他人的权利。\n\nC) ❌ Permet de harceler les autres\nFR : Faux. Le harcèlement est interdit par la loi et constitue une atteinte aux droits et à la dignité des personnes.\n中：错误。骚扰行为是法律明确禁止的，侵犯了他人的权利和尊严。\n\nD) ❌ N'existe pas en France\nFR : Faux. La liberté d'expression est un droit fondamental garanti par la Constitution française et par la Déclaration des droits de l'homme et du citoyen.\n中：错误。言论自由是法国宪法和《人权和公民权宣言》所保障的基本权利。`.trim()
  },
  {
    id: "ds0034",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelles sont les couleurs du drapeau français ?",
    options: ["Bleu, blanc, rouge", "Vert, blanc, rouge", "Rouge, jaune, bleu", "Bleu, blanc, vert"],
    answer: 0,
    explanation: `A) ✅ Bleu, blanc, rouge\nFR : Correct ! Le drapeau français est composé de trois bandes verticales bleu, blanc et rouge, symboles de la République et de l'unité nationale.\n中：正确。法国国旗由蓝、白、红三条竖色组成，象征共和国和民族团结。\n\nB) ❌ Vert, blanc, rouge\nFR : Faux. Ces couleurs correspondent à d'autres drapeaux nationaux, mais pas à celui de la France.\n中：错误。这种颜色组合属于其他国家，而不是法国。\n\nC) ❌ Rouge, jaune, bleu\nFR : Faux. Le jaune ne fait pas partie des couleurs du drapeau français.\n中：错误。黄色不是法国国旗的颜色。\n\nD) ❌ Bleu, blanc, vert\nFR : Faux. Le vert n'est pas une couleur du drapeau français.\n中：错误。绿色不属于法国国旗的颜色。`.trim()
  },
  {
    id: "ds0035",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qu'est-ce que la Marseillaise ?",
    options: ["Une danse traditionnelle", "L'hymne national français", "Une devise", "Une fête"],
    answer: 1,
    explanation: `A) ❌ Une danse traditionnelle\nFR : Faux. La Marseillaise est un chant, et non une danse.\n中：错误。《马赛曲》是一首歌曲，而不是舞蹈。\n\nB) ✅ L'hymne national français\nFR : Correct ! La Marseillaise est l'hymne national de la France. Elle est chantée lors des cérémonies officielles et symbolise les valeurs de la République, comme la liberté et la défense de la nation.\n中：正确。《马赛曲》是法国国歌，在官方仪式上演唱，象征自由、共和国价值和保卫国家的精神。\n\nC) ❌ Une devise\nFR : Faux. La devise de la République est « Liberté, Égalité, Fraternité ».\n中：错误。共和国的格言是"自由、平等、博爱"。\n\nD) ❌ Une fête\nFR : Faux. La Marseillaise n'est pas une fête mais un chant national.\n中：错误。《马赛曲》不是节日，而是国歌。`.trim()
  },
  {
    id: "ds0036",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "Qu'est ce qui est traditionnellement organisé sur les Champs Élysées le 14 juillet pour célébrer la fête nationale ?",
    options: ["défilé militaire", "Un marché", "Un festival de musique", "Une compétition sportive"],
    answer: 0,
    explanation: `A) ✅ Un défilé militaire\nFR : Correct ! Chaque 14 juillet, un grand défilé militaire est organisé sur les Champs-Élysées afin de célébrer la fête nationale et de rendre hommage aux forces armées françaises.\n中：正确。每年7月14日，香榭丽舍大街都会举行大型阅兵式，以庆祝国庆并向法国军队致敬。\n\nB) ❌ Un marché\nFR : Faux. Il ne s'agit pas d'un événement commercial.\n中：错误。这不是商业集市活动。\n\nC) ❌ Un festival de musique\nFR : Faux. Le 14 juillet est avant tout marqué par le défilé militaire officiel.\n中：错误。7月14日的主要官方活动是阅兵式。\n\nD) ❌ Une compétition sportive\nFR : Faux. Aucune compétition sportive nationale n'est organisée ce jour-là sur les Champs-Élysées.\n中：错误。当天不会在香榭丽舍大街举行国家级体育比赛。`.trim()
  },
  {
    id: "ds0037",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quand a lieu le défilé militaire ?",
    options: ["La fête nationale", "Noël", "Le 1er mai", "Le jour de l'An"],
    answer: 0,
    explanation: `A) ✅ La fête nationale\nFR : Correct ! Le défilé militaire a lieu le 14 juillet, jour de la fête nationale française.\n中：正确。阅兵式在法国国庆日7月14日举行。\n\nB) ❌ Noël\nFR : Faux. Noël est une fête religieuse et familiale.\n中：错误。圣诞节是宗教和家庭节日。\n\nC) ❌ Le 1er mai\nFR : Faux. Le 1er mai est la fête du Travail.\n中：错误。5月1日是劳动节。\n\nD) ❌ Le jour de l'An\nFR : Faux. Le Nouvel An n'est pas associé au défilé militaire.\n中：错误。元旦不举行阅兵式。`.trim()
  },
  {
    id: "ds0038",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui est Marianne ?",
    options: ["Une reine française", "Une figure symbolique de la République", "Une peintre célèbre", "Une héroïne de roman"],
    answer: 1,
    explanation: `A) ❌ Une reine française\nFR : Faux. Marianne n'a jamais été une personne réelle ni une reine.\n中：错误。玛丽安娜不是历史人物，也不是女王。\n\nB) ✅ Une figure symbolique de la République\nFR : Correct ! Marianne est la figure symbolique de la République française. Elle représente les valeurs républicaines telles que la liberté, l'égalité et la citoyenneté.\n中：正确。玛丽安娜是法兰西共和国的象征人物，代表自由、平等和公民精神等共和国价值。\n\nC) ❌ Une peintre célèbre\nFR : Faux. Marianne n'est pas une artiste.\n中：错误。玛丽安娜不是画家。\n\nD) ❌ Une héroïne de roman\nFR : Faux. Elle ne provient pas d'une œuvre littéraire.\n中：错误。她不是小说人物。`.trim()
  },
  {
    id: "ds0039",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "En France, l'égalité devant la loi signifie que :",
    options: ["Certaines personnes peuvent être au-dessus des lois", "La loi s'applique différemment selon la religion", "La loi est la même pour tous, sans distinction", "La loi dépend du revenu de la personne"],
    answer: 2,
    explanation: `A) ❌ Certaines personnes peuvent être au-dessus des lois\nFR : Faux. En République française, aucun individu n'est au-dessus de la loi, quels que soient son statut social, sa fonction ou son pouvoir.\n中：错误。在法国共和国中，不论社会地位、身份或权力如何，没有任何人可以凌驾于法律之上。\n\nB) ❌ La loi s'applique différemment selon la religion\nFR : Faux. La République française est laïque : la loi s'applique de la même manière à tous, sans distinction de religion ou de croyance.\n中：错误。法国是世俗国家，法律不因宗教或信仰不同而区别对待。\n\nC) ✅ La loi est la même pour tous, sans distinction\nFR : Correct ! L'égalité devant la loi signifie que tous les citoyens sont soumis aux mêmes règles juridiques, sans discrimination liée à l'origine, à la religion, au sexe, à l'opinion ou à la situation sociale.\n中：正确。法律面前人人平等，意味着所有人都遵守同一套法律规则，不因出身、宗教、性别、观点或社会状况而有所不同。\n\nD) ❌ La loi dépend du revenu de la personne\nFR : Faux. Les lois ne varient pas en fonction de la richesse ou de la situation économique.\n中：错误。法律不因个人收入或经济状况而改变。`.trim()
  },
  {
    id: "ds0040",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La liberté d'expression en France :",
    options: ["Est totale, sans limite", "Est autorisée mais encadrée par la loi", "Est interdite sur internet", "Est réservée aux citoyens français"],
    answer: 1,
    explanation: `A) ❌ Est totale, sans limite\nFR : Faux. La liberté d'expression n'est pas absolue : elle est limitée par la loi afin de protéger l'ordre public, la dignité humaine et les droits des autres.\n中：错误。言论自由不是无限的，它受到法律限制，以保护公共秩序、人的尊严和他人的权利。\n\nB) ✅ Est autorisée mais encadrée par la loi\nFR : Correct ! En France, chacun peut exprimer ses idées librement, mais cette liberté s'exerce dans un cadre légal qui interdit notamment la diffamation, l'incitation à la haine et la violence.\n中：正确。在法国，公民可以自由表达意见，但必须在法律框架内进行，法律禁止诽谤、仇恨言论和煽动暴力。\n\nC) ❌ Est interdite sur internet\nFR : Faux. La liberté d'expression s'applique aussi sur internet, même si les règles juridiques y sont strictement appliquées.\n中：错误。言论自由同样适用于互联网，只是同样受法律严格约束。\n\nD) ❌ Est réservée aux citoyens français\nFR : Faux. La liberté d'expression est un droit fondamental qui s'applique à toute personne vivant en France, pas uniquement aux citoyens français.\n中：错误。言论自由是基本权利，不仅限于法国公民，所有在法国的人都享有。`.trim()
  },
  {
    id: "ds0041",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
    options: ["Ne pas voter", "Payer ses impôts", "Insulter un fonctionnaire", "Boycotter les élections"],
    answer: 1,
    explanation: `A) ❌ Ne pas voter\nFR : Faux. Ne pas voter n'est pas une participation active à la vie citoyenne.\n中：错误。不投票不是积极的公民参与行为。\n\nB) ✅ Payer ses impôts\nFR : Correct ! Payer ses impôts est un devoir citoyen et contribue au financement des services publics et au fonctionnement de la République.\n中：正确。缴税是公民义务，有助于公共服务和国家运作。\n\nC) ❌ Insulter un fonctionnaire\nFR : Faux. Les insultes ne constituent pas une participation constructive à la vie citoyenne.\n中：错误。侮辱公务员不是建设性的公民参与行为。\n\nD) ❌ Boycotter les élections\nFR : Faux. Boycotter les élections n'est pas une participation positive, au contraire, cela réduit l'implication civique.\n中：错误。抵制选举不是积极的公民参与，反而削弱了公民责任。`.trim()
  },
  {
    id: "ds0042",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
    options: ["Voter lors des élections", "Regarder la télévision tous les soirs", "Acheter des vêtements de marque", "Jouer aux jeux vidéo"],
    answer: 0,
    explanation: `A) ✅ Voter lors des élections\nFR : Correct ! Voter est l'exemple le plus direct et important de participation citoyenne dans une démocratie.\n中：正确。投票是民主国家最直接、最重要的公民参与形式。\n\nB) ❌ Regarder la télévision tous les soirs\nFR : Faux. Regarder la télévision est une activité personnelle, pas une participation citoyenne.\n中：错误。看电视是个人行为，不属于公民参与。\n\nC) ❌ Acheter des vêtements de marque\nFR : Faux. Les actes d’achat n’ont aucun lien avec les responsabilités citoyennes.
\n中：错误。购买品牌服饰与公民责任无关。\n\nD) ❌ Jouer aux jeux vidéo\nFR : Faux. Jouer aux jeux vidéo est une activité de loisir, pas une participation civique.\n中：错误。玩电子游戏属于娱乐活动，不算公民参与。`.trim()
  },
  {
    id: "ds0043",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Que garantit la liberté d'expression ?",
    options: ["Le droit de dire tout ce que l'on veut sans limite", "Le droit d'exprimer ses idées dans le respect de la loi", "Le droit de nuire aux autres", "Le droit d'éviter l'école"],
    answer: 1,
    explanation: `A) ❌ Le droit de dire tout ce que l'on veut sans limite\nFR : Faux. La liberté d'expression n'est pas absolue : elle est encadrée par la loi pour protéger les autres et l'ordre public.\n中：错误。言论自由不是无限制的，法律对其进行规范以保护他人和公共秩序。\n\nB) ✅ Le droit d'exprimer ses idées dans le respect de la loi\nFR : Correct ! En France, chacun peut exprimer ses opinions librement, tant que cela respecte la loi (interdiction de diffamation, incitation à la haine ou violence).\n中：正确。在法国，每个人都可以自由表达意见，但必须遵守法律（禁止诽谤、仇恨言论和煽动暴力）。\n\nC) ❌ Le droit de nuire aux autres\nFR : Faux. La liberté d'expression ne protège pas les comportements nuisibles aux autres.\n中：错误。言论自由不保护伤害他人的行为。\n\nD) ❌ Le droit d'éviter l'école\nFR : Faux. Cela n'a aucun lien avec la liberté d'expression.\n中：错误。逃学与言论自由无关。`.trim()
  },
  {
    id: "ds0044",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "À quoi sert un titre de séjour ?",
    options: ["Pour voyager à l'étranger", "Pour résider légalement en France", "Pour voter", "Pour obtenir un emploi"],
    answer: 1,
    explanation: `A) ❌ Pour voyager à l'étranger\nFR : Faux. Un passeport sert à voyager, pas un titre de séjour.\n中：错误。护照用于出国旅行，居留证不是。\n\nB) ✅ Pour résider légalement en France\nFR : Correct ! Un titre de séjour permet aux étrangers de vivre légalement en France pour une durée déterminée ou permanente selon le type de titre.\n中：正确。居留证允许外国人在法国合法居住，时间长短取决于证件类型。\n\nC) ❌ Pour voter\nFR : Faux. Le droit de vote est réservé aux citoyens français ou certaines élections pour les étrangers résidents, pas lié au titre de séjour.\n中：错误。投票权属于法国公民，某些选举中允许居住外国人，但居留证本身不赋予投票权。\n\nD) ❌ Pour obtenir un emploi\nFR : Faux. Certains titres de séjour permettent de travailler, mais ce n'est pas la fonction principale du document.\n中：错误。部分居留证允许工作，但这不是其主要功能。`.trim()
  },
  {
    id: "ds0045",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Sur quel site internet peut-on retrouver le symbole de la République française ?",
    options: ["Gouvernement.fr", "Wikipédia", "Facebook", "Twitter"],
    answer: 0,
    explanation: `A) ✅ Gouvernement.fr\nFR : Correct ! Le site officiel du gouvernement français publie tous les symboles officiels de la République (drapeau, devise, Marianne...).\n中：正确。法国政府官方网站展示所有共和国官方象征（国旗、格言、玛丽安娜像等）。\n\nB) ❌ Wikipédia\nFR : Faux. Wikipédia est une source d'information générale, pas le site officiel de l'État.\n中：错误。维基百科是信息来源，不是官方政府网站。\n\nC) ❌ Facebook\nFR : Faux. Facebook n'est pas un site officiel\n中：错误。Facebook不是官方站点\n\nD) ❌ Twitter\nFR : Faux. Twitter n'est pas une source officielle d'informations sur les symboles de l'État.\n中：错误。Twitter不是关于国家象征的官方信息来源。`.trim()
  },
  {
    id: "ds0046",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "En application de la liberté individuelle, quelle proposition est correcte ? Une personne peut :",
    options: ["Agir librement dans le respect de la loi", "Faire ce qu'elle veut sans conséquence", "Ne pas respecter les droits des autres", "Imposer ses idées"],
    answer: 0,
    explanation: `A) ✅ Agir librement dans le respect de la loi\nFR : Correct ! La liberté individuelle permet à chacun de faire ce qu'il souhaite, tant que ses actions respectent la loi et les droits d'autrui.\n中：正确。个人自由允许每个人按照自己的意愿行事，但必须遵守法律并尊重他人权利。\n\nB) ❌ Faire ce qu'elle veut sans conséquence\nFR : Faux. La liberté n'exclut pas les responsabilités et les limites légales.\n中：错误。自由不意味着可以无视责任或法律限制。\n\nC) ❌ Ne pas respecter les droits des autres\nFR : Faux. La liberté individuelle s'exerce dans le cadre des droits d'autrui.\n中：错误。个人自由必须在尊重他人权利的前提下行使。\n\nD) ❌ Imposer ses idées\nFR : Faux. La liberté n'autorise pas la contrainte sur autrui.\n中：错误。自由不允许强制别人接受自己的观点。`.trim()
  },
  {
    id: "ds0047",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Que fait l'État pour lutter contre les discriminations ?",
    options: ["Il interdit certaines professions", "Il met en place des lois et des programmes", "Il favorise certaines religions", "Il ne fait rien"],
    answer: 1,
    explanation: `A) ❌ Il interdit certaines professions\nFR : Faux. L'État ne supprime pas des professions pour lutter contre les discriminations ; il agit par la loi et les programmes éducatifs.\n中：错误。政府不会为了打击歧视而禁止某些职业，而是通过法律和教育项目来解决问题。\n\nB) ✅ Il met en place des lois et des programmes\nFR : Correct ! L'État français a créé des lois contre le racisme, le sexisme, l'homophobie et d'autres formes de discrimination, ainsi que des programmes de sensibilisation et de soutien.\n中：正确。法国政府制定了反对种族主义、性别歧视、恐同症等歧视行为的法律，并实施宣传教育和支持项目。\n\nC) ❌ Il favorise certaines religions\nFR : Faux. La République française est laïque : elle ne favorise aucune religion.\n中：错误。法国是世俗国家，不偏袒任何宗教。\n\nD) ❌ Il ne fait rien\nFR : Faux. L'État agit activement contre les discriminations.\n中：错误。政府积极采取行动反对歧视。`.trim()
  },
  {
    id: "ds0048",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Que représente Marianne ?",
    options: ["La République", "La monarchie", "La France de Napoléon", "La liberté d'expression"],
    answer: 0,
    explanation: `A) ✅ La République\nFR : Correct ! Marianne est un symbole de la République française, représentant la liberté, l'égalité et la fraternité. On la retrouve sur les timbres, les pièces et dans les mairies.\n中：正确。玛丽安象征法国共和国，代表自由、平等与博爱。她出现在邮票、硬币和市政厅等场所。\n\nB) ❌ La monarchie\nFR : Faux. La monarchie n'est pas représentée par Marianne.\n中：错误。玛丽安不代表君主制。\n\nC) ❌ La France de Napoléon\nFR : Faux. Marianne symbolise la République, pas l'Empire de Napoléon.\n中：错误。玛丽安象征共和国，而非拿破仑时期的法国。\n\nD) ❌ La liberté d'expression\nFR : Faux. Bien qu'elle incarne des valeurs de liberté, elle représente l'ensemble de la République, pas uniquement la liberté d'expression.\n中：错误。她虽体现自由价值，但代表的是整个共和国，而非仅仅言论自由`.trim()
  },
  {
    id: "ds0049",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qu'est-ce que la liberté d'association ?",
    options: ["Le droit de créer ou rejoindre une association", "Le droit d'imposer des associations", "L'obligation de rejoindre une association", "Le droit de créer des impôts"],
    answer: 0,
    explanation: `A) ✅ Le droit de créer ou rejoindre une association\nFR : Correct ! La liberté d'association permet à toute personne de fonder ou de rejoindre une association pour défendre des idées, organiser des activités ou aider la communauté.\n中：正确。结社自由允许每个人创建或加入协会，以传播理念、组织活动或帮助社区。\n\nB) ❌ Le droit d'imposer des associations\nFR : Faux. Personne ne peut obliger d'autres à rejoindre une association.\n中：错误。没有人可以强制他人加入协会。\n\nC) ❌ L'obligation de rejoindre une association\nFR : Faux. La participation à une association est volontaire, pas obligatoire.\n中：错误。加入协会是自愿的，不是强制的。\n\nD) ❌ Le droit de créer des impôts\nFR : Faux. Les impôts sont décidés par l'État, pas par les associations.\n中：错误。税收由政府决定，而非协会制定。`.trim()
  },
  {
    id: "ds0050",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qu'est-ce que la liberté ?",
    options: ["Le droit de faire tout ce qu'on veut", "Le droit d'agir dans le respect de la loi", "Le droit d'imposer ses idées", "Le droit de violer les règles"],
    answer: 1,
    explanation: `A) ❌ Le droit de faire tout ce qu'on veut\nFR : Faux. La liberté n'est pas absolue : elle doit toujours respecter la loi et les droits d'autrui.\n中：错误。自由不是绝对的，它必须遵守法律并尊重他人的权利。\n\nB) ✅ Le droit d'agir dans le respect de la loi\nFR : Correct ! La liberté consiste à pouvoir faire des choix et agir selon sa volonté, tout en respectant les lois et les droits des autres. C'est le principe fondamental de la République française.\n中：正确。自由意味着可以按照自己的意愿做出选择和行动，但必须遵守法律并尊重他人的权利，这是法国共和国的基本原则。\n\nC) ❌ Le droit d'imposer ses idées\nFR : Faux. Imposer ses idées aux autres viole la liberté d'autrui.\n中：错误。强加自己的想法给他人会侵犯他人的自由。\n\nD) ❌ Le droit de violer les règles\nFR : Faux. La liberté n'autorise pas à enfreindre les règles ou les lois.\n中：错误。自由不允许违反规则或法律。`.trim()
  },
  {
    id: "ds0051",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quand chante-t-on La Marseillaise ?",
    options: ["Lors de la fête nationale", "Lors d'une cérémonie de mariage", "Lors d'obsèques", "Lors d'un anniversaire privé"],
    answer: 0,
    explanation: `A) ✅ Lors de la fête nationale\nFR : Correct ! L'hymne national français, La Marseillaise, est chanté lors du 14 juillet, la fête nationale, ainsi que lors d'autres cérémonies officielles.\n中：正确。法国国歌《马赛曲》在7月14日国庆日以及其他官方仪式上演唱。\n\nB) ❌ Lors d'une cérémonie de mariage\nFR : Faux. La Marseillaise n'est pas un hymne spécifique aux mariages.\n中：错误。《马赛曲》不是婚礼专用国歌。\n\nC) ❌ Lors d'obsèques\nFR : Faux. Elle n'est pas chantée lors des funérailles ordinaires, sauf cérémonies officielles exceptionnelles.\n中：错误。通常葬礼不会演唱《马赛曲》，除非是特殊官方仪式。\n\nD) ❌ Lors d'un anniversaire privé\nFR : Faux. Les anniversaires privés ne nécessitent pas l'hymne national.\n中：错误。私人生日场合不需要唱国歌。`.trim()
  },
  {
    id: "ds0052",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Une des valeurs de la devise républicaine est l'égalité. Qu'est-ce que cela signifie ?",
    options: ["Tous les citoyens doivent avoir le même revenu", "Tous les citoyens ont les mêmes droits", "Certains citoyens ont plus de droits", "L'État décide de l'égalité"],
    answer: 1,
    explanation: `A) ❌ Tous les citoyens doivent avoir le même revenu\nFR : Faux. L'égalité ne signifie pas que tout le monde doit avoir exactement le même revenu, mais que tous doivent bénéficier des mêmes droits devant la loi et les institutions.\n中：错误。平等并不意味着每个人收入完全相同，而是所有人在法律和制度面前享有平等权利。\n\nB) ✅ Tous les citoyens ont les mêmes droits\nFR : Correct ! L'égalité signifie que chaque citoyen, quel que soit son sexe, son origine ou sa religion, doit avoir les mêmes droits et être traité de manière équitable par la loi.\n中：正确。平等意味着每位公民，无论性别、出身或宗教，都应享有相同权利，并受到法律公平对待。\n\nC) ❌ Certains citoyens ont plus de droits\nFR : Faux. La République garantit que personne n'a plus de droits qu'un autre citoyen.\n中：错误。共和国保障没有人拥有比其他公民更多的权利。\n\nD) ❌ L'État décide de l'égalité\nFR : Faux. L'État garantit l'égalité par la loi, mais ne choisit pas arbitrairement qui est égal ou non.\n中：错误。国家通过法律保障平等，而不是任意决定谁平等。`.trim()
  },
  {
    id: "ds0053",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quelle est la place de la langue française dans la République ?",
    options: ["Langue secondaire", "Langue officielle", "Langue facultative", "Langue régionale"],
    answer: 1,
    explanation: `A) ❌ Langue secondaire\nFR : Faux. Le français n'est pas secondaire, c'est la langue principale de la République.\n中：错误。法语不是次要语言，而是共和国的主要语言。\n\nB) ✅ Langue officielle\nFR : Correct ! Le français est la langue officielle de la République française, utilisée dans l'administration, l'enseignement et la vie publique.\n中：正确。法语是法国的官方语言，用于政府行政、教育和公共生活。\n\nC) ❌ Langue facultative\nFR : Faux. Elle n'est pas optionnelle, elle est obligatoire dans les documents officiels et l'administration.\n中：错误。法语不是可选语言，在官方文件和行政事务中是必须使用的。\n\nD) ❌ Langue régionale\nFR : Faux. Bien que certaines langues régionales existent, le français reste la langue officielle nationale.\n中：错误。虽然存在地方语言，但法语是全国官方语言。`.trim()
  },
  {
    id: "ds0054",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quels sont des symboles officiels de la République française ?",
    options: ["Marianne, le drapeau tricolore, la Marseillaise", "Le coq seulement", "La tour Eiffel", "Napoléon"],
    answer: 0,
    explanation: `A) ✅ Marianne, le drapeau tricolore, la Marseillaise\nFR : Correct ! Ces symboles représentent la République : Marianne incarne les valeurs républicaines, le drapeau tricolore est le symbole national, et La Marseillaise est l'hymne national.\n中：正确。这些象征代表共和国：玛丽安体现共和国价值观，三色旗是国家象征，《马赛曲》是国歌。\n\nB) ❌ Le coq seulement\nFR : Faux. Le coq est un symbole populaire mais non officiel de la République.\n中：错误。公鸡是民间象征，但不是官方象征。\n\nC) ❌ La tour Eiffel\nFR : Faux. La tour Eiffel est un monument emblématique mais pas un symbole officiel de la République.\n中：错误。埃菲尔铁塔是标志性建筑，但不是共和国官方象征。\n\nD) ❌ Napoléon\nFR : Faux. Napoléon représente l'Empire et l'Histoire, pas la République actuelle.\n中：错误。拿破仑代表帝国和历史，而不是现行共和国。`.trim()
  },
  {
    id: "ds0055",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Le régime de la France est :",
    options: ["Monarchie", "Démocratie", "Dictature", "Confédération"],
    answer: 1,
    explanation: `A) ❌ Monarchie\nFR : Faux. La France n'a pas de roi ni de reine depuis la Révolution française.\n中：错误。法国自法国大革命后没有国王或女王。\n\nB) ✅ Démocratie\nFR : Correct ! La France est une démocratie : le pouvoir vient du peuple, les citoyens votent et participent à la vie politique.\n中：正确。法国是民主国家：权力来源于人民，公民通过投票参与政治生活。\n\nC) ❌ Dictature\nFR : Faux. La France garantit les libertés et les droits fondamentaux des citoyens, contrairement à une dictature.\n中：错误。法国保障公民自由和基本权利，不是独裁制度。\n\nD) ❌ Confédération\nFR : Faux. La France est un État unitaire et non une confédération d'États indépendants.\n中：错误。法国是单一制国家，不是独立州的邦联。`.trim()
  },
  {
    id: "ds0056",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Que dit l'article 1er de la Constitution française ?",
    options: ["La France est une République indivisible, laïque, démocratique et sociale", "La France est une monarchie", "La France est une confédération", "La France est une dictature"],
    answer: 0,
    explanation: `A) ✅ La France est une République indivisible, laïque, démocratique et sociale\nFR : Correct ! L'article 1er de la Constitution de 1958 définit la France comme une République qui ne peut être divisée, qui respecte la laïcité, garantit la démocratie et prend en compte la dimension sociale.\n中：正确。1958年宪法第1条规定法国为不可分割的共和国，尊重世俗原则，保障民主制度，并重视社会公正。\n\nB) ❌ La France est une monarchie\nFR : Faux. La France n'est plus une monarchie depuis la Révolution française.\n中：错误。自法国大革命以来，法国不再是君主制国家。\n\nC) ❌ La France est une confédération\nFR : Faux. La France est un État unitaire, pas une confédération de plusieurs États.\n中：错误。法国是单一制国家，而非由多个州组成的邦联。\n\nD) ❌ La France est une dictature\nFR : Faux. La France est une République démocratique, donc pas une dictature.\n中：错误。法国是民主共和国，而非独裁国家。`.trim()
  },
  {
    id: "ds0057",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qu'est-ce qui est traditionnellement organisé sur les Champs Élysées le 14 juillet ?",
    options: ["Un feu d'artifice géant", "Un concert en plein air", "Un défilé militaire", "Une parade de chars décorés"],
    answer: 2,
    explanation: `A) ❌ Un feu d'artifice géant\nFR : Faux. Bien que des feux d'artifice aient lieu à Paris le 14 juillet, le défilé militaire sur les Champs Élysées est l'événement traditionnel et emblématique.\n中：错误。虽然巴黎会有焰火表演，但香榭丽舍大道上的阅兵仪式才是传统和标志性活动。\n\nB) ❌ Un concert en plein air\nFR : Faux. Des concerts peuvent être organisés dans certains lieux, mais ce n'est pas la tradition principale des Champs Élysées.\n中：错误。虽然某些地方会有露天音乐会，但香榭丽舍大道上的传统活动不是音乐会。\n\nC) ✅ Un défilé militaire\nFR : Correct ! Le 14 juillet, jour de la fête nationale française, un défilé militaire officiel a lieu sur les Champs Élysées à Paris, en présence des autorités et du président de la République.\n中：正确。7月14日法国国庆日，香榭丽舍大道上会举行官方军事阅兵，总统及政府官员会出席。\n\nD) ❌ Une parade de chars décorés\nFR : Faux. Il n'y a pas de parade de chars décorés sur les Champs Élysées comme tradition nationale.\n中：错误。香榭丽舍大道上没有装饰坦克或彩车游行的传统活动。`.trim()
  },
  {
    id: "ds0058",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Dans les écoles, on peut voir la devise :",
    options: ["Liberté, égalité, fraternité", "Liberté et fraternité", "Paix et liberté", "Égalité et fraternité"],
    answer: 0,
    explanation: `A) ✅ Liberté, égalité, fraternité\nFR : Correct.\n« Liberté, égalité, fraternité » est la devise de la République française.\n中：正确。\n"自由、平等、博爱"是法国共和国的格言。\n\nB) ❌ Liberté et fraternité\nFR : Faux.\nLa devise officielle comprend aussi « égalité ».\n中：错误。\n官方格言还包含"平等"。\n\nC) ❌ Paix et liberté\nFR : Faux.\nLa devise officielle n'est pas « paix et liberté ».\n中：错误。\n官方格言不是"和平与自由"。\n\nD) ❌ Égalité et fraternité\nFR : Faux.\nLa devise officielle inclut également « liberté ».\n中：错误。\n官方格言还包括"自由"。`.trim()
  },
  {
    id: "ds0059",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Pour vivre légalement en France, un étranger a besoin de :",
    options: ["Un passeport", "Un titre de séjour", "Une carte bancaire", "Un permis de conduire"],
    answer: 1,
    explanation: `A) ❌ Un passeport\nFR : Faux.\nLe passeport seul ne suffit pas pour vivre légalement en France.\n中：错误。\n护照本身不足以合法居住在法国。\n\nB) ✅ Un titre de séjour\nFR : Correct.\nUn étranger doit posséder un titre de séjour valide pour vivre légalement en France.\n中：正确。\n外国人必须持有有效居留证才能在法国合法居住。\n\nC) ❌ Une carte bancaire\nFR : Faux.\nUne carte bancaire n'est pas un document nécessaire pour vivre légalement en France.\n中：错误。\n银行卡不是合法居住所必须的文件。\n\nD) ❌ Un permis de conduire\nFR : Faux.\nUn permis de conduire n'est pas requis pour vivre légalement en France.\n中：错误。\n驾照不是合法居住的必要条件。`.trim()
  },
  {
    id: "ds0060",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quel texte fondateur affirme les libertés fondamentales en France ?",
    options: ["La Constitution", "Le règlement intérieur des écoles", "Le code du travail uniquement", "Les lois locales"],
    answer: 0,
    explanation: `A) ✅ La Constitution\nFR : Correct.\nLa Constitution affirme les libertés fondamentales en France.\n中：正确。\n宪法确认法国的基本自由权利。\n\nB) ❌ Le règlement intérieur des écoles\nFR : Faux.\nLe règlement intérieur ne définit pas les libertés fondamentales.\n中：错误。\n校规不规定基本自由权利。\n\nC) ❌ Le code du travail uniquement\nFR : Faux.\nLe code du travail concerne les règles du travail, pas l'ensemble des libertés fondamentales.\n中：错误。\n劳动法典只涉及劳动规则，不是全部基本自由的来源。\n\nD) ❌ Les lois locales\nFR : Faux.\nLes lois locales ne définissent pas les libertés fondamentales.\n中：错误。\n地方法律不构成基本自由的根本来源。`.trim()
  },
  
  // ==================== Cartes 10 ans (61-81) ====================
  {
    id: "ds0061",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "La République française repose sur combien de valeurs principales dans sa devise ?",
    options: ["Deux", "Trois", "Quatre", "Cinq"],
    answer: 1,
    explanation: `A) ❌ Deux\nFR : Faux.\nLa devise contient trois valeurs.\n中：错误。\n格言包含三项价值观。\n\nB) ✅ Trois\nFR : Correct.\nLa devise « Liberté, égalité, fraternité » comprend trois valeurs principales.\n中：正确。\n"自由、平等、博爱"包含三项主要价值观。\n\nC) ❌ Quatre\nFR : Faux.\nLa devise n'en contient pas quatre.\n中：错误。\n格言不是四项。\n\nD) ❌ Cinq\nFR : Faux.\nLa devise n'en contient pas cinq.\n中：错误。\n格言不是五项。`.trim()
  },
  {
    id: "ds0062",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "La démocratie signifie que le pouvoir appartient :",
    options: ["Au roi", "À l'armée", "Au peuple", "À la religion"],
    answer: 2,
    explanation: `A) ❌ Au roi\nFR : Faux.\nEn démocratie, le pouvoir n'appartient pas au roi.\n中：错误。\n在民主制度中，权力不属于国王。\n\nB) ❌ À l'armée\nFR : Faux.\nEn démocratie, le pouvoir ne revient pas à l'armée.\n中：错误。\n在民主制度中，权力不属于军队。\n\nC) ✅ Au peuple\nFR : Correct.\nLa démocratie signifie que le pouvoir appartient au peuple.\n中：正确。\n民主意味着权力属于人民。\n\nD) ❌ À la religion\nFR : Faux.\nEn démocratie, le pouvoir ne dépend pas d'une religion.\n中：错误。\n在民主制度中，权力不属于宗教。`.trim()
  },
  {
    id: "ds0063",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Le respect des lois est :",
    options: ["Facultatif", "Obligatoire pour tous", "Réservé aux fonctionnaires", "Optionnel selon les croyances"],
    answer: 1,
    explanation: `A) ❌ Facultatif\nFR : Faux.\nLe respect des lois n'est pas facultatif.\n中：错误。\n遵守法律不是可选择的。\n\nB) ✅ Obligatoire pour tous\nFR : Correct.\nLes lois s'appliquent à tous, et leur respect est obligatoire.\n中：正确。\n法律适用于所有人，必须遵守。\n\nC) ❌ Réservé aux fonctionnaires\nFR : Faux.\nLes lois s'appliquent à tous, pas seulement aux fonctionnaires.\n中：错误。\n法律不仅适用于公职人员，而是适用于所有人。\n\nD) ❌ Optionnel selon les croyances\nFR : Faux.\nLes croyances ne permettent pas d'échapper à la loi.\n中：错误。\n信仰不能成为不遵守法律的理由。`.trim()
  },
  {
    id: "ds0064",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quel document fixe les règles fondamentales de l'organisation de l'État ?",
    options: ["La Constitution", "Le règlement scolaire", "Le livret de famille", "Le passeport"],
    answer: 0,
    explanation: `A) ✅ La Constitution\nFR : Correct.\nLa Constitution fixe les règles fondamentales de l'organisation de l'État.\n中：正确。\n宪法规定国家组织的基本规则。\n\nB) ❌ Le règlement scolaire\nFR : Faux.\nLe règlement scolaire concerne uniquement l'organisation de l'école.\n中：错误。\n校规只涉及学校的管理规则。\n\nC) ❌ Le livret de famille\nFR : Faux.\nLe livret de famille est un document d'état civil, pas un texte fondamental de l'État.\n中：错误。\n家庭手册是民事证明文件，不是国家基本法律。\n\nD) ❌ Le passeport\nFR : Faux.\nLe passeport est un document de voyage, pas un texte qui organise l'État.\n中：错误。\n护照是旅行证件，不是国家组织的法律文件。`.trim()
  },
  {
    id: "ds0065",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "La République garantit-elle l'égalité entre les femmes et les hommes ?",
    options: ["Non", "Oui", "Seulement dans le travail", "Seulement dans la famille"],
    answer: 1,
    explanation: `A) ❌ Non\nFR : Faux.\nLa République garantit l'égalité entre femmes et hommes.\n中：错误。\n共和国保障男女平等。\n\nB) ✅ Oui\nFR : Correct.\nLa République garantit l'égalité entre les femmes et les hommes.\n中：正确。\n共和国保障男女平等。\n\nC) ❌ Seulement dans le travail\nFR : Faux.\nL'égalité s'applique dans tous les domaines.\n中：错误。\n平等适用于所有领域。\n\nD) ❌ Seulement dans la famille\nFR : Faux.\nL'égalité n'est pas limitée à la famille.\n中：错误。\n平等不只限于家庭领域。`.trim()
  },
  {
    id: "ds0066",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "L'égalité signifie que la loi s'applique :",
    options: ["Différemment selon les personnes", "De la même manière pour tous", "Selon la religion", "Selon la richesse"],
    answer: 1,
    explanation: `A) ❌ Différemment selon les personnes\nFR : Faux.\nL'égalité signifie l'application identique de la loi.\n中：错误。\n平等意味着法律对所有人相同适用。\n\nB) ✅ De la même manière pour tous\nFR : Correct.\nL'égalité signifie que la loi s'applique de la même manière pour tous.\n中：正确。\n平等意味着法律对所有人一视同仁。\n\nC) ❌ Selon la religion\nFR : Faux.\nLa religion ne doit pas influencer l'application de la loi.\n中：错误。\n宗教不能影响法律适用。\n\nD) ❌ Selon la richesse\nFR : Faux.\nLa richesse ne doit pas influencer l'application de la loi.\n中：错误。\n财富不能影响法律适用。`.trim()
  },
  {
    id: "ds0067",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "La liberté de conscience concerne :",
    options: ["Les opinions religieuses ou non", "Le choix du métier", "Le droit de vote", "Le paiement des impôts"],
    answer: 0,
    explanation: `A) ✅ Les opinions religieuses ou non\nFR : Correct.\nLa liberté de conscience protège les opinions religieuses et non religieuses.\n中：正确。\n良心自由保护宗教或非宗教的信仰与观点。\n\nB) ❌ Le choix du métier\nFR : Faux.\nLe choix du métier relève d'une autre liberté.\n中：错误。\n职业选择属于其他自由范畴。\n\nC) ❌ Le droit de vote\nFR : Faux.\nLe droit de vote n'est pas la liberté de conscience.\n中：错误。\n投票权不属于良心自由。\n\nD) ❌ Le paiement des impôts\nFR : Faux.\nLe paiement des impôts n'est pas lié à la liberté de conscience.\n中：错误。\n缴税与良心自由无关。`.trim()
  },
  {
    id: "ds0068",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "La liberté individuelle a pour limite principale :",
    options: ["Les traditions", "Les droits des autres et la loi", "L'opinion publique", "L'âge"],
    answer: 1,
    explanation: `A) ❌ Les traditions\nFR : Faux.\nLes traditions ne sont pas la limite principale de la liberté individuelle.\n中：错误。\n传统不是个人自由的主要限制。\n\nB) ✅ Les droits des autres et la loi\nFR : Correct.\nLa liberté individuelle est limitée par les droits des autres et par la loi.\n中：正确。\n个人自由的主要限制是他人权利和法律。\n\nC) ❌ L'opinion publique\nFR : Faux.\nL'opinion publique ne constitue pas une limite juridique principale.\n中：错误。\n舆论不是主要的法律限制。\n\nD) ❌ L'âge\nFR : Faux.\nL'âge peut influencer certaines règles, mais ce n'est pas la limite principale.\n中：错误。\n年龄不是个人自由的主要限制。`.trim()
  },
  {
    id: "ds0069",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Un citoyen doit respecter :",
    options: ["Uniquement ses opinions", "La loi", "Seulement les règles locales", "Les traditions religieuses"],
    answer: 1,
    explanation: `A) ❌ Uniquement ses opinions\nFR : Faux.\nUn citoyen ne doit pas uniquement respecter ses opinions, mais aussi les règles communes.\n中：错误。\n公民不能只遵守自己的观点，还必须遵守公共规则。\n\nB) ✅ La loi\nFR : Correct.\nUn citoyen doit respecter la loi, qui s'applique à tous.\n中：正确。\n公民必须遵守法律，法律对所有人都适用。\n\nC) ❌ Seulement les règles locales\nFR : Faux.\nLes règles locales ne remplacent pas la loi nationale.\n中：错误。\n地方规则不能取代国家法律。\n\nD) ❌ Les traditions religieuses\nFR : Faux.\nLes traditions religieuses ne sont pas obligatoires pour tous, sauf si elles sont imposées par la loi.\n中：错误。\n宗教传统不对所有人具有强制性，只有法律规定的情况才必须遵守。`.trim()
  },
  {
    id: "ds0070",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Un service public doit traiter les usagers :",
    options: ["Différemment selon leurs croyances", "De manière égale", "Selon leur origine", "Selon leur genre"],
    answer: 1,
    explanation: `A) ❌ Différemment selon leurs croyances\nFR : Faux.\nLe service public doit être neutre et ne pas traiter différemment selon les croyances.\n中：错误。\n公共服务必须保持中立，不应根据信仰区别对待。\n\nB) ✅ De manière égale\nFR : Correct.\nLe service public doit traiter tous les usagers de manière égale.\n中：正确。\n公共服务应平等对待所有使用者。\n\nC) ❌ Selon leur origine\nFR : Faux.\nLa nationalité ou l'origine ne doit pas influencer le traitement.\n中：错误。\n出身或国籍不应影响服务对待方式。\n\nD) ❌ Selon leur genre\nFR : Faux.\nLe genre ne doit pas influencer le traitement.\n中：错误。\n性别不应影响公共服务的对待方式。`.trim()
  },
  {
    id: "ds0071",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La République française reconnaît :",
    options: ["Des citoyens supérieurs", "Des droits égaux", "Une religion dominante", "Des privilèges héréditaires"],
    answer: 1,
    explanation: `A) ❌ Des citoyens supérieurs\nFR : Faux.\nLa République reconnaît l'égalité entre tous les citoyens.\n中：错误。\n共和国不承认任何公民优越。\n\nB) ✅ Des droits égaux\nFR : Correct.\nLa République reconnaît l'égalité des droits pour tous.\n中：正确。\n共和国承认所有人的平等权利。\n\nC) ❌ Une religion dominante\nFR : Faux.\nLa République est laïque et ne reconnaît aucune religion dominante.\n中：错误。\n共和国是世俗的，不承认任何主导宗教。\n\nD) ❌ Des privilèges héréditaires\nFR : Faux.\nLa République refuse les privilèges héréditaires.\n中：错误。\n共和国反对世袭特权。`.trim()
  },
  {
    id: "ds0072",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le respect de la loi est une :",
    options: ["Option", "Obligation civique", "Tradition", "Recommandation"],
    answer: 1,
    explanation: `A) ❌ Option\nFR : Faux.\nLe respect de la loi n'est pas optionnel.\n中：错误。\n遵守法律不是可选的。\n\nB) ✅ Obligation civique\nFR : Correct.\nRespecter la loi est une obligation civique pour tous.\n中：正确。\n遵守法律是每个公民的义务。\n\nC) ❌ Tradition\nFR : Faux.\nLe respect de la loi n'est pas une simple tradition.\n中：错误。\n遵守法律不是传统，而是义务。\n\nD) ❌ Recommandation\nFR : Faux.\nCe n'est pas une recommandation, c'est une obligation.\n中：错误。\n这不是建议，而是义务。`.trim()
  },
  {
    id: "ds0073",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Les règles communes permettent :",
    options: ["Le désordre", "Le vivre-ensemble", "La discrimination", "La hiérarchie religieuse"],
    answer: 1,
    explanation: `A) ❌ Le désordre\nFR : Faux.\nLes règles communes visent à éviter le désordre.\n中：错误。\n共同规则旨在避免混乱。\n\nB) ✅ Le vivre-ensemble\nFR : Correct.\nLes règles communes permettent de vivre ensemble en société.\n中：正确。\n共同规则促进社会共同生活。\n\nC) ❌ La discrimination\nFR : Faux.\nLes règles communes doivent empêcher la discrimination.\n中：错误。\n共同规则应防止歧视。\n\nD) ❌ La hiérarchie religieuse\nFR : Faux.\nLes règles communes ne créent pas de hiérarchie religieuse.\n中：错误。\n共同规则不建立宗教等级。`.trim()
  },
  {
    id: "ds0074",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "La liberté s'exerce :",
    options: ["Sans aucune limite", "Dans le cadre de la loi", "Selon l'origine", "Selon la religion"],
    answer: 1,
    explanation: `A) ❌ Sans aucune limite\nFR : Faux.\nLa liberté n'est pas absolue.\n中：错误。\n自由不是无限的。\n\nB) ✅ Dans le cadre de la loi\nFR : Correct.\nLa liberté s'exerce dans le respect de la loi.\n中：正确。\n自由必须在法律框架内行使。\n\nC) ❌ Selon l'origine\nFR : Faux.\nLa liberté ne dépend pas de l'origine.\n中：错误。\n自由不取决于出身。\n\nD) ❌ Selon la religion\nFR : Faux.\nLa liberté ne dépend pas de la religion.\n中：错误。\n自由不取决于宗教。`.trim()
  },
  {
    id: "ds0075",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La République assure la protection :",
    options: ["De certains groupes", "De tous les citoyens", "Des croyants uniquement", "Des riches"],
    answer: 1,
    explanation: `A) ❌ De certains groupes\nFR : Faux.\nLa République protège tous les citoyens, pas seulement certains groupes.\n中：错误。\n共和国保护所有公民，而不是某些特定群体。\n\nB) ✅ De tous les citoyens\nFR : Correct.\nLa République assure la protection de tous les citoyens.\n中：正确。\n共和国保障所有公民的保护。\n\nC) ❌ Des croyants uniquement\nFR : Faux.\nLa protection ne dépend pas de la croyance religieuse.\n中：错误。\n保护不取决于宗教信仰。\n\nD) ❌ Des riches\nFR : Faux.\nLa protection n'est pas réservée aux riches.\n中：错误。\n保护不只针对富人。`.trim()
  },
  {
    id: "ds0076",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "L'égalité interdit :",
    options: ["Toute différence", "Les discriminations", "Les opinions", "Les débats"],
    answer: 1,
    explanation: `A) ❌ Toute différence\nFR : Faux.\nL'égalité n'interdit pas toute différence, mais interdit les discriminations.\n中：错误。\n平等不禁止所有差异，而是禁止歧视。\n\nB) ✅ Les discriminations\nFR : Correct.\nL'égalité interdit les discriminations.\n中：正确。\n平等禁止歧视行为。\n\nC) ❌ Les opinions\nFR : Faux.\nL'égalité ne supprime pas les opinions.\n中：错误。\n平等不剥夺意见。\n\nD) ❌ Les débats\nFR : Faux.\nL'égalité ne supprime pas les débats.\n中：错误。\n平等不禁止讨论。`.trim()
  },
  {
    id: "ds0077",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La loi s'applique :",
    options: ["Aux étrangers seulement", "À tous", "Aux fonctionnaires uniquement", "Aux croyants"],
    answer: 1,
    explanation: `A) ❌ Aux étrangers seulement\nFR : Faux.\nLa loi s'applique à tous, pas seulement aux étrangers.\n中：错误。\n法律适用于所有人，不仅限于外国人。\n\nB) ✅ À tous\nFR : Correct.\nLa loi s'applique à tous sur le territoire.\n中：正确。\n法律适用于所有人。\n\nC) ❌ Aux fonctionnaires uniquement\nFR : Faux.\nLa loi ne s'applique pas uniquement aux fonctionnaires.\n中：错误。\n法律不只适用于公职人员。\n\nD) ❌ Aux croyants\nFR : Faux.\nLa loi s'applique à tous, croyants ou non.\n中：错误。\n法律适用于所有人，无论是否信仰。`.trim()
  },
  {
    id: "ds0078",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "La République française protège :",
    options: ["Les libertés", "Les discriminations", "Les privilèges", "Les exclusions"],
    answer: 0,
    explanation: `A) ✅ Les libertés\nFR : Correct.\nLa République protège les libertés des citoyens.\n中：正确。\n共和国保护公民的自由。\n\nB) ❌ Les discriminations\nFR : Faux.\nLa République lutte contre les discriminations.\n中：错误。\n共和国反对歧视。\n\nC) ❌ Les privilèges\nFR : Faux.\nLa République refuse les privilèges.\n中：错误。\n共和国反对特权。\n\nD) ❌ Les exclusions\nFR : Faux.\nLa République lutte contre les exclusions.\n中：错误。\n共和国反对排斥。`.trim()
  },
  {
    id: "ds0079",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Le respect mutuel est lié à :",
    options: ["L'égalité", "La hiérarchie", "La richesse", "La religion"],
    answer: 0,
    explanation: `A) ✅ L'égalité\nFR : Correct.\nLe respect mutuel est lié au principe d'égalité entre tous.\n中：正确。\n相互尊重与人人平等原则相关。\n\nB) ❌ La hiérarchie\nFR : Faux.\nLe respect mutuel ne dépend pas d'une hiérarchie.\n中：错误。\n相互尊重不依赖等级制度。\n\nC) ❌ La richesse\nFR : Faux.\nLe respect mutuel ne dépend pas de la richesse.\n中：错误。\n相互尊重与财富无关。\n\nD) ❌ La religion\nFR : Faux.\nLe respect mutuel ne dépend pas de la religion.\n中：错误。\n相互尊重不取决于宗教。`.trim()
  },
  {
    id: "ds0080",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Les règles communes servent à :",
    options: ["Diviser", "Organiser la vie en société", "Exclure", "Imposer une religion"],
    answer: 1,
    explanation: `A) ❌ Diviser\nFR : Faux.\nLes règles communes visent à unir et organiser la société.\n中：错误。\n共同规则旨在团结和组织社会，而不是分裂。\n\nB) ✅ Organiser la vie en société\nFR : Correct.\nLes règles communes servent à organiser la vie en société.\n中：正确。\n共同规则用于组织社会生活。\n\nC) ❌ Exclure\nFR : Faux.\nLes règles communes ne visent pas à exclure.\n中：错误。\n共同规则不是为了排斥。\n\nD) ❌ Imposer une religion\nFR : Faux.\nLes règles communes ne servent pas à imposer une religion.\n中：错误。\n共同规则不用于强制宗教。`.trim()
  },
  {
    id: "ds0081",
    type: "carte multi",
    category: "Devise et symboles de la République",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Un citoyen peut avoir :",
    options: ["Une seule opinion autorisée", "Des opinions différentes", "Une opinion imposée", "Aucune opinion"],
    answer: 1,
    explanation: `A) ❌ Une seule opinion autorisée\nFR : Faux.\nLes citoyens peuvent avoir des opinions différentes.\n中：错误。\n公民可以有不同观点，而不是只有一个被允许的观点。\n\nB) ✅ Des opinions différentes\nFR : Correct.\nUn citoyen peut avoir des opinions différentes.\n中：正确。\n公民可以持有不同的意见。\n\nC) ❌ Une opinion imposée\nFR : Faux.\nUne opinion ne peut pas être imposée.\n中：错误。\n意见不能被强制。\n\nD) ❌ Aucune opinion\nFR : Faux.\nTout citoyen peut avoir une opinion.\n中：错误。\n每个公民都可以有自己的观点。`.trim()
  },
  {
    id: "la0001",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "examen original", // 正确
    question: "Une personne peut-elle changer librement de religion ?",
    options: ["Non", "Oui", "Seulement avec autorisation", "Seulement à l'âge adulte"],
    answer: 1,
    explanation: "❌ A. Non - Faux. En France, la liberté de conscience garantit à chacun le droit de changer de religion ou de conviction.\n中：错误。在法国，良心自由保障每个人有改变宗教或信仰的权利。\n\n✅ B. Oui - Correct ! En France, toute personne est libre de choisir, de changer ou d'abandonner une religion, conformément au principe de liberté de conscience.\n中：正确。在法国，每个人都可以自由选择、改变或不信仰任何宗教，这是良心自由的一部分。\n\n❌ C. Seulement avec autorisation - Faux. Aucun accord administratif ou religieux n'est nécessaire pour changer de religion.\n中：错误。改变宗教不需要任何行政或宗教方面的许可。\n\n❌ D. Seulement à l'âge adulte - Faux. La liberté de conscience existe à tout âge.\n中：错误。良心自由不受年龄限制。"
  },
  {
    id: "la0002",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "question simulée", // 正确（无o标志）
    question: "Une personne peut-elle changer librement de religion ?",
    options: ["Seuls les hommes peuvent", "Seuls ceux qui paient des impôts peuvent", "Seulement avec le consentement des parents", "Tant que l'on le souhaite"],
    answer: 3,
    explanation: "❌ A. Seuls les hommes peuvent - Faux. La liberté de religion s'applique aussi bien aux femmes qu'aux hommes.\n中：错误。宗教自由同样适用于女性和男性。\n\n❌ B. Seuls ceux qui paient des impôts peuvent - Faux. Le paiement des impôts n'a aucun lien avec la liberté de religion.\n中：错误。是否纳税与宗教自由无关。\n\n❌ C. Seulement avec le consentement des parents - Faux. En France, la liberté de conscience est un droit fondamental de la personne.\n中：错误。在法国，良心自由是个人的基本权利。\n\n✅ D. Tant que l'on le souhaite - Correct ! Chacun est libre de changer de religion ou de conviction à tout moment de sa vie.\n中：正确。每个人都可以在任何时候自由改变自己的宗教或信仰。"
  },
  {
    id: "la0003",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "moyen",
    typeQuestion: "examen original", // 正确
    question: "\"La France est une République indivisible, ..., démocratique et sociale\". Complétez cette phrase extraite de l'article 1er de la Constitution :",
    options: ["Laïque", "Monarchique", "Sociale", "Populaire"],
    answer: 0,
    explanation: "✅ A. Laïque - Correct ! La laïcité est un principe fondamental de la République française, inscrit dans la Constitution.\n中：正确。世俗性是法国共和国的基本原则之一，并写入宪法。\n\n❌ B. Monarchique - Faux. La France n'est pas une monarchie mais une république.\n中：错误。法国不是君主制国家。\n\n❌ C. Sociale - Faux. Le mot « sociale » est déjà présent dans la phrase.\n中：错误。\"社会的\"已经包含在原句中。\n\n❌ D. Populaire - Faux. Ce terme ne figure pas dans l'article 1er de la Constitution.\n中：错误。该词不在宪法第一条中。"
  },
  {
    id: "la0004",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "examen original", // 正确
    question: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
    options: ["1905", "1789", "1958", "1881"],
    answer: 0,
    explanation: "✅ A. 1905 - Correct ! La loi de 1905 fonde officiellement la séparation des Églises et de l'État en France.\n中：正确。1905年法律正式确立了政教分离原则。\n\n❌ B. 1789 - Faux. 1789 correspond à la Révolution française.\n中：错误。1789年是法国大革命时期。\n\n❌ C. 1958 - Faux. 1958 correspond à la Constitution de la Ve République.\n中：错误。1958年是第五共和国宪法颁布年。\n\n❌ D. 1881 - Faux. Cette date concerne les lois sur la liberté de la presse.\n中：错误。1881年与新闻自由法有关。"
  },
  {
    id: "la0005",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "moyen",
    typeQuestion: "examen original", // 正确
    question: "Que permet le principe de laïcité ?",
    options: ["De choisir sa religion à l'école", "D'assurer la neutralité de l'État", "De favoriser une religion", "De pratiquer la religion à l'école"],
    answer: 1,
    explanation: "❌ A. De choisir sa religion à l'école - Faux. L'école publique doit rester neutre sur le plan religieux.\n中：错误。公立学校必须保持宗教中立。\n\n✅ B. D'assurer la neutralité de l'État - Correct ! La laïcité garantit que l'État ne favorise ni ne combat aucune religion.\n中：正确。世俗原则确保国家对所有宗教保持中立。\n\n❌ C. De favoriser une religion - Faux. La laïcité interdit toute préférence religieuse de l'État.\n中：错误。世俗原则禁止国家偏向某一宗教。\n\n❌ D. De pratiquer la religion à l'école - Faux. Les pratiques religieuses n'ont pas leur place dans l'école publique.\n中：错误。宗教活动不应出现在公立学校中。"
  },
  {
    id: "la0006",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Que permet le principe de laïcité ?",
    options: ["La liberté de conscience", "L'obligation de pratiquer une religion", "L'interdiction de toutes les religions", "Le versement d'allocations aux croyants"],
    answer: 0,
    explanation: "✅ A. La liberté de conscience - Correct ! Le principe de la laïcité garantit la liberté de conscience. Cela signifie que chaque personne est libre de croire, de ne pas croire, de changer de religion ou de conviction, sans pression de l'État ou d'une religion.\n中：正确。世俗原则保障良心自由，也就是每个人都有信仰、不信仰或改变宗教与思想信念的自由，不受国家或宗教的强制。\n\n❌ B. L'obligation de pratiquer une religion - Faux. La laïcité s'oppose à toute obligation religieuse et protège le droit de ne pas pratiquer de religion.\n中：错误。世俗原则反对任何宗教义务，保护不进行宗教实践的权利。\n\n❌ C. L'interdiction de toutes les religions - Faux. La laïcité ne supprime pas les religions : elle garantit leur liberté dans le respect de la loi et de l'ordre public.\n中：错误。世俗原则并不禁止宗教，而是在法律和公共秩序范围内保障宗教自由。\n\n❌ D. Le versement d'allocations aux croyants - Faux. En République française, les aides sociales ne dépendent pas de la religion ou des croyances.\n中：错误。法国的社会福利与个人是否信仰宗教无关。"
  },
  {
    id: "la0007",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "examen original", // 正确
    question: "Quel droit est garanti par la laïcité ?",
    options: ["Le droit de changer de religion", "Le droit de ne pas payer d'impôts", "Le droit de ne pas respecter la loi", "Le droit de travailler moins"],
    answer: 0,
    explanation: "✅ A. Le droit de changer de religion - Correct ! La laïcité garantit la liberté de conscience, y compris le droit de changer de religion.\n中：正确。世俗原则保障改变宗教信仰的权利。\n\n❌ B. Le droit de ne pas payer d'impôts - Faux. La religion n'exonère pas des obligations légales.\n中：错误。宗教信仰不能免除纳税义务。\n\n❌ C. Le droit de ne pas respecter la loi - Faux. La loi s'impose à tous.\n中：错误。法律对所有人都具有约束力。\n\n❌ D. Le droit de travailler moins - Faux. Ce droit n'est pas lié à la laïcité.\n中：错误。该权利与世俗原则无关。"
  },
  {
    id: "la0008",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "moyen",
    typeQuestion: "examen original", // 正确
    question: "Pourquoi le principe de laïcité doit-il être respecté à l'école ?",
    options: ["Pour imposer la religion de l'État", "Pour garantir que les élèves soient traités équitablement", "Pour choisir la religion des enfants", "Pour enseigner une seule religion"],
    answer: 1,
    explanation: "❌ A. Pour imposer la religion de l'État - Faux. L'État n'impose aucune religion.\n中：错误。国家不强制任何宗教。\n\n✅ B. Pour garantir que les élèves soient traités équitablement - Correct ! La laïcité permet d'assurer l'égalité et le respect de tous les élèves, quelles que soient leurs convictions.\n中：正确。世俗原则保证所有学生不因宗教信仰不同而受到不公平对待。\n\n❌ C. Pour choisir la religion des enfants - Faux. L'école n'a pas ce rôle.\n中：错误。学校无权决定儿童的宗教。\n\n❌ D. Pour enseigner une seule religion - Faux. L'enseignement religieux n'existe pas dans l'école publique.\n中：错误。公立学校不教授宗教。"
  },
  {
    id: "la0009",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "examen original", // 正确
    question: "Qu'est-ce que la laïcité ?",
    options: ["La liberté de religion et la neutralité de l'État", "L'obligation d'être religieux", "La promotion d'une religion", "L'interdiction des fêtes religieuses"],
    answer: 0,
    explanation: "✅ A. La liberté de religion et la neutralité de l'État - Correct ! La laïcité garantit à la fois la liberté de conscience et la neutralité de l'État vis-à-vis des religions.\n中：正确。世俗原则既保障宗教自由，也确保国家保持中立。\n\n❌ B. L'obligation d'être religieux - Faux. La laïcité n'impose aucune croyance.\n中：错误。世俗原则不强制信仰。\n\n❌ C. La promotion d'une religion - Faux. L'État ne favorise aucune religion.\n中：错误。国家不推广任何宗教。\n\n❌ D. L'interdiction des fêtes religieuses - Faux. Les fêtes religieuses peuvent être célébrées dans le cadre privé.\n中：错误。宗教节日可以在私人领域庆祝。"
  },
  {
    id: "la0010",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "moyen",
    typeQuestion: "examen original", // 正确
    question: "Concernant la pratique de la religion, quelle proposition est correcte ?",
    options: ["L'État impose une religion", "Chacun peut pratiquer sa religion librement", "Les enseignants doivent imposer leur religion", "Les élèves ne peuvent pratiquer aucune religion"],
    answer: 1,
    explanation: "❌ A. L'État impose une religion - Faux. La République française est laïque : l'État ne favorise aucune religion et n'en impose aucune à ses citoyens.\n中：错误。法国是世俗国家，政府不偏袒任何宗教，也不强制公民信仰某种宗教。\n\n✅ B. Chacun peut pratiquer sa religion librement - Correct ! La liberté de religion est un droit fondamental. Chacun peut croire, ne pas croire, changer de religion et pratiquer sa foi dans le respect des lois et de l'ordre public.\n中：正确。宗教自由是基本权利，每个人都可以信仰、自由选择或改变宗教，并在法律和公共秩序允许的范围内进行宗教活动。\n\n❌ C. Les enseignants doivent imposer leur religion - Faux. Dans les écoles publiques, les enseignants doivent respecter la neutralité religieuse et ne pas imposer leurs convictions aux élèves.\n中：错误。公立学校教师必须保持宗教中立，不得向学生灌输自己的宗教信仰。\n\n❌ D. Les élèves ne peuvent pratiquer aucune religion - Faux. Les élèves ont le droit de pratiquer leur religion à titre privé, mais les activités religieuses ne peuvent pas perturber le fonctionnement de l'école publique.\n中：错误。学生可以私下进行宗教活动，但不能影响公立学校的正常运行。"
  },
  {
    id: "la0011",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "moyen",
    typeQuestion: "examen original", // 正确
    question: "Pourquoi le principe de laïcité doit-il être respecté à l'école ?",
    options: ["Pour imposer la religion", "Pour garantir la liberté de conscience", "Pour choisir la religion des enfants", "Pour enseigner une seule religion"],
    answer: 1,
    explanation: "❌ A. Pour imposer la religion - Faux. La laïcité interdit l'imposition de toute religion dans les écoles publiques.\n中：错误。世俗原则禁止在公立学校强制灌输任何宗教。\n\n✅ B. Pour garantir la liberté de conscience - Correct ! Le principe de laïcité à l'école garantit que chaque élève puisse avoir ou ne pas avoir de religion, et que personne ne subisse de pression ou de discrimination religieuse. Cela permet un environnement scolaire neutre, respectueux de tous les élèves.\n中：正确。学校遵守世俗原则可以保证每个学生可以有宗教信仰或不信仰宗教，同时没人受到宗教压力或歧视。这确保学校环境中立且尊重所有学生。\n\n❌ C. Pour choisir la religion des enfants - Faux. L'État ou l'école ne choisit pas la religion des élèves ; c'est un droit personnel et familial.\n中：错误。国家或学校不能替孩子选择宗教信仰，这是个人和家庭的权利。\n\n❌ D. Pour enseigner une seule religion - Faux. La laïcité impose la neutralité religieuse et interdit d'enseigner une religion spécifique dans l'école publique.\n中：错误。世俗原则要求宗教中立，禁止在公立学校教授某一特定宗教。"
  },
  {
    id: "la0012",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "moyen",
    typeQuestion: "examen original", // 正确
    question: "Selon le principe de laïcité, que signifie la neutralité de l'État ?",
    options: ["Favoriser certaines religions", "Ne pas favoriser ni discriminer aucune religion", "Imposer la religion d'État", "Interdire toutes les religions"],
    answer: 1,
    explanation: "❌ A. Favoriser certaines religions - Faux. La neutralité de l'État interdit de favoriser une religion particulière.\n中：错误。国家中立原则禁止偏袒任何特定宗教。\n\n✅ B. Ne pas favoriser ni discriminer aucune religion - Correct ! La neutralité de l'État signifie qu'il doit rester impartial vis-à-vis de toutes les religions. L'État ne soutient aucune religion et ne discrimine aucune croyance, permettant à chacun de pratiquer sa foi librement ou de ne pas en avoir.\n中：正确。国家中立意味着对所有宗教保持公正：既不支持任何宗教，也不歧视任何信仰，使每个人都可以自由信仰或选择不信仰。\n\n❌ C. Imposer la religion d'État - Faux. La laïcité interdit l'imposition de toute religion par l'État.\n中：错误。世俗原则禁止国家强制推行任何宗教。\n\n❌ D. Interdire toutes les religions - Faux. La neutralité ne signifie pas interdire la religion ; chacun reste libre de croire ou de ne pas croire.\n中：错误。中立并不等于禁止宗教，每个人仍可自由选择信仰或不信仰。"
  },
  {
    id: "la0013",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "examen original", // 正确
    question: "La laïcité impose-t-elle aux agents publics d'être neutres vis-à-vis des usagers ?",
    options: ["Oui", "Non", "Seulement aux enseignants", "Seulement aux policiers"],
    answer: 0,
    explanation: "✅ A. Oui - Correct ! La laïcité impose aux agents publics, comme les fonctionnaires ou les employés de services publics, d'être neutres vis-à-vis des usagers. Cela signifie qu'ils ne doivent pas afficher leurs convictions religieuses et doivent traiter tous les citoyens de manière égale et impartiale.\n中：正确。世俗原则要求公职人员（如公务员或公共服务工作人员）对使用者保持中立，即不得展示个人宗教信仰，并且必须平等、公正地对待所有公民。\n\n❌ B. Non - Faux. La neutralité est obligatoire pour les agents publics dans l'exercice de leurs fonctions.\n中：错误。公职人员在履行职务时必须保持中立。\n\n❌ C. Seulement aux enseignants - Faux. Tous les agents publics doivent respecter cette neutralité, pas seulement les enseignants.\n中：错误。所有公职人员都必须遵守中立原则，不仅仅是教师。\n\n❌ D. Seulement aux policiers - Faux. La neutralité s'applique à tous les agents publics, pas uniquement aux policiers.\n中：错误。中立原则适用于所有公职人员，而不仅仅是警察。"
  },
  {
    id: "la0014",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "moyen",
    typeQuestion: "examen original", // 正确
    question: "Que garantit le principe de laïcité ?",
    options: ["Liberté de conscience", "Obligation religieuse", "Favoritisme religieux", "Imposition d'une religion"],
    answer: 0,
    explanation: "✅ A. Liberté de conscience - Correct ! La laïcité garantit la liberté de conscience, c'est-à-dire le droit pour chacun de croire ou de ne pas croire, sans pression ni discrimination de la part de l'État ou d'autres citoyens.\n中：正确。世俗原则保障信仰自由，即每个人都可以选择信仰或不信仰，不受国家或他人的压力与歧视。\n\n❌ B. Obligation religieuse - Faux. La laïcité interdit d'imposer une religion.\n中：错误。世俗原则禁止强制宗教信仰。\n\n❌ C. Favoritisme religieux - Faux. La laïcité impose la neutralité de l'État, donc aucun favoritisme religieux n'est permis.\n中：错误。世俗原则要求国家中立，因此不允许任何宗教偏袒。\n\n❌ D. Imposition d'une religion - Faux. La laïcité interdit d'imposer une religion à quiconque.\n中：错误。世俗原则禁止向任何人强制灌输宗教信仰。"
  },
  {
    id: "la0015",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "examen original", // 正确
    question: "La laïcité dans la vie quotidienne signifie que :",
    options: ["Personne n'a le droit de croire en une religion", "Tout le monde est obligé de croire en une religion", "Les personnes qui travaillent sont obligées de croire en une religion", "Chacun est libre de croire ou de ne pas croire"],
    answer: 3,
    explanation: "❌ A. Personne n'a le droit de croire en une religion - Faux. La laïcité ne restreint pas le droit de croire, elle garantit la liberté de conscience.\n中：错误。世俗原则不限制信仰自由，而是保障信仰自由。\n\n❌ B. Tout le monde est obligé de croire en une religion - Faux. La laïcité interdit toute obligation religieuse.\n中：错误。世俗原则禁止任何宗教强制行为。\n\n❌ C. Les personnes qui travaillent sont obligées de croire en une religion - Faux. Les adultes ou travailleurs ne sont soumis à aucune obligation religieuse.\n中：错误。成年人或工作者不受任何宗教义务约束。\n\n✅ D. Chacun est libre de croire ou de ne pas croire - Correct ! La laïcité garantit que chaque personne peut choisir librement sa foi ou l'absence de foi, dans le respect des lois et des droits d'autrui.\n中：正确。世俗原则保障每个人可以自由选择信仰或不信仰，同时尊重法律与他人的权利。"
  },
  {
    id: "la0016",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "examen original", // 正确
    question: "Que représente la laïcité ?",
    options: ["La neutralité de l'État et la liberté de conscience", "L'obligation d'être religieux", "La promotion d'une religion", "L'interdiction des fêtes religieuses"],
    answer: 0,
    explanation: "✅ A. La neutralité de l'État et la liberté de conscience - Correct ! La laïcité signifie que l'État est neutre face aux religions et que chaque individu dispose de la liberté de conscience, garantissant ainsi l'égalité et le respect de toutes les convictions.\n中：正确。世俗原则意味着国家对宗教保持中立，同时每个人拥有信仰自由，保障平等并尊重所有信仰。\n\n❌ B. L'obligation d'être religieux - Faux. La laïcité interdit toute obligation religieuse.\n中：错误。世俗原则禁止任何宗教义务。\n\n❌ C. La promotion d'une religion - Faux. L'État ne doit favoriser aucune religion.\n中：错误。国家不得偏袒或推广任何宗教。\n\n❌ D. L'interdiction des fêtes religieuses - Faux. La laïcité ne supprime pas les fêtes religieuses privées ou familiales ; elle assure simplement la neutralité dans les institutions publiques.\n中：错误。世俗原则不禁止私人或家庭宗教节日，只是保证公共机构中立。"
  },
  {
    id: "la0017",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "examen original", // 正确
    question: "La France reconnaît-elle une religion officielle ?",
    options: ["Oui", "Non", "Seulement le catholicisme", "Selon les régions"],
    answer: 1,
    explanation: "❌ A. Oui - Faux. La France est un État laïque et ne reconnaît aucune religion officielle.\n中：错误。法国是世俗国家，不承认任何官方宗教。\n\n✅ B. Non - Correct ! La France ne reconnaît aucune religion officielle.\n中：正确。法国不承认官方宗教。\n\n❌ C. Seulement le catholicisme - Faux. Le catholicisme n'est pas une religion officielle en France.\n中：错误。天主教不是法国的官方宗教。\n\n❌ D. Selon les régions - Faux. La laïcité s'applique sur tout le territoire national, sans distinction régionale.\n中：错误。世俗原则在全国范围内统一适用，不因地区而异。"
  },
  {
    id: "la0018",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "question simulée", // 正确（无o标志）
    question: "Le principe de neutralité s'applique principalement :",
    options: ["Aux agents publics", "Aux élèves uniquement", "Aux associations privées", "Aux familles"],
    answer: 0,
    explanation: "✅ A. Aux agents publics - Correct ! Le principe de neutralité s'applique aux agents publics dans l'exercice de leurs fonctions.\n中：正确。中立原则主要适用于公职人员在履行职务时。\n\n❌ B. Aux élèves uniquement - Faux. Le principe de neutralité ne s'applique pas uniquement aux élèves.\n中：错误。中立原则不仅适用于学生。\n\n❌ C. Aux associations privées - Faux. La neutralité de l'État ne s'applique pas directement aux associations privées.\n中：错误。国家中立原则不直接适用于私人协会。\n\n❌ D. Aux familles - Faux. Le principe de neutralité ne s'applique pas principalement aux familles.\n中：错误。中立原则不是主要针对家庭。"
  },
  {
    id: "la0019",
    type: "carte multi",
    category: "Laïcité",
    difficulté: "simple",
    typeQuestion: "question simulée", // 正确（无o标志）
    question: "L'État français est :",
    options: ["Religieux", "Neutre", "Confessionnel", "Monarchique"],
    answer: 1,
    explanation: "❌ A. Religieux - Faux. L'État français n'est pas religieux.\n中：错误。法国国家不是宗教性的。\n\n✅ B. Neutre - Correct ! L'État français est neutre sur le plan religieux (principe de laïcité).\n中：正确。法国国家在宗教问题上保持中立（世俗原则）。\n\n❌ C. Confessionnel - Faux. L'État français n'est pas confessionnel.\n中：错误。法国不是宗教国家。\n\n❌ D. Monarchique - Faux. La France est une République, pas une monarchie.\n中：错误。法国是共和国，不是君主制。"
  },
  {
    id: "si0001",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有红色o标志
    question: "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence physique, sexe...) ?",
    options: [
      "Oui, dans certaines situations",
      "Non, dans aucun cas",
      "Oui, avec le consentement des autres",
      "Non, en métropole française"
    ],
    answer: 1,
    explanation: "❌ A. Oui, dans certaines situations - Faux. Il n'existe aucune situation où l'insulte publique est autorisée.\n中：错误。法律中不存在任何允许公开侮辱他人的情况。\n\n✅ B. Non, dans aucun cas - Correct ! Insulter quelqu'un publiquement pour ce type de raison est interdit par la loi.\n中：正确！因为残疾、外貌或性别等原因公开侮辱他人，在任何情况下都是违法的。\n\n❌ C. Oui, avec le consentement des autres - Faux. Le consentement des autres ne rend pas l'insulte légale.\n中：错误。即使他人同意，侮辱行为仍然是违法的。\n\n❌ D. Non, en métropole française - Faux. L'interdiction s'applique partout en France, pas seulement en métropole.\n中：错误。该法律适用于整个法国，而不仅仅是本土地区。"
  },
  {
    id: "si0002",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence physique, sexe...) ?",
    options: [
      "Non interdit par la loi",
      "Parfois autorisé",
      "Autorisé en ligne, interdit dans la vie réelle",
      "Autorisé en famille"
    ],
    answer: 0,
    explanation: "✅ A. Non interdit par la loi - Correct ! L'insulte publique discriminatoire est interdite par la loi.\n中：正确！歧视性的公开侮辱行为是法律明确禁止的。\n\n❌ B. Parfois autorisé - Faux. Ce n'est jamais autorisé.\n中：错误。这种行为从来不被允许。\n\n❌ C. Autorisé en ligne, interdit dans la vie réelle - Faux. Les insultes en ligne sont aussi punies par la loi.\n中：错误。网络上的侮辱同样违法。\n\n❌ D. Autorisé en famille - Faux. Le cadre familial ne justifie pas une insulte publique.\n中：错误。家庭关系不能成为公开侮辱的理由。"
  },
  {
    id: "si0003",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "examen original", // 有红色o标志
    question: "Un enfant peut-il refuser d'aller à l'école pour une raison religieuse ?",
    options: [
      "Oui, toujours",
      "Non",
      "Seulement si ses parents sont d'accord",
      "Seulement à partir de 16 ans"
    ],
    answer: 1,
    explanation: "❌ A. Oui, toujours - Faux. En France, l'instruction est obligatoire pour tous les enfants de 3 à 16 ans, quelle que soit leur religion ou conviction. Refuser l'école pour une raison religieuse est donc interdit.\n中：错误。在法国，3到16岁的儿童必须接受教育，不论其宗教信仰如何，因此因宗教原因拒绝上学是不允许的。\n\n✅ B. Non - Correct ! L'école publique est obligatoire et neutre sur le plan religieux. Les enfants doivent y aller, indépendamment de leurs croyances ou de celles de leurs parents.\n中：正确。公立学校是义务教育，并且宗教中立，儿童必须上学，无论他们或父母的信仰如何。\n\n❌ C. Seulement si ses parents sont d'accord - Faux. Même avec l'accord des parents, l'enfant doit suivre l'école obligatoire.\n中：错误。即使父母同意，孩子仍必须接受义务教育。\n\n❌ D. Seulement à partir de 16 ans - Faux. L'obligation scolaire commence dès 3 ans et se termine à 16 ans.\n中：错误。义务教育从3岁开始，到16岁结束。"
  },
  {
    id: "si0004",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Une mère refuse actuellement que sa fille de 8 ans participe au cours de sport parce qu'il y a des garçons. Que dit la loi ?",
    options: [
      "C'est interdit dans une école publique",
      "C'est possible si l'enseignant est d'accord",
      "C'est toujours interdit dans toutes les écoles",
      "C'est autorisé seulement à l'école privée"
    ],
    answer: 0,
    explanation: "✅ A. C'est interdit dans une école publique - Correct ! Dans les écoles publiques, l'égalité entre filles et garçons doit être respectée. On ne peut pas exclure un enfant d'une activité en raison de son sexe ou de la présence de l'autre sexe.\n中：正确。在公立学校，男女平等必须得到尊重。不能因为孩子的性别或其他性别的存在而让孩子缺席某项活动。\n\n❌ B. C'est possible si l'enseignant est d'accord - Faux. L'enseignant ne peut pas autoriser des discriminations basées sur le sexe.\n中：错误。教师不能允许基于性别的歧视行为。\n\n❌ C. C'est toujours interdit dans toutes les écoles - Faux. Dans les écoles privées confessionnelles, certaines règles peuvent différer, mais dans le public, c'est strictement interdit.\n中：错误。在宗教私立学校中规则可能不同，但在公立学校中严格禁止。\n\n❌ D. C'est autorisé seulement à l'école privée - Faux. Même dans le privé, les droits fondamentaux comme l'égalité ne peuvent pas être totalement ignorés, surtout pour les établissements recevant des financements publics.\n中：错误。即使在私立学校，基本权利（如平等）仍必须得到一定保障，尤其是那些接受公立资金的学校。"
  },
  {
    id: "si0005",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "examen original", // 有红色o标志
    question: "Une personne a-t-elle le droit de ne pas croire en une religion ?",
    options: [
      "Non",
      "Oui",
      "Seulement à l'âge adulte",
      "Seulement si elle est fonctionnaire"
    ],
    answer: 1,
    explanation: "❌ A. Non - Faux. La liberté de conscience garantit le droit de croire ou de ne pas croire, sans pression extérieure.\n中：错误。良心自由保障每个人都有信仰或不信仰的权利，不受外界强制。\n\n✅ B. Oui - Correct ! En France, chacun peut choisir de ne pas adhérer à une religion. Cette liberté est protégée par la Constitution et par le principe de laïcité.\n中：正确。在法国，每个人都可以选择不信仰任何宗教。这一自由受到宪法和世俗原则的保护。\n\n❌ C. Seulement à l'âge adulte - Faux. La liberté de conscience s'exerce dès l'enfance, bien que certaines décisions majeures soient encadrées par la loi.\n中：错误。良心自由从儿童时期就存在，虽然一些重大决定可能受到法律约束。\n\n❌ D. Seulement si elle est fonctionnaire - Faux. La liberté de croire ou de ne pas croire s'applique à tous, indépendamment de la profession.\n中：错误。信仰自由适用于所有人，与职业无关。"
  },
  {
    id: "si0006",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "examen original", // 有红色o标志
    question: "En tant que parent, peut-on refuser que son enfant participe aux cours de sport à l'école car ils sont mixtes ?",
    options: [
      "Oui, toujours",
      "Non",
      "Oui, si l'école est d'accord",
      "Oui, seulement à l'âge de 10 ans"
    ],
    answer: 1,
    explanation: "❌ A. Oui, toujours - Faux. Dans les écoles publiques, la loi garantit l'égalité entre filles et garçons : on ne peut pas exclure un enfant d'un cours de sport pour cette raison.\n中：错误。在公立学校中，法律保障男女平等，不能因为课程是混合班就拒绝孩子参加体育课。\n\n✅ B. Non - Correct ! Les parents ne peuvent pas refuser la participation de leur enfant à des activités mixtes dans les écoles publiques. Tous les élèves doivent être traités de manière équitable.\n中：正确。父母不能拒绝孩子参加公立学校的混合活动。所有学生都必须受到平等对待。\n\n❌ C. Oui, si l'école est d'accord - Faux. Même avec l'accord de l'école, la discrimination basée sur le sexe est interdite.\n中：错误。即使学校同意，基于性别的歧视也是违法的。\n\n❌ D. Oui, seulement à l'âge de 10 ans - Faux. Il n'existe pas d'âge légal pour refuser les activités mixtes : toutes les activités scolaires doivent respecter l'égalité dès le plus jeune âge.\n中：错误。没有允许拒绝混合活动的法定年龄，所有课程都必须从小保障平等。"
  },
  {
    id: "si0007",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "examen original", // 有红色o标志
    question: "Peut-on brûler publiquement un drapeau français ?",
    options: [
      "Oui",
      "Non",
      "Oui, seulement dans certaines régions",
      "Oui, si on est citoyen"
    ],
    answer: 1,
    explanation: "❌ A. Oui - Faux. Brûler publiquement le drapeau français constitue une atteinte aux symboles de la République et est interdit par la loi.\n中：错误。公开焚烧法国国旗属于对共和国象征的侮辱，法律禁止这种行为。\n\n✅ B. Non - Correct ! La loi française protège les symboles nationaux, dont le drapeau, et interdit de les dégrader ou de les brûler publiquement.\n中：正确。法国法律保护国家象征，包括国旗，禁止公开破坏或焚烧国旗。\n\n❌ C. Oui, seulement dans certaines régions - Faux. L'interdiction est valable sur tout le territoire français, sans exception régionale.\n中：错误。禁止行为在全法国范围内适用，没有地区例外。\n\n❌ D. Oui, si on est citoyen - Faux. Être citoyen français ne donne pas le droit de brûler le drapeau.\n中：错误。成为法国公民也不能公开焚烧国旗。"
  },
  {
    id: "si0008",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Madame X et Madame Y sont des étrangères résidant en France. Elles souhaitent créer une association d'aide aux étrangers.",
    options: [
      "Elles peuvent la créer, mais doivent la déclarer à la préfecture",
      "Elles ne peuvent pas créer d'association parce qu'elles ne sont pas de nationalité française.",
      "Elles peuvent créer une association, mais seulement après avoir adhéré à une autre association.",
      "Elles peuvent créer librement une association, sans condition de nationalité particulière."
    ],
    answer: 0,
    explanation: "✅ A. Elles peuvent la créer, mais doivent la déclarer à la préfecture - Correct ! En France, toute personne, française ou étrangère résidant légalement, peut créer une association. Selon la loi de 1901, la plupart des associations doivent être déclarées à la préfecture pour obtenir la personnalité juridique et la capacité de recevoir des subventions ou de gérer un compte bancaire.\n中：正确。在法国，任何合法居留的人员，无论国籍，都可以创建协会。根据1901年的法律，大多数协会需向省政府（préfecture）登记，以获得法人资格，并能够接受补助或开设银行账户。\n\n❌ B. Elles ne peuvent pas créer d'association parce qu'elles ne sont pas de nationalité française - Faux. La nationalité française n'est pas un prérequis pour créer une association.\n中：错误。创建协会不要求拥有法国国籍。\n\n❌ C. Elles peuvent créer une association, mais seulement après avoir adhéré à une autre association - Faux. Il n'y a aucune obligation de rejoindre une autre association avant d'en créer une.\n中：错误。创建协会前不需要加入其他协会。\n\n❌ D. Elles peuvent créer librement une association, sans condition de nationalité particulière - Faux. Bien que la nationalité ne soit pas une condition, la création doit être déclarée à la préfecture pour être légalement reconnue. La formulation \"librement, sans condition\" ignore cette obligation légale.\n中：错误。虽然国籍不是限制条件，但协会要获得法律承认，必须向省政府登记。\"自由创建，无条件\"这一说法忽略了这一法律要求。"
  },
  {
    id: "si0009",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有红色o标志
    question: "Un employeur refuse d'embaucher des femmes dans son entreprise. Que dit la loi ?",
    options: [
      "C'est légal",
      "C'est interdit",
      "C'est permis pour certaines entreprises",
      "C'est permis si l'employeur est homme"
    ],
    answer: 1,
    explanation: "❌ A. C'est légal - Faux. La loi française interdit toute discrimination à l'embauche basée sur le sexe.\n中：错误。法国法律禁止基于性别的招聘歧视。\n\n✅ B. C'est interdit - Correct ! Selon le Code du travail et les lois sur l'égalité, il est interdit de refuser un emploi à une personne uniquement parce qu'elle est une femme. Tous les candidats doivent être traités sur leurs compétences et qualifications.\n中：正确。根据劳动法及平等权利法律，仅因为性别拒绝雇佣是违法的。所有求职者都应根据能力和资历平等对待。\n\n❌ C. C'est permis pour certaines entreprises - Faux. La loi s'applique à toutes les entreprises, quelle que soit leur taille ou leur secteur.\n中：错误。法律适用于所有企业，无论规模或行业。\n\n❌ D. C'est permis si l'employeur est homme - Faux. Le sexe de l'employeur n'a aucune incidence : la discrimination est interdite.\n中：错误。雇主的性别无关紧要，性别歧视都是禁止的。"
  },
  {
    id: "si0010",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "examen original", // 有红色o标志
    question: "À l'école publique, qui peut porter des signes religieux très visibles ?",
    options: [
      "Tous les élèves",
      "Aucun élève",
      "Seulement les enseignants",
      "Les parents"
    ],
    answer: 1,
    explanation: "❌ A. Tous les élèves - Faux. Les élèves du primaire et secondaire dans les écoles publiques ne peuvent pas porter de signes religieux ostensibles, conformément à la loi de 2004 sur la laïcité à l'école.\n中：错误。根据2004年学校世俗法，公立学校的小学生和中学生不能佩戴明显的宗教标志。\n\n✅ B. Aucun élève - Correct ! La loi interdit aux élèves de porter des signes ou tenues religieuses trop visibles afin de garantir la neutralité de l'école et le respect de la liberté de conscience de tous.\n中：正确。法律禁止学生佩戴明显的宗教标志或服饰，以确保学校中立，并尊重所有人的信仰自由。\n\n❌ C. Seulement les enseignants - Faux. Les enseignants, eux aussi, doivent respecter la neutralité religieuse dans le cadre de leur fonction.\n中：错误。教师在履行职务时也必须遵守宗教中立原则。\n\n❌ D. Les parents - Faux. La règle concerne les élèves dans l'établissement ; les parents ne sont pas concernés directement, mais ne peuvent pas non plus imposer de signes religieux aux élèves.\n中：错误。此规定针对校内学生，家长不直接受限，但也不能强制学生佩戴宗教标志。"
  },
  {
    id: "si0011",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "À l'école publique, qui peut porter des signes religieux très visibles ?",
    options: [
      "Seuls les élèves peuvent en porter",
      "Seuls les enseignants peuvent en porter",
      "Ni les enseignants ni les élèves ne peuvent en porter",
      "Seuls les directeurs d'école peuvent en porter"
    ],
    answer: 2,
    explanation: "❌ A. Seuls les élèves peuvent en porter - Faux. Les élèves ne peuvent pas porter de signes religieux visibles dans les écoles publiques.\n中：错误。公立学校的学生不能佩戴明显宗教标志。\n\n❌ B. Seuls les enseignants peuvent en porter - Faux. Les enseignants doivent respecter la neutralité religieuse dans leur rôle d'éducateur.\n中：错误。教师在履行教育职责时必须遵守宗教中立原则。\n\n✅ C. Ni les enseignants ni les élèves ne peuvent en porter - Correct ! La loi impose la neutralité dans les écoles publiques : ni les élèves ni les enseignants ne peuvent afficher de signes religieux visibles.\n中：正确。法律要求公立学校保持中立：学生和教师都不得佩戴明显宗教标志。\n\n❌ D. Seuls les directeurs d'école peuvent en porter - Faux. Les directeurs sont également soumis à la neutralité religieuse dans l'exercice de leurs fonctions.\n中：错误。校长在执行职务时也必须遵守宗教中立原则。"
  },
  {
    id: "si0012",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有红色o标志
    question: "Qui doit respecter le principe de neutralité religieuse dans une préfecture ?",
    options: [
      "Les agents publics",
      "Les citoyens seulement",
      "Les étrangers",
      "Les entreprises"
    ],
    answer: 0,
    explanation: "✅ A. Les agents publics - Correct ! Les agents publics travaillant dans une préfecture doivent respecter la neutralité religieuse : ils ne doivent pas afficher leurs convictions religieuses pendant leur service et doivent traiter tous les usagers de manière impartiale, sans favoritisme ni discrimination.\n中：正确。在省政府工作的公职人员必须遵守宗教中立原则：工作期间不得展示个人宗教信仰，并且要对所有使用公共服务的民众公平公正，不偏袒也不歧视。\n\n❌ B. Les citoyens seulement - Faux. Les citoyens peuvent avoir leurs convictions religieuses personnelles, mais ce sont les agents publics qui doivent être neutres dans le cadre de leurs fonctions.\n中：错误。公民可以有个人宗教信仰，但必须在职责范围内保持中立的是公职人员。\n\n❌ C. Les étrangers - Faux. La neutralité religieuse ne s'applique pas spécifiquement aux étrangers, mais à ceux qui exercent une fonction publique.\n中：错误。宗教中立原则并非针对外国人，而是针对执行公共职务的人。\n\n❌ D. Les entreprises - Faux. Les entreprises privées ne sont pas soumises au principe de neutralité religieuse de la même manière que les services publics.\n中：错误。私营企业不需像公共服务机构一样严格遵守宗教中立原则。"
  },
  // 继续后面的题目...
  {
    id: "si0013",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Madame X veut changer de religion. Elle doit :",
    options: [
      "Obtenir l'accord de son père",
      "Obtenir l'accord de son mari",
      "Pouvoir le faire si elle le souhaite",
      "Obtenir l'accord de son employeur"
    ],
    answer: 2,
    explanation: "❌ A. Obtenir l'accord de son père - Faux. L'accord d'un parent n'est pas nécessaire ; chacun est libre de changer de religion.\n中：错误。改变宗教信仰不需要父母同意，每个人都有自由选择的权利。\n\n❌ B. Obtenir l'accord de son mari - Faux. Le mari n'a aucun droit légal d'empêcher quelqu'un de changer de religion.\n中：错误。丈夫无权阻止配偶改变信仰。\n\n✅ C. Pouvoir le faire si elle le souhaite - Correct ! En France, toute personne est libre de choisir ou de changer sa religion selon sa conscience, sans autorisation.\n中：正确。在法国，每个人都有权根据自己的信仰自由选择或改变宗教，不需要获得任何许可。\n\n❌ D. Obtenir l'accord de son employeur - Faux. L'employeur n'a aucun rôle dans la liberté religieuse.\n中：错误。雇主在宗教自由方面没有权力。"
  },
  {
    id: "si0014",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Monsieur Y est élève dans une école publique et veut porter un symbole religieux très visible. Il peut :",
    options: [
      "Oui, toujours",
      "Non",
      "Seulement avec autorisation des parents",
      "Seulement les enseignants peuvent"
    ],
    answer: 1,
    explanation: "❌ A. Oui, toujours - Faux. La Charte de la laïcité interdit le port de signes religieux ostensibles pour les élèves.\n中：错误。学校世俗宪章禁止学生佩戴明显的宗教标志。\n\n✅ B. Non - Correct ! Les élèves dans les écoles publiques ne peuvent pas porter de signes religieux très visibles afin de respecter la neutralité et la liberté de conscience de tous.\n中：正确。公立学校的学生不得佩戴明显宗教标志，以维护中立和所有学生的信仰自由。\n\n❌ C. Seulement avec autorisation des parents - Faux. Même avec l'autorisation des parents, cela reste interdit à l'école publique.\n中：错误。即使有父母同意，公立学校仍禁止佩戴明显宗教标志。\n\n❌ D. Seulement les enseignants peuvent - Faux. Les enseignants doivent également respecter la neutralité religieuse dans l'exercice de leurs fonctions.\n中：错误。教师在履行职务时也必须保持宗教中立。"
  },
  {
    id: "si0015",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Monsieur Y veut prier à l'école pendant les cours. Que peut-il faire ?",
    options: [
      "Pratiquer librement dans la classe",
      "Ne pas prier pendant les cours",
      "Demander au directeur de changer l'emploi du temps",
      "Organiser un groupe de prière obligatoire"
    ],
    answer: 1,
    explanation: "❌ A. Pratiquer librement dans la classe - Faux. Prier pendant les cours interrompt le fonctionnement de l'école et n'est pas autorisé.\n中：错误。在课堂上祈祷会打断正常教学活动，因此不允许。\n\n✅ B. Ne pas prier pendant les cours - Correct ! À l'école publique, la prière doit se faire en dehors des heures de cours et dans un cadre privé.\n中：正确。在公立学校，祈祷必须在课外时间进行，并在私人空间内完成。\n\n❌ C. Demander au directeur de changer l'emploi du temps - Faux. L'école n'est pas obligée d'adapter l'emploi du temps pour des pratiques religieuses personnelles.\n中：错误。学校没有义务为个人宗教活动调整课程表。\n\n❌ D. Organiser un groupe de prière obligatoire - Faux. Aucun élève ne peut imposer la prière aux autres.\n中：错误。学生不能强制其他人参加祈祷。"
  },
  {
    id: "si0016",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Madame X ne croit pas en Dieu.",
    options: [
      "Elle doit choisir une religion",
      "Elle a le droit de ne pas croire",
      "Elle doit demander l'accord de ses parents",
      "Elle doit cacher son absence de croyance"
    ],
    answer: 1,
    explanation: "❌ A. Elle doit choisir une religion - Faux. La laïcité garantit la liberté de conscience, y compris le droit de ne pas croire.\n中：错误。世俗原则保障信仰自由，包括不信仰的权利。\n\n✅ B. Elle a le droit de ne pas croire - Correct ! Chaque personne est libre de croire ou de ne pas croire en toute conscience.\n中：正确。每个人都可以自由选择信仰或不信仰。\n\n❌ C. Elle doit demander l'accord de ses parents - Faux. Les convictions personnelles ne nécessitent pas l'autorisation des parents.\n中：错误。个人信仰不需要父母同意。\n\n❌ D. Elle doit cacher son absence de croyance - Faux. Il n'y a aucune obligation de cacher ses convictions ou son absence de croyance.\n中：错误。不需要隐藏个人信仰或不信仰。"
  },
  {
    id: "si0017",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Un agent public dans une mairie doit :",
    options: [
      "Favoriser certaines religions",
      "Être neutre vis-à-vis des usagers",
      "Imposer sa religion",
      "Promouvoir sa croyance personnelle"
    ],
    answer: 1,
    explanation: "❌ A. Favoriser certaines religions - Faux. L'État et ses agents doivent rester neutres.\n中：错误。国家及其公职人员必须保持中立。\n\n✅ B. Être neutre vis-à-vis des usagers - Correct ! La neutralité signifie que l'agent public ne favorise ni ne discrimine personne pour des raisons religieuses.\n中：正确。中立意味着公职人员不得因宗教原因偏袒或歧视任何人。\n\n❌ C. Imposer sa religion - Faux. Il est strictement interdit aux agents publics d'imposer leurs convictions.\n中：错误。公职人员不得强制推行个人宗教信仰。\n\n❌ D. Promouvoir sa croyance personnelle - Faux. Les agents publics doivent éviter toute promotion de leur religion dans le cadre de leur travail.\n中：错误。公职人员在工作中不得宣传个人宗教信仰。"
  },
  {
    id: "si0018",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "À l'école publique, les enseignants :",
    options: [
      "Peuvent imposer leur religion aux élèves",
      "Doivent rester neutres",
      "Peuvent organiser des prières obligatoires",
      "Peuvent refuser les élèves qui ne croient pas"
    ],
    answer: 1,
    explanation: "❌ A. Peuvent imposer leur religion aux élèves - Faux. Cela est strictement interdit par la laïcité.\n中：错误。世俗原则严格禁止教师强制学生信仰宗教。\n\n✅ B. Doivent rester neutres - Correct ! Les enseignants doivent respecter la neutralité religieuse, afin que tous les élèves puissent exercer leur liberté de conscience.\n中：正确。教师必须保持宗教中立，确保所有学生都能自由选择信仰或不信仰。\n\n❌ C. Peuvent organiser des prières obligatoires - Faux. Les prières obligatoires sont interdites à l'école publique.\n中：错误。公立学校禁止强制性祈祷。\n\n❌ D. Peuvent refuser les élèves qui ne croient pas - Faux. Aucun élève ne peut être exclu de l'école publique pour ses convictions ou non-croyances.\n中：错误。学生不能因信仰或不信仰而被公立学校拒收。"
  },
  {
    id: "si0019",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Les parents de Madame X veulent que leur fille ne porte pas de symbole religieux à l'école. Que dit la loi ?",
    options: [
      "L'école publique peut l'interdire",
      "Les parents imposent la loi",
      "La fille peut le porter librement",
      "Seul le maire décide"
    ],
    answer: 0,
    explanation: "✅ A. L'école publique peut l'interdire - Correct ! Dans les écoles publiques, le principe de laïcité interdit le port de signes religieux très visibles par les élèves. Les parents ne peuvent pas contourner cette règle.\n中：正确。公立学校遵循世俗原则，禁止学生佩戴显著的宗教标志。家长不能规避这条规定。\n\n❌ B. Les parents imposent la loi - Faux. Les parents n'ont pas le pouvoir d'imposer la loi à l'école publique.\n中：错误。家长不能在公立学校强制执行法律。\n\n❌ C. La fille peut le porter librement - Faux. Le port de signes religieux visibles est interdit dans les écoles publiques.\n中：错误。公立学校禁止佩戴明显的宗教标志。\n\n❌ D. Seul le maire décide - Faux. La loi s'applique à toutes les écoles publiques, pas seulement sur décision du maire.\n中：错误。法律适用于所有公立学校，不由市长决定。"
  },
  {
    id: "si0020",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Un employeur refuse d'embaucher des femmes. Que dit la loi ?",
    options: [
      "C'est légal",
      "C'est interdit",
      "C'est autorisé si l'entreprise est privée",
      "C'est permis selon l'âge"
    ],
    answer: 1,
    explanation: "❌ A. C'est légal - Faux. La loi interdit toute discrimination basée sur le sexe dans l'emploi.\n中：错误。法律禁止在招聘中基于性别的歧视。\n\n✅ B. C'est interdit - Correct ! Refuser d'embaucher une femme simplement à cause de son sexe constitue une discrimination interdite par la loi.\n中：正确。单纯因为性别拒绝招聘属于法律禁止的歧视。\n\n❌ C. C'est autorisé si l'entreprise est privée - Faux. La loi sur la non-discrimination s'applique également aux entreprises privées.\n中：错误。非歧视法律同样适用于私营企业。\n\n❌ D. C'est permis selon l'âge - Faux. L'âge n'autorise pas la discrimination basée sur le sexe.\n中：错误。年龄因素不能成为性别歧视的理由。"
  },
  {
    id: "si0021",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Monsieur X et Madame Y ont des revenus différents. L'égalité signifie :",
    options: [
      "Tous doivent avoir le même revenu",
      "Tous ont les mêmes droits",
      "Les hommes ont plus de droits",
      "Les riches ont plus de droits"
    ],
    answer: 1,
    explanation: "❌ A. Tous doivent avoir le même revenu - Faux. L'égalité ne signifie pas uniformité des revenus.\n中：错误。平等并不意味着收入必须完全相同。\n\n✅ B. Tous ont les mêmes droits - Correct ! L'égalité républicaine signifie que tous les citoyens ont les mêmes droits devant la loi, indépendamment de leur revenu.\n中：正确。公民平等意味着所有人在法律面前拥有同等权利，与收入无关。\n\n❌ C. Les hommes ont plus de droits - Faux. La loi garantit l'égalité entre hommes et femmes.\n中：错误。法律保障男女平等。\n\n❌ D. Les riches ont plus de droits - Faux. Les droits ne dépendent pas de la richesse.\n中：错误。权利不以财富多少而定。"
  },
  {
    id: "si0022",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Un ministre peut-il insulter quelqu'un ?",
    options: [
      "Oui, parce qu'il est ministre",
      "Non, seulement le président peut le faire",
      "Non, car tous les citoyens sont égaux",
      "Oui, mais seulement envers ses subordonnés"
    ],
    answer: 2,
    explanation: "❌ A. Oui, parce qu'il est ministre - Faux. Être ministre ne donne aucun droit de violer la loi ou d'insulter quelqu'un.\n中：错误。担任部长不赋予违法或侮辱他人的权利。\n\n❌ B. Non, seulement le président peut le faire - Faux. Même le président n'a pas le droit d'insulter quelqu'un légalement.\n中：错误。即便是总统，也无权合法侮辱他人。\n\n✅ C. Non, car tous les citoyens sont égaux - Correct ! Tous les citoyens sont égaux devant la loi, y compris les ministres ; personne n'a le droit d'insulter légalement quelqu'un.\n中：正确。所有人在法律面前平等，包括部长在内，没有人可以合法地侮辱他人。\n\n❌ D. Oui, mais seulement envers ses subordonnés - Faux. Même envers subordonnés, insulter quelqu'un constitue une violation des droits et peut être sanctionné.\n中：错误。即便对下属，侮辱行为也是违法的，会受到处罚。"
  },
  {
    id: "si0023",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Madame X veut exprimer ses idées dans un journal. Elle doit :",
    options: [
      "Tout dire sans limite",
      "Respecter la loi",
      "Harceler les autres",
      "Éviter de respecter les droits des autres"
    ],
    answer: 1,
    explanation: "❌ A. Tout dire sans limite - Faux. La liberté d'expression doit être exercée dans le respect de la loi ; on ne peut pas diffamer ou harceler.\n中：错误。言论自由必须遵守法律，不能进行诽谤或骚扰。\n\n✅ B. Respecter la loi - Correct ! La liberté d'expression permet d'exprimer ses idées, mais toujours dans le cadre légal.\n中：正确。言论自由允许表达观点，但必须在法律框架内进行。\n\n❌ C. Harceler les autres - Faux. Harcèlement n'est pas protégé par la liberté d'expression.\n中：错误。骚扰他人不受言论自由保护。\n\n❌ D. Éviter de respecter les droits des autres - Faux. La liberté d'expression ne permet pas de violer les droits d'autrui.\n中：错误。言论自由不能侵犯他人权利。"
  },
  {
    id: "si0024",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Monsieur Y veut voyager librement en France. La liberté de circulation signifie :",
    options: [
      "Pouvoir voyager uniquement à l'étranger",
      "Pouvoir se déplacer librement sur le territoire",
      "Pouvoir choisir ses impôts",
      "Pouvoir s'absenter de l'école"
    ],
    answer: 1,
    explanation: "❌ A. Pouvoir voyager uniquement à l'étranger - Faux. La liberté de circulation concerne les déplacements sur le territoire, et non uniquement à l'étranger.\n中：错误。行动自由指在本国境内的自由流动，而不是只在国外旅行。\n\n✅ B. Pouvoir se déplacer librement sur le territoire - Correct ! La liberté de circulation garantit le droit de se déplacer librement sur le territoire.\n中：正确。行动自由保障个人在领土范围内自由出行的权利。\n\n❌ C. Pouvoir choisir ses impôts - Faux. La liberté de circulation n'a aucun lien avec le choix des impôts.\n中：错误。行动自由与选择税收无关。\n\n❌ D. Pouvoir s'absenter de l'école - Faux. La liberté de circulation ne dispense pas des obligations légales, comme la scolarité.\n中：错误。行动自由不能免除法律义务，例如接受义务教育。"
  },
  {
    id: "si0025",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Une personne veut rejoindre une association culturelle. La liberté d'association lui permet :",
    options: [
      "De la créer ou la rejoindre",
      "D'imposer des adhérents",
      "D'obliger tout le monde à adhérer",
      "De créer des impôts"
    ],
    answer: 0,
    explanation: "✅ A. De la créer ou la rejoindre - Correct ! La liberté d'association permet de créer une association ou d'en devenir membre.\n中：正确。结社自由允许个人创建协会或加入协会。\n\n❌ B. D'imposer des adhérents - Faux. La liberté d'association ne permet pas d'imposer des membres à une association.\n中：错误。结社自由不允许强制指定或强行加入成员。\n\n❌ C. D'obliger tout le monde à adhérer - Faux. Personne ne peut obliger tout le monde à adhérer à une association.\n中：错误。不能强迫所有人加入某个协会。\n\n❌ D. De créer des impôts - Faux. La liberté d'association n'a aucun lien avec la création d'impôts.\n中：错误。结社自由与征税无关。"
  },
  {
    id: "si0026",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Madame X voit un drapeau bleu-blanc-rouge à l'école. Ce drapeau représente :",
    options: [
      "La République française",
      "L'Union européenne",
      "La monarchie",
      "Napoléon"
    ],
    answer: 0,
    explanation: "✅ A. La République française - Correct ! Le drapeau bleu-blanc-rouge est le drapeau national de la République française.\n中：正确。蓝白红三色旗是法国共和国的国旗。\n\n❌ B. L'Union européenne - Faux. Le drapeau de l'Union européenne est bleu avec des étoiles jaunes.\n中：错误。欧盟旗是蓝底黄星，与蓝白红三色旗不同。\n\n❌ C. La monarchie - Faux. La monarchie n'a pas de drapeau officiel actuel en France.\n中：错误。法国目前不是君主制，君主制没有官方国旗。\n\n❌ D. Napoléon - Faux. Le drapeau bleu-blanc-rouge représente la République, pas Napoléon.\n中：错误。蓝白红三色旗代表共和国，而非拿破仑个人。"
  },
  {
    id: "si0027",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Un enfant veut exprimer ses idées à l'école. Il peut :",
    options: [
      "Harceler ses camarades",
      "Respecter la loi",
      "Dire tout ce qu'il veut sans limite",
      "Ignorer les droits des autres"
    ],
    answer: 1,
    explanation: "❌ A. Harceler ses camarades - Faux. Le harcèlement est interdit et ne fait pas partie de la liberté d'expression.\n中：错误。骚扰同学是禁止的，不属于言论自由范围。\n\n✅ B. Respecter la loi - Correct ! La liberté d'expression existe, mais elle doit respecter la loi et les droits des autres.\n中：正确。言论自由存在，但必须遵守法律并尊重他人的权利。\n\n❌ C. Dire tout ce qu'il veut sans limite - Faux. La liberté d'expression n'est pas absolue et connaît des limites.\n中：错误。言论自由不是无限的，有法律和规则限制。\n\n❌ D. Ignorer les droits des autres - Faux. L'expression des idées doit respecter les droits d'autrui.\n中：错误。表达观点必须尊重他人的权利。"
  },
  {
    id: "si0028",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Un agent public porte un symbole religieux visible pendant son service. Que dit le principe de neutralité ?",
    options: [
      "C'est autorisé",
      "Ce n'est pas autorisé",
      "Autorisé selon la religion",
      "Autorisé avec l'accord des usagers"
    ],
    answer: 1,
    explanation: "❌ A. C'est autorisé - Faux. Le principe de neutralité interdit les signes religieux visibles pour les agents publics en service.\n中：错误。中立原则禁止公职人员在工作时佩戴明显宗教标志。\n\n✅ B. Ce n'est pas autorisé - Correct ! Le principe de neutralité impose que les agents publics ne portent pas de signes religieux visibles pendant leur service.\n中：正确。中立原则要求公职人员在工作期间不得佩戴明显宗教标志。\n\n❌ C. Autorisé selon la religion - Faux. La neutralité ne dépend pas de la religion.\n中：错误。中立原则不因宗教不同而有不同规则。\n\n❌ D. Autorisé avec l'accord des usagers - Faux. Même avec l'accord des usagers, la neutralité interdit les signes religieux visibles.\n中：错误。即使使用者同意，中立原则仍禁止。"
  },
  {
    id: "si0029",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Madame X ne croit en aucune religion. La loi française :",
    options: [
      "L'oblige à croire",
      "Respecte son choix",
      "L'oblige à se déclarer",
      "L'interdit"
    ],
    answer: 1,
    explanation: "❌ A. L'oblige à croire - Faux. La loi ne peut pas obliger une personne à croire.\n中：错误。法律不能强迫某人信仰宗教。\n\n✅ B. Respecte son choix - Correct ! La liberté de conscience permet de ne croire en aucune religion.\n中：正确。良心自由允许不信任何宗教，法律尊重这一选择。\n\n❌ C. L'oblige à se déclarer - Faux. La loi ne demande pas à une personne de déclarer son absence de croyance.\n中：错误。法律不要求人们声明自己不信教。\n\n❌ D. L'interdit - Faux. La loi ne interdit pas l'athéisme ou l'absence de religion.\n中：错误。法律不禁止无神论或不信宗教。"
  },
  {
    id: "si0030",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Une mairie refuse un service à cause d'une croyance. Cette situation est :",
    options: [
      "Conforme",
      "Discriminatoire",
      "Normale",
      "Autorisée"
    ],
    answer: 1,
    explanation: "❌ A. Conforme - Faux. Refuser un service à cause d'une croyance est contraire au principe d'égalité.\n中：错误。因宗教信仰拒绝提供服务违反平等原则。\n\n✅ B. Discriminatoire - Correct ! Refuser un service en raison d'une croyance est une discrimination.\n中：正确。因信仰而拒绝服务属于歧视行为。\n\n❌ C. Normale - Faux. Ce comportement n'est pas normal dans un service public.\n中：错误。在公共服务中这种行为不正常。\n\n❌ D. Autorisée - Faux. Cela n'est pas autorisé, car c'est discriminatoire.\n中：错误。这是不允许的，因为属于歧视。"
  },
  {
    id: "si0031",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Un citoyen refuse de respecter une loi pour des raisons personnelles. Que dit la République ?",
    options: [
      "C'est acceptable",
      "La loi s'impose à tous",
      "Cela dépend de la religion",
      "Cela dépend de l'âge"
    ],
    answer: 1,
    explanation: "❌ A. C'est acceptable - Faux. La République impose le respect de la loi à tous.\n中：错误。共和国要求所有人遵守法律。\n\n✅ B. La loi s'impose à tous - Correct ! La loi s'applique à tous, sans exception.\n中：正确。法律适用于所有人，没有例外。\n\n❌ C. Cela dépend de la religion - Faux. Les croyances religieuses ne permettent pas d'échapper à la loi.\n中：错误。宗教信仰不能成为不遵守法律的理由。\n\n❌ D. Cela dépend de l'âge - Faux. La loi s'applique à tous, quel que soit l'âge, selon les règles.\n中：错误。法律适用于所有人，不因年龄而改变（按法律规定执行）。"
  },
  {
    id: "si0032",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Une personne exprime une opinion sans insulter ni discriminer. Elle exerce :",
    options: [
      "Sa liberté d'expression",
      "Une infraction",
      "Une provocation",
      "Une discrimination"
    ],
    answer: 0,
    explanation: "✅ A. Sa liberté d'expression - Correct ! Exprimer une opinion de manière respectueuse relève de la liberté d'expression.\n中：正确。以尊重方式表达观点属于言论自由。\n\n❌ B. Une infraction - Faux. Si l'expression respecte la loi, ce n'est pas une infraction.\n中：错误。只要符合法律，这不是违法行为。\n\n❌ C. Une provocation - Faux. Il n'y a pas de provocation si l'expression est respectueuse.\n中：错误。如果表达方式尊重他人，不构成挑衅。\n\n❌ D. Une discrimination - Faux. Sans insulte ni discrimination, ce n'est pas une discrimination.\n中：错误。没有侮辱或歧视就不属于歧视行为。"
  },
  {
    id: "si0033",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无o标志
    question: "Un employeur traite différemment deux salariés à cause de leur sexe. Cette situation est :",
    options: [
      "Légale",
      "Interdite",
      "Traditionnelle",
      "Acceptable"
    ],
    answer: 1,
    explanation: "❌ A. Légale - Faux. La discrimination au travail selon le sexe est interdite.\n中：错误。职场中因性别差别对待属于非法歧视。\n\n✅ B. Interdite - Correct ! La discrimination selon le sexe est interdite par la loi.\n中：正确。法律禁止基于性别的歧视。\n\n❌ C. Traditionnelle - Faux. La tradition ne justifie pas une discrimination.\n中：错误。传统不能成为歧视的理由。\n\n❌ D. Acceptable - Faux. C'est inacceptable car c'est discriminatoire.\n中：错误。这是不可接受的，因为属于歧视。"
  },
  {
    id: "si0034",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无o标志
    question: "Un citoyen respecte les lois et les autres. Il agit selon :",
    options: [
      "Les valeurs républicaines",
      "Ses intérêts",
      "Sa religion",
      "Son origine"
    ],
    answer: 0,
    explanation: "✅ A. Les valeurs républicaines - Correct ! Respecter les lois et les autres correspond aux valeurs républicaines.\n中：正确。遵守法律并尊重他人符合共和价值观。\n\n❌ B. Ses intérêts - Faux. Le respect des lois ne dépend pas uniquement des intérêts personnels.\n中：错误。遵守法律不只是出于个人利益。\n\n❌ C. Sa religion - Faux. Le respect des lois est indépendant de la religion.\n中：错误。遵守法律与宗教无关。\n\n❌ D. Son origine - Faux. Le respect des lois n'est pas basé sur l'origine.\n中：错误。遵守法律不取决于出身。"
  },
  

  {
    id: "in0001",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui nomme le Premier ministre ?",
    options: [
      "Le Parlement",
      "Le peuple", 
      "Le président de la République",
      "Le Conseil constitutionnel"
    ],
    answer: 2,
    explanation: `❌ A. Le Parlement - Faux. Le Parlement ne nomme pas le Premier ministre. Il peut seulement contrôler l'action du gouvernement et, dans certains cas, le renverser par une motion de censure.
中：错误。议会不任命总理。它只能监督政府的工作，并在某些情况下通过不信任动议迫使政府下台。

❌ B. Le peuple - Faux. Le peuple n'élit pas directement le Premier ministre. Les citoyens élisent le Président de la République et les députés, mais pas le Premier ministre.
中：错误。人民不直接选举总理。公民选举共和国总统和国民议会议员，但不选举总理。

✅ C. Le président de la République - Correct. Selon la Constitution française, le Président de la République nomme le Premier ministre.
中：正确。根据法国宪法，共和国总统任命总理。

❌ D. Le Conseil constitutionnel - Faux. Le Conseil constitutionnel ne nomme pas le Premier ministre. Son rôle est de vérifier la conformité des lois et des élections à la Constitution.
中：错误。宪法委员会不任命总理。它的职责是审查法律和选举是否符合宪法。`
  },
  {
    id: "in0002",
    type: "carte multi", 
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Le Parlement est composé :",
    options: [
      "Du Président et du Gouvernement",
      "Du Sénat et de l'Assemblée nationale",
      "Des maires et des préfets",
      "Des juges et des avocats"
    ],
    answer: 1,
    explanation: `❌ A. Du Président et du Gouvernement - Faux. Le Président de la République et le Gouvernement n'appartiennent pas au Parlement. Ils exercent le pouvoir exécutif.
中：错误。共和国总统和政府不属于议会，他们行使的是行政权。

✅ B. Du Sénat et de l'Assemblée nationale - Correct. Le Parlement français est composé de deux chambres : le Sénat et l'Assemblée nationale.
中：正确。法国议会由两院组成：参议院和国民议会。

❌ C. Des maires et des préfets - Faux. Les maires et les préfets sont des autorités administratives locales, pas des membres du Parlement.
中：错误。市长和省长（国家代表）是地方行政机关人员，不是议会议员。

❌ D. Des juges et des avocats - Faux. Les juges et les avocats appartiennent au pouvoir judiciaire, pas au pouvoir législatif.
中：错误。法官和律师属于司法领域，不属于立法机关。`
  },
  {
    id: "in0003",
    type: "carte multi",
    category: "Institutions", 
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qu'est-ce que le pouvoir exécutif ? Le pouvoir :",
    options: [
      "Qui juge les citoyens",
      "Qui vote les lois",
      "Qui applique les lois",
      "Qui contrôle les élections"
    ],
    answer: 2,
    explanation: `❌ A. Qui juge les citoyens - Faux. Le pouvoir exécutif ne juge pas les citoyens, c'est le rôle du pouvoir judiciaire.
中：错误。行政权不审判公民，这是司法权的职责。

❌ B. Qui vote les lois - Faux. Le pouvoir exécutif ne vote pas les lois, il les applique et les met en œuvre.
中：错误。行政权不投票通过法律，它负责执行法律。

✅ C. Qui applique les lois - Correct. Le pouvoir exécutif met en œuvre et applique les lois adoptées par le Parlement.
中：正确。行政权负责执行由议会通过的法律。

❌ D. Qui contrôle les élections - Faux. Le contrôle des élections est assuré par des autorités administratives et judiciaires, pas par l'exécutif.
中：错误。选举监督由行政和司法机构负责，不是行政权。`
  },
  {
    id: "in0004",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qu'est-ce que le pouvoir législatif ? Le pouvoir :",
    options: [
      "Qui applique les lois",
      "Qui juge les citoyens",
      "Qui vote et élabore les lois", 
      "Qui dirige l'administration"
    ],
    answer: 2,
    explanation: `❌ A. Qui applique les lois - Faux. C'est le rôle de l'exécutif.
中：错误。执行法律是行政权的职责。

❌ B. Qui juge les citoyens - Faux. C'est le rôle du judiciaire.
中：错误。审判公民是司法权的职责。

✅ C. Qui vote et élabore les lois - Correct. Le Parlement rédige, discute et vote les lois.
中：正确。议会制定、讨论并通过法律。

❌ D. Qui dirige l'administration - Faux. L'administration est dirigée par le gouvernement (exécutif).
中：错误。行政机构由政府（行政权）管理。`
  },
  {
    id: "in0005",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen", 
    typeQuestion: "examen original",
    question: "Qu'est-ce que le pouvoir judiciaire ? Le pouvoir :",
    options: [
      "Qui vote et élabore les lois",
      "Qui applique les lois au quotidien",
      "Qui juge les citoyens et contrôle l'application des lois",
      "Qui dirige l'administration"
    ],
    answer: 2,
    explanation: `❌ A. Qui vote et élabore les lois - Faux. C'est le rôle du législatif.
中：错误。制定和通过法律是立法权。

❌ B. Qui applique les lois au quotidien - Faux. L'application quotidienne est plutôt exécutive.
中：错误。日常执行法律主要是行政权。

✅ C. Qui juge les citoyens et contrôle l'application des lois - Correct. Le judiciaire juge et s'assure que les lois sont respectées.
中：正确。司法机关审判并监督法律执行。

❌ D. Qui dirige l'administration - Faux. L'administration est dirigée par le gouvernement.
中：错误。行政机构由政府管理。`
  },
  {
    id: "in0006",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original", 
    question: "Quel est le rôle de l'autorité judiciaire ?",
    options: [
      "Gouverner le pays",
      "Voter les lois",
      "Juger et faire appliquer la justice",
      "Organiser les élections"
    ],
    answer: 2,
    explanation: `❌ A. Gouverner le pays - Faux. Le gouvernement gouverne, pas la justice.
中：错误。治理国家是政府的职责，不是司法机关。

❌ B. Voter les lois - Faux. C'est le rôle du Parlement.
中：错误。通过法律是议会的职责。

✅ C. Juger et faire appliquer la justice - Correct. La justice juge les litiges et fait respecter la loi.
中：正确。司法机关审理纠纷并维护法律执行。

❌ D. Organiser les élections - Faux. L'organisation des élections est assurée par l'État, pas par la justice.
中：错误。选举组织由国家机构负责，不是司法机关。`
  },
  {
    id: "in0007",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel pouvoir détient un juge ? Le pouvoir :",
    options: [
      "Exécutif",
      "Législatif",
      "Judiciaire", 
      "Politique"
    ],
    answer: 2,
    explanation: `❌ A. Exécutif - Faux. Le juge n'exécute pas les lois.
中：错误。法官不执行法律。

❌ B. Législatif - Faux. Le juge ne vote pas les lois.
中：错误。法官不通过法律。

✅ C. Judiciaire - Correct. Le juge fait partie du pouvoir judiciaire.
中：正确。法官属于司法权。

❌ D. Politique - Faux. Le juge doit être indépendant et non politique.
中：错误。法官应独立，不参与政治。`
  },
  {
    id: "in0008", 
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel pouvoir détient le Premier ministre ? Le pouvoir :",
    options: [
      "Législatif",
      "Exécutif",
      "Judiciaire",
      "Politique"
    ],
    answer: 1,
    explanation: `❌ A. Législatif - Faux. Il ne vote pas les lois.
中：错误。他不投票通过法律。

✅ B. Exécutif - Correct. Le Premier ministre dirige l'action du gouvernement (exécutif).
中：正确。总理领导政府行动（行政权）。

❌ C. Judiciaire - Faux. Il ne juge pas.
中：错误。他不进行审判。

❌ D. Politique - Faux. Le terme "politique" n'est pas un pouvoir constitutionnel.
中：错误。"政治"不是宪法规定的权力类别。`
  },
  {
    id: "in0009",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel pouvoir détient le Président de la République ? Le pouvoir :",
    options: [
      "Exécutif", 
      "Législatif",
      "Judiciaire",
      "Administratif"
    ],
    answer: 0,
    explanation: `✅ A. Exécutif - Correct. Le Président dirige l'État et nomme le Premier ministre.
中：正确。总统领导国家并任命总理。

❌ B. Législatif - Faux. Il ne vote pas les lois, mais peut proposer et promulguer.
中：错误。他不投票通过法律，但可以提议和签署法律。

❌ C. Judiciaire - Faux. Il ne juge pas.
中：错误。他不进行审判。

❌ D. Administratif - Faux. Ce n'est pas une catégorie de pouvoir constitutionnel.
中：错误。行政不是宪法权力类别。`
  },
  {
    id: "in0010",
    type: "carte multi",
    category: "Institutions", 
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel pouvoir détient le Parlement ? Le pouvoir :",
    options: [
      "Judiciaire",
      "Législatif",
      "Exécutif",
      "Administratif"
    ],
    answer: 1,
    explanation: `❌ A. Judiciaire - Faux. Il ne juge pas.
中：错误。议会不审判。

✅ B. Législatif - Correct. Le Parlement vote et élabore les lois.
中：正确。议会制定并通过法律。

❌ C. Exécutif - Faux. L'exécutif est le Président et le gouvernement.
中：错误。行政权属于总统和政府。

❌ D. Administratif - Faux. Ce n'est pas un pouvoir constitutionnel.
中：错误。行政不是宪法权力类别。`
  },
  {
    id: "in0011",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "L'autorité judiciaire est exercée par :",
    options: [
      "Le président",
      "Les juges et tribunaux",
      "Les députés", 
      "Les ministres"
    ],
    answer: 1,
    explanation: `❌ A. Le président - Faux. Le président ne fait pas fonctionner la justice.
中：错误。总统不行使司法权。

✅ B. Les juges et tribunaux - Correct. Ce sont eux qui rendent la justice.
中：正确。法官和法院行使司法权。

❌ C. Les députés - Faux. Les députés font partie du Parlement (législatif).
中：错误。议员属于立法权。

❌ D. Les ministres - Faux. Les ministres appartiennent au gouvernement (exécutif).
中：错误。部长属于行政权。`
  },
  {
    id: "in0012",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Combien de députés composent l'Assemblée nationale ?",
    options: [
      "348",
      "500", 
      "577",
      "600"
    ],
    answer: 2,
    explanation: `❌ A. 348 - Faux. Trop peu.
中：错误。人数过少。

❌ B. 500 - Faux. Ce n’est pas le bon nombre de personnes
中：错误。不是正确人数。

✅ C. 577 - Correct. L'Assemblée nationale compte 577 députés.
中：正确。国民议会由577名议员组成。

❌ D. 600 - Faux. Ce n’est pas le bon nombre de personnes.
中：错误。不是正确人数。`
  },
  {
    id: "in0013",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Combien de sénateurs composent le Sénat ?",
    options: [
      "348",
      "577", 
      "500",
      "600"
    ],
    answer: 0,
    explanation: `✅ A. 348 - Correct. Le Sénat compte 348 sénateurs.
中：正确。参议院由348名参议员组成。

❌ B. 577 - Faux. C'est le nombre de députés, pas de sénateurs.
中：错误。577是国民议会议员人数。

❌ C. 500 - Faux. Pas le bon chiffre.
中：错误。不是正确数字。

❌ D. 600 - Faux. Pas le bon chiffre.
中：错误。不是正确数字。`
  },
  {
    id: "in0014",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui possède le pouvoir exécutif ?",
    options: [
      "Le Parlement",
      "Le président et le gouvernement",
      "Les juges", 
      "Les citoyens"
    ],
    answer: 1,
    explanation: `❌ A. Le Parlement - Faux. Le Parlement est le pouvoir législatif.
中：错误。议会是立法权。

✅ B. Le président et le gouvernement - Correct. Ce sont eux qui exercent le pouvoir exécutif.
中：正确。总统和政府行使行政权。

❌ C. Les juges - Faux. Les juges exercent le judiciaire.
中：错误。法官行使司法权。

❌ D. Les citoyens - Faux. Les citoyens élisent les représentants mais n'exercent pas directement le pouvoir exécutif.
中：错误。公民选举代表，但不直接行使行政权。`
  },
  {
    id: "in0015",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quels sont les trois pouvoirs ?",
    options: [
      "Présidentiel, communal, européen",
      "Exécutif, législatif, judiciaire", 
      "National, local, international",
      "Politique, économique, social"
    ],
    answer: 1,
    explanation: `❌ A. Présidentiel, communal, européen - Faux. Ce ne sont pas des pouvoirs constitutionnels.
中：错误。这不是宪法权力分类。

✅ B. Exécutif, législatif, judiciaire - Correct. Ce sont les trois pouvoirs selon la séparation des pouvoirs.
中：正确。根据三权分立，三大权力为行政、立法、司法。

❌ C. National, local, international - Faux. Ce sont des niveaux de gouvernance, pas des pouvoirs.
中：错误。这是治理层级，不是权力类型。

❌ D. Politique, économique, social - Faux. Ce sont des domaines, pas des pouvoirs.
中：错误。这是领域分类，不是权力。`
  },
  {
    id: "in0016",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui possède le pouvoir législatif ?",
    options: [
      "Le gouvernement",
      "Le Parlement", 
      "Le président",
      "Les juges"
    ],
    answer: 1,
    explanation: `❌ A. Le gouvernement - Faux. Le gouvernement propose mais ne vote pas.
中：错误。政府可提出法案，但不投票通过。

✅ B. Le Parlement - Correct. Le Parlement vote et adopte les lois.
中：正确。议会通过并采纳法律。

❌ C. Le président - Faux. Il promulgue mais ne vote pas les lois.
中：错误。总统签署法律，但不投票。

❌ D. Les juges - Faux. Les juges appliquent et interprètent les lois.
中：错误。法官执行并解释法律。`
  },
  {
    id: "in0017",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui sanctionne l'auteur d'un vol ?",
    options: [
      "Le maire",
      "La police",
      "La justice", 
      "Le président"
    ],
    answer: 2,
    explanation: `❌ A. Le maire - Faux. Le maire ne sanctionne pas les délits.
中：错误。市长不处罚犯罪。

❌ B. La police - Faux. La police arrête et enquête, mais ne juge pas.
中：错误。警察逮捕调查，但不审判。

✅ C. La justice - Correct. C'est le tribunal qui juge et sanctionne.
中：正确。法院审判并处罚。

❌ D. Le président - Faux. Le président n'intervient pas dans les cas individuels.
中：错误。总统不参与个案处理。`
  },
  {
    id: "in0018",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui vote les lois ?",
    options: [
      "Le gouvernement",
      "Le président", 
      "Le Parlement",
      "Les préfets"
    ],
    answer: 2,
    explanation: `❌ A. Le gouvernement - Faux. Il propose, mais ne vote pas.
中：错误。政府可提出法案，但不投票。

❌ B. Le président - Faux. Il promulgue, mais ne vote pas.
中：错误。总统签署法律，但不投票。

✅ C. Le Parlement - Correct. C'est le Parlement qui vote les lois.
中：正确。议会通过法律。

❌ D. Les préfets - Faux. Les préfets appliquent, mais ne votent pas.
中：错误。省长执行政策，不投票。`
  },
  {
    id: "in0019",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui réside au palais de l'Élysée ?",
    options: [
      "Le Premier ministre",
      "Le président", 
      "Le maire de Paris",
      "Le Sénat"
    ],
    answer: 1,
    explanation: `❌ A. Le Premier ministre - Faux. Le Premier ministre travaille à Matignon.
中：错误。总理办公地点在马蒂尼翁。

✅ B. Le président - Correct. Le palais de l'Élysée est la résidence officielle du président.
中：正确。爱丽舍宫是总统官邸。

❌ C. Le maire de Paris - Faux. Le maire réside ailleurs.
中：错误。市长不住在爱丽舍宫。

❌ D. Le Sénat - Faux. Le Sénat siège au palais du Luxembourg.
中：错误。参议院在卢森堡宫。`
  },
  {
    id: "in0020",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Combien y a-t-il de départements en France ?",
    options: [
      "95",
      "96", 
      "101",
      "105"
    ],
    answer: 2,
    explanation: `❌ A. 95 - Faux. Ce n’est pas le bon nombre.
中：错误。不是正确数字。

❌ B. 96 - Faux. Ce n’est pas le bon nombre.
中：错误。不是正确数字。

✅ C. 101 - Correct. La France compte 101 départements (y compris outre-mer).
中：正确。法国共101个省（含海外省）。

❌ D. 105 - Faux. Ce n’est pas le bon nombre.
中：错误。不是正确数字。`
  },
  {
    id: "in0021",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui représente l'État dans un département ?",
    options: [
      "Le maire",
      "Le préfet",
      "Le député", 
      "Le juge"
    ],
    answer: 1,
    explanation: `❌ A. Le maire - Faux. Le maire représente la commune.
中：错误。市长代表的是市镇。

✅ B. Le préfet - Correct. Le préfet est le représentant de l'État dans le département.
中：正确。省长代表国家在省内执行行政。

❌ C. Le député - Faux. Le député représente les citoyens au Parlement.
中：错误。议员在议会代表公民。

❌ D. Le juge - Faux. Le juge fait partie du judiciaire.
中：错误。法官属于司法权。`
  },
  {
    id: "in0022",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui dirige la commune ?",
    options: [
      "Le préfet",
      "Le maire", 
      "Le président",
      "Le député"
    ],
    answer: 1,
    explanation: `❌ A. Le préfet - Faux. Le préfet représente l'État, pas la commune.
中：错误。省长代表国家，不管理市镇。

✅ B. Le maire - Correct. Le maire dirige la commune.
中：正确。市长管理市镇。

❌ C. Le président - Faux. Le président dirige l'État, pas la commune.
中：错误。总统领导国家，不管理市镇。

❌ D. Le député - Faux. Le député siège au Parlement.
中：错误。议员在议会。`
  },
  {
    id: "in0023",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Est-ce que le président a tous les pouvoirs ?",
    options: [
      "Oui",
      "Non, les pouvoirs sont séparés",
      "Seulement en cas de crise", 
      "Seulement à l'étranger"
    ],
    answer: 1,
    explanation: `❌ A. Oui - Faux. Non, la Constitution sépare les pouvoirs.
中：错误。总统并非拥有全部权力。

✅ B. Non, les pouvoirs sont séparés - Correct. Le système français repose sur la séparation des pouvoirs.
中：正确。法国体制遵循三权分立。

❌ C. Seulement en cas de crise - Faux. Même en crise, le président ne concentre pas tous les pouvoirs.
中：错误。即使危机，总统也不会拥有所有权力。

❌ D. Seulement à l'étranger - Faux. Le président exerce ses fonctions en France et à l'étranger.
中：错误。总统在国内外都有职权。`
  },
  {
    id: "in0024",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui est le préfet ?",
    options: [
      "Un élu local",
      "Un représentant de l'État",
      "Un juge", 
      "Un député"
    ],
    answer: 1,
    explanation: `❌ A. Un élu local - Faux. Le préfet n'est pas élu, il est nommé par l'État.
中：错误。省长不是选举产生，而是由国家任命。

✅ B. Un représentant de l'État - Correct. Le préfet représente l'État dans le département.
中：正确。省长代表国家在省内行使行政。

❌ C. Un juge - Faux. Le préfet n'est pas judiciaire.
中：错误。省长不属于司法。

❌ D. Un député - Faux. Le député est élu pour siéger au Parlement.
中：错误。议员是选举产生的议会成员。`
  },
  {
    id: "in0025",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est le rôle du Parlement ?",
    options: [
      "Appliquer les lois",
      "Juger",
      "Voter les lois", 
      "Gouverner seul"
    ],
    answer: 2,
    explanation: `❌ A. Appliquer les lois - Faux. L'exécutif applique les lois.
中：错误。执行法律是行政权。

❌ B. Juger - Faux. Le judiciaire juge.
中：错误。审判是司法权。

✅ C. Voter les lois - Correct. Le Parlement vote et adopte les lois.
中：正确。议会通过法律。

❌ D. Gouverner seul - Faux. Le Parlement ne gouverne pas seul, il partage le pouvoir avec le gouvernement.
中：错误。议会不单独治理国家。`
  },
  {
    id: "in0026",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Fin de mandat présidentiel : peut-il rester ?",
    options: [
      "Oui",
      "Non", 
      "Seulement s'il veut",
      "Seulement en guerre"
    ],
    answer: 1,
    explanation: `❌ A. Oui - Faux. Il doit quitter ses fonctions à la fin de son mandat.
中：错误。任期结束后必须离任。

✅ B. Non - Correct. Le président ne peut pas rester au-delà de son mandat.
中：正确。总统不能超过任期继续任职。

❌ C. Seulement s'il veut - Faux. Il ne dépend pas de sa volonté.
中：错误。不能由其个人意愿决定。

❌ D. Seulement en guerre - Faux. Même en guerre, il doit respecter le mandat.
中：错误。即使战争也需遵守任期。`
  },
  {
    id: "in0027",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui dirige l'action du Gouvernement ?",
    options: [
      "Le président",
      "Le Premier ministre", 
      "Le Parlement",
      "Le préfet"
    ],
    answer: 1,
    explanation: `❌ A. Le président - Faux. Il fixe les grandes orientations mais ne dirige pas directement l'action quotidienne.
中：错误。总统制定方向，但不直接领导日常政府行动。

✅ B. Le Premier ministre - Correct. Le Premier ministre dirige l'action du gouvernement.
中：正确。总理领导政府行动。

❌ C. Le Parlement - Faux. Le Parlement vote les lois mais ne dirige pas le gouvernement.
中：错误。议会通过法律，不领导政府。

❌ D. Le préfet - Faux. Le préfet représente l'État dans un département.
中：错误。省长不领导政府。`
  },
  {
    id: "in0028",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Organisation administrative de la France ?",
    options: [
      "Régions, départements, communes",
      "États, provinces", 
      "Cantons seulement",
      "Royaumes"
    ],
    answer: 0,
    explanation: `✅ A. Régions, départements, communes - Correct. Ce sont les niveaux administratifs de la France.
中：正确。这是法国行政区划层级。

❌ B. États, provinces - Faux. Ce n'est pas la structure française.
中：错误。法国没有"州/省"结构。

❌ C. Cantons seulement - Faux. Les cantons sont des subdivisions électorales, pas l'organisation principale.
中：错误。选区划分，不是主要行政结构。

❌ D. Royaumes - Faux. La France est une république.
中：错误。法国是共和国，不是王国。`
  },
  {
    id: "in0029",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Est-ce que le Premier ministre a tous les pouvoirs ?",
    options: [
      "Oui, il décide seul de toutes les lois",
      "Oui, il commande la justice", 
      "Non, il partage le pouvoir avec le Président et le Parlement",
      "Oui, il contrôle tous les pouvoirs"
    ],
    answer: 2,
    explanation: `❌ A. Oui, il décide seul de toutes les lois - Faux. Il ne décide pas seul.
中：错误。他不能独自决定所有法律。

❌ B. Oui, il commande la justice - Faux. Il ne commande pas la justice.
中：错误。他不能指挥司法。

✅ C. Non, il partage le pouvoir avec le Président et le Parlement - Correct. Les pouvoirs sont partagés selon la Constitution.
中：正确。根据宪法，总理与总统和议会共享权力。

❌ D. Oui, il contrôle tous les pouvoirs - Faux. Il ne contrôle pas le judiciaire et le législatif.
中：错误。他不控制司法和立法。`
  },
  {
    id: "in0030",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Pourquoi séparer les pouvoirs ?",
    options: [
      "Simplifier",
      "Éviter les abus", 
      "Aller plus vite",
      "Supprimer le Parlement"
    ],
    answer: 1,
    explanation: `❌ A. Simplifier - Faux. Ce n'est pas l'objectif principal.
中：错误。不是主要目的。

✅ B. Éviter les abus - Correct. La séparation des pouvoirs sert à éviter la concentration du pouvoir et les abus.
中：正确。三权分立是为了防止权力集中和滥用。

❌ C. Aller plus vite - Faux. Parfois cela ralentit les décisions, mais protège la démocratie.
中：错误。可能会更慢，但保护民主。

❌ D. Supprimer le Parlement - Faux. Au contraire, cela protège le rôle du Parlement.
中：错误。分权是为了保护议会作用，不是废除议会。`
  },
  {
    id: "in0031",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Rôle du gouvernement ?",
    options: [
      "Juger",
      "Voter",
      "Appliquer les lois", 
      "Élire"
    ],
    answer: 2,
    explanation: `❌ A. Juger - Faux. Le gouvernement ne juge pas, c'est le rôle de la justice.
中：错误。政府不审判，这是司法的职责。

❌ B. Voter - Faux. Le gouvernement propose des lois mais ne les vote pas.
中：错误。政府提出法案但不投票通过。

✅ C. Appliquer les lois - Correct. Le gouvernement applique et met en œuvre les lois.
中：正确。政府执行和落实法律。

❌ D. Élire - Faux. Le gouvernement n'élit pas les représentants.
中：错误。政府不选举代表。`
  },
  {
    id: "in0032",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Nombre de régions en France ?",
    options: [
      "12",
      "13", 
      "15",
      "18"
    ],
    answer: 1,
    explanation: `❌ A. 12 - Faux. Ce n'est pas le bon chiffre.
中：错误。不是正确数字。

❌ B. 13 - Faux. La France métropolitaine compte 13 régions.
中：正确。法国本土共有13个大区。

❌ C. 15 - Faux. Ce n'est pas le bon chiffre.
中：错误。不是正确数字。

✅ D. 18 - Correct. 18 inclut les régions d’outre-mer.
中：正确。18包括海外大区。`
  },
  {
    id: "in0033",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Rôle du Défenseur des droits ?",
    options: [
      "Voter les lois",
      "Protéger les droits",
      "Gouverner", 
      "Juger"
    ],
    answer: 1,
    explanation: `❌ A. Voter les lois - Faux. Il ne vote pas les lois.
中：错误。它不投票通过法律。

✅ B. Protéger les droits - Correct. Il défend les droits des citoyens face à l'administration.
中：正确。它保护公民权利，尤其对抗行政机关。

❌ C. Gouverner - Faux. Il ne gouverne pas.
中：错误。它不治理国家。

❌ D. Juger - Faux. Il n'a pas de pouvoir judiciaire.
中：错误。它没有司法权。`
  },
  {
    id: "in0034",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Rôle principal du département ?",
    options: [
      "Défense",
      "Action sociale", 
      "Justice",
      "Diplomatie"
    ],
    answer: 1,
    explanation: `❌ A. Défense - Faux. La défense nationale est une compétence de l'État.
中：错误。国防属于国家职能。

✅ B. Action sociale - Correct. Le département gère l'action sociale (aide sociale, RSA, etc.).
中：正确。省负责社会救助与福利。

❌ C. Justice - Faux. La justice est assurée par le pouvoir judiciaire.
中：错误。司法由司法机关负责。

❌ D. Diplomatie - Faux. La diplomatie est du ressort de l'État.
中：错误。外交属于国家。`
  },
  {
    id: "in0035",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Rôle principal des communes ?",
    options: [
      "Politique étrangère",
      "Services de proximité",
      "Justice", 
      "Défense"
    ],
    answer: 1,
    explanation: `❌ A. Politique étrangère - Faux. La commune ne fait pas de diplomatie.
中：错误。市镇不处理外交。

✅ B. Services de proximité - Correct. La commune gère les services locaux (écoles maternelles, crèches, voirie...).
中：正确。市镇负责基层公共服务。

❌ C. Justice - Faux. La justice n'est pas une compétence communale.
中：错误。司法不属于市镇。

❌ D. Défense - Faux. La défense est du ressort de l'État.
中：错误。国防属于国家。`
  },
  {
    id: "in0036",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Nombre de communes en France ?",
    options: [
      "Environ 10 000",
      "Environ 20 000", 
      "Environ 36 000",
      "Environ 50 000"
    ],
    answer: 2,
    explanation: `❌ A. Environ 10 000 - Faux. Trop peu.
中：错误。数量过少。

❌ B. Environ 20 000 - Faux.Trop peu.
中：错误。太少。

✅ C. Environ 36 000 - Correct. La France compte environ 35 000 à 36 000 communes.
中：正确。法国大约有3.6万左右的市镇。

❌ D. Environ 50 000 - Faux. Il y a trop.
中：错误。数量过多。`
  },
  {
    id: "in0037",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Hôtel de Matignon ?",
    options: [
      "Résidence du président",
      "Siège du Sénat",
      "Résidence du Premier ministre", 
      "Tribunal"
    ],
    answer: 2,
    explanation: `❌ A. Résidence du président - Faux. Le président réside à l'Élysée.
中：错误。总统住在爱丽舍宫。

❌ B. Siège du Sénat - Faux. Le Sénat siège au Luxembourg.
中：错误。参议院在卢森堡宫。

✅ C. Résidence du Premier ministre - Correct. L'Hôtel de Matignon est la résidence officielle du Premier ministre.
中：正确。马蒂尼翁官邸是总理官邸。

❌ D. Tribunal - Faux. Ce n'est pas un tribunal.
中：错误。它不是法院。`
  },
  {
    id: "in0038",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Rôle du président ?",
    options: [
      "Voter les lois",
      "Garantir les institutions", 
      "Juger",
      "Diriger la commune"
    ],
    answer: 1,
    explanation: `❌ A. Voter les lois - Faux. Il promulgue, mais ne vote pas.
中：错误。总统签署法律，但不投票。

✅ B. Garantir les institutions - Correct. Le président garantit le fonctionnement des institutions et la Constitution.
中：正确。总统保障制度和宪法运行。

❌ C. Juger - Faux. Il ne juge pas.
中：错误。总统不审判。

❌ D. Diriger la commune - Faux. La commune est dirigée par le maire.
中：错误。市镇由市长管理。`
  },
  {
    id: "in0039",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Rôle du Premier ministre ?",
    options: [
      "Représenter l'UE",
      "Diriger le gouvernement",
      "Juger", 
      "Élire"
    ],
    answer: 1,
    explanation: `❌ A. Représenter l'UE - Faux. Il ne représente pas l'Union européenne.
中：错误。他不代表欧盟。

✅ B. Diriger le gouvernement - Correct. Il dirige l'action du gouvernement.
中：正确。他领导政府行动。

❌ C. Juger - Faux. Il n'a pas de rôle judiciaire.
中：错误。他不审判。

❌ D. Élire - Faux. Il ne fait pas d'élection.
中：错误。他不组织选举。`
  },
  {
    id: "in0040",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Chef du Gouvernement ?",
    options: [
      "Le président",
      "Le maire", 
      "Le Premier ministre",
      "Le préfet"
    ],
    answer: 2,
    explanation: `❌ A. Le président - Faux. Le chef du gouvernement est le Premier ministre.
中：错误。政府首脑是总理。

❌ B. Le maire - Faux.  Le préfet représente l’État dans un département, mais il ne fait pas partie du gouvernement.

中：错误。市长不领导政府，而是管理市镇。

✅ C. Le Premier ministre - Correct. Le Premier ministre est le chef du gouvernement.
中：正确。总理是政府首脑。

❌ D. Le préfet - Faux. Le préfet représente l’État dans un département, mais il ne fait pas partie du gouvernement.

中：错误。省长代表国家在省内行政，但不是政府成员。`

  },
  {
    id: "in0041",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est le rôle des députés ?",
    options: [
      "Juger",
      "Appliquer les lois",
      "Voter les lois", 
      "Diriger les communes"
    ],
    answer: 2,
    explanation: `❌ A. Juger - Faux. Ils ne jugent pas.
中：错误。他们不审判。

❌ B. Appliquer les lois - Faux. C'est l'exécutif.
中：错误。执行法律是行政权。

✅ C. Voter les lois - Correct. Les députés votent les lois à l'Assemblée nationale.
中：正确。议员在国民议会投票通过法律。

❌ D. Diriger les communes - Faux. Ils ne dirigent pas les communes.
中：错误。他们不管理市镇。`
  },
  {
    id: "in0042",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle mission spécifique a le Président de la République en matière militaire ?",
    options: [
      "Superviser l'éducation",
      "Commander les armées",
      "Diriger les collectivités territoriales", 
      "Contrôler la justice"
    ],
    answer: 1,
    explanation: `❌ A. Superviser l'éducation - Faux. Ce n'est pas militaire.
中：错误。与军事无关。

✅ B. Commander les armées - Correct. Le président est le chef des armées.
中：正确。总统是武装部队最高统帅。

❌ C. Diriger les collectivités territoriales - Faux. Ce n'est pas son rôle direct.
中：错误。不是其直接职责。

❌ D. Contrôler la justice - Faux. La justice est indépendante.
中：错误。司法独立。`
  },
  {
    id: "in0043",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel est le rôle du Premier ministre vis-à-vis des ministres ?",
    options: [
      "Les nommer directement",
      "Diriger et coordonner l'action du gouvernement",
      "Superviser les tribunaux", 
      "Organiser les élections"
    ],
    answer: 1,
    explanation: `❌ A. Les nommer directement - Faux. Les ministres sont nommés par le président, sur proposition du PM.
中：错误。部长由总统任命，总理提出建议。

✅ B. Diriger et coordonner l'action du gouvernement - Correct. Le PM coordonne le travail des ministres.
中：正确。总理领导并协调政府行动。

❌ C. Superviser les tribunaux - Faux. Les tribunaux sont indépendants.
中：错误。法院独立。

❌ D. Organiser les élections - Faux. Ce n'est pas son rôle.
中：错误。不是其职责。`
  },
  {
    id: "in0044",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle responsabilité partagée ont le Président et le Gouvernement ?",
    options: [
      "Appliquer les lois et gérer les politiques nationales",
      "Voter les lois", 
      "Juger les infractions pénales",
      "Élire les députés"
    ],
    answer: 0,
    explanation: `✅ A. Appliquer les lois et gérer les politiques nationales - Correct. Ils dirigent l'exécutif ensemble.
中：正确。他们共同执行法律并管理国家政策。

❌ B. Voter les lois - Faux. C'est le Parlement.
中：错误。由议会通过法律。

❌ C. Juger les infractions pénales - Faux. C'est le judiciaire.
中：错误。由司法机关审判。

❌ D. Élire les députés - Faux. Les députés sont élus par les citoyens.
中：错误。由公民选举。`
  },
  {
    id: "in0045",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle est la mission principale des juges administratifs ?",
    options: [
      "Punir les infractions pénales",
      "Contrôler la conformité des actions de l'État",
      "Superviser les écoles", 
      "Élire le Sénat"
    ],
    answer: 1,
    explanation: `❌ A. Punir les infractions pénales - Faux. C'est la justice pénale.
中：错误。刑事司法负责惩罚犯罪。

✅ B. Contrôler la conformité des actions de l'État - Correct. Les juges administratifs jugent les litiges entre l'État et les citoyens.
中：正确。行政法官审查国家行为是否合法。

❌ C. Superviser les écoles - Faux. Ce n'est pas leur rôle.
中：错误。不是他们的职责。

❌ D. Élire le Sénat - Faux. Le Sénat est élu indirectement.
中：错误。不是由法院选举。`
  },
  {
    id: "in0046",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel type de litige relève de la justice civile ?",
    options: [
      "Un conflit entre un citoyen et une administration",
      "Un conflit entre deux citoyens", 
      "Un vol dans un magasin",
      "Une fraude fiscale"
    ],
    answer: 1,
    explanation: `❌ A. Conflit entre un citoyen et une administration - Faux. C'est plutôt administratif.
中：错误。通常属于行政诉讼。

✅ B. Un conflit entre deux citoyens - Correct. La justice civile règle les litiges entre particuliers.
中：正确。民事司法处理公民间纠纷。

❌ C. Un vol dans un magasin - Faux. C'est pénal.
中：错误。属于刑事案件。

❌ D. Une fraude fiscale - Faux. C'est pénal ou administratif selon le cas.
中：错误。通常属于刑事或行政案件。`
  },
  {
    id: "in0047",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel type de litige relève de la justice pénale ?",
    options: [
      "Excès de vitesse en voiture",
      "Conflit entre voisins pour un mur mitoyen",
      "Litige sur le paiement des impôts", 
      "Gestion d'une école"
    ],
    answer: 0,
    explanation: `✅ A. Excès de vitesse en voiture - Correct. C'est une infraction pénale.
中：正确。超速属于刑事违法行为。

❌ B. Conflit entre voisins pour un mur mitoyen - Faux. C'est civil.
中：错误。属于民事纠纷。

❌ C. Litige sur le paiement des impôts - Faux. C'est administratif.
中：错误。属于行政纠纷。

❌ D. Gestion d'une école - Faux. Ce n'est pas pénal.
中：错误。不是刑事案件。`
  },
  {
    id: "in0048",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel type de litige relève de la justice administrative ?",
    options: [
      "Vol à l'étalage",
      "Conflit entre un citoyen et la CAF",
      "Divorce", 
      "Excès de vitesse"
    ],
    answer: 1,
    explanation: `❌ A. Vol à l'étalage - Faux. C'est pénal.
中：错误。属于刑事案件。

✅ B. Conflit entre un citoyen et la CAF - Correct. C'est un litige administratif.
中：正确。与行政机构的纠纷属于行政诉讼。

❌ C. Divorce - Faux. C'est civil.
中：错误。属于民事案件。

❌ D. Excès de vitesse - Faux. C'est pénal.
中：错误。属于刑事案件。`
  },
  {
    id: "in0049",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel est l'objectif principal de la décentralisation ?",
    options: [
      "Transférer certaines compétences de l'État aux collectivités territoriales",
      "Supprimer les départements", 
      "Concentrer le pouvoir à Paris",
      "Augmenter le rôle du Parlement uniquement"
    ],
    answer: 0,
    explanation: `✅ A. Transférer certaines compétences de l'État aux collectivités territoriales - Correct. La décentralisation donne plus de pouvoir aux régions, départements, communes.
中：正确。分权将部分国家职能下放给地方政府。

❌ B. Supprimer les départements - Faux. Ce n'est pas l'objectif.
中：错误。不是为了取消省。

❌ C. Concentrer le pouvoir à Paris - Faux. Au contraire, c'est pour le répartir.
中：错误。相反是分散权力。

❌ D. Augmenter le rôle du Parlement uniquement - Faux. Ce n'est pas l'objectif.
中：错误。不是只增强议会。`
  },
  {
    id: "in0050",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle collectivité territoriale est responsable de la gestion des collèges ?",
    options: [
      "La commune",
      "Le département",
      "La région", 
      "L'État"
    ],
    answer: 1,
    explanation: `❌ A. La commune - Faux. La commune gère l'école primaire.
中：错误。市镇负责小学。

✅ B. Le département - Correct. Les collèges sont gérés par le département.
中：正确。初中由省负责。

❌ C. La région - Faux. La région gère les lycées.
中：错误。大区负责高中。

❌ D. L'État - Faux. L'État ne gère pas directement.
中：错误。国家不直接管理。`
  },
  {
    id: "in0051",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle collectivité territoriale gère les lycées ?",
    options: [
      "La commune",
      "Le département", 
      "La région",
      "L'État"
    ],
    answer: 2,
    explanation: `❌ A. La commune - Faux. Les communes gèrent les écoles primaires.
中：错误。市镇管理小学。

❌ B. Le département - Faux. Les départements gèrent les collèges.
中：错误。省管理初中。

✅ C. La région - Correct. Les lycées sont gérés par la région.
中：正确。高中由大区管理。

❌ D. L'État - Faux. L'État finance et organise, mais ne gère pas directement.
中：错误。国家不直接管理。`
  },
  {
    id: "in0052",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle collectivité gère les écoles primaires et maternelles ?",
    options: [
      "La région",
      "Le département",
      "La commune", 
      "Le gouvernement"
    ],
    answer: 2,
    explanation: `❌ A. La région - Faux. La région ne gère pas les écoles primaires.
中：错误。大区不管理小学。

❌ B. Le département - Faux. Le département gère les collèges.
中：错误。省管理初中。

✅ C. La commune - Correct. Les communes gèrent les écoles primaires et maternelles.
中：正确。市镇管理小学和幼儿园。

❌ D. Le gouvernement - Faux. Le gouvernement n'assure pas la gestion directe.
中：错误。政府不直接管理。`
  },
  {
    id: "in0053",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle collectivité territoriale peut gérer les services de proximité comme les crèches et les écoles primaires ?",
    options: [
      "La commune",
      "Le département", 
      "La région",
      "Le Sénat"
    ],
    answer: 0,
    explanation: `✅ A. La commune - Correct. Les communes gèrent ces services de proximité.
中：正确。市镇负责托儿所和小学等基层服务。

❌ B. Le département - Faux. Le département gère l'action sociale et les collèges.
中：错误。省负责社会救助与初中。

❌ C. La région - Faux. La région gère les lycées.
中：错误。大区负责高中。

❌ D. Le Sénat - Faux. Le Sénat n'a pas ce rôle.
中：错误。参议院不负责这些服务。`
  },
  {
    id: "in0054",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Comment sont recrutés les juges et magistrats en France ?",
    options: [
      "Le président uniquement",
      "Par concours, indépendamment du pouvoir politique",
      "Le Parlement", 
      "Le Premier ministre"
    ],
    answer: 1,
    explanation: `❌ A. Le président uniquement - Faux. Il n'est pas seul à nommer.
中：错误。总统并非唯一任命者。

✅ B. Par concours, indépendamment du pouvoir politique - Correct. Les juges sont recrutés par concours et garantissent l'indépendance.
中：正确。法官通过考试选拔，保证司法独立。

❌ C. Le Parlement - Faux. Le Parlement ne nomme pas les juges.
中：错误。议会不任命法官。

❌ D. Le Premier ministre - Faux. Ce n’est pas le rôle du Premier ministre.
中：错误。不是总理职责。`
  },
  {
    id: "in0055",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel est le rôle principal de la justice pénale ?",
    options: [
      "Gérer les écoles",
      "Juger les infractions et punir les citoyens",
      "Élire les députés", 
      "Superviser les ministères"
    ],
    answer: 1,
    explanation: `❌ A. Gérer les écoles - Faux. Ce n'est pas son rôle.
中：错误。不是其职责。

✅ B. Juger les infractions et punir les citoyens - Correct. La justice pénale juge les crimes et délits.
中：正确。刑事司法审判犯罪并处罚。

❌ C. Élire les députés - Faux. Les députés sont élus par les citoyens.
中：错误。议员由公民选举。

❌ D. Superviser les ministères - Faux. C'est le rôle du gouvernement.
中：错误。政府监督部门。`
  },
  {
    id: "in0056",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelles sont les compétences principales d'un département ?",
    options: [
      "Gestion des collèges et action sociale",
      "Organisation des lycées", 
      "Définition des programmes scolaires",
      "Juger les conflits entre citoyens"
    ],
    answer: 0,
    explanation: `✅ A. Gestion des collèges et action sociale - Correct. Le département gère les collèges et l'action sociale.
中：正确。省管理初中和社会救助。

❌ B. Organisation des lycées - Faux. C'est la région.
中：错误。高中由大区管理。

❌ C. Définition des programmes scolaires - Faux. C'est l'État.
中：错误。课程由国家制定。

❌ D. Juger les conflits entre citoyens - Faux. C'est la justice civile.
中：错误。民事司法处理纠纷。`
  },
  {
    id: "in0057",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle collectivité territoriale gère principalement les lycées en France ?",
    options: [
      "La commune",
      "Le département",
      "La région", 
      "L'État central"
    ],
    answer: 2,
    explanation: `❌ A. La commune - Faux. Les communes gèrent les écoles primaires.
中：错误。市镇管理小学。

❌ B. Le département - Faux. Le département gère les collèges.
中：错误。省管理初中。

✅ C. La région - Correct. La région gère les lycées.
中：正确。大区管理高中。

❌ D. L'État central - Faux. L'État ne gère pas directement.
中：错误。国家不直接管理。`
  },
  {
    id: "in0058",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est le rôle du Parlement français ?",
    options: [
      "Appliquer les lois",
      "Proposer, négocier et voter les lois",
      "Contrôler les écoles", 
      "Nommer les juges"
    ],
    answer: 1,
    explanation: `❌ A. Appliquer les lois - Faux. L'exécutif applique les lois.
中：错误。执行法律是行政权。

✅ B. Proposer, négocier et voter les lois - Correct. Le Parlement débat et vote les lois.
中：正确。议会讨论并通过法律。

❌ C. Contrôler les écoles - Faux. Ce n'est pas son rôle direct.
中：错误。不是直接职责。

❌ D. Nommer les juges - Faux. La justice est indépendante.
中：错误。司法独立，不由议会任命。`
  },
  {
    id: "in0059",
    type: "carte multi",
    category: "Institutions",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Comment sont recrutés les juges et magistrats en France ?",
    options: [
      "Par le président de la République",
      "Par concours indépendant du pouvoir politique",
      "Par le Parlement", 
      "Par le Premier ministre"
    ],
    answer: 1,
    explanation: `❌ A. Par le président - Faux. Le président ne les recrute pas directement.
中：错误。总统不直接选拔。

✅ B. Par concours indépendant du pouvoir politique - Correct. Les juges sont recrutés par concours (École nationale de la magistrature).
中：正确。法官通过考试选拔，独立于政治权力。

❌ C. Par le Parlement - Faux. Le Parlement ne recrute pas les juges.
中：错误。议会不选拔法官。

❌ D. Par le Premier ministre - Faux. Ce n'est pas son rôle.
中：错误。不是总理职责。`
  },
  {
    id: "in0060",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est le rôle d'un sénateur ?",
    options: [
      "Diriger le gouvernement",
      "Appliquer les lois",
      "Voter les lois et représenter les collectivités territoriales", 
      "Rendre la justice"
    ],
    answer: 2,
    explanation: `❌ A. Diriger le gouvernement - Faux. Le gouvernement est dirigé par le Premier ministre.
中：错误。政府由总理领导。

❌ B. Appliquer les lois - Faux. C'est l'exécutif.
中：错误。行政权执行法律。

✅ C. Voter les lois et représenter les collectivités territoriales - Correct. Le Sénat vote les lois et représente les collectivités.
中：正确。参议院通过法律并代表地方政府。

❌ D. Rendre la justice - Faux. La justice est indépendante.
中：错误。司法独立。`
  },
  {
    id: "in0061",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Est-ce que le Parlement a tous les pouvoirs ?",
    options: [
      "Oui, il gouverne le pays",
      "Oui, il applique les lois", 
      "Non, le pouvoir est séparé entre l'exécutif, le législatif et le judiciaire",
      "Oui, il rend la justice"
    ],
    answer: 2,
    explanation: `❌ A. Oui, il gouverne le pays - Faux. Il ne gouverne pas seul.
中：错误。议会不单独治理国家。

❌ B. Oui, il applique les lois - Faux. C'est l'exécutif.
中：错误。行政权执行法律。

✅ C. Non, le pouvoir est séparé entre l'exécutif, le législatif et le judiciaire - Correct. Trois pouvoirs distincts.
中：正确。三权分立。

❌ D. Oui, il rend la justice - Faux. C'est le judiciaire.
中：错误。司法机关审判。`
  },
  {
    id: "in0062",
    type: "carte multi",
    category: "Institutions",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Est-ce que le juge a tous les pouvoirs ?",
    options: [
      "Oui, il dirige l'État",
      "Oui, il vote les lois", 
      "Non, il exerce seulement le pouvoir judiciaire",
      "Oui, il décide de la politique du pays"
    ],
    answer: 2,
    explanation: `❌ A. Oui, il dirige l'État - Faux. Le juge ne dirige pas l'État.
中：错误。法官不治理国家。

❌ B. Oui, il vote les lois - Faux. Il n'élabore pas les lois.
中：错误。他不通过法律。

✅ C. Non, il exerce seulement le pouvoir judiciaire - Correct. Le juge fait partie du pouvoir judiciaire uniquement.
中：正确。法官只行使司法权。

❌ D. Oui, il décide de la politique du pays - Faux. La politique est décidée par l'exécutif et le législatif.
中：错误。政策由行政与立法决定。`
  },

  {
    id: "ue0001",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Combien d'États font partie de l'UE en 2025 ?",
    options: [
      "26",
      "27",
      "28",
      "30"
    ],
    answer: 1, // B
    explanation: `❌ A. 26 - Faux. En 2025, l'UE compte 27 États membres.
中：错误。2025年欧盟有27个成员国。

✅ B. 27 - Correct ! En 2025, l'Union européenne compte 27 États membres.
中：正确。2025年欧盟共有27个成员国。

❌ C. 28 - Faux. 28 était le nombre avant le Brexit (quand le Royaume-Uni était encore membre).
中：错误。28是英国脱欧前的数量。

❌ D. 30 - Faux. L'UE n'a pas 30 membres en 2025.
中：错误。2025年欧盟成员国不可能达到30个。`
  },
  {
    id: "ue0002",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel État n'est pas membre de l'UE ?",
    options: [
      "Espagne",
      "Allemagne",
      "Suisse",
      "Italie"
    ],
    answer: 2, // C
    explanation: `❌ A. Espagne - Faux. L'Espagne est membre de l'UE depuis 1986.
中：错误。西班牙1986年加入欧盟。

❌ B. Allemagne - Faux. L'Allemagne est membre fondateur (via la RFA).
中：错误。德国是欧盟创始成员（通过西德）。

✅ C. Suisse - Correct ! La Suisse n'est pas membre de l'Union européenne.
中：正确。瑞士不是欧盟成员国。

❌ D. Italie - Faux. L'Italie est membre fondateur depuis 1957.
中：错误。意大利是创始成员国之一（1957年）。`
  },
  {
    id: "ue0003",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Pays fondateur de l'UE ?",
    options: [
      "Espagne",
      "France",
      "Pologne",
      "Suède"
    ],
    answer: 1, // B
    explanation: `❌ A. Espagne - Faux. L'Espagne a rejoint l'UE en 1986.
中：错误。西班牙1986年加入欧盟。

✅ B. France - Correct ! La France est un pays fondateur (Traité de Rome 1957).
中：正确。法国是创始国（1957年罗马条约）。

❌ C. Pologne - Faux. La Pologne a rejoint l'UE en 2004.
中：错误。波兰2004年加入欧盟。

❌ D. Suède - Faux. La Suède a rejoint l'UE en 1995.
中：错误。瑞典1995年加入欧盟。`
  },
  {
    id: "ue0004",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Monnaie utilisée en France ?",
    options: [
      "Dollar",
      "Franc",
      "Euro",
      "Livre"
    ],
    answer: 2, // C
    explanation: `❌ A. Dollar - Faux. Le dollar est la monnaie des États-Unis.
中：错误。美元是美国货币。

❌ B. Franc - Faux. Le franc français a été remplacé par l'euro en 2002.
中：错误。法郎2002年被欧元取代。

✅ C. Euro - Correct ! En France, la monnaie officielle est l'euro.
中：正确。法国官方货币是欧元。

❌ D. Livre - Faux. La livre est la monnaie du Royaume-Uni.
中：错误。英镑是英国货币。`
  },
  {
    id: "ue0005",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Journée de l'Europe ?",
    options: [
      "1er mai",
      "8 mai",
      "9 mai",
      "14 juillet"
    ],
    answer: 2, // C
    explanation: `❌ A. 1er mai - Faux. Le 1er mai est la Fête du Travail.
中：错误。5月1日是劳动节。

❌ B. 8 mai - Faux. Le 8 mai commémore la fin de la Seconde Guerre mondiale en Europe.
中：错误。5月8日是二战胜利纪念日。

✅ C. 9 mai - Correct ! La Journée de l'Europe est célébrée le 9 mai, date de la Déclaration Schuman (1950).
中：正确。欧洲日是5月9日，纪念1950年舒曼宣言。

❌ D. 14 juillet - Faux. Le 14 juillet est la fête nationale française.
中：错误。7月14日是法国国庆日。`
  },
  {
    id: "ue0006",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Depuis quand l'euro est monnaie unique ?",
    options: [
      "1999",
      "2000",
      "2002",
      "2005"
    ],
    answer: 0, // A
    explanation: `✅ A. 1999 - Correct ! L'euro est monnaie unique depuis 1999, même si les billets et pièces sont entrés en circulation en 2002.
中：正确。欧元自1999年成为统一货币，2002年开始流通。

❌ B. 2000 - Faux. 2000 n'est pas une date clé pour l'euro.
中：错误。2000年不是欧元关键年份。

❌ C. 2002 - Faux. 2002 marque l'entrée en circulation des billets et pièces, pas la création de la monnaie unique.
中：错误。2002年是欧元流通年，但不是统一货币开始年份。

❌ D. 2005 - Faux. 2005 est trop tard.
中：错误。2005年不是欧元开始年份。`
  },
  {
    id: "ue0007",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Traité fondateur de l'UE ?",
    options: [
      "Traité de Rome",
      "Traité de Lisbonne",
      "Traité de Maastricht",
      "Traité de Paris"
    ],
    answer: 0, // A
    explanation: `✅ A. Traité de Rome - Correct ! Le traité de Rome (1957) a créé la CEE, ancêtre de l'UE.
中：正确。罗马条约（1957）创建欧洲经济共同体，是欧盟前身。

❌ B. Traité de Lisbonne - Faux. Le traité de Lisbonne (2007) a réformé l'UE, mais n'est pas fondateur.
中：错误。里斯本条约是改革条约，不是创始条约。

❌ C. Traité de Maastricht - Faux. Le traité de Maastricht (1992) a créé l'UE moderne, mais pas le traité fondateur.
中：错误。马斯特里赫特条约建立现代欧盟，但不是创始条约。

❌ D. Traité de Paris - Faux. Le traité de Paris (1951) a créé la CECA, première étape avant la CEE.
中：错误。巴黎条约创建煤钢共同体，是前奏。`
  },
  {
    id: "ue0008",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "État ayant quitté l'UE en 2020 ?",
    options: [
      "Norvège",
      "Royaume-Uni",
      "Suisse",
      "Islande"
    ],
    answer: 1, // B
    explanation: `❌ A. Norvège - Faux. La Norvège n'a jamais été membre de l'UE.
中：错误。挪威从未加入欧盟。

✅ B. Royaume-Uni - Correct ! Le Royaume-Uni a quitté l'UE en 2020 (Brexit).
中：正确。英国2020年脱欧。

❌ C. Suisse - Faux. La Suisse n'a jamais été membre de l'UE.
中：错误。瑞士从未加入欧盟。

❌ D. Islande - Faux. L'Islande n'a jamais été membre de l'UE.
中：错误。冰岛从未加入欧盟。`
  },
  {
    id: "ue0009",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Devise de l'UE ?",
    options: [
      "Liberté, égalité, fraternité",
      "Unité dans la diversité",
      "Paix et travail",
      "Europe d'abord"
    ],
    answer: 1, // B
    explanation: `❌ A. Liberté, égalité, fraternité - Faux. C'est la devise de la France.
中：错误。法国格言。

✅ B. Unité dans la diversité - Correct ! La devise de l'UE est « Unité dans la diversité ».
中：正确。欧盟格言"多样中的统一"。

❌ C. Paix et travail - Faux. Ce n'est pas une devise officielle de l'UE.
中：错误。不是欧盟官方格言。

❌ D. Europe d'abord - Faux. Ce n'est pas la devise de l'UE.
中：错误。不是欧盟格言。`
  },
  {
    id: "ue0010",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Hymne de l'UE ?",
    options: [
      "La Marseillaise",
      "L'Ode à la joie",
      "L'Internationale",
      "God Save Europe"
    ],
    answer: 1, // B
    explanation: `❌ A. La Marseillaise - Faux. Hymne national français.
中：错误。法国国歌。

✅ B. L'Ode à la joie - Correct ! L'hymne de l'UE est « L'Ode à la joie » de Beethoven.
中：正确。欧盟国歌是贝多芬的《欢乐颂》。

❌ C. L'Internationale - Faux. Hymne du mouvement socialiste.
中：错误。社会主义运动歌曲。

❌ D. God Save Europe - Faux. N'existe pas comme hymne officiel.
中：错误。不存在官方版本。`
  },
  {
    id: "ue0011",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Drapeau européen composé de :",
    options: [
      "12 étoiles",
      "27 étoiles",
      "15 étoiles",
      "Cercles"
    ],
    answer: 0, // A
    explanation: `✅ A. 12 étoiles - Correct ! Le drapeau européen comporte 12 étoiles en cercle.
中：正确。欧盟旗帜由12颗星组成圆环。

❌ B. 27 étoiles - Faux. Le nombre d'étoiles est symbolique et ne correspond pas au nombre de pays.
中：错误。星星数量象征意义，不等于国家数量。

❌ C. 15 étoiles - Faux. Le drapeau comporte 12 étoiles.
中：错误。旗帜是12颗星。

❌ D. Cercles - Faux. Le drapeau est composé d'étoiles en cercle, pas de cercles seuls.
中：错误。不是圆圈组成。`
  },
  {
    id: "ue0012",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Couleur du drapeau européen ?",
    options: [
      "Rouge",
      "Blanc",
      "Bleu",
      "Vert"
    ],
    answer: 2, // C
    explanation: `❌ A. Rouge - Faux. Le drapeau européen n'est pas rouge.
中：错误。欧盟旗不是红色。

❌ B. Blanc - Faux. Le fond n'est pas blanc.
中：错误。底色不是白色。

✅ C. Bleu - Correct ! Le drapeau européen est bleu avec des étoiles dorées.
中：正确。欧盟旗是蓝底金星。

❌ D. Vert - Faux. Le drapeau européen n'est pas vert.
中：错误。欧盟旗不是绿色。`
  },
  {
    id: "ue0013",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Année du traité de Maastricht ?",
    options: [
      "1957",
      "1986",
      "1992",
      "2002"
    ],
    answer: 2, // C
    explanation: `❌ A. 1957 - Faux. 1957 correspond au traité de Rome.
中：错误。1957年是罗马条约。

❌ B. 1986 - Faux. 1986 correspond à l'Acte unique européen.
中：错误。1986年是欧洲单一法案。

✅ C. 1992 - Correct ! Le traité de Maastricht a été signé en 1992.
中：正确。马斯特里赫特条约签署于1992年。

❌ D. 2002 - Faux. 2002 correspond à l'entrée en circulation de l'euro.
中：错误。2002年是欧元流通。`
  },
  {
    id: "ue0014",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Siège du Parlement européen ?",
    options: [
      "Bruxelles",
      "Luxembourg",
      "Strasbourg",
      "Paris"
    ],
    answer: 2, // C
    explanation: `❌ A. Bruxelles - Faux. Bruxelles accueille des sessions, mais le siège officiel est à Strasbourg.
中：错误。布鲁塞尔有会议，但正式总部在斯特拉斯堡。

❌ B. Luxembourg - Faux. Le secrétariat est à Luxembourg, mais le siège principal est à Strasbourg.
中：错误。卢森堡是秘书处所在地，但不是主要总部。

✅ C. Strasbourg - Correct ! Le Parlement européen siège officiellement à Strasbourg.
中：正确。欧洲议会正式总部在斯特拉斯堡。

❌ D. Paris - Faux. Paris n'est pas un siège officiel du Parlement européen.
中：错误。巴黎不是欧洲议会总部。`
  },
  {
    id: "ue0015",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Siège de la Commission européenne ?",
    options: [
      "Paris",
      "Strasbourg",
      "Bruxelles",
      "Rome"
    ],
    answer: 2, // C
    explanation: `❌ A. Paris - Faux. Paris n'accueille pas la Commission européenne.
中：错误。巴黎不是欧盟委员会总部。

❌ B. Strasbourg - Faux. Strasbourg est le siège du Parlement, pas de la Commission.
中：错误。斯特拉斯堡是议会总部。

✅ C. Bruxelles - Correct ! La Commission européenne a son siège à Bruxelles.
中：正确。欧盟委员会总部在布鲁塞尔。

❌ D. Rome - Faux. Rome n'est pas le siège de la Commission européenne.
中：错误。罗马不是委员会总部。`
  },
  {
    id: "ue0016",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quand a été créée la CECA ?",
    options: [
      "1951",
      "1957",
      "1962",
      "1992"
    ],
    answer: 0, // A
    explanation: `✅ A. 1951 - Correct ! La CECA a été créée en 1951 (Traité de Paris).
中：正确。欧洲煤钢共同体成立于1951年（巴黎条约）。

❌ B. 1957 - Faux. 1957 est l'année du traité de Rome (CEE).
中：错误。1957年是罗马条约。

❌ C. 1962 - Faux. 1962 n'est pas une date liée à la création de la CECA.
中：错误。1962年与CECA无关。

❌ D. 1992 - Faux. 1992 est l'année du traité de Maastricht.
中：错误。1992年是马斯特里赫特条约。`
  },
  {
    id: "ue0017",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "Objectif principal de la CEE en 1957 ?",
    options: [
      "Créer une armée commune",
      "Créer un marché commun",
      "Lutter contre le changement climatique",
      "Harmoniser les passeports"
    ],
    answer: 1, // B
    explanation: `❌ A. Créer une armée commune - Faux. La CEE était économique, pas militaire.
中：错误。CEE是经济共同体，不是军事联盟。

✅ B. Créer un marché commun - Correct ! L'objectif principal était de créer un marché commun avec libre circulation des biens, services, capitaux et personnes.
中：正确。主要目标是建立共同市场，实现商品、服务、资本和人员自由流动。

❌ C. Lutter contre le changement climatique - Faux. Ce n'était pas une priorité en 1957.
中：错误。1957年气候变化不是重点。

❌ D. Harmoniser les passeports - Faux. La priorité était économique, pas administrative.
中：错误。主要目标是经济整合，不是统一护照。`
  },
  {
    id: "ue0018",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "La libre circulation des personnes permet :",
    options: [
      "De voyager seulement pour le travail",
      "De se déplacer librement dans un autre pays de l'UE",
      "De voter dans tous les pays du monde",
      "De résider uniquement dans son pays"
    ],
    answer: 1, // B
    explanation: `❌ A. De voyager seulement pour le travail - Faux. La libre circulation s'applique aussi au tourisme, études, etc.
中：错误。也适用于旅游、学习等。

✅ B. De se déplacer librement dans un autre pays de l'UE - Correct ! La libre circulation permet de se déplacer librement dans les pays de l'UE.
中：正确。允许在欧盟国家自由移动。

❌ C. De voter dans tous les pays du monde - Faux. Le droit de vote dépend du pays et de la citoyenneté.
中：错误。投票权取决于国家和国籍。

❌ D. De résider uniquement dans son pays - Faux. La libre circulation permet de résider dans un autre pays de l'UE.
中：错误。允许在欧盟其他国家居住。`
  },
  {
    id: "ue0019",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Le traité de Lisbonne date de :",
    options: [
      "1992",
      "2000",
      "2007",
      "2013"
    ],
    answer: 2, // C
    explanation: `❌ A. 1992 - Faux. 1992 est l'année du traité de Maastricht.
中：错误。1992年是马斯特里赫特条约。

❌ B. 2000 - Faux. 2000 n'est pas l'année du traité de Lisbonne.
中：错误。2000年不是里斯本条约年份。

✅ C. 2007 - Correct ! Le traité de Lisbonne a été signé en 2007.
中：正确。里斯本条约签署于2007年。

❌ D. 2013 - Faux. 2013 est trop tard.
中：错误。2013年不是里斯本条约年份。`
  },
  {
    id: "ue0020",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "Quel pays a rejoint l'UE en 1981 ?",
    options: [
      "Grèce",
      "Espagne",
      "Portugal",
      "Suède"
    ],
    answer: 0, // A
    explanation: `✅ A. Grèce - Correct ! La Grèce a rejoint l'UE en 1981.
中：正确。希腊于1981年加入欧盟。

❌ B. Espagne - Faux. L'Espagne a rejoint en 1986.
中：错误。西班牙1986年加入。

❌ C. Portugal - Faux. Le Portugal a rejoint en 1986.
中：错误。葡萄牙1986年加入。

❌ D. Suède - Faux. La Suède a rejoint en 1995.
中：错误。瑞典1995年加入。`
  },
  {
    id: "ue0021",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "Quels pays ont intégré l'UE en 1986 ?",
    options: [
      "Espagne et Portugal",
      "Danemark et Irlande",
      "Chypre et Malte",
      "Bulgarie et Roumanie"
    ],
    answer: 0, // A
    explanation: `✅ A. Espagne et Portugal - Correct ! L'Espagne et le Portugal ont rejoint l'UE en 1986.
中：正确。西班牙和葡萄牙于1986年加入欧盟。

❌ B. Danemark et Irlande - Faux. Ils ont rejoint en 1973.
中：错误。丹麦和爱尔兰是1973年加入。

❌ C. Chypre et Malte - Faux. Ils ont rejoint en 2004.
中：错误。塞浦路斯和马耳他是2004年加入。

❌ D. Bulgarie et Roumanie - Faux. Ils ont rejoint en 2007.
中：错误。保加利亚和罗马尼亚是2007年加入。`
  },
  {
    id: "ue0022",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Année de sortie du Royaume-Uni de l'UE :",
    options: [
      "2016",
      "2018",
      "2020",
      "2022"
    ],
    answer: 2, // C
    explanation: `❌ A. 2016 - Faux. 2016 est l'année du référendum (Brexit).
中：错误。2016年是脱欧公投年份。

❌ B. 2018 - Faux. C'est une étape de négociation, pas la sortie.
中：错误。2018年只是谈判阶段。

✅ C. 2020 - Correct ! Le Royaume-Uni a quitté l'UE en 2020.
中：正确。英国于2020年脱欧。

❌ D. 2022 - Faux. 2022 n'est pas l'année officielle de la sortie.
中：错误。2022年不是脱欧年份。`
  },
  {
    id: "ue0023",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Signification du cercle d'étoiles du drapeau :",
    options: [
      "La paix et la justice",
      "L'unité, la solidarité et l'harmonie",
      "La liberté et le travail",
      "Le progrès scientifique"
    ],
    answer: 1, // B
    explanation: `❌ A. La paix et la justice - Faux. Ce n'est pas la signification officielle du cercle.
中：错误。并非官方含义。

✅ B. L'unité, la solidarité et l'harmonie - Correct ! Les étoiles forment un cercle symbolisant l'unité, la solidarité et l'harmonie entre les peuples d'Europe.
中：正确。星环象征欧洲人民的团结、团结与和谐。

❌ C. La liberté et le travail - Faux. Ce n'est pas la signification officielle.
中：错误。不是官方含义。

❌ D. Le progrès scientifique - Faux. Ce n'est pas la signification officielle.
中：错误。不是官方含义。`
  },
  {
    id: "ue0024",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "Année où le drapeau devient emblème officiel de la CEE :",
    options: [
      "1955",
      "1985",
      "1986",
      "1992"
    ],
    answer: 2, // C
    explanation: `❌ A. 1955 - Faux. À cette époque, le drapeau n'était pas encore adopté.
中：错误。1955年尚未采用该旗帜。

❌ B. 1985 - Faux. Le drapeau a été adopté en 1985, mais il devient emblème officiel l'année suivante.
中：错误。1985年旗帜被采用，但正式成为标志在下一年。

✅ C. 1986 - Correct ! Le drapeau devient emblème officiel de la CEE en 1986.
中：正确。1986年欧共体正式采用欧盟旗帜为标志。

❌ D. 1992 - Faux. 1992 est l'année du traité de Maastricht.
中：错误。1992年是马斯特里赫特条约。`
  },
  {
    id: "ue0025",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Origine de l'hymne européen :",
    options: [
      "Beethoven",
      "Mozart",
      "Bach",
      "Chopin"
    ],
    answer: 0, // A
    explanation: `✅ A. Beethoven - Correct ! L'hymne européen est basé sur « Ode à la joie » de Beethoven.
中：正确。欧盟国歌基于贝多芬的《欢乐颂》。

❌ B. Mozart - Faux. Mozart n'est pas l'auteur de l'hymne.
中：错误。莫扎特不是该国歌作者。

❌ C. Bach - Faux. Bach n'est pas l'auteur de l'hymne.
中：错误。巴赫不是该国歌作者。

❌ D. Chopin - Faux. Chopin n'est pas l'auteur de l'hymne.
中：错误。肖邦不是该国歌作者。`
  },
  {
    id: "ue0026",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "Année où \"Ode à la joie\" devient symbole de l'UE :",
    options: [
      "1972",
      "1985",
      "1992",
      "2000"
    ],
    answer: 1, // B
    explanation: `❌ A. 1972 - Faux. Ce n'est pas l'année où il devient symbole de l'UE.
中：错误。1972年并非成为欧盟象征的年份。

✅ B. 1985 - Correct ! En 1985, « Ode à la joie » est adoptée comme symbole européen.
中：正确。1985年《欢乐颂》被采纳为欧洲象征。

❌ C. 1992 - Faux. 1992 est le traité de Maastricht.
中：错误。1992年是马斯特里赫特条约。

❌ D. 2000 - Faux.  L’an 2000 n’est pas l’année symbolique de l’adoption.

中：错误。2000年不是采纳年份。`
  },
  {
    id: "ue0027",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "Devise de l'UE adoptée en :",
    options: [
      "1985",
      "1992",
      "2000",
      "2007"
    ],
    answer: 2, // C
    explanation: `❌ A. 1985 - Faux. 1985 est l'année du drapeau et de l'hymne, pas de la devise.
中：错误。1985年是旗帜和国歌年份，不是格言。

❌ B. 1992 - Faux. 1992 est le traité de Maastricht, pas l'adoption de la devise.
中：错误。1992年是马斯特里赫特条约。

✅ C. 2000 - Correct ! La devise « Unité dans la diversité » est adoptée en 2000.
中：正确。2000年采纳格言"多样中的统一"。

❌ D. 2007 - Faux. L’année 2007 est celle du traité de Lisbonne.
中：错误。2007年是里斯本条约年份。`
  },
  {
    id: "ue0028",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Journée de l'Europe célèbre :",
    options: [
      "Déclaration Schuman",
      "Traité de Rome",
      "Traité de Maastricht",
      "Création de l'euro"
    ],
    answer: 0, // A
    explanation: `✅ A. Déclaration Schuman - Correct ! La Journée de l'Europe célèbre la Déclaration Schuman du 9 mai 1950.
中：正确。欧洲日纪念1950年5月9日舒曼宣言。

❌ B. Traité de Rome - Faux. Le traité de Rome est une étape importante, mais pas la date célébrée.
中：错误。罗马条约重要，但不是欧洲日纪念日期。

❌ C. Traité de Maastricht - Faux. Le traité de Maastricht n’est pas l’événement commémoré par la Journée de l’Europe.
中：错误。马斯特里赫特条约不是欧洲日纪念事件。

❌ D. Création de l'euro - Faux. La création de l’euro n’est pas l’événement commémoré par la Journée de l’Europe.
中：错误。欧元创建不是欧洲日纪念事件。`
  },
  {
    id: "ue0029",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Les valeurs de l'UE incluent :",
    options: [
      "Unité et prospérité",
      "Liberté, démocratie, respect des droits humains, paix, solidarité",
      "Croissance économique et armée commune",
      "Aucune des réponses"
    ],
    answer: 1, // B
    explanation: `❌ A. Unité et prospérité - Faux. L'unité et la prospérité sont des objectifs, mais pas les valeurs fondamentales définies.
中：错误。团结与繁荣是目标，但不是欧盟基本价值。

✅ B. Liberté, paix et solidarité - Correct ! Les valeurs de l'UE incluent la liberté, la démocratie, la paix, la solidarité et le respect des droits humains.
中：正确。欧盟价值包括自由、民主、和平、团结和尊重人权。

❌ C. Croissance économique et armée commune - Faux. La croissance est un objectif, et l'armée commune n'est pas une valeur.
中：错误。增长是目标，欧盟没有共同军队。

❌ D. Aucune des réponses - Faux. La bonne réponse est B.
中：错误。正确答案是B。`
  },
  {
    id: "ue0030",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Les pays fondateurs de la CEE en 1957 :",
    options: [
      "Allemagne, France, Italie, Belgique, Luxembourg, Pays-Bas",
      "Allemagne, France, Espagne, Italie, Luxembourg, Portugal",
      "Allemagne, Belgique, Pologne, France, Italie, Pays-Bas",
      "Allemagne, France, Suède, Italie, Luxembourg, Pays-Bas"
    ],
    answer: 0, // A
    explanation: `✅ A. Allemagne, France, Italie, Belgique, Luxembourg, Pays-Bas - Correct ! Ces six pays ont fondé la CEE en 1957 (Traité de Rome).
中：正确。1957年罗马条约的创始国为德、法、意、比、卢、荷。

❌ B. Allemagne, France, Espagne, Italie, Luxembourg, Portugal - Faux. Espagne et Portugal ont rejoint en 1986, pas fondateurs.
中：错误。西班牙和葡萄牙1986年加入，不是创始国。

❌ C. Allemagne, Belgique, Pologne, France, Italie, Pays-Bas - Faux. La Pologne a rejoint en 2004.
中：错误。波兰2004年加入。

❌ D. Allemagne, France, Suède, Italie, Luxembourg, Pays-Bas - Faux. La Suède a rejoint en 1995.
中：错误。瑞典1995年加入。`
  },
  {
    id: "ue0031",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Objectif ajouté par le traité de Lisbonne :",
    options: [
      "Union militaire",
      "Lutte contre le changement climatique",
      "Libre circulation des personnes",
      "Création de l'euro"
    ],
    answer: 1, // B
    explanation: `❌ A. Union militaire - Faux. Le traité de Lisbonne n'a pas créé une armée européenne.
中：错误。里斯本条约没有创建欧盟军队。

✅ B. Lutte contre le changement climatique - Correct ! Le traité de Lisbonne a inscrit la lutte contre le changement climatique dans les objectifs de l'UE.
中：正确。里斯本条约将气候变化列入欧盟目标之一。

❌ C. Libre circulation des personnes - Faux. Elle existait déjà dans l'UE.
中：错误。人员自由流动已存在。

❌ D. Création de l'euro - Faux. L'euro a été créé avant 2007.
中：错误。欧元早于2007年出现。`
  },
  {
    id: "ue0032",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Année de création de la CEEA :",
    options: [
      "1951",
      "1992",
      "1957",
      "2007"
    ],
    answer: 2, // C
    explanation: `❌ A. 1951 - Faux. 1951 correspond à la CECA, pas la CEEA.
中：错误。1951年是煤钢共同体。

❌ B. 1992 - Faux. 1992 correspond au traité de Maastrichtt, qui a créé l'Union européenne et préparé l'euro.
中：错误。1992年是马斯特里赫特条约年份建立了欧盟并为欧元奠定基础。

✅ C. 1957 - Correct ! La CEEA (Communauté européenne de l'énergie atomique) a été créée en 1957, mais en tant qu'institution, elle est souvent associée à la CEE ; ici l'année correcte est 1957.
中：正确。欧共体核能共同体（Euratom）创建于1957年，与CEE同时签署。

❌ D. 2007 - Faux. 2007 est le traité de Lisbonne.
中：错误。2007年是里斯本条约。`
  },
  {
    id: "ue0033",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Pays membre de l'UE mais non fondateur :",
    options: [
      "France",
      "Allemagne",
      "Grèce",
      "Italie"
    ],
    answer: 2, // C
    explanation: `❌ A. France - Faux. La France est un pays fondateur.
中：错误。法国是创始国。

❌ B. Allemagne - Faux. L'Allemagne est un pays fondateur (RFA).
中：错误。德国是创始国。

✅ C. Grèce - Correct ! La Grèce a rejoint en 1981, donc non fondatrice.
中：正确。希腊1981年加入，不是创始国。

❌ D. Italie - Faux. L'Italie est un pays fondateur.
中：错误。意大利是创始国。`
  },
  {
    id: "ue0034",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Symboles de l'UE :",
    options: [
      "Drapeau, hymne, devise",
      "Armée, budget commun, passeports",
      "Traités et parlement uniquement",
      "Aucun symbole"
    ],
    answer: 0, // A
    explanation: `✅ A. Drapeau, hymne, devise - Correct ! Les symboles de l'UE sont le drapeau, l'hymne et la devise.
中：正确。欧盟象征包括旗帜、国歌和格言。

❌ B. Armée, budget commun, passeports - Faux. Ce ne sont pas des symboles officiels.
中：错误。不是官方象征。

❌ C. Traités et parlement uniquement - Faux. Ce sont des institutions/accords, pas des symboles.
中：错误。是机构/条约，不是象征。

❌ D. Aucun symbole - Faux. L'UE a des symboles officiels.
中：错误。欧盟有官方象征。`
  },
  {
    id: "ue0035",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Couleurs du drapeau européen :",
    options: [
      "Bleu et blanc",
      "Bleu et jaune",
      "Rouge et blanc",
      "Bleu et rouge"
    ],
    answer: 1, // B
    explanation: `❌ A. Bleu et blanc - Faux. Les étoiles sont dorées, pas blanches.
中：错误。星星是金色，不是白色。

✅ B. Bleu et jaune - Correct ! Le drapeau européen est bleu avec des étoiles jaunes (dorées).
中：正确。欧盟旗是蓝底金星。

❌ C. Rouge et blanc - Faux. Ce n'est pas la couleur du drapeau.
中：错误。不是欧盟旗颜色。

❌ D. Bleu et rouge - Faux. Ce n'est pas la couleur du drapeau.
中：错误。不是欧盟旗颜色。`
  },
  {
    id: "ue0036",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Nombre d'étoiles sur le drapeau européen :",
    options: [
      "6",
      "12",
      "27",
      "28"
    ],
    answer: 1, // B
    explanation: `❌ A. 6 - Faux. Le drapeau comporte 12 étoiles.
中：错误。旗帜上有12颗星。

✅ B. 12 - Correct ! Il y a 12 étoiles sur le drapeau européen.
中：正确。欧盟旗有12颗星。

❌ C. 27 - Faux. Le nombre d'étoiles n'est pas lié au nombre d'États.
中：错误。星数与成员国数量无关。

❌ D. 28 - Faux. 12 étoiles, pas 28.
中：错误。不是28颗星。`
  },
  {
    id: "ue0037",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Signification de la devise :",
    options: [
      "Encourager l'uniformité",
      "Rassembler les peuples en respectant leur diversité",
      "Créer une armée européenne",
      "Créer un marché unique"
    ],
    answer: 1, // B
    explanation: `❌ A. Encourager l'uniformité - Faux. La devise valorise la diversité, pas l'uniformité.
中：错误。格言强调多样性，不是统一化。

✅ B. Rassembler les peuples en respectant leur diversité - Correct ! « Unité dans la diversité » signifie rassembler tout en respectant les différences culturelles.
中：正确。"多样中的统一"表示在尊重差异的基础上团结。

❌ C. Créer une armée européenne - Faux. Ce n'est pas la signification de la devise.
中：错误。格言不是关于军队。

❌ D. Créer un marché unique - Faux. Le marché unique est un objectif économique, pas la signification de la devise.
中：错误。市场一体化是经济目标，不是格言含义。`
  },
  {
    id: "ue0038",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Les citoyens votent aux élections européennes pour :",
    options: [
      "Le président de la Commission",
      "Les députés européens",
      "Le Conseil européen",
      "La Cour de Justice"
    ],
    answer: 1, // B
    explanation: `❌ A. Le président de la Commission - Faux. Le président est proposé par le Conseil et élu par le Parlement.
中：错误。委员会主席由理事会提名，议会选举。

✅ B. Les députés européens - Correct ! Les citoyens élisent les députés européens.
中：正确。公民选举欧洲议会议员。

❌ C. Le Conseil européen - Faux. Les membres du Conseil sont les chefs d'État/gouvernement.
中：错误。欧洲理事会由国家元首/政府首脑组成。

❌ D. La Cour de Justice - Faux. Les juges ne sont pas élus par les citoyens.
中：错误。法官非公民选举产生。`
  },
  {
    id: "ue0039",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Nombre d'eurodéputés pour la France depuis 2024 :",
    options: [
      "72",
      "81",
      "79",
      "85"
    ],
    answer: 2, // C
    explanation: `❌ A. 72 - Faux. Ce nombre était valable avant la répartition actuelle.
中：错误。该数字不是现行席位。

❌ B. 81 - Faux. 81 n’est pas le nombre correct de sièges pour la France. 
中：错误。81不是正确席位数。

✅ C. 79 - Correct ! Depuis 2024, la France dispose de 79 députés européens.
中：正确。自2024年起法国有79名欧洲议会议员。

❌ D. 85 - Faux. 85 n’est pas le nombre correct de sièges pour la France. 

中：错误。85不是正确席位数。`
  },
  {
    id: "ue0040",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Fréquence des élections européennes :",
    options: [
      "Tous les 3 ans",
      "Tous les 4 ans",
      "Tous les 5 ans",
      "Tous les 6 ans"
    ],
    answer: 2, // C
    explanation: `❌ A. Tous les 3 ans - Faux.
中：错误。

❌ B. Tous les 4 ans - Faux.
中：错误。

✅ C. Tous les 5 ans - Correct ! Les élections européennes ont lieu tous les 5 ans.
中：正确。欧洲议会选举每5年一次。

❌ D. Tous les 6 ans - Faux.
中：错误。`
  },
  {
    id: "ue0041",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Âge minimum en France pour voter aux élections européennes :",
    options: [
      "16 ans",
      "18 ans",
      "20 ans",
      "21 ans"
    ],
    answer: 1, // B
    explanation: `❌ A. 16 ans - Faux.
中：错误。

✅ B. 18 ans - Correct ! L'âge minimum est 18 ans dans la plupart des pays de l'UE (sauf quelques exceptions pour le vote local).
中：正确。欧盟大多数国家投票年龄为18岁。

❌ C. 20 ans - Faux.
中：错误。

❌ D. 21 ans - Faux.
中：错误。`
  },
  {
    id: "ue0042",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Condition pour être candidat aux élections européennes :",
    options: [
      "Avoir 21 ans",
      "Avoir la nationalité d'un pays de l'UE",
      "Habiter dans un autre pays hors UE",
      "Avoir un diplôme universitaire"
    ],
    answer: 1, // B
    explanation: `❌ A. Avoir 21 ans - Faux. L'âge minimum varie selon les pays, mais souvent 18 ans.
中：错误。年龄要求通常为18岁。

✅ B. Avoir la nationalité d'un pays de l'UE - Correct ! Il faut être citoyen d'un pays membre pour être candidat.
中：正确。必须是欧盟成员国公民。

❌ C. Habiter dans un autre pays hors UE - Faux.
中：错误。

❌ D. Avoir un diplôme universitaire - Faux. Ce n'est pas une condition.
中：错误。这不是一个条件。`
  },
  {
    id: "ue0043",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel est le but de la Journée de l'Europe ?",
    options: [
      "Fêter les traités fondateurs uniquement",
      "Renforcer le sentiment d'appartenance à un espace commun",
      "Organiser des compétitions sportives européennes",
      "Promouvoir les langues nationales uniquement"
    ],
    answer: 1, // B
    explanation: `❌ A. Fêter les traités fondateurs uniquement - Faux. La journée célèbre surtout l'idée européenne et la paix.
中：错误。主要庆祝欧洲理念与和平。

✅ B. Renforcer le sentiment d'appartenance à un espace commun - Correct ! La Journée de l'Europe vise à renforcer le sentiment d'appartenance et la cohésion européenne.
中：正确。欧洲日旨在增强共同体归属感与凝聚力。

❌ C. Organiser des compétitions sportives européennes - Faux. Ce n'est pas le but officiel.
中：错误。不是官方目的。

❌ D. Promouvoir les langues nationales uniquement - Faux. La diversité linguistique est valorisée, mais ce n'est pas l'objectif unique.
中：错误。语言多样性虽重要，但不是唯一目的。`
  },
  {
    id: "ue0044",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Sur quoi peut-on voir le drapeau européen ?",
    options: [
      "Sur les monuments historiques seulement",
      "Sur les façades des institutions européennes et certains passeports",
      "Sur tous les bâtiments privés en Europe",
      "Sur les billets de banque uniquement"
    ],
    answer: 1, // B
    explanation: `❌ A. Sur les monuments historiques seulement - Faux. Il apparaît sur de nombreux lieux officiels.
中：错误。旗帜出现在许多官方场所。

✅ B. Sur les façades des institutions européennes et certains passeports - Correct ! Le drapeau est affiché sur les institutions et sur les passeports européens.
中：正确。旗帜出现在欧盟机构建筑和部分护照上。

❌ C. Sur tous les bâtiments privés en Europe - Faux. Ce n'est pas obligatoire.
中：错误。私人建筑不强制。

❌ D. Sur les billets de banque uniquement - Faux.  Les billets en euros n’affichent pas le drapeau européen.

中：错误。欧元纸币没有欧盟旗帜。`
  },
  {
    id: "ue0045",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "En quelle année le drapeau européen devient-il emblème officiel de la CEE ?",
    options: [
      "1955",
      "1986",
      "1992",
      "2000"
    ],
    answer: 1, // B
    explanation: `❌ A. 1955 - Faux. Le drapeau n'était pas encore adopté.
中：错误。旗帜尚未采用。

✅ B. 1986 - Correct ! Le drapeau européen est hissé pour la première fois devant la Commission européenne en 1986.
中：正确。1986年首次在欧盟委员会前升旗。

❌ C. 1992 - Faux. 1992, c’est le traité de Maastricht.

中：错误。1992年是马斯特里赫特条约。

❌ D. 2000 - Faux. Le drapeau n’a pas été hissé pour la première fois en 2000.

中：错误。不是首次升旗年份。`
  },
  {
    id: "ue0046",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "Le traité de Rome a permis la création de :",
    options: [
      "L'UE",
      "La CEE et la CEEA",
      "La CECA",
      "La Banque centrale européenne"
    ],
    answer: 1, // B
    explanation: `❌ A. L'UE - Faux. L'UE moderne est née plus tard, mais le traité de Rome a posé les bases.
中：错误。现代欧盟后来形成，但罗马条约奠定基础。

✅ B. La CEE et la CEEA - Correct ! Le traité de Rome (1957) a créé la CEE et l'Euratom (CEEA).
中：正确。罗马条约创立欧洲经济共同体和欧洲原子能共同体。

❌ C. La CECA - Faux. La CECA a été créée par le traité de Paris (1951).
中：错误。煤钢共同体由1951年巴黎条约创建。

❌ D. La Banque centrale européenne - Faux. La BCE a été créée par le traité de Maastricht (1992).
中：错误。欧洲央行由马斯特里赫特条约创立。`
  },
  {
    id: "ue0047",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Que symbolise l'hymne européen « Ode à la joie » ?",
    options: [
      "La guerre et la victoire",
      "La liberté, la paix et la solidarité",
      "L'unité économique uniquement",
      "La monnaie unique"
    ],
    answer: 1, // B
    explanation: `❌ A. La guerre et la victoire - Faux. Ce n'est pas le sens de l'hymne.
中：错误。并非歌曲含义。

✅ B. La liberté, la paix et la solidarité - Correct ! L'hymne symbolise la liberté, la paix et la solidarité entre les peuples.
中：正确。象征自由、和平与团结。

❌ C. L'unité économique uniquement - Faux. L'hymne vise surtout aux valeurs humaines.
中：错误。歌曲强调人类价值，不仅是经济。

❌ D. La monnaie unique - Faux. Ce n’est pas lié à la monnaie.

中：错误。与货币无关。`
  },
  {
    id: "ue0048",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est le symbole de l'harmonie entre les peuples d'Europe ?",
    options: [
      "L'hymne européen",
      "Le drapeau européen",
      "La devise « Unie dans la diversité »",
      "La monnaie unique"
    ],
    answer: 1, // B
    explanation: `❌ A. L'hymne européen - Faux. L'hymne symbolise la paix et la solidarité, mais l'harmonie est surtout représentée par le drapeau.
中：错误。国歌象征和平团结，但和谐主要由旗帜代表。

✅ B. Le drapeau européen - Correct ! Le drapeau symbolise l'unité et l'harmonie entre les peuples.
中：正确。旗帜象征人民之间的团结与和谐。

❌ C. La devise « Unie dans la diversité » - Faux. C'est une valeur, pas un symbole visuel.
中：错误。是价值观，不是视觉象征。

❌ D. La monnaie unique - Faux. Ce n'est pas un symbole d'harmonie.
中：错误。不是和谐象征。`
  },
  {
    id: "ue0049",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "Quelle institution a été créée en 1975 ?",
    options: [
      "Banque centrale européenne",
      "Cour des comptes européenne",
      "Conseil européen",
      "Commission européenne"
    ],
    answer: 1, // B
    explanation: `❌ A. Banque centrale européenne - Faux. La BCE a été créée en 1998 et est entrée en fonction en 1999.
中：错误。欧洲央行1998年创建，1999年运作。

✅ B. Cour des comptes européenne - Correct ! La Cour des comptes européenne a été créée en 1975 pour contrôler les finances de l'UE.
中：正确。欧洲审计院1975年成立，负责审计欧盟财政。

❌ C. Conseil européen - Faux. Le Conseil européen a été officialisé plus tard (traité de Lisbonne).
中：错误。欧洲理事会后期正式化。

❌ D. Commission européenne - Faux. La Commission existe depuis les débuts de la CEE.
中：错误。委员会从欧洲共同体时期就存在。`
  },
  {
    id: "ue0050",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "La libre circulation des capitaux, des marchandises et des personnes dans l'UE a été instaurée grâce à :",
    options: [
      "Traité de Paris",
      "Traité de Rome",
      "Traité de Maastricht",
      "Traité de Lisbonne"
    ],
    answer: 1, // B
    explanation: `❌ A. Traité de Paris - Faux. Le traité de Paris a créé la CECA (1951), pas le marché unique.
中：错误。巴黎条约创建煤钢共同体。

✅ B. Traité de Rome - Correct ! Le traité de Rome (1957) a établi la CEE et posé les bases du marché commun, avec la libre circulation des biens, services, capitaux et personnes.
中：正确。罗马条约（1957）建立欧洲经济共同体，奠定共同市场基础，实现商品、服务、资本与人员自由流动。

❌ C. Traité de Maastricht - Faux. Maastricht a créé l'UE moderne, mais la libre circulation existait déjà.
中：错误。马斯特里赫特条约建立现代欧盟，但自由流动已存在。

❌ D. Traité de Lisbonne - Faux. Lisbonne réforme l'UE, mais n'a pas instauré la libre circulation.
中：错误。里斯本条约是改革条约，不是自由流动起始。`
  },
  {
    id: "ue0051",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Un citoyen espagnol veut travailler en France. Est-ce possible ?",
    options: [
      "Non, il faut un visa de travail",
      "Oui, il peut travailler librement",
      "Oui, mais seulement pour 3 mois",
      "Non, car la France n'accepte pas les Espagnols"
    ],
    answer: 1, // B
    explanation: `❌ A. Non, il faut un visa de travail - Faux. Dans l'UE, les citoyens de pays membres n'ont pas besoin de visa pour travailler dans un autre État membre.
中：错误。欧盟成员国公民在其他成员国工作不需要工作签证。

✅ B. Oui, il peut travailler librement - Correct ! Grâce à la libre circulation des travailleurs, un Espagnol peut travailler en France comme un Français.
中：正确。依靠欧盟人员自由流动，西班牙公民可以在法国自由工作。

❌ C. Oui, mais seulement pour 3 mois - Faux. La libre circulation permet de travailler sans limite de durée (sous certaines conditions).
中：错误。自由流动不是只限3个月。

❌ D. Non, car la France n'accepte pas les Espagnols - Faux. Ce n'est pas vrai.
中：错误。法国接受欧盟成员国公民。`
  },
  {
    id: "ue0052",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Une famille italienne veut s'installer en Allemagne. Ont-ils le droit de résider là-bas ?",
    options: [
      "Oui, ils peuvent résider librement",
      "Non, il faut une autorisation spéciale",
      "Oui, mais seulement si l'un d'eux est étudiant",
      "Non, car l'Allemagne est hors UE"
    ],
    answer: 0, // A
    explanation: `✅ A. Oui, ils peuvent résider librement - Correct ! Les citoyens de l'UE ont le droit de résider dans un autre pays membre.
中：正确。欧盟公民有权在其他成员国居住。

❌ B. Non, il faut une autorisation spéciale - Faux. Une autorisation n'est pas nécessaire pour résider, sauf certaines démarches administratives.
中：错误。不需要特殊许可，只需办理一般手续。

❌ C. Oui, mais seulement si l'un d'eux est étudiant - Faux. Ils peuvent résider pour travail, études ou vie privée.
中：错误。居住理由不限于学习。

❌ D. Non, car l'Allemagne est hors UE - Faux. L’Allemagne est membre de l’Union européenne.

中：错误。德国是欧盟成员。`
  },
  {
    id: "ue0053",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Une citoyenne française veut voter aux élections européennes en Belgique (où elle travaille). Est-ce possible ?",
    options: [
      "Oui, si elle est inscrite en Belgique",
      "Non, elle ne peut voter que en France",
      "Oui, mais seulement si elle a 21 ans",
      "Non, car seule la Belgique vote"
    ],
    answer: 0, // A
    explanation: `✅ A. Oui, si elle est inscrite en Belgique - Correct ! Les citoyens de l'UE peuvent voter dans le pays où ils résident, s'ils sont inscrits sur les listes électorales.
中：正确。欧盟公民可在居住国投票，但需登记在选民名单上。

❌ B. Non, elle ne peut voter que en France - Faux. Elle peut choisir de voter en France ou en Belgique (une seule fois).
中：错误。可选择在法国或居住国投票，但只能选一次。

❌ C. Oui, mais seulement si elle a 21 ans - Faux.  L’âge de vote est généralement de 18 ans.
中：错误。通常投票年龄是18岁。

❌ D. Non, car seule la Belgique vote - Faux. Tous les pays membres organisent des élections européennes.
中：错误。所有成员国都举行欧洲议会选举。`
  },
  {
    id: "ue0054",
    type: "carte multi",
    category: "UnionEuropéenne",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Un citoyen polonais veut acheter une maison en France. Est-ce autorisé ?",
    options: [
      "Oui, il peut acheter librement",
      "Non, seuls les Français peuvent acheter",
      "Oui, mais il doit demander une autorisation",
      "Non, car la Pologne n'est pas dans l'UE"
    ],
    answer: 0, // A
    explanation: `✅ A. Oui, il peut acheter librement - Correct ! Les citoyens de l'UE peuvent acheter des biens immobiliers dans un autre pays membre sans restriction.
中：正确。欧盟公民可在其他成员国自由购房。

❌ B. Non, seuls les Français peuvent acheter - Faux. Les citoyens de l’Union européenne bénéficient du droit égal à l’achat de biens immobiliers.
中：错误。欧盟公民享有平等购房权。

❌ C. Oui, mais il doit demander une autorisation - Faux. L’achat d’un bien immobilier ne nécessite généralement pas d’autorisation spéciale.

中：错误。通常不需要特别许可。

❌ D. Non, car la Pologne n'est pas dans l'UE - Faux. La Pologne fait partie de l’Union européenne.

中：错误。波兰是欧盟成员。`
  },

  {
    id: "de0001",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "examen original", // 文档：1o中等（明确有o）
    question: "Les dirigeants sont élus par les citoyens dans :",
    options: [
      "Une dictature",
      "Une monarchie absolue", 
      "Une démocratie",
      "Un empire"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Dans une dictature, le pouvoir est détenu par une seule personne ou un petit groupe, et les citoyens ne peuvent pas participer librement aux élections.
中：错误。在独裁制度下，权力掌握在一人或少数人手中，公民不能自由参与选举。

❌ B. Faux. Dans une monarchie absolue, le souverain détient tous les pouvoirs et n'est pas élu par les citoyens.
中：错误。在绝对君主制中，君主掌握全部权力，公民无法选举统治者。

✅ C. Correct ! Dans une démocratie, les dirigeants sont élus par le peuple au suffrage universel, ce qui garantit la participation des citoyens au pouvoir politique.
中：正确。在民主制度下，领导人由公民通过普选选出，这保证了公民参与政治权力。

❌ D. Faux. Dans un empire, le dirigeant n'est généralement pas élu par les citoyens mais détient le pouvoir par succession ou conquête.
中：错误。在帝国中，统治者通常不是由公民选举产生，而是通过继承或征服掌权。`
  },
  {
    id: "de0002",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：2 o简单（有o）
    question: "A-t-on le droit de ne pas respecter une loi ?",
    options: [
      "Oui, si on n'est pas d'accord",
      "Oui, dans certains cas",
      "Non, la loi s'impose à tous",
      "Seulement les adultes"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Le fait de ne pas être d'accord avec une loi ne permet pas de ne pas la respecter.
中：错误。即使不同意法律内容，也不能不遵守法律。

❌ B. Faux. En principe, la loi s'impose à tous et ne peut pas être ignorée selon la situation personnelle.
中：错误。原则上法律对所有人都适用，不能因为个人情况而不遵守。

✅ C. Correct ! La loi s'applique à tous les individus, sans exception, dans un État de droit.
中：正确。在法治国家，法律对所有人都具有约束力，没有例外。

❌ D. Faux. La loi s'applique à tous, adultes comme mineurs, selon des règles adaptées.
中：错误。法律对成年人和未成年人都适用，只是适用方式不同。`
  },
  {
    id: "de0003",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：3 中等（没有o）
    question: "A-t-on le droit de ne pas respecter une loi ?",
    options: [
      "Non, tout le monde doit respecter la loi",
      "Oui, les personnes riches peuvent ne pas respecter la loi",
      "Non, sauf le pouvoir législatif qui peut ne pas respecter la loi",
      "Oui, les agents du gouvernement peuvent ne pas respecter la loi"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! En démocratie et dans un État de droit, la loi s'impose à tous sans exception.
中：正确。在民主和法治国家中，法律对所有人都具有约束力，没有例外。

❌ B. Faux. La richesse ne donne aucun privilège face à la loi.
中：错误。财富并不能让人凌驾于法律之上。

❌ C. Faux. Le pouvoir législatif crée la loi, mais il est lui-même soumis à la Constitution et au droit.
中：错误。立法机关负责制定法律，但同样必须遵守宪法和法律体系。

❌ D. Faux. Les agents publics sont eux aussi soumis à la loi.
中：错误。政府工作人员同样必须遵守法律。`
  },
  {
    id: "de0004",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：4 o简单（有o）
    question: "Qui doit respecter la loi ?",
    options: [
      "Seulement les citoyens",
      "Seulement les étrangers",
      "Tout le monde",
      "Seulement les élus"
    ],
    answer: 2,
    explanation: `❌ A. Faux. La loi ne s'applique pas uniquement aux citoyens.
中：错误。法律并非只适用于公民。

❌ B. Faux. Les étrangers ne sont pas les seuls concernés par la loi.
中：错误。法律并非只约束外国人。

✅ C. Correct ! La loi s'impose à tous, citoyens comme autorités publiques.
中：正确。法律对所有人都适用，包括公民和公共权力。

❌ D. Faux. Les élus ne sont pas les seuls à devoir respecter la loi.
中：错误。遵守法律并不是民选代表的专属义务。`
  },
  {
    id: "de0005",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：5中（没有o）
    question: "Qui peut ne pas respecter la loi ?",
    options: [
      "Les personnes riches peuvent ne pas respecter la loi",
      "Les agents du gouvernement peuvent ne pas respecter la loi",
      "Personne ne peut ne pas respecter la loi (sauf exceptions très strictes prévues par la loi)",
      "Les citoyens ordinaires peuvent choisir de ne pas respecter la loi"
    ],
    answer: 2,
    explanation: `❌ A. Faux. L'égalité devant la loi interdit tout privilège.
中：错误。法律面前人人平等，不存在特权。

❌ B. Faux. Les agents publics sont soumis à la loi comme tous les citoyens.
中：错误。政府工作人员同样受法律约束。

✅ C. Correct ! La loi s'impose à tous, avec seulement des exceptions prévues par la loi elle-même.
中：正确。原则上任何人都不能不遵守法律，除非法律本身规定了非常严格的例外。

❌ D. Faux. Le respect de la loi n'est pas un choix personnel.
中：错误。是否遵守法律不是个人可以选择的。`
  },
  {
    id: "de0006",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "examen original", // 文档：6o 中（有o，但"6o"可能是一个整体编号）
    question: "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    options: [
      "Seul le président peut le sanctionner",
      "Il est au-dessus des lois",
      "Il peut être jugé et sanctionné",
      "Il décide lui-même de la sanction"
    ],
    answer: 2,
    explanation: `❌ A. Faux. La justice peut également intervenir.
中：错误。司法机关同样可以介入。

❌ B. Faux. Aucun responsable politique n'est au-dessus des lois.
中：错误。任何政治人物都不能凌驾于法律之上。

✅ C. Correct ! Comme tout citoyen, un ministre peut être jugé et sanctionné s'il ne respecte pas la loi.
中：正确。和普通公民一样，部长违法也可以被审判和制裁。

❌ D. Faux. Les sanctions sont décidées par la justice, pas par l'intéressé.
中：错误。制裁由司法机关决定，而不是当事人自己。`
  },
  {
    id: "de0007",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：7简单（没有o）
    question: "Qui est élu lors des élections au Parlement européen ?",
    options: [
      "Le président de la Commission européenne",
      "Les députés européens",
      "Les chefs d'État des pays membres",
      "Les juges de la Cour de justice de l'Union européenne"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le président de la Commission n'est pas élu directement par les citoyens.
中：错误。欧盟委员会主席并非由公民直接选举产生。

✅ B. Correct ! Les citoyens élisent les députés européens au suffrage universel direct.
中：正确。公民通过普选直接选举欧洲议会议员。

❌ C. Faux. Les chefs d'État sont élus ou nommés au niveau national.
中：错误。国家元首是在国家层面选举或任命的。

❌ D. Faux. Les juges sont nommés et non élus par les citoyens.
中：错误。欧盟法院法官是任命产生的，而非选举产生。`
  },
  {
    id: "de0008",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "examen original", // 文档：8 o中等（有o）
    question: "Qui est élu lors des élections législatives ?",
    options: [
      "Les sénateurs",
      "Les députés",
      "Le président",
      "Les maires"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Les sénateurs sont élus au suffrage universel indirect.
中：错误。参议员是间接选举产生的。

✅ B. Correct ! Les élections législatives permettent d'élire les députés de l'Assemblée nationale.
中：正确。立法选举用于选举国民议会议员。

❌ C. Faux. Le président est élu lors des élections présidentielles.
中：错误。总统是在总统选举中产生的。

❌ D. Faux. Les maires sont élus lors des élections municipales.
中：错误。市长是在市政选举中产生的。`
  },
  {
    id: "de0009",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：9 简单（没有o）
    question: "Qui est élu lors des élections départementales ?",
    options: [
      "Le président de la République",
      "Le maire",
      "Les conseillers départementaux",
      "Les députés"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Le président est élu lors des élections présidentielles.
中：错误。总统是在总统选举中产生的。

❌ B. Faux. Le maire est élu lors des élections municipales.
中：错误。市长是在市政选举中产生的。

✅ C. Correct ! Les élections départementales servent à élire les conseillers départementaux.
中：正确。省级选举用于选举省议员。

❌ D. Faux. Les députés sont élus lors des élections législatives.
中：错误。议员是在立法选举中产生的。`
  },
  {
    id: "de0010",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：10简单（没有o）
    question: "Qui est élu lors des élections régionales ?",
    options: [
      "Les députés",
      "Les conseillers régionaux",
      "Les conseillers municipaux",
      "Les sénateurs"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Les députés sont élus lors des élections législatives.
中：错误。议员是在立法选举中选出的。

✅ B. Correct ! Les citoyens élisent les conseillers régionaux lors des élections régionales.
中：正确。公民在大区选举中选举大区议员。

❌ C. Faux. Les conseillers municipaux sont élus lors des élections municipales.
中：错误。市议员是在市政选举中产生的。

❌ D. Faux. Les sénateurs sont élus au suffrage universel indirect.
中：错误。参议员是间接选举产生的。`
  },
  {
    id: "de0011",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：11简单（没有o）
    question: "Qui est élu lors des élections sénatoriales ?",
    options: [
      "Le président de la République",
      "Les députés",
      "Les sénateurs",
      "Les conseillers municipaux"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Le Président est élu lors des élections présidentielles.
中：错误。总统是在总统选举中产生的。

❌ B. Faux. Les députés sont élus lors des élections législatives.
中：错误。议员是在立法选举中产生的。

✅ C. Correct ! Les élections sénatoriales servent à élire les sénateurs.
中：正确。参议院选举用于选举参议员。

❌ D. Faux. Les conseillers municipaux sont élus lors des élections municipales.
中：错误。市议员是在市政选举中产生的。`
  },
  {
    id: "de0012",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：12 o简单（有o）
    question: "Qui est élu lors des élections présidentielles ?",
    options: [
      "Le Premier ministre",
      "Le président de la République",
      "Les députés",
      "Les ministres"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le Premier ministre est nommé par le Président.
中：错误。总理由总统任命。

✅ B. Correct ! Les élections présidentielles permettent d'élire le Président de la République.
中：正确。总统选举用于选举共和国总统。

❌ C. Faux. Les députés sont élus lors des élections législatives.
中：错误。议员是在立法选举中产生的。

❌ D. Faux. Les ministres sont nommés et non élus.
中：错误。部长是任命产生的，而不是选举产生的。`
  },
  {
    id: "de0013",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：13o 简单（有o）
    question: "Qui est élu lors des élections municipales ?",
    options: [
      "Le président",
      "Les députés",
      "Les conseillers municipaux",
      "Les sénateurs"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Le Président est élu lors des élections présidentielles.
中：错误。总统是在总统选举中产生的。

❌ B. Faux. Les députés sont élus lors des élections législatives.
中：错误。议员是在立法选举中产生的。

✅ C. Correct ! Les élections municipales servent à élire les conseillers municipaux.
中：正确。市政选举用于选举市议员。

❌ D. Faux. Les sénateurs sont élus lors des élections sénatoriales.
中：错误。参议员是在参议院选举中产生的。`
  },
  {
    id: "de0014",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "examen original", // 文档：14 o 中（有o）
    question: "À quelle fréquence le Sénat est-il renouvelé ?",
    options: [
      "Tous les cinq ans",
      "Tous les six ans",
      "Tous les trois ans",
      "Tous les dix ans"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Ce n'est pas la durée du mandat des sénateurs.
中：错误。这不是参议员的任期。

❌ B. Faux. Les sénateurs ne sont pas élus tous les six ans.
中：错误。参议员不是每六年选举一次。

✅ C. Correct ! Les sénateurs sont renouvelés par moitié tous les trois ans.
中：正确。参议员每三年改选一半。

❌ D. Faux. Le mandat sénatorial n'est pas de dix ans.
中：错误。参议员任期不是十年。`
  },
  {
    id: "de0015",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：15 简单（没有o）
    question: "Quand sont élus les maires ?",
    options: [
      "Tous les cinq ans",
      "Tous les six ans",
      "Tous les trois ans",
      "Tous les dix ans"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le mandat municipal n'est pas de cinq ans.
中：错误。市政任期不是五年。

✅ B. Correct ! Les maires sont élus tous les six ans lors des élections municipales.
中：正确。市长每六年在市政选举中产生。

❌ C. Faux. Les élections municipales n'ont pas lieu tous les trois ans.
中：错误。市政选举不是每三年举行一次。

❌ D. Faux. Le mandat municipal n'est pas de dix ans.
中：错误。市政任期不是十年。`
  },
  {
    id: "de0016",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：16简单（没有o）
    question: "Quand sont élus les conseillers départementaux ?",
    options: [
      "Tous les cinq ans",
      "Tous les six ans",
      "Tous les trois ans",
      "Tous les dix ans"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Ce n'est pas la durée de leur mandat.
中：错误。这不是省议员的任期。

✅ B. Correct ! Les conseillers départementaux sont élus pour six ans.
中：正确。省议员的任期是六年。

❌ C. Faux. Les élections départementales n'ont pas lieu tous les trois ans.
中：错误。省级选举不是每三年举行一次。

❌ D. Faux. Le mandat n'est pas de dix ans.
中：错误。任期不是十年。`
  },
  {
    id: "de0017",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：17简单（没有o）
    question: "Quand sont élus les conseillers régionaux ?",
    options: [
      "Tous les cinq ans",
      "Tous les six ans",
      "Tous les trois ans",
      "Tous les dix ans"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Leur mandat n'est pas de cinq ans.
中：错误。大区议员任期不是五年。

✅ B. Correct ! Les conseillers régionaux sont élus pour six ans.
中：正确。大区议员的任期是六年。

❌ C. Faux. Les élections régionales n'ont pas lieu tous les trois ans.
中：错误。大区选举不是每三年举行一次。

❌ D. Faux. Le mandat n'est pas de dix ans.
中：错误。任期不是十年。`
  },
  {
    id: "de0018",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：18简单（没有o）
    question: "Quand sont élus les députés au Parlement européen ?",
    options: [
      "Tous les cinq ans",
      "Tous les six ans",
      "Tous les trois ans",
      "Tous les dix ans"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! Les députés européens sont élus tous les cinq ans.
中：正确。欧洲议会议员每五年选举一次。

❌ B. Faux. Leur mandat n'est pas de six ans.
中：错误。任期不是六年。

❌ C. Faux. Les élections européennes n'ont pas lieu tous les trois ans.
中：错误。欧洲议会选举不是每三年举行。

❌ D. Faux. Le mandat n'est pas de dix ans.
中：错误。任期不是十年。`
  },
  {
    id: "de0019",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：19o 简单（有o）
    question: "À partir de quel âge a-t-on le droit de voter ?",
    options: [
      "16 ans",
      "17 ans",
      "18 ans",
      "21 ans"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Le droit de vote commence après 18 ans.
中：错误。投票权不是从 16 岁开始。

❌ B. Faux. 17 ans ne permet pas encore de voter.
中：错误。17 岁还不能投票。

✅ C. Correct ! En France, le droit de vote est accordé à partir de 18 ans.
中：正确。在法国，18 岁起享有投票权。

❌ D. Faux. L'âge légal du vote n'est pas de 21 ans.
中：错误。投票年龄不是 21 岁。`
  },
  {
    id: "de0020",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：20o 简单（有o）
    question: "Pour combien de temps est élu le président de la République française ?",
    options: [
      "4 ans",
      "5 ans",
      "6 ans",
      "7 ans"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le mandat présidentiel n'est pas de quatre ans.
中：错误。总统任期不是四年。

✅ B. Correct ! Le président de la République est élu pour cinq ans.
中：正确。法国总统的任期为五年。

❌ C. Faux. Le mandat présidentiel n'est pas de six ans.
中：错误。总统任期不是六年。

❌ D. Faux. Le septennat n'existe plus.
中：错误。七年任期制度已不再使用。`
  },
  {
    id: "de0021",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：21 o简单（有o）
    question: "Pour combien de temps sont élus les députés ?",
    options: [
      "4 ans",
      "5 ans",
      "6 ans",
      "7 ans"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le mandat des députés n'est pas de quatre ans.
中：错误。议员任期不是四年。

✅ B. Correct ! Les députés sont élus pour cinq ans.
中：正确。国民议会议员的任期是五年。

❌ C. Faux. Leur mandat n'est pas de six ans.
中：错误。任期不是六年。

❌ D. Faux. Les députés ne sont pas élus pour sept ans.
中：错误。议员任期不是七年。`
  },
  {
    id: "de0022",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：22 中（没有o）
    question: "Qu'est-ce que le suffrage universel ?",
    options: [
      "Il peut être direct ou indirect",
      "Il est uniquement indirect",
      "Il est uniquement direct",
      "Il est utilisé seulement pour élire le président"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! Le suffrage universel peut être direct (président) ou indirect (sénateurs).
中：正确。普选可以是直接选举（如总统），也可以是间接选举（如参议员）。

❌ B. Faux. Le suffrage universel peut aussi être direct.
中：错误。普选并非只限于间接选举。

❌ C. Faux. Certaines élections se font au suffrage universel indirect.
中：错误。有些选举采用的是普选间接制。

❌ D. Faux. Le suffrage universel concerne plusieurs types d'élections.
中：错误。普选不仅用于总统选举。`
  },
  {
    id: "de0023",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：23o简单（有o）
    question: "Quelle condition est nécessaire pour voter aux élections ?",
    options: [
      "Être riche",
      "Être majeur",
      "Être marié",
      "Avoir un emploi"
    ],
    answer: 1,
    explanation: `❌ A. Faux. La richesse n'est pas une condition pour voter.
中：错误。是否富有不是投票的条件。

✅ B. Correct ! En France, il faut avoir au moins 18 ans pour pouvoir voter.
中：正确。在法国，必须年满 18 岁才能投票。

❌ C. Faux. La situation familiale n'a aucune influence sur le droit de vote.
中：错误。是否结婚与投票权无关。

❌ D. Faux. Avoir un travail n'est pas nécessaire pour voter.
中：错误。是否有工作不是投票条件。`
  },
  {
    id: "de0024",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：24 中（没有o）
    question: "Quelle condition est nécessaire pour voter aux élections ?",
    options: [
      "Être inscrit sur les listes électorales",
      "Être un homme majeur",
      "Résider en France depuis au moins 6 mois",
      "Payer des impôts en France"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! L'inscription sur les listes électorales est obligatoire pour pouvoir voter.
中：正确。必须先在选民名单上登记，才能参加投票。

❌ B. Faux. Le droit de vote s'applique aux femmes et aux hommes sans distinction.
中：错误。投票权不区分性别。

❌ C. Faux. Cette condition concerne certaines inscriptions, mais elle n'est pas une règle générale pour tous les électeurs.
中：错误。居住 6 个月并非所有选民的普遍条件。

❌ D. Faux. Le paiement des impôts n'est pas une condition pour voter.
中：错误。是否纳税不是投票的条件。`
  },
  {
    id: "de0025",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：25 o简单（有o）
    question: "Qui peut voter aux élections en France ?",
    options: [
      "Tous les habitants",
      "Les mineurs",
      "Les citoyens majeurs",
      "Les touristes"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Tous les habitants ne disposent pas du droit de vote.
中：错误。并非所有居住者都有投票权。

❌ B. Faux. Les mineurs n'ont pas le droit de vote.
中：错误。未成年人没有投票权。

✅ C. Correct ! En France, seuls les citoyens majeurs peuvent voter.
中：正确。在法国，只有成年公民可以投票。

❌ D. Faux. Les touristes ne peuvent pas voter en France.
中：错误。游客没有投票权。`
  },
  {
    id: "de0026",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：26 简单（没有o）
    question: "Qui peut voter aux élections en France ?",
    options: [
      "Que les hommes",
      "Que les fonctionnaires",
      "Que les personnes riches",
      "Les citoyens français âgés de 18 ans et plus, inscrits sur les listes électorales"
    ],
    answer: 3,
    explanation: `❌ A. Faux. Le droit de vote est le même pour les femmes et les hommes.
中：错误。投票权不区分男女。

❌ B. Faux. Le droit de vote ne dépend pas de la profession.
中：错误。投票权与职业无关。

❌ C. Faux. La richesse ne donne aucun droit supplémentaire.
中：错误。财富并不能赋予额外的投票权。

✅ D. Correct ! Ce sont les conditions légales pour pouvoir voter en France.
中：正确。这是法国法律规定的投票条件。`
  },
  {
    id: "de0027",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：27o 简单（有o）
    question: "Que signifie « suffrage universel » ?",
    options: [
      "Seuls les riches votent",
      "Tout le monde vote",
      "Tous les citoyens majeurs votent",
      "Seuls les élus votent"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Le suffrage universel exclut toute condition de richesse.
中：错误。普选不以财富为条件。

❌ B. Faux. Le droit de vote est réservé aux citoyens remplissant certaines conditions.
中：错误。并非所有人都可以投票。

✅ C. Correct ! Le suffrage universel permet à tous les citoyens majeurs de voter.
中：正确。普选指所有成年公民都可以投票。

❌ D. Faux. Les élus sont choisis par les citoyens, ils ne votent pas à la place du peuple.
中：错误。民选代表是被选举产生的，而不是投票者。`
  },
  {
    id: "de0028",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：28中（没有o）
    question: "Que signifie « suffrage universel » ?",
    options: [
      "Le vote réservé aux personnes ayant un diplôme",
      "Le vote accordé à tous les citoyens sans discrimination",
      "Le vote uniquement pour les habitants de la capitale",
      "Le vote uniquement pour les élus"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le niveau d'études n'a aucune importance pour le droit de vote.
中：错误。学历不是投票条件。

✅ B. Correct ! Le suffrage universel garantit le droit de vote sans distinction de sexe, d'origine ou de religion.
中：正确。普选保障公民在不受性别、出身或宗教歧视的情况下投票。

❌ C. Faux. Le droit de vote s'exerce sur tout le territoire.
中：错误。投票权不局限于首都居民。

❌ D. Faux. Les élus sont désignés par le suffrage universel, ils n'en sont pas les seuls bénéficiaires.
中：错误。民选代表是由普选产生的，而不是投票主体。`
  },
  {
    id: "de0029",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "examen original", // 文档：29o中（有o）
    question: "Concernant les partis politiques, quelle proposition est correcte ?",
    options: [
      "Ils sont interdits",
      "Il n'en existe qu'un seul",
      "Ils expriment des idées différentes",
      "Ils remplacent le gouvernement"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Les partis politiques sont autorisés et protégés par la Constitution.
中：错误。政党是合法存在并受宪法保护的。

❌ B. Faux. La démocratie repose sur la pluralité des partis politiques.
中：错误。民主制度以政党多元化为基础。

✅ C. Correct ! Les partis politiques représentent des opinions et des programmes variés.
中：正确。政党表达不同的政治观点和纲领。

❌ D. Faux. Les partis politiques ne gouvernent pas directement, ce sont les institutions élues qui exercent le pouvoir.
中：错误。政党并不直接取代政府行使权力。`
  },
  {
    id: "de0030",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：30 简单（没有o，但这是有争议的，可能是文档格式问题）
    question: "Qui élit le Président de la République ?",
    options: [
      "Les députés et les sénateurs",
      "Le gouvernement",
      "Les citoyens au suffrage universel direct",
      "Les maires"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Le Président n'est pas élu par le Parlement.
中：错误。总统不是由议会选举产生的。

❌ B. Faux. Le gouvernement ne choisit pas le Président.
中：错误。政府无权选举总统。

✅ C. Correct ! En France, le Président est élu directement par les citoyens.
中：正确。在法国，总统由公民通过直接普选产生。

❌ D. Faux. Les maires ne participent pas à l'élection du Président.
中：错误。市长不参与总统选举。`
  },
  {
    id: "de0031",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：31o简单（有o）
    question: "Qui élit les députés ?",
    options: [
      "Le président",
      "Les citoyens",
      "Les sénateurs",
      "Les juges"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le président n'élit pas les députés.
中：错误。总统不选举国民议会议员。

✅ B. Correct ! Les députés sont élus par les citoyens lors des élections législatives.
中：正确。国民议会议员由公民在立法选举中选出。

❌ C. Faux. Les sénateurs n'élisent pas les députés.
中：错误。参议员不选举议员。

❌ D. Faux. Les juges ne participent pas aux élections politiques.
中：错误。法官不参与政治选举。`
  },
  {
    id: "de0032",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：32o简单（有o）
    question: "Quel est le régime politique de la France ?",
    options: [
      "Monarchie",
      "Dictature",
      "République",
      "Empire"
    ],
    answer: 2,
    explanation: `❌ A. Faux. La France n'est pas une monarchie.
中：错误。法国不是君主制国家。

❌ B. Faux. La France est un régime démocratique.
中：错误。法国不是独裁国家。

✅ C. Correct ! La France est une République démocratique.
中：正确。法国是一个民主共和国。

❌ D. Faux. La France n'est pas un empire.
中：错误。法国不是帝国。`
  },
  {
    id: "de0033",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：33o简单（有o）
    question: "Condition pour voter aux élections européennes ?",
    options: [
      "Être mineur",
      "Être citoyen de l'UE",
      "Être touriste",
      "Être élu"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Il faut être majeur pour voter.
中：错误。必须成年才能投票。

✅ B. Correct ! Les citoyens de l'Union européenne peuvent voter aux élections européennes.
中：正确。欧盟公民可以参加欧洲议会选举。

❌ C. Faux. Les touristes n'ont pas le droit de vote.
中：错误。游客没有投票权。

❌ D. Faux. Être élu n'est pas une condition pour voter.
中：错误。是否当选与投票资格无关。`
  },
  {
    id: "de0034",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：34o简单（有o）
    question: "Fréquence des élections européennes ?",
    options: [
      "Tous les 3 ans",
      "Tous les 4 ans",
      "Tous les 5 ans",
      "Tous les 6 ans"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Les élections européennes n'ont pas lieu tous les trois ans.
中：错误。欧洲选举不是每三年举行。

❌ B. Faux. Ce n'est pas la bonne durée.
中：错误。不是四年。

✅ C. Correct ! Les élections européennes ont lieu tous les cinq ans.
中：正确。欧洲议会选举每五年举行一次。

❌ D. Faux. Le mandat n'est pas de six ans.
中：错误。任期不是六年。`
  },
  {
    id: "de0035",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：35o简单（有o）
    question: "Qui élit les députés européens ?",
    options: [
      "Les gouvernements",
      "Les citoyens",
      "Le Parlement",
      "La Commission"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Les gouvernements n'élisent pas les députés européens.
中：错误。各国政府不选举欧洲议员。

✅ B. Correct ! Les députés européens sont élus par les citoyens.
中：正确。欧洲议会议员由公民选出。

❌ C. Faux. Le Parlement n'élit pas ses membres.
中：错误。议会不选举自己的成员。

❌ D. Faux. La Commission européenne n'organise pas les élections.
中：错误。欧盟委员会不进行选举。`
  },
  {
    id: "de0036",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：36o简单（有o）
    question: "Qu'est-ce que l'État de droit ?",
    options: [
      "Le pouvoir du président",
      "Un État sans lois",
      "Un État où la loi s'impose à tous",
      "Une dictature"
    ],
    answer: 2,
    explanation: `❌ A. Faux. L'État de droit ne repose pas sur un pouvoir personnel.
中：错误。法治国家不是个人权力。

❌ B. Faux. Un État de droit repose sur le respect des lois.
中：错误。法治国家以法律为基础。

✅ C. Correct ! Dans un État de droit, tout le monde respecte la loi.
中：正确。法治国家中法律对所有人都具有约束力。

❌ D. Faux. Une dictature n'est pas un État de droit.
中：错误。独裁国家不是法治国家。`
  },
  {
    id: "de0037",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "examen original", // 文档：37o中（有o）
    question: "Président ayant commis un crime :",
    options: [
      "Il n'est jamais jugé",
      "Il est au-dessus des lois",
      "Il peut être jugé",
      "Il décide lui-même"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Personne n'est au-dessus de la loi.
中：错误。没有人永远不受审判。

❌ B. Faux. En démocratie, le président n'est pas au-dessus des lois.
中：错误。在民主国家，总统不凌驾于法律之上。

✅ C. Correct ! Un président peut être jugé dans certaines conditions prévues par la loi.
中：正确。总统在法律规定的情况下可以被审判。

❌ D. Faux. Il ne décide pas de sa propre responsabilité.
中：错误。他不能自行决定是否受罚。`
  },
  {
    id: "de0038",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "examen original", // 文档：38o中（有o）
    question: "La loi est l'expression de :",
    options: [
      "La volonté du président",
      "La volonté générale",
      "La religion",
      "La police"
    ],
    answer: 1,
    explanation: `❌ A. Faux. La loi n'exprime pas la volonté d'un seul homme.
中：错误。法律不是总统个人意志。

✅ B. Correct ! La loi exprime la volonté générale du peuple.
中：正确。法律体现全民的共同意志。

❌ C. Faux. La loi est laïque en France.
中：错误。法国法律是世俗的。

❌ D. Faux. La police applique la loi mais ne la crée pas.
中：错误。警察执行法律，但不制定法律。`
  },
  {
    id: "de0039",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：39 o简单（有o）
    question: "Durée du mandat municipal et du maire ?",
    options: [
      "4 ans",
      "5 ans",
      "6 ans",
      "7 ans"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Le mandat n'est pas de quatre ans.
中：错误。任期不是四年。

❌ B. Faux. Le mandat municipal n'est pas de cinq ans.
中：错误。不是五年。

✅ C. Correct ! Le mandat municipal et du maire est de six ans.
中：正确。市政及市长任期为六年。

❌ D. Faux. Le mandat n'est pas de sept ans.
中：错误。不是七年。`
  },
  {
    id: "de0040",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "examen original", // 文档：40o 中（有o）
    question: "Que garantit l'État de droit ?",
    options: [
      "L'injustice",
      "L'égalité devant la loi",
      "Le pouvoir unique",
      "La censure"
    ],
    answer: 1,
    explanation: `❌ A. Faux. L'État de droit combat l'injustice.
中：错误。法治国家反对不公正。

✅ B. Correct ! Tous sont égaux devant la loi.
中：正确。法律面前人人平等。

❌ C. Faux. L'État de droit repose sur la séparation des pouvoirs.
中：错误。法治国家实行权力分立。

❌ D. Faux. La censure n'est pas un principe de l'État de droit.
中：错误。审查制度不属于法治原则。`
  },
  {
    id: "de0041",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：41 o简单（有o）
    question: "Peut-on voter à la place d'un autre ?",
    options: [
      "Oui",
      "Non",
      "Seulement en famille",
      "Seulement avec autorisation"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le vote est personnel.
中：错误。投票是个人行为。

✅ B. Correct ! Le vote est strictement personnel.
中：正确。投票必须由本人完成。

❌ C. Faux. Les liens familiaux ne permettent pas de voter à la place d'un autre.
中：错误。家庭关系不能代替投票。

❌ D. Faux. Même avec autorisation, on ne peut pas voter à la place d'autrui.
中：错误。即使有授权，也不能代替他人投票。`
  },
  {
    id: "de0042",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "examen original", // 文档：42o 简单（有o）
    question: "Le vote est-il obligatoire en France ?",
    options: [
      "Oui",
      "Non",
      "Seulement aux présidentielles",
      "Seulement aux européennes"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le vote n'est pas obligatoire en France.
中：错误。法国投票不是强制性的。

✅ B. Correct ! Le vote est un droit, pas une obligation.
中：正确。投票是一项权利，而非义务。

❌ C. Faux. Aucun vote n'est obligatoire.
中：错误。任何选举都不是强制的。

❌ D. Faux. Les élections européennes ne sont pas obligatoires.
中：错误。欧洲选举也不是强制性的。`
  },
  {
    id: "de0043",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：43 中（没有o）
    question: "Qu'est-ce que la séparation des pouvoirs ?",
    options: [
      "Une manifestation de la démocratie",
      "Une forme de concentration du pouvoir",
      "Un principe propre aux régimes autoritaires",
      "Un moyen de supprimer le pouvoir judiciaire"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! Elle évite la concentration du pouvoir.
中：正确。它防止权力集中，是民主的重要原则。

❌ B. Faux. C'est exactement l'inverse.
中：错误。权力分立是防止权力集中。

❌ C. Faux. Les régimes autoritaires refusent la séparation des pouvoirs.
中：错误。威权体制通常不实行权力分立。

❌ D. Faux. Le pouvoir judiciaire est protégé par la séparation des pouvoirs.
中：错误。权力分立保护司法权。`
  },
  {
    id: "de0044",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：44 中（没有o）
    question: "Qui élit les sénateurs ?",
    options: [
      "Les citoyens au suffrage universel direct",
      "Le Président de la République",
      "Les grands électeurs",
      "Les députés"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Les sénateurs ne sont pas élus directement par les citoyens.
中：错误。参议员不是公民直接选举的。

❌ B. Faux. Le président n'élit pas les sénateurs.
中：错误。总统不选举参议员。

✅ C. Correct ! Les sénateurs sont élus par les grands électeurs.
中：正确。参议员由大选举人团选出。

❌ D. Faux. Les députés ne les élisent pas seuls.
中：错误。议员不是唯一选举人。`
  },
  {
    id: "de0045",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：45 中（没有o）
    question: "Qui élit les conseillers municipaux ?",
    options: [
      "Le préfet",
      "Le gouvernement",
      "Les citoyens",
      "Les conseillers départementaux"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Le préfet ne participe pas aux élections.
中：错误。省长不参与选举。

❌ B. Faux. Le gouvernement n'élit pas les conseillers municipaux.
中：错误。政府不选举市议员。

✅ C. Correct ! Les citoyens élisent les conseillers municipaux.
中：正确。市议员由公民选出。

❌ D. Faux. Ils ne participent pas à cette élection.
中：错误。省议员不参与该选举。`
  },
  {
    id: "de0046",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：46中（没有o）
    question: "Qui élit les conseillers départementaux ?",
    options: [
      "Les maires",
      "Le gouvernement",
      "Les citoyens",
      "Les sénateurs"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Les maires ne les élisent pas.
中：错误。市长不选举省议员。

❌ B. Faux. Le gouvernement n'élit pas les conseillers départementaux.
中：错误。政府不选举省议员。

✅ C. Correct ! Les citoyens élisent les conseillers départementaux.
中：正确。省议员由公民选出。

❌ D. Faux. Les sénateurs ne participent pas à ce vote.
中：错误。参议员不参与该选举。`
  },
  {
    id: "de0047",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：47中（没有o）
    question: "Qui élit les conseillers régionaux (qui élisent ensuite le président du conseil régional) ?",
    options: [
      "Les députés",
      "Le président de la République",
      "Le gouvernement",
      "Les citoyens"
    ],
    answer: 3,
    explanation: `❌ A. Faux. Les députés ne les élisent pas.
中：错误。议员不选举大区议员。

❌ B. Faux. Le président n'élit pas les conseillers régionaux.
中：错误。总统不选举大区议员。

❌ C. Faux. Le gouvernement ne participe pas à ces élections.
中：错误。政府不参与该选举。

✅ D. Correct ! Les citoyens élisent les conseillers régionaux.
中：正确。大区议员由公民选出。`
  },
  {
    id: "de0048",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：48 简单（没有o）
    question: "Qu'est-ce que l'État de droit ?",
    options: [
      "Tout le monde doit respecter la loi",
      "Seuls les citoyens français doivent respecter la loi",
      "La France possède des lois",
      "Le président décide des lois"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! La loi s'applique à tous sans exception.
中：正确。法律对所有人都适用。

❌ B. Faux. La loi s'applique à toute personne sur le territoire.
中：错误。法律适用于所有人。

❌ C. Faux. Avoir des lois ne suffit pas à définir l'État de droit.
中：错误。有法律不等于法治国家。

❌ D. Faux. Les lois sont votées par le Parlement.
中：错误。法律由议会制定。`
  },
  {
    id: "de0049",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：49中（没有o）
    question: "La justice en France est rendue...",
    options: [
      "au nom du peuple français",
      "au nom du président de la République",
      "au nom du gouvernement",
      "au nom des magistrats"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! Les décisions de justice sont rendues au nom du peuple français.
中：正确。法国司法以法国人民的名义行使。

❌ B. Faux. La justice est indépendante du président.
中：错误。司法不依附于总统。

❌ C. Faux. Le gouvernement ne rend pas la justice.
中：错误。政府不行使司法权。

❌ D. Faux. Les magistrats jugent mais au nom du peuple.
中：错误。法官是以人民的名义判决。`
  },
  {
    id: "de0050",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：50简单（没有o）
    question: "Le vote en France est :",
    options: [
      "secret",
      "public",
      "obligatoire seulement pour les maires",
      "ouvert aux mineurs"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! Le vote est secret pour garantir la liberté de choix.
中：正确。投票是秘密的，以保障自由选择。

❌ B. Faux. Le vote n'est pas public.
中：错误。投票不是公开的。

❌ C. Faux. Le vote n'est obligatoire pour personne.
中：错误。投票对任何人都不是强制的。

❌ D. Faux. Les mineurs ne peuvent pas voter.
中：错误。未成年人不能投票。`
  },
  {
    id: "de0051",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：51 中（没有o）
    question: "Dans une démocratie, le pouvoir politique est :",
    options: [
      "élu par les citoyens",
      "imposé par un seul chef",
      "hérité",
      "transmis par la force"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! Dans une démocratie, le pouvoir politique est choisi par les citoyens par le vote.
中：正确。在民主制度中，政治权力由公民通过投票选出。

❌ B. Faux. Cela correspond à un régime autoritaire ou dictatorial.
中：错误。这属于专制或独裁制度。

❌ C. Faux. Le pouvoir héréditaire caractérise la monarchie.
中：错误。世袭权力是君主制的特征。

❌ D. Faux. La force ne fonde pas une démocratie.
中：错误。武力不能建立民主制度。`
  },
  {
    id: "de0052",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：52中（没有o）
    question: "Qui contrôle les autorités publiques dans un État de droit ?",
    options: [
      "Le président seulement",
      "Les juges indépendants",
      "Les ministres",
      "Les citoyens directement"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le président n'a pas un pouvoir de contrôle unique.
中：错误。总统不是唯一的监督者。

✅ B. Correct ! Dans un État de droit, les juges indépendants contrôlent l'action des autorités publiques.
中：正确。在法治国家，独立的法官监督公共权力。

❌ C. Faux. Les ministres font partie du pouvoir exécutif.
中：错误。部长属于行政权。

❌ D. Faux. Les citoyens contrôlent indirectement par le vote, pas directement.
中：错误。公民通过选举进行间接监督，而非直接监督。`
  },
  {
    id: "de0053",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：53 中（没有o）
    question: "La primauté du droit signifie :",
    options: [
      "Que les lois ne concernent que les citoyens",
      "Que le droit s'impose à tous, y compris à l'État",
      "Que les lois changent constamment",
      "Que la justice peut être ignorée par l'État"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Les lois s'appliquent à tous.
中：错误。法律适用于所有人。

✅ B. Correct ! La primauté du droit signifie que même l'État doit respecter la loi.
中：正确。法治优先原则意味着国家本身也必须遵守法律。

❌ C. Faux. La stabilité du droit est un principe important.
中：错误。法律应具有稳定性。

❌ D. Faux. L'État est soumis aux décisions de justice.
中：错误。国家必须服从司法裁决。`
  },
  {
    id: "de0054",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：54 中（没有o）
    question: "Quel principe n'appartient pas à l'État de droit ?",
    options: [
      "L'égalité devant la loi",
      "La légalité",
      "La sécurité juridique",
      "La monarchie"
    ],
    answer: 3,
    explanation: `❌ A. Faux. C'est un principe fondamental de l'État de droit.
中：错误。这是法治国家的基本原则。

❌ B. Faux. La légalité est au cœur de l'État de droit.
中：错误。合法性是法治国家的核心。

❌ C. Faux. La sécurité juridique est essentielle à l'État de droit.
中：错误。法律确定性是法治国家的重要原则。

✅ D. Correct ! La monarchie n'est pas un principe juridique de l'État de droit.
中：正确。君主制不是法治国家的法律原则。`
  },
  {
    id: "de0055",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：55 中（没有o）
    question: "La légalité implique :",
    options: [
      "Des lois créées de façon arbitraire",
      "Des lois créées dans un processus démocratique",
      "Des lois non écrites",
      "Des lois uniquement pour le gouvernement"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Les lois ne sont pas arbitraires.
中：错误。法律不是随意制定的。

✅ B. Correct ! Les lois sont votées par des représentants élus.
中：正确。法律通过民主程序制定。

❌ C. Faux. Les lois sont écrites et publiées.
中：错误。法律是成文的。

❌ D. Faux. Les lois s'appliquent à tous.
中：错误。法律不是只适用于政府。`
  },
  {
    id: "de0056",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：56简单（没有o）
    question: "L'État de droit doit respecter :",
    options: [
      "Les lois internationales uniquement",
      "La Constitution française et la Déclaration des droits de l'homme et du citoyen de 1789",
      "La volonté du gouvernement",
      "Le président"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Il doit aussi respecter le droit interne.
中：错误。不仅要遵守国际法。

✅ B. Correct ! Ces textes sont fondamentaux en France.
中：正确。宪法和《1789 年人权宣言》是法国的基本法律文件。

❌ C. Faux. Le gouvernement est soumis à la loi.
中：错误。政府受法律约束。

❌ D. Faux. Le président n'est pas au-dessus des lois.
中：错误。总统不凌驾于法律之上。`
  },
  {
    id: "de0057",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：57简单（没有o）
    question: "Le mot démocratie signifie :",
    options: [
      "Pouvoir des riches",
      "Pouvoir du peuple",
      "Pouvoir d'un roi",
      "Pouvoir de l'armée"
    ],
    answer: 1,
    explanation: `❌ A. Faux. La démocratie ne dépend pas de la richesse.
中：错误。民主不是富人的权力。

✅ B. Correct ! Le mot démocratie signifie « pouvoir du peuple ».
中：正确。民主一词的含义是"人民的权力"。

❌ C. Faux. Cela correspond à la monarchie.
中：错误。这是君主制。

❌ D. Faux. Le pouvoir militaire ne définit pas une démocratie.
中：错误。军权不是民主的基础。`
  },
  {
    id: "de0058",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：58简单（没有o）
    question: "La France est une démocratie parce que :",
    options: [
      "Le président décide tout",
      "Les citoyens votent pour leurs représentants",
      "La loi est ignorée",
      "Il n'y a qu'un parti politique"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le pouvoir n'est pas concentré entre les mains d'une seule personne.
中：错误。权力并非集中在总统一人手中。

✅ B. Correct ! Les citoyens participent à la vie politique par le vote.
中：正确。公民通过投票选举代表参与政治。

❌ C. Faux. La loi est respectée dans une démocratie.
中：错误。民主制度中必须尊重法律。

❌ D. Faux. Une démocratie repose sur le pluralisme politique.
中：错误。民主制度下存在多党制。`
  },
  {
    id: "de0059",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：59 中（没有o）
    question: "Une République se distingue d'une monarchie par :",
    options: [
      "Le pouvoir héréditaire",
      "Le pouvoir exercé par des représentants élus",
      "L'absence de lois",
      "L'absence de citoyens"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le pouvoir héréditaire est propre à la monarchie.
中：错误。世袭权力是君主制特征。

✅ B. Correct ! En République, les dirigeants sont élus.
中：正确。共和国中权力由民选代表行使。

❌ C. Faux. Une République possède des lois.
中：错误。共和国有法律体系。

❌ D. Faux. Les citoyens sont au cœur de la République.
中：错误。公民是共和国的核心。`
  },
  {
    id: "de0060",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：60简单（没有o）
    question: "Le droit de vote est :",
    options: [
      "Obligatoire",
      "Un droit fondamental",
      "Réservé aux hommes",
      "Réservé aux riches"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le vote n'est pas obligatoire en France.
中：错误。法国投票不是强制性的。

✅ B. Correct ! Le droit de vote est un droit fondamental du citoyen.
中：正确。投票权是公民的基本权利。

❌ C. Faux. Les femmes ont le droit de vote.
中：错误。女性同样拥有投票权。

❌ D. Faux. La richesse n'est pas une condition pour voter.
中：错误。财富不是投票条件。`
  },
  {
    id: "de0061",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "simple",
    typeQuestion: "question simulée", // 文档：61简单（没有o）
    question: "Le vote est :",
    options: [
      "Personnel, libre, secret",
      "Public et obligatoire",
      "Décidé par le maire",
      "Optionnel uniquement pour le président"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! Ce sont les principes fondamentaux du vote.
中：正确。投票是个人的、自由的、秘密的。

❌ B. Faux. Le vote n'est ni public ni obligatoire.
中：错误。投票不是公开的，也不是强制的。

❌ C. Faux. Chacun choisit librement.
中：错误。投票选择由个人决定。

❌ D. Faux. Ces règles s'appliquent à toutes les élections.
中：错误。这些原则适用于所有选举。`
  },
  {
    id: "de0062",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：62中（没有o）
    question: "Un citoyen peut voter pour quelqu'un d'autre seulement si :",
    options: [
      "Il est malade",
      "Il a fait une procuration",
      "Il est mineur",
      "Il ne peut jamais"
    ],
    answer: 1,
    explanation: `❌ A. Faux. La maladie seule ne suffit pas.
中：错误。仅仅生病并不够。

✅ B. Correct ! Une procuration officielle est nécessaire.
中：正确。必须办理正式的投票委托。

❌ C. Faux. Un mineur ne peut pas voter.
中：错误。未成年人没有投票权。

❌ D. Faux. Le vote par procuration est possible.
中：错误。可以通过委托投票。`
  },
  {
    id: "de0063",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：63中（没有o）
    question: "Droit civique et politique :",
    options: [
      "Droit de se présenter à une élection",
      "Droit de décider la loi",
      "Droit de voter uniquement pour le président",
      "Droit d'éliminer un élu"
    ],
    answer: 0,
    explanation: `✅ A. Correct ! Se présenter à une élection est un droit politique.
中：正确。参选权是一项公民政治权利。

❌ B. Faux. Les lois sont votées par les représentants élus.
中：错误。法律由民选代表制定。

❌ C. Faux. Le vote concerne plusieurs élections.
中：错误。投票不仅限于总统选举。

❌ D. Faux. Cela est illégal.
中：错误。这是违法行为。`
  },
  {
    id: "de0064",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：64 中（没有o）
    question: "Élections au suffrage universel indirect :",
    options: [
      "Présidentielles",
      "Sénatoriales",
      "Municipales",
      "Européennes"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le président est élu au suffrage universel direct.
中：错误。总统是直接普选产生的。

✅ B. Correct ! Les sénateurs sont élus au suffrage universel indirect.
中：正确。参议员通过间接普选产生。

❌ C. Faux. Les municipales sont au suffrage direct.
中：错误。市政选举是直接普选。

❌ D. Faux. Les européennes sont au suffrage direct.
中：错误。欧洲选举是直接普选。`
  },
  {
    id: "de0065",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：65中（没有o）
    question: "Madame X et Monsieur Y sont mariés. Lors d'une élection, peuvent-ils voter ensemble ?",
    options: [
      "Oui, ils peuvent voter ensemble car ils sont mari et femme",
      "Non, le vote est une action personnelle et chacun doit voter individuellement",
      "Oui, mais seulement si le vote se fait à domicile ou par procuration",
      "Non, ils doivent voter à des élections différentes selon leur âge"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le mariage ne permet pas de voter ensemble.
中：错误。婚姻关系不能共同投票。

✅ B. Correct ! Le vote est personnel et individuel.
中：正确。投票是个人行为，必须各自投票。

❌ C. Faux. Même dans ces cas, le vote reste personnel.
中：错误。即使在这些情况下，投票仍然是个人行为。

❌ D. Faux. L'âge n'impose pas des élections différentes.
中：错误。年龄不会导致不同选举。`
  },
  {
    id: "de0066",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：66中（没有o）
    question: "madame X et sa sœur habitent ensemble. Lors des élections municipales, peuvent-ils voter ensemble ?",
    options: [
      "Oui, s'ils veulent montrer leur opinion commune",
      "Non, le vote est personnel et chacun doit voter séparément",
      "Oui, ils peuvent voter ensemble dans le même isoloir pour gagner du temps",
      "Non, ils doivent voter dans des bureaux différents selon leur âge"
    ],
    answer: 1,
    explanation: `❌ A. Faux. L'opinion doit rester individuelle.
中：错误。意见必须是个人的。

✅ B. Correct ! Le vote est personnel et secret.
中：正确。投票是个人且秘密的。

❌ C. Faux. Il est interdit de voter à plusieurs dans un isoloir.
中：错误。禁止多人进入同一投票间。

❌ D. Faux. L'âge n'impose pas de bureau différent.
中：错误。年龄不会影响投票地点。`
  },
  {
    id: "de0067",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：67中（没有o）
    question: "Une mère demande à son fils d'aller voter pour un certain candidat. Que doit faire le fils ?",
    options: [
      "Il doit voter comme sa mère le souhaite",
      "Il peut voter librement, le vote est secret et personnel",
      "Il peut partager son bulletin avec sa mère pour approbation",
      "Il doit annuler son vote si sa mère n'est pas d'accord"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Personne ne peut imposer un choix de vote.
中：错误。任何人都不能强迫投票选择。

✅ B. Correct ! Le choix du vote est libre.
中：正确。投票是自由且秘密的。

❌ C. Faux. Le bulletin doit rester secret.
中：错误。选票必须保密。

❌ D. Faux. L'accord familial n'est pas requis.
中：错误。家庭同意不是必须的。`
  },
  {
    id: "de0068",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：68中（没有o）
    question: "Madame X veut que son mari vote à sa place car elle est malade. Que doit-elle faire ?",
    options: [
      "Lui remettre son bulletin et il vote pour elle",
      "Rien, elle ne peut pas voter si elle est malade",
      "Faire une procuration officielle afin que son mari puisse voter en son nom",
      "Voter ensemble dans l'isoloir"
    ],
    answer: 2,
    explanation: `❌ A. Faux. Cela est interdit.
中：错误。这是违法的。

❌ B. Faux. Elle peut voter par procuration.
中：错误。可以通过委托投票。

✅ C. Correct ! La procuration est la seule solution légale.
中：正确。正式委托是唯一合法方式。

❌ D. Faux. L'isoloir est strictement individuel.
中：错误。投票间必须单独使用。`
  },
  {
    id: "de0069",
    type: "carte multi",
    category: "Démocratie et droit de vote",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 文档：69中（没有o）
    question: "Dans une famille, le père insiste pour que tous les enfants votent pour le même parti. Que peuvent faire les enfants ?",
    options: [
      "Suivre son avis pour éviter des conflits",
      "Voter librement, le vote est secret et personne ne peut imposer son choix",
      "Voter tous ensemble pour montrer l'unité familiale",
      "Annuler leur vote si la famille n'est pas d'accord"
    ],
    answer: 1,
    explanation: `❌ A. Faux. Le vote doit rester libre.
中：错误。投票必须是自由的。

✅ B. Correct ! Le secret du vote protège la liberté individuelle.
中：正确。投票秘密保障个人自由。

❌ C. Faux. Le vote collectif est interdit.
中：错误。集体投票是禁止的。

❌ D. Faux. Le vote ne dépend pas de l'accord familial.
中：错误。投票不取决于家庭意见。`
  },
 
  {
    id: "dr0035",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Quelle liberté permet à une personne de ne pas avoir de religion ?",
    options: [
      "Liberté de réunion",
      " Liberté de conscience",
      "Liberté d'expression",
      "Liberté de circulation"
    ],
    answer: 1,
    explanation: `❌ A. Liberté de réunion - Faux. Liée au droit de réunion, mais ne concerne pas le choix de la religion.
中：错误。与集会相关，不涉及信仰选择。
✅ B. Liberté de  conscience - Correct ! Cette liberté inclut le droit de croire ou de ne pas croire.
中：正确。宗教自由包括信仰或不信仰。

❌ C. Liberté d'expression - Faux. Elle concerne le droit de s'exprimer, pas forcément la religion.
中：错误。表达自由不等于宗教自由。

❌ D. Liberté de circulation - Faux. Cela concerne le droit de se déplacer, pas la religion.
中：错误。出行自由与宗教无关。`
  },
  {
    id: "dr0036",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "Une femme peut avorter :",
    options: [
      "Seulement si elle est mariée",
      "Dans certaines conditions",
      "Jamais",
      "Seulement à l'étranger"
    ],
    answer: 1,
    explanation: `❌ A. Seulement si elle est mariée - Faux. Le mariage n'est pas une condition pour avorter.
中：错误。结婚不是堕胎条件。

✅ B. Dans certaines conditions - Correct ! L'avortement est autorisé selon la loi (délais, situation médicale, etc.).
中：正确。堕胎在符合法律条件下可进行（如时间限制、医疗情况等）。

❌ C. Jamais - Faux. En France, l'avortement est légal sous conditions.
中：错误。法国在条件允许下合法。

❌ D. Seulement à l'étranger - Faux. En France aussi.
中：错误。法国境内也可以。`
  },
  {
    id: "dr0037",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "Concernant les limites aux libertés individuelles, quelle proposition est correcte ?",
    options: [
      "Il n'y a jamais de limites",
      "Il peut y avoir des limites pour protéger les autres",
      "Les limites n'existent qu'en prison",
      "Les limites sont illégales"
    ],
    answer: 1,
    explanation: `❌ A. Il n'y a jamais de limites - Faux. Certaines libertés peuvent être limitées pour protéger autrui.
中：错误。自由并非完全无限。

✅ B. Il peut y avoir des limites pour protéger les autres - Correct ! Les limites existent pour éviter de nuire à autrui.
中：正确。为保护他人可限制自由。

❌ C. Les limites n'existent qu'en prison - Faux. Les limites peuvent exister dans la société aussi.
中：错误。限制不仅在监狱。

❌ D. Les limites sont illégales - Faux. Des limites légales existent dans une démocratie.
中：错误。合法限制是允许的。`
  },
  {
    id: "dr0038",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"o简单"标记
    question: "Pourquoi les libertés individuelles peuvent-elles être limitées ?",
    options: [
      "Pour protéger l'intérêt général",
      "Pour faire plaisir au gouvernement",
      "Pour interdire toutes les libertés",
      "Pour augmenter les taxes"
    ],
    answer: 0,
    explanation: `✅ A. Pour protéger l'intérêt général - Correct ! L'État limite parfois les libertés pour le bien commun.
中：正确。国家可为公共利益限制自由。

❌ B. Pour faire plaisir au gouvernement - Faux. Ce n'est pas un motif légal.
中：错误。不是合法理由。

❌ C. Pour interdire toutes les libertés - Faux. Cela serait contraire aux droits fondamentaux.
中：错误。全面禁止自由违背基本权利。

❌ D. Pour augmenter les taxes - Faux. L'augmentation des impôts n'est pas une raison de limiter les libertés.
中：错误。增税不是理由。`
  },
  {
    id: "dr0039",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"o简单"标记
    question: "Que permet la citoyenneté française ?",
    options: [
      "Avoir des droits et devoirs en France",
      "Voyager gratuitement partout",
      "Ne pas respecter la loi",
      "Avoir un travail sans diplôme"
    ],
    answer: 0,
    explanation: `✅ A. Avoir des droits et devoirs en France - Correct ! La citoyenneté donne des droits civiques et des devoirs.
中：正确。公民身份带来权利和义务。

❌ B. Voyager gratuitement partout - Faux. La citoyenneté ne donne pas ce droit.
中：错误。不能免费旅行。

❌ C. Ne pas respecter la loi - Faux. Au contraire, on doit respecter la loi.
中：错误。必须守法。

❌ D. Avoir un travail sans diplôme - Faux. La citoyenneté ne garantit pas un emploi.
中：错误。没有保证工作。`
  },
  {
    id: "dr0040",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Parmi les valeurs garanties par les droits fondamentaux, on trouve :",
    options: [
      "La popularité",
      "La dignité",
      "La concurrence",
      "La performance"
    ],
    answer: 1,
    explanation: `❌ A. La popularité - Faux. La popularité dépend de l'opinion des autres, ce n'est pas une valeur protégée par les droits fondamentaux.
中：错误。受欢迎程度不是基本权利保障的价值。

✅ B. La dignité - Correct ! Les droits fondamentaux protègent la dignité humaine, c'est une valeur centrale.
中：正确。基本权利的核心价值之一是保障人的尊严。

❌ C. La concurrence - Faux. La concurrence est un concept économique, pas une valeur protégée par les droits fondamentaux.
中：错误。竞争是经济概念，不属于基本权利保障范围。

❌ D. La performance - Faux. La performance est liée à la réussite ou au rendement, pas aux droits fondamentaux.
中：错误。绩效不是基本权利保障的价值。`
  },
  {
    id: "dr0041",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Combien de grandes catégories de droits fondamentaux distingue-t-on ?",
    options: [
      "Une",
      "Deux",
      "Trois",
      "Quatre"
    ],
    answer: 2,
    explanation: `❌ A. Une - Faux. Il y a plusieurs catégories, pas une seule.
中：错误。基本权利不止一类。

❌ B. Deux - Faux. On en distingue généralement trois grandes catégories.
中：错误。通常有三类。

✅ C. Trois - Correct ! On distingue souvent : droits civils/politiques, droits économiques/sociaux, droits collectifs.
中：正确。通常分为：公民政治权利、经济社会权利、集体权利三类。

❌ D. Quatre - Faux. Quatre n'est pas la classification la plus courante.
中：错误。四类不是常见分类。`
  },
  {
    id: "dr0042",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Les droits liés à la personne humaine sont aussi appelés :",
    options: [
      "Droits collectifs",
      "Droits naturels",
      "Droits commerciaux",
      "Droits fiscaux"
    ],
    answer: 1,
    explanation: `❌ A. Droits collectifs - Faux. Les droits collectifs concernent un groupe, pas l'individu.
中：错误。集体权利是群体权利。

✅ B. Droits naturels - Correct ! Les droits liés à la personne sont souvent appelés droits naturels ou droits de l'homme.
中：正确。与个人相关的权利通常称为自然权利/人权。

❌ C. Droits commerciaux - Faux. Ce sont des droits liés au commerce.
中：错误。商业权利。

❌ D. Droits fiscaux - Faux. Ce sont des droits liés aux impôts.
中：错误。税务权利。`
  },
  {
    id: "dr0043",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"o简单"标记
    question: "Le droit à l'égalité signifie que :",
    options: [
      "Tout le monde gagne la même chose",
      "La loi s'applique de la même façon à tous",
      "Les citoyens ont tous les mêmes opinions",
      "Les lois ne s'appliquent pas aux mineurs"
    ],
    answer: 1,
    explanation: `❌ A. Tout le monde gagne la même chose - Faux. L'égalité ne signifie pas une égalité des revenus.
中：错误。平等不等于收入相同。

✅ B. La loi s'applique de la même façon à tous - Correct ! Tous doivent être traités de façon égale devant la loi.
中：正确。法律面前人人平等。

❌ C. Les citoyens ont tous les mêmes opinions - Faux. Les opinions peuvent être différentes.
中：错误。意见可以不同。

❌ D. Les lois ne s'appliquent pas aux mineurs - Faux. Les mineurs sont aussi soumis à la loi.
中：错误。未成年人也受法律约束。`
  },
  {
    id: "dr0044",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"o简单"标记
    question: "Le suffrage universel correspond :",
    options: [
      "Au droit de manifester",
      "Au droit de vote pour tous les citoyens",
      "Au droit de travailler",
      "Au droit de voyager"
    ],
    answer: 1,
    explanation: `❌ A. Au droit de manifester - Faux. Le suffrage universel concerne le vote, pas la manifestation.
中：错误。普选与示威无关。

✅ B. Au droit de vote pour tous les citoyens - Correct ! Tous les citoyens peuvent voter (selon l'âge et les conditions légales).
中：正确。普选是所有公民有投票权。

❌ C. Au droit de travailler - Faux. Le travail n'est pas lié au suffrage universel.
中：错误。工作权与普选无关。

❌ D. Au droit de voyager - Faux. Le droit de voyager n'est pas lié au suffrage universel.
中：错误。旅行权与普选无关。`
  },
  {
    id: "dr0045",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"o简单"标记
    question: "La liberté d'expression permet :",
    options: [
      "De critiquer sans aucune limite",
      "De s'exprimer dans le respect de la loi",
      "D'insulter librement",
      "De diffuser de fausses informations"
    ],
    answer: 1,
    explanation: `❌ A. De critiquer sans aucune limite - Faux. Il existe des limites (diffamation, incitation à la haine).
中：错误。批评也有法律限制。

✅ B. De s'exprimer dans le respect de la loi - Correct ! On peut parler librement tant qu'on respecte la loi.
中：正确。言论自由需遵守法律。

❌ C. D'insulter librement - Faux. L'insulte peut être sanctionnée.
中：错误。侮辱可能违法。

❌ D. De diffuser de fausses informations - Faux. La diffusion de fake news peut être punie.
中：错误。传播谣言可能受罚。`
  },
  {
    id: "dr0046",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "Le droit de grève est :",
    options: [
      "Un droit politique",
      "Un droit religieux",
      "Un droit social",
      "Un droit privé"
    ],
    answer: 2,
    explanation: `❌ A. Un droit politique - Faux. Le droit de grève concerne surtout les travailleurs, pas la politique.
中：错误。罢工权主要是劳动权利，不是政治权利。

❌ B. Un droit religieux - Faux. La grève n'est pas liée à la religion.
中：错误。与宗教无关。

✅ C. Un droit social - Correct ! La grève est un droit lié au travail et aux conditions sociales.
中：正确。罢工是劳动和社会权利。

❌ D. Un droit privé - Faux. Ce n'est pas un droit privé, mais un droit collectif/professionnel.
中：错误。不是私人权利，而是集体/职业权利。`
  },
    {
    id: "dr0047",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "Le droit à la sûreté protège notamment :",
    options: [
      "La liberté de commerce",
      "Les droits de la défense",
      "Le droit de vote",
      "Le droit au logement"
    ],
    answer: 1,
    explanation: `❌ A. La liberté de commerce - Faux. La sûreté concerne la sécurité des personnes, pas le commerce.
中：错误。安全权与商业自由无关。

✅ B. Les droits de la défense - Correct ! La sûreté protège contre les arrestations arbitraires et garantit une procédure juste, y compris le droit de se défendre.
中：正确。安全权保护免遭任意逮捕，并保障公正程序与辩护权。

❌ C. Le droit de vote - Faux. C'est un droit politique, pas lié à la sûreté.
中：错误。投票权属于政治权利。

❌ D. Le droit au logement - Faux. C'est un droit économique et social, pas le droit à la sûreté.
中：错误。住房权属于社会经济权利。`
  },
  {
    id: "dr0048",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "Les droits économiques et sociaux concernent surtout :",
    options: [
      "Les libertés politiques",
      "Les conditions de vie",
      "Les élections",
      "La justice pénale"
    ],
    answer: 1,
    explanation: `❌ A. Les libertés politiques - Faux. Les libertés politiques appartiennent aux droits civils et politiques.
中：错误。政治自由属于公民政治权利。

✅ B. Les conditions de vie - Correct ! Ils concernent le travail, la santé, le logement, l'éducation.
中：正确。涉及工作、健康、住房、教育等生活条件。

❌ C. Les élections - Faux. Les élections relèvent des droits politiques.
中：错误。选举是政治权利。

❌ D. La justice pénale - Faux. La justice pénale concerne les droits judiciaires.
中：错误。刑事司法属于司法权利。`
  },
  {
    id: "dr0049",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "Le droit à l'éducation fait partie des droits :",
    options: [
      "Individuels",
      "Économiques et sociaux",
      "Collectifs internationaux",
      "Politiques"
    ],
    answer: 1,
    explanation: `❌ A. Individuels - Faux. L'éducation est un droit social garanti par l'État.
中：错误。教育是社会权利。

✅ B. Économiques et sociaux - Correct ! L'État doit garantir l'accès à l'éducation.
中：正确。国家必须保障教育权。

❌ C. Collectifs internationaux - Faux. Ce n'est pas un droit collectif international.
中：错误。不是国际集体权利。

❌ D. Politiques - Faux. Ce n'est pas un droit politique.
中：错误。不是政治权利。`
  },
  {
    id: "dr0050",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"o简单"标记
    question: "Contrairement aux droits naturels, les droits sociaux nécessitent :",
    options: [
      "La religion",
      "L'intervention de l'État",
      "Le vote obligatoire",
      "Une majorité parlementaire"
    ],
    answer: 1,
    explanation: `❌ A. La religion - Faux. La religion n'est pas nécessaire pour les droits sociaux.
中：错误。宗教不是必要条件。

✅ B. L'intervention de l'État - Correct ! Les droits sociaux demandent des actions publiques (école, santé, protection sociale).
中：正确。社会权利需要国家提供公共服务（教育、医疗、社会保障）。

❌ C. Le vote obligatoire - Faux. Le vote obligatoire n'est pas lié aux droits sociaux.
中：错误。投票义务无关。

❌ D. Une majorité parlementaire - Faux. Ce n'est pas une condition obligatoire.
中：错误。不是必要条件。`
  },
  {
    id: "dr0051",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "Les droits de troisième génération reposent principalement sur :",
    options: [
      "L'individualisme",
      "La solidarité",
      "La concurrence",
      "La hiérarchie"
    ],
    answer: 1,
    explanation: `❌ A. L'individualisme - Faux. Les droits de troisième génération concernent la collectivité, pas l'individu seul.
中：错误。第三代权利强调集体，不是个人主义。

✅ B. La solidarité - Correct ! Ces droits reposent sur la solidarité entre les peuples et les générations (ex : environnement, paix).
中：正确。第三代权利基于不同国家与世代之间的团结（如环境、和平权）。

❌ C. La concurrence - Faux. La concurrence est un concept économique, pas une valeur centrale des droits de troisième génération.
中：错误。竞争是经济概念，不是第三代权利核心价值。

❌ D. La hiérarchie - Faux. Les droits de troisième génération visent l'égalité et la coopération, pas la hiérarchie.
中：错误。强调平等与合作，不是等级制度。`
  },
  {
    id: "dr0052",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "Le droit à un environnement sain concerne :",
    options: [
      "Un seul pays",
      "Les générations futures",
      "Les entreprises seulement",
      "Les zones urbaines"
    ],
    answer: 1,
    explanation: `❌ A. Un seul pays - Faux. L'environnement est un enjeu mondial qui dépasse les frontières.
中：错误。环境问题跨国界，不只一个国家。

✅ B. Les générations futures - Correct ! Ce droit protège la planète pour les générations à venir.
中：正确。环境权旨在为未来世代保护地球。

❌ C. Les entreprises seulement - Faux. Tout le monde est concerné, pas seulement les entreprises.
中：错误。所有人都受影响，不仅企业。

❌ D. Les zones urbaines - Faux. Cela concerne aussi les zones rurales et la nature.
中：错误。不仅城市地区。`
  },
  {
    id: "dr0053",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "La dignité humaine signifie que chaque personne :",
    options: [
      "Doit être productive",
      "A une valeur propre",
      "Doit être en bonne santé",
      "Est jugée sur ses revenus"
    ],
    answer: 1,
    explanation: `❌ A. Doit être productive - Faux. La dignité ne dépend pas de la productivité.
中：错误。尊严不以生产力为条件。

✅ B. A une valeur propre - Correct ! La dignité reconnaît la valeur intrinsèque de chaque être humain.
中：正确。尊严意味着每个人都有自身价值。

❌ C. Doit être en bonne santé - Faux. La dignité existe même en cas de maladie.
中：错误。生病不影响尊严。

❌ D. Est jugée sur ses revenus - Faux. La dignité ne dépend pas des revenus.
中：错误。收入不决定尊严。`
  },
  {
    id: "dr0054",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"o简单"标记
    question: "La dignité humaine interdit de traiter une personne comme :",
    options: [
      "Un citoyen",
      "Un objet",
      "Un sujet de droit",
      "Un individu"
    ],
    answer: 1,
    explanation: `❌ A. Un citoyen - Faux. Traiter quelqu'un comme un citoyen est respectueux.
中：错误。把人当公民是尊重。

✅ B. Un objet - Correct ! Traiter une personne comme un objet est contraire à la dignité humaine.
中：正确。把人当物品对待违背尊严。

❌ C. Un sujet de droit - Faux. Au contraire, la dignité implique qu'on est sujet de droit.
中：错误。尊严意味着人是权利主体。

❌ D. Un individu - Faux. Un individu est une personne, donc ce n'est pas contraire à la dignité.
中：错误。把人当个体是正确的。`
  },
  {
    id: "dr0055",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "Le droit de disposer de son corps concerne notamment :",
    options: [
      "La propriété privée",
      "La contraception",
      "Le droit de vote",
      "La liberté de circulation"
    ],
    answer: 1,
    explanation: `❌ A. La propriété privée - Faux. La propriété privée concerne les biens, pas le corps humain.
中：错误。财产权是关于物品，不是身体。

✅ B. La contraception - Correct ! La contraception relève du droit de décider de son corps et de sa santé.
中：正确。避孕属于身体自主权和健康权的一部分。

❌ C. Le droit de vote - Faux. Le vote est un droit politique, pas lié au corps.
中：错误。投票是政治权利，不是身体权。

❌ D. La liberté de circulation - Faux. La circulation concerne le déplacement, pas le corps.
中：错误。出行自由不是身体自主权。`
  },
  {
    id: "dr0056",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "La contraception d'urgence peut être obtenue :",
    options: [
      "Seulement à l'hôpital",
      "Sans ordonnance",
      "Uniquement par les adultes",
      "Avec l'accord des parents"
    ],
    answer: 1,
    explanation: `❌ A. Seulement à l'hôpital - Faux. La contraception d'urgence n'est pas réservée à l'hôpital.
中：错误。紧急避孕药并不只能在医院获得。

✅ B. Sans ordonnance - Correct ! La contraception d'urgence peut être obtenue sans ordonnance, en pharmacie.
中：正确。紧急避孕药可在药店购买，无需处方。

❌ C. Uniquement par les adultes - Faux. Les mineurs peuvent aussi obtenir la contraception d'urgence.
中：错误。未成年人也可以获得紧急避孕药。

❌ D. Avec l'accord des parents - Faux. L'accord des parents n'est pas nécessaire pour la contraception d'urgence.
中：错误。紧急避孕药不需要父母同意。`
  },
  {
    id: "dr0057",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"o中"标记
    question: "L'IVG est autorisée en France :",
    options: [
      "Sans aucune règle",
      "Dans un cadre légal précis",
      "Seulement à l'étranger",
      "Uniquement pour les majeures"
    ],
    answer: 1,
    explanation: `❌ A. Sans aucune règle - Faux. L'IVG est encadrée par une législation précise.
中：错误。人工流产在法国有明确的法律框架。

✅ B. Dans un cadre légal précis - Correct ! L'IVG est autorisée dans un cadre légal précis (délais, conditions, etc.).
中：正确。人工流产在法国在特定法律规定下允许（期限、条件等）。

❌ C. Seulement à l'étranger - Faux. L'IVG est autorisée en France.
中：错误。人工流产在法国境内也是允许的。

❌ D. Uniquement pour les majeures - Faux. Les mineures peuvent aussi y avoir accès.
中：错误。未成年人也可获得人工流产服务。`
  },
  {
    id: "dr0058",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"o简单"标记
    question: "Le mariage en France repose sur :",
    options: [
      "Une obligation familiale",
      "Le consentement libre",
      "Une autorisation administrative",
      "Une condition religieuse"
    ],
    answer: 1,
    explanation: `❌ A. Une obligation familiale - Faux. Le mariage n'est pas une obligation familiale.
中：错误。结婚不是家庭强制要求。

✅ B. Le consentement libre - Correct ! Le mariage repose sur le consentement libre des deux personnes.
中：正确。结婚基于双方自由同意。

❌ C. Une autorisation administrative - Faux. L'administration enregistre, mais le mariage repose sur le consentement.
中：错误。行政登记不是结婚的本质条件。

❌ D. Une condition religieuse - Faux. Le mariage civil est indépendant de la religion.
中：错误。民事婚姻与宗教无关。`
  },
  {
    id: "dr0059",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"o简单"标记
    question: "Mettre fin à un PACS peut se faire :",
    options: [
      "Par décision du juge uniquement",
      "Par une démarche simple en mairie",
      "Par référendum",
      "Par contrat privé"
    ],
    answer: 1,
    explanation: `❌ A. Par décision du juge uniquement - Faux. Le PACS peut être dissous sans intervention du juge.
中：错误。解除PACS不需要法院决定。

✅ B. Par une démarche simple en mairie - Correct ! La dissolution du PACS se fait par une déclaration à la mairie ou par acte d'avocat selon les cas.
中：正确。解除PACS可通过简单的行政手续（在市政厅办理）或律师手续。

❌ C. Par référendum - Faux. Le PACS n'est pas soumis à un référendum.
中：错误。不是通过公投决定。

❌ D. Par contrat privé - Faux. La dissolution doit être enregistrée officiellement.
中：错误。不能仅靠私人合同解除。`
  },
  {
    id: "dr0060",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"o简单"标记
    question: "Le droit d'avoir ou non des enfants appartient :",
    options: [
      "Au couple uniquement",
      "À chaque individu",
      "À l'État",
      "À la famille"
    ],
    answer: 1,
    explanation: `❌ A. Au couple uniquement - Faux. La décision appartient à chaque individu.
中：错误。生育权属于个人。

✅ B. À chaque individu - Correct ! Chacun a le droit de décider librement d'avoir des enfants ou non.
中：正确。每个人有自主决定权。

❌ C. À l'État - Faux. L'État ne peut pas imposer ou interdire d'avoir des enfants.
中：错误。国家不能强制决定。

❌ D. À la famille - Faux. La famille ne décide pas à la place de l'individu.
中：错误。家庭不能代替个人决定。`
  },
  {
    id: "dr0061",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 标记为"难"，无"o"
    question: "La PMA est ouverte depuis 2021 :",
    options: [
      "Aux couples mariés uniquement",
      "À toutes les femmes",
      "Aux hommes seuls",
      "Aux citoyens français seulement"
    ],
    answer: 1,
    explanation: `❌ A. Aux couples mariés uniquement - Faux. La PMA n'est plus réservée aux couples mariés.
中：错误。2021后不限于已婚夫妻。

✅ B. À toutes les femmes - Correct ! Depuis 2021, la PMA est ouverte à toutes les femmes, y compris célibataires et couples de femmes.
中：正确。2021年起对所有女性开放，包括单身女性和女同性伴侣。

❌ C. Aux hommes seuls - Faux. Les hommes seuls n'ont pas accès à la PMA.
中：错误。男性单身不适用。

❌ D. Aux citoyens français seulement - Faux. Ce n'est pas limité à la nationalité française.
中：错误。不只限法国公民。`
  },

  {
    id: "dr0001",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"1o 中"标记
    question: "À quelle liberté la PMA fait-elle référence ?",
    options: [
      "Liberté d'expression",
      "Liberté de se marier",
      "Liberté de choisir d'avoir un enfant",
      "Liberté de circuler"
    ],
    answer: 2,
    explanation: `❌ A. Liberté d'expression - Faux. La PMA concerne la reproduction, pas la parole.
中：错误。PMA不涉及言论自由。

❌ B. Liberté de se marier - Faux. La PMA concerne la possibilité d'avoir un enfant, pas le mariage.
中：错误。PMA不是结婚权。

✅ C. Liberté de choisir d'avoir un enfant - Correct ! La PMA permet d'avoir un enfant grâce à une aide médicale.
中：正确。PMA是辅助生育，属于选择生育的自由。

❌ D. Liberté de circuler - Faux. Ce n'est pas lié au déplacement.
中：错误。与出行自由无关。`
  },
  {
    id: "dr0002",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"2o 简单"标记
    question: "Concernant le droit de se marier, quelle proposition est correcte ?",
    options: [
      "On peut se marier avec une seule personne à la fois",
      "On peut se marier avec plusieurs personnes",
      "Le mariage est interdit en France",
      "Le mariage n'a pas de règles"
    ],
    answer: 0,
    explanation: `✅ A. On peut se marier avec une seule personne à la fois - Correct ! Le mariage monogame est la règle en France.
中：正确。法国实行一夫一妻制。

❌ B. On peut se marier avec plusieurs personnes - Faux. La polygamie est interdite.
中：错误。多配偶制被禁止。

❌ C. Le mariage est interdit en France - Faux. Le mariage est autorisé.
中：错误。法国允许结婚。

❌ D. Le mariage n'a pas de règles - Faux. Il existe des règles légales strictes.
中：错误。婚姻有法律规定。`
  },
  {
    id: "dr0003",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"3o中"标记
    question: "Au nom de quoi l'État justifie-t-il la restriction des droits ?",
    options: [
      "Pour le plaisir du gouvernement",
      "Pour protéger l'intérêt général",
      "Pour interdire toutes les libertés",
      "Pour enrichir l'État"
    ],
    answer: 1,
    explanation: `❌ A. Pour le plaisir du gouvernement - Faux. L'État ne restreint pas les droits pour son plaisir.
中：错误。政府不会为了满足自己而限制权利。

✅ B. Pour protéger l'intérêt général - Correct ! Les restrictions doivent servir l'intérêt général.
中：正确。限制权利必须为了公共利益。

❌ C. Pour interdire toutes les libertés - Faux. L'État ne peut pas supprimer toutes les libertés.
中：错误。不能全面禁止自由。

❌ D. Pour enrichir l'État - Faux. Ce n'est pas une justification légale.
中：错误。不是合法理由。`
  },
  {
    id: "dr0004",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"4o 简单"标记
    question: "La peine de mort est :",
    options: [
      "Autorisée en France",
      "Interdite en France",
      "Obligatoire pour certains crimes",
      "Décidée par les citoyens"
    ],
    answer: 1,
    explanation: `❌ A. Autorisée en France - Faux. La peine de mort est interdite depuis 1981.
中：错误。法国自1981年废除死刑。

✅ B. Interdite en France - Correct ! La peine de mort est interdite en France.
中：正确。法国已废除死刑。

❌ C. Obligatoire pour certains crimes - Faux. Il n'existe pas de peine de mort en France.
中：错误。法国没有死刑制度。

❌ D. Décidée par les citoyens - Faux. La peine de mort n'est pas décidée par référendum.
中：错误。不是公民决定的。`
  },
  {
    id: "dr0005",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"5中"标记
    question: "En France, l'abolition de la peine de mort a eu lieu :",
    options: [
      "En 1958",
      "En 1974",
      "En 1981",
      "En 2007"
    ],
    answer: 2,
    explanation: `❌ A. En 1958 - Faux. 1958 correspond à la création de la Ve République, pas à l'abolition de la peine de mort.
中：错误。1958年是法兰西第五共和国成立年份，不是废除死刑。

❌ B. En 1974 - Faux. 1974 est une année de changements politiques, mais pas l'abolition de la peine de mort.
中：错误。1974年与废除死刑无关。

✅ C. En 1981 - Correct ! La peine de mort est abolie en France en 1981, sous le gouvernement de François Mitterrand et le ministre de la Justice Robert Badinter.
中：正确。法国于1981年废除死刑，关键人物是司法部长罗伯特·巴迪内。

❌ D. En 2007 - Faux. En 2007, la France a renforcé l'interdiction en inscrivant l'abolition dans la Constitution, mais l'abolition elle-même date de 1981.
中：错误。2007年是把废除死刑写入宪法，但真正废除是1981年。`
  },
  {
    id: "dr0006",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"6o 简单"标记
    question: "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'homme et du Citoyen de 1789 ?",
    options: [
      "\"Liberté, égalité, fraternité\"",
      "\"Le droit de tuer\"",
      "\"La liberté n'existe pas\"",
      "\"L'État est au-dessus de la loi\""
    ],
    answer: 0,
    explanation: `✅ A. "Liberté, égalité, fraternité" - Correct ! C'est la devise de la République française, inspirée par les principes de 1789.
中：正确。该口号源于法国大革命的价值观，后来成为共和国格言。

❌ B. "Le droit de tuer" - Faux. La Déclaration affirme le droit à la vie et la protection des personnes.
中：错误。1789宣言强调生命权，不可能鼓励杀人。

❌ C. "La liberté n'existe pas" - Faux. La Déclaration affirme au contraire la liberté comme valeur essentielle.
中：错误。宣言强调自由存在且应被保障。

❌ D. "L'État est au-dessus de la loi" - Faux. Au contraire, l'État doit respecter la loi et les droits fondamentaux.
中：错误。国家受法律约束。`
  },
  {
    id: "dr0007",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Les droits fondamentaux servent principalement à garantir :",
    options: [
      "Le pouvoir de l'État",
      "Le bien-être et la dignité de chacun",
      "La richesse des citoyens",
      "La supériorité de certaines personnes"
    ],
    answer: 1,
    explanation: `❌ A. Le pouvoir de l'État - Faux. Les droits fondamentaux limitent le pouvoir de l'État pour protéger les citoyens.
中：错误。权利是对国家权力的限制，而不是增强国家权力。

✅ B. Le bien-être et la dignité de chacun - Correct ! Les droits fondamentaux protègent la dignité humaine et garantissent une vie décente.
中：正确。它们保障人的尊严和基本生活条件。

❌ C. La richesse des citoyens - Faux. Ce n'est pas l'objectif principal, même si les droits peuvent contribuer au bien-être.
中：错误。权利不是为了财富，而是为了尊严和平等。

❌ D. La supériorité de certaines personnes - Faux. Les droits fondamentaux sont universels et égaux pour tous.
中：错误。权利强调平等，不允许任何人优越。`
  },
  {
    id: "dr0008",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"8o中"标记
    question: "Le recours à l'avortement est-il autorisé ?",
    options: [
      "Oui, dans certaines conditions",
      "Non, jamais",
      "Oui, seulement pour les hommes",
      "Oui, mais seulement à l'étranger"
    ],
    answer: 0,
    explanation: `✅ A. Oui, dans certaines conditions - Correct ! En France, l'avortement est autorisé dans un délai légal et sous conditions médicales ou sociales.
中：正确。法国允许堕胎，但需符合合法期限和条件。

❌ B. Non, jamais - Faux. L'avortement est autorisé en France et garanti par la loi.
中：错误。法国允许堕胎并且有法律保障。

❌ C. Oui, seulement pour les hommes - Faux. Seules les femmes ou personnes enceintes peuvent avoir recours à l'avortement.
中：错误。只有女性或孕妇才能进行堕胎。

❌ D. Oui, mais seulement à l'étranger - Faux. Il est possible d'avorter légalement en France.
中：错误。无需出国。`
  },
  {
    id: "dr0009",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"9o 简单"标记
    question: "Que contient la Constitution ?",
    options: [
      "Les règles de grammaire",
      "Les droits et devoirs des citoyens",
      "Les recettes de cuisine",
      "Les horaires de transport"
    ],
    answer: 1,
    explanation: `❌ A. Les règles de grammaire - Faux. La Constitution n'est pas un manuel de langue.
中：错误。宪法不是语法书。

✅ B. Les droits et devoirs des citoyens - Correct ! Elle définit les droits fondamentaux et les devoirs des citoyens.
中：正确。宪法规定公民的权利与义务。

❌ C. Les recettes de cuisine - Faux. Ce n'est pas un livre de recettes.
中：错误。不是食谱。

❌ D. Les horaires de transport - Faux. Les horaires ne sont pas inscrits dans la Constitution.
中：错误。没有交通时刻表。`
  },
  {
    id: "dr0010",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"10简单"标记
    question: "Les droits fondamentaux sont applicables :",
    options: [
      "Seulement aux adultes",
      "Uniquement aux citoyens français",
      "À toutes les personnes, sans distinction",
      "Aux personnes riches uniquement"
    ],
    answer: 2,
    explanation: `❌ A. Seulement aux adultes - Faux. Les enfants aussi ont des droits fondamentaux.
中：错误。未成年人也有基本权利。

❌ B. Uniquement aux citoyens français - Faux. Les droits fondamentaux sont universels.
中：错误。不是只针对法国公民。

✅ C. À toutes les personnes, sans distinction - Correct ! Ils s'appliquent à tout le monde, sans discrimination.
中：正确。适用于所有人，不分国籍、年龄等。

❌ D. Aux personnes riches uniquement - Faux. Les droits fondamentaux ne dépendent pas de la richesse.
中：错误。权利不以财富为条件。`
  },
  {
    id: "dr0011",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Les droits fondamentaux sont aussi appelés :",
    options: [
      "Lois administratives",
      "Libertés fondamentales",
      "Règles économiques",
      "Normes scolaires"
    ],
    answer: 1,
    explanation: `❌ A. Lois administratives - Faux. Les droits fondamentaux ne sont pas des règles de l'administration.
中：错误。基本权利不是行政法规。

✅ B. Libertés fondamentales - Correct ! Les droits fondamentaux sont aussi appelés libertés fondamentales.
中：正确。基本权利也称为基本自由。

❌ C. Règles économiques - Faux. Ce n'est pas lié à l'économie.
中：错误。与经济规则无关。

❌ D. Normes scolaires - Faux. Ce ne sont pas des règles de l'école.
中：错误。不是学校规范。`
  },
  {
    id: "dr0012",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"12 o中"标记
    question: "Que garantit la liberté de la presse ?",
    options: [
      "Le droit de dire n'importe quoi",
      "Le droit d'informer librement",
      "Le droit de mentir",
      "Le droit de voler"
    ],
    answer: 1,
    explanation: `❌ A. Le droit de dire n'importe quoi - Faux. La presse doit respecter la loi et ne pas diffuser de fausses informations.
中：错误。新闻不能随意乱说或造谣。

✅ B. Le droit d'informer librement - Correct ! La liberté de la presse protège le droit d'informer et de publier.
中：正确。保障媒体自由报道与发表。

❌ C. Le droit de mentir - Faux. La diffamation et les fausses informations sont interdites.
中：错误。诽谤和虚假信息是违法的。

❌ D. Le droit de voler - Faux. La liberté de la presse ne donne pas le droit de voler.
中：错误。不能盗窃。`
  },
  {
    id: "dr0013",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"13o中"标记
    question: "Que prévoit la Charte de l'environnement ?",
    options: [
      "Les droits des animaux seulement",
      "Les obligations de protection de l'environnement",
      "Les règles de la police",
      "Les lois sur le mariage"
    ],
    answer: 1,
    explanation: `❌ A. Les droits des animaux seulement - Faux. La Charte concerne l'environnement en général, pas seulement les animaux.
中：错误。它是关于环境保护的，不只动物。

✅ B. Les obligations de protection de l'environnement - Correct ! Elle impose aux autorités et aux citoyens de protéger la nature.
中：正确。要求国家和公民共同保护环境。

❌ C. Les règles de la police - Faux. La Charte ne traite pas de la police.
中：错误。与警察规则无关。

❌ D. Les lois sur le mariage - Faux. Elle ne concerne pas le mariage.
中：错误。不是婚姻法律。`
  },
  {
    id: "dr0014",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"14o简单"标记
    question: "Que signifie la dignité humaine ?",
    options: [
      "La valeur de chaque personne",
      "La richesse des personnes",
      "La force physique",
      "La popularité"
    ],
    answer: 0,
    explanation: `✅ A. La valeur de chaque personne - Correct ! La dignité signifie que chaque être humain mérite le respect.
中：正确。人的尊严就是每个人都应受到尊重。

❌ B. La richesse des personnes - Faux. La dignité n'est pas liée à l'argent.
中：错误。尊严不是财富。

❌ C. La force physique - Faux. La dignité n'est pas la puissance corporelle.
中：错误。不是体力强弱。

❌ D. La popularité - Faux. La dignité ne dépend pas de la popularité.
中：错误。不是受欢迎程度。`
  },
  {
    id: "dr0015",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"15o简单"标记
    question: "Que signifie le droit de manifester ?",
    options: [
      "Le droit de voler",
      "Le droit de se réunir pour protester",
      "Le droit d'attaquer la police",
      "Le droit d'éviter la loi"
    ],
    answer: 1,
    explanation: `❌ A. Le droit de voler - Faux. Manifester ne veut pas dire voler.
中：错误。示威不是偷东西。

✅ B. Le droit de se réunir pour protester - Correct ! La manifestation permet de se rassembler pacifiquement pour exprimer une opinion.
中：正确。示威是和平集会表达意见。

❌ C. Le droit d'attaquer la police - Faux. La violence est interdite pendant une manifestation.
中：错误。暴力行为不允许。

❌ D. Le droit d'éviter la loi - Faux. On doit toujours respecter la loi même en manifestant.
中：错误。示威不能违反法律。`
  },
  {
    id: "dr0016",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"16 o简单"标记
    question: "Que signifie PMA ?",
    options: [
      "Protection Médicale Anonyme",
      "Procréation Médicalement Assistée",
      "Permission de Mariage Administratif",
      "Prévention des Maladies Adultes"
    ],
    answer: 1,
    explanation: `❌ A. Protection Médicale Anonyme - Faux. Ce n'est pas le bon sens.
中：错误。不是这个意思。

✅ B. Procréation Médicalement Assistée - Correct ! La PMA aide à concevoir un enfant grâce à la médecine.
中：正确。PMA是医学辅助生育。

❌ C. Permission de Mariage Administratif - Faux. PMA n'a rien à voir avec le mariage.
中：错误。与婚姻无关。

❌ D. Prévention des Maladies Adultes - Faux. Ce n'est pas une prévention médicale générale.
中：错误。不是成人疾病预防。`
  },
  {
    id: "dr0017",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"17 o 简单"标记
    question: "Quel texte est le plus difficile à modifier ?",
    options: [
      "Un article de journal",
      "La Constitution",
      "Une publicité",
      "Un roman"
    ],
    answer: 1,
    explanation: `❌ A. Un article de journal - Faux. Un article de journal peut être corrigé ou remplacé facilement.
中：错误。报纸文章修改很容易。

✅ B. La Constitution - Correct ! La Constitution nécessite une procédure longue et difficile pour être modifiée.
中：正确。宪法修改程序复杂且严格。

❌ C. Une publicité - Faux. Publicité peut être changée rapidement.
中：错误。广告可以随时改。

❌ D. Un roman - Faux. Un roman est un texte littéraire et peut être réécrit facilement.
中：错误。小说改动不难。`
  },
  {
    id: "dr0018",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"18o 简单"标记
    question: "Quelle liberté permet à une personne de croire en la religion de son choix ?",
    options: [
      "Liberté de circulation",
      "Liberté de  conscience",
      "Liberté d'expression",
      "Liberté de vote"
    ],
    answer: 1,
    explanation: `❌ A. Liberté de circulation - Faux. Cela concerne le droit de se déplacer, pas la religion.
中：错误。出行自由与宗教信仰无关。

✅ B. Liberté de  conscience - Correct ! Elle permet de choisir sa religion ou de ne pas en avoir.
中：正确。宗教自由允许选择信仰或不信仰。

❌ C. Liberté d'expression - Faux. La liberté d'expression permet de parler, mais pas forcément de choisir une religion.
中：错误。表达自由不等于信仰自由。

❌ D. Liberté de vote - Faux. Le vote concerne les élections, pas la religion.
中：错误。投票权与宗教无关。`
  },
  {
    id: "dr0019",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"19o简单"标记
    question: "Qu'est-ce que le droit de grève ?",
    options: [
      "Le droit de travailler plus",
      "Le droit d'arrêter le travail pour défendre ses droits",
      "Le droit de voyager gratuitement",
      "Le droit de ne pas payer d'impôts"
    ],
    answer: 1,
    explanation: `❌ A. Le droit de travailler plus - Faux. La grève consiste à arrêter le travail, pas à travailler davantage.
中：错误。罢工是停工，不是加班。

✅ B. Le droit d'arrêter le travail pour défendre ses droits - Correct ! La grève est un droit des salariés pour faire pression et obtenir des améliorations.
中：正确。罢工是工人用来争取权益的合法手段。

❌ C. Le droit de voyager gratuitement - Faux. Cela n'a rien à voir avec la grève.
中：错误。与免费旅行无关。

❌ D. Le droit de ne pas payer d'impôts - Faux. La grève ne donne pas le droit d'échapper aux impôts.
中：错误。罢工不等于免税。`
  },
  {
    id: "dr0020",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"20 o简单"标记
    question: "Qu'est-ce que la Constitution ?",
    options: [
      "Le texte qui définit le système politique",
      "Un livre de cuisine",
      "Un roman historique",
      "Un manuel scolaire"
    ],
    answer: 0,
    explanation: `✅ A. Le texte qui définit le système politique - Correct ! La Constitution organise les institutions et définit les principes de la République.
中：正确。宪法规定国家制度、权力结构与基本原则。

❌ B. Un livre de cuisine - Faux. Ce n'est pas un livre culinaire.
中：错误。不是食谱。

❌ C. Un roman historique - Faux. La Constitution n'est pas une œuvre littéraire.
中：错误。不是小说。

❌ D. Un manuel scolaire - Faux. Ce n'est pas un manuel d'école.
中：错误。不是教材。`
  },
  {
    id: "dr0021",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"21 o简单"标记
    question: "Qui peut demander à avorter ?",
    options: [
      "Un homme",
      "Une femme enceinte",
      "Un enfant",
      "Un professeur"
    ],
    answer: 1,
    explanation: `❌ A. Un homme - Faux. L'avortement concerne une femme enceinte.
中：错误。堕胎是孕妇的权利。

✅ B. Une femme enceinte - Correct ! Seule une femme enceinte peut demander un avortement.
中：正确。只有怀孕的女性才能申请堕胎。

❌ C. Un enfant - Faux. Un enfant ne peut pas être enceinte.
中：错误。孩子不会怀孕。

❌ D. Un professeur - Faux. Le métier n'a rien à voir.
中：错误。职业与堕胎无关。`
  },
  {
    id: "dr0022",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"22 o中"标记
    question: "L'État peut-il limiter les droits et libertés ?",
    options: [
      "Non, jamais",
      "Oui, pour protéger l'intérêt général",
      "Oui, pour interdire tout",
      "Oui, pour augmenter les impôts"
    ],
    answer: 1,
    explanation: `❌ A. Non, jamais - Faux. L'État peut limiter certains droits dans des situations exceptionnelles.
中：错误。国家在特殊情况下可以限制权利。

✅ B. Oui, pour protéger l'intérêt général - Correct ! Les droits peuvent être restreints si cela protège la sécurité et le bien commun.
中：正确。为了公共利益和安全，权利可以被限制。

❌ C. Oui, pour interdire tout - Faux. L'État ne peut pas supprimer toutes les libertés, ce serait contraire à la Constitution.
中：错误。不能全面禁止自由。

❌ D. Oui, pour augmenter les impôts - Faux. Augmenter les impôts n'est pas une raison légale pour limiter les droits.
中：错误。增税不是限制权利的合法理由。`
  },
  {
    id: "dr0023",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"23o 简单"标记
    question: "Pour quel motif peut-on limiter la liberté d'expression ?",
    options: [
      "Pour protéger la réputation et la sécurité des personnes",
      "Pour interdire toute opinion",
      "Pour punir ceux qui critiquent",
      "Pour empêcher les élections"
    ],
    answer: 0,
    explanation: `✅ A. Pour protéger la réputation et la sécurité des personnes - Correct ! La liberté d'expression peut être limitée pour éviter la diffamation ou l'incitation à la violence.
中：正确。言论自由可为保护他人名誉和安全而受到限制。

❌ B. Pour interdire toute opinion - Faux. Interdire toutes les opinions serait une atteinte à la liberté d'expression.
中：错误。禁止所有观点违背言论自由。

❌ C. Pour punir ceux qui critiquent - Faux. Critiquer est légal dans une démocratie, sauf si cela devient diffamation.
中：错误。批评是合法的，除非构成诽谤。

❌ D. Pour empêcher les élections - Faux. Ce n'est pas une raison légale et ne correspond pas aux principes démocratiques.
中：错误。 这不是合法理由，也不符合民主原则。`
  },
  {
    id: "dr0024",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"24o中"标记
    question: "Quel exemple illustre une limitation de liberté pour protéger l'intérêt général ?",
    options: [
      "Restreindre certaines libertés lors d'un attentat terroriste",
      "Permettre tout sans règle",
      "Autoriser le bruit toute la nuit",
      "Interdire l'école"
    ],
    answer: 0,
    explanation: `✅ A. Restreindre certaines libertés lors d'un attentat terroriste - Correct ! En situation de danger, l'État peut limiter temporairement certaines libertés.
中：正确。恐怖袭击时可临时限制自由。

❌ B. Permettre tout sans règle - Faux. Sans règles, l'intérêt général n'est pas protégé.
中：错误。没有规则无法保护公共利益。

❌ C. Autoriser le bruit toute la nuit - Faux. Cela nuit aux autres, pas un intérêt général.
中：错误。扰民不是公共利益。

❌ D. Interdire l'école - Faux. Ce n'est pas une mesure de protection générale.
中：错误。禁止上学不合理。`
  },
  {
    id: "dr0025",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"25o简单"标记
    question: "Comment s'appelle la Constitution actuelle de la France ?",
    options: [
      "La Constitution de la Ve République",
      "La Constitution de la IIIe République",
      "La Constitution de la IVe République",
      "La Constitution de la IIe République"
    ],
    answer: 0,
    explanation: `✅ A. La Constitution de la Ve République - Correct ! Elle est en vigueur depuis 1958.
中：正确。1958年起第五共和国宪法。

❌ B. La Constitution de la IIIe République - Faux. Elle est ancienne (1870-1940).
中：错误。第三共和国已结束。

❌ C. La Constitution de la IVe République - Faux. 1946-1958.
中：错误。是1946-1958。

❌ D. La Constitution de la IIe République - Faux. 1848-1852.
中：错误。是1848-1852。`
  },
  {
    id: "dr0026",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"26o简单"标记
    question: "Comment s'appelle le texte qui énonce les droits et devoirs des personnes résidant en France ?",
    options: [
      "Le Code de la route",
      "La Constitution",
      "Le dictionnaire",
      "Le journal"
    ],
    answer: 1,
    explanation: `❌ A. Le Code de la route - Faux. Il concerne la circulation routière.
中：错误。是交通规则。

✅ B. La Constitution - Correct ! Elle énonce droits et devoirs.
中：正确。宪法规定权利义务。

❌ C. Le dictionnaire - Faux. C'est un livre de mots.
中：错误。词典不是法律。

❌ D. Le journal - Faux. Ce n'est pas un texte juridique.
中：错误。报纸不是法律。`
  },
  {
    id: "dr0027",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"27 o 简单"标记
    question: "Concernant les droits individuels, quelle proposition est correcte ?",
    options: [
      "Ils sont garantis par la loi",
      "Ils sont interdits",
      "Ils sont facultatifs",
      "Ils ne concernent que les riches"
    ],
    answer: 0,
    explanation: `✅ A. Ils sont garantis par la loi - Correct ! La loi protège les droits individuels.
中：正确。法律保障个人权利。

❌ B. Ils sont interdits - Faux. Les droits individuels ne sont pas interdits.
中：错误。权利不是禁止的。

❌ C. Ils sont facultatifs - Faux. Ils ne sont pas optionnels.
中：错误。权利不是可选的。

❌ D. Ils ne concernent que les riches - Faux. Ils concernent tous.
中：错误。适用于所有人。`
  },
  {
    id: "dr0028",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"28o简单"标记
    question: "De quelle année date la Déclaration des droits de l'homme et du citoyen ?",
    options: [
      "1789",
      "1900",
      "1958",
      "2000"
    ],
    answer: 0,
    explanation: `✅ A. 1789 - Correct ! Adoptée pendant la Révolution française.
中：正确。1789年大革命时期通过。

❌ B. 1900 - Faux.
中：错误。

❌ C. 1958 - Faux. 1958 est la Constitution, pas la Déclaration.
中：错误。

❌ D. 2000 - Faux.
中：错误。`
  },
  {
    id: "dr0029",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"29o简单"标记
    question: "Lequel de ces droits est un droit fondamental ?",
    options: [
      "Le droit de tuer",
      "Le droit à la vie",
      "Le droit de voler",
      "Le droit de détruire"
    ],
    answer: 1,
    explanation: `❌ A. Le droit de tuer - Faux. Tuer est interdit, ce n'est pas un droit.
中：错误。杀人是违法的，不是权利。

✅ B. Le droit à la vie - Correct ! Le droit à la vie est un droit fondamental.
中：正确。生命权是基本权利。

❌ C. Le droit de voler - Faux. Voler est un crime.
中：错误。偷窃违法。

❌ D. Le droit de détruire - Faux. Détruire n'est pas un droit.
中：错误。破坏不是权利。`
  },
  {
    id: "dr0030",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"30o简单"标记
    question: "Parmi ces textes, lequel garantit les droits et libertés en France ?",
    options: [
      "Le Code civil",
      "La Constitution",
      "Un roman",
      "Une publicité"
    ],
    answer: 1,
    explanation: `❌ A. Le Code civil - Faux. Il régit les relations civiles, mais ce n'est pas la source principale des droits fondamentaux.
中：错误。民法典不等同于宪法。

✅ B. La Constitution - Correct ! La Constitution garantit les droits et libertés.
中：正确。宪法保障基本权利。

❌ C. Un roman - Faux. Ce n'est pas un texte juridique.
中：错误。不是法律文本。

❌ D. Une publicité - Faux. Ce n'est pas un texte officiel.
中：错误。不是官方文本。`
  },
  {
    id: "dr0031",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"31o简单"标记
    question: "Qu'est-ce que la liberté d'expression ?",
    options: [
      "Le droit de tout dire sans limite",
      "Le droit de donner son opinion dans le respect des autres",
      "Le droit de voler",
      "Le droit d'agresser"
    ],
    answer: 1,
    explanation: `❌ A. Le droit de tout dire sans limite - Faux. La liberté d'expression a des limites (ex : diffamation).
中：错误。言论自由有界限（例如诽谤）。

✅ B. Le droit de donner son opinion dans le respect des autres - Correct ! On peut exprimer son opinion sans nuire aux autres.
中：正确。可以表达观点，但不能伤害他人。

❌ C. Le droit de voler - Faux. Voler est illégal.
中：错误。偷窃违法。

❌ D. Le droit d'agresser - Faux. La violence est interdite.
中：错误。暴力不允许。`
  },
  {
    id: "dr0032",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"32o简单"标记
    question: "Quel droit permet à une personne de se défendre devant la justice ?",
    options: [
      "Le droit à un procès équitable",
      "Le droit de mentir",
      "Le droit de ne pas se présenter",
      "Le droit d'agresser"
    ],
    answer: 0,
    explanation: `✅ A. Le droit à un procès équitable - Correct ! Cela garantit une procédure juste.
中：正确。保证公正审判。

❌ B. Le droit de mentir - Faux. Mentir au tribunal est interdit.
中：错误。法庭撒谎违法。

❌ C. Le droit de ne pas se présenter - Faux. On peut être obligé de se présenter.
中：错误。可能被传唤出庭。

❌ D. Le droit d'agresser - Faux. La violence est illégale.
中：错误。暴力不允许。`
  },
  {
    id: "dr0033",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"33o简单"标记
    question: "Quel est le texte fondateur établissant en France les droits et les devoirs de chaque citoyen ?",
    options: [
      "La Constitution",
      "Un roman",
      "Un article de journal",
      "Une publicité"
    ],
    answer: 0,
    explanation: `✅ A. La Constitution - Correct ! La Constitution définit les droits et devoirs des citoyens.
中：正确。宪法规定公民的权利与义务。

❌ B. Un roman - Faux. Un roman est une œuvre littéraire, pas un texte juridique.
中：错误。小说是文学作品，不是法律文本。

❌ C. Un article de journal - Faux. Un article de journal n'a pas de valeur juridique.
中：错误。报纸文章没有法律效力。

❌ D. Une publicité - Faux. Une publicité sert à vendre, ce n'est pas un texte officiel.
中：错误。广告不是官方法律文本。`
  },
  {
    id: "dr0034",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"34o简单"标记
    question: "Quel texte a été adopté pendant la Révolution française ?",
    options: [
      "La Déclaration des droits de l'homme et du citoyen",
      "La Constitution de 1958",
      "Le Code de la route",
      "Le traité de Rome"
    ],
    answer: 0,
    explanation: `✅ A. La Déclaration des droits de l'homme et du citoyen - Correct ! Adoptée en 1789 pendant la Révolution.
中：正确。1789年大革命时期通过。

❌ B. La Constitution de 1958 - Faux. Elle date de 1958, pas de la Révolution.
中：错误。1958年宪法不是革命时期。

❌ C. Le Code de la route - Faux. Le code de la route n'existait pas à l'époque.
中：错误。交通法典不是革命文本。

❌ D. Le traité de Rome - Faux. Il date de 1957.
中：错误。1957年《罗马条约》。`
  },
    {
    id: "dr0062",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Être citoyen français signifie :",
    options: [
      "Vivre en France",
      "Avoir la nationalité française",
      "Parler français",
      "Travailler en France"
    ],
    answer: 1,
    explanation: `❌ A. Vivre en France - Faux. On peut vivre en France sans être citoyen.
中：错误。居住不等于公民。

✅ B. Avoir la nationalité française - Correct ! Être citoyen français signifie détenir la nationalité française.
中：正确。公民即拥有法国国籍。

❌ C. Parler français - Faux. La langue n'est pas un critère suffisant.
中：错误。语言不是决定公民身份的条件。

❌ D. Travailler en France - Faux. Travailler ne donne pas automatiquement la citoyenneté.
中：错误。工作不等于公民。`
  },
  {
    id: "dr0063",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "La citoyenneté donne accès notamment :",
    options: [
      "À la gratuité totale",
      "Aux droits civiques",
      "À l'immunité pénale",
      "À l'exemption fiscale"
    ],
    answer: 1,
    explanation: `❌ A. À la gratuité totale - Faux. La citoyenneté ne donne pas droit à tout gratuitement.
中：错误。公民身份不等于享有全部免费。

✅ B. Aux droits civiques - Correct ! La citoyenneté permet d'exercer les droits civiques (vote, éligibilité, etc.).
中：正确。公民享有公民权利（投票、参政等）。

❌ C. À l'immunité pénale - Faux. Les citoyens restent soumis aux lois.
中：错误。无刑事豁免。

❌ D. À l'exemption fiscale - Faux. Les citoyens doivent payer des impôts selon la loi.
中：错误。无税务豁免。`
  },
  {
    id: "dr0064",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Une Constitution sert à :",
    options: [
      "Régler la vie privée",
      "Organiser l'État",
      "Définir les traditions",
      "Fixer les prix"
    ],
    answer: 1,
    explanation: `❌ A. Régler la vie privée - Faux. La Constitution ne traite pas des détails de la vie privée.
中：错误。宪法主要不是为个人私生活设定。

✅ B. Organiser l'État - Correct ! La Constitution organise les institutions et définit les pouvoirs.
中：正确。宪法用于组织国家。

❌ C. Définir les traditions - Faux. Les traditions ne sont pas définies par la Constitution.
中：错误。宪法不定义传统。

❌ D. Fixer les prix - Faux. Les prix relèvent de la politique économique.
中：错误。不是用来定价。`
  },
  {
    id: "dr0065",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Le bloc de constitutionnalité comprend :",
    options: [
      "Une seule Constitution",
      "Plusieurs textes fondamentaux",
      "Des lois ordinaires",
      "Des règlements locaux"
    ],
    answer: 1,
    explanation: `❌ A. Une seule Constitution - Faux. Il comprend plusieurs textes fondamentaux.
中：错误。不是只有一部宪法。

✅ B. Plusieurs textes fondamentaux - Correct ! Il inclut la Constitution, la Déclaration des droits de l'homme, le préambule de 1946, la Charte de l'environnement, etc.
中：正确。包括宪法、宣言、1946序言、环境宪章等。

❌ C. Des lois ordinaires - Faux. Les lois ordinaires ne font pas partie du bloc.
中：错误。普通法律不在其中。

❌ D. Des règlements locaux - Faux. Les règlements locaux ne font pas partie du bloc.
中：错误。地方法规不在其中。`
  },
  {
    id: "dr0066",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "La Charte de l'environnement reconnaît que :",
    options: [
      "L'homme domine la nature",
      "L'homme dépend de la nature",
      "La nature est indépendante",
      "L'environnement est secondaire"
    ],
    answer: 1,
    explanation: `❌ A. L'homme domine la nature - Faux. La Charte affirme la dépendance de l'homme à la nature.
中：错误。环境宪章强调人与自然依存。

✅ B. L'homme dépend de la nature - Correct ! La Charte reconnaît que l'homme dépend de la nature.
中：正确。人依赖自然。

❌ C. La nature est indépendante - Faux. La Charte souligne l'interdépendance entre l'homme et la nature.
中：错误。强调人类与自然相互关联。

❌ D. L'environnement est secondaire - Faux. La Charte considère l'environnement comme un droit fondamental.
中：错误。环境不是次要的。`
  },
  {
    id: "dr0067",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Le développement durable vise à :",
    options: [
      "Augmenter la production",
      "Préserver l'avenir",
      "Supprimer les ressources",
      "Favoriser une génération"
    ],
    answer: 1,
    explanation: `❌ A. Augmenter la production - Faux. Ce n'est pas uniquement augmenter la production.
中：错误。可持续发展不是仅追求产量。

✅ B. Préserver l'avenir - Correct ! Le développement durable vise à préserver les ressources pour les générations futures.
中：正确。可持续发展旨在保护未来。

❌ C. Supprimer les ressources - Faux. Il s'agit de les préserver, pas les supprimer.
中：错误。不是消耗资源。

❌ D. Favoriser une génération - Faux. Il vise l'équité entre les générations.
中：错误。不是只利某一代。`
  },
  {
    id: "dr0068",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "En cas de violation des droits, on peut s'adresser :",
    options: [
      "À un commerçant",
      "Au Défenseur des droits",
      "À un employeur",
      "À un voisin"
    ],
    answer: 1,
    explanation: `❌ A. À un commerçant - Faux. Un commerçant n'est pas compétent pour défendre les droits fondamentaux.
中：错误。商家没有权力处理权利侵害问题。

✅ B. Au Défenseur des droits - Correct ! Le Défenseur des droits est une autorité qui aide en cas de violation des droits.
中：正确。可以向"权利捍卫者"求助。

❌ C. À un employeur - Faux. L'employeur n'est pas une autorité compétente pour traiter tous les cas.
中：错误。雇主不能处理所有权利侵害。

❌ D. À un voisin - Faux. Un voisin n'a pas de compétence officielle.
中：错误。邻居没有官方处理权利侵害的权限。`
  },
  {
    id: "dr0069",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Le Défenseur des droits est :",
    options: [
      "Un juge",
      "Une autorité indépendante",
      "Un policier",
      "Un député"
    ],
    answer: 1,
    explanation: `❌ A. Un juge - Faux. Ce n'est pas un juge, il ne rend pas de décisions judiciaires.
中：错误。不是法官，不作司法判决。

✅ B. Une autorité indépendante - Correct ! C'est une autorité administrative indépendante chargée de défendre les droits.
中：正确。独立机构，负责维护权利。

❌ C. Un policier - Faux. Il ne fait pas partie des forces de l'ordre.
中：错误。不是警察。

❌ D. Un député - Faux. Il n'est pas élu député.
中：错误。不是议员。`
  },
  {
    id: "dr0070",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Déposer une plainte permet de :",
    options: [
      "Ouvrir une procédure",
      "Punir immédiatement",
      "Remplacer le juge",
      "Annuler la loi"
    ],
    answer: 0,
    explanation: `✅ A. Ouvrir une procédure - Correct ! Déposer une plainte déclenche une procédure judiciaire.
中：正确。起诉会启动司法程序。

❌ B. Punir immédiatement - Faux. La punition est décidée par un juge après procédure.
中：错误。处罚需要法院判决。

❌ C. Remplacer le juge - Faux. Une plainte ne remplace pas le juge.
中：错误。不能取代法官。

❌ D. Annuler la loi - Faux. Une plainte ne change pas une loi.
中：错误。不能废除法律。`
  },
  {
    id: "dr0071",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Un conciliateur cherche à :",
    options: [
      "Juger les parties",
      "Trouver un accord amiable",
      "Appliquer une sanction",
      "Rédiger une loi"
    ],
    answer: 1,
    explanation: `❌ A. Juger les parties - Faux. Le conciliateur ne juge pas, il aide à trouver un accord.
中：错误。调解员不裁判。

✅ B. Trouver un accord amiable - Correct ! Le conciliateur aide à résoudre un conflit à l'amiable.
中：正确。调解员帮助达成和解。

❌ C. Appliquer une sanction - Faux. Il ne sanctionne pas.
中：错误。不会实施制裁。

❌ D. Rédiger une loi - Faux. Il n'a pas de rôle législatif.
中：错误。不会制定法律。`
  },
  {
    id: "dr0072",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Les maisons de justice et du droit proposent :",
    options: [
      "Des jugements",
      "Des conseils juridiques gratuits",
      "Des sanctions",
      "Des élections"
    ],
    answer: 1,
    explanation: `❌ A. Des jugements - Faux. Elles ne rendent pas de jugements.
中：错误。不会做出判决。

✅ B. Des conseils juridiques gratuits - Correct ! Elles offrent des informations et conseils juridiques gratuits.
中：正确。提供免费法律咨询。

❌ C. Des sanctions - Faux. Elles ne sanctionnent pas.
中：错误。不会处罚。

❌ D. Des élections - Faux. Elles n'organisent pas d'élections.
中：错误。不会组织选举。`
  },
  {
    id: "dr0073",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Les droits fondamentaux sont garantis par :",
    options: [
      "Les citoyens",
      "L'État",
      "Les entreprises",
      "Les médias"
    ],
    answer: 1,
    explanation: `❌ A. Les citoyens - Faux. Les citoyens ne garantissent pas directement les droits, ils les exercent.
中：错误。公民不是直接保障者。

✅ B. L'État - Correct ! L'État garantit la protection des droits fondamentaux.
中：正确。国家保障基本权利。

❌ C. Les entreprises - Faux. Les entreprises ne sont pas chargées de garantir les droits fondamentaux.
中：错误。企业不是保障主体。

❌ D. Les médias - Faux. Les médias informent, mais ne garantissent pas les droits.
中：错误。媒体不是保障机构。`
  },
  {
    id: "dr0074",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Les droits fondamentaux sont la base :",
    options: [
      "De l'économie",
      "De la démocratie",
      "De la religion",
      "De la culture"
    ],
    answer: 1,
    explanation: `❌ A. De l'économie - Faux. Les droits fondamentaux ne sont pas principalement une base économique.
中：错误。基本权利不是经济基础。

✅ B. De la démocratie - Correct ! La démocratie repose sur le respect des droits fondamentaux.
中：正确。民主以基本权利为基础。

❌ C. De la religion - Faux. Les droits fondamentaux ne sont pas la base de la religion.
中：错误。基本权利不是宗教基础。

❌ D. De la culture - Faux. La culture n'est pas la base principale des droits fondamentaux.
中：错误。基本权利不是文化基础。`
  },
  {
    id: "dr0075",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Le droit de propriété permet :",
    options: [
      "D'utiliser ses biens librement",
      "De voler légalement",
      "De refuser l'impôt",
      "De dominer les autres"
    ],
    answer: 0,
    explanation: `✅ A. D'utiliser ses biens librement - Correct ! Le droit de propriété permet d'utiliser et de disposer de ses biens.
中：正确。财产权允许自由使用和处分财产。

❌ B. De voler légalement - Faux. Le droit de propriété ne permet pas de voler.
中：错误。财产权不是合法偷窃。

❌ C. De refuser l'impôt - Faux. Le droit de propriété ne donne pas le droit d'éviter les impôts.
中：错误。不能拒缴税。

❌ D. De dominer les autres - Faux. Le droit de propriété ne donne pas le pouvoir de dominer autrui.
中：错误。不能支配他人。`
  },
  {
    id: "dr0076",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Les droits collectifs concernent :",
    options: [
      "Une seule personne",
      "L'humanité entière",
      "Les entreprises",
      "Les élus"
    ],
    answer: 1,
    explanation: `❌ A. Une seule personne - Faux. Les droits collectifs concernent un groupe ou une communauté.
中：错误。集体权利不是单个人。

✅ B. L'humanité entière - Correct ! Les droits collectifs concernent souvent l'ensemble de l'humanité (ex : droits à la paix, à l'environnement).
中：正确。集体权利常涉及全人类或群体。

❌ C. Les entreprises - Faux. Les entreprises ne sont pas le centre des droits collectifs.
中：错误。不是企业专属。

❌ D. Les élus - Faux. Les élus ne sont pas le seul groupe concerné.
中：错误。不是仅针对当选者。`
  },
  {
    id: "dr0077",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "L'assistance humanitaire vise à :",
    options: [
      "Enrichir un État",
      "Aider des populations en danger",
      "Faire la guerre",
      "Imposer une culture"
    ],
    answer: 1,
    explanation: `❌ A. Enrichir un État - Faux. L'objectif n'est pas économique.
中：错误。不是为了国家致富。

✅ B. Aider des populations en danger - Correct ! Elle vise à aider les populations victimes de crises ou de catastrophes.
中：正确。旨在帮助处于危险中的人群。

❌ C. Faire la guerre - Faux. L'assistance humanitaire est une action pacifique.
中：错误。不是打仗。

❌ D. Imposer une culture - Faux. Elle respecte les cultures locales.
中：错误。不是强加文化。`
  },
  {
    id: "dr0078",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Les droits de troisième génération sont :",
    options: [
      "Anciens",
      "Récents",
      "Abandonnés",
      "Illégaux"
    ],
    answer: 1,
    explanation: `❌ A. Anciens - Faux. Ce sont des droits récents.
中：错误。不是古老的。

✅ B. Récents - Correct ! Les droits de troisième génération sont apparus récemment (ex : environnement, paix, solidarité).
中：正确。第三代权利是近期出现的（环境、和平、团结等）。

❌ C. Abandonnés - Faux. Ils ne sont pas abandonnés.
中：错误。不是被放弃的。

❌ D. Illégaux - Faux. Ils sont reconnus dans les textes internationaux.
中：错误。不是非法的。`
  },
  {
    id: "dr0079",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "La liberté individuelle signifie :",
    options: [
      "L'absence totale de règles",
      "Le respect des lois et des autres",
      "Le refus de l'État",
      "L'isolement"
    ],
    answer: 1,
    explanation: `❌ A. L'absence totale de règles - Faux. La liberté s'exerce dans un cadre légal.
中：错误。自由不是完全无规则。

✅ B. Le respect des lois et des autres - Correct ! La liberté individuelle suppose le respect des lois et des droits d'autrui.
中：正确。自由需要遵守法律与尊重他人。

❌ C. Le refus de l'État - Faux. La liberté n'implique pas le rejet de l'État.
中：错误。不是排斥国家。

❌ D. L'isolement - Faux. La liberté n'est pas synonyme d'isolement.
中：错误。不是孤立。`
  },
  {
    id: "dr0080",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Les libertés peuvent être limitées pour :",
    options: [
      "Contrôler la population",
      "Protéger l'ordre public",
      "Supprimer les droits",
      "Favoriser une élite"
    ],
    answer: 1,
    explanation: `❌ A. Contrôler la population - Faux. Les limitations doivent être légales et proportionnées.
中：错误。限制必须合法且适度。

✅ B. Protéger l'ordre public - Correct ! Les libertés peuvent être limitées pour protéger l'ordre public.
中：正确。可为维护公共秩序限制自由。

❌ C. Supprimer les droits - Faux. L'objectif n'est pas de supprimer les droits.
中：错误。不是取消权利。

❌ D. Favoriser une élite - Faux. Les limites ne doivent pas servir une minorité privilégiée.
中：错误。不是为了特权阶层。`
  },
  {
    id: "dr0081",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "La liberté de circuler peut être limitée :",
    options: [
      "Sans raison",
      "Pour la sécurité",
      "Pour punir",
      "Pour enrichir l'État"
    ],
    answer: 1,
    explanation: `❌ A. Sans raison - Faux. Toute limitation doit être justifiée par la loi.
中：错误。必须有合法理由。

✅ B. Pour la sécurité - Correct ! La liberté de circuler peut être limitée pour des raisons de sécurité ou d'ordre public.
中：正确。可为安全或公共秩序限制出行。

❌ C. Pour punir - Faux. La punition doit être décidée par un juge.
中：错误。不能仅为惩罚。

❌ D. Pour enrichir l'État - Faux. Ce n'est pas un motif légal.
中：错误。不是合法理由。`
  },
  {
    id: "dr0082",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Les droits fondamentaux sont :",
    options: [
      "Modifiables librement",
      "Inaliénables",
      "Facultatifs",
      "Temporaires"
    ],
    answer: 1,
    explanation: `❌ A. Modifiables librement - Faux. Ils sont protégés et ne peuvent pas être modifiés à volonté.
中：错误。不能随意更改。

✅ B. Inaliénables - Correct ! Ils sont inaliénables : on ne peut pas les céder ou les perdre.
中：正确。不可剥夺。

❌ C. Facultatifs - Faux. Ils ne sont pas optionnels.
中：错误。不是可有可无。

❌ D. Temporaires - Faux. Ils sont permanents.
中：错误。不是暂时的。`
  },
  {
    id: "dr0083",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "L'objectif principal des droits fondamentaux est de :",
    options: [
      "Créer des obligations",
      "Protéger la personne humaine",
      "Renforcer l'autorité",
      "Supprimer les libertés"
    ],
    answer: 1,
    explanation: `❌ A. Créer des obligations - Faux. Leur but principal est de protéger la personne.
中：错误。主要是保护人。

✅ B. Protéger la personne humaine - Correct ! Ils protègent la dignité et les droits de chaque individu.
中：正确。保护人的尊严和权利。

❌ C. Renforcer l'autorité - Faux. Ce n'est pas l'objectif.
中：错误。不是为了强化权力。

❌ D. Supprimer les libertés - Faux. Ils visent à protéger les libertés.
中：错误。不是消除自由。`
  },
  {
    id: "dr0084",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Quels acteurs institutionnels permettent de faire respecter les droits fondamentaux ?",
    options: [
      "Les entreprises privées uniquement",
      "La police et gendarmes",
      "Les médias",
      "Les associations sportives"
    ],
    answer: 1,
    explanation: `❌ A. Les entreprises privées uniquement - Faux. Les entreprises ne sont pas les seules institutions concernées.
中：错误。企业不是唯一机构。

✅ B. La police et gendarmes - Correct ! La police et les gendarmes contribuent à faire respecter la loi et les droits.
中：正确。警察与宪兵维护法律与权利。

❌ C. Les médias - Faux. Les médias informent mais n'appliquent pas la loi.
中：错误。媒体不执行法律。

❌ D. Les associations sportives - Faux. Elles ne sont pas des institutions de droit.
中：错误。体育协会不负责。`
  },
  {
    id: "dr0085",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 标记为"难"，无"o"
    question: "Les droits fondamentaux s'appliquent-ils seulement à partir de 18 ans ?",
    options: [
      "Oui, uniquement pour les majeurs",
      "Non, ils s'appliquent dès la naissance",
      "Seulement après l'inscription électorale",
      "Uniquement pour les citoyens"
    ],
    answer: 1,
    explanation: `❌ A. Oui, uniquement pour les majeurs - Faux. Ils s'appliquent à tous, même aux mineurs.
中：错误。适用于所有人，包括未成年人。

✅ B. Non, ils s'appliquent dès la naissance - Correct ! Les droits fondamentaux s'appliquent dès la naissance.
中：正确。出生即享有基本权利。

❌ C. Seulement après l'inscription électorale - Faux. Ils ne dépendent pas du vote.
中：错误。与选举登记无关。

❌ D. Uniquement pour les citoyens - Faux. Beaucoup de droits s'appliquent à toute personne, quel que soit le statut.
中：错误。不只限公民。`
  },

  {
    id: "od0001",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Concernant l'utilisation des réseaux sociaux, quelle proposition est correcte ?",
    options: [
      "Tout est permis",
      "Il faut respecter la loi et les autres",
      "On peut insulter librement",
      "On peut voler des comptes"
    ],
    answer: 1,
    explanation: "❌ A. Tout est permis - Faux. Sur les réseaux sociaux, il faut respecter la loi.\n中：错误。社交网络并非随意而为，需要遵守法律。\n\n✅ B. Il faut respecter la loi et les autres - Correct ! L'utilisation des réseaux sociaux doit respecter la loi et le respect d'autrui.\n中：正确。使用社交网络需遵守法律并尊重他人。\n\n❌ C. On peut insulter librement - Faux. L'insulte peut être une infraction (diffamation, injure).\n中：错误。侮辱可能构成违法（诽谤、侮辱）。\n\n❌ D. On peut voler des comptes - Faux. Le piratage de comptes est illégal.\n中：错误。盗用账号是违法行为。"
  },
  {
    id: "od0002",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Parmi ces actions, laquelle permet d'adopter une attitude respectueuse de l'environnement ?",
    options: [
      "Jeter les déchets dans la rue",
      "Trier les déchets",
      "Brûler ses ordures",
      "Laisser couler l'eau inutilement"
    ],
    answer: 1,
    explanation: "❌ A. Jeter les déchets dans la rue - Faux. C'est polluer et négliger l'environnement.\n中：错误。随地扔垃圾污染环境。\n\n✅ B. Trier les déchets - Correct ! Trier les déchets est une action respectueuse de l'environnement.\n中：正确。垃圾分类是环保行为。\n\n❌ C. Brûler ses ordures - Faux. Brûler des déchets pollue l'air.\n中：错误。焚烧垃圾会污染空气。\n\n❌ D. Laisser couler l'eau inutilement - Faux. Gaspiller l'eau est nuisible à l'environnement.\n中：错误。浪费水资源不环保。"
  },
  {
    id: "od0003",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle proposition constitue une obligation ?",
    options: [
      "Respecter la loi",
      "Ignorer les règles",
      "Faire ce qu'on veut sans limite",
      "Voler"
    ],
    answer: 0,
    explanation: "✅ A. Respecter la loi - Correct ! Respecter la loi est une obligation pour tous.\n中：正确。遵守法律是每个人的义务。\n\n❌ B. Ignorer les règles - Faux. Ignorer les règles est contraire à la loi.\n中：错误。无视规则违法。\n\n❌ C. Faire ce qu'on veut sans limite - Faux. La liberté a des limites légales.\n中：错误。自由受法律限制。\n\n❌ D. Voler - Faux. Voler est interdit et puni par la loi.\n中：错误。偷窃是违法行为。"
  },
  {
    id: "od0004",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Que doit-on faire face aux ordres des policiers ou gendarmes ?",
    options: [
      "Refuser toujours",
      "Obéir si c'est légal",
      "Insulter",
      "Fuir"
    ],
    answer: 1,
    explanation: "❌ A. Refuser toujours - Faux. On ne doit pas refuser systématiquement.\n中：错误。不能一律拒绝。\n\n✅ B. Obéir si c'est légal - Correct ! Il faut obéir aux forces de l'ordre lorsque l'ordre est légal.\n中：正确。应在合法情况下服从警察或宪兵的命令。\n\n❌ C. Insulter - Faux. L'insulte est une infraction.\n中：错误。侮辱属于违法行为。\n\n❌ D. Fuir - Faux. Fuir peut aggraver la situation et est interdit.\n中：错误。逃跑可能加重后果且违法。"
  },
  {
    id: "od0005",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle obligation concerne toutes les personnes résidant en France quelle que soit leur nationalité ?",
    options: [
      "Payer des impôts",
      "Voter aux élections",
      "Posséder un animal",
      "Porter une arme"
    ],
    answer: 0,
    explanation: "✅ A. Payer des impôts - Correct ! Les résidents doivent contribuer aux impôts selon leurs revenus.\n中：正确。无论国籍，居住者按收入需缴税。\n\n❌ B. Voter aux élections - Faux. Le vote est réservé aux citoyens.\n中：错误。投票仅限公民。\n\n❌ C. Posséder un animal - Faux. Ce n'est pas une obligation.\n中：错误。不是强制要求。\n\n❌ D. Porter une arme - Faux. Porter une arme est interdit sans autorisation.\n中：错误。携带武器需要许可。"
  },
  {
    id: "od0006",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle proposition représente un exemple de crime ?",
    options: [
      "Voler une petite somme",
      "Meurtre",
      "Contravention de stationnement",
      "Parler fort dans la rue"
    ],
    answer: 1,
    explanation: "❌ A. Voler une petite somme - Faux. Cela peut être un délit selon les circonstances.\n中：错误。可能属于轻微盗窃（罪名为\"delit\"）。\n\n✅ B. Meurtre - Correct ! Le meurtre est un crime.\n中：正确。谋杀属于重罪。\n\n❌ C. Contravention de stationnement - Faux. C'est une contravention, pas un crime.\n中：错误。停车罚单属于违章。\n\n❌ D. Parler fort dans la rue - Faux. Ce n'est pas un crime.\n中：错误。大声说话一般不构成犯罪。"
  },
  {
    id: "od0007",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quelle proposition représente un exemple de délit ?",
    options: [
      "Meurtre",
      "Vol avec violence",
      "Uriner dans la rue",
      "Écrire un article"
    ],
    answer: 1,
    explanation: "❌ A. Meurtre - Faux. Le meurtre est un crime, pas un délit.\n中：错误。谋杀是重罪（crime）。\n\n✅ B. Vol avec violence - Correct ! Le vol avec violence est un délit.\n中：正确。暴力盗窃属于轻罪（delit）。\n\n❌ C. Uriner dans la rue - Faux. Cela peut être une contravention, pas un délit.\n中：错误。随地小便通常是违章（contravention）。\n\n❌ D. Écrire un article - Faux. Écrire un article n'est pas un délit.\n中：错误。写文章不是违法行为。"
  },
  {
    id: "od0008",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui veille au maintien de l'ordre public ?",
    options: [
      "Les citoyens seulement",
      "La police et la gendarmerie",
      "Les journalistes",
      "Les commerçants"
    ],
    answer: 1,
    explanation: "❌ A. Les citoyens seulement - Faux. Les citoyens participent, mais ce sont surtout les forces de l'ordre.\n中：错误。公民参与但主要由执法部门负责。\n\n✅ B. La police et la gendarmerie - Correct ! Ils assurent le maintien de l'ordre public.\n中：正确。警察和宪兵维护公共秩序。\n\n❌ C. Les journalistes - Faux. Les journalistes informent mais ne maintiennent pas l'ordre.\n中：错误。记者报道，不负责维持秩序。\n\n❌ D. Les commerçants - Faux. Les commerçants ne sont pas chargés de l'ordre public.\n中：错误。商家不是维护秩序的机构。"
  },
  {
    id: "od0009",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "S'agissant des déchets, quelle proposition est correcte ?",
    options: [
      "Il faut tout jeter dans la nature",
      "Il faut trier et réduire ses déchets",
      "Il faut brûler les déchets",
      "Il faut les cacher"
    ],
    answer: 1,
    explanation: "❌ A. Il faut tout jeter dans la nature - Faux. Cela pollue et est interdit.\n中：错误。乱扔垃圾污染环境且违法。\n\n✅ B. Il faut trier et réduire ses déchets - Correct ! Trier et réduire ses déchets est la bonne pratique.\n中：正确。垃圾分类与减少垃圾是正确做法。\n\n❌ C. Il faut brûler les déchets - Faux. Brûler pollue l'air et est souvent interdit.\n中：错误。焚烧垃圾污染空气且多为禁止。\n\n❌ D. Il faut les cacher - Faux. Cacher les déchets n'est pas une solution.\n中：错误。隐藏垃圾不是处理方式。"
  },
  {
    id: "od0010",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "En France, est-ce légal d'être marié à plusieurs personnes en même temps ?",
    options: [
      "Oui",
      "Non",
      "Oui, si on est riche",
      "Oui, si on est célèbre"
    ],
    answer: 1,
    explanation: "❌ A. Oui - Faux. La polygamie est interdite en France.\n中：错误。法国禁止一夫多妻/一妻多夫。\n\n✅ B. Non - Correct ! La France ne reconnaît pas la polygamie.\n中：正确。法国不承认多配偶婚姻。\n\n❌ C. Oui, si on est riche - Faux. La richesse ne change pas la loi.\n中：错误。财富不能改变法律规定。\n\n❌ D. Oui, si on est célèbre - Faux. La célébrité ne permet pas de contourner la loi.\n中：错误。名气不能豁免法律。"
  },
  {
    id: "od0011",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Que risque une personne qui ne respecte pas la loi ?",
    options: [
      "Rien",
      "Une sanction (amende, prison, etc.)",
      "Une récompense",
      "Un cadeau"
    ],
    answer: 1,
    explanation: "❌ A. Rien - Faux. Ne pas respecter la loi entraîne des conséquences.\n中：错误。不遵守法律会有后果。\n\n✅ B. Une sanction (amende, prison, etc.) - Correct ! La personne peut recevoir une sanction (amende, prison, etc.).\n中：正确。可能会受到处罚（罚款、监禁等）。\n\n❌ C. Une récompense - Faux. La loi ne récompense pas ceux qui la violent.\n中：错误。违法不会得到奖励。\n\n❌ D. Un cadeau - Faux. La loi ne donne pas de cadeau aux personnes qui ne respectent pas la loi.\n中：错误。违法不会得到礼物。"
  },
  {
    id: "od0012",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est le rôle de la gendarmerie ?",
    options: [
      "Assurer la sécurité dans les zones rurales",
      "Faire des films",
      "Organiser des fêtes",
      "Vendre des produits"
    ],
    answer: 0,
    explanation: "✅ A. Assurer la sécurité dans les zones rurales - Correct ! La gendarmerie est chargée de la sécurité en zones rurales et périurbaines.\n中：正确。宪兵负责农村和郊区安全。\n\n❌ B. Faire des films - Faux. La gendarmerie ne fait pas de films.\n中：错误。宪兵不拍电影。\n\n❌ C. Organiser des fêtes - Faux. Ce n'est pas sa mission.\n中：错误。不是组织活动。\n\n❌ D. Vendre des produits - Faux. La gendarmerie ne vend pas de produits.\n中：错误。不是卖东西。"
  },
  {
    id: "od0013",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est le rôle de la police ?",
    options: [
      "Maintenir l'ordre public en ville",
      "Réparer les routes",
      "Gérer les écoles",
      "Vendre des livres"
    ],
    answer: 0,
    explanation: "✅ A. Maintenir l'ordre public en ville - Correct ! La police veille à la sécurité et à l'ordre public en zone urbaine.\n中：正确。警察负责城市治安与公共秩序。\n\n❌ B. Réparer les routes - Faux. La réparation des routes est une mission des services publics de voirie.\n中：错误。修路由市政部门负责。\n\n❌ C. Gérer les écoles - Faux. Les écoles sont gérées par l'Éducation nationale.\n中：错误。学校由教育部门管理。\n\n❌ D. Vendre des livres - Faux. La police ne vend pas de livres.\n中：错误。警察不负责售书。"
  },
  {
    id: "od0014",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Qu'est-ce qu'une infraction ?",
    options: [
      "Un acte contraire à la loi",
      "Un acte légal",
      "Un acte recommandé",
      "Un acte artistique"
    ],
    answer: 0,
    explanation: "✅ A. Un acte contraire à la loi - Correct ! Une infraction est un acte qui viole la loi.\n中：正确。违法行为是违反法律的行为。\n\n❌ B. Un acte légal - Faux. Un acte légal respecte la loi.\n中：错误。合法行为不构成违法。\n\n❌ C. Un acte recommandé - Faux. Recommander n'est pas une infraction.\n中：错误。推荐行为不等于违法。\n\n❌ D. Un acte artistique - Faux. L'art n'est pas une infraction.\n中：错误。艺术行为不是违法。"
  },
  {
    id: "od0015",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Comment peut-on réduire ses déchets ?",
    options: [
      "Acheter des produits avec beaucoup d'emballage",
      "Réutiliser, réparer, réduire les achats",
      "Jeter tout dans la nature",
      "Brûler ses déchets"
    ],
    answer: 1,
    explanation: "❌ A. Acheter des produits avec beaucoup d'emballage - Faux. Cela augmente la quantité de déchets.\n中：错误。多包装会增加垃圾。\n\n✅ B. Réutiliser, réparer, réduire les achats - Correct ! Réduire les déchets passe par la réutilisation, la réparation et moins consommer.\n中：正确。通过重复使用、修理和减少购买来减少垃圾。\n\n❌ C. Jeter tout dans la nature - Faux. Cela pollue et est interdit.\n中：错误。乱扔垃圾污染环境且违法。\n\n❌ D. Brûler ses déchets - Faux. Brûler des déchets pollue l'air et est souvent interdit.\n中：错误。焚烧垃圾污染空气且多为禁止。"
  },
  {
    id: "od0016",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "En quoi consiste la traite des êtres humains ?",
    options: [
      "Aider quelqu'un à trouver un travail",
      "Exploiter une personne par la force ou la tromperie",
      "Donner un cadeau",
      "Organiser une fête"
    ],
    answer: 1,
    explanation: "❌ A. Aider quelqu'un à trouver un travail - Faux. Ce n'est pas de la traite.\n中：错误。帮助找工作不是人口贩卖。\n\n✅ B. Exploiter une personne par la force ou la tromperie - Correct ! La traite consiste à exploiter quelqu'un par la violence, la fraude ou la manipulation.\n中：正确。人口贩卖是通过强迫或欺骗剥削他人。\n\n❌ C. Donner un cadeau - Faux. Ce n'est pas une traite.\n中：错误。送礼不是人口贩卖。\n\n❌ D. Organiser une fête - Faux. Ce n'est pas une traite.\n中：错误。组织聚会不是人口贩卖。"
  },
  {
    id: "od0017",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Que doit faire une victime de violences ?",
    options: [
      "Ne rien dire",
      "Chercher de l'aide et contacter les services",
      "Encourager l'agresseur",
      "Partir sans prévenir"
    ],
    answer: 1,
    explanation: "❌ A. Ne rien dire - Faux. Se taire peut aggraver la situation.\n中：错误。沉默可能使情况更糟。\n\n✅ B. Chercher de l'aide et contacter les services - Correct ! Il faut demander de l'aide (police, associations, services sociaux).\n中：正确。应寻求帮助并联系相关机构。\n\n❌ C. Encourager l'agresseur - Faux. Cela aggrave la violence.\n中：错误。鼓励施暴者只会更糟。\n\n❌ D. Partir sans prévenir - Faux. Il faut partir en sécurité et demander de l'aide.\n中：错误。离开应先确保安全并寻求帮助。"
  },
  {
    id: "od0018",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quelle est l'infraction la plus grave ?",
    options: [
      "Une contravention",
      "Un délit",
      "Un crime",
      "Une faute légère"
    ],
    answer: 2,
    explanation: "❌ A. Une contravention - Faux. La contravention est la moins grave.\n中：错误。违章是最轻的违法行为。\n\n❌ B. Un délit - Faux. Le délit est plus grave qu'une contravention mais moins qu'un crime.\n中：错误。轻罪比重罪轻。\n\n✅ C. Un crime - Correct ! Le crime est l'infraction la plus grave.\n中：正确。重罪是最严重的违法行为。\n\n❌ D. Une faute légère - Faux. Ce n'est pas une infraction grave.\n中：错误。轻微过失不严重。"
  },
  {
    id: "od0019",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Respecter les lois en France permet surtout de :",
    options: [
      "Faire ce que l'on veut",
      "Garantir la sécurité de tous",
      "Supprimer les libertés",
      "Favoriser une seule personne"
    ],
    answer: 1,
    explanation: "❌ A. Faire ce que l'on veut - Faux. Les lois limitent les actions pour protéger tous.\n中：错误。法律不是让人任性。\n\n✅ B. Garantir la sécurité de tous - Correct ! Respecter la loi protège la sécurité et les droits de chacun.\n中：正确。遵守法律保障公共安全与权利。\n\n❌ C. Supprimer les libertés - Faux. La loi protège les libertés, pas les supprimer.\n中：错误。法律不是为了剥夺自由。\n\n❌ D. Favoriser une seule personne - Faux. La loi vise l'égalité, pas la préférence.\n中：错误。法律不偏袒某个人。"
  },
  {
    id: "od0020",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quelle attitude est conforme au vivre-ensemble ?",
    options: [
      "Respecter les autres",
      "Imposer ses règles",
      "Ignore les lois",
      "Provoquer des conflits"
    ],
    answer: 0,
    explanation: "✅ A. Respecter les autres - Correct ! Le vivre-ensemble repose sur le respect mutuel.\n中：正确。共处基于相互尊重。\n\n❌ B. Imposer ses règles - Faux. Imposer ses règles nuit à la coexistence.\n中：错误。强行要求别人遵守自己的规则不利于共处。\n\n❌ C. Ignorer les lois - Faux. Ignorer les lois détruit la cohésion sociale.\n中：错误。无视法律破坏社会秩序。\n\n❌ D. Provoquer des conflits - Faux. Provoquer des conflits va à l'encontre du vivre-ensemble.\n中：错误。制造冲突违背共处精神。"
  },
  {
    id: "od0021",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quelle institution assure la sécurité en zone rurale ?",
    options: [
      "L'école",
      "La police municipale",
      "La gendarmerie",
      "Les associations"
    ],
    answer: 2,
    explanation: "❌ A. L'école - Faux. L'école n'assure pas la sécurité publique.\n中：错误。学校不负责公共安全。\n\n❌ B. La police municipale - Faux. La police municipale intervient surtout en ville, pas en zone rurale.\n中：错误。市政警察主要在城市活动。\n\n✅ C. La gendarmerie - Correct ! La gendarmerie assure la sécurité en zone rurale et périurbaine.\n中：正确。宪兵负责农村和郊区安全。\n\n❌ D. Les associations - Faux. Les associations ne sont pas chargées de la sécurité publique.\n中：错误。协会不负责公共安全。"
  },
  {
    id: "od0022",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Ne pas respecter une règle peut entraîner :",
    options: [
      "Un cadeau",
      "Une sanction",
      "Une promotion",
      "Une exemption"
    ],
    answer: 1,
    explanation: "❌ A. Un cadeau - Faux. Le non-respect d'une règle ne donne pas de cadeau.\n中：错误。违反规则不会得到礼物。\n\n✅ B. Une sanction - Correct ! Le non-respect d'une règle peut entraîner une sanction (amende, avertissement, etc.).\n中：正确。违反规则可能会受到处罚（罚款、警告等）。\n\n❌ C. Une promotion - Faux. Ne pas respecter une règle ne conduit pas à une promotion.\n中：错误。违反规则不会升职。\n\n❌ D. Une exemption - Faux. Il n'y a pas d'exemption pour une infraction.\n中：错误。违法不会得到豁免。"
  },
  {
    id: "od0023",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quel comportement respecte la dignité humaine ?",
    options: [
      "Humilier une personne",
      "Menacer quelqu'un",
      "Respecter chaque individu",
      "Exclure une personne"
    ],
    answer: 2,
    explanation: "❌ A. Humilier une personne - Faux. Humilier une personne porte atteinte à sa dignité et à son respect.\n中：错误。羞辱他人侵犯人格尊严。\n\n❌ B. Menacer quelqu'un - Faux. Menacer quelqu'un est une atteinte à la dignité et à la sécurité de la personne.\n中：错误。威胁他人侵犯尊严与安全。\n\n✅ C. Respecter chaque individu - Correct ! Respecter chaque personne, sans discrimination, protège la dignité humaine.\n中：正确。尊重每个人（不歧视）是对人格尊严的保护。\n\n❌ D. Exclure une personne - Faux. Exclure ou isoler quelqu'un est contraire au respect de la dignité.\n中：错误。排斥他人违背尊重人格尊严。"
  },
  {
    id: "od0024",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quel est un devoir lié à l'environnement ?",
    options: [
      "Polluer librement",
      "Réduire sa consommation",
      "Jeter ses déchets dans la nature",
      "Ignorer les règles"
    ],
    answer: 1,
    explanation: "❌ A. Polluer librement - Faux. Polluer est contraire à la protection de l'environnement.\n中：错误。随意污染违反环境保护义务。\n\n✅ B. Réduire sa consommation - Correct ! Réduire sa consommation est un devoir pour préserver l'environnement.\n中：正确。减少消费是保护环境的义务之一。\n\n❌ C. Jeter ses déchets dans la nature - Faux. Cela pollue et est interdit.\n中：错误。乱扔垃圾污染环境且违法。\n\n❌ D. Ignorer les règles - Faux. Ignorer les règles environnementales est illégal.\n中：错误。忽视环保规则违法。"
  },
  {
    id: "od0025",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Faire beaucoup de bruit la nuit peut être considéré comme :",
    options: [
      "Un droit absolu",
      "Une contravention",
      "Un crime",
      "Une obligation"
    ],
    answer: 1,
    explanation: "❌ A. Un droit absolu - Faux. Le bruit peut être limité pour le respect des autres.\n中：错误。噪音不属于绝对权利。\n\n✅ B. Une contravention - Correct ! Le tapage nocturne peut être une contravention.\n中：正确。夜间噪音可能构成违章行为（罚款）。\n\n❌ C. Un crime - Faux. Ce n'est pas un crime.\n中：错误。不是重罪。\n\n❌ D. Une obligation - Faux. Faire du bruit n'est pas une obligation.\n中：错误。不是义务。"
  },
  {
    id: "od0026",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Pourquoi l'État peut-il interdire l'accès à une zone dangereuse ?",
    options: [
      "Pour punir les habitants",
      "Pour protéger la sécurité publique",
      "Pour supprimer les libertés",
      "Pour faire plaisir aux autorités"
    ],
    answer: 1,
    explanation: "❌ A. Pour punir les habitants - Faux. L'interdiction n'a pas pour but de punir les habitants.\n中：错误。禁止进入不是为了惩罚居民。\n\n✅ B. Pour protéger la sécurité publique - Correct ! L'État peut interdire l'accès pour protéger la population et éviter des accidents.\n中：正确。国家为保护公共安全、防止事故可以禁止进入危险区域。\n\n❌ C. Pour supprimer les libertés - Faux. La limitation doit être justifiée et proportionnée.\n中：错误。限制自由必须有合法理由且适度。\n\n❌ D. Pour faire plaisir aux autorités - Faux. Ce n'est pas un motif légal.\n中：错误。不是为了取悦当局。"
  },
  {
    id: "od0027",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Qui peut constater une infraction ?",
    options: [
      "Un voisin",
      "La police ou la gendarmerie",
      "Un journaliste",
      "Un commerçant"
    ],
    answer: 1,
    explanation: "❌ A. Un voisin - Faux. Un voisin peut témoigner, mais ne peut pas constater officiellement l'infraction.\n中：错误。邻居可以作证，但不能正式认定违法。\n\n✅ B. La police ou la gendarmerie - Correct ! La police ou la gendarmerie peuvent constater une infraction.\n中：正确。警察或宪兵可以正式记录违法行为。\n\n❌ C. Un journaliste - Faux. Le journaliste peut informer mais ne constate pas officiellement.\n中：错误。记者不能正式认定违法。\n\n❌ D. Un commerçant - Faux. Un commerçant ne constate pas une infraction.\n中：错误。商家不能正式认定违法。"
  },
  {
    id: "od0028",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Une personne qui vole un objet commet :",
    options: [
      "Une contravention",
      "Un délit",
      "Un crime automatiquement",
      "Un acte légal"
    ],
    answer: 1,
    explanation: "❌ A. Une contravention - Faux. Le vol est généralement un délit, pas une contravention.\n中：错误。盗窃通常属于轻罪，而非违章。\n\n✅ B. Un délit - Correct ! Le vol est un délit (sauf cas très particuliers).\n中：正确。盗窃属于轻罪（delit）。\n\n❌ C. Un crime automatiquement - Faux. Ce n'est un crime que dans des cas très graves (ex : vol avec homicide).\n中：错误。只有极严重情况才可能构成重罪。\n\n❌ D. Un acte légal - Faux. Le vol est illégal.\n中：错误。盗窃是违法行为。"
  },
  {
    id: "od0029",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quelle action protège l'environnement ?",
    options: [
      "Gaspiller l'eau",
      "Recycler",
      "Brûler des déchets",
      "Jeter du plastique"
    ],
    answer: 1,
    explanation: "❌ A. Gaspiller l'eau - Faux. Gaspiller l'eau nuit à l'environnement.\n中：错误。浪费水资源不利于环境保护。\n\n✅ B. Recycler - Correct ! Recycler réduit les déchets et protège l'environnement.\n中：正确。回收减少垃圾、保护环境。\n\n❌ C. Brûler des déchets - Faux. Brûler pollue l'air et est souvent interdit.\n中：错误。焚烧垃圾污染空气且通常禁止。\n\n❌ D. Jeter du plastique - Faux. Jeter du plastique pollue l'environnement.\n中：错误。乱扔塑料会污染环境。"
  },
  {
    id: "od0030",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Ne pas aider une personne en danger peut être :",
    options: [
      "Autorisé",
      "Une obligation",
      "Une infraction",
      "Une récompense"
    ],
    answer: 2,
    explanation: "❌ A. Autorisé - Faux. Ne pas aider une personne en danger peut être un délit (non-assistance à personne en danger).\n中：错误。不救助处于危险中的人可能构成违法。\n\n❌ B. Une obligation - Faux. C'est au contraire une infraction, pas une obligation.\n中：错误。不是义务，而是违法。\n\n✅ C. Une infraction - Correct ! Le fait de ne pas porter secours peut constituer une infraction (non-assistance à personne en danger).\n中：正确。不救助他人可能构成\"未援助罪\"。\n\n❌ D. Une récompense - Faux. Ne pas aider ne donne pas de récompense.\n中：错误。不救人不会得到奖励。"
  },
  {
    id: "od0031",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Pourquoi payer des impôts est-il obligatoire ?",
    options: [
      "Pour enrichir une personne",
      "Pour financer les services publics",
      "Pour punir les citoyens",
      "Pour éviter les lois"
    ],
    answer: 1,
    explanation: "❌ A. Pour enrichir une personne - Faux. Les impôts ne servent pas à enrichir une seule personne.\n中：错误。税收不是为了让某个人变富。\n\n✅ B. Pour financer les services publics - Correct ! Les impôts financent l'éducation, la santé, la sécurité, etc.\n中：正确。税收用于资助公共服务（教育、医疗、安全等）。\n\n❌ C. Pour punir les citoyens - Faux. Ce n'est pas une punition mais une contribution collective.\n中：错误。税收不是惩罚，而是公共贡献。\n\n❌ D. Pour éviter les lois - Faux. Payer des impôts ne permet pas d'éviter la loi.\n中：错误。纳税不能规避法律。"
  },
  {
    id: "od0032",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quelle infraction est la moins grave ?",
    options: [
      "Crime",
      "Délit",
      "Contravention",
      "Assassinat"
    ],
    answer: 2,
    explanation: "❌ A. Crime - Faux. Le crime est la plus grave des infractions.\n中：错误。重罪是最严重的违法。\n\n❌ B. Délit - Faux. Le délit est moins grave qu'un crime mais plus grave qu'une contravention.\n中：错误。轻罪比重罪轻，但比违章严重。\n\n✅ C. Contravention - Correct ! La contravention est l'infraction la moins grave.\n中：正确。违章是最轻的违法行为。\n\n❌ D. Assassinat - Faux. L'assassinat est un crime très grave.\n中：错误。谋杀是重罪。"
  },
  {
    id: "od0033",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Qui décide des sanctions en cas d'infraction ?",
    options: [
      "Les voisins",
      "Le juge",
      "Les amis",
      "Les réseaux sociaux"
    ],
    answer: 1,
    explanation: "❌ A. Les voisins - Faux. Les voisins ne peuvent pas décider des sanctions.\n中：错误。邻居不能决定处罚。\n\n✅ B. Le juge - Correct ! Le juge décide des sanctions après un procès.\n中：正确。法官在审判后决定处罚。\n\n❌ C. Les amis - Faux. Les amis ne peuvent pas imposer une sanction.\n中：错误。朋友不能决定处罚。\n\n❌ D. Les réseaux sociaux - Faux. Les réseaux sociaux n'ont pas le pouvoir légal de sanctionner.\n中：错误。社交网络无法合法处罚。"
  },
  {
    id: "od0034",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La protection des personnes et des biens est une mission de :",
    options: [
      "L'école",
      "La police et la gendarmerie",
      "Les entreprises",
      "Les citoyens seuls"
    ],
    answer: 1,
    explanation: "❌ A. L'école - Faux. L'école éduque, mais ne protège pas directement les personnes et les biens.\n中：错误。学校是教育机构，不负责直接保护人和财产。\n\n✅ B. La police et la gendarmerie - Correct ! La police et la gendarmerie protègent les personnes et les biens.\n中：正确。警察和宪兵负责保护人和财产。\n\n❌ C. Les entreprises - Faux. Les entreprises ne sont pas responsables de la protection générale.\n中：错误。企业不承担公共保护责任。\n\n❌ D. Les citoyens seuls - Faux. Les citoyens peuvent contribuer, mais la mission principale revient aux forces de l'ordre.\n中：错误。公民可以协助，但主要职责是执法部门。"
  },
  {
    id: "od0035",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quel comportement respecte l'ordre public ?",
    options: [
      "Provoquer des violences",
      "Respecter les règles communes",
      "Menacer les autres",
      "Dégrader des biens"
    ],
    answer: 1,
    explanation: "❌ A. Provoquer des violences - Faux. Provoquer des violences trouble l'ordre public.\n中：错误。挑起暴力破坏公共秩序。\n\n✅ B. Respecter les règles communes - Correct ! Respecter les règles contribue à l'ordre public.\n中：正确。遵守公共规则有助于维护秩序。\n\n❌ C. Menacer les autres - Faux. Menacer trouble l'ordre public.\n中：错误。威胁他人破坏秩序。\n\n❌ D. Dégrader des biens - Faux. Dégrader des biens est une atteinte à l'ordre public.\n中：错误。破坏财物损害秩序。"
  },
  {
    id: "od0036",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le harcèlement est :",
    options: [
      "Autorisé",
      "Un jeu",
      "Un délit",
      "Une opinion"
    ],
    answer: 2,
    explanation: "❌ A. Autorisé - Faux. Le harcèlement est interdit.\n中：错误。骚扰是违法的。\n\n❌ B. Un jeu - Faux. Le harcèlement n'est pas un jeu, c'est une violence psychologique ou physique.\n中：错误。骚扰不是游戏，而是心理或身体暴力。\n\n✅ C. Un délit - Correct ! Le harcèlement peut être un délit (harcèlement moral, sexuel, etc.).\n中：正确。骚扰可构成轻罪（例如心理骚扰、性骚扰等）。\n\n❌ D. Une opinion - Faux. Le harcèlement n'est pas une opinion.\n中：错误。骚扰不是观点。"
  },
  {
    id: "od0037",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quelle action est interdite en France ?",
    options: [
      "Aider une personne",
      "Acheter un acte sexuel",
      "Recycler",
      "Voter"
    ],
    answer: 1,
    explanation: "❌ A. Aider une personne - Faux. Aider une personne est encouragé et parfois obligatoire.\n中：错误。帮助他人是鼓励甚至有时是义务。\n\n✅ B. Acheter un acte sexuel - Correct ! L'achat d'un acte sexuel est interdit en France (prostitution interdite du côté client).\n中：正确。在法国购买性行为是违法的（对买方禁止）。\n\n❌ C. Recycler - Faux. Recycler est une action positive et autorisée.\n中：错误。回收是合法且积极的行为。\n\n❌ D. Voter - Faux. Voter est un droit (pour les personnes concernées).\n中：错误。投票是权利。"
  },
  {
    id: "od0038",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Qui peut déposer une plainte ?",
    options: [
      "Seulement les citoyens",
      "Toute victime",
      "Seulement les policiers",
      "Les témoins uniquement"
    ],
    answer: 1,
    explanation: "❌ A. Seulement les citoyens - Faux. Même une personne étrangère peut déposer plainte.\n中：错误。外国人也可以报案。\n\n✅ B. Toute victime - Correct ! Toute victime peut déposer une plainte, quel que soit son statut.\n中：正确。任何受害者都可以报案。\n\n❌ C. Seulement les policiers - Faux. Les policiers peuvent constater, mais ce sont les victimes qui déposent la plainte.\n中：错误。警察可记录，但报案由受害者提出。\n\n❌ D. Les témoins uniquement - Faux. Les témoins peuvent témoigner, mais ne déposent pas la plainte à la place de la victime.\n中：错误。证人可作证，但不等同于报案。"
  },
  {
    id: "od0039",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Une agression sexuelle est :",
    options: [
      "Un comportement autorisé",
      "Une infraction pénale",
      "Une opinion",
      "Une tradition"
    ],
    answer: 1,
    explanation: "❌ A. Un comportement autorisé - Faux. Une agression sexuelle est interdite et punie par la loi.\n中：错误。性侵是违法并受惩罚的。\n\n✅ B. Une infraction pénale - Correct ! L'agression sexuelle est une infraction pénale.\n中：正确。性侵是刑事违法行为。\n\n❌ C. Une opinion - Faux. Ce n'est pas une opinion.\n中：错误。不是观点。\n\n❌ D. Une tradition - Faux. Ce n'est pas une tradition.\n中：错误。不是传统。"
  },
  {
    id: "od0040",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le consentement doit être :",
    options: [
      "Obligatoire et mutuel",
      "Silencieux",
      "Définitif",
      "Imposé"
    ],
    answer: 0,
    explanation: "✅ A. Obligatoire et mutuel - Correct ! Le consentement doit être libre, éclairé, et mutuel.\n中：正确。同意必须是自愿、知情且相互的。\n\n❌ B. Silencieux - Faux. Le consentement doit être clair, pas forcément silencieux.\n中：错误。同意必须明确，不是默许。\n\n❌ C. Définitif - Faux. Le consentement peut être retiré à tout moment.\n中：错误。同意可随时撤回。\n\n❌ D. Imposé - Faux. Le consentement ne peut pas être imposé.\n中：错误。同意不能被强迫。"
  },
  {
    id: "od0041",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Les violences physiques sont :",
    options: [
      "Acceptables",
      "Interdites",
      "Recommandées",
      "Sans conséquence"
    ],
    answer: 1,
    explanation: "❌ A. Acceptables - Faux. Les violences physiques sont interdites et punies par la loi.\n中：错误。身体暴力是禁止并受惩罚的。\n\n✅ B. Interdites - Correct ! La violence physique est interdite.\n中：正确。身体暴力是违法的。\n\n❌ C. Recommandées - Faux. La loi ne recommande pas la violence.\n中：错误。法律不建议使用暴力。\n\n❌ D. Sans conséquence - Faux. La violence entraîne des sanctions pénales.\n中：错误。暴力会受到刑罚。"
  },
  {
    id: "od0042",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Pourquoi protéger les enfants contre les violences ?",
    options: [
      "Pour limiter leur liberté",
      "Pour garantir leurs droits fondamentaux",
      "Pour punir les parents",
      "Pour éviter l'école"
    ],
    answer: 1,
    explanation: "❌ A. Pour limiter leur liberté - Faux. La protection vise à garantir leurs droits, pas à limiter leur liberté.\n中：错误。保护儿童不是限制自由。\n\n✅ B. Pour garantir leurs droits fondamentaux - Correct ! Les enfants ont des droits fondamentaux à la protection et à la sécurité.\n中：正确。保护儿童是为了保障其基本权利和安全。\n\n❌ C. Pour punir les parents - Faux. La protection vise à protéger l'enfant, pas à punir.\n中：错误。保护儿童不是惩罚父母。\n\n❌ D. Pour éviter l'école - Faux. La protection n'a rien à voir avec l'école.\n中：错误。保护儿童不是为了逃避上学。"
  },
  {
    id: "od0043",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le travail forcé est :",
    options: [
      "Autorisé",
      "Une tradition",
      "Interdit",
      "Facultatif"
    ],
    answer: 2,
    explanation: "❌ A. Autorisé - Faux. Le travail forcé est interdit par la loi.\n中：错误。强迫劳动是违法的。\n\n❌ B. Une tradition - Faux. Ce n'est pas une tradition, c'est une violation des droits.\n中：错误。不是传统，而是侵犯人权。\n\n✅ C. Interdit - Correct ! Le travail forcé est interdit.\n中：正确。强迫劳动是禁止的。\n\n❌ D. Facultatif - Faux. Le travail forcé n'est pas une option, c'est illégal.\n中：错误。强迫劳动不是可选的。"
  },
  {
    id: "od0044",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quel acte relève de la traite des êtres humains ?",
    options: [
      "Aider quelqu'un",
      "Exploiter une personne",
      "Informer",
      "Héberger gratuitement"
    ],
    answer: 1,
    explanation: "❌ A. Aider quelqu'un - Faux. Aider quelqu'un n'est pas de la traite.\n中：错误。帮助他人不是人口贩卖。\n\n✅ B. Exploiter une personne - Correct ! La traite consiste à exploiter une personne par la force, la tromperie ou la contrainte.\n中：正确。人口贩卖是通过强迫、欺骗或胁迫剥削他人。\n\n❌ C. Informer - Faux. Informer n'est pas de la traite.\n中：错误。告知不是人口贩卖。\n\n❌ D. Héberger gratuitement - Faux. Héberger gratuitement n'est pas de la traite.\n中：错误。免费提供住宿不是人口贩卖。"
  },
  {
    id: "od0045",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quelle attitude favorise le respect de l'environnement ?",
    options: [
      "Utiliser des transports doux",
      "Polluer",
      "Gaspiller",
      "Détruire"
    ],
    answer: 0,
    explanation: "✅ A. Utiliser des transports doux - Correct ! Utiliser le vélo, la marche ou les transports en commun réduit la pollution et protège l'environnement.\n中：正确。使用低碳交通（骑车、步行、公共交通）减少污染，保护环境。\n\n❌ B. Polluer - Faux. Polluer nuit à l'environnement et est contraire aux règles de protection.\n中：错误。污染环境有害且违背环保原则。\n\n❌ C. Gaspiller - Faux. Gaspiller les ressources augmente les déchets et détruit l'environnement.\n中：错误。浪费资源会增加垃圾并破坏环境。\n\n❌ D. Détruire - Faux. Détruire la nature est contraire au respect de l'environnement.\n中：错误。破坏自然不符合环保。"
  },
  {
    id: "od0046",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Les forces de l'ordre peuvent :",
    options: [
      "Appliquer la loi",
      "Créer les lois",
      "Juger",
      "Ignorer les règles"
    ],
    answer: 0,
    explanation: "✅ A. Appliquer la loi - Correct ! La police et la gendarmerie appliquent la loi et maintiennent l'ordre public.\n中：正确。警察和宪兵执行法律、维护公共秩序。\n\n❌ B. Créer les lois - Faux. La création des lois relève du Parlement, pas des forces de l'ordre.\n中：错误。立法由议会负责，不是执法部门。\n\n❌ C. Juger - Faux. Le jugement est la mission des juges, pas des forces de l'ordre.\n中：错误。审判由法官负责。\n\n❌ D. Ignorer les règles - Faux. Les forces de l'ordre doivent respecter et appliquer les règles.\n中：错误。执法部门必须遵守并执行法律。"
  },
  {
    id: "od0047",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Refuser d'obéir à un ordre légal d'un policier est :",
    options: [
      "Autorisé",
      "Une infraction possible",
      "Une obligation",
      "Une récompense"
    ],
    answer: 1,
    explanation: "❌ A. Autorisé - Faux. Refuser un ordre légal peut être une infraction (ou une obstruction).\n中：错误。拒绝合法指令可能构成违法或妨碍执法。\n\n✅ B. Une infraction possible - Correct ! Refuser d'obéir à un ordre légal peut être une infraction.\n中：正确。拒绝服从合法指令可能构成违法。\n\n❌ C. Une obligation - Faux. Ce n'est pas une obligation, mais une infraction.\n中：错误。不是义务。\n\n❌ D. Une récompense - Faux. Refuser n'entraîne pas de récompense.\n中：错误。拒绝不会得到奖励。"
  },
  {
    id: "od0048",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La violence psychologique peut inclure :",
    options: [
      "Les menaces",
      "Les soins",
      "L'aide",
      "Le respect"
    ],
    answer: 0,
    explanation: "✅ A. Les menaces - Correct ! Les menaces font partie de la violence psychologique.\n中：正确。威胁属于心理暴力的一种形式。\n\n❌ B. Les soins - Faux. Les soins sont une aide, pas une violence.\n中：错误。护理是帮助，不是暴力。\n\n❌ C. L'aide - Faux. Aider quelqu'un n'est pas de la violence.\n中：错误。帮助不是暴力。\n\n❌ D. Le respect - Faux. Le respect n'est pas de la violence.\n中：错误。尊重不是暴力。"
  },
  {
    id: "od0049",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Pourquoi signaler une violence ?",
    options: [
      "Pour aggraver la situation",
      "Pour protéger la victime",
      "Pour punir soi-même",
      "Pour ignorer les faits"
    ],
    answer: 1,
    explanation: "❌ A. Pour aggraver la situation - Faux. Signaler vise à protéger, pas à aggraver.\n中：错误。举报是为了保护，不是制造更糟。\n\n✅ B. Pour protéger la victime - Correct ! Signaler permet d'aider la victime et d'empêcher la violence.\n中：正确。举报可以帮助受害者并阻止暴力。\n\n❌ C. Pour punir soi-même - Faux. La justice n'est pas personnelle, elle est collective.\n中：错误。惩罚不是个人行为，而是法律程序。\n\n❌ D. Pour ignorer les faits - Faux. Signaler c'est au contraire reconnaître les faits.\n中：错误。举报不是忽视事实。"
  },
  {
    id: "od0050",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Être témoin de violences implique :",
    options: [
      "Ne rien faire",
      "Agir sans se mettre en danger",
      "Encourager l'agresseur",
      "Filmer seulement"
    ],
    answer: 1,
    explanation: "❌ A. Ne rien faire - Faux. Ne rien faire laisse la victime sans aide et peut aggraver la situation.\n中：错误。袖手旁观会让受害者继续受害。\n\n✅ B. Agir sans se mettre en danger - Correct ! Il faut aider la victime ou appeler les secours, tout en restant en sécurité.\n中：正确。应在不危及自身安全的情况下提供帮助或呼叫援助。\n\n❌ C. Encourager l'agresseur - Faux. Encourager l'agresseur est une faute et peut être puni.\n中：错误。鼓励施暴者是错误行为，可能构成违法。\n\n❌ D. Filmer seulement - Faux. Filmer sans intervenir ne protège pas la victime et peut être insuffisant.\n中：错误。仅拍摄不能有效保护受害者。"
  },
  {
    id: "od0051",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Une amende est une sanction :",
    options: [
      "Administrative seulement",
      "Pénale possible",
      "Illégale",
      "Symbolique"
    ],
    answer: 1,
    explanation: "❌ A. Administrative seulement - Faux. Une amende peut être administrative ou pénale selon l'infraction.\n中：错误。罚款可以是行政处罚，也可以是刑事处罚。\n\n✅ B. Pénale possible - Correct ! Une amende peut être une sanction pénale (ex : contravention).\n中：正确。罚款可以是刑事处罚（如违章罚款）。\n\n❌ C. Illégale - Faux. Une amende est une sanction légale lorsqu'elle est prononcée par une autorité compétente.\n中：错误。罚款是合法的处罚。\n\n❌ D. Symbolique - Faux. Une amende a une valeur réelle (argent à payer).\n中：错误。罚款不是象征性处罚。"
  },
  {
    id: "od0052",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Pourquoi la tentative de crime est-elle punissable ?",
    options: [
      "Parce qu'elle est dangereuse",
      "Parce qu'elle est autorisée",
      "Parce qu'elle est culturelle",
      "Parce qu'elle est rare"
    ],
    answer: 0,
    explanation: "✅ A. Parce qu'elle est dangereuse - Correct ! La tentative est punissable car elle montre une volonté de commettre un crime et peut mettre en danger.\n中：正确。未遂行为具有危险性且表明犯罪意图，因此受罚。\n\n❌ B. Parce qu'elle est autorisée - Faux. La tentative n'est pas autorisée.\n中：错误。未遂行为不被允许。\n\n❌ C. Parce qu'elle est culturelle - Faux. La culture n'est pas un motif légal.\n中：错误。文化不是法律依据。\n\n❌ D. Parce qu'elle est rare - Faux. La rareté n'explique pas la punition.\n中：错误。稀有性不是处罚理由。"
  },
  {
    id: "od0053",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Le harcèlement scolaire correspond à :",
    options: [
      "Un conflit isolé entre élèves",
      "Des violences répétées contre un élève",
      "Une punition scolaire",
      "Une plaisanterie sans conséquence"
    ],
    answer: 1,
    explanation: "❌ A. Un conflit isolé entre élèves - Faux. Un conflit ponctuel n'est pas du harcèlement.\n中：错误。一次性冲突不算校园霸凌。\n\n✅ B. Des violences répétées contre un élève - Correct ! Le harcèlement scolaire implique des violences répétées (physiques, verbales, psychologiques).\n中：正确。校园霸凌是对某一学生反复施加暴力（身体、语言、心理）。\n\n❌ C. Une punition scolaire - Faux. Une punition est une sanction, pas du harcèlement.\n中：错误。惩罚是处罚，不是霸凌。\n\n❌ D. Une plaisanterie sans conséquence - Faux. Même si c'est présenté comme une plaisanterie, si c'est répété et blessant, c'est du harcèlement.\n中：错误。即使说是玩笑，若反复伤害也属于霸凌。"
  },
  {
    id: "od0054",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quel exemple peut être considéré comme du harcèlement scolaire ?",
    options: [
      "Un désaccord ponctuel",
      "Des insultes répétées envers un élève",
      "Un contrôle surprise",
      "Une discussion normale"
    ],
    answer: 1,
    explanation: "❌ A. Un désaccord ponctuel - Faux. Un désaccord ponctuel n'est pas du harcèlement.\n中：错误。一次性争执不算霸凌。\n\n✅ B. Des insultes répétées envers un élève - Correct ! Les insultes répétées constituent du harcèlement.\n中：正确。反复侮辱属于校园霸凌。\n\n❌ C. Un contrôle surprise - Faux. Un contrôle surprise est une pratique scolaire normale.\n中：错误。突击测试是正常教学行为。\n\n❌ D. Une discussion normale - Faux. Une discussion normale ne constitue pas du harcèlement.\n中：错误。正常交流不是霸凌。"
  },
  {
    id: "od0055",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "En France, le harcèlement scolaire est :",
    options: [
      "Autorisé",
      "Un délit puni par la loi",
      "Une tradition",
      "Une règle interne à l'école seulement"
    ],
    answer: 1,
    explanation: "❌ A. Autorisé - Faux. Il est interdit.\n中：错误。校园霸凌被禁止。\n\n✅ B. Un délit puni par la loi - Correct ! Le harcèlement scolaire est une infraction punissable.\n中：正确。校园霸凌是违法行为，会受到惩罚。\n\n❌ C. Une tradition - Faux. Ce n'est pas une tradition, c'est un comportement illégal.\n中：错误。不是传统，而是违法。\n\n❌ D. Une règle interne à l'école seulement - Faux. C'est une infraction pénale, pas seulement une règle scolaire.\n中：错误。不仅是学校规则，也触犯法律。"
  },
  {
    id: "od0056",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La maltraitance envers un enfant désigne :",
    options: [
      "Une méthode éducative",
      "Des violences physiques, psychologiques ou des privations",
      "Une punition légale",
      "Une obligation parentale"
    ],
    answer: 1,
    explanation: "❌ A. Une méthode éducative - Faux. La maltraitance n'est pas une éducation.\n中：错误。虐待不是教育方式。\n\n✅ B. Des violences physiques, psychologiques ou des privations - Correct ! La maltraitance inclut violences, négligence, privations.\n中：正确。虐待包括身体/心理暴力或剥夺基本需求。\n\n❌ C. Une punition légale - Faux. Une punition légale est encadrée par la loi, pas une maltraitance.\n中：错误。合法惩罚不是虐待。\n\n❌ D. Une obligation parentale - Faux. Les parents ont une obligation de protection, pas de maltraitance.\n中：错误。父母应保护孩子，不是虐待。"
  },
  {
    id: "od0057",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quel acte peut être considéré comme de la maltraitance ?",
    options: [
      "Nourrir un enfant",
      "Le priver volontairement de soins",
      "L'inscrire à l'école",
      "Lui parler calmement"
    ],
    answer: 1,
    explanation: "❌ A. Nourrir un enfant - Faux. Nourrir un enfant est un soin, pas une maltraitance.\n中：错误。喂养是照顾，不是虐待。\n\n✅ B. Le priver volontairement de soins - Correct ! Priver un enfant de soins est une forme de maltraitance.\n中：正确。故意剥夺照顾属于虐待。\n\n❌ C. L'inscrire à l'école - Faux. Inscrire un enfant à l'école est une protection et un droit.\n中：错误。送孩子上学是保护措施。\n\n❌ D. Lui parler calmement - Faux. Parler calmement est une attitude respectueuse, pas de la maltraitance.\n中：错误。平静沟通不是虐待。"
  },
  {
    id: "od0058",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Les violences physiques sur un enfant sont :",
    options: [
      "Acceptées",
      "Interdites par la loi",
      "Recommandées",
      "Facultatives"
    ],
    answer: 1,
    explanation: "❌ A. Acceptées - Faux. Elles sont interdites.\n中：错误。身体暴力不被接受。\n\n✅ B. Interdites par la loi - Correct ! Les violences physiques sur un enfant sont illégales.\n中：正确。对儿童的身体暴力违法。\n\n❌ C. Recommandées - Faux. La loi ne recommande pas la violence.\n中：错误。法律不建议暴力。\n\n❌ D. Facultatives - Faux. Ce n'est pas une option, c'est interdit.\n中：错误。不是可选择的。"
  },
  {
    id: "od0059",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "difficile",
    typeQuestion: "question simulée",
    question: "Qu'est-ce qu'une contravention ?",
    options: [
      "L'infraction la plus grave",
      "Une infraction légère",
      "Un crime",
      "Un acte légal"
    ],
    answer: 1,
    explanation: "❌ A. L'infraction la plus grave - Faux. La contravention est la moins grave.\n中：错误。违章是最轻的违法。\n\n✅ B. Une infraction légère - Correct ! La contravention est une infraction légère.\n中：正确。违章是轻微违法。\n\n❌ C. Un crime - Faux. Le crime est la plus grave.\n中：错误。重罪不是违章。\n\n❌ D. Un acte légal - Faux. Une contravention reste une infraction.\n中：错误。违章不是合法行为。"
  },
  {
    id: "od0060",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "difficile",
    typeQuestion: "question simulée",
    question: "Quel exemple correspond à une contravention ?",
    options: [
      "Un assassinat",
      "Un tapage nocturne",
      "Un viol",
      "Un braquage"
    ],
    answer: 1,
    explanation: "❌ A. Un assassinat - Faux. C'est un crime.\n中：错误。谋杀是重罪。\n\n✅ B. Un tapage nocturne - Correct ! Le tapage nocturne est une contravention (infraction légère).\n中：正确。夜间噪音属于违章行为。\n\n❌ C. Un viol - Faux. C'est un crime.\n中：错误。强奸是重罪。\n\n❌ D. Un braquage - Faux. C'est un délit ou crime selon les cas.\n中：错误。抢劫是轻罪或重罪。"
  },
  {
    id: "od0061",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quelle sanction est possible pour une contravention ?",
    options: [
      "Prison à vie",
      "Une amende",
      "La peine de mort",
      "Aucune sanction"
    ],
    answer: 1,
    explanation: "❌ A. Prison à vie - Faux. La prison à vie concerne les crimes.\n中：错误。终身监禁用于重罪。\n\n✅ B. Une amende - Correct ! La contravention est souvent sanctionnée par une amende.\n中：正确。违章通常以罚款处罚。\n\n❌ C. La peine de mort - Faux. La peine de mort n'existe pas en France.\n中：错误。法国没有死刑。\n\n❌ D. Aucune sanction - Faux. Une contravention entraîne une sanction (amende).\n中：错误。违章会受到处罚。"
  },
  {
    id: "od0062",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La Journée Défense et Citoyenneté (JDC) concerne :",
    options: [
      "Les étrangers",
      "Les jeunes citoyens français",
      "Les policiers",
      "Les élus"
    ],
    answer: 1,
    explanation: "❌ A. Les étrangers - Faux. La JDC concerne les jeunes français ou résidant en France.\n中：错误。JDC针对法国青年或在法国居住的青年。\n\n✅ B. Les jeunes citoyens français - Correct ! La JDC concerne les jeunes français (généralement 16--25 ans).\n中：正确。JDC面向法国青年（通常16-25岁）。\n\n❌ C. Les policiers - Faux. La JDC n'est pas destinée aux policiers.\n中：错误。警察不属于对象。\n\n❌ D. Les élus - Faux. Les élus ne sont pas concernés.\n中：错误。政府官员不参与。"
  },
  {
    id: "od0063",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quel est l'objectif principal de la JDC ?",
    options: [
      "Punir les jeunes",
      "Sensibiliser à la défense et à la citoyenneté",
      "Recruter obligatoirement pour l'armée",
      "Supprimer les droits civiques"
    ],
    answer: 1,
    explanation: "❌ A. Punir les jeunes - Faux. La JDC n'est pas une punition.\n中：错误。JDC不是惩罚。\n\n✅ B. Sensibiliser à la défense et à la citoyenneté - Correct ! La JDC informe sur la défense nationale et les droits/devoirs civiques.\n中：正确。JDC旨在提高对国防和公民义务的认识。\n\n❌ C. Recruter obligatoirement pour l'armée - Faux. Ce n'est pas un recrutement obligatoire.\n中：错误。不是强制征兵。\n\n❌ D. Supprimer les droits civiques - Faux. La JDC vise au contraire à informer sur les droits civiques.\n中：错误。不是剥夺公民权。"
  },
  {
    id: "od0064",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Un citoyen français peut devenir juré :",
    options: [
      "S'il est volontaire uniquement",
      "Par tirage au sort",
      "Sur décision de la police",
      "Par héritage"
    ],
    answer: 1,
    explanation: "❌ A. S'il est volontaire uniquement - Faux. Le juré est tiré au sort parmi les citoyens éligibles.\n中：错误。陪审员通过抽签产生，而非自愿。\n\n✅ B. Par tirage au sort - Correct ! Les jurés sont choisis par tirage au sort.\n中：正确。陪审员通过抽签选出。\n\n❌ C. Sur décision de la police - Faux. La police ne décide pas des jurés.\n中：错误。警察不决定陪审员。\n\n❌ D. Par héritage - Faux. Ce n'est pas héréditaire.\n中：错误。不是世袭。"
  },
  {
    id: "od0065",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Être juré signifie :",
    options: [
      "Juger seul",
      "Participer à un procès de cour d'assises",
      "Être avocat",
      "Être policier"
    ],
    answer: 1,
    explanation: "❌ A. Juger seul - Faux. Le juré participe au jugement avec les magistrats.\n中：错误。陪审员不是独自审判。\n\n✅ B. Participer à un procès de cour d'assises - Correct ! Le juré participe aux procès criminels en cour d'assises.\n中：正确。陪审员参与重罪审判（陪审团制）。\n\n❌ C. Être avocat - Faux. L'avocat défend, ce n'est pas le juré.\n中：错误。律师不是陪审员。\n\n❌ D. Être policier - Faux. Policier n'est pas juré.\n中：错误。警察不是陪审员。"
  },
  {
    id: "od0066",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quelle infraction peut entraîner une peine de prison jusqu'à 10 ans ?",
    options: [
      "Une contravention",
      "Un délit",
      "Une faute légère",
      "Une règle scolaire"
    ],
    answer: 1,
    explanation: "❌ A. Une contravention - Faux. La contravention n'entraîne pas une peine aussi longue.\n中：错误。违章不会判这么久。\n\n✅ B. Un délit - Correct ! Certains délits peuvent entraîner jusqu'à 10 ans de prison.\n中：正确。部分轻罪可判最高10年监禁。\n\n❌ C. Une faute légère - Faux. Une faute légère n'est pas une infraction pénale grave.\n中：错误。轻微过失不严重。\n\n❌ D. Une règle scolaire - Faux. Les règles scolaires ne sont pas sanctionnées par prison.\n中：错误。校规不会判刑。"
  },
  {
    id: "od0067",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Un crime peut être puni par :",
    options: [
      "Une simple amende",
      "Une peine de prison de 15 ans à la perpétuité",
      "Un avertissement",
      "Un rappel à la loi seulement"
    ],
    answer: 1,
    explanation: "❌ A. Une simple amende - Faux. Une amende est une sanction légère, pas adaptée aux crimes.\n中：错误。罚款是轻微处罚，不适用于重罪。\n\n✅ B. Une peine de prison de 15 ans à la perpétuité - Correct ! Un crime est puni par une peine criminelle, qui peut aller de 15 ans de réclusion à la perpétuité.\n中：正确。重罪会被判刑，刑期可从15年监禁到无期徒刑。\n\n❌ C. Un avertissement - Faux. Un avertissement est une mesure très légère, utilisée pour des faits mineurs, pas pour un crime.\n中：错误。警告是轻微措施，不适用于重罪。\n\n❌ D. Un rappel à la loi seulement - Faux. Un rappel à la loi ne suffit pas pour un crime, il faut une peine pénale.\n中：错误。仅提醒法律不足以惩处重罪。"
  },
  {
    id: "od0068",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La tentative de crime est :",
    options: [
      "Autorisée",
      "Punissable par la loi",
      "Ignorée",
      "Recommandée"
    ],
    answer: 1,
    explanation: "❌ A. Autorisée - Faux. La tentative n'est pas autorisée.\n中：错误。未遂不被允许。\n\n✅ B. Punissable par la loi - Correct ! La tentative est punissable, car elle montre une volonté criminelle.\n中：正确。未遂行为受罚。\n\n❌ C. Ignorée - Faux. La loi ne l'ignore pas.\n中：错误。法律不会忽视未遂。\n\n❌ D. Recommandée - Faux. La tentative n'est pas recommandée.\n中：错误。未遂不被鼓励。"
  },
  {
    id: "od0069",
    type: "carte multi",
    category: "Obligations et devoirs des personnes résidant en France",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Pourquoi les infractions sont-elles sanctionnées ?",
    options: [
      "Pour faire peur aux citoyens",
      "Pour garantir l'ordre public et la sécurité",
      "Pour supprimer les libertés",
      "Pour éviter les droits"
    ],
    answer: 1,
    explanation: "❌ A. Pour faire peur aux citoyens - Faux. La sanction vise à protéger la société, pas à faire peur.\n中：错误。处罚目的是保护社会，不是恐吓。\n\n✅ B. Pour garantir l'ordre public et la sécurité - Correct ! Les sanctions servent à maintenir l'ordre public et protéger la sécurité.\n中：正确。处罚旨在维护公共秩序和安全。\n\n❌ C. Pour supprimer les libertés - Faux. Les sanctions encadrent les libertés, pas les supprimer.\n中：错误。处罚不是剥夺自由。\n\n❌ D. Pour éviter les droits - Faux. La sanction ne vise pas à 剥夺权利。\n中：错误。处罚不是为了避免权利。"
  },

  {
    id: "si0048",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Une femme majeure de nationalité française a-t-elle le droit de voter aux élections ?",
    options: [
      "Oui",
      "Non",
      "Seulement si elle travaille",
      "Seulement si elle est mariée"
    ],
    answer: 0,
    explanation: "✅ A. Oui - Correct ! Les citoyens français majeurs ont le droit de voter.\n中：正确。法国成年公民有投票权。\n\n❌ B. Non - Faux. Les citoyens majeurs ont le droit de vote.\n中：错误。成年人有投票权。\n\n❌ C. Seulement si elle travaille - Faux. Le droit de vote ne dépend pas du travail.\n中：错误。投票权不取决于是否工作。\n\n❌ D. Seulement si elle est mariée - Faux. Le droit de vote n'est pas lié au mariage.\n中：错误。投票权与婚姻无关。"
  },
  {
    id: "si0049",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Jeter un mégot par terre est :",
    options: [
      "Un geste écologique",
      "Une infraction (pollution)",
      "Un acte recommandé",
      "Un droit"
    ],
    answer: 1,
    explanation: "❌ A. Un geste écologique - Faux. C'est une pollution et un geste nuisible à l'environnement.\n中：错误。这是污染行为，对环境有害。\n\n✅ B. Une infraction (pollution) - Correct ! Jeter un mégot par terre est interdit et peut être sanctionné.\n中：正确。乱扔烟头属于污染违法行为，可被处罚。\n\n❌ C. Un acte recommandé - Faux. Ce n'est pas recommandé, c'est interdit.\n中：错误。不被推荐，是违法行为。\n\n❌ D. Un droit - Faux. Personne n'a le droit de polluer.\n中：错误。没有人有权污染环境。"
  },
  {
    id: "si0050",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Pourquoi doit-on trier ses déchets ?",
    options: [
      "Pour polluer plus",
      "Pour protéger l'environnement",
      "Pour gagner de l'argent",
      "Pour éviter les voisins"
    ],
    answer: 1,
    explanation: "❌ A. Pour polluer plus - Faux. Le tri vise à réduire la pollution, pas l'augmenter.\n中：错误。分类是为了减少污染，不是增加。\n\n✅ B. Pour protéger l'environnement - Correct ! Trier permet de recycler et de protéger la planète.\n中：正确。垃圾分类可回收，保护环境。\n\n❌ C. Pour gagner de l'argent - Faux. Ce n'est pas le but principal.\n中：错误。不是主要目的。\n\n❌ D. Pour éviter les voisins - Faux. Le tri n'a rien à voir avec les voisins.\n中：错误。与邻居无关。"
  },
  {
    id: "si0051",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est un exemple d'assistance à personne en danger ?",
    options: [
      "Ignore une personne blessée",
      "Appeler les secours",
      "Voler une voiture",
      "Faire une vidéo"
    ],
    answer: 1,
    explanation: "❌ A. Ignorer une personne blessée - Faux. Ignorer une personne en danger est une faute.\n中：错误。忽视受伤者是不对的。\n\n✅ B. Appeler les secours - Correct ! Appeler le 15/17/18 est une aide à une personne en danger.\n中：正确。拨打紧急电话是对危险中的人提供帮助。\n\n❌ C. Voler une voiture - Faux. Ce n'est pas une aide, c'est un délit.\n中：错误。偷车不是帮助，是犯罪。\n\n❌ D. Faire une vidéo - Faux. Filmer seul ne protège pas la victime.\n中：错误。仅拍视频不能保护受害者。"
  },
  {
    id: "si0052",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle est l'attitude à avoir lorsque qu'on est témoin de violences ?",
    options: [
      "Filmer et ne rien faire",
      "Appeler la police ou aider la victime",
      "Encourager l'agresseur",
      "S'enfuir en riant"
    ],
    answer: 1,
    explanation: "❌ A. Filmer et ne rien faire - Faux. Filmer sans intervenir ne protège pas la victime.\n中：错误。只拍视频不能保护受害者。\n\n✅ B. Appeler la police ou aider la victime - Correct ! Il faut appeler les secours ou intervenir sans se mettre en danger.\n中：正确。应报警或在不危及自身安全的情况下帮助受害者。\n\n❌ C. Encourager l'agresseur - Faux. Encourager l'agresseur aggrave la situation.\n中：错误。鼓励施暴者会加重问题。\n\n❌ D. S'enfuir en riant - Faux. C'est une attitude inacceptable et dangereuse.\n中：错误。逃跑并嘲笑是不负责任的行为。"
  },
  {
    id: "si0053",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Faut-il réduire ses déchets ?",
    options: [
      "Oui, pour protéger l'environnement",
      "Non, ce n'est pas important",
      "Non, c'est inutile",
      "Oui, pour polluer plus"
    ],
    answer: 0,
    explanation: "✅ A. Oui, pour protéger l'environnement - Correct ! Réduire les déchets limite la pollution et protège la planète.\n中：正确。减少垃圾可降低污染，保护环境。\n\n❌ B. Non, ce n'est pas important - Faux. Réduire les déchets est important pour l'environnement.\n中：错误。减少垃圾很重要。\n\n❌ C. Non, c'est inutile - Faux. C'est utile et nécessaire.\n中：错误。很有用且必要。\n\n❌ D. Oui, pour polluer plus - Faux. Réduire vise à polluer moins.\n中：错误。减少垃圾是为了减少污染。"
  },
  {
    id: "si0054",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Jeter une bouteille dans la rue est :",
    options: [
      "Une action écologique",
      "Une infraction (pollution)",
      "Un acte civique",
      "Un droit"
    ],
    answer: 1,
    explanation: "❌ A. Une action écologique - Faux. C'est une pollution et un acte interdit.\n中：错误。是污染行为，违法。\n\n✅ B. Une infraction (pollution) - Correct ! C'est interdit et peut être sanctionné.\n中：正确。乱扔瓶子属于违法污染行为。\n\n❌ C. Un acte civique - Faux. Un acte civique protège l'environnement, pas l'endommage.\n中：错误。公民行为应保护环境。\n\n❌ D. Un droit - Faux. Personne n'a le droit de polluer.\n中：错误。没有污染权。"
  },
  {
    id: "si0055",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Que doit faire une personne en cas d'accident ?",
    options: [
      "Ignorer la situation",
      "Appeler les secours",
      "Partir rapidement",
      "Filmer la scène"
    ],
    answer: 1,
    explanation: "❌ A. Ignorer la situation - Faux. Ignorer un accident peut aggraver les blessures.\n中：错误。忽视事故会使情况更糟。\n\n✅ B. Appeler les secours - Correct ! Il faut appeler les secours (15/17/18) et aider si possible.\n中：正确。应拨打急救电话并在可能情况下提供帮助。\n\n❌ C. Partir rapidement - Faux. Partir est un délit (délit de fuite).\n中：错误。离开现场是逃逸犯罪。\n\n❌ D. Filmer la scène - Faux. Filmer seul ne suffit pas, il faut aider.\n中：错误。仅拍摄不足以提供帮助。"
  },
  {
    id: "si0056",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Déposer une machine à laver cassée sur le trottoir est :",
    options: [
      "Un geste écologique",
      "Une infraction (déchets encombrants)",
      "Un acte normal",
      "Une bonne idée"
    ],
    answer: 1,
    explanation: "❌ A. Un geste écologique - Faux. C'est une pollution et une infraction.\n中：错误。是污染和违法行为。\n\n✅ B. Une infraction (déchets encombrants) - Correct ! Déposer des objets volumineux sur la voie publique est interdit.\n中：正确。乱丢大型废弃物违法。\n\n❌ C. Un acte normal - Faux. Ce n'est pas normal, c'est interdit.\n中：错误。不正常且违法。\n\n❌ D. Une bonne idée - Faux. Ce n'est pas une bonne idée, c'est une infraction.\n中：错误。不是好主意，是违法。"
  },
  {
    id: "si0057",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Une mineure souhaitant avorter doit être accompagnée :",
    options: [
      "De ses parents",
      "D'un policier",
      "D'un adulte de son choix",
      "D'un médecin uniquement"
    ],
    answer: 2,
    explanation: "❌ A. De ses parents - Faux. Elle peut être accompagnée d'un adulte de son choix (sauf cas particulier).\n中：错误。未成年可由自己选择的成年人陪同（特例除外）。\n\n❌ B. D'un policier - Faux. Aucun lien avec la police.\n中：错误。与警方无关。\n\n✅ C. D'un adulte de son choix - Correct ! Une mineure doit être accompagnée d'un adulte de son choix ou d'un parent.\n中：正确。未成年人可由自己选择的成年人或父母陪同。\n\n❌ D. D'un médecin uniquement - Faux. Le médecin intervient médicalement, mais l'accompagnement peut être un adulte.\n中：错误。医生负责医疗，但陪同不一定是医生。"
  },
  {
    id: "si0058",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Dans un couple, chaque personne conserve :",
    options: [
      "Les mêmes opinions",
      "Ses libertés individuelles",
      "Les décisions de l'autre",
      "Une dépendance juridique"
    ],
    answer: 1,
    explanation: "❌ A. Les mêmes opinions - Faux. Les opinions peuvent être différentes.\n中：错误。意见可以不同。\n\n✅ B. Ses libertés individuelles - Correct ! Chaque personne garde ses libertés et sa dignité.\n中：正确。每个人保有个人自由与尊严。\n\n❌ C. Les décisions de l'autre - Faux. Chacun a ses propres choix.\n中：错误。不是由对方决定。\n\n❌ D. Une dépendance juridique - Faux. Le couple ne crée pas une dépendance juridique obligatoire.\n中：错误。并非法律上的依赖关系。"
  },
  {
    id: "si0059",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Une usine chimique rejette illégalement des substances toxiques dans une rivière proche. Madame X se plaint de cette situation. Quel droit fondamental est concerné ?",
    options: [
      "Le droit de propriété",
      "Le droit à un environnement sain",
      "Le droit de vote",
      "Le droit de grève"
    ],
    answer: 1,
    explanation: "❌ A. Le droit de propriété - Faux. Ce droit concerne les biens, pas directement la pollution.\n中：错误。财产权与污染不是直接相关。\n\n✅ B. Le droit à un environnement sain - Correct ! La pollution porte atteinte au droit à un environnement sain.\n中：正确。污染侵犯了环境权。\n\n❌ C. Le droit de vote - Faux. Le vote est un droit politique, pas lié à la pollution.\n中：错误。投票权与污染无关。\n\n❌ D. Le droit de grève - Faux. La grève concerne le travail, pas la pollution.\n中：错误。罢工权与污染无关。"
  },
  {
    id: "si0060",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y subit des nuisances sonores importantes chaque nuit à cause de son voisin. Quelle liberté peut être légalement limitée ?",
    options: [
      "La liberté de religion",
      "La liberté d'expression",
      "La liberté individuelle pour protéger l'ordre public",
      "La liberté de vote"
    ],
    answer: 2,
    explanation: "❌ A. La liberté de religion - Faux. La religion n'est pas en cause ici.\n中：错误。与宗教无关。\n\n❌ B. La liberté d'expression - Faux. L'expression n'est pas directement concernée.\n中：错误。与言论自由无关。\n\n✅ C. La liberté individuelle pour protéger l'ordre public - Correct ! Les nuisances peuvent conduire à limiter certains comportements pour protéger l'ordre public et la tranquillité.\n中：正确。为了公共秩序与安宁，可能限制相关行为。\n\n❌ D. La liberté de vote - Faux. Le vote n'est pas concerné.\n中：错误。投票权不相关。"
  },
  {
    id: "si0061",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Madame X ne peut pas accéder à des soins médicaux essentiels. Quel droit fondamental est en cause ?",
    options: [
      "Le droit à la santé",
      "Le droit de circuler",
      "Le droit de propriété",
      "Le droit de grève"
    ],
    answer: 0,
    explanation: "✅ A. Le droit à la santé - Correct ! Le droit à la santé garantit l'accès aux soins pour tous.\n中：正确。健康权保障所有人都能获得医疗。\n\n❌ B. Le droit de circuler - Faux. Le problème concerne la santé, pas la circulation.\n中：错误。问题不在出行。\n\n❌ C. Le droit de propriété - Faux. Le droit de propriété concerne les biens, pas les soins.\n中：错误。财产权与医疗无关。\n\n❌ D. Le droit de grève - Faux. La grève concerne le travail, pas l'accès aux soins.\n中：错误。罢工权与医疗无关。"
  },
  {
    id: "si0062",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Monsieur Y refuse que des enfants d'un quartier aient accès à l'école publique. Quel droit serait violé ?",
    options: [
      "Le droit au logement",
      "Le droit à l'éducation",
      "Le droit à la nationalité",
      "Le droit de manifester"
    ],
    answer: 1,
    explanation: "❌ A. Le droit au logement - Faux. Le logement concerne le logement, pas l'accès à l'école.\n中：错误。住房权与上学无关。\n\n✅ B. Le droit à l'éducation - Correct ! Refuser l'accès à l'école publique viole le droit à l'éducation, qui garantit l'accès à l'instruction.\n中：正确。拒绝孩子上公立学校侵犯教育权。\n\n❌ C. Le droit à la nationalité - Faux. La nationalité concerne la citoyenneté, pas l'accès à l'école.\n中：错误。国籍权与上学无关。\n\n❌ D. Le droit de manifester - Faux. Le droit de manifester concerne le droit de protester, pas l'éducation.\n中：错误。示威权与教育无关。"
  },
  {
    id: "si0063",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Madame X est traitée comme un objet dans son travail. Quel principe fondamental n'est pas respecté ?",
    options: [
      "La liberté de commerce",
      "La dignité humaine",
      "Le droit de propriété",
      "La liberté de circulation"
    ],
    answer: 1,
    explanation: "❌ A. La liberté de commerce - Faux. La liberté de commerce concerne les échanges économiques, pas la dignité humaine au travail.\n中：错误。商业自由与工作中的人格尊严无关。\n\n✅ B. La dignité humaine - Correct ! Traiter une personne comme un objet porte atteinte à sa dignité, un principe fondamental.\n中：正确。把人当物品对人格尊严造成侵犯。\n\n❌ C. Le droit de propriété - Faux. Le droit de propriété concerne les biens, pas la façon de traiter une personne.\n中：错误。财产权与对人的待遇无关。\n\n❌ D. La liberté de circulation - Faux. La liberté de circulation concerne le déplacement, pas la dignité au travail.\n中：错误。出行自由与工作待遇无关。"
  },
  {
    id: "si0064",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Monsieur Y est empêché de pratiquer ou de ne pas pratiquer une religion. Quelle liberté est concernée ?",
    options: [
      "Liberté de circulation",
      "Liberté de religion",
      "Liberté de grève",
      "Liberté de presse"
    ],
    answer: 1,
    explanation: "❌ A. Liberté de circulation - Faux. La liberté de circulation concerne le déplacement, pas la religion.\n中：错误。出行自由与宗教无关。\n\n✅ B. Liberté de religion - Correct ! La liberté de religion protège le droit de croire ou de ne pas croire.\n中：正确。宗教自由保障信仰或不信仰的权利。\n\n❌ C. Liberté de grève - Faux. La grève concerne le travail, pas la religion.\n中：错误。罢工自由与宗教无关。\n\n❌ D. Liberté de presse - Faux. La presse concerne l'information, pas la religion.\n中：错误。新闻自由与宗教无关。"
  },
  {
    id: "si0065",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X tient des propos qui incitent à la violence contre un groupe. L'État intervient. Pourquoi ?",
    options: [
      "Pour censurer toute opinion",
      "Pour protéger l'ordre public et les personnes",
      "Pour limiter toutes les libertés",
      "Pour sanctionner une critique politique"
    ],
    answer: 1,
    explanation: "❌ A. Pour censurer toute opinion - Faux. L'État ne censure pas toutes les opinions, seulement les propos qui incitent à la violence.\n中：错误。国家不会封杀所有观点，只限制煽动暴力的言论。\n\n✅ B. Pour protéger l'ordre public et les personnes - Correct ! L'État peut limiter des propos dangereux pour protéger la sécurité et la dignité des personnes.\n中：正确。国家可限制危险言论以保护公共秩序和人身安全。\n\n❌ C. Pour limiter toutes les libertés - Faux. Les libertés sont limitées seulement si nécessaire et dans un cadre légal.\n中：错误。只有必要时才在法律框架内限制自由。\n\n❌ D. Pour sanctionner une critique politique - Faux. Critiquer la politique est légal tant que cela ne devient pas une incitation à la violence.\n中：错误。政治批评只要不煽动暴力是允许的。"
  },
  {
    id: "si0066",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y est accusé d'un crime mais n'a pas encore été jugé. Comment doit-il être considéré ?",
    options: [
      "Coupable",
      "Innocent jusqu'au jugement",
      "Responsable automatiquement",
      "Exclu de la société"
    ],
    answer: 1,
    explanation: "❌ A. Coupable - Faux. La présomption d'innocence s'applique jusqu'au jugement.\n中：错误。审判前应推定无罪。\n\n✅ B. Innocent jusqu'au jugement - Correct ! La présomption d'innocence garantit que la personne est considérée innocente tant qu'elle n'est pas jugée coupable.\n中：正确。未被判有罪前推定无罪。\n\n❌ C. Responsable automatiquement - Faux. La responsabilité doit être établie par un jugement.\n中：错误。责任需要审判确认。\n\n❌ D. Exclu de la société - Faux. Tant qu'il n'est pas condamné, il garde ses droits.\n中：错误。未定罪前仍享有权利。"
  },
  {
    id: "si0067",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "À la suite d'un attentat terroriste, certaines libertés sont temporairement limitées. Pourquoi ?",
    options: [
      "Pour supprimer les droits",
      "Pour protéger l'intérêt général",
      "Pour punir les citoyens",
      "Pour renforcer l'économie"
    ],
    answer: 1,
    explanation: "❌ A. Pour supprimer les droits - Faux. L'objectif n'est pas de supprimer les droits mais de protéger la population.\n中：错误。目的是保护，不是取消权利。\n\n✅ B. Pour protéger l'intérêt général - Correct ! Les restrictions peuvent être temporaires pour protéger la sécurité publique et l'intérêt général.\n中：正确。为保护公共安全和公共利益，可能临时限制部分自由。\n\n❌ C. Pour punir les citoyens - Faux. Les citoyens ne sont pas punis collectivement.\n中：错误。不是对公民的惩罚。\n\n❌ D. Pour renforcer l'économie - Faux. Ce n'est pas un objectif économique.\n中：错误。与经济无关。"
  },
  {
    id: "si0068",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X choisit une méthode de contraception sans l'accord de son partenaire. Quel droit exerce-t-elle ?",
    options: [
      "Le droit de vote",
      "Le droit de disposer de son corps",
      "Le droit de grève",
      "Le droit de propriété"
    ],
    answer: 1,
    explanation: "❌ A. Le droit de vote - Faux. Le droit de vote concerne la participation politique, pas la contraception.\n中：错误。投票权与避孕无关。\n\n✅ B. Le droit de disposer de son corps - Correct ! Choisir une contraception relève du droit de décider de son propre corps et de sa santé.\n中：正确。选择避孕属于身体自主权和健康权。\n\n❌ C. Le droit de grève - Faux. La grève concerne le travail, pas la contraception.\n中：错误。罢工权与避孕无关。\n\n❌ D. Le droit de propriété - Faux. La propriété concerne les biens, pas le corps humain.\n中：错误。财产权不涉及身体。"
  },
  {
    id: "si0069",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y tente d'empêcher Madame X de recourir à l'IVG. Cette décision appartient pourtant :",
    options: [
      "À la famille",
      "À l'État",
      "À la femme concernée",
      "Au partenaire"
    ],
    answer: 2,
    explanation: "❌ A. À la famille - Faux. L'IVG est une décision médicale et personnelle, pas une décision familiale.\n中：错误。人工流产是个人医疗决定，不由家庭决定。\n\n❌ B. À l'État - Faux. L'État encadre légalement l'IVG, mais la décision appartient à la femme concernée.\n中：错误。国家制定法律，但决定权在女性本人。\n\n✅ C. À la femme concernée - Correct ! La décision de recourir à l'IVG appartient à la femme.\n中：正确。人工流产的决定权属于女性本人。\n\n❌ D. Au partenaire - Faux. Le partenaire n'a pas le droit d'imposer sa décision sur l'IVG.\n中：错误。伴侣无权决定女性是否堕胎。"
  },
  {
    id: "si0070",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X souhaite se séparer de son conjoint sans justification particulière. Quel principe s'applique ?",
    options: [
      "L'obligation familiale",
      "La liberté conjugale",
      "La contrainte légale",
      "La dépendance économique"
    ],
    answer: 1,
    explanation: "❌ A. L'obligation familiale - Faux. Le mariage ne crée pas une obligation de rester ensemble à vie.\n中：错误。婚姻不等于必须终身在一起。\n\n✅ B. La liberté conjugale - Correct ! Le divorce peut être demandé sans faute, selon la liberté de se séparer.\n中：正确。离婚可以在无过错情况下提出，体现婚姻自由。\n\n❌ C. La contrainte légale - Faux. La loi n'impose pas de rester marié contre son gré.\n中：错误。法律不强制维持婚姻。\n\n❌ D. La dépendance économique - Faux. La dépendance économique n'est pas un principe juridique qui interdit le divorce.\n中：错误。经济依赖不能成为禁止离婚的理由。"
  },
  {
    id: "si0071",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y conteste une loi contraire aux droits fondamentaux. Quelle norme est supérieure à cette loi ?",
    options: [
      "Un règlement local",
      "La Constitution",
      "Un décret",
      "Une circulaire"
    ],
    answer: 1,
    explanation: "❌ A. Un règlement local - Faux. Un règlement local est inférieur à une loi.\n中：错误。地方规章低于法律。\n\n✅ B. La Constitution - Correct ! La Constitution est la norme suprême.\n中：正确。宪法是最高规范。\n\n❌ C. Un décret - Faux. Un décret est inférieur à la loi.\n中：错误。法令低于法律。\n\n❌ D. Une circulaire - Faux. Circulaire est un document administratif inférieur à la loi.\n中：错误。行政通知低于法律。"
  },
  {
    id: "si0072",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X est victime d'une discrimination par un service public. Vers qui peut-elle se tourner ?",
    options: [
      "Un voisin",
      "Le Défenseur des droits",
      "Une entreprise privée",
      "Un journaliste"
    ],
    answer: 1,
    explanation: "❌ A. Un voisin - Faux. Un voisin ne peut pas résoudre une discrimination administrative.\n中：错误。邻居无法处理公共服务歧视问题。\n\n✅ B. Le Défenseur des droits - Correct ! Le Défenseur des droits protège contre les discriminations.\n中：正确。权利捍卫者负责处理歧视投诉。\n\n❌ C. Une entreprise privée - Faux. Une entreprise privée n'est pas compétente pour un service public.\n中：错误。私企无权处理公共服务歧视。\n\n❌ D. Un journaliste - Faux. Le journaliste peut informer, mais n'est pas une autorité de recours.\n中：错误。记者只能报道，不能直接解决。"
  },
  {
    id: "si0073",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y souhaite régler un conflit sans passer par un procès. À qui peut-il s'adresser ?",
    options: [
      "Un médiateur ou conciliateur",
      "Un policier",
      "Un député",
      "Un préfet"
    ],
    answer: 0,
    explanation: "✅ A. Un médiateur ou conciliateur - Correct ! Le médiateur ou conciliateur aide à trouver un accord amiable.\n中：正确。调解员/和解员帮助达成和解。\n\n❌ B. Un policier - Faux. La police intervient en cas d'infraction, pas pour régler un conflit civil.\n中：错误。警察处理违法事件，不负责民事调解。\n\n❌ C. Un député - Faux. Un député ne règle pas les conflits individuels.\n中：错误。议员不处理个人纠纷。\n\n❌ D. Un préfet - Faux. Le préfet est un représentant de l'État, pas un médiateur.\n中：错误。省长不负责调解。"
  },
  {
    id: "si0074",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X a peu de ressources financières mais souhaite se défendre en justice. Quelle solution existe ?",
    options: [
      "Aucune",
      "L'aide juridictionnelle",
      "Le bénévolat judiciaire",
      "L'auto-défense"
    ],
    answer: 1,
    explanation: "❌ A. Aucune - Faux. Il existe une aide pour les personnes à faibles ressources.\n中：错误。对低收入者有法律援助。\n\n✅ B. L'aide juridictionnelle - Correct ! L'aide juridictionnelle permet d'obtenir une aide financière pour un procès.\n中：正确。法律援助可为诉讼提供经济支持。\n\n❌ C. Le bénévolat judiciaire - Faux. Il n'existe pas de \"bénévolat judiciaire\" comme solution officielle.\n中：错误。没有官方的\"司法志愿服务\"制度。\n\n❌ D. L'auto-défense - Faux. L'auto-défense n'est pas une solution juridique pour se défendre en justice.\n中：错误。自卫不是法律援助。"
  },
  {
    id: "si0075",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X proteste contre un projet polluant qui menace les générations futures. À quel droit se réfère-t-elle ?",
    options: [
      "Le droit de propriété",
      "Le droit à un environnement sain",
      "Le droit de grève",
      "Le droit de circulation"
    ],
    answer: 1,
    explanation: "❌ A. Le droit de propriété - Faux. Le droit de propriété concerne les biens, pas l'environnement.\n中：错误。财产权与环境无关。\n\n✅ B. Le droit à un environnement sain - Correct ! Ce droit vise à protéger l'environnement pour les générations présentes et futures.\n中：正确。健康环境权保护现今和未来世代。\n\n❌ C. Le droit de grève - Faux. La grève concerne le travail, pas l'environnement.\n中：错误。罢工权与环境无关。\n\n❌ D. Le droit de circulation - Faux. La circulation concerne le déplacement, pas la pollution.\n中：错误。出行权与污染无关。"
  },
  {
    id: "si0076",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X est mariée et souhaite utiliser un moyen de contraception. Que dit le droit ?",
    options: [
      "Elle doit obligatoirement demander l'accord de son mari",
      "Cette décision relève de sa liberté personnelle",
      "Seul le médecin décide",
      "L'État peut l'interdire"
    ],
    answer: 1,
    explanation: "❌ A. Elle doit obligatoirement demander l'accord de son mari - Faux. La contraception est une décision personnelle.\n中：错误。避孕是个人决定，不需要丈夫同意。\n\n✅ B. Cette décision relève de sa liberté personnelle - Correct ! Chacun a le droit de disposer de son corps.\n中：正确。每个人都有身体自主权。\n\n❌ C. Seul le médecin décide - Faux. Le médecin informe, mais la décision appartient à la personne.\n中：错误。医生只能提供建议，决定权在本人。\n\n❌ D. L'État peut l'interdire - Faux. L'État ne peut pas interdire la contraception.\n中：错误。国家不能禁止避孕。"
  },
  {
    id: "si0077",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y est dérangé chaque nuit par le bruit de son voisin. Que peut-il faire en priorité ?",
    options: [
      "Se faire justice lui-même",
      "Contacter la police ou la gendarmerie",
      "Couper l'électricité du voisin",
      "Quitter définitivement son logement"
    ],
    answer: 1,
    explanation: "❌ A. Se faire justice lui-même - Faux. Faire justice soi-même est illégal et dangereux.\n中：错误。私自报复违法且危险。\n\n✅ B. Contacter la police ou la gendarmerie - Correct ! En cas de nuisances, il peut contacter les forces de l'ordre.\n中：正确。遇到噪音扰民可联系警察或宪兵。\n\n❌ C. Couper l'électricité du voisin - Faux. Cela constitue une infraction.\n中：错误。切断电源属于违法行为。\n\n❌ D. Quitter définitivement son logement - Faux. Ce n'est pas la solution prioritaire et ce n'est pas obligatoire.\n中：错误。不是首选，也非必须。"
  },
  {
    id: "si0078",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Madame X doit subir une intervention médicale. Que doit respecter le personnel médical ?",
    options: [
      "L'avis de la famille uniquement",
      "Le consentement libre et éclairé de Madame X",
      "La décision de l'hôpital",
      "L'opinion du conjoint"
    ],
    answer: 1,
    explanation: "❌ A. L'avis de la famille uniquement - Faux. La famille peut être informée, mais ce n'est pas suffisant.\n中：错误。家属意见不是唯一依据。\n\n✅ B. Le consentement libre et éclairé de Madame X - Correct ! Le patient doit donner un consentement libre et éclairé.\n中：正确。必须获得患者自由知情同意。\n\n❌ C. La décision de l'hôpital - Faux. L'hôpital ne peut pas décider sans le consentement du patient.\n中：错误。医院不能在无同意情况下决定。\n\n❌ D. L'opinion du conjoint - Faux. Le conjoint n'a pas le droit de décider à la place du patient.\n中：错误。配偶无权代为决定。"
  },
  {
    id: "si0079",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Après un attentat, certaines zones sont interdites au public. Cette mesure est :",
    options: [
      "Une atteinte illégale aux libertés",
      "Une restriction temporaire pour protéger l'intérêt général",
      "Une suppression définitive des droits",
      "Une sanction individuelle"
    ],
    answer: 1,
    explanation: "❌ A. Une atteinte illégale aux libertés - Faux. Si elle est légale et temporaire, elle peut être justifiée.\n中：错误。若合法且临时可被认为合理。\n\n✅ B. Une restriction temporaire pour protéger l'intérêt général - Correct ! Les libertés peuvent être limitées temporairement pour protéger la sécurité publique.\n中：正确。为公共安全，限制自由可在短期内合法。\n\n❌ C. Une suppression définitive des droits - Faux. Ce n'est pas une suppression permanente.\n中：错误。不是永久取消权利。\n\n❌ D. Une sanction individuelle - Faux. C'est une mesure collective de sécurité, pas une sanction personnelle.\n中：错误。不是对某个人的惩罚。"
  },
  {
    id: "si0080",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Madame X souhaite divorcer sans invoquer de faute. Que prévoit le droit français ?",
    options: [
      "Le divorce est impossible",
      "Le divorce est autorisé sans faute",
      "Il faut l'accord de la famille",
      "Il faut une condamnation pénale"
    ],
    answer: 1,
    explanation: "❌ A. Le divorce est impossible - Faux. Le divorce sans faute est possible.\n中：错误。无过错离婚是允许的。\n\n✅ B. Le divorce est autorisé sans faute - Correct ! Le divorce par consentement mutuel ou sans faute est possible.\n中：正确。可进行无过错离婚。\n\n❌ C. Il faut l'accord de la famille - Faux. La famille n'a pas à décider du divorce.\n中：错误。家庭无权决定离婚。\n\n❌ D. Il faut une condamnation pénale - Faux. Une condamnation pénale n'est pas nécessaire.\n中：错误。离婚不需要刑事定罪。"
  },
  {
    id: "si0081",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y estime être discriminé par un service public. Vers qui peut-il se tourner ?",
    options: [
      "Un employeur privé",
      "Le Défenseur des droits",
      "Un voisin",
      "Un commerçant"
    ],
    answer: 1,
    explanation: "❌ A. Un employeur privé - Faux. Un employeur privé n'est pas l'autorité compétente pour traiter une discrimination dans un service public.\n中：错误。私人雇主不能处理公共服务中的歧视问题。\n\n✅ B. Le Défenseur des droits - Correct ! Le Défenseur des droits est l'institution indépendante chargée de défendre les droits et lutter contre les discriminations, notamment dans les services publics.\n中：正确。权利捍卫者是独立机构，负责维护权利、反对歧视，尤其是公共服务领域。\n\n❌ C. Un voisin - Faux. Un voisin n'a pas de compétence officielle pour régler une discrimination administrative.\n中：错误。邻居没有官方权力处理行政歧视。\n\n❌ D. Un commerçant - Faux. Un commerçant n'a pas la compétence pour traiter une discrimination dans un service public.\n中：错误。商家无权处理公共服务歧视问题。"
  },
  {
    id: "si0082",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Madame X constate que son enfant n'a pas accès à l'école publique. Quelle démarche est justifiée ?",
    options: [
      "Ne rien faire",
      "Faire valoir le droit à l'éducation",
      "Inscrire l'enfant au travail",
      "Déménager obligatoirement"
    ],
    answer: 1,
    explanation: "❌ A. Ne rien faire - Faux. Ignorer le problème ne le résout pas.\n中：错误。无视问题不能解决。\n\n✅ B. Faire valoir le droit à l'éducation - Correct ! Elle peut demander l'accès à l'école, car l'éducation est un droit.\n中：正确。可主张教育权，要求入学。\n\n❌ C. Inscrire l'enfant au travail - Faux. Le travail des enfants est interdit et illégal.\n中：错误。童工违法。\n\n❌ D. Déménager obligatoirement - Faux. Ce n'est pas obligatoire et ce n'est pas la première démarche.\n中：错误。并非必须搬家。"
  },
  {
    id: "si0083",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X apprend qu'une entreprise pollue illégalement l'environnement. Quelle action est adaptée ?",
    options: [
      "Ignorer la situation",
      "Signaler les faits aux autorités compétentes",
      "Détruire l'usine",
      "Publier de fausses informations"
    ],
    answer: 1,
    explanation: "❌ A. Ignorer la situation - Faux. Ignorer ne protège pas l'environnement ni les droits.\n中：错误。无视无法保护环境。\n\n✅ B. Signaler les faits aux autorités compétentes - Correct ! Il faut alerter les autorités pour faire cesser la pollution.\n中：正确。应向主管部门举报以制止污染。\n\n❌ C. Détruire l'usine - Faux. C'est illégal et dangereux.\n中：错误。毁坏工厂违法。\n\n❌ D. Publier de fausses informations - Faux. La désinformation est illégale et nuit à la cause.\n中：错误。传播假消息违法。"
  },
  {
    id: "si0084",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Jeter ses déchets dans un parc public est :",
    options: [
      "Autorisé",
      "Une bonne action",
      "Interdit par la loi",
      "Obligatoire"
    ],
    answer: 2,
    explanation: "❌ A. Autorisé - Faux. Jeter des déchets dans un parc est interdit.\n中：错误。在公园乱扔垃圾是违法的。\n\n❌ B. Une bonne action - Faux. Cela pollue et nuit à l'environnement.\n中：错误。不是好行为，会污染环境。\n\n✅ C. Interdit par la loi - Correct ! Cela constitue une infraction (pollution/déchets).\n中：正确。属于违法行为（污染/乱扔垃圾）。\n\n❌ D. Obligatoire - Faux. Personne n'est obligé de jeter ses déchets dans un parc.\n中：错误。没有人必须这样做。"
  },
  {
    id: "si0085",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X voit un élève insulté tous les jours par d'autres élèves à l'école. Cette situation correspond à :",
    options: [
      "Un simple conflit",
      "Du harcèlement scolaire",
      "Une sanction scolaire",
      "Une blague autorisée"
    ],
    answer: 1,
    explanation: "❌ A. Un simple conflit - Faux. Un conflit ponctuel ne se répète pas quotidiennement.\n中：错误。一次性冲突不会每天发生。\n\n✅ B. Du harcèlement scolaire - Correct ! Les insultes répétées constituent du harcèlement scolaire.\n中：正确。反复侮辱属于校园欺凌。\n\n❌ C. Une sanction scolaire - Faux. Une sanction est une mesure disciplinaire, pas une violence répétée.\n中：错误。处罚不是持续暴力。\n\n❌ D. Une blague autorisée - Faux. Les insultes répétées ne sont pas une blague autorisée.\n中：错误。不是允许的玩笑。"
  },
  {
    id: "si0086",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y est témoin d'un élève régulièrement frappé par d'autres enfants. Que doit-il faire ?",
    options: [
      "Ne rien dire",
      "Avertir un adulte ou les autorités",
      "Encourager les autres élèves",
      "Filmer et publier"
    ],
    answer: 1,
    explanation: "❌ A. Ne rien dire - Faux. Ne rien faire expose la victime à un danger.\n中：错误。不作为会让受害者继续受伤。\n\n✅ B. Avertir un adulte ou les autorités - Correct ! Il doit signaler la situation à un adulte ou aux autorités compétentes.\n中：正确。应向成年人或主管部门报告。\n\n❌ C. Encourager les autres élèves - Faux. Encourager augmente la violence.\n中：错误。鼓励会加剧暴力。\n\n❌ D. Filmer et publier - Faux. Filmer peut humilier la victime et ne résout pas le problème.\n中：错误。拍摄并发布会伤害受害者。"
  },
  {
    id: "si0087",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X oblige son enfant à rester sans manger pour le punir. Cette situation est :",
    options: [
      "Une méthode éducative",
      "Une maltraitance",
      "Une règle familiale",
      "Un droit parental"
    ],
    answer: 1,
    explanation: "❌ A. Une méthode éducative - Faux. La privation de nourriture n'est pas une méthode éducative acceptable.\n中：错误。剥夺食物不是合适的教育方式。\n\n✅ B. Une maltraitance - Correct ! Priver volontairement un enfant de nourriture est une forme de maltraitance.\n中：正确。故意剥夺食物属于虐待。\n\n❌ C. Une règle familiale - Faux. Une règle familiale ne peut pas violer les droits fondamentaux de l'enfant.\n中：错误。家庭规则不能侵犯儿童权利。\n\n❌ D. Un droit parental - Faux. Les parents n'ont pas le droit d'infliger ce type peine\n中：错误。父母无权这样惩罚。"
  },
  {
    id: "si0088",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Monsieur Y propose de l'argent à une personne en échange d'un acte sexuel. En France, ce comportement est :",
    options: [
      "Autorisé",
      "Interdit et sanctionné",
      "Un droit individuel",
      "Sans importance"
    ],
    answer: 1,
    explanation: "❌ A. Autorisé - Faux. L'achat d'un acte sexuel est interdit.\n中：错误。买卖性行为是违法的。\n\n✅ B. Interdit et sanctionné - Correct ! La prostitution achetée est interdite et punie par la loi.\n中：正确。购买性行为违法并受处罚。\n\n❌ C. Un droit individuel - Faux. Ce n'est pas un droit.\n中：错误。不是个人权利。\n\n❌ D. Sans importance - Faux. C'est un délit pénal.\n中：错误。这是刑事违法行为。"
  },
  {
    id: "si0089",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X tire de l'argent de la prostitution d'une autre personne. Elle commet :",
    options: [
      "Une aide légale",
      "Un acte de proxénétisme",
      "Une action sociale",
      "Une activité autorisée"
    ],
    answer: 1,
    explanation: "❌ A. Une aide légale - Faux. Ce n'est pas une aide, c'est une exploitation.\n中：错误。不是合法帮助，是剥削。\n\n✅ B. Un acte de proxénétisme - Correct ! Profiter de la prostitution d'autrui est du proxénétisme.\n中：正确。利用他人卖淫获利属于拉皮条。\n\n❌ C. Une action sociale - Faux. Ce n'est pas une action sociale, c'est un crime.\n中：错误。不是社会公益行为。\n\n❌ D. Une activité autorisée - Faux. C'est une infraction pénale.\n中：错误。是刑事违法行为。"
  },
  {
    id: "si0090",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y fait beaucoup de bruit la nuit et dérange ses voisins. Cette situation peut entraîner :",
    options: [
      "Une récompense",
      "Une contravention",
      "Un crime",
      "Aucun problème"
    ],
    answer: 1,
    explanation: "❌ A. Une récompense - Faux. Cela n'est pas récompensé.\n中：错误。不会获得奖励。\n\n✅ B. Une contravention - Correct ! Le tapage nocturne est une contravention.\n中：正确。夜间噪音属于轻微违法行为（罚款）。\n\n❌ C. Un crime - Faux. Ce n'est pas un crime.\n中：错误。不是重罪。\n\n❌ D. Aucun problème - Faux. Les nuisances peuvent être sanctionnées.\n中：错误。可能被处罚。"
  },
  {
    id: "si0091",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X jette régulièrement ses déchets dans la rue. Ce comportement est :",
    options: [
      "Autorisé",
      "Une infraction",
      "Un devoir",
      "Une bonne action"
    ],
    answer: 1,
    explanation: "❌ A. Autorisé - Faux. Jeter des déchets dans la rue est interdit.\n中：错误。随意乱扔垃圾违法。\n\n✅ B. Une infraction - Correct ! Cela constitue une infraction (pollution/ordures).\n中：正确。属于违法行为。\n\n❌ C. Un devoir - Faux. Ce n'est pas une obligation, c'est une infraction.\n中：错误。不是义务。\n\n❌ D. Une bonne action - Faux. Cela pollue et nuit à la communauté.\n中：错误。不是好行为。"
  },
  {
    id: "si0092",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y refuse de respecter un contrôle de police sans raison. Cette attitude peut :",
    options: [
      "Être légale",
      "Constituer une infraction",
      "Être encouragée",
      "Être sans conséquence"
    ],
    answer: 1,
    explanation: "❌ A. Être légale - Faux. Refuser un contrôle sans raison peut être une infraction.\n中：错误。无理由拒绝检查可能违法。\n\n✅ B. Constituer une infraction - Correct ! Refuser d'obéir à un ordre légal est une infraction possible.\n中：正确。拒不配合合法检查可能构成违法。\n\n❌ C. Être encouragée - Faux. La loi n'encourage pas le refus.\n中：错误。法律不鼓励。\n\n❌ D. Être sans conséquence - Faux. Cela peut entraîner des sanctions.\n中：错误。会有后果。"
  },
  {
    id: "si0093",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X, citoyenne française de 18 ans, reçoit une convocation pour la JDC. Elle doit :",
    options: [
      "Refuser",
      "Se présenter à la JDC",
      "Payer une amende",
      "Quitter le pays"
    ],
    answer: 1,
    explanation: "❌ A. Refuser - Faux. La JDC est obligatoire pour les jeunes Français.\n中：错误。JDC是义务。\n\n✅ B. Se présenter à la JDC - Correct ! La Journée Défense et Citoyenneté est obligatoire.\n中：正确。必须参加国防与公民日。\n\n❌ C. Payer une amende - Faux. La convocation ne demande pas un paiement, mais la participation.\n中：错误。不是付钱。\n\n❌ D. Quitter le pays - Faux. Ce n'est pas une solution.\n中：错误。不能因此离境。"
  },
  {
    id: "si0094",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y est accusé de vol avec violence. Cette infraction est :",
    options: [
      "Une contravention",
      "Un délit",
      "Une simple faute",
      "Une règle scolaire"
    ],
    answer: 1,
    explanation: "❌ A. Une contravention - Faux. Le vol avec violence est plus grave qu'une contravention.\n中：错误。暴力盗窃比轻微违法严重。\n\n✅ B. Un délit - Correct ! Le vol avec violence est un délit.\n中：正确。暴力盗窃属于刑事犯罪中的\"délit\"。\n\n❌ C. Une simple faute - Faux. Ce n'est pas une faute simple, c'est une infraction pénale.\n中：错误。不是一般过失。\n\n❌ D. Une règle scolaire - Faux. Cela n'a rien à voir avec l'école.\n中：错误。与学校规则无关。"
  },
  {
    id: "si0095",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X commet un homicide volontaire. Elle risque :",
    options: [
      "Une amende seulement",
      "Une peine de prison lourde",
      "Un avertissement",
      "Une exclusion scolaire"
    ],
    answer: 1,
    explanation: "❌ A. Une amende seulement - Faux. Un homicide volontaire est un crime très grave ; une simple amende ne suffit pas comme sanction.\n中：错误。故意杀人属于严重罪行，仅罚款不足以构成惩罚。\n\n✅ B. Une peine de prison lourde - Correct ! L'homicide volontaire est un crime puni par une peine de prison lourde (jusqu'à la réclusion criminelle à perpétuité selon les cas).\n中：正确。故意杀人是重罪，可判处重刑（根据情况可判终身监禁）。\n\n❌ C. Un avertissement - Faux. Un avertissement est une sanction légère, pas adaptée à un homicide volontaire.\n中：错误。警告是轻微处罚，不适用于故意杀人。\n\n❌ D. Une exclusion scolaire - Faux. L'exclusion scolaire concerne des sanctions éducatives, pas un crime d'homicide.\n中：错误。学校开除是教育惩戒，不适用于犯罪行为。"
  },
  {
    id: "si0096",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y roule légèrement trop vite et reçoit une amende. Il a commis :",
    options: [
      "Un crime",
      "Un délit",
      "Une contravention",
      "Une tradition"
    ],
    answer: 2,
    explanation: "❌ A. Un crime - Faux. Dépasser la vitesse est une infraction légère.\n中：错误。超速不是重罪。\n\n❌ B. Un délit - Faux. En général, un excès de vitesse léger est une contravention.\n中：错误。通常属于轻微违法。\n\n✅ C. Une contravention - Correct ! Une amende pour vitesse correspond à une contravention.\n中：正确。超速罚款属于轻微违法。\n\n❌ D. Une tradition - Faux. Ce n'est pas une tradition.\n中：错误。不是习俗。"
  },
  {
    id: "si0097",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y est témoin d'une agression dans la rue. Quelle attitude est correcte ?",
    options: [
      "Partir sans agir",
      "Appeler les secours ou la police",
      "Encourager l'agresseur",
      "Filmer pour les réseaux sociaux"
    ],
    answer: 1,
    explanation: "❌ A. Partir sans agir - Faux. Ne rien faire peut mettre la victime en danger.\n中：错误。不作为会危及受害者。\n\n✅ B. Appeler les secours ou la police - Correct ! En cas d'agression, il faut alerter les secours ou la police.\n中：正确。应报警或求助。\n\n❌ C. Encourager l'agresseur - Faux. Cela aggrave la situation.\n中：错误。鼓励会加剧暴力。\n\n❌ D. Filmer pour les réseaux sociaux - Faux. Filmer sans agir n'aide pas la victime et peut être dangereux.\n中：错误。仅拍摄不利于受害者。"
  },
  {
    id: "si0098",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X subit des menaces répétées de son conjoint. Cette situation correspond à :",
    options: [
      "Une dispute normale",
      "Une violence psychologique",
      "Une liberté d'expression",
      "Une obligation familiale"
    ],
    answer: 1,
    explanation: "❌ A. Une dispute normale - Faux. Les menaces répétées constituent une violence psychologique.\n中：错误。重复威胁不是正常争吵。\n\n✅ B. Une violence psychologique - Correct ! Les menaces répétées sont une forme de violence psychologique.\n中：正确。重复威胁属于心理暴力。\n\n❌ C. Une liberté d'expression - Faux. La liberté d'expression ne protège pas les menaces.\n中：错误。言论自由不包括威胁。\n\n❌ D. Une obligation familiale - Faux. La famille ne justifie pas les menaces.\n中：错误。家庭义务不能成为威胁理由。"
  },
  {
    id: "si0099",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y voit une personne exploitée pour travailler sans salaire. Cette situation peut relever :",
    options: [
      "D'une aide",
      "De la traite des êtres humains",
      "D'un contrat légal",
      "D'un stage"
    ],
    answer: 1,
    explanation: "❌ A. D'une aide - Faux. Travailler sans salaire n'est pas une aide, c'est une exploitation.\n中：错误。无薪工作不是帮助，而是剥削。\n\n✅ B. De la traite des êtres humains - Correct ! L'exploitation forcée du travail peut relever de la traite des êtres humains.\n中：正确。强迫劳动可构成人口贩运。\n\n❌ C. D'un contrat légal - Faux. Un contrat légal implique un salaire et des droits.\n中：错误。合法合同应有工资与权利。\n\n❌ D. D'un stage - Faux. Un stage est encadré et ne peut être sans rémunération selon les règles.\n中：错误。实习受规章约束，不能无薪剥削。"
  },
  {
    id: "si0100",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X voit un accident de la route avec une personne blessée. Que doit-elle faire en priorité ?",
    options: [
      "Continuer son chemin",
      "Appeler les secours",
      "Prendre des photos",
      "Attendre que quelqu'un d'autre agisse"
    ],
    answer: 1,
    explanation: "❌ A. Continuer son chemin - Faux. Ignorer une personne blessée est illégal et dangereux.\n中：错误。无视受伤者违法且危险。\n\n✅ B. Appeler les secours - Correct ! Il faut appeler les secours en priorité.\n中：正确。首要拨打急救电话。\n\n❌ C. Prendre des photos - Faux. Prendre des photos ne sauve pas la victime.\n中：错误。拍照无法救人。\n\n❌ D. Attendre que quelqu'un d'autre agisse - Faux. Attendre peut aggraver la situation.\n中：错误。等待会耽误救援。"
  },
  {
    id: "si0101",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y voit une personne inconsciente après un accident. Il n'est pas médecin. Que peut-il faire ?",
    options: [
      "Ne rien faire",
      "Appeler les secours et rester à proximité",
      "Donner des médicaments",
      "Quitter les lieux"
    ],
    answer: 1,
    explanation: "❌ A. Ne rien faire - Faux. Ne rien faire est dangereux.\n中：错误。不作为会危及生命。\n\n✅ B. Appeler les secours et rester à proximité - Correct ! Même sans être médecin, il peut appeler les secours et rester près de la victime.\n中：正确。可报警并在旁边等待救援。\n\n❌ C. Donner des médicaments - Faux. Donner des médicaments sans compétence est dangereux.\n中：错误。擅自用药有风险。\n\n❌ D. Quitter les lieux - Faux. Quitter peut aggraver la situation et est irresponsable.\n中：错误。离开不负责任。"
  },
  {
    id: "si0102",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X est témoin d'un accident mais refuse volontairement d'aider. Elle risque :",
    options: [
      "Rien",
      "Une sanction pour non-assistance à personne en danger",
      "Une récompense",
      "Une exemption"
    ],
    answer: 1,
    explanation: "❌ A. Rien - Faux. Le refus volontaire d'aider peut être puni.\n中：错误。拒绝救助可能会被处罚。\n\n✅ B. Une sanction pour non-assistance à personne en danger - Correct ! Le non-assistance à personne en danger est une infraction.\n中：正确。不救助危难者属于违法行为。\n\n❌ C. Une récompense - Faux. Cela n'est pas récompensé.\n中：错误。不会奖励。\n\n❌ D. Une exemption - Faux. Il n'y a pas d'exemption pour ne pas aider.\n中：错误。没有豁免。"
  },
  {
    id: "si0103",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y lave sa voiture dans la rue et laisse couler des produits polluants dans les égouts. Cette action est :",
    options: [
      "Un droit",
      "Un comportement nuisible à l'environnement",
      "Une obligation",
      "Une tradition"
    ],
    answer: 1,
    explanation: "❌ A. Un droit - Faux. Polluer volontairement n'est pas un droit.\n中：错误。污染不是权利。\n\n✅ B. Un comportement nuisible à l'environnement - Correct ! C'est un comportement polluant et interdit.\n中：正确。此行为有害环境且违法。\n\n❌ C. Une obligation - Faux. Ce n'est pas obligatoire.\n中：错误。不是义务。\n\n❌ D. Une tradition - Faux. Ce n'est pas une tradition.\n中：错误。不是习俗。"
  },
  {
    id: "si0104",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Madame X choisit d'utiliser les transports en commun plutôt que sa voiture. Ce comportement :",
    options: [
      "Pollue davantage",
      "Protège l'environnement",
      "Est interdit",
      "Est inutile"
    ],
    answer: 1,
    explanation: "❌ A. Pollue davantage - Faux. Les transports en commun réduisent la pollution par personne.\n中：错误。公共交通每人污染更少。\n\n✅ B. Protège l'environnement - Correct ! Utiliser les transports en commun limite la pollution.\n中：正确。公共交通有利于环保。\n\n❌ C. Est interdit - Faux. C'est autorisé et encouragé.\n中：错误。不是禁止。\n\n❌ D. Est inutile - Faux. Cela aide à réduire les émissions.\n中：错误。并非无用。"
  },
  {
    id: "si0105",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y jette ses déchets ménagers dans la nature. Cette situation :",
    options: [
      "Respecte la loi",
      "Constitue une infraction",
      "Protège l'environnement",
      "Est recommandée"
    ],
    answer: 1,
    explanation: "❌ A. Respecte la loi - Faux. Déposer des déchets dans la nature est interdit.\n中：错误。乱丢垃圾违法。\n\n✅ B. Constitue une infraction - Correct ! Cela constitue une infraction environnementale.\n中：正确。属于违法行为。\n\n❌ C. Protège l'environnement - Faux. Cela pollue et nuit à la nature.\n中：错误。污染环境。\n\n❌ D. Est recommandée - Faux. La loi recommande de trier et recycler.\n中：错误。法律不推荐。"
  },
  {
    id: "si0106",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X participe à un nettoyage collectif dans son quartier. Cette action :",
    options: [
      "Est illégale",
      "Contribue à la protection de l'environnement",
      "Est inutile",
      "Doit être sanctionnée"
    ],
    answer: 1,
    explanation: "❌ A. Est illégale - Faux. Nettoyer l'environnement est une action légale et citoyenne.\n中：错误。清洁活动是合法且有益的。\n\n✅ B. Contribue à la protection de l'environnement - Correct ! Cela aide à préserver l'environnement.\n中：正确。促进环保。\n\n❌ C. Est inutile - Faux. C'est utile pour la communauté.\n中：错误。很有用。\n\n❌ D. Doit être sanctionnée - Faux. Elle ne mérite pas de sanction.\n中：错误。不会被处罚。"
  },
  {
    id: "si0107",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "difficile",
    typeQuestion: "question simulée",
    question: "Madame X dort profondément après avoir pris des médicaments. Monsieur Y la touche sans son accord. Cette situation est :",
    options: [
      "Autorisée",
      "Une agression sexuelle",
      "Une relation normale",
      "Un malentendu sans conséquence"
    ],
    answer: 1,
    explanation: "❌ A. Autorisée - Faux. Sans consentement, c'est une atteinte sexuelle.\n中：错误。没有同意属于性侵犯。\n\n✅ B. Une agression sexuelle - Correct ! Toucher une personne inconsciente sans consentement est une agression sexuelle.\n中：正确。对失去意识者进行性接触是性侵。\n\n❌ C. Une relation normale - Faux. Cela viole le consentement.\n中：错误。不是正常关系。\n\n❌ D. Un malentendu sans conséquence - Faux. Cela reste une infraction grave.\n中：错误。属于严重违法。"
  },
  {
    id: "si0108",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "difficile",
    typeQuestion: "question simulée",
    question: "Monsieur Y pense que le silence de Madame X signifie un accord. En droit français :",
    options: [
      "Le silence vaut consentement",
      "Le silence n'est pas un consentement",
      "Le consentement est automatique",
      "Le consentement n'est pas nécessaire"
    ],
    answer: 1,
    explanation: "❌ A. Le silence vaut consentement - Faux. Le silence n'est pas un consentement.\n中：错误。沉默不等于同意。\n\n✅ B. Le silence n'est pas un consentement - Correct ! Le consentement doit être clair, libre et explicite.\n中：正确。同意必须明确、自由、清晰。\n\n❌ C. Le consentement est automatique - Faux. Le consentement doit être donné.\n中：错误。同意不是自动产生的。\n\n❌ D. Le consentement n'est pas nécessaire - Faux. Le consentement est obligatoire.\n中：错误。必须有同意。"
  },
  {
    id: "si0109",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "difficile",
    typeQuestion: "question simulée",
    question: "Madame X accepte un contact physique puis change d'avis. Monsieur Y doit :",
    options: [
      "Continuer",
      "Respecter le retrait du consentement",
      "Insister",
      "Forcer"
    ],
    answer: 1,
    explanation: "❌ A. Continuer - Faux. Il doit respecter le retrait du consentement.\n中：错误。必须尊重撤回同意。\n\n✅ B. Respecter le retrait du consentement - Correct ! Le consentement peut être retiré à tout moment.\n中：正确。同意可随时撤回，必须尊重。\n\n❌ C. Insister - Faux. Insister est une violence possible.\n中：错误。强迫可能构成侵害。\n\n❌ D. Forcer - Faux. Forcer est un délit.\n中：错误。强迫是违法。"
  },
  {
    id: "si0110",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Madame X est victime de violences. Elle peut :",
    options: [
      "Garder le silence",
      "Parler à une personne de confiance ou à un professionnel",
      "Se culpabiliser",
      "Protéger l'agresseur"
    ],
    answer: 1,
    explanation: "❌ A. Garder le silence - Faux. Garder le silence n'aide pas à protéger la victime.\n中：错误。沉默无法保护自己。\n\n✅ B. Parler à une personne de confiance ou à un professionnel - Correct ! Elle peut demander de l'aide.\n中：正确。可以向可信人士或专业人员求助。\n\n❌ C. Se culpabiliser - Faux. La victime n'est pas responsable.\n中：错误。受害者不应自责。\n\n❌ D. Protéger l'agresseur - Faux. Protéger l'agresseur n'est pas une solution.\n中：错误。不能保护施暴者。"
  },
  {
    id: "si0111",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Monsieur Y est victime d'une agression ancienne. Il peut :",
    options: [
      "Ne rien faire car c'est ancien",
      "Demander de l'aide et signaler les faits",
      "Être sanctionné",
      "Perdre ses droits"
    ],
    answer: 1,
    explanation: "❌ A. Ne rien faire car c'est ancien - Faux. Il peut toujours demander de l'aide et signaler.\n中：错误。即使是旧案也可求助。\n\n✅ B. Demander de l'aide et signaler les faits - Correct ! Il peut porter plainte même si les faits sont anciens.\n中：正确。可求助并举报。\n\n❌ C. Être sanctionné - Faux. Il est victime, pas coupable.\n中：错误。受害者不应受罚。\n\n❌ D. Perdre ses droits - Faux. Les droits restent.\n中：错误。权利不会因此消失。"
  },
  {
    id: "si0112",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Madame X hésite à porter plainte mais souhaite de l'aide. Elle peut :",
    options: [
      "Être accompagnée par une association",
      "Être obligée de porter plainte",
      "Être expulsée",
      "Être jugée responsable"
    ],
    answer: 0,
    explanation: "✅ A. Être accompagnée par une association - Correct ! Les associations peuvent accompagner les victimes.\n中：正确。协会可提供支持和陪同。\n\n❌ B. Être obligée de porter plainte - Faux. Personne n'est obligé de porter plainte.\n中：错误。没有强制。\n\n❌ C. Être expulsée - Faux. Être victime ne conduit pas à l'expulsion.\n中：错误。不会被驱逐。\n\n❌ D. Être jugée responsable - Faux. La victime n'est pas responsable de la violence subie.\n中：错误。受害者不是责任方。"
  },
  {
    id: "si0113",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Monsieur Y est témoin de violences dans la rue. Il doit :",
    options: [
      "Intervenir violemment",
      "Agir sans se mettre en danger",
      "Ignore la situation",
      "Encourager l'agresseur"
    ],
    answer: 1,
    explanation: "❌ A. Intervenir violemment - Faux. L'intervention violente peut aggraver la situation.\n中：错误。暴力干预可能更危险。\n\n✅ B. Agir sans se mettre en danger - Correct ! Il doit aider selon ses capacités sans se mettre en danger.\n中：正确。应在不危及自身的情况下提供帮助。\n\n❌ C. Ignorer la situation - Faux. Ignorer ne protège pas la victime.\n中：错误。不作为不利于受害者。\n\n❌ D. Encourager l'agresseur - Faux. Cela aggrave les violences.\n中：错误。鼓励会加剧伤害。"
  },
  {
    id: "si0114",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Madame X voit une femme en danger mais a peur. Elle peut :",
    options: [
      "Ne rien faire",
      "Appeler les forces de l'ordre",
      "Se moquer",
      "Filmer uniquement"
    ],
    answer: 1,
    explanation: "❌ A. Ne rien faire - Faux. Ne rien faire peut laisser la victime en danger.\n中：错误。不作为会让受害者继续受危害。\n\n✅ B. Appeler les forces de l'ordre - Correct ! Elle peut appeler la police/gendarmerie.\n中：正确。可报警求助。\n\n❌ C. Se moquer - Faux. Se moquer aggrave la situation.\n中：错误。嘲笑会伤害受害者。\n\n❌ D. Filmer uniquement - Faux. Filmer sans agir n'aide pas.\n中：错误。仅拍摄无法保护受害者。"
  },
  {
    id: "si0115",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y est témoin d'une violence mais la victime ne veut pas porter plainte. Il peut :",
    options: [
      "Obliger la victime",
      "Faire un signalement ou témoigner",
      "Supprimer les preuves",
      "Être puni"
    ],
    answer: 1,
    explanation: "❌ A. Obliger la victime - Faux. Il ne peut pas forcer la victime à porter plainte.\n中：错误。不能强迫受害者报案。\n\n✅ B. Faire un signalement ou témoigner - Correct ! Il peut signaler les faits aux autorités ou témoigner.\n中：正确。可举报或作证。\n\n❌ C. Supprimer les preuves - Faux. Cela est illégal.\n中：错误。毁灭证据违法。\n\n❌ D. Être puni - Faux. S'il fait un signalement, il n'est pas puni.\n中：错误。举报不会受罚。"
  },
  {
    id: "si0116",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Madame X est témoin de violences répétées dans son immeuble. Une attitude correcte est :",
    options: [
      "Fermer les yeux",
      "Signaler la situation",
      "Menacer les voisins",
      "Déménager immédiatement"
    ],
    answer: 1,
    explanation: "❌ A. Fermer les yeux - Faux. Ignorer ne protège pas les victimes.\n中：错误。视而不见无法保护受害者。\n\n✅ B. Signaler la situation - Correct ! Il faut signaler pour faire cesser les violences.\n中：正确。应举报情况。\n\n❌ C. Menacer les voisins - Faux. Menacer est une infraction.\n中：错误。威胁违法。\n\n❌ D. Déménager immédiatement - Faux. Ce n'est pas toujours possible ni la solution principale.\n中：错误。不是首要措施。"
  },
  {
    id: "si0117",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Monsieur Y aide une victime et donne des informations utiles à la police. Son rôle est :",
    options: [
      "Inutile",
      "Important pour protéger la victime",
      "Interdit",
      "Dangereux automatiquement"
    ],
    answer: 1,
    explanation: "❌ A. Inutile - Faux. Son aide peut être essentielle pour protéger la victime.\n中：错误。他的帮助可能很关键。\n\n✅ B. Important pour protéger la victime - Correct ! Les témoignages et informations aident les autorités.\n中：正确。提供信息有助于保护受害者。\n\n❌ C. Interdit - Faux. Aider une victime et informer la police est légal.\n中：错误。帮助受害者并告知警方是合法的。\n\n❌ D. Dangereux automatiquement - Faux. Ce n'est pas forcément dangereux, mais il faut faire attention.\n中：错误。不是必然危险。"
  },
  {
    id: "si0118",
    type: "carte multi",
    category: "Mises en situation",
    difficulté: "difficile",
    typeQuestion: "question simulée",
    question: "Monsieur Y embrasse Madame X alors qu'elle est fortement alcoolisée et ne peut pas réagir. Ce geste est :",
    options: [
      "Légal",
      "Une violence sexuelle possible",
      "Un consentement implicite",
      "Une obligation"
    ],
    answer: 1,
    explanation: "❌ A. Légal - Faux. Sans consentement clair, c'est une violence sexuelle possible.\n中：错误。没有明确同意可能构成性暴力。\n\n✅ B. Une violence sexuelle possible - Correct ! Une personne inconsciente ou fortement alcoolisée ne peut pas consentir.\n中：正确。醉酒无法同意，可能构成性侵。\n\n❌ C. Un consentement implicite - Faux. L'alcool empêche le consentement.\n中：错误。不能视为默认同意。\n\n❌ D. Une obligation - Faux. Ce n'est pas une obligation.\n中：错误。不是义务。"
  },

  {
    id: "pf0001",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Molière ?",
    options: [
      "Un peintre",
      "Un roi",
      "Un écrivain et dramaturge",
      "Un philosophe"
    ],
    answer: 2,
    explanation: "❌ A. Un peintre - Faux. Molière n'était pas peintre.\n中：错误。莫里哀不是画家。\n\n❌ B. Un roi - Faux. Il n'était pas roi.\n中：错误。他不是国王。\n\n✅ C. Un écrivain et dramaturge - Correct ! Molière était un écrivain et dramaturge célèbre du XVIIe siècle.\n中：正确！莫里哀是17世纪著名作家和剧作家。\n\n❌ D. Un philosophe - Faux. Il n'était pas philosophe.\n中：错误。他不是哲学家。"
  },
  {
    id: "pf0002",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Charles Baudelaire ?",
    options: [
      "Un chanteur",
      "Un poète",
      "Un scientifique",
      "Un homme politique"
    ],
    answer: 1,
    explanation: "❌ A. Un chanteur - Faux. Baudelaire n'était pas chanteur.\n中：错误。鲍德莱尔不是歌手。\n\n✅ B. Un poète - Correct ! Il est un grand poète français du XIXe siècle.\n中：正确！他是19世纪法国伟大诗人。\n\n❌ C. Un scientifique - Faux. Il n'était pas scientifique.\n中：错误。他不是科学家。\n\n❌ D. Un homme politique - Faux. Il n'était pas homme politique.\n中：错误。他不是政治家。"
  },
  {
    id: "pf0003",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était George Sand ?",
    options: [
      "Une reine",
      "Une écrivaine",
      "Une actrice",
      "Une peintre"
    ],
    answer: 1,
    explanation: "❌ A. Une reine - Faux. Elle n'était pas reine.\n中：错误。她不是王后。\n\n✅ B. Une écrivaine - Correct ! George Sand est une célèbre écrivaine française du XIXe siècle.\n中：正确！乔治·桑是19世纪著名法国女作家。\n\n❌ C. Une actrice - Faux. Elle n'était pas actrice.\n中：错误。她不是演员。\n\n❌ D. Une peintre - Faux. Elle n'était pas peintre.\n中：错误。她不是画家。"
  },
  {
    id: "pf0004",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Simone de Beauvoir ?",
    options: [
      "Une philosophe et écrivaine",
      "Une chanteuse",
      "Une reine",
      "Une scientifique"
    ],
    answer: 0,
    explanation: "✅ A. Une philosophe et écrivaine - Correct ! Simone de Beauvoir est une philosophe et écrivaine majeure du XXe siècle.\n中：正确！西蒙娜·德·波伏娃是20世纪重要哲学家和作家。\n\n❌ B. Une chanteuse - Faux. Elle n'était pas chanteuse.\n中：错误。她不是歌手。\n\n❌ C. Une reine - Faux. Elle n'était pas reine.\n中：错误。她不是王后。\n\n❌ D. Une scientifique - Faux. Elle n'était pas scientifique.\n中：错误。她不是科学家。"
  },
  {
    id: "pf0005",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Albert Camus ?",
    options: [
      "Un peintre",
      "Un écrivain et philosophe",
      "Un musicien",
      "Un roi"
    ],
    answer: 1,
    explanation: "❌ A. Un peintre - Faux. Il n'était pas peintre.\n中：错误。他不是画家。\n\n✅ B. Un écrivain et philosophe - Correct ! Camus était un écrivain et philosophe français, prix Nobel.\n中：正确！加缪是法国作家和哲学家，诺贝尔奖得主。\n\n❌ C. Un musicien - Faux. Il n'était pas musicien.\n中：错误。他不是音乐家。\n\n❌ D. Un roi - Faux. Il n'était pas roi.\n中：错误。他不是国王。"
  },
  {
    id: "pf0006",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Paul Cézanne ?",
    options: [
      "Un écrivain",
      "Un philosophe",
      "Un peintre",
      "Un acteur"
    ],
    answer: 2,
    explanation: "❌ A. Un écrivain - Faux. Cézanne n'était pas écrivain.\n中：错误。塞尚不是作家。\n\n❌ B. Un philosophe - Faux. Il n'était pas philosophe.\n中：错误。他不是哲学家。\n\n✅ C. Un peintre - Correct ! Paul Cézanne est un peintre post-impressionniste français.\n中：正确！保罗·塞尚是法国后印象派画家。\n\n❌ D. Un acteur - Faux. Il n'était pas acteur.\n中：错误。他不是演员。"
  },
  {
    id: "pf0007",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Marc Chagall ?",
    options: [
      "Un poète",
      "Un peintre",
      "Un politicien",
      "Un musicien"
    ],
    answer: 1,
    explanation: "❌ A. Un poète - Faux. Il n'était pas poète.\n中：错误。他不是诗人。\n\n✅ B. Un peintre - Correct ! Chagall est un peintre célèbre d'origine russe devenu français.\n中：正确！夏加尔是著名画家，俄裔法国人。\n\n❌ C. Un politicien - Faux. Il n'était pas politicien.\n中：错误。他不是政治家。\n\n❌ D. Un musicien - Faux. Il n'était pas musicien.\n中：错误。他不是音乐家。"
  },
  {
    id: "pf0008",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Joséphine Baker ?",
    options: [
      "Une danseuse et chanteuse",
      "Une reine",
      "Une écrivaine",
      "Une peintre"
    ],
    answer: 0,
    explanation: "✅ A. Une danseuse et chanteuse - Correct ! Joséphine Baker était une danseuse et chanteuse célèbre, aussi résistante pendant la guerre.\n中：正确！约瑟芬·贝克是著名舞者歌手，也参加过抵抗运动。\n\n❌ B. Une reine - Faux. Elle n'était pas reine.\n中：错误。她不是王后。\n\n❌ C. Une écrivaine - Faux. Elle n'était pas écrivaine.\n中：错误。她不是作家。\n\n❌ D. Une peintre - Faux. Elle n'était pas peintre.\n中：错误。她不是画家。"
  },
  {
    id: "pf0009",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était une chanteuse française célèbre ?",
    options: [
      "Édith Piaf",
      "Simone de Beauvoir",
      "George Sand",
      "Marie Curie"
    ],
    answer: 0,
    explanation: "✅ A. Édith Piaf - Correct ! Édith Piaf est une chanteuse française très célèbre.\n中：正确！艾迪特·皮雅芙是著名法国女歌手。\n\n❌ B. Simone de Beauvoir - Faux. Elle n'était pas chanteuse.\n中：错误。她不是歌手。\n\n❌ C. George Sand - Faux. Elle n'était pas chanteuse.\n中：错误。她不是歌手。\n\n❌ D. Marie Curie - Faux. Elle n'était pas chanteuse.\n中：错误。她不是歌手。"
  },
  {
    id: "pf0010",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qu'est-ce que le Louvre ?",
    options: [
      "Une école",
      "Un musée",
      "Un théâtre",
      "Une université"
    ],
    answer: 1,
    explanation: "❌ A. Une école - Faux. Ce n'est pas une école.\n中：错误。它不是学校。\n\n✅ B. Un musée - Correct ! Le Louvre est un musée célèbre à Paris.\n中：正确！卢浮宫是巴黎著名博物馆。\n\n❌ C. Un théâtre - Faux. Ce n'est pas un théâtre.\n中：错误。它不是剧院。\n\n❌ D. Une université - Faux. Ce n'est pas une université.\n中：错误。它不是大学。"
  },
  {
    id: "pf0011",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Jean de la Fontaine ?",
    options: [
      "Un poète et écrivain",
      "Un peintre",
      "Un roi",
      "Un scientifique"
    ],
    answer: 0,
    explanation: "✅ A. Un poète et écrivain - Correct ! La Fontaine est un poète célèbre pour ses fables.\n中：正确！拉封丹是著名诗人，以寓言著称。\n\n❌ B. Un peintre - Faux. Il n'était pas peintre.\n中：错误。他不是画家。\n\n❌ C. Un roi - Faux. Il n'était pas roi.\n中：错误。他不是国王。\n\n❌ D. Un scientifique - Faux. Il n'était pas scientifique.\n中：错误。他不是科学家。"
  },
  {
    id: "pf0012",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel écrivain est français ?",
    options: [
      "Victor Hugo",
      "William Shakespeare",
      "Mark Twain",
      "Goethe"
    ],
    answer: 0,
    explanation: "✅ A. Victor Hugo - Correct ! Victor Hugo est un écrivain français majeur.\n中：正确！维克多·雨果是法国重要作家。\n\n❌ B. William Shakespeare - Faux. Shakespeare est anglais.\n中：错误。莎士比亚是英国人。\n\n❌ C. Mark Twain - Faux. Mark Twain est américain.\n中：错误。马克·吐温是美国人。\n\n❌ D. Goethe - Faux. Goethe est allemand.\n中：错误。歌德是德国人。"
  },
  {
    id: "pf0013",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Dans quelle ville se trouve la tour Eiffel ?",
    options: [
      "Lyon",
      "Marseille",
      "Paris",
      "Bordeaux"
    ],
    answer: 2,
    explanation: "❌ A. Lyon - Faux. La tour Eiffel n'est pas à Lyon.\n中：错误。埃菲尔铁塔不在里昂。\n\n❌ B. Marseille - Faux. Elle n'est pas à Marseille.\n中：错误。它不在马赛。\n\n✅ C. Paris - Correct ! La tour Eiffel est à Paris.\n中：正确！埃菲尔铁塔在巴黎。\n\n❌ D. Bordeaux - Faux. Elle n'est pas à Bordeaux.\n中：错误。它不在波尔多。"
  },
  {
    id: "pf0014",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quand célèbre-t-on Noël ?",
    options: [
      "Le 1er janvier",
      "Le 14 juillet",
      "Le 25 décembre",
      "Le 11 novembre"
    ],
    answer: 2,
    explanation: "❌ A. Le 1er janvier - Faux. Le 1er janvier est le jour de l'An.\n中：错误。1月1日是新年。\n\n❌ B. Le 14 juillet - Faux. Le 14 juillet est la fête nationale.\n中：错误。7月14日是国庆日。\n\n✅ C. Le 25 décembre - Correct ! Noël est célébré le 25 décembre.\n中：正确！圣诞节在12月25日。\n\n❌ D. Le 11 novembre - Faux. Le 11 novembre commémore l'armistice.\n中：错误。11月11日纪念停战。"
  },
  {
    id: "pf0015",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Marguerite Yourcenar ?",
    options: [
      "Une peintre",
      "Une écrivaine",
      "Une chanteuse",
      "Une scientifique"
    ],
    answer: 1,
    explanation: "❌ A. Une peintre - Faux. Elle n'était pas peintre.\n中：错误。她不是画家。\n\n✅ B. Une écrivaine - Correct ! Marguerite Yourcenar est une écrivaine française, première femme élue à l'Académie française.\n中：正确！尤尔瑟纳是法国女作家，首位当选法兰西学院的女性。\n\n❌ C. Une chanteuse - Faux. Elle n'était pas chanteuse.\n中：错误。她不是歌手。\n\n❌ D. Une scientifique - Faux. Elle n'était pas scientifique.\n中：错误。她不是科学家。"
  },
  {
    id: "pf0016",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quel peintre est français ?",
    options: [
      "Pablo Picasso",
      "Claude Monet",
      "Vincent Van Gogh",
      "Salvador Dalí"
    ],
    answer: 1,
    explanation: "❌ A. Pablo Picasso - Faux. Picasso est espagnol.\n中：错误。毕加索是西班牙人。\n\n✅ B. Claude Monet - Correct ! Monet est un peintre français, figure majeure de l'impressionnisme.\n中：正确！莫奈是法国画家，印象派代表。\n\n❌ C. Vincent Van Gogh - Faux. Van Gogh est né aux Pays-Bas.\n中：错误。梵高出生于荷兰。\n\n❌ D. Salvador Dalí - Faux. Dalí est espagnol.\n中：错误。达利是西班牙人。"
  },
  {
    id: "pf0017",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quel musée est situé à Paris ?",
    options: [
      "Le Prado",
      "Le British Museum",
      "Le Louvre",
      "Le MoMA"
    ],
    answer: 2,
    explanation: "❌ A. Le Prado - Faux. Le Prado est à Madrid.\n中：错误。普拉多博物馆在马德里。\n\n❌ B. Le British Museum - Faux. Le British Museum est à Londres.\n中：错误。大英博物馆在伦敦。\n\n✅ C. Le Louvre - Correct ! Le Louvre est à Paris.\n中：正确！卢浮宫在巴黎。\n\n❌ D. Le MoMA - Faux. Le MoMA est à New York.\n中：错误。现代艺术博物馆在纽约。"
  },
  {
    id: "pf0018",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Qui était Auguste Rodin ?",
    options: [
      "Un écrivain",
      "Un musicien",
      "Un sculpteur",
      "Un architecte"
    ],
    answer: 2,
    explanation: "❌ A. Un écrivain - Faux. Rodin n'était pas écrivain.\n中：错误。罗丹不是作家。\n\n❌ B. Un musicien - Faux. Il n'était pas musicien.\n中：错误。他不是音乐家。\n\n✅ C. Un sculpteur - Correct ! Rodin est un sculpteur français célèbre.\n中：正确！罗丹是法国著名雕塑家。\n\n❌ D. Un architecte - Faux. Il n'était pas architecte.\n中：错误。他不是建筑师。"
  },
  {
    id: "pf0019",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quel est le classement de la langue française parmi les langues les plus parlées dans le monde ?",
    options: [
      "2ᵉ",
      "3ᵉ",
      "5ᵉ",
      "10ᵉ"
    ],
    answer: 2,
    explanation: "❌ A. 2ᵉ - Faux. Le français n'est pas la 2ᵉ langue la plus parlée.\n中：错误。法语不是第二常用语言。\n\n❌ B. 3ᵉ - Faux. Il n'est pas 3ᵉ.\n中：错误。不是第三。\n\n✅ C. 5ᵉ - Correct ! Le français est souvent classé 5ᵉ langue la plus parlée.\n中：正确！法语常被列为世界第五大语言。\n\n❌ D. 10ᵉ - Faux. Il n'est pas 10ᵉ.\n中：错误。不是第十。"
  },
  {
    id: "pf0020",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quelle cathédrale célèbre a été en partie détruite par un incendie en 2019 ?",
    options: [
      "Notre-Dame de Paris",
      "La basilique du Sacré-Cœur",
      "La cathédrale de Reims",
      "Notre-Dame de Chartres"
    ],
    answer: 0,
    explanation: "✅ A. Notre-Dame de Paris - Correct ! Notre-Dame de Paris a subi un incendie majeur en 2019.\n中：正确！巴黎圣母院2019年发生重大火灾。\n\n❌ B. La basilique du Sacré-Cœur - Faux. Le Sacré-Cœur n'a pas brûlé.\n中：错误。圣心大教堂没有着火。\n\n❌ C. La cathédrale de Reims - Faux. Reims n'a pas été détruite en 2019.\n中：错误。兰斯大教堂2019年没有被毁。\n\n❌ D. Notre-Dame de Chartres - Faux. Chartres n'a pas été détruite en 2019.\n中：错误。沙特尔大教堂没有被毁。"
  },
  {
    id: "pf0021",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Qui était une écrivaine française célèbre ?",
    options: [
      "George Sand",
      "Édith Piaf",
      "Simone Veil",
      "Camille Claudel"
    ],
    answer: 0,
    explanation: "✅ A. George Sand - Correct ! George Sand est une écrivaine française célèbre.\n中：正确！乔治·桑是著名法国女作家。\n\n❌ B. Édith Piaf - Faux. Piaf était chanteuse, pas écrivaine.\n中：错误。皮雅芙是歌手，不是作家。\n\n❌ C. Simone Veil - Faux. Simone Veil était une femme politique.\n中：错误。西蒙娜·韦伊是政治家。\n\n❌ D. Camille Claudel - Faux. Camille Claudel était sculptrice.\n中：错误。卡米耶·克劳岱尔是雕塑家。"
  },
  {
    id: "pf0022",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Qui était un célèbre musicien français ?",
    options: [
      "Claude Debussy",
      "Victor Hugo",
      "Paul Cézanne",
      "Auguste Rodin"
    ],
    answer: 0,
    explanation: "✅ A. Claude Debussy - Correct ! Debussy est un compositeur français célèbre.\n中：正确！德彪西是著名法国作曲家。\n\n❌ B. Victor Hugo - Faux. Hugo était écrivain.\n中：错误。雨果是作家。\n\n❌ C. Paul Cézanne - Faux. Cézanne était peintre.\n中：错误。塞尚是画家。\n\n❌ D. Auguste Rodin - Faux. Rodin était sculpteur.\n中：错误。罗丹是雕塑家。"
  },
  {
    id: "pf0023",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Qui était Auguste Renoir ?",
    options: [
      "Un poète",
      "Un peintre",
      "Un musicien",
      "Un philosophe"
    ],
    answer: 1,
    explanation: "❌ A. Un poète - Faux. Renoir n'était pas poète.\n中：错误。雷诺阿不是诗人。\n\n✅ B. Un peintre - Correct ! Renoir est un peintre impressionniste français.\n中：正确！雷诺阿是法国印象派画家。\n\n❌ C. Un musicien - Faux. Il n'était pas musicien.\n中：错误。他不是音乐家。\n\n❌ D. Un philosophe - Faux. Il n'était pas philosophe.\n中：错误。他不是哲学家。"
  },
  {
    id: "pf0024",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Quelle fête est française ?",
    options: [
      "Thanksgiving",
      "La fête nationale du 14 juillet",
      "Halloween",
      "Le Nouvel An chinois"
    ],
    answer: 1,
    explanation: "❌ A. Thanksgiving - Faux. Thanksgiving est américaine.\n中：错误。感恩节是美国节日。\n\n✅ B. La fête nationale du 14 juillet - Correct ! Le 14 juillet est la fête nationale française.\n中：正确！7月14日是法国国庆日。\n\n❌ C. Halloween - Faux. Halloween est anglo-saxon.\n中：错误。万圣节是盎格鲁-撒克逊节日。\n\n❌ D. Le Nouvel An chinois - Faux. Le Nouvel An chinois est chinois.\n中：错误。春节是中国节日。"
  },
  {
    id: "pf0025",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Dans quels domaines la culture française est-elle particulièrement reconnue ?",
    options: [
      "La mode, la littérature, le cinéma",
      "La médecine, la chimie, l'astronomie",
      "Le sport, la finance, l'agriculture",
      "La robotique, l'informatique, la physique"
    ],
    answer: 0,
    explanation: "✅ A. La mode, la littérature, le cinéma - Correct ! La France est reconnue mondialement pour la mode, la littérature et le cinéma.\n中：正确！法国在时尚、文学、电影方面享誉世界。\n\n❌ B. La médecine, la chimie, l'astronomie - Faux. Ce sont plutôt des domaines scientifiques.\n中：错误。这些是科学领域。\n\n❌ C. Le sport, la finance, l'agriculture - Faux. Ce n'est pas la spécialité culturelle la plus connue.\n中：错误。不是最知名的文化领域。\n\n❌ D. La robotique, l'informatique, la physique - Faux. Ce sont des domaines technologiques.\n中：错误。这是科技领域。"
  },
  {
    id: "pf0026",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel auteur français a remporté le prix Nobel de littérature ?",
    options: [
      "André Gide",
      "Victor Hugo",
      "Molière",
      "Jean de La Fontaine"
    ],
    answer: 0,
    explanation: "✅ A. André Gide - Correct ! André Gide a reçu le prix Nobel de littérature en 1947.\n中：正确！安德烈·纪德1947年获得诺贝尔文学奖。\n\n❌ B. Victor Hugo - Faux. Victor Hugo n'a pas reçu le Nobel.\n中：错误。雨果没有获得诺贝尔奖。\n\n❌ C. Molière - Faux. Molière n'a pas reçu le Nobel (le prix n'existait pas à son époque).\n中：错误。莫里哀时代没有诺贝尔奖。\n\n❌ D. Jean de La Fontaine - Faux. La Fontaine n'a pas reçu le Nobel.\n中：错误。拉封丹没有获得诺贝尔奖。"
  },
  {
    id: "pf0027",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel auteur français a remporté le prix Nobel de littérature ?",
    options: [
      "Annie Ernaux",
      "Charles Baudelaire",
      "George Sand",
      "Paul Cézanne"
    ],
    answer: 0,
    explanation: "✅ A. Annie Ernaux - Correct ! Annie Ernaux a reçu le Nobel de littérature en 2022.\n中：正确！安妮·艾尔诺2022年获得诺贝尔文学奖。\n\n❌ B. Charles Baudelaire - Faux. Baudelaire n'a pas reçu le Nobel.\n中：错误。鲍德莱尔没有获得诺贝尔奖。\n\n❌ C. George Sand - Faux. George Sand n'a pas reçu le Nobel.\n中：错误。乔治·桑没有获得诺贝尔奖。\n\n❌ D. Paul Cézanne - Faux. Cézanne était peintre, pas écrivain.\n中：错误。塞尚是画家，不是作家。"
  },
  {
    id: "pf0028",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quel événement majeur du cinéma a lieu en France chaque année ?",
    options: [
      "Le Festival de Cannes",
      "Le Festival de Berlin",
      "Les Oscars",
      "Le Festival de Sundance"
    ],
    answer: 0,
    explanation: "✅ A. Le Festival de Cannes - Correct ! Le Festival de Cannes a lieu chaque année en France.\n中：正确！戛纳电影节每年在法国举行。\n\n❌ B. Le Festival de Berlin - Faux. Berlin est en Allemagne.\n中：错误。柏林电影节在德国。\n\n❌ C. Les Oscars - Faux. Les Oscars sont américains.\n中：错误。奥斯卡在美国。\n\n❌ D. Le Festival de Sundance - Faux. Sundance est aux États-Unis.\n中：错误。圣丹斯电影节在美国。"
  },
  {
    id: "pf0029",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quelle ville est considérée comme une capitale mondiale de la mode ?",
    options: [
      "Paris",
      "Londres",
      "Tokyo",
      "New York"
    ],
    answer: 0,
    explanation: "✅ A. Paris - Correct ! Paris est l'une des capitales mondiales de la mode.\n中：正确！巴黎是世界时尚之都之一。\n\n❌ B. Londres - Faux. Londres est aussi importante, mais la question vise Paris.\n中：错误。伦敦也重要，但此题答案为巴黎。\n\n❌ C. Tokyo - Faux. Tokyo est une capitale de mode, mais pas la réponse attendue.\n中：错误。东京也有影响力，但不是本题答案。\n\n❌ D. New York - Faux. New York est aussi une capitale, mais pas la réponse attendue.\n中：错误。纽约也有，但本题答案为巴黎。"
  },
  {
    id: "pf0030",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quel est un grand nom de la haute couture française ?",
    options: [
      "Chanel",
      "Nike",
      "Zara",
      "Uniqlo"
    ],
    answer: 0,
    explanation: "✅ A. Chanel - Correct ! Chanel est une maison de haute couture française très célèbre.\n中：正确！香奈儿是著名法国高级时装品牌。\n\n❌ B. Nike - Faux. Nike est américain.\n中：错误。耐克是美国品牌。\n\n❌ C. Zara - Faux. Zara est espagnol.\n中：错误。Zara是西班牙品牌。\n\n❌ D. Uniqlo - Faux. Uniqlo est japonais.\n中：错误。优衣库是日本品牌。"
  },
  {
    id: "pf0031",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Comment la France diffuse-t-elle sa langue et sa culture dans le monde ?",
    options: [
      "Avec les Alliances françaises et les Instituts français",
      "Avec les écoles privées uniquement",
      "Avec les centres commerciaux",
      "Avec les banques"
    ],
    answer: 0,
    explanation: "✅ A. Avec les Alliances françaises et les Instituts français - Correct ! La France utilise les Alliances françaises et les Instituts français pour promouvoir la langue et la culture.\n中：正确！法国通过法语联盟和法国文化中心传播语言与文化。\n\n❌ B. Avec les écoles privées uniquement - Faux. Les écoles privées ne suffisent pas.\n中：错误。私立学校不足以代表。\n\n❌ C. Avec les centres commerciaux - Faux. Les centres commerciaux ne sont pas un outil culturel officiel.\n中：错误。商场不是官方文化传播渠道。\n\n❌ D. Avec les banques - Faux. Les banques ne sont pas dédiées à la culture.\n中：错误。银行不负责文化传播。"
  },
  {
    id: "pf0032",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Le français est la 5ᵉ langue la plus parlée au monde avec environ combien de locuteurs ?",
    options: [
      "100 millions",
      "200 millions",
      "300 millions",
      "500 millions"
    ],
    answer: 2,
    explanation: "❌ A. 100 millions - Faux. 100 millions est trop faible.\n中：错误。1亿太少。\n\n❌ B. 200 millions - Faux. 200 millions est encore trop faible.\n中：错误。2亿仍然偏少。\n\n✅ C. 300 millions - Correct ! Environ 300 millions de personnes parlent français.\n中：正确！大约3亿人讲法语。\n\n❌ D. 500 millions - Faux. 500 millions est trop élevé.\n中：错误。5亿过高。"
  },
  {
    id: "pf0033",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qu'est-ce que la francophonie ?",
    options: [
      "La communauté des personnes qui parlent français",
      "Une ville française",
      "Une école de musique",
      "Une institution de sport"
    ],
    answer: 0,
    explanation: "✅ A. La communauté des personnes qui parlent français - Correct ! La francophonie désigne l'ensemble des pays et personnes qui utilisent le français.\n中：正确！法语圈指使用法语的国家和人群。\n\n❌ B. Une ville française - Faux. Ce n'est pas une ville.\n中：错误。它不是城市。\n\n❌ C. Une école de musique - Faux. Ce n'est pas une école de musique.\n中：错误。不是音乐学校。\n\n❌ D. Une institution de sport - Faux. Ce n'est pas une institution sportive.\n中：错误。不是体育机构。"
  },
  {
    id: "pf0034",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "difficile",
    typeQuestion: "question simulée",
    question: "Quel auteur est connu pour ses fables comme \"La Cigale et la Fourmi\" ?",
    options: [
      "Jean de La Fontaine",
      "Victor Hugo",
      "Albert Camus",
      "Charles Baudelaire"
    ],
    answer: 0,
    explanation: "✅ A. Jean de La Fontaine - Correct ! La Fontaine est célèbre pour ses fables.\n中：正确！拉封丹以寓言著称。\n\n❌ B. Victor Hugo - Faux. Hugo n'a pas écrit ces fables.\n中：错误。雨果没写这些寓言。\n\n❌ C. Albert Camus - Faux. Camus est philosophe, pas fabuliste.\n中：错误。加缪是哲学家，不是寓言作者。\n\n❌ D. Charles Baudelaire - Faux. Baudelaire est poète, pas fabuliste.\n中：错误。鲍德莱尔是诗人，不写寓言。"
  },
  {
    id: "pf0035",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel dispositif aide à financer la restauration du patrimoine en France ?",
    options: [
      "Le Loto du Patrimoine",
      "Le Pass Sport",
      "Le Pass Santé",
      "Le Pass Éducation"
    ],
    answer: 0,
    explanation: "✅ A. Le Loto du Patrimoine - Correct ! Le Loto du Patrimoine finance la restauration des monuments.\n中：正确！文化遗产彩票用于修复古迹。\n\n❌ B. Le Pass Sport - Faux. Le Pass Sport est pour le sport.\n中：错误。运动卡用于体育。\n\n❌ C. Le Pass Santé - Faux. Le Pass Santé est lié à la santé.\n中：错误。健康卡与健康有关。\n\n❌ D. Le Pass Éducation - Faux. Le Pass Éducation concerne l'éducation.\n中：错误。教育卡用于教育。"
  },
  {
    id: "pf0036",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quand l'accès aux collections de nombreux musées nationaux est-il gratuit ?",
    options: [
      "Le 1er dimanche de chaque mois",
      "Tous les samedis",
      "Tous les jours",
      "Le 14 juillet uniquement"
    ],
    answer: 0,
    explanation: "✅ A. Le 1er dimanche de chaque mois - Correct ! De nombreux musées nationaux sont gratuits le premier dimanche du mois.\n中：正确！许多国家博物馆在每月第一个周日免费。\n\n❌ B. Tous les samedis - Faux. Ce n'est pas tous les samedis.\n中：错误。不是每周六。\n\n❌ C. Tous les jours - Faux. Ce n'est pas tous les jours.\n中：错误。不是每天。\n\n❌ D. Le 14 juillet uniquement - Faux. Le 14 juillet n'est pas le seul jour.\n中：错误。7月14日不是唯一免费日。"
  },
  {
    id: "pf0037",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel événement permet de visiter gratuitement des lieux culturels en septembre ?",
    options: [
      "Les Journées européennes du patrimoine",
      "La fête de la musique",
      "La Nuit Blanche",
      "Le festival de Cannes"
    ],
    answer: 0,
    explanation: "✅ A. Les Journées européennes du patrimoine - Correct ! Les Journées européennes du patrimoine offrent des visites gratuites.\n中：正确！欧洲遗产日提供免费参观。\n\n❌ B. La fête de la musique - Faux. La fête de la musique est un événement musical en juin.\n中：错误。音乐节在六月。\n\n❌ C. La Nuit Blanche - Faux. La Nuit Blanche est une nuit d'art à Paris.\n中：错误。白夜艺术节不是免费文化日。\n\n❌ D. Le festival de Cannes - Faux. Cannes est un festival de cinéma en mai.\n中：错误。戛纳电影节在五月。"
  },
  {
    id: "pf0038",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle manifestation artistique nocturne a lieu à Paris ?",
    options: [
      "La Nuit Blanche",
      "La fête des Lumières",
      "Les Journées du patrimoine",
      "Le Carnaval de Nice"
    ],
    answer: 0,
    explanation: "✅ A. La Nuit Blanche - Correct ! La Nuit Blanche est une manifestation artistique nocturne à Paris.\n中：正确！白夜艺术节在巴黎举行。\n\n❌ B. La fête des Lumières - Faux. La fête des Lumières a lieu à Lyon.\n中：错误。灯光节在里昂。\n\n❌ C. Les Journées du patrimoine - Faux. Les Journées du patrimoine ne sont pas nocturnes.\n中：错误。遗产日不是夜间活动。\n\n❌ D. Le carnaval de Nice - Faux. Le carnaval de Nice se déroule à Nice.\n中：错误。尼斯狂欢节在尼斯。"
  },
  {
    id: "pf0039",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Eugène Delacroix ?",
    options: [
      "Un peintre",
      "Un écrivain",
      "Un musicien",
      "Un sculpteur"
    ],
    answer: 0,
    explanation: "✅ A. Un peintre - Correct ! Delacroix est un peintre romantique français célèbre.\n中：正确！德拉克罗瓦是著名法国浪漫主义画家。\n\n❌ B. Un écrivain - Faux. Il n'était pas écrivain.\n中：错误。他不是作家。\n\n❌ C. Un musicien - Faux. Il n'était pas musicien.\n中：错误。他不是音乐家。\n\n❌ D. Un sculpteur - Faux. Il n'était pas sculpteur.\n中：错误。他不是雕塑家。"
  },
  {
    id: "pf0040",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel peintre est un maître de l'impressionnisme ?",
    options: [
      "Claude Monet",
      "Jean de La Fontaine",
      "Simone de Beauvoir",
      "Victor Hugo"
    ],
    answer: 0,
    explanation: "✅ A. Claude Monet - Correct ! Monet est un maître de l'impressionnisme.\n中：正确！莫奈是印象派大师。\n\n❌ B. Jean de La Fontaine - Faux. La Fontaine était écrivain.\n中：错误。拉封丹是作家。\n\n❌ C. Simone de Beauvoir - Faux. Simone de Beauvoir était philosophe.\n中：错误。波伏娃是哲学家。\n\n❌ D. Victor Hugo - Faux. Hugo était écrivain.\n中：错误。雨果是作家。"
  },
  {
    id: "pf0041",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel peintre est connu pour ses scènes joyeuses et lumineuses ?",
    options: [
      "Auguste Renoir",
      "Paul Cézanne",
      "Claude Debussy",
      "Marc Chagall"
    ],
    answer: 0,
    explanation: "✅ A. Auguste Renoir - Correct ! Renoir est connu pour ses scènes lumineuses et joyeuses.\n中：正确！雷诺阿以明亮欢快画面著称。\n\n❌ B. Paul Cézanne - Faux. Cézanne est plus structuré et analytique.\n中：错误。塞尚更偏结构分析。\n\n❌ C. Claude Debussy - Faux. Debussy est compositeur, pas peintre.\n中：错误。德彪西是作曲家，不是画家。\n\n❌ D. Marc Chagall - Faux. Chagall est plus onirique.\n中：错误。夏加尔风格更梦幻。"
  },
  {
    id: "pf0042",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle œuvre est associée à Eugène Delacroix ?",
    options: [
      "La Liberté guidant le peuple",
      "Les Nymphéas",
      "La Vie",
      "L'Hymne à l'amour"
    ],
    answer: 0,
    explanation: "✅ A. La Liberté guidant le peuple - Correct ! \"La Liberté guidant le peuple\" est une œuvre de Delacroix.\n中：正确！《自由引导人民》是德拉克罗瓦作品。\n\n❌ B. Les Nymphéas - Faux. Les Nymphéas sont de Monet.\n中：错误。《睡莲》是莫奈作品。\n\n❌ C. La Vie - Faux. \"La Vie\" n'est pas une œuvre connue de Delacroix.\n中：错误。《生活》不是德拉克罗瓦著名作品。\n\n❌ D. L'Hymne à l'amour - Faux. \"L'Hymne à l'amour\" est une chanson d'Édith Piaf.\n中：错误。《爱之赞歌》是皮雅芙歌曲。"
  },
  {
    id: "pf0043",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Camille Claudel ?",
    options: [
      "Une sculptrice",
      "Une chanteuse",
      "Une écrivain",
      "Une peintre"
    ],
    answer: 0,
    explanation: "✅ A. Une sculptrice - Correct ! Camille Claudel est une sculptrice française célèbre.\n中：正确！卡米耶·克劳岱尔是著名法国女雕塑家。\n\n❌ B. Une chanteuse - Faux. Elle n'était pas chanteuse.\n中：错误。她不是歌手。\n\n❌ C. Une écrivaine - Faux. Elle n'était pas écrivaine.\n中：错误。她不是作家。\n\n❌ D. Une peintre - Faux. Elle n'était pas peintre.\n中：错误。她不是画家。"
  },
  {
    id: "pf0044",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui était Claude Debussy ?",
    options: [
      "Un compositeur",
      "Un peintre",
      "Un écrivain",
      "Un sculpteur"
    ],
    answer: 0,
    explanation: "✅ A. Un compositeur - Correct ! Debussy est un compositeur français.\n中：正确！德彪西是法国作曲家。\n\n❌ B. Un peintre - Faux. Il n'était pas peintre.\n中：错误。他不是画家。\n\n❌ C. Un écrivain - Faux. Il n'était pas écrivain.\n中：错误。他不是作家。\n\n❌ D. Un sculpteur - Faux. Il n'était pas sculpteur.\n中：错误。他不是雕塑家。"
  },
  {
    id: "pf0045",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel morceau est une œuvre de Claude Debussy ?",
    options: [
      "Clair de Lune",
      "La Vie en rose",
      "Le Penseur",
      "Le Corbeau et le Renard"
    ],
    answer: 0,
    explanation: "✅ A. Clair de Lune - Correct ! \"Clair de Lune\" est une œuvre célèbre de Debussy.\n中：正确！《月光》是德彪西著名作品。\n\n❌ B. La Vie en rose - Faux. \"La Vie en rose\" est une chanson d'Édith Piaf.\n中：错误。《玫瑰人生》是皮雅芙歌曲。\n\n❌ C. Le Penseur - Faux. \"Le Penseur\" est une sculpture de Rodin.\n中：错误。《思想者》是罗丹雕塑。\n\n❌ D. Le Corbeau et le Renard - Faux. \"Le Corbeau et le Renard\" est une fable de La Fontaine.\n中：错误。《乌鸦与狐狸》是拉封丹寓言。"
  },
  {
    id: "pf0046",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Marc Chagall était :",
    options: [
      "Un peintre devenu français",
      "Un sculpteur français",
      "Un écrivain français",
      "Un musicien français"
    ],
    answer: 0,
    explanation: "✅ A. Un peintre devenu français - Correct ! Chagall est un peintre d'origine russe devenu français.\n中：正确！夏加尔是俄裔画家，后成为法国人。\n\n❌ B. Un sculpteur français - Faux. Il n'était pas sculpteur.\n中：错误。他不是雕塑家。\n\n❌ C. Un écrivain français - Faux. Il n'était pas écrivain.\n中：错误。他不是作家。\n\n❌ D. Un musicien français - Faux. Il n'était pas musicien.\n中：错误。他不是音乐家。"
  },
  {
    id: "pf0047",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Joséphine Baker était connue comme :",
    options: [
      "Une danseuse et chanteuse",
      "Une écrivaine",
      "Une sculptrice",
      "Une peintre"
    ],
    answer: 0,
    explanation: "✅ A. Une danseuse et chanteuse - Correct ! Elle était une danseuse et chanteuse célèbre.\n中：正确！她是著名舞者和歌手。\n\n❌ B. Une écrivaine - Faux. Elle n'était pas écrivaine.\n中：错误。她不是作家。\n\n❌ C. Une sculptrice - Faux. Elle n'était pas sculptrice.\n中：错误。她不是雕塑家。\n\n❌ D. Une peintre - Faux. Elle n'était pas peintre.\n中：错误。她不是画家。"
  },
  {
    id: "pf0048",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Joséphine Baker a participé à :",
    options: [
      "La Résistance pendant la Seconde Guerre mondiale",
      "La construction de la Tour Eiffel",
      "La rédaction du Code civil",
      "La découverte de la radioactivité"
    ],
    answer: 0,
    explanation: "✅ A. La Résistance pendant la Seconde Guerre mondiale - Correct ! Elle a été engagée dans la Résistance française.\n中：正确！她参加了法国抵抗运动。\n\n❌ B. La construction de la Tour Eiffel - Faux. Elle n'a pas construit la Tour Eiffel.\n中：错误。她没有参与建造埃菲尔铁塔。\n\n❌ C. La rédaction du Code civil - Faux. Le Code civil date de Napoléon.\n中：错误。民法典是拿破仑时期制定的。\n\n❌ D. La découverte de la radioactivité - Faux. Elle n'a pas découvert la radioactivité.\n中：错误。她没有发现放射性。"
  },
  {
    id: "pf0049",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Annie Ernaux est connue comme :",
    options: [
      "Une écrivaine française contemporaine",
      "Une peintre impressionniste",
      "Une danseuse classique",
      "Une cinéaste américaine"
    ],
    answer: 0,
    explanation: "✅ A. Une écrivaine française contemporaine - Correct ! Annie Ernaux est une écrivaine contemporaine française, Nobel 2022.\n中：正确！安妮·艾尔诺是当代法国作家，2022年诺贝尔奖得主。\n\n❌ B. Une peintre impressionniste - Faux. Elle n'est pas peintre.\n中：错误。她不是画家。\n\n❌ C. Une danseuse classique - Faux. Elle n'est pas danseuse.\n中：错误。她不是芭蕾舞者。\n\n❌ D. Une cinéaste américaine - Faux. Elle n'est pas cinéaste américaine.\n中：错误。她不是美国导演。"
  },
  {
    id: "pf0050",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Camille Claudel est surtout connue comme :",
    options: [
      "Une sculptrice française",
      "Une chanteuse française",
      "Une romancière française",
      "Une photographe française"
    ],
    answer: 0,
    explanation: "✅ A. Une sculptrice française - Correct ! Camille Claudel est une sculptrice française célèbre.\n中：正确！卡米耶·克劳岱尔是著名法国雕塑家。\n\n❌ B. Une chanteuse française - Faux. Elle n'était pas chanteuse.\n中：错误。她不是歌手。\n\n❌ C. Une romancière française - Faux. Elle n'était pas romancière.\n中：错误。她不是小说家。\n\n❌ D. Une photographe française - Faux. Elle n'était pas photographe.\n中：错误。她不是摄影师。"
  },
  {
    id: "pf0051",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "André Gide était :",
    options: [
      "Un écrivain",
      "Un peintre",
      "Un musicien",
      "Un sculpteur"
    ],
    answer: 0,
    explanation: "✅ A. Un écrivain - Correct ! André Gide est un écrivain français, Nobel 1947.\n中：正确！安德烈·纪德是法国作家，1947年诺贝尔奖。\n\n❌ B. Un peintre - Faux. Il n'était pas peintre.\n中：错误。他不是画家。\n\n❌ C. Un musicien - Faux. Il n'était pas musicien.\n中：错误。他不是音乐家。\n\n❌ D. Un sculpteur - Faux. Il n'était pas sculpteur.\n中：错误。他不是雕塑家。"
  },
  {
    id: "pf0052",
    type: "carte multi",
    category: "Patrimoine français",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "En 2019, un grand incendie a détruit une partie d'un monument célèbre à Paris. Quel est ce monument ?",
    options: [
      "La tour Eiffel",
      "L'Arc de Triomphe",
      "Notre-Dame de Paris",
      "Le Louvre"
    ],
    answer: 2,
    explanation: "❌ A. La tour Eiffel - Faux. La tour Eiffel n'a pas été détruite.\n中：错误。埃菲尔铁塔没有被毁。\n\n❌ B. L'Arc de Triomphe - Faux. L'Arc de Triomphe n'a pas brûlé.\n中：错误。凯旋门没有着火。\n\n✅ C. Notre-Dame de Paris - Correct ! Notre-Dame de Paris a été partiellement détruite par un incendie en 2019.\n中：正确！巴黎圣母院2019年火灾部分被毁。\n\n❌ D. Le Louvre - Faux. Le Louvre n'a pas brûlé.\n中：错误。卢浮宫没有着火。"
  },

  {
    id: "tg0001",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel pays ou région du monde a été colonisé par la France ?",
    options: [
      "Le Japon",
      "L'Algérie",
      "La Suède",
      "Le Canada aujourd'hui"
    ],
    answer: 1,
    explanation: "❌ A. Le Japon - Faux. Le Japon n'a jamais été colonisé par la France ; il est resté un État indépendant.\n中：错误。日本从未被法国殖民，一直是独立国家。\n\n✅ B. L'Algérie - Correct ! L'Algérie a été colonisée par la France de 1830 à 1962.\n中：正确！阿尔及利亚在1830年至1962年期间是法国的殖民地。\n\n❌ C. La Suède - Faux. La Suède n'a jamais été colonisée par la France.\n中：错误。瑞典从未被法国殖民。\n\n❌ D. Le Canada aujourd'hui - Faux. Une partie du Canada a été colonisée par la France dans le passé (Nouvelle-France), mais le Canada d'aujourd'hui n'est pas une colonie française.\n中：错误。加拿大的一部分在历史上曾是法国殖民地（新法兰西），但今天的加拿大并不是法国的殖民地。"
  },
  {
    id: "tg0002",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel fleuve coule en France ?",
    options: [
      "Le Nil",
      "Le Danube",
      "La Loire",
      "Le Tigre"
    ],
    answer: 2,
    explanation: "❌ A. Le Nil - Faux. Le Nil coule en Afrique, pas en France.\n中：错误。尼罗河在非洲流经，不在法国。\n\n❌ B. Le Danube - Faux. Le Danube traverse l'Europe centrale, pas la France.\n中：错误。多瑙河流经中欧，不经过法国。\n\n✅ C. La Loire - Correct ! La Loire est le plus long fleuve de France et coule entièrement en France.\n中：正确！卢瓦尔河是法国最长的河流，全部流经法国。\n\n❌ D. Le Tigre - Faux. Le Tigre se trouve au Moyen-Orient, pas en France.\n中：错误。底格里斯河在中东地区，不在法国。"
  },
  {
    id: "tg0003",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle ville est française ?",
    options: [
      "Rome",
      "Madrid",
      "Lyon",
      "Berlin"
    ],
    answer: 2,
    explanation: "❌ A. Rome - Faux. Rome est la capitale de l'Italie.\n中：错误。罗马是意大利首都。\n\n❌ B. Madrid - Faux. Madrid est la capitale de l'Espagne.\n中：错误。马德里是西班牙首都。\n\n✅ C. Lyon - Correct ! Lyon est une grande ville française.\n中：正确！里昂是法国的一座大城市。\n\n❌ D. Berlin - Faux. Berlin est la capitale de l'Allemagne.\n中：错误。柏林是德国首都。"
  },
{
  id: "tg0004",
  type: "carte multi",
  category: "Territoires et géographie",
  difficulté: "moyen",
  typeQuestion: "examen original",
  question: "Quel océan borde la côte ouest française ?",
  options: [
    "L'océan Indien",
    "L'océan Pacifique",
    "L'océan Arctique",
    "L'océan Atlantique"
  ],
  "answer": 3,
  "explanation": "❌ A. L'océan Indien - Faux. L'océan Indien est loin de la France.\n中：错误。印度洋离法国很远。\n\n❌ B. L'océan Pacifique - Faux. Le Pacifique ne se trouve pas à l’ouest de la France.\n中：错误。太平洋不在法国西海岸。\n\n❌ C. L'océan Arctique - Faux. La mer Arctique ne se trouve pas à l’ouest de la France.\n中：错误。北极海不在法国西海岸。\n\n✅ D. L'océan Atlantique - Correct ! La côte ouest de la France borde l'océan Atlantique.\n中：正确！法国西海岸临大西洋。"
},

  {
    id: "tg0005",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qu'est-ce que Paris ?",
    options: [
      "Un pays",
      "Une région",
      "Une capitale",
      "Un fleuve"
    ],
    answer: 2,
    explanation: "❌ A. Un pays - Faux. Paris n'est pas un pays.\n中：错误。巴黎不是国家。\n\n❌ B. Une région - Faux. Paris est une ville, pas une région.\n中：错误。巴黎是城市，不是地区。\n\n✅ C. Une capitale - Correct ! Paris est la capitale de la France.\n中：正确！巴黎是法国的首都。\n\n❌ D. Un fleuve - Faux. Paris n’est pas un fleuve.\n中：错误。巴黎不是河流。"
  },
  {
    id: "tg0006",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle est la capitale de la France ?",
    options: [
      "Marseille",
      "Lyon",
      "Paris",
      "Lille"
    ],
    answer: 2,
    explanation: "❌ A. Marseille - Faux. Marseille est une grande ville, mais ce n'est pas la capitale.\n中：错误。马赛是大城市，但不是首都。\n\n❌ B. Lyon - Faux. Lyon n'est pas la capitale.\n中：错误。里昂不是首都。\n\n✅ C. Paris - Correct ! Paris est la capitale de la France.\n中：正确！巴黎是法国的首都。\n\n❌ D. Lille - Faux. Lille n'est pas la capitale.\n中：错误。里尔不是首都。"
  },
  {
    id: "tg0007",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Sur quel continent se situe la France métropolitaine ?",
    options: [
      "Afrique",
      "Amérique",
      "Asie",
      "Europe"
    ],
    answer: 3,
    explanation: "❌ A. Afrique - Faux. La France métropolitaine n'est pas en Afrique.\n中：错误。法国本土不在非洲。\n\n❌ B. Amérique - Faux. La France métropolitaine n'est pas en Amérique.\n中：错误。法国本土不在美洲。\n\n❌ C. Asie - Faux. La France métropolitaine n'est pas en Asie.\n中：错误。法国本土不在亚洲。\n\n✅ D. Europe - Correct ! La France métropolitaine se situe en Europe.\n中：正确！法国本土位于欧洲。"
  },
  {
    id: "tg0008",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle île est un département d'outre-mer français ?",
    options: [
      "La Corse",
      "La Sicile",
      "La Martinique",
      "Malte"
    ],
    answer: 2,
    explanation: "❌ A. La Corse - Faux. La Corse est une région française mais elle est en métropole, pas un DOM.\n中：错误。科西嘉是法国本土地区，不是海外省。\n\n❌ B. La Sicile - Faux. La Sicile appartient à l'Italie.\n中：错误。西西里岛属于意大利。\n\n✅ C. La Martinique - Correct ! La Martinique est un département d'outre-mer français.\n中：正确！马提尼克是法国海外省。\n\n❌ D. Malte - Faux. Malte est un pays indépendant.\n中：错误。马耳他是独立国家。"
  },
  {
    id: "tr0009",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Combien y a-t-il de régions en France métropolitaine ?",
    options: [
      "10",
      "12",
      "13",
      "18"
    ],
    answer: 2,
    explanation: "❌ A. 10 - Faux. Ce n'est pas le bon nombre.\n中：错误。不是正确数量。\n\n❌ B. 12 - Faux. Ce n'est pas le bon nombre.\n中：错误。不是正确数量。\n\n✅ C. 13 - Correct ! Il y a 13 régions en France métropolitaine.\n中：正确！法国本土有13个大区。\n\n❌ D. 18 - Faux. 18 inclut les régions d'outre-mer, mais la question parle de la métropole.\n中：错误。18包含海外大区，但题目只问本土。"
  },
  {
    id: "tg0010",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle ville est un grand port maritime ?",
    options: [
      "Paris",
      "Marseille",
      "Clermont-Ferrand",
      "Dijon"
    ],
    answer: 1,
    explanation: "❌ A. Paris - Faux. Paris n'est pas un port maritime, car elle est située à l'intérieur des terres.\n中：错误。巴黎不在海边，不是海港城市。\n\n✅ B. Marseille - Correct ! Marseille est le plus grand port maritime de France.\n中：正确！马赛是法国最大的海港。\n\n❌ C. Clermont-Ferrand - Faux. Clermont-Ferrand est en région intérieure, sans accès à la mer.\n中：错误。克莱蒙费朗在内陆，没有海港。\n\n❌ D. Dijon - Faux. Dijon est aussi une ville intérieure, pas un port.\n中：错误。第戎也在内陆。"
  },
  {
    id: "tg0011",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle est la mer au sud de la France métropolitaine ?",
    options: [
      "La mer du Nord",
      "La mer Baltique",
      "La mer Méditerranée",
      "La mer Noire"
    ],
    answer: 2,
    explanation: "❌ A. La mer du Nord - Faux. La mer du Nord est au nord de la France, pas au sud.\n中：错误。北海在法国北部。\n\n❌ B. La mer Baltique - Faux. La mer Baltique est loin de la France.\n中：错误。波罗的海远离法国。\n\n✅ C. La mer Méditerranée - Correct ! La mer Méditerranée borde le sud de la France.\n中：正确！地中海在法国南部。\n\n❌ D. La mer Noire - Faux. La mer Noire ne touche pas la France.\n中：错误。黑海不与法国接壤。"
  },
  {
    id: "tg0012",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle ville est située au bord de la mer Méditerranée ?",
    options: [
      "Strasbourg",
      "Toulouse",
      "Marseille",
      "Reims"
    ],
    answer: 2,
    explanation: "❌ A. Strasbourg - Faux. Strasbourg est une ville située à l'intérieur du pays, près de l'Allemagne.\n中：错误。斯特拉斯堡在内陆，靠近德国。\n\n❌ B. Toulouse - Faux. Toulouse est dans le sud-ouest mais pas sur la mer.\n中：错误。图卢兹在西南部，但不在海边。\n\n✅ C. Marseille - Correct ! Marseille est une ville portuaire sur la Méditerranée.\n中：正确！马赛是地中海沿岸的港口城市。\n\n❌ D. Reims - Faux. Reims est une ville intérieure, dans le nord-est.\n中：错误。兰斯在内陆。"
  },
  {
    id: "tg0013",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Où se situe la Corse ?",
    options: [
      "Dans l'océan Atlantique",
      "Dans la mer Méditerranée",
      "Dans la mer du Nord",
      "Dans l'océan Indien"
    ],
    answer: 1,
    explanation: "❌ A. Dans l'océan Atlantique - Faux. La Corse n'est pas dans l'Atlantique.\n中：错误。科西嘉不在大西洋。\n\n✅ B. Dans la mer Méditerranée - Correct ! La Corse est une île située en Méditerranée.\n中：正确！科西嘉位于地中海。\n\n❌ C. Dans la mer du Nord - Faux. La Corse n'est pas dans la mer du Nord.\n中：错误。科西嘉不在北海。\n\n❌ D. Dans l'océan Indien - Faux. La Corse n'est pas dans l'océan Indien.\n中：错误。科西嘉不在印度洋。"
  },
  {
    id: "tg0014",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle chaîne de montagnes est située entre la France et l'Italie ?",
    options: [
      "Les Pyrénées",
      "Les Alpes",
      "Le Jura",
      "Le Massif central"
    ],
    answer: 1,
    explanation: "❌ A. Les Pyrénées - Faux. Les Pyrénées sont entre la France et l'Espagne.\n中：错误。比利牛斯山在法国与西班牙之间。\n\n✅ B. Les Alpes - Correct ! Les Alpes se trouvent entre la France et l'Italie.\n中：正确！阿尔卑斯山位于法国和意大利之间。\n\n❌ C. Le Jura - Faux. Le Jura est entre la France et la Suisse.\n中：错误。侏罗山在法国与瑞士之间。\n\n❌ D. Le Massif central - Faux. Le Massif central est situé au centre de la France.\n中：错误。中央高原在法国中部。"
  },
  {
    id: "tg0015",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel pays a été colonisé par la France ?",
    options: [
      "Le Vietnam",
      "La Norvège",
      "La Pologne",
      "L'Autriche"
    ],
    answer: 0,
    explanation: "✅ A. Le Vietnam - Correct ! Le Vietnam a été colonisé par la France au XIXe et au début du XXe siècle.\n中：正确！越南在19世纪至20世纪初是法国殖民地。\n\n❌ B. La Norvège - Faux. La Norvège n'a jamais été colonisée par la France.\n中：错误。挪威从未被法国殖民。\n\n❌ C. La Pologne - Faux. La Pologne n'a pas été colonisée par la France.\n中：错误。波兰没有被法国殖民。\n\n❌ D. L'Autriche - Faux. L'Autriche n'a pas été colonisée par la France.\n中：错误。奥地利没有被法国殖民。"
  },
  {
    id: "tg0016",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle mer ou océan borde la France métropolitaine ?",
    options: [
      "La mer Noire",
      "L'océan Atlantique",
      "La mer Rouge",
      "L'océan Indien"
    ],
    answer: 1,
    explanation: "❌ A. La mer Noire - Faux. La mer Noire ne touche pas la France métropolitaine.\n中：错误。黑海不与法国本土接壤。\n\n✅ B. L'océan Atlantique - Correct ! L'océan Atlantique borde la côte ouest de la France métropolitaine.\n中：正确！大西洋位于法国本土西部沿海。\n\n❌ C. La mer Rouge - Faux. La mer Rouge est très loin de la France.\n中：错误。红海离法国很远。\n\n❌ D. L'océan Indien - Faux.  L’océan Indien ne touche pas la France métropolitaine.\n中：错误。印度洋不在法国本土边界。"
  },
  {
    id: "tg0017",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel pays a une frontière terrestre avec la France métropolitaine ?",
    options: [
      "Le Portugal",
      "L'Italie",
      "L'Irlande",
      "Le Danemark"
    ],
    answer: 1,
    explanation: "❌ A. Le Portugal - Faux. Le Portugal ne partage pas de frontière terrestre avec la France, il est séparé par l'Espagne.\n中：错误。葡萄牙与法国不接壤，中间隔着西班牙。\n\n✅ B. L'Italie - Correct ! L'Italie partage une frontière terrestre avec la France au sud-est.\n中：正确！意大利在法国东南部与其接壤。\n\n❌ C. L'Irlande - Faux. L'Irlande est une île et n'a pas de frontière terrestre avec la France.\n中：错误。爱尔兰是岛屿国家，没有与法国的陆地边界。\n\n❌ D. Le Danemark - Faux. Le Danemark n'a pas de frontière terrestre avec la France.\n中：错误。丹麦与法国没有陆地边界。"
  },
  {
    id: "tg0018",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle ville française est un port maritime ?",
    options: [
      "Marseille",
      "Paris",
      "Lyon",
      "Limoges"
    ],
    answer: 0,
    explanation: "✅ A. Marseille - Correct ! Marseille est une grande ville portuaire située sur la mer Méditerranée.\n中：正确！马赛是位于地中海沿岸的法国大港口城市。\n\n❌ B. Paris - Faux. Paris est une ville intérieure, située sur la Seine, pas un port maritime.\n中：错误。巴黎位于内陆塞纳河边，不是海港。\n\n❌ C. Lyon - Faux. Lyon est une ville intérieure située au confluent du Rhône et de la Saône, pas un port maritime.\n中：错误。里昂在内陆河流交汇处，不是海港。\n\n❌ D. Limoges - Faux. Limoges est une ville intérieure, sans accès à la mer.\n中：错误。利摩日位于内陆，没有海港。"
  },
  {
    id: "tg0019",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle mer se situe entre la France et l'Angleterre ?",
    options: [
      "La mer Méditerranée",
      "La mer du Nord",
      "La Manche",
      "L'océan Atlantique"
    ],
    answer: 2,
    explanation: "❌ A. La mer Méditerranée - Faux. La mer Méditerranée se trouve au sud de la France, pas entre la France et l'Angleterre.\n中：错误。地中海在法国南部，不在法国与英国之间。\n\n❌ B. La mer du Nord - Faux. La mer du Nord est située au nord-est de la France, mais la mer entre la France et l'Angleterre est la Manche.\n中：错误。北海在东北，但法国与英国之间是英吉利海峡。\n\n✅ C. La Manche - Correct ! La Manche est la mer qui sépare la France et l'Angleterre.\n中：正确！英吉利海峡位于法国和英国之间。\n\n❌ D. L'océan Atlantique - Faux. L'océan Atlantique est à l'ouest, mais la mer entre France et Angleterre est la Manche.\n中：错误。大西洋在西部，但法国与英国之间是英吉利海峡。"
  },
  {
    id: "tg0020",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qu'est-ce que la France d'outre-mer ?",
    options: [
      "Les pays voisins",
      "Les anciennes colonies",
      "Les territoires français hors d'Europe",
      "Les régions frontalières"
    ],
    answer: 2,
    explanation: "❌ A. Les pays voisins - Faux. Les pays voisins ne font pas partie de la France d'outre-mer.\n中：错误。邻国不属于法国海外地区。\n\n❌ B. Les anciennes colonies - Faux. Certaines anciennes colonies ne sont plus françaises.\n中：错误。部分前殖民地已独立，不属于法国海外地区。\n\n✅ C. Les territoires français hors d'Europe - Correct ! La France d'outre-mer désigne les territoires français situés hors d'Europe (DOM-TOM).\n中：正确！法国海外地区指的是位于欧洲以外的法国领土（海外省/海外领地）。\n\n❌ D. Les régions frontalières - Faux. Les régions frontalières sont en France métropolitaine, pas outre-mer.\n中：错误。边境地区在本土，不是海外地区。"
  },
  {
    id: "tg0021",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle chaîne de montagnes est située entre la France et l'Espagne ?",
    options: [
      "Les Alpes",
      "Le Jura",
      "Les Pyrénées",
      "Le Massif central"
    ],
    answer: 2,
    explanation: "❌ A. Les Alpes - Faux. Les Alpes se trouvent entre la France et l'Italie.\n中：错误。阿尔卑斯山在法国与意大利之间。\n\n❌ B. Le Jura - Faux. Le Jura est entre la France et la Suisse.\n中：错误。侏罗山在法国与瑞士之间。\n\n✅ C. Les Pyrénées - Correct ! Les Pyrénées séparent la France et l'Espagne.\n中：正确！比利牛斯山脉位于法国与西班牙之间。\n\n❌ D. Le Massif central - Faux. Le Massif central est au centre de la France.\n中：错误。中央高原在法国中部。"
  },
  {
    id: "tg0022",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle île française se trouve dans l'océan Indien ?",
    options: [
      "La Corse",
      "La Martinique",
      "La Réunion",
      "La Guadeloupe"
    ],
    answer: 2,
    explanation: "❌ A. La Corse - Faux. La Corse est en Méditerranée, pas dans l'océan Indien.\n中：错误。科西嘉在地中海，不在印度洋。\n\n❌ B. La Martinique - Faux. La Martinique est dans les Caraïbes (océan Atlantique).\n中：错误。马提尼克在加勒比海（大西洋）。\n\n✅ C. La Réunion - Correct ! La Réunion est une île française située dans l'océan Indien.\n中：正确！留尼汪岛位于印度洋，是法国海外省。\n\n❌ D. La Guadeloupe - Faux. La Guadeloupe est aussi dans les Caraïbes (océan Atlantique).\n中：错误。瓜德罗普在加勒比海（大西洋）。"
  },
  {
    id: "tg0023",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle est la population approximative de la France en 2025 ?",
    options: [
      "45 millions",
      "55 millions",
      "68 millions",
      "85 millions"
    ],
    answer: 2,
    explanation: "❌ A. 45 millions - Faux. Trop faible pour la population française actuelle.\n中：错误。这个数字太少。\n\n❌ B. 55 millions - Faux. Trop faible \n中：错误。仍然偏低。\n\n✅ C. 68 millions - Correct ! La population de la France est d'environ 68 millions en 2025.\n中：正确！2025年法国人口约为6800万左右。\n\n❌ D. 85 millions - Faux. Ce chiffre est trop élevé.\n中：错误。过高。"
  },
  {
    id: "tg0024",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel fleuve traverse Paris ?",
    options: [
      "La Loire",
      "La Seine",
      "Le Rhône",
      "La Garonne"
    ],
    answer: 1,
    explanation: "❌ A. La Loire - Faux. La Loire ne traverse pas Paris.\n中：错误。卢瓦尔河不经过巴黎。\n\n✅ B. La Seine - Correct ! La Seine traverse Paris.\n中：正确！塞纳河穿过巴黎。\n\n❌ C. Le Rhône - Faux. Le Rhône traverse Lyon, pas Paris.\n中：错误。罗纳河经过里昂，不经过巴黎。\n\n❌ D. La Garonne - Faux. La Garonne traverse Bordeaux, pas Paris.\n中：错误。加龙河经过波尔多，不经过巴黎。"
  },
  {
    id: "tg0025",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Lequel de ces pays partage des frontières terrestres avec la France ?",
    options: [
      "L'Espagne",
      "La Suède",
      "Le Royaume-Uni",
      "La Grèce"
    ],
    answer: 0,
    explanation: "✅ A. L'Espagne - Correct ! L'Espagne partage une frontière terrestre avec la France au sud-ouest.\n中：正确！西班牙在法国西南部，与法国接壤。\n\n❌ B. La Suède - Faux. La Suède est en Scandinavie et n'a pas de frontière avec la France.\n中：错误。瑞典在斯堪的纳维亚，与法国不接壤。\n\n❌ C. Le Royaume-Uni - Faux. Le Royaume-Uni est séparé de la France par la Manche, il n'y a pas de frontière terrestre.\n中：错误。英国与法国之间隔着英吉利海峡，没有陆地边界。\n\n❌ D. La Grèce - Faux. La Grèce est loin de la France et ne partage pas de frontière.\n中：错误。希腊离法国很远，没有边界。"
  },
    // 接上文第26-111题
  {
    id: "tg0026",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel pays a une frontière avec la France métropolitaine au nord-est ?",
    options: [
      "L'Espagne",
      "L'Italie",
      "L'Allemagne",
      "Le Portugal"
    ],
    answer: 2,
    explanation: "❌ A. L'Espagne - Faux. L'Espagne est au sud-ouest de la France, pas au nord-est.\n中：错误。西班牙在法国西南部。\n\n❌ B. L'Italie - Faux. L'Italie est au sud-est de la France.\n中：错误。意大利在法国东南部。\n\n✅ C. L'Allemagne - Correct ! L'Allemagne se situe au nord-est de la France et partage une frontière terrestre.\n中：正确！德国在法国东北部，与法国接壤。\n\n❌ D. Le Portugal - Faux. Le Portugal est au sud-ouest, il n'a pas de frontière avec la France.\n中：错误。葡萄牙在西南部，不接壤法国。"
  },
  {
    id: "tg0027",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Où se trouvent les principales activités économiques en France ?",
    options: [
      "À la campagne",
      "Dans les montagnes",
      "Dans les grandes villes",
      "Dans les forêts"
    ],
    answer: 2,
    explanation: "❌ A. À la campagne - Faux. À la campagne, l'activité principale est l'agriculture, mais ce n'est pas le centre économique principal.\n中：错误。乡村主要是农业，但不是经济活动中心。\n\n❌ B. Dans les montagnes - Faux. Dans les montagnes, il y a surtout le tourisme et l'agriculture de montagne, mais ce n'est pas le principal.\n中：错误。山区主要是旅游等，不是主要经济中心。\n\n✅ C. Dans les grandes villes - Correct ! Les grandes villes concentrent l'industrie, les services, le commerce et les sièges sociaux.\n中：正确！大城市集中工业、服务业、商业和总部等主要经济活动。\n\n❌ D. Dans les forêts - Faux. Les forêts ne sont pas le lieu principal des activités économiques.\n中：错误。森林不是主要经济活动区域。"
  },
  {
    id: "tg0028",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Parmi ces pays, lequel attire le plus de visiteurs chaque année ?",
    options: [
      "L'Italie",
      "L'Espagne",
      "La France",
      "L'Allemagne"
    ],
    answer: 2,
    explanation: "❌ A. L'Italie - Faux. L'Italie est très touristique, mais elle n'attire pas le plus grand nombre.\n中：错误。意大利游客很多，但不是最多。\n\n❌ B. L'Espagne - Faux. L'Espagne attire beaucoup de touristes, mais pas le plus grand nombre.\n中：错误。西班牙游客很多，但不是最多。\n\n✅ C. La France - Correct ! La France est le pays le plus visité au monde.\n中：正确！法国是世界上游客最多的国家之一（常年位居第一）。\n\n❌ D. L'Allemagne - Faux. L'Allemagne attire moins de touristes que la France.\n中：错误。德国游客量少于法国。"
  },
  {
    id: "tg0029",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Où habite la majorité des Français ?",
    options: [
      "À la montagne",
      "En zone rurale",
      "En ville",
      "À l'étranger"
    ],
    answer: 2,
    explanation: "❌ A. À la montagne - Faux. Une minorité vit en montagne.\n中：错误。只有少数人住在山区。\n\n❌ B. En zone rurale - Faux. La population rurale est minoritaire par rapport à la population urbaine.\n中：错误。农村人口少于城市人口。\n\n✅ C. En ville - Correct ! La majorité des Français vivent en ville ou dans les zones urbaines.\n中：正确！大多数法国人居住在城市或城市地区。\n\n❌ D. À l'étranger - Faux. Très peu de Français vivent à l'étranger.\n中：错误。国外居住的法国人很少。"
  },
  {
    id: "tg0030",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle région est la plus peuplée ?",
    options: [
      "Bretagne",
      "Occitanie",
      "Île-de-France",
      "Normandie"
    ],
    answer: 2,
    explanation: "❌ A. Bretagne - Faux. La Bretagne est peuplée, mais pas la plus peuplée.\n中：错误。布列塔尼人口多，但不是最多。\n\n❌ B. Occitanie - Faux. Occitanie est grande, mais pas la plus peuplée.\n中：错误。奥克西塔尼人口较多，但不是最多。\n\n✅ C. Île-de-France - Correct ! L'Île-de-France est la région la plus peuplée (Paris et sa région).\n中：正确！法兰西岛大区（巴黎地区）是人口最多的大区。\n\n❌ D. Normandie - Faux. La Normandie est moins peuplée que l'Île-de-France.\n中：错误。诺曼底人口少于法兰西岛大区。"
  },
  {
    id: "tg0031",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle ville française fait partie des 10 plus grandes métropoles du pays ?",
    options: [
      "Lyon",
      "Reims",
      "Tours",
      "Annecy"
    ],
    answer: 0,
    explanation: "✅ A. Lyon - Correct ! Lyon est une des plus grandes métropoles françaises, souvent classée dans le top 10.\n中：正确！里昂是法国重要大城市群之一，通常位列前10。\n\n❌ B. Reims - Faux. Reims est une ville importante mais pas dans le top 10 des métropoles.\n中：错误。兰斯重要但不在前10大城市群。\n\n❌ C. Tours - Faux. Tours n'est pas dans le top 10 des métropoles.\n中：错误。图尔不在前10大城市群。\n\n❌ D. Annecy - Faux. Annecy est une ville moyenne, pas dans le top 10.\n中：错误。安纳西是中等城市，不在前10。"
  },
  {
    id: "tg0032",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Lequel de ces départements de France est le plus touristique ?",
    options: [
      "La Creuse",
      "Paris",
      "La Lozère",
      "La Haute-Marne"
    ],
    answer: 1,
    explanation: "❌ A. La Creuse - Faux. La Creuse est un département rural et peu touristique.\n中：错误。克勒兹省是农村地区，旅游人数较少。\n\n✅ B. Paris - Correct ! Le département de Paris (75) est le plus visité, car il contient de nombreux monuments et musées.\n中：正确！巴黎省（75）是法国最受游客欢迎的省份，因为这里有很多著名景点和博物馆。\n\n❌ C. La Lozère - Faux. La Lozère est le département le moins peuplé et attire peu de touristes comparé à Paris.\n中：错误。洛泽尔省人口最少，旅游量远低于巴黎。\n\n❌ D. La Haute-Marne - Faux. La Haute-Marne est peu touristique.\n中：错误。上马恩省旅游人数较少。"
  },
  {
    id: "tg0033",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quand peut-on visiter gratuitement des lieux culturels en France ?",
    options: [
      "Tous les lundis",
      "Le 14 juillet",
      "Le premier dimanche du mois",
      "À Noël"
    ],
    answer: 2,
    explanation: "❌ A. Tous les lundis - Faux. Ce n'est pas une règle générale.\n中：错误。不是通用规则。\n\n❌ B. Le 14 juillet - Faux. Le 14 juillet est la fête nationale, mais ce n'est pas un jour de gratuité généralisée.\n中：错误。7月14日是国庆日，但不一定免费。\n\n✅ C. Le premier dimanche du mois - Correct ! De nombreux musées et monuments sont gratuits le premier dimanche du mois.\n中：正确！很多博物馆和纪念馆在每月第一个星期日免费开放。\n\n❌ D. À Noël - Faux. Noël n'est pas un jour de gratuité systématique.\n中：错误。圣诞节不是固定免费日。"
  },
  {
    id: "tg0034",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Combien de personnes parlent français dans le monde ?",
    options: [
      "Environ 80 millions",
      "Environ 150 millions",
      "Environ 300 millions",
      "Environ 600 millions"
    ],
    answer: 2,
    explanation: "❌ A. Environ 80 millions - Faux. 80 millions correspond plutôt au nombre de locuteurs natifs.\n中：错误。约8000万更接近母语使用者数量。\n\n❌ B. Environ 150 millions - Faux. 150 millions trop peu \n中：错误。约1.5亿仍偏低。\n\n✅ C. Environ 300 millions - Correct ! Environ 300 millions de personnes parlent français dans le monde (incluant les locuteurs natifs et ceux qui l'apprennent).\n中：正确！全球约有3亿人使用法语（包括母语和第二语言使用者）。\n\n❌ D. Environ 600 millions - Faux. 600 millions trop élevé.\n中：错误。约6亿偏高。"
  },
  {
    id: "tg0035",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel monument se trouve à Paris ?",
    options: [
      "Le Colisée",
      "La Sagrada Familia",
      "La tour Eiffel",
      "Big Ben"
    ],
    answer: 2,
    explanation: "❌ A. Le Colisée - Faux. Le Colisée est à Rome, en Italie.\n中：错误。斗兽场在意大利罗马。\n\n❌ B. La Sagrada Familia - Faux. La Sagrada Familia est à Barcelone, en Espagne.\n中：错误。圣家堂在西班牙巴塞罗那。\n\n✅ C. La tour Eiffel - Correct ! La tour Eiffel est un monument emblématique de Paris.\n中：正确！埃菲尔铁塔是巴黎标志性建筑。\n\n❌ D. Big Ben - Faux. Big Ben est à Londres, au Royaume-Uni.\n中：错误。大本钟在英国伦敦。"
  },
  {
    id: "tg0036",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Pourquoi la France est-elle la première destination touristique mondiale ?",
    options: [
      "À cause de son climat",
      "Grâce à son patrimoine et ses paysages",
      "Grâce à son industrie",
      "Grâce à sa population"
    ],
    answer: 1,
    explanation: "❌ A. À cause de son climat - Faux. Le climat est varié et agréable, mais ce n'est pas la raison principale.\n中：错误。气候虽然不错，但不是主要原因。\n\n✅ B. Grâce à son patrimoine et ses paysages - Correct ! La France attire le plus de touristes grâce à son patrimoine historique, sa culture, ses musées et ses paysages diversifiés.\n中：正确！法国因其丰富的历史遗产、文化、博物馆以及多样的自然景观而吸引大量游客。\n\n❌ C. Grâce à son industrie - Faux. L'industrie n'est pas la raison principale du tourisme.\n中：错误。工业不是主要原因。\n\n❌ D. Grâce à sa population - Faux. La population n'est pas la raison principale du tourisme.\n中：错误。人口不是主要原因。"
  },
  {
    id: "tg0037",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle métropole est la plus grande de France ?",
    options: [
      "Lyon",
      "Marseille",
      "Lille",
      "Grand Paris"
    ],
    answer: 3,
    explanation: "❌ A. Lyon - Faux. Lyon est une grande métropole, mais elle n'est pas la plus grande.\n中：错误。里昂是大城市群，但不是最大。\n\n❌ B. Marseille - Faux. Marseille est importante, mais pas la plus grande métropole.\n中：错误。马赛不是最大。\n\n❌ C. Lille - Faux. Lille est une métropole importante, mais pas la plus grande.\n中：错误。里尔不是最大。\n\n✅ D. Grand Paris - Correct ! Le Grand Paris (Paris et sa région) est la plus grande métropole de France en population.\n中：正确！大巴黎地区（巴黎及其周边）是法国人口最多、最大的城市群。"
  },
  {
    id: "tg0038",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel est le rôle principal des métropoles ?",
    options: [
      "Produire de l'énergie",
      "Concentrer les fonctions importantes",
      "Cultiver les terres",
      "Protéger la nature"
    ],
    answer: 1,
    explanation: "❌ A. Produire de l'énergie - Faux. Produire de l'énergie n'est pas la fonction principale des métropoles.\n中：错误。生产能源不是大城市群的主要功能。\n\n✅ B. Concentrer les fonctions importantes - Correct ! Les métropoles concentrent les fonctions économiques, politiques, culturelles, éducatives et de recherche.\n中：正确！大城市群集中重要职能，如经济、政治、文化、教育和科研等。\n\n❌ C. Cultiver les terres - Faux. L'agriculture se pratique surtout en zone rurale, pas dans les métropoles.\n中：错误。农业主要在农村，不在大城市群。\n\n❌ D. Protéger la nature - Faux. La protection de la nature n'est pas le rôle principal des métropoles.\n中：错误。保护自然不是主要职能。"
  },
  {
    id: "tg0039",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel secteur emploie le plus de Français ?",
    options: [
      "Primaire",
      "Secondaire",
      "Tertiaire",
      "Agricole"
    ],
    answer: 2,
    explanation: "❌ A. Primaire - Faux. Le secteur primaire (agriculture, pêche) emploie une minorité.\n中：错误。第一产业就业人数较少。\n\n❌ B. Secondaire - Faux. Le secteur secondaire (industrie) emploie moins de personnes que le tertiaire.\n中：错误。第二产业人数少于第三产业。\n\n✅ C. Tertiaire - Correct ! Le secteur tertiaire (services) emploie la majorité des Français.\n中：正确！第三产业（服务业）雇佣了大多数法国人。\n\n❌ D. Agricole - Faux. L'agriculture est incluse dans le primaire, qui emploie moins de personnes.\n中：错误。农业就业人数不多。"
  },
  {
    id: "tg0040",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel aéroport est le plus grand de France ?",
    options: [
      "Paris-Orly",
      "Lyon-Saint-Exupéry",
      "Paris-Charles de Gaulle",
      "Marseille-Provence"
    ],
    answer: 2,
    explanation: "❌ A. Paris-Orly - Faux. Paris-Orly est un grand aéroport, mais il n'est pas le plus grand de France.\n中：错误。巴黎奥利机场很大，但不是法国最大的机场。\n\n❌ B. Lyon-Saint-Exupéry - Faux. Lyon-Saint-Exupéry est important, mais pas le plus grand.\n中：错误。里昂圣埃克苏佩里机场重要，但不是最大。\n\n✅ C. Paris-Charles de Gaulle - Correct ! Paris-Charles de Gaulle est le plus grand aéroport de France en termes de trafic passagers et de taille.\n中：正确！巴黎戴高乐机场在客流量和规模上是法国最大的机场。\n\n❌ D. Marseille-Provence - Faux. Marseille-Provence n'est pas le plus grand aéroport de France.\n中：错误。马赛普罗旺斯机场不是最大。"
  },
  {
    id: "tg0041",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Pourquoi les ports sont-ils importants ?",
    options: [
      "Pour le tourisme seulement",
      "Pour l'agriculture",
      "Pour le commerce mondial",
      "Pour l'éducation"
    ],
    answer: 2,
    explanation: "❌ A. Pour le tourisme seulement - Faux. Les ports servent au tourisme, mais pas uniquement.\n中：错误。港口不仅仅用于旅游。\n\n❌ B. Pour l'agriculture - Faux. L'agriculture ne dépend pas principalement des ports.\n中：错误。农业并不主要依赖港口。\n\n✅ C. Pour le commerce mondial - Correct ! Les ports sont essentiels pour le commerce international (import/export).\n中：正确！港口对全球贸易非常重要，用于进出口。\n\n❌ D. Pour l'éducation - Faux. L'éducation n'est pas la fonction principale des ports.\n中：错误。教育不是港口的主要功能。"
  },
  {
    id: "tg0042",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel port est un grand port maritime français ?",
    options: [
      "Strasbourg",
      "Le Havre",
      "Clermont-Ferrand",
      "Grenoble"
    ],
    answer: 1,
    explanation: "❌ A. Strasbourg - Faux. Strasbourg est un port fluvial sur le Rhin, pas un grand port maritime.\n中：错误。斯特拉斯堡是内河港，不是海港。\n\n✅ B. Le Havre - Correct ! Le Havre est un grand port maritime français sur la Manche.\n中：正确！勒阿弗尔是法国重要海港之一，位于英吉利海峡。\n\n❌ C. Clermont-Ferrand - Faux. Clermont-Ferrand est une ville intérieure sans port maritime.\n中：错误。克莱蒙费朗在内陆，没有海港。\n\n❌ D. Grenoble - Faux. Grenoble est une ville de montagne, sans port maritime.\n中：错误。格勒诺布尔在内陆，没有海港。"
  },
  {
    id: "tg0043",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel rang occupe la ZEE française dans le monde ?",
    options: [
      "1er",
      "2e",
      "5e",
      "10e"
    ],
    answer: 1,
    explanation: "❌ A. 1er - Faux. La France n'a pas la première ZEE mondiale.\n中：错误。法国不是第一。\n\n✅ B. 2e - Correct ! La France possède la deuxième plus grande ZEE au monde, grâce à ses territoires d'outre-mer.\n中：正确！法国因海外领土拥有世界第二大专属经济区。\n\n❌ C. 5e - Faux. La France est plus grande que la 5e position.\n中：错误。法国排名不是第五。\n\n❌ D. 10e - Faux. La France n'est pas 10e.\n中：错误。法国不是第十。"
  },
  {
    id: "tg0044",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qu'est-ce qu'une ZEE ?",
    options: [
      "Une zone agricole",
      "Une zone économique exclusive",
      "Une zone militaire",
      "Une zone touristique"
    ],
    answer: 1,
    explanation: "❌ A. Une zone agricole - Faux. Ce n'est pas une zone agricole.\n中：错误。不是农业区。\n\n✅ B. Une zone économique exclusive - Correct ! La ZEE est une zone maritime où un État a des droits économiques exclusifs (pêche, ressources).\n中：正确！专属经济区是国家拥有经济权利的海域区域。\n\n❌ C. Une zone militaire - Faux. Ce n'est pas une zone militaire.\n中：错误。不是军事区。\n\n❌ D. Une zone touristique - Faux. Ce n'est pas une zone touristique.\n中：错误。不是旅游区。"
  },
  {
    id: "tg0045",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle mer borde le sud de la France ?",
    options: [
      "Mer du Nord",
      "Mer Noire",
      "Mer Baltique",
      "Mer Méditerranée"
    ],
    answer: 3,
    explanation: "❌ A. Mer du Nord - Faux. La mer du Nord est au nord de la France.\n中：错误。北海在法国北部。\n\n❌ B. Mer Noire - Faux. La mer Noire ne touche pas la France.\n中：错误。黑海不在法国附近。\n\n❌ C. Mer Baltique - Faux. La mer Baltique ne touche pas la France.\n中：错误。波罗的海不在法国。\n\n✅ D. Mer Méditerranée - Correct ! La Méditerranée borde le sud de la France.\n中：正确！地中海在法国南部。"
  },
  {
    id: "tg0046",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle montagne sépare la France et l'Espagne ?",
    options: [
      "Les Alpes",
      "Le Jura",
      "Les Pyrénées",
      "Les Vosges"
    ],
    answer: 2,
    explanation: "❌ A. Les Alpes - Faux. Les Alpes séparent la France et l'Italie.\n中：错误。阿尔卑斯山在法国与意大利之间。\n\n❌ B. Le Jura - Faux. Le Jura est entre la France et la Suisse.\n中：错误。侏罗山在法国与瑞士之间。\n\n✅ C. Les Pyrénées - Correct ! Les Pyrénées séparent la France et l'Espagne.\n中：正确！比利牛斯山脉分隔法国和西班牙。\n\n❌ D. Les Vosges - Faux. Les Vosges sont au nord-est de la France, près de l'Allemagne.\n中：错误。孚日山在法国东北部，靠近德国。"
  },
  {
    id: "tg0047",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel fleuve marque une partie de la frontière avec l'Allemagne ?",
    options: [
      "La Seine",
      "Le Rhône",
      "Le Rhin",
      "La Loire"
    ],
    answer: 2,
    explanation: "❌ A. La Seine - Faux. La Seine traverse Paris, mais ne marque pas la frontière avec l'Allemagne.\n中：错误。塞纳河不构成法德边界。\n\n❌ B. Le Rhône - Faux. Le Rhône est au sud-est de la France.\n中：错误。罗纳河在东南部。\n\n✅ C. Le Rhin - Correct ! Le Rhin forme une partie de la frontière franco-allemande.\n中：正确！莱茵河构成法德边界的一部分。\n\n❌ D. La Loire - Faux. La Loire est au centre de la France.\n中：错误。卢瓦尔河在法国中部。"
  },
  {
    id: "tg0048",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Dans quel océan se situe la Guyane ?",
    options: [
      "Pacifique",
      "Indien",
      "Atlantique",
      "Arctique"
    ],
    answer: 2,
    explanation: "❌ A. Pacifique - Faux. La Guyane n'est pas dans l'océan Pacifique.\n中：错误。圭亚那不在太平洋。\n\n❌ B. Indien - Faux. La Guyane n'est pas dans l'océan Indien.\n中：错误。不在印度洋。\n\n✅ C. Atlantique - Correct ! La Guyane se situe sur la côte de l'océan Atlantique.\n中：正确！法属圭亚那位于大西洋沿岸。\n\n❌ D. Arctique - Faux. La Guyane n'est pas dans l'océan Arctique.\n中：错误。不在北极海。"
  },
  {
    id: "tg0049",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quels territoires sont des DROM ?",
    options: [
      "Polynésie et Nouvelle-Calédonie",
      "Guadeloupe et Guyane",
      "Monaco et Andorre",
      "Corse et Bretagne"
    ],
    answer: 1,
    explanation: "❌ A. Polynésie et Nouvelle-Calédonie - Faux. Ces territoires sont des COM, pas des DROM.\n中：错误。属于海外集体领地（COM），不是DROM。\n\n✅ B. Guadeloupe et Guyane - Correct ! La Guadeloupe et la Guyane sont des DROM.\n中：正确！瓜德罗普和圭亚那是法国海外省/大区（DROM）。\n\n❌ C. Monaco et Andorre - Faux. Ce sont des États indépendants.\n中：错误。摩纳哥和安道尔是独立国家。\n\n❌ D. Corse et Bretagne - Faux. Ce sont des régions de métropole.\n中：错误。科西嘉和布列塔尼是本土地区。"
  },
  {
    id: "tg0050",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Combien y a-t-il de départements en France ?",
    options: [
      "96",
      "100",
      "101",
      "110"
    ],
    answer: 2,
    explanation: "❌ A. 96 - Faux. 96 correspond au nombre de départements en métropole uniquement.\n中：错误。96是仅本土省的数量。\n\n❌ B. 100 - Faux. 100 n'est pas un chiffre officiel pour le nombre de départements.\n中：错误。100不是官方数字。\n\n✅ C. 101 - Correct ! La France compte 101 départements au total : 96 en métropole + 5 départements d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte).\n中：正确！法国总共有101个省：本土96个 + 海外5个。\n\n❌ D. 110 - Faux. 110 est trop élevé et n'est pas correct.\n中：错误。110过多，不正确。"
  },
  {
    id: "tg0051",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qu'est-ce que la France métropolitaine ?",
    options: [
      "Les territoires d'outre-mer",
      "Le territoire européen de la France",
      "Les anciennes colonies",
      "Les pays voisins"
    ],
    answer: 1,
    explanation: "❌ A. Les territoires d'outre-mer - Faux. Les territoires d'outre-mer ne font pas partie de la métropole.\n中：错误。海外领土不属于本土。\n\n✅ B. Le territoire européen de la France - Correct ! La France métropolitaine désigne le territoire français situé en Europe (sans les DOM-TOM).\n中：正确！法国本土指位于欧洲的法国领土（不含海外地区）。\n\n❌ C. Les anciennes colonies - Faux. Les anciennes colonies ne sont pas la métropole.\n中：错误。旧殖民地不是本土。\n\n❌ D. Les pays voisins - Faux. Les pays voisins ne sont pas la France métropolitaine.\n中：错误。邻国不是法国本土。"
  },
  {
    id: "tg0052",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "La Guadeloupe se situe dans quel océan ?",
    options: [
      "Océan Indien",
      "Océan Atlantique",
      "Océan Pacifique",
      "Océan Arctique"
    ],
    answer: 1,
    explanation: "❌ A. Océan Indien - Faux. La Guadeloupe est située dans les Caraïbes, donc dans l'océan Atlantique.\n中：错误。瓜德罗普位于加勒比海，属于大西洋。\n\n✅ B. Océan Atlantique - Correct ! La Guadeloupe se trouve dans l'océan Atlantique (Caraïbes).\n中：正确！瓜德罗普位于大西洋（加勒比海区域）。\n\n❌ C. Océan Pacifique - Faux. Elle n'est pas dans le Pacifique.\n中：错误。不在太平洋。\n\n❌ D. Océan Arctique - Faux. Elle n'est pas dans l'Arctique.\n中：错误。不在北极海。"
  },
  {
    id: "tg0053",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "La Martinique se situe dans quel océan ?",
    options: [
      "Océan Pacifique",
      "Océan Atlantique",
      "Océan Indien",
      "Océan Austral"
    ],
    answer: 1,
    explanation: "❌ A. Océan Pacifique - Faux. La Martinique est dans les Caraïbes, pas dans le Pacifique.\n中：错误。马提尼克在加勒比海，不在太平洋。\n\n✅ B. Océan Atlantique - Correct ! La Martinique se situe dans l'océan Atlantique (Caraïbes).\n中：正确！马提尼克位于大西洋（加勒比海）。\n\n❌ C. Océan Indien - Faux. Elle n'est pas dans l'océan Indien.\n中：错误。不在印度洋。\n\n❌ D. Océan Austral - Faux. Elle n'est pas dans l'océan Austral.\n中：错误。不在南冰洋。"
  },
  {
    id: "tg0054",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "La Guyane se situe sur quel continent ?",
    options: [
      "Afrique",
      "Amérique du Sud",
      "Asie",
      "Océanie"
    ],
    answer: 1,
    explanation: "❌ A. Afrique - Faux. La Guyane est située en Amérique du Sud.\n中：错误。圭亚那在南美洲。\n\n✅ B. Amérique du Sud - Correct ! La Guyane se trouve en Amérique du Sud, sur la côte atlantique.\n中：正确！法属圭亚那位于南美洲的大西洋沿岸。\n\n❌ C. Asie - Faux. Elle n'est pas en Asie.\n中：错误。不在亚洲。\n\n❌ D. Océanie - Faux. Elle n'est pas en Océanie.\n中：错误。不在大洋洲。"
  },
  {
    id: "tg0055",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "La Réunion se situe dans quel océan ?",
    options: [
      "Océan Atlantique",
      "Océan Indien",
      "Océan Pacifique",
      "Mer Méditerranée"
    ],
    answer: 1,
    explanation: "❌ A. Océan Atlantique - Faux. La Réunion est dans l'océan Indien.\n中：错误。留尼汪在印度洋。\n\n✅ B. Océan Indien - Correct ! La Réunion se situe dans l'océan Indien, près de Madagascar.\n中：正确！留尼汪位于印度洋，靠近马达加斯加。\n\n❌ C. Océan Pacifique - Faux. Elle n'est pas dans le Pacifique.\n中：错误。不在太平洋。\n\n❌ D. Mer Méditerranée - Faux. Elle n'est pas dans la Méditerranée.\n中：错误。不在地中海。"
  },
  {
    id: "tg0056",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Mayotte se situe dans quel océan ?",
    options: [
      "Océan Indien",
      "Océan Atlantique",
      "Océan Pacifique",
      "Mer Méditerranée"
    ],
    answer: 0,
    explanation: "✅ A. Océan Indien - Correct ! Mayotte se trouve dans l'océan Indien, dans l'archipel des Comores.\n中：正确！马约特位于印度洋，科摩罗群岛一带。\n\n❌ B. Océan Atlantique - Faux. Elle n'est pas dans l'Atlantique.\n中：错误。不在大西洋。\n\n❌ C. Océan Pacifique - Faux. Elle n'est pas dans le Pacifique.\n中：错误。不在太平洋。\n\n❌ D. Mer Méditerranée - Faux. Elle n'est pas dans la Méditerranée.\n中：错误。不在地中海。"
  },
  {
    id: "tg0057",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "La Polynésie française se trouve dans quel océan ?",
    options: [
      "Océan Pacifique",
      "Océan Atlantique",
      "Océan Indien",
      "Mer Méditerranée"
    ],
    answer: 0,
    explanation: "✅ A. Océan Pacifique - Correct ! La Polynésie française se situe dans l'océan Pacifique, en Océanie.\n中：正确！法属波利尼西亚位于太平洋（大洋洲地区）。\n\n❌ B. Océan Atlantique - Faux. Elle n'est pas dans l'Atlantique.\n中：错误。不在大西洋。\n\n❌ C. Océan Indien - Faux. Elle n'est pas dans l'océan Indien.\n中：错误。不在印度洋。\n\n❌ D. Mer Méditerranée - Faux. Elle n'est pas dans la Méditerranée.\n中：错误。不在地中海。"
  },
  {
    id: "tg0058",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "difficile",
    typeQuestion: "examen original",
    question: "La Nouvelle-Calédonie se trouve dans quel océan ?",
    options: [
      "Océan Indien",
      "Océan Pacifique",
      "Océan Atlantique",
      "Mer du Nord"
    ],
    answer: 1,
    explanation: "❌ A. Océan Indien - Faux. La Nouvelle-Calédonie est située dans l'océan Pacifique, pas dans l'océan Indien.\n中：错误。新喀里多尼亚位于太平洋，不在印度洋。\n\n✅ B. Océan Pacifique - Correct ! La Nouvelle-Calédonie se trouve dans l'océan Pacifique, près de l'Australie, en Océanie.\n中：正确！新喀里多尼亚位于太平洋，靠近澳大利亚（大洋洲）。\n\n❌ C. Océan Atlantique - Faux. Elle n'est pas dans l'océan Atlantique.\n中：错误。不在大西洋。\n\n❌ D. Mer du Nord - Faux. Elle n'est pas dans la mer du Nord.\n中：错误。不在北海。"
  },
  {
    id: "tg0059",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel pays ne partage pas de frontière terrestre avec la France ?",
    options: [
      "Suisse",
      "Belgique",
      "Italie",
      "Portugal"
    ],
    answer: 3,
    explanation: "❌ A. Suisse - Faux. La Suisse partage une frontière avec la France.\n中：错误。瑞士与法国接壤。\n\n❌ B. Belgique - Faux. La Belgique partage une frontière avec la France.\n中：错误。比利时与法国接壤。\n\n❌ C. Italie - Faux. L'Italie partage une frontière avec la France.\n中：错误。意大利与法国接壤。\n\n✅ D. Portugal - Correct ! Le Portugal ne partage pas de frontière terrestre avec la France (l'Espagne se trouve entre les deux).\n中：正确！葡萄牙与法国之间隔着西班牙，没有陆地边界。"
  },
  {
    id: "tg0060",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Combien de pays européens ont une frontière terrestre avec la France ?",
    options: [
      "6",
      "8",
      "10",
      "12"
    ],
    answer: 1,
    explanation: "❌ A. 6 - Faux. 6 est trop peu.\n中：错误。6个太少。\n\n✅ B. 8 - Correct ! La France partage des frontières terrestres avec 8 pays européens : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne, Andorre.\n中：正确！法国与8个欧洲国家接壤：比利时、卢森堡、德国、瑞士、意大利、摩纳哥、西班牙、安道尔。\n\n❌ C. 10 - Faux. 10 est trop élevé.\n中：错误。10个太多。\n\n❌ D. 12 - Faux. 12 est trop élevé.\n中：错误。12个太多。"
  },
  {
    id: "tg0061",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel pays est au nord de la France ?",
    options: [
      "Espagne",
      "Belgique",
      "Italie",
      "Suisse"
    ],
    answer: 1,
    explanation: "❌ A. Espagne - Faux. L'Espagne est au sud de la France.\n中：错误。西班牙在法国南部。\n\n✅ B. Belgique - Correct ! La Belgique est au nord de la France.\n中：正确！比利时在法国北部。\n\n❌ C. Italie - Faux. L'Italie est à l'est/sud-est de la France.\n中：错误。意大利在法国东南部。\n\n❌ D. Suisse - Faux. La Suisse est à l'est de la France.\n中：错误。瑞士在法国东部。"
  },
  {
    id: "tg0062",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel pays est à l'est de la France ?",
    options: [
      "Allemagne",
      "Portugal",
      "Maroc",
      "Royaume-Uni"
    ],
    answer: 0,
    explanation: "✅ A. Allemagne - Correct ! L'Allemagne est à l'est de la France.\n中：正确！德国在法国东部。\n\n❌ B. Portugal - Faux. Le Portugal est à l'ouest de la France, mais sans frontière directe.\n中：错误。葡萄牙在法国西边，且与法国不接壤。\n\n❌ C. Maroc - Faux. Le Maroc est en Afrique du Nord.\n中：错误。摩洛哥在北非。\n\n❌ D. Royaume-Uni - Faux. Le Royaume-Uni est au nord-ouest, séparé par la Manche.\n中：错误。英国在西北方向，被英吉利海峡隔开。"
  },
  {
    id: "tg0063",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel pays est au sud-est de la France ?",
    options: [
      "Allemagne",
      "Italie",
      "Espagne",
      "Belgique"
    ],
    answer: 1,
    explanation: "❌ A. Allemagne - Faux. L'Allemagne est plutôt à l'est ou au nord-est de la France, pas au sud-est.\n中：错误。德国在法国东部/东北部，不是东南。\n\n✅ B. Italie - Correct ! L'Italie se trouve au sud-est de la France.\n中：正确！意大利位于法国东南部。\n\n❌ C. Espagne - Faux. L'Espagne est au sud-ouest de la France.\n中：错误。西班牙在法国西南部。\n\n❌ D. Belgique - Faux. La Belgique est au nord de la France.\n中：错误。比利时在法国北部。"
  },
  {
    id: "tg0064",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel pays est au sud-ouest de la France ?",
    options: [
      "Italie",
      "Espagne",
      "Suisse",
      "Luxembourg"
    ],
    answer: 1,
    explanation: "❌ A. Italie - Faux. L'Italie est à l'est/sud-est de la France.\n中：错误。意大利在法国东南部。\n\n✅ B. Espagne - Correct ! L'Espagne est située au sud-ouest de la France.\n中：正确！西班牙在法国西南部。\n\n❌ C. Suisse - Faux. La Suisse est à l'est de la France.\n中：错误。瑞士在法国东部。\n\n❌ D. Luxembourg - Faux. Le Luxembourg est au nord-est de la France.\n中：错误。卢森堡在法国东北部。"
  },
  {
    id: "tg0065",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel pays est à l'est de la France et a une frontière avec la Suisse ?",
    options: [
      "Allemagne",
      "Espagne",
      "Belgique",
      "Portugal"
    ],
    answer: 0,
    explanation: "✅ A. Allemagne - Correct ! L'Allemagne est à l'est de la France et partage aussi une frontière avec la Suisse.\n中：正确！德国在法国东部，并且与瑞士接壤。\n\n❌ B. Espagne - Faux. L'Espagne est au sud-ouest et ne partage pas de frontière avec la Suisse.\n中：错误。西班牙在西南部，不与瑞士接壤。\n\n❌ C. Belgique - Faux. La Belgique ne partage pas de frontière avec la Suisse.\n中：错误。比利时不与瑞士接壤。\n\n❌ D. Portugal - Faux. Le Portugal est à l'ouest et ne touche pas la Suisse.\n中：错误。葡萄牙在西部，不与瑞士接壤。"
  },
  {
    id: "tg0066",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle principauté est enclavée entre la France et l'Espagne ?",
    options: [
      "Monaco",
      "Andorre",
      "Luxembourg",
      "Liechtenstein"
    ],
    answer: 1,
    explanation: "❌ A. Monaco - Faux. Monaco est situé sur la côte méditerranéenne, près de l'Italie.\n中：错误。摩纳哥在地中海沿岸，靠近意大利。\n\n✅ B. Andorre - Correct ! Andorre est une principauté située entre la France et l'Espagne.\n中：正确！安道尔夹在法国和西班牙之间。\n\n❌ C. Luxembourg - Faux. Le Luxembourg est au nord-est de la France, pas entre la France et l'Espagne.\n中：错误。卢森堡在法国东北部。\n\n❌ D. Liechtenstein - Faux. Le Liechtenstein est entre la Suisse et l'Autriche.\n中：错误。列支敦士登在瑞士与奥地利之间。"
  },
  {
    id: "tg0067",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel pays est frontalier de la France et est aussi une principauté ?",
    options: [
      "Monaco",
      "Italie",
      "Allemagne",
      "Belgique"
    ],
    answer: 0,
    explanation: "✅ A. Monaco - Correct ! Monaco est une principauté et partage une frontière avec la France.\n中：正确！摩纳哥是与法国接壤的公国。\n\n❌ B. Italie - Faux. L'Italie est un pays, pas une principauté.\n中：错误。意大利不是公国。\n\n❌ C. Allemagne - Faux. L'Allemagne n'est pas une principauté.\n中：错误。德国不是公国。\n\n❌ D. Belgique - Faux. La Belgique n'est pas une principauté.\n中：错误。比利时不是公国。"
  },
  {
    id: "tg0068",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "La France métropolitaine a une frontière avec quel pays au nord-est ?",
    options: [
      "Portugal",
      "Allemagne",
      "Italie",
      "Espagne"
    ],
    answer: 1,
    explanation: "❌ A. Portugal - Faux. Le Portugal est à l'ouest, sans frontière directe.\n中：错误。葡萄牙在西部且不接壤。\n\n✅ B. Allemagne - Correct ! L'Allemagne est située au nord-est de la France métropolitaine.\n中：正确！德国在法国本土东北方向。\n\n❌ C. Italie - Faux. L'Italie est au sud-est.\n中：错误。意大利在东南部。\n\n❌ D. Espagne - Faux. L'Espagne est au sud-ouest.\n中：错误。西班牙在西南部。"
  },
  {
    id: "tg0069",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle mer borde la France au nord-est ?",
    options: [
      "Mer Méditerranée",
      "Mer du Nord",
      "Mer Noire",
      "Mer Baltique"
    ],
    answer: 1,
    explanation: "❌ A. Mer Méditerranée - Faux. La Méditerranée borde le sud de la France, pas le nord-ouest.\n中：错误。地中海在法国南部。\n\n✅ B. Mer du Nord - Correct ! La mer du Nord borde le nord-ouest de la France (région Hauts-de-France).\n中：正确！北海在法国西北部沿海。\n\n❌ C. Mer Noire - Faux. La mer Noire ne touche pas la France.\n中：错误。黑海不与法国接壤。\n\n❌ D. Mer Baltique - Faux. La mer Baltique ne touche pas la France.\n中：错误。波罗的海不与法国接壤。"
  },
  {
    id: "tg0070",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle mer borde la France au nord ?",
    options: [
      "La Manche",
      "Mer Méditerranée",
      "Mer Noire",
      "Mer Caspienne"
    ],
    answer: 0,
    explanation: "✅ A. La Manche - Correct ! La Manche borde le nord de la France.\n中：正确！英吉利海峡在法国北部沿海。\n\n❌ B. Mer Méditerranée - Faux. La Méditerranée est au sud de la France.\n中：错误。地中海在法国南部。\n\n❌ C. Mer Noire - Faux. La mer Noire ne touche pas la France.\n中：错误。黑海不与法国接壤。\n\n❌ D. Mer Caspienne - Faux. La mer Caspienne ne touche pas la France.\n中：错误。里海不与法国接壤。"
  },
  {
    id: "tg0071",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "La Manche sépare la France de quel pays ?",
    options: [
      "Espagne",
      "Royaume-Uni",
      "Allemagne",
      "Italie"
    ],
    answer: 1,
    explanation: "❌ A. Espagne - Faux. L'Espagne est séparée de la France par les Pyrénées, pas par la Manche.\n中：错误。西班牙与法国由比利牛斯山分隔，不是英吉利海峡。\n\n✅ B. Royaume-Uni - Correct ! La Manche sépare la France du Royaume-Uni.\n中：正确！英吉利海峡把法国和英国分开。\n\n❌ C. Allemagne - Faux. L'Allemagne est une frontière terrestre à l'est, pas séparée par la Manche.\n中：错误。德国与法国是陆地接壤，不是由英吉利海峡隔开。\n\n❌ D. Italie - Faux. L'Italie est au sud-est, séparée par les Alpes, pas par la Manche.\n中：错误。意大利在东南部，隔着阿尔卑斯山。"
  },
  {
    id: "tg0072",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel océan borde la côte ouest de la France ?",
    options: [
      "Pacifique",
      "Atlantique",
      "Indien",
      "Arctique"
    ],
    answer: 1,
    explanation: "❌ A. Pacifique - Faux. L'océan Pacifique est très loin de la France.\n中：错误。太平洋离法国很远。\n\n✅ B. Atlantique - Correct ! La côte ouest de la France borde l'océan Atlantique.\n中：正确！法国西海岸临大西洋。\n\n❌ C. Indien - Faux. L'océan Indien ne touche pas la France métropolitaine.\n中：错误。印度洋不接壤法国本土。\n\n❌ D. Arctique - Faux. La France n'est pas bordée par l'océan Arctique.\n中：错误。法国没有北极海海岸。"
  },
  {
    id: "tg0073",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel océan borde la France en outre-mer avec la Réunion ?",
    options: [
      "Pacifique",
      "Atlantique",
      "Indien",
      "Arctique"
    ],
    answer: 2,
    explanation: "❌ A. Pacifique - Faux. La Réunion n'est pas dans le Pacifique.\n中：错误。留尼汪不在太平洋。\n\n❌ B. Atlantique - Faux. La Réunion n'est pas dans l'Atlantique.\n中：错误。留尼汪不在大西洋。\n\n✅ C. Indien - Correct ! La Réunion est située dans l'océan Indien.\n中：正确！留尼汪位于印度洋。\n\n❌ D. Arctique - Faux. La Réunion n'est pas dans l'Arctique.\n中：错误。留尼汪不在北极海。"
  },
  {
    id: "tg0074",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel océan borde la France en outre-mer avec la Polynésie ?",
    options: [
      "Pacifique",
      "Atlantique",
      "Indien",
      "Arctique"
    ],
    answer: 0,
    explanation: "✅ A. Pacifique - Correct ! La Polynésie française est dans l'océan Pacifique.\n中：正确！法属波利尼西亚位于太平洋。\n\n❌ B. Atlantique - Faux. Elle n'est pas dans l'Atlantique.\n中：错误。不在大西洋。\n\n❌ C. Indien - Faux. Elle n'est pas dans l'océan Indien.\n中：错误。不在印度洋。\n\n❌ D. Arctique - Faux. Elle n'est pas dans l'Arctique.\n中：错误。不在北极海。"
  },
  {
    id: "tg0075",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel océan borde la France en outre-mer avec la Guyane ?",
    options: [
      "Pacifique",
      "Atlantique",
      "Indien",
      "Arctique"
    ],
    answer: 1,
    explanation: "❌ A. Pacifique - Faux. La Guyane est sur l'Atlantique, pas le Pacifique.\n中：错误。圭亚那在大西洋沿岸，不在太平洋。\n\n✅ B. Atlantique - Correct ! La Guyane est bordée par l'océan Atlantique.\n中：正确！法属圭亚那临大西洋。\n\n❌ C. Indien - Faux. Elle n'est pas dans l'océan Indien.\n中：错误。不在印度洋。\n\n❌ D. Arctique - Faux. Elle n'est pas dans l'Arctique.\n中：错误。不在北极海。"
  },
  {
    id: "tg0076",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel océan borde la France en outre-mer avec la Martinique ?",
    options: [
      "Atlantique",
      "Indien",
      "Pacifique",
      "Arctique"
    ],
    answer: 0,
    explanation: "✅ A. Atlantique - Correct ! La Martinique est située dans l'océan Atlantique (Caraïbes).\n中：正确！马提尼克位于大西洋（加勒比海）。\n\n❌ B. Indien - Faux. La Martinique n'est pas dans l'océan Indien.\n中：错误。不在印度洋。\n\n❌ C. Pacifique - Faux. Elle n'est pas dans le Pacifique.\n中：错误。不在太平洋。\n\n❌ D. Arctique - Faux. Elle n'est pas dans l'Arctique.\n中：错误。不在北极海。"
  },
  {
    id: "tg0077",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel océan borde la France en outre-mer avec Mayotte ?",
    options: [
      "Pacifique",
      "Indien",
      "Atlantique",
      "Arctique"
    ],
    answer: 1,
    explanation: "❌ A. Pacifique - Faux. Mayotte n'est pas dans le Pacifique.\n中：错误。不在太平洋。\n\n✅ B. Indien - Correct ! Mayotte se trouve dans l'océan Indien.\n中：正确！马约特位于印度洋。\n\n❌ C. Atlantique - Faux. Elle n'est pas dans l'Atlantique.\n中：错误。不在大西洋。\n\n❌ D. Arctique - Faux. Elle n'est pas dans l'Arctique.\n中：错误。不在北极海。"
  },
  {
    id: "tg0078",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel océan borde la France en outre-mer avec la Nouvelle-Calédonie ?",
    options: [
      "Pacifique",
      "Indien",
      "Atlantique",
      "Arctique"
    ],
    answer: 0,
    explanation: "✅ A. Pacifique - Correct ! La Nouvelle-Calédonie est située dans l'océan Pacifique.\n中：正确！新喀里多尼亚位于太平洋。\n\n❌ B. Indien - Faux. Elle n'est pas dans l'océan Indien.\n中：错误。不在印度洋。\n\n❌ C. Atlantique - Faux. Elle n'est pas dans l'Atlantique.\n中：错误。不在大西洋。\n\n❌ D. Arctique - Faux. Elle n'est pas dans l'Arctique.\n中：错误。不在北极海。"
  },
  {
    id: "tg0079",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle chaîne de montagnes sépare la France et la Suisse ?",
    options: [
      "Pyrénées",
      "Alpes",
      "Massif central",
      "Vosges"
    ],
    answer: 1,
    explanation: "❌ A. Pyrénées - Faux. Les Pyrénées séparent la France de l'Espagne.\n中：错误。比利牛斯山分隔法国和西班牙。\n\n✅ B. Alpes - Correct ! Les Alpes séparent la France et la Suisse.\n中：正确！阿尔卑斯山分隔法国和瑞士。\n\n❌ C. Massif central - Faux. Le Massif central est au centre de la France, pas à la frontière.\n中：错误。中央高原在法国中部，不在边界。\n\n❌ D. Vosges - Faux. Les Vosges sont près de l'Allemagne, pas de la Suisse.\n中：错误。孚日山脉靠近德国。"
  },
  {
    id: "tg0080",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle chaîne de montagnes se situe entre la France et l'Allemagne ?",
    options: [
      "Pyrénées",
      "Alpes",
      "Vosges",
      "Jura"
    ],
    answer: 2,
    explanation: "❌ A. Pyrénées - Faux. Les Pyrénées sont entre la France et l'Espagne.\n中：错误。比利牛斯山在法国与西班牙之间。\n\n❌ B. Alpes - Faux. Les Alpes sont entre la France et l'Italie/Suisse.\n中：错误。阿尔卑斯山在法国与意大利/瑞士之间。\n\n✅ C. Vosges - Correct ! Les Vosges se situent entre la France et l'Allemagne.\n中：正确！孚日山脉位于法国与德国之间。\n\n❌ D. Jura - Faux. Le Jura est plutôt entre la France et la Suisse.\n中：错误。侏罗山脉在法国与瑞士之间。"
  },
  {
    id: "tg0081",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle chaîne de montagnes sépare la France et l'Espagne ?",
    options: [
      "Vosges",
      "Alpes",
      "Pyrénées",
      "Jura"
    ],
    answer: 2,
    explanation: "❌ A. Vosges - Faux. Les Vosges sont entre la France et l'Allemagne.\n中：错误。孚日山脉在法国与德国之间。\n\n❌ B. Alpes - Faux. Les Alpes sont entre la France et l'Italie/Suisse.\n中：错误。阿尔卑斯山在法国与意大利/瑞士之间。\n\n✅ C. Pyrénées - Correct ! Les Pyrénées séparent la France et l'Espagne.\n中：正确！比利牛斯山分隔法国和西班牙。\n\n❌ D. Jura - Faux. Le Jura est entre la France et la Suisse.\n中：错误。侏罗山脉在法国与瑞士之间。"
  },
  {
    id: "tg0082",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle chaîne de montagnes est située à l'est de la France ?",
    options: [
      "Massif central",
      "Alpes",
      "Pyrénées",
      "Vosges"
    ],
    answer: 1,
    explanation: "❌ A. Massif central - Faux. Le Massif central est situé au centre de la France.\n中：错误。中央高原在法国中部。\n\n✅ B. Alpes - Correct ! Les Alpes sont situées à l'est de la France.\n中：正确！阿尔卑斯山位于法国东部。\n\n❌ C. Pyrénées - Faux. Les Pyrénées sont au sud-ouest, entre la France et l'Espagne.\n中：错误。比利牛斯山在法国与西班牙之间。\n\n❌ D. Vosges - Faux. Les Vosges sont au nord-est, mais pas seulement à l'est.\n中：错误。孚日山脉在东北部，不是单纯\"东部\"。"
  },
  {
    id: "tg0083",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle montagne est située au sud-est de la France ?",
    options: [
      "Jura",
      "Vosges",
      "Alpes",
      "Massif central"
    ],
    answer: 2,
    explanation: "❌ A. Jura - Faux. Le Jura est plutôt à l'est, près de la Suisse.\n中：错误。侏罗山脉在东部，靠近瑞士。\n\n❌ B. Vosges - Faux. Les Vosges sont au nord-est.\n中：错误。孚日山脉在东北。\n\n✅ C. Alpes - Correct ! Les Alpes sont au sud-est de la France.\n中：正确！阿尔卑斯山在法国东南部。\n\n❌ D. Massif central - Faux. Le Massif central est au centre du pays.\n中：错误。中央高原在法国中部。"
  },
  {
    id: "tg0084",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle chaîne de montagnes est située au nord-est de la France ?",
    options: [
      "Pyrénées",
      "Vosges",
      "Alpes",
      "Massif central"
    ],
    answer: 1,
    explanation: "❌ A. Pyrénées - Faux. Les Pyrénées sont au sud-ouest.\n中：错误。比利牛斯山在西南。\n\n✅ B. Vosges - Correct ! Les Vosges sont situées au nord-est de la France.\n中：正确！孚日山脉在法国东北部。\n\n❌ C. Alpes - Faux. Les Alpes sont au sud-est.\n中：错误。阿尔卑斯山在东南。\n\n❌ D. Massif central - Faux. Le Massif central est au centre.\n中：错误。中央高原在中部。"
  },
  {
    id: "tg0085",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Le massif du Jura est à la frontière de la France avec quel pays ?",
    options: [
      "Espagne",
      "Italie",
      "Suisse",
      "Allemagne"
    ],
    answer: 2,
    explanation: "❌ A. Espagne - Faux. Les Pyrénées séparent la France de l'Espagne.\n中：错误。比利牛斯山分隔法国和西班牙。\n\n❌ B. Italie - Faux. Le Jura n'est pas à la frontière italienne.\n中：错误。侏罗山脉不在法国与意大利边界。\n\n✅ C. Suisse - Correct ! Le massif du Jura est à la frontière avec la Suisse.\n中：正确！侏罗山脉在法国与瑞士边界。\n\n❌ D. Allemagne - Faux. Les Vosges séparent la France et l'Allemagne.\n中：错误。孚日山脉在法国与德国之间。"
  },
  {
    id: "tg0086",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel fleuve se jette dans la Manche ?",
    options: [
      "La Seine",
      "Le Rhône",
      "La Garonne",
      "Le Rhin"
    ],
    answer: 0,
    explanation: "✅ A. La Seine - Correct ! La Seine se jette dans la Manche au nord-ouest de la France.\n中：正确！塞纳河注入英吉利海峡。\n\n❌ B. Le Rhône - Faux. Le Rhône se jette dans la Méditerranée.\n中：错误。罗讷河注入地中海。\n\n❌ C. La Garonne - Faux. La Garonne se jette dans l'Atlantique.\n中：错误。加龙河注入大西洋。\n\n❌ D. Le Rhin - Faux. Le Rhin se jette dans la mer du Nord.\n中：错误。莱茵河注入北海。"
  },
  {
    id: "tg0087",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel fleuve est le plus long de France ?",
    options: [
      "La Seine",
      "La Loire",
      "Le Rhône",
      "La Garonne"
    ],
    answer: 1,
    explanation: "❌ A. La Seine - Faux. La Seine n'est pas la plus longue.\n中：错误。塞纳河不是最长。\n\n✅ B. La Loire - Correct ! La Loire est le plus long fleuve de France.\n中：正确！卢瓦尔河是法国最长河。\n\n❌ C. Le Rhône - Faux. Le Rhône est long mais pas le plus long en France.\n中：错误。罗讷河很长，但不是最长。\n\n❌ D. La Garonne - Faux. La Garonne n'est pas la plus longue.\n中：错误。加龙河不是最长。"
  },
  {
    id: "tg0088",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel fleuve traverse Lyon ?",
    options: [
      "La Loire",
      "Le Rhône",
      "La Seine",
      "La Garonne"
    ],
    answer: 1,
    explanation: "❌ A. La Loire - Faux. La Loire ne traverse pas Lyon.\n中：错误。卢瓦尔河不经过里昂。\n\n✅ B. Le Rhône - Correct ! Le Rhône traverse Lyon.\n中：正确！罗讷河流经里昂。\n\n❌ C. La Seine - Faux. La Seine ne traverse pas Lyon.\n中：错误。塞纳河不经过里昂。\n\n❌ D. La Garonne - Faux. La Garonne ne traverse pas Lyon.\n中：错误。加龙河不经过里昂。"
  },
  {
    id: "tg0089",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel fleuve traverse Bordeaux ?",
    options: [
      "La Seine",
      "La Loire",
      "La Garonne",
      "Le Rhône"
    ],
    answer: 2,
    explanation: "❌ A. La Seine - Faux. La Seine est à Paris, pas à Bordeaux.\n中：错误。塞纳河在巴黎，不在波尔多。\n\n❌ B. La Loire - Faux. La Loire ne traverse pas Bordeaux.\n中：错误。卢瓦尔河不经过波尔多。\n\n✅ C. La Garonne - Correct ! La Garonne traverse Bordeaux.\n中：正确！加龙河流经波尔多。\n\n❌ D. Le Rhône - Faux. Le Rhône ne traverse pas Bordeaux.\n中：错误。罗讷河不经过波尔多。"
  },
  {
    id: "tg0090",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel fleuve traverse Toulouse ?",
    options: [
      "La Seine",
      "La Garonne",
      "Le Rhône",
      "La Loire"
    ],
    answer: 1,
    explanation: "❌ A. La Seine - Faux. La Seine est loin de Toulouse.\n中：错误。塞纳河离图卢兹很远。\n\n✅ B. La Garonne - Correct ! La Garonne traverse Toulouse.\n中：正确！加龙河流经图卢兹。\n\n❌ C. Le Rhône - Faux. Le Rhône ne traverse pas Toulouse.\n中：错误。罗讷河不经过图卢兹。\n\n❌ D. La Loire - Faux. La Loire ne traverse pas Toulouse.\n中：错误。卢瓦尔河不经过图卢兹。"
  },
  {
    id: "tg0091",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel fleuve prend sa source en Suisse ?",
    options: [
      "La Loire",
      "Le Rhône",
      "La Seine",
      "La Garonne"
    ],
    answer: 1,
    explanation: "❌ A. La Loire - Faux. La Loire prend sa source en France.\n中：错误。卢瓦尔河源头在法国。\n\n✅ B. Le Rhône - Correct ! Le Rhône prend sa source en Suisse (lac Léman).\n中：正确！罗讷河源头在瑞士（日内瓦湖）。\n\n❌ C. La Seine - Faux. La Seine prend sa source en France.\n中：错误。塞纳河源头在法国。\n\n❌ D. La Garonne - Faux. La Garonne prend sa source en Espagne.\n中：错误。加龙河源头在西班牙。"
  },
  {
    id: "tg0092",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel fleuve sert de frontière naturelle avec l'Allemagne ?",
    options: [
      "La Seine",
      "Le Rhin",
      "La Loire",
      "Le Rhône"
    ],
    answer: 1,
    explanation: "❌ A. La Seine - Faux. La Seine est surtout à Paris.\n中：错误。塞纳河主要在巴黎流经。\n\n✅ B. Le Rhin - Correct ! Le Rhin sert de frontière naturelle entre la France et l'Allemagne.\n中：正确！莱茵河是法国与德国的自然边界。\n\n❌ C. La Loire - Faux. La Loire est au centre de la France.\n中：错误。卢瓦尔河在法国中部。\n\n❌ D. Le Rhône - Faux. Le Rhône est au sud-est.\n中：错误。罗讷河在东南部。"
  },
{
  id: "tg0093",
  type: "carte multi",
  category: "Territoires et géographie",
  difficulté: "simple",
  typeQuestion: "examen original",
  question: "Quelle proportion de Français vit en ville environ ?",
  options: [
    "30%",
    "50%",
    "70%",
    "81%"
  ],
  answer: 3,
  explanation: "❌ A. 30% - Faux. 30% est beaucoup trop faible par rapport à la réalité.\n中：错误。30%与实际情况相比明显过低。\n\n❌ B. 50% - Faux. 50% reste inférieur à la proportion réelle de la population urbaine.\n中：错误。50%仍然低于实际的城市人口比例。\n\n❌ C. 70% - Faux. 70% est proche, mais inférieur au chiffre réel.\n中：错误。70%比较接近，但仍低于真实数据。\n\n✅ D. 81% - Correct ! Environ 81% des Français vivent en ville.\n中：正确！ 大约81%的法国人居住在城市。"
}
,
  {
    id: "tg0094",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel terme décrit une grande ville et son espace environnant ?",
    options: [
      "Un département",
      "Une commune",
      "Une aire urbaine",
      "Une région"
    ],
    answer: 2,
    explanation: "❌ A. Un département - Faux. Un département est une division administrative.\n中：错误。省是行政区划。\n\n❌ B. Une commune - Faux. Une commune est une ville ou village (niveau local).\n中：错误。市镇是基层行政单位。\n\n✅ C. Une aire urbaine - Correct ! Une aire urbaine désigne une grande ville et sa périphérie.\n中：正确！城市区指大城市及其周边区域。\n\n❌ D. Une région - Faux. Une région est une division administrative plus large.\n中：错误。大区是更大的行政区域。"
  },
  {
    id: "tg0095",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle ville est une grande métropole du Sud de la France ?",
    options: [
      "Lille",
      "Lyon",
      "Marseille",
      "Strasbourg"
    ],
    answer: 2,
    explanation: "❌ A. Lille - Faux. Lille est dans le nord.\n中：错误。里尔在北部。\n\n❌ B. Lyon - Faux. Lyon est dans le centre-est.\n中：错误。里昂在中东部。\n\n✅ C. Marseille - Correct ! Marseille est une grande métropole du Sud.\n中：正确！马赛是法国南部的大都市。\n\n❌ D. Strasbourg - Faux. Strasbourg est dans l'est.\n中：错误。斯特拉斯堡在东部。"
  },
  {
    id: "tg0096",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle ville est une métropole du Sud-Ouest ?",
    options: [
      "Toulouse",
      "Nancy",
      "Nantes",
      "Reims"
    ],
    answer: 0,
    explanation: "✅ A. Toulouse - Correct ! Toulouse est une grande métropole du Sud-Ouest.\n中：正确！图卢兹是西南部的大都市。\n\n❌ B. Nancy - Faux. Nancy est dans l'est.\n中：错误。南锡在东部。\n\n❌ C. Nantes - Faux. Nantes est dans l'ouest.\n中：错误。南特在西部。\n\n❌ D. Reims - Faux. Reims est dans le nord-est.\n中：错误。兰斯在东北。"
  },
  {
    id: "tg0097",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle ville est située au bord de la mer Méditerranée et est une grande métropole ?",
    options: [
      "Lyon",
      "Marseille",
      "Bordeaux",
      "Lille"
    ],
    answer: 1,
    explanation: "❌ A. Lyon - Faux. Lyon n'est pas au bord de la mer.\n中：错误。里昂不临海。\n\n✅ B. Marseille - Correct ! Marseille est au bord de la Méditerranée.\n中：正确！马赛位于地中海沿岸。\n\n❌ C. Bordeaux - Faux. Bordeaux est au bord de l'Atlantique.\n中：错误。波尔多在大西洋沿岸。\n\n❌ D. Lille - Faux. Lille est à l'intérieur des terres.\n中：错误。里尔不临海。"
  },
  {
    id: "tg0098",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle ville est une grande métropole du Nord de la France ?",
    options: [
      "Strasbourg",
      "Lille",
      "Nice",
      "Bordeaux"
    ],
    answer: 1,
    explanation: "❌ A. Strasbourg - Faux. Strasbourg est dans l'est.\n中：错误。斯特拉斯堡在东部。\n\n✅ B. Lille - Correct ! Lille est une grande métropole du Nord.\n中：正确！里尔是北部大都市。\n\n❌ C. Nice - Faux. Nice est dans le sud-est.\n中：错误。尼斯在东南部。\n\n❌ D. Bordeaux - Faux. Bordeaux est dans le sud-ouest.\n中：错误。波尔多在西南。"
  },
  {
    id: "tg0099",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Pourquoi l'agriculture française doit-elle évoluer aujourd'hui ?",
    options: [
      "À cause de l'urbanisation et du changement climatique",
      "Parce qu'il n'y a plus de terres",
      "Parce qu'il n'y a plus d'agriculteurs",
      "Parce que la France n'exporte plus"
    ],
    answer: 0,
    explanation: "✅ A. À cause de l'urbanisation et du changement climatique - Correct ! L'urbanisation réduit les terres agricoles et le climat change affecte la production.\n中：正确！城市化减少农田，气候变化影响产量。\n\n❌ B. Parce qu'il n'y a plus de terres - Faux. Il y a encore des terres, mais elles diminuent.\n中：错误。仍有土地，但在减少。\n\n❌ C. Parce qu'il n'y a plus d'agriculteurs - Faux. Il y a encore des agriculteurs, mais leur nombre baisse.\n中：错误。农民仍在，但数量减少。\n\n❌ D. Parce que la France n'exporte plus - Faux. La France exporte encore beaucoup, notamment en agriculture.\n中：错误。法国仍然大量出口农产品。"
  },
  {
    id: "tg0100",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel secteur est le plus innovant en France ?",
    options: [
      "L'agriculture",
      "L'industrie pharmaceutique et aéronautique",
      "Le textile",
      "La pêche"
    ],
    answer: 1,
    explanation: "❌ A. L'agriculture - Faux. L'agriculture innove, mais ce n'est pas le secteur le plus innovant.\n中：错误。农业有创新，但不是最具创新性。\n\n✅ B. L'industrie pharmaceutique et aéronautique - Correct ! Ces secteurs sont très innovants (recherche, technologie, etc.).\n中：正确！医药和航空工业在研发与技术上非常创新。\n\n❌ C. Le textile - Faux. Le textile est moins innovant aujourd'hui.\n中：错误。纺织业今天创新性较低。\n\n❌ D. La pêche - Faux. La pêche n'est pas le secteur le plus innovant.\n中：错误。渔业不是最具创新性。"
  },
  {
    id: "tg0101",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel pays a le plus d'habitants en Europe ?",
    options: [
      "France",
      "Allemagne",
      "Italie",
      "Espagne"
    ],
    answer: 1,
    explanation: "❌ A. France - Faux. La France n'est pas le pays le plus peuplé d'Europe.\n中：错误。法国不是欧洲人口最多的国家。\n\n✅ B. Allemagne - Correct ! L'Allemagne est le pays le plus peuplé d'Europe.\n中：正确！德国是欧洲人口最多国家。\n\n❌ C. Italie - Faux. L'Italie est moins peuplée que l'Allemagne.\n中：错误。意大利人口少于德国。\n\n❌ D. Espagne - Faux. L'Espagne est aussi moins peuplée que l'Allemagne.\n中：错误。西班牙人口少于德国。"
  },
  {
    id: "tg0102",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "La France est située dans quelle partie de l'Europe ?",
    options: [
      "Est",
      "Ouest",
      "Nord",
      "Sud"
    ],
    answer: 1,
    explanation: "❌ A. Est - Faux. La France n'est pas à l'est de l'Europe.\n中：错误。法国不在欧洲东部。\n\n✅ B. Ouest - Correct ! La France est située en Europe de l'Ouest.\n中：正确！法国位于欧洲西部。\n\n❌ C. Nord - Faux. La France n'est pas au nord de l'Europe.\n中：错误。法国不在欧洲北部。\n\n❌ D. Sud - Faux. La France n'est pas uniquement au sud de l'Europe.\n中：错误。法国不在欧洲南部。"
  },
  {
    id: "tg0103",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel couloir européen traverse la France du Nord-ouest au Sud-est ?",
    options: [
      "Corridor Atlantique",
      "Corridor Nord-ouest/Sud-est",
      "Corridor Méditerranéen",
      "Corridor Arctique"
    ],
    answer: 1,
    explanation: "❌ A. Corridor Atlantique - Faux. Le corridor atlantique longe la côte ouest.\n中：错误。大西洋走廊沿西海岸。\n\n✅ B. Corridor Nord-ouest/Sud-est - Correct ! Ce corridor traverse la France du nord-ouest au sud-est.\n中：正确！该走廊从法国西北到东南穿过法国。\n\n❌ C. Corridor Méditerranéen - Faux. Le corridor méditerranéen longe le sud.\n中：错误。地中海走廊沿南部。\n\n❌ D. Corridor Arctique - Faux. Il n'existe pas en France.\n中：错误。法国没有北极走廊。"
  },
  {
    id: "tg0104",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle place occupe la France dans l'économie mondiale (2025) ?",
    options: [
      "3e",
      "7e",
      "10e",
      "15e"
    ],
    answer: 1,
    explanation: "❌ A. 3e - Faux. La France n'est pas 3e.\n中：错误。法国不是第三。\n\n✅ B. 7e - Correct ! La France est généralement classée 7e économie mondiale (PIB).\n中：正确！法国通常被排为全球第7大经济体（按GDP）。\n\n❌ C. 10e - Faux. La France est mieux classée que 10e.\n中：错误。法国排名高于第10。\n\n❌ D. 15e - Faux. Trop bas.\n中：错误。太低。"
  },
  {
    id: "tg0105",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Pourquoi la France est-elle une puissance diplomatique ?",
    options: [
      "Parce qu'elle est petite",
      "Parce qu'elle est membre permanent du Conseil de sécurité de l'ONU",
      "Parce qu'elle a peu de frontières",
      "Parce qu'elle n'a pas d'outre-mer"
    ],
    answer: 1,
    explanation: "❌ A. Parce qu'elle est petite - Faux. La taille n'est pas la raison.\n中：错误。体积小不是原因。\n\n✅ B. Parce qu'elle est membre permanent du Conseil de sécurité de l'ONU - Correct ! La France est membre permanent du Conseil de sécurité, ce qui lui donne un rôle diplomatique important.\n中：正确！法国是联合国安理会常任理事国，因此具有重要外交地位。\n\n❌ C. Parce qu'elle a peu de frontières - Faux. La France a de nombreuses frontières.\n中：错误。法国边界很多。\n\n❌ D. Parce qu'elle n'a pas d'outre-mer - Faux. La France a des territoires d'outre-mer.\n中：错误。法国有海外领土。"
  },
  {
    id: "tg0106",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel processus décrit la fin de l'empire colonial ?",
    options: [
      "La colonisation",
      "La décolonisation",
      "L'industrialisation",
      "L'immigration"
    ],
    answer: 1,
    explanation: "❌ A. La colonisation - Faux. La colonisation désigne l'établissement d'une colonie, pas sa fin.\n中：错误。殖民指建立殖民地，不是结束。\n\n✅ B. La décolonisation - Correct ! La décolonisation désigne la fin des empires coloniaux.\n中：正确！去殖民化指殖民帝国的结束。\n\n❌ C. L'industrialisation - Faux. Ce n'est pas la fin de l'empire colonial.\n中：错误。工业化不是殖民帝国结束的过程。\n\n❌ D. L'immigration - Faux. L'immigration n'est pas la fin de l'empire colonial.\n中：错误。移民不是殖民帝国结束的过程。"
  },
  {
    id: "tg0107",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Dans quel siècle la décolonisation s'accélère-t-elle après la Seconde Guerre mondiale ?",
    options: [
      "XVIIIe",
      "XIXe",
      "XXe",
      "XXIe"
    ],
    answer: 2,
    explanation: "❌ A. XVIIIe - Faux. Trop ancien.\n中：错误。太早了。\n\n❌ B. XIXe - Faux. 仍然太早。\n中：错误。仍然太早。\n\n✅ C. XXe - Correct ! Après la Seconde Guerre mondiale, la décolonisation s'accélère au XXe siècle.\n中：正确！二战后去殖民化在20世纪加速。\n\n❌ D. XXIe - Faux. Trop tard.\n中：错误。太晚了。"
  },
  {
    id: "tg0108",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle guerre marque la fin de l'Algérie comme colonie française ?",
    options: [
      "La guerre d'Indochine",
      "La guerre d'Algérie",
      "La Première Guerre mondiale",
      "La guerre de Crimée"
    ],
    answer: 1,
    explanation: "❌ A. La guerre d'Indochine - Faux. Cette guerre concerne l'Asie du Sud-Est.\n中：错误。这场战争在东南亚。\n\n✅ B. La guerre d'Algérie - Correct ! La guerre d'Algérie (1954-1962) marque la fin de la colonie.\n中：正确！阿尔及利亚战争标志着阿尔及利亚结束殖民统治。\n\n❌ C. La Première Guerre mondiale - Faux. Ce n'est pas lié à l'indépendance de l'Algérie.\n中：错误。与阿尔及利亚独立无关。\n\n❌ D. La guerre de Crimée - Faux. Cette guerre est au XIXe siècle, sans lien direct.\n中：错误。克里米亚战争与此无关。"
  },
  {
    id: "tg0109",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel est le principal port de commerce du Nord de la France ?",
    options: [
      "Marseille",
      "Dunkerque",
      "Nantes",
      "Nice"
    ],
    answer: 1,
    explanation: "❌ A. Marseille - Faux. Marseille est dans le sud.\n中：错误。马赛在南部。\n\n✅ B. Dunkerque - Correct ! Dunkerque est un grand port commercial du nord.\n中：正确！敦刻尔克是北部主要商港。\n\n❌ C. Nantes - Faux. Nantes est à l'ouest, mais pas le principal port du nord.\n中：错误。南特在西部，不是北部主要港口。\n\n❌ D. Nice - Faux. Nice n'est pas un port commercial majeur.\n中：错误。尼斯不是主要商港。"
  },
  {
    id: "tg0110",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel port français est situé en Normandie et sur la Manche ?",
    options: [
      "Le Havre",
      "Bordeaux",
      "Marseille",
      "Lyon"
    ],
    answer: 0,
    explanation: "✅ A. Le Havre - Correct ! Le Havre est en Normandie, sur la Manche.\n中：正确！勒阿弗尔在诺曼底，临英吉利海峡。\n\n❌ B. Bordeaux - Faux. Bordeaux est sur l'Atlantique.\n中：错误。波尔多在大西洋沿岸。\n\n❌ C. Marseille - Faux. Marseille est sur la Méditerranée.\n中：错误。马赛在地中海沿岸。\n\n❌ D. Lyon - Faux. Lyon n'est pas un port maritime.\n中：错误。里昂不是海港。"
  },
  {
    id: "tg0111",
    type: "carte multi",
    category: "Territoires et géographie",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel port est situé en Méditerranée et est un grand port de France ?",
    options: [
      "Le Havre",
      "Marseille",
      "Nantes",
      "Rouen"
    ],
    answer: 1,
    explanation: "❌ A. Le Havre - Faux. Le Havre est sur la Manche.\n中：错误。勒阿弗尔在英吉利海峡。\n\n✅ B. Marseille - Correct ! Marseille est un grand port maritime en Méditerranée.\n中：正确！马赛是地中海大港。\n\n❌ C. Nantes - Faux. Nantes est sur l'Atlantique.\n中：错误。南特在大西洋沿岸。\n\n❌ D. Rouen - Faux. Rouen est sur la Seine, pas en Méditerranée.\n中：错误。鲁昂在塞纳河畔，不在地中海。"
  },

{
  id: "tg0112",
  type: "carte multi",
  category: "Territoires et géographie",
  difficulté: "simple",
  typeQuestion: "examen original",
  question: "À quelle occasion peut-on visiter gratuitement de nombreux lieux culturels en France ?",
  options: [
    "Le 14 juillet",
    "La Journée européenne du patrimoine",
    "Le premier lundi du mois",
    "À Pâques"
  ],
  answer: 1,
  explanation: "❌ A. Le 14 juillet - Faux. Le 14 juillet est la fête nationale, mais les lieux culturels ne sont pas systématiquement gratuits ce jour-là.\n中：错误。7 月 14 日是法国国庆日，但文化场所并不一定在这一天免费开放。\n\n✅ B. La Journée européenne du patrimoine - Correct ! Lors de la Journée européenne du patrimoine, de nombreux musées et monuments sont ouverts gratuitement au public.\n中：正确！在欧洲文化遗产日，许多博物馆和历史遗迹向公众免费开放。\n\n❌ C. Le premier lundi du mois - Faux. En France, la gratuité concerne le premier dimanche du mois, pas le lundi.\n中：错误。在法国，免费开放通常是每月的第一个星期日，而不是星期一。\n\n❌ D. À Pâques - Faux. Pâques est une fête religieuse, mais elle n’entraîne pas la gratuité générale des lieux culturels.\n中：错误。复活节是宗教节日，但并不会让文化场所普遍免费开放。"
},




  {
    id: "gh0001",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "En quelle année a débuté la Révolution française ?",
    options: ["1776", "1789", "1815", "1914"],
    answer: 1,
    explanation: `❌ A. 1776 - Faux. 1776 correspond à la Révolution américaine.\n中：错误。1776是美国独立革命年份。\n\n✅ B. 1789 - Correct ! La Révolution française a débuté en 1789.\n中：正确！法国大革命始于1789年。\n\n❌ C. 1815 - Faux. 1815 est la fin de l'ère napoléonienne (Waterloo).\n中：错误。1815是拿破仑时代结束（滑铁卢战役）。\n\n❌ D. 1914 - Faux. 1914 est le début de la Première Guerre mondiale.\n中：错误。1914是第一次世界大战开始。`
  },
  {
    id: "gh0002",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui était Napoléon Ier ?",
    options: ["Un écrivain", "Un roi d'Angleterre", "Un empereur français", "Un philosophe"],
    answer: 2,
    explanation: `❌ A. Un écrivain - Faux. Napoléon n'était pas écrivain.\n中：错误。拿破仑不是作家。\n\n❌ B. Un roi d'Angleterre - Faux. Il n'a jamais été roi d'Angleterre.\n中：错误。他从未当过英国国王。\n\n✅ C. Un empereur français - Correct ! Napoléon Ier fut empereur des Français.\n中：正确！拿破仑一世是法国皇帝。\n\n❌ D. Un philosophe - Faux. Ce n'est pas un philosophe.\n中：错误。他不是哲学家。`
  },
  {
    id: "gh0003",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Lequel de ces personnages historiques est français ?",
    options: ["George Washington", "Napoléon Bonaparte", "Winston Churchill", "Abraham Lincoln"],
    answer: 1,
    explanation: `❌ A. George Washington - Faux. Washington était américain.\n中：错误。华盛顿是美国人。\n\n✅ B. Napoléon Bonaparte - Correct ! Napoléon est un personnage historique français.\n中：正确！拿破仑是法国历史人物。\n\n❌ C. Winston Churchill - Faux. Churchill était britannique.\n中：错误。丘吉尔是英国人。\n\n❌ D. Abraham Lincoln - Faux. Lincoln était américain.\n中：错误。林肯是美国人。`
  },
  {
    id: "gh0004",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Dans quelle République est-on aujourd'hui ?",
    options: ["La IIIe République", "La IVe République", "La Ve République", "La VIe République"],
    answer: 2,
    explanation: `❌ A. La IIIe République - Faux. La IIIe République a existé de 1870 à 1940.\n中：错误。第三共和国存在于1870-1940。\n\n❌ B. La IVe République - Faux. La IVe République a existé de 1946 à 1958.\n中：错误。第四共和国存在于1946-1958。\n\n✅ C. La Ve République - Correct ! La Ve République existe depuis 1958.\n中：正确！第五共和国自1958年至今。\n\n❌ D. La VIe République - Faux. Elle n'existe pas encore.\n中：错误。第六共和国尚未建立。`
  },
  {
    id: "gh0005",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qu'est-ce que la Shoah ?",
    options: ["Une guerre mondiale", "Un traité européen", "Le génocide des Juifs", "Une révolution française"],
    answer: 2,
    explanation: `❌ A. Une guerre mondiale - Faux. Ce n'est pas une guerre.\n中：错误。它不是战争。\n\n❌ B. Un traité européen - Faux. Ce n'est pas un traité.\n中：错误。它不是条约。\n\n✅ C. Le génocide des Juifs - Correct ! La Shoah désigne l'extermination des Juifs pendant la Seconde Guerre mondiale.\n中：正确！\"大屠杀\"指二战期间对犹太人的灭绝。\n\n❌ D. Une révolution française - Faux. Ce n'est pas la Révolution française.\n中：错误。它不是法国大革命。`
  },
  {
    id: "gh0006",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui a rendu l'école gratuite, laïque et obligatoire ?",
    options: ["Napoléon Ier", "Jules Ferry", "Charles de Gaulle", "Louis XIV"],
    answer: 1,
    explanation: `❌ A. Napoléon Ier - Faux. Napoléon n'a pas instauré ces lois.\n中：错误。拿破仑没有制定这些法律。\n\n✅ B. Jules Ferry - Correct ! Jules Ferry a rendu l'école gratuite, laïque et obligatoire.\n中：正确！朱尔·费里使学校免费、世俗、义务化。\n\n❌ C. Charles de Gaulle - Faux. De Gaulle n'a pas fait cette réforme.\n中：错误。戴高乐没有实施该改革。\n\n❌ D. Louis XIV - Faux. Louis XIV est un roi du XVIIe siècle.\n中：错误。路易十四是17世纪国王。`
  },
  {
    id: "gh0007",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quand a eu lieu la Seconde Guerre mondiale ?",
    options: ["1914--1918", "1939--1945", "1945--1950", "1929--1933"],
    answer: 1,
    explanation: `❌ A. 1914--1918 - Faux. C'est la Première Guerre mondiale.\n中：错误。1914-1918是第一次世界大战。\n\n✅ B. 1939--1945 - Correct ! La Seconde Guerre mondiale a eu lieu de 1939 à 1945.\n中：正确！二战发生于1939-1945。\n\n❌ C. 1945--1950 - Faux. Après la guerre.\n中：错误。那是战后时期。\n\n❌ D. 1929--1933 - Faux. C'est la crise économique (Grande Dépression).\n中：错误。那是经济大萧条时期。`
  },
  {
    id: "gh0008",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quand a eu lieu la Première Guerre mondiale ?",
    options: ["1870--1871", "1914--1918", "1939--1945", "1954--1962"],
    answer: 1,
    explanation: `❌ A. 1870--1871 - Faux. C'est la guerre franco-prussienne.\n中：错误。1870-1871是普法战争。\n\n✅ B. 1914--1918 - Correct ! La Première Guerre mondiale a eu lieu de 1914 à 1918.\n中：正确！第一次世界大战发生于1914-1918。\n\n❌ C. 1939--1945 - Faux. C'est la Seconde Guerre mondiale.\n中：错误。那是第二次世界大战。\n\n❌ D. 1954--1962 - Faux. C'est la guerre d'Algérie.\n中：错误。那是阿尔及利亚战争。`
  },
  {
    id: "gh0009",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "En quelle année a été créée la Communauté Économique Européenne (CEE) ?",
    options: ["1945", "1957", "1989", "2002"],
    answer: 1,
    explanation: `❌ A. 1945 - Faux. 1945 est la fin de la Seconde Guerre mondiale.\n中：错误。1945是二战结束。\n\n✅ B. 1957 - Correct ! La CEE a été créée en 1957 par le traité de Rome.\n中：正确！1957年罗马条约成立欧洲经济共同体。\n\n❌ C. 1989 - Faux. 1989 est la chute du mur de Berlin.\n中：错误。1989年柏林墙倒塌。\n\n❌ D. 2002 - Faux. 2002 est l'année de l'euro en monnaie.\n中：错误。2002年欧元正式流通。`
  },
  {
    id: "gh0010",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    options: ["La prise de la Bastille", "L'armistice de 1918", "La fin de la Seconde Guerre mondiale", "La fête nationale"],
    answer: 1,
    explanation: `❌ A. La prise de la Bastille - Faux. La prise de la Bastille est le 14 juillet.\n中：错误。攻占巴士底狱是7月14日。\n\n✅ B. L'armistice de 1918 - Correct ! Le 11 novembre commémore l'armistice de 1918.\n中：正确！11月11日纪念1918年停战。\n\n❌ C. La fin de la Seconde Guerre mondiale - Faux. La fin de la Seconde Guerre mondiale est en 1945.\n中：错误。二战结束是1945年。\n\n❌ D. La fête nationale - Faux. La fête nationale est le 14 juillet.\n中：错误。国庆日是7月14日。`
  },
   {
    id: "gh0011",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original", // 11o简单 → 有o
    question: "Qui a été le premier Président élu sous la Ve République ?",
    options: ["François Mitterrand", "Charles de Gaulle", "Georges Pompidou", "Valéry Giscard d'Estaing"],
    answer: 1,
    explanation: `❌ A. François Mitterrand - Faux. Il a été élu plus tard (1981).\n中：错误。密特朗是后来的总统（1981）。\n\n✅ B. Charles de Gaulle - Correct ! Charles de Gaulle a été le premier président de la Ve République.\n中：正确！戴高乐是第五共和国首任总统。\n\n❌ C. Georges Pompidou - Faux. Il a succédé à de Gaulle.\n中：错误。他在戴高乐之后。\n\n❌ D. Valéry Giscard d'Estaing - Faux. Il a été élu en 1974.\n中：错误。他在1974年当选。`
  },
  {
    id: "gh0012",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 12o中 → 有o
    question: "En quelle année l'esclavage a-t-il été aboli définitivement en France ?",
    options: ["1789", "1794", "1848", "1945"],
    answer: 2,
    explanation: `❌ A. 1789 - Faux. 1789 correspond au début de la Révolution, pas à l'abolition définitive de l'esclavage.\n中：错误。1789是大革命开始，不是最终废除奴隶制。\n\n❌ B. 1794 - Faux. C'est une première abolition, mais elle est ensuite rétablie par Napoléon.\n中：错误。1794是第一次废除，但后来拿破仑恢复了奴隶制。\n\n✅ C. 1848 - Correct ! L'esclavage est aboli définitivement en 1848 en France.\n中：正确！法国在1848年最终废除奴隶制。\n\n❌ D. 1945 - Faux. 1945 concerne la fin de la Seconde Guerre mondiale, pas l'esclavage.\n中：错误。1945与奴隶制无关。`
  },
  {
    id: "gh0013",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 13o中 → 有o
    question: "Depuis quelle année l'école publique est-elle gratuite ?",
    options: ["1789", "1881", "1905", "1958"],
    answer: 1,
    explanation: `❌ A. 1789 - Faux. La gratuité n'est pas encore instaurée en 1789.\n中：错误。1789还没有实行免费教育。\n\n✅ B. 1881 - Correct ! L'école publique devient gratuite en 1881 grâce aux lois Ferry.\n中：正确！1881年费里法使公立教育免费。\n\n❌ C. 1905 - Faux. 1905 correspond à la loi de séparation de l'Église et de l'État.\n中：错误。1905年是政教分离法。\n\n❌ D. 1958 - Faux. 1958 correspond à la création de la Ve République.\n中：错误。1958是第五共和国成立。`
  },
  {
    id: "gh0014",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original", // 14o 简单 → 有o
    question: "Combien y a-t-il eu de républiques en France ?",
    options: ["Trois", "Quatre", "Cinq", "Six"],
    answer: 2,
    explanation: `❌ A. Trois - Faux. La France a connu plus de trois républiques.\n中：错误。法国经历的共和国超过三个。\n\n❌ B. Quatre - Faux. 不是四个。\n中：错误。不是四个。\n\n✅ C. Cinq - Correct ! La France a eu cinq républiques.\n中：正确！法国经历了五次共和国。\n\n❌ D. Six - Faux. La VIe République n'existe pas encore.\n中：错误。第六共和国尚未成立。`
  },
  {
    id: "gh0015",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 15o 中 → 有o
    question: "Qui était le roi de France au moment de la Révolution française ?",
    options: ["Louis XIV", "Louis XV", "Louis XVI", "Napoléon Ier"],
    answer: 2,
    explanation: `❌ A. Louis XIV - Faux. Louis XIV règne au XVIIe siècle, bien avant la Révolution.\n中：错误。路易十四是17世纪国王，远早于大革命。\n\n❌ B. Louis XV - Faux. Louis XV règne au début du XVIIIe siècle, avant la Révolution.\n中：错误。路易十五在大革命前统治。\n\n✅ C. Louis XVI - Correct ! Louis XVI était roi pendant la Révolution française.\n中：正确！路易十六是法国大革命时期的国王。\n\n❌ D. Napoléon Ier - Faux. Napoléon arrive après la Révolution, comme empereur.\n中：错误。拿破仑在大革命之后成为皇帝。`
  },
  {
    id: "gh0016",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original", // 16o 简单 → 有o
    question: "Qui a fondé la Ve République ?",
    options: ["Jules Ferry", "Charles de Gaulle", "François Hollande", "Napoléon III"],
    answer: 1,
    explanation: `❌ A. Jules Ferry - Faux. Jules Ferry est un homme politique du XIXe siècle.\n中：错误。费里是19世纪政治家。\n\n✅ B. Charles de Gaulle - Correct ! Charles de Gaulle a fondé la Ve République en 1958.\n中：正确！戴高乐在1958年建立第五共和国。\n\n❌ C. François Hollande - Faux. Hollande est un président récent, pas le fondateur.\n中：错误。奥朗德是近期总统，不是创立者。\n\n❌ D. Napoléon III - Faux. Napoléon III est un empereur du XIXe siècle.\n中：错误。拿破仑三世是19世纪皇帝。`
  },
  {
    id: "gh0017",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original", // 17o简单 → 有o
    question: "Que célèbre-t-on le 14 juillet ?",
    options: ["La fin de la guerre", "La prise de la Bastille", "La victoire de 1918", "Noël"],
    answer: 1,
    explanation: `❌ A. La fin de la guerre - Faux. Ce n'est pas une date de fin de guerre.\n中：错误。不是战争结束日。\n\n✅ B. La prise de la Bastille - Correct ! Le 14 juillet commémore la prise de la Bastille en 1789.\n中：正确！7月14日纪念1789年攻占巴士底狱。\n\n❌ C. La victoire de 1918 - Faux. La victoire de 1918 est commémorée le 11 novembre.\n中：错误。1918胜利纪念日是11月11日。\n\n❌ D. Noël - Faux. Noël est le 25 décembre.\n中：错误。圣诞节是12月25日。`
  },
  {
    id: "gh0018",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original", // 18o简单 → 有o
    question: "Quelle guerre a eu lieu entre 1914 et 1918 ?",
    options: ["La guerre de Cent Ans", "La Seconde Guerre mondiale", "La Première Guerre mondiale", "La guerre d'Algérie"],
    answer: 2,
    explanation: `❌ A. La guerre de Cent Ans - Faux. La guerre de Cent Ans est au Moyen Âge (XIVe--XVe siècle).\n中：错误。百年战争发生在中世纪。\n\n❌ B. La Seconde Guerre mondiale - Faux. La Seconde Guerre mondiale a eu lieu 1939--1945.\n中：错误。二战发生在1939-1945。\n\n✅ C. La Première Guerre mondiale - Correct ! La Première Guerre mondiale a eu lieu entre 1914 et 1918.\n中：正确！第一次世界大战发生于1914-1918。\n\n❌ D. La guerre d'Algérie - Faux. La guerre d'Algérie a eu lieu de 1954 à 1962.\n中：错误。阿尔及利亚战争发生于1954-1962。`
  },
  {
    id: "gh0019",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original", // 19o.简单 → 有o
    question: "Pourquoi l'année 1958 est importante pour la France ?",
    options: ["Fin de la monarchie", "Début de la Ve République", "Début de l'Union européenne", "Fin de la Seconde Guerre mondiale"],
    answer: 1,
    explanation: `❌ A. Fin de la monarchie - Faux. La monarchie a pris fin en 1870.\n中：错误。君主制在1870年结束。\n\n✅ B. Début de la Ve République - Correct ! 1958 marque la création de la Ve République.\n中：正确！1958年标志第五共和国成立。\n\n❌ C. Début de l'Union européenne - Faux. L'Union européenne a été créée en 1993.\n中：错误。欧盟成立于1993年。\n\n❌ D. Fin de la Seconde Guerre mondiale - Faux. La Seconde Guerre mondiale se termine en 1945.\n中：错误。二战在1945年结束。`
  },
  {
    id: "gh0020",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 20o 中 → 有o
    question: "Quel était le surnom de Louis XIV ?",
    options: ["Le Roi Soleil", "Le Roi Philosophe", "Le Roi Citoyen", "Le Roi Guerrier"],
    answer: 0,
    explanation: `✅ A. Le Roi Soleil - Correct ! Louis XIV est surnommé "Le Roi Soleil".\n中：正确！路易十四被称为"太阳王"。\n\n❌ B. Le Roi Philosophe - Faux. Ce n'est pas son surnom.\n中：错误。不是他的称号。\n\n❌ C. Le Roi Citoyen - Faux. Ce n'est pas son surnom.\n中：错误。不是他的称号。\n\n❌ D. Le Roi Guerrier - Faux. Ce n'est pas son surnom.\n中：错误。不是他的称号。`
  },
  {
    id: "gh0021",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 21o. 中 → 有o
    question: "Quel roi de France a été exécuté pendant la Révolution française ?",
    options: ["Louis XIV", "Louis XV", "Louis XVI", "Napoléon Ier"],
    answer: 2,
    explanation: `❌ A. Louis XIV - Faux. Louis XIV est mort de maladie en 1715, bien avant la Révolution.\n中：错误。路易十四1715年去世，远在革命前。\n\n❌ B. Louis XV - Faux. Louis XV est mort en 1774, avant la Révolution.\n中：错误。路易十五1774年去世，革命前。\n\n✅ C. Louis XVI - Correct ! Louis XVI a été guillotiné en 1793 pendant la Révolution.\n中：正确！路易十六于1793年被断头台处决。\n\n❌ D. Napoléon Ier - Faux. Napoléon n'a pas été exécuté ; il est mort en exil.\n中：错误。拿破仑没有被处决，死于流放。`
  },
  {
    id: "gh0022",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 22o.中 → 有o
    question: "En quelle année Napoléon Ier est-il devenu empereur ?",
    options: ["1789", "1799", "1804", "1815"],
    answer: 2,
    explanation: `❌ A. 1789 - Faux. 1789 est l'année du début de la Révolution.\n中：错误。1789是大革命开始。\n\n❌ B. 1799 - Faux. 1799 correspond au coup d'État du 18 brumaire.\n中：错误。1799是雾月政变。\n\n✅ C. 1804 - Correct ! Napoléon devient empereur en 1804.\n中：正确！拿破仑1804年成为皇帝。\n\n❌ D. 1815 - Faux. 1815 correspond à la défaite de Waterloo et la fin de l'Empire.\n中：错误。1815是滑铁卢战败，帝国终结。`
  },
  {
    id: "gh0023",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 23o. 中 → 有o
    question: "Lequel de ces personnages a un lien avec la République française ?",
    options: ["Jules Ferry", "Louis XIV", "Charlemagne", "Marie-Antoinette"],
    answer: 0,
    explanation: `✅ A. Jules Ferry - Correct ! Jules Ferry est un homme politique de la IIIe République, lié aux réformes scolaires.\n中：正确！朱尔·费里是第三共和国政治家，推动教育改革。\n\n❌ B. Louis XIV - Faux. Louis XIV est un roi, lié à la monarchie, pas à la République.\n中：错误。路易十四是君主，与共和国无关。\n\n❌ C. Charlemagne - Faux. Charlemagne est un empereur du Moyen Âge, pas lié à la République moderne.\n中：错误。查理曼是中世纪皇帝，与现代共和国无关。\n\n❌ D. Marie-Antoinette - Faux. Elle est reine et symbole de la monarchie.\n中：错误。她是王后，代表君主制。`
  },
  {
    id: "gh0024",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 24o.中 → 有o
    question: "De quand date l'appel à la résistance du général de Gaulle ?",
    options: ["8 mai 1945", "18 juin 1940", "11 novembre 1918", "14 juillet 1789"],
    answer: 1,
    explanation: `❌ A. 8 mai 1945 - Faux. 8 mai 1945 est la fin de la Seconde Guerre mondiale en Europe.\n中：错误。1945年5月8日是二战欧洲结束。\n\n✅ B. 18 juin 1940 - Correct ! L'appel du 18 juin 1940 est le début de la Résistance française.\n中：正确！1940年6月18日戴高乐呼吁抵抗。\n\n❌ C. 11 novembre 1918 - Faux. 11 novembre 1918 est l'armistice de la Première Guerre mondiale.\n中：错误。1918年11月11日是第一次世界大战停战日。\n\n❌ D. 14 juillet 1789 - Faux. 14 juillet 1789 est la prise de la Bastille.\n中：错误。1789年7月14日是攻占巴士底狱。`
  },
  {
    id: "gh0025",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original", // 25o. 简单 → 有o
    question: "Pourquoi la Shoah est-elle étudiée à l'école ?",
    options: ["Pour apprendre une langue", "Pour comprendre l'histoire et lutter contre le racisme", "Pour expliquer une révolution", "Pour étudier l'économie"],
    answer: 1,
    explanation: `❌ A. Pour apprendre une langue - Faux. Ce n'est pas une question de langue.\n中：错误。不是学习语言的目的。\n\n✅ B. Pour comprendre l'histoire et lutter contre le racisme - Correct ! On l'étudie pour comprendre l'histoire et prévenir le racisme et l'antisémitisme.\n中：正确！学习是为了理解历史，抵制种族主义与反犹主义。\n\n❌ C. Pour expliquer une révolution - Faux. La Shoah n'est pas une révolution.\n中：错误。大屠杀不是革命。\n\n❌ D. Pour étudier l'économie - Faux. Ce n'est pas un sujet économique.\n中：错误。不是经济主题。`
  },
  {
    id: "gh0026",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 26o 中 → 有o
    question: "Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?",
    options: ["1945", "1958", "1962", "1981"],
    answer: 2,
    explanation: `❌ A. 1945 - Faux. En 1945, le président n'était pas élu au suffrage universel direct.\n中：错误。1945年总统不是直接选举产生。\n\n❌ B. 1958 - Faux. En 1958, le président était élu par un collège électoral, pas directement par les citoyens.\n中：错误。1958年总统由选举团选出，不是全民直接选举。\n\n✅ C. 1962 - Correct ! Depuis 1962, le président est élu au suffrage universel direct, après le référendum organisé par de Gaulle.\n中：正确！1962年戴高乐通过公投后，总统改为全民直接选举。\n\n❌ D. 1981 - Faux. 1981 est l'année d'une élection présidentielle, mais pas le début du suffrage direct.\n中：错误。1981年是总统选举年份，但直接选举早在1962年开始。`
  },
  {
    id: "gh0027",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 27o. 中 → 有o
    question: "Quelle est la première étape de la construction européenne en 1951 ?",
    options: ["L'Union européenne", "La CEE", "La CECA", "L'euro"],
    answer: 2,
    explanation: `❌ A. L'Union européenne - Faux. L'Union européenne est créée plus tard (1993).\n中：错误。欧盟成立于1993年。\n\n❌ B. La CEE - Faux. La CEE est créée en 1957, pas 1951.\n中：错误。欧洲经济共同体成立于1957年。\n\n✅ C. La CECA - Correct ! La CECA (Communauté européenne du charbon et de l'acier) est créée en 1951, première étape de l'Europe.\n中：正确！欧洲煤钢共同体1951成立，是欧洲一体化的第一步。\n\n❌ D. L'euro - Faux. L'euro est introduit en 1999/2002.\n中：错误。欧元在1999/2002年推出。`
  },
  {
    id: "gh0028",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 28o.中 → 有o
    question: "Durant le mandat de quel président la peine de mort a-t-elle été abolie ?",
    options: ["Charles de Gaulle", "Georges Pompidou", "François Mitterrand", "Jacques Chirac"],
    answer: 2,
    explanation: `❌ A. Charles de Gaulle - Faux. La peine de mort n'a pas été abolie sous de Gaulle.\n中：错误。戴高乐时期未废除死刑。\n\n❌ B. Georges Pompidou - Faux. Pas sous Pompidou non plus.\n中：错误。蓬皮杜时期也没有。\n\n✅ C. François Mitterrand - Correct ! La peine de mort est abolie en 1981 sous François Mitterrand.\n中：正确！1981年密特朗任内废除死刑。\n\n❌ D. Jacques Chirac - Faux. Elle est déjà abolie avant son mandat.\n中：错误。吉拉克任期前已废除。`
  },
  {
    id: "gh0029",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original", // 29o.中 → 有o
    question: "Quel régime politique a été mis en place pendant la Révolution française en 1792 ?",
    options: ["La monarchie absolue", "La monarchie constitutionnelle", "La République", "L'Empire"],
    answer: 2,
    explanation: `❌ A. La monarchie absolue - Faux. La monarchie absolue est terminée avant 1792.\n中：错误。绝对君主制在1792前已结束。\n\n❌ B. La monarchie constitutionnelle - Faux. La monarchie constitutionnelle existe en 1791, mais disparaît en 1792.\n中：错误。1791有宪政君主制，但1792结束。\n\n✅ C. La République - Correct ! En 1792, la Première République est proclamée.\n中：正确！1792年成立第一共和国。\n\n❌ D. L'Empire - Faux. L'Empire commence avec Napoléon en 1804.\n中：错误。帝国从1804年开始。`
  },
  {
    id: "gh0030",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original", // 30o. 简单 → 有o
    question: "Qui était une figure de la Résistance française pendant la Seconde Guerre mondiale ?",
    options: ["Charles de Gaulle", "Philippe Pétain", "Napoléon III", "Jules Ferry"],
    answer: 0,
    explanation: `✅ A. Charles de Gaulle - Correct ! De Gaulle est une figure majeure de la Résistance.\n中：正确！戴高乐是法国抵抗运动的重要人物。\n\n❌ B. Philippe Pétain - Faux. Pétain est le chef du régime de Vichy, collaborateur.\n中：错误。贝当是维希政权领导人，与抵抗运动相反。\n\n❌ C. Napoléon III - Faux. Il est du XIXe siècle.\n中：错误。拿破仑三世是19世纪人物。\n\n❌ D. Jules Ferry - Faux. Il est du XIXe siècle, non lié à la Seconde Guerre mondiale.\n中：错误。费里是19世纪政治家。`
  },
    {
    id: "gh0031",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "En 1944, qu'est-ce qui a changé pour les femmes ?",
    options: ["Elles ont accès à l'université", "Elles obtiennent le droit de vote", "Elles peuvent devenir présidentes", "Elles entrent à l'armée"],
    answer: 1,
    explanation: `❌ A. Elles ont accès à l'université - Faux. Les femmes avaient déjà accès à l'université auparavant.\n中：错误。女性早已能上大学。\n\n✅ B. Elles obtiennent le droit de vote - Correct ! En 1944, les femmes obtiennent le droit de vote en France.\n中：正确！1944年法国女性获得选举权。\n\n❌ C. Elles peuvent devenir présidentes - Faux. Le droit existe, mais ce n'est pas un changement spécifique de 1944.\n中：错误。虽然可以，但1944年重点是选举权。\n\n❌ D. Elles entrent à l'armée - Faux. Ce n'est pas le changement majeur de 1944.\n中：错误。1944年主要变化不是参军。`
  },
  {
    id: "gh0032",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle organisation internationale a été créée en 1945 après la Seconde Guerre mondiale ?",
    options: ["L'Union européenne", "L'OTAN", "L'ONU", "La CEE"],
    answer: 2,
    explanation: `❌ A. L'Union européenne - Faux. L'UE est créée en 1993.\n中：错误。欧盟成立于1993年。\n\n❌ B. L'OTAN - Faux. L'OTAN est créée en 1949.\n中：错误。北约成立于1949年。\n\n✅ C. L'ONU - Correct ! L'ONU (Organisation des Nations unies) est créée en 1945.\n中：正确！联合国成立于1945年。\n\n❌ D. La CEE - Faux. La CEE est créée en 1957.\n中：错误。欧洲经济共同体成立于1957年。`
  },
  {
    id: "gh0033",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle peine a été supprimée en 1981 ?",
    options: ["La prison à vie", "Le travail forcé", "La peine de mort", "L'exil"],
    answer: 2,
    explanation: `❌ A. La prison à vie - Faux. La prison à vie existe toujours.\n中：错误。终身监禁仍然存在。\n\n❌ B. Le travail forcé - Faux. Ce n'est pas supprimé en 1981.\n中：错误。强迫劳动不是1981年废除的。\n\n✅ C. La peine de mort - Correct ! La peine de mort est abolie en 1981 en France.\n中：正确！1981年法国废除死刑。\n\n❌ D. L'exil - Faux. Ce n'est pas une peine spécifique supprimée en 1981.\n中：错误。流放不是1981年的废除对象。`
  },
  {
    id: "gh0034",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "En quelle année l'euro est-elle devenue la monnaie utilisée en France ?",
    options: ["1999", "2000", "2002", "2005"],
    answer: 2,
    explanation: `❌ A. 1999 - Faux. En 1999, l'euro est introduit comme monnaie scripturale (banque, marchés), mais pas encore en billets et pièces.\n中：错误。1999年欧元只在金融系统中使用，还没有纸币硬币。\n\n❌ B. 2000 - Faux. 2000 n'est pas l'année officielle de l'usage de l'euro en France.\n中：错误。2000年不是正式使用欧元的年份。\n\n✅ C. 2002 - Correct ! En 2002, l'euro devient monnaie physique en France (billets et pièces), remplaçant le franc.\n中：正确！2002年欧元开始在法国作为现金流通，取代法郎。\n\n❌ D. 2005 - Faux. L'euro est déjà en circulation depuis 2002.\n中：错误。欧元早在2002年就已使用。`
  },
  {
    id: "gh0035",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Où a eu lieu le débarquement en 1944 ?",
    options: ["En Provence", "En Bretagne", "En Normandie", "En Alsace"],
    answer: 2,
    explanation: `❌ A. En Provence - Faux. Il y a eu un débarquement en Provence en 1944, mais ce n'est pas le débarquement principal.\n中：错误。1944年确实有普罗旺斯登陆，但不是主要诺曼底登陆。\n\n❌ B. En Bretagne - Faux. Pas de débarquement majeur en Bretagne.\n中：错误。布列塔尼没有主要登陆行动。\n\n✅ C. En Normandie - Correct ! Le débarquement de 1944 a eu lieu en Normandie (D-Day).\n中：正确！1944年诺曼底登陆。\n\n❌ D. En Alsace - Faux. L'Alsace est libérée plus tard, pas un lieu de débarquement.\n中：错误。阿尔萨斯不是登陆地点。`
  },
  {
    id: "gh0036",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel continent a été le plus concerné par la décolonisation française après la Seconde Guerre mondiale ?",
    options: ["L'Europe", "L'Asie", "L'Afrique", "L'Amérique"],
    answer: 2,
    explanation: `❌ A. L'Europe - Faux. L'Europe n'était pas colonisée par la France.\n中：错误。欧洲不是法国殖民地。\n\n❌ B. L'Asie - Faux. L'Asie a été concernée (Indochine), mais moins que l'Afrique.\n中：错误。亚洲也有，但不如非洲多。\n\n✅ C. L'Afrique - Correct ! L'Afrique a été le continent le plus concerné par la décolonisation française.\n中：正确！非洲是法国去殖民化主要地区。\n\n❌ D. L'Amérique - Faux. L'Amérique n'a pas été la région principale.\n中：错误。美洲不是主要地区。`
  },
  {
    id: "gh0037",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Que fête-t-on le 8 mai ?",
    options: ["La fin de la Première Guerre mondiale", "La fin de la Seconde Guerre mondiale en Europe", "La prise de la Bastille", "La création de l'ONU"],
    answer: 1,
    explanation: `❌ A. La fin de la Première Guerre mondiale - Faux. La Première Guerre mondiale se termine le 11 novembre 1918.\n中：错误。第一次世界大战停战日是11月11日。\n\n✅ B. La fin de la Seconde Guerre mondiale en Europe - Correct ! Le 8 mai commémore la fin de la Seconde Guerre mondiale en Europe (VE Day).\n中：正确！5月8日纪念二战欧洲胜利日。\n\n❌ C. La prise de la Bastille - Faux. La Bastille est le 14 juillet.\n中：错误。攻占巴士底狱是7月14日。\n\n❌ D. La création de l'ONU - Faux. L'ONU a été créée en 1945, pas le 8 mai.\n中：错误。联合国成立于1945年，不是5月8日。`
  },
  {
    id: "gh0038",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel événement marque le début de la Révolution française ?",
    options: ["La convocation des États généraux", "La prise de la Bastille", "L'exécution de Louis XVI", "La proclamation de la Première République"],
    answer: 1,
    explanation: `❌ A. La convocation des États généraux - Faux. C'est un événement important, mais pas le symbole principal du début.\n中：错误。重要但不是标志性开端。\n\n✅ B. La prise de la Bastille - Correct ! La prise de la Bastille le 14 juillet 1789 marque le début symbolique de la Révolution.\n中：正确！1789年7月14日攻占巴士底狱象征革命开始。\n\n❌ C. L'exécution de Louis XVI - Faux. Cela se produit plus tard en 1793.\n中：错误。路易十六处决在1793年。\n\n❌ D. La proclamation de la Première République - Faux. Cela se produit en 1792, après le début.\n中：错误。第一共和国在1792年成立，晚于开始。`
  },
  {
    id: "gh0039",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel texte fondamental est adopté en 1789 ?",
    options: ["Le Code civil", "La Constitution de 1958", "La Déclaration des droits de l'homme et du citoyen", "Le traité de Rome"],
    answer: 2,
    explanation: `❌ A. Le Code civil - Faux. Le Code civil est adopté en 1804.\n中：错误。民法典是1804年。\n\n❌ B. La Constitution de 1958 - Faux. Elle est adoptée en 1958.\n中：错误。1958宪法。\n\n✅ C. La Déclaration des droits de l'homme et du citoyen - Correct ! Elle est adoptée en 1789.\n中：正确！《人权与公民权宣言》1789年通过。\n\n❌ D. Le traité de Rome - Faux. Il est signé en 1957.\n中：错误。罗马条约签于1957年。`
  },
  {
    id: "gh0040",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel principe disparaît avec la Révolution française ?",
    options: ["La souveraineté populaire", "Les privilèges héréditaires", "L'égalité devant la loi", "La citoyenneté"],
    answer: 1,
    explanation: `❌ A. La souveraineté populaire - Faux. La Révolution renforce la souveraineté du peuple.\n中：错误。革命加强了人民主权。\n\n✅ B. Les privilèges héréditaires - Correct ! La Révolution met fin aux privilèges héréditaires (noblesse, clergé).\n中：正确！革命废除了世袭特权（贵族、教士）。\n\n❌ C. L'égalité devant la loi - Faux. La Révolution instaure l'égalité devant la loi.\n中：错误。革命确立了法律面前平等。\n\n❌ D. La citoyenneté - Faux. La citoyenneté est renforcée pendant la Révolution.\n中：错误。革命强化了公民权。`
  },
  {
    id: "gh0041",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel régime est proclamé en septembre 1792 ?",
    options: ["La monarchie constitutionnelle", "Le Consulat", "La Première République", "Le Premier Empire"],
    answer: 2,
    explanation: `❌ A. La monarchie constitutionnelle - Faux. La monarchie constitutionnelle est abolie en 1792.\n中：错误。1792年废除君主立宪制。\n\n❌ B. Le Consulat - Faux. Le Consulat est instauré en 1799.\n中：错误。执政府成立于1799年。\n\n✅ C. La Première République - Correct ! En septembre 1792, la Première République est proclamée.\n中：正确！1792年9月宣布第一共和国成立。\n\n❌ D. Le Premier Empire - Faux. Le Premier Empire commence en 1804 avec Napoléon.\n中：错误。第一帝国从1804年开始。`
  },
  {
    id: "gh0042",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel régime suit directement la Première République ?",
    options: ["Le Premier Empire", "La Restauration", "Le Consulat", "La Monarchie de Juillet"],
    answer: 0,
    explanation: `✅ A. Le Premier Empire - Correct ! La Première République est suivie par le Premier Empire en 1804.\n中：正确！第一共和国之后直接进入第一帝国（1804年）。\n\n❌ B. La Restauration - Faux. La Restauration arrive après la chute de Napoléon en 1814.\n中：错误。复辟在拿破仑失败后（1814年）才开始。\n\n❌ C. Le Consulat - Faux. Le Consulat précède le Premier Empire (1799-1804).\n中：错误。执政府在第一帝国之前。\n\n❌ D. La Monarchie de Juillet - Faux. Elle commence en 1830, bien plus tard.\n中：错误。七月王朝始于1830年。`
  },
  {
    id: "gh0043",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel rôle exerce Napoléon Bonaparte sous le Consulat ?",
    options: ["Roi", "Premier consul", "Président élu", "Ministre"],
    answer: 1,
    explanation: `❌ A. Roi - Faux. Il n'est pas roi.\n中：错误。他不是国王。\n\n✅ B. Premier consul - Correct ! Napoléon est Premier consul (1799--1804).\n中：正确！拿破仑在执政府时期担任第一执政。\n\n❌ C. Président élu - Faux. Il n'y a pas de président à cette période.\n中：错误。那时没有总统制度。\n\n❌ D. Ministre - Faux. Il est plus puissant qu'un ministre.\n中：错误。他的权力远超过部长。`
  },
  {
    id: "gh0044",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel texte garantit l'égalité devant la loi sous Napoléon ?",
    options: ["La Constitution de 1791", "La Déclaration de 1789", "Le Code civil", "Le traité de Vienne"],
    answer: 2,
    explanation: `❌ A. La Constitution de 1791 - Faux. Elle est antérieure et ne correspond pas à Napoléon.\n中：错误。1791宪法早于拿破仑时期。\n\n❌ B. La Déclaration de 1789 - Faux. Elle est fondatrice, mais ce n'est pas le texte administratif majeur sous Napoléon.\n中：错误。它是基础性文件，但不是拿破仑时期的核心法律文本。\n\n✅ C. Le Code civil - Correct ! Le Code civil (1804) organise l'égalité devant la loi.\n中：正确！《民法典》（1804）确立法律面前平等。\n\n❌ D. Le traité de Vienne - Faux. C'est un traité international, pas un texte civil français.\n中：错误。维也纳条约是国际条约，不是法国民法。`
  },
  {
    id: "gh0045",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Après la chute de Napoléon, quel régime revient en France ?",
    options: ["La République", "La monarchie", "Le Consulat", "La dictature"],
    answer: 1,
    explanation: `❌ A. La République - Faux. La République ne revient pas immédiatement.\n中：错误。共和国不会立即恢复。\n\n✅ B. La monarchie - Correct ! Après la chute de Napoléon, la monarchie revient (Restauration).\n中：正确！拿破仑失败后复辟君主制（复辟时期）。\n\n❌ C. Le Consulat - Faux. Le Consulat est terminé avec Napoléon.\n中：错误。执政府随着拿破仑时代结束。\n\n❌ D. La dictature - Faux. Ce n'est pas un régime officiel après 1814.\n中：错误。1814年后没有"独裁"制度。`
  },
  {
    id: "gh0046",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel régime rend l'école gratuite et obligatoire ?",
    options: ["Le Second Empire", "La Troisième République", "La Quatrième République", "La Cinquième République"],
    answer: 1,
    explanation: `❌ A. Le Second Empire - Faux. Le Second Empire ne rend pas l'école obligatoire.\n中：错误。第二帝国没有实行义务教育。\n\n✅ B. La Troisième République - Correct ! La IIIe République, avec Jules Ferry, rend l'école gratuite, laïque et obligatoire.\n中：正确！第三共和国（费里法案）实行免费、世俗、义务教育。\n\n❌ C. La Quatrième République - Faux. L'école est déjà gratuite et obligatoire depuis la IIIe République.\n中：错误。第四共和国时教育制度已经存在。\n\n❌ D. La Cinquième République - Faux. La Cinquième République ne crée pas cette loi, elle la poursuit seulement.\n中：错误。第五共和国继承制度，但不是起源。`
  },
  {
    id: "gh0047",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle loi fonde la laïcité en France ?",
    options: ["La loi de 1882", "La loi de 1905", "La loi de 1958", "La loi de 1981"],
    answer: 1,
    explanation: `❌ A. La loi de 1882 - Faux. Elle concerne l'école, pas la laïcité.\n中：错误。1882年法案关于教育。\n\n✅ B. La loi de 1905 - Correct ! La loi de 1905 sépare l'Église et l'État (laïcité).\n中：正确！1905年法案实现政教分离。\n\n❌ C. La loi de 1958 - Faux. 1958 est la Constitution de la Ve République.\n中：错误。1958年是宪法。\n\n❌ D. La loi de 1981 - Faux. 1981 concerne l'abolition de la peine de mort.\n中：错误。1981年与废除死刑有关。`
  },
  {
    id: "gh0048",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel événement déclenche la Première Guerre mondiale ?",
    options: ["Une invasion", "Un attentat", "Une révolution", "Un traité"],
    answer: 1,
    explanation: `❌ A. Une invasion - Faux. L'invasion est une conséquence, pas le déclencheur.\n中：错误。入侵是后续事件，不是导火索。\n\n✅ B. Un attentat - Correct ! L'assassinat de l'archiduc François-Ferdinand déclenche la guerre.\n中：正确！弗朗茨·费迪南大公遇刺引发一战。\n\n❌ C. Une révolution - Faux. Il n'y a pas de révolution déclencheuse.\n中：错误。不是革命。\n\n❌ D. Un traité - Faux. Les traités sont souvent des accords de paix, pas le déclencheur.\n中：错误。条约通常是和平协议。`
  },
  {
    id: "gh0049",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle bataille arrête l'avancée allemande en 1914 ?",
    options: ["Verdun", "La Somme", "La Marne", "Stalingrad"],
    answer: 2,
    explanation: `❌ A. Verdun - Faux. Verdun est en 1916.\n中：错误。凡尔登在1916年。\n\n❌ B. La Somme - Faux. La Somme est en 1916.\n中：错误。索姆河战役在1916年。\n\n✅ C. La Marne - Correct ! La Marne (1914) arrête l'avance allemande.\n中：正确！马恩河战役阻止德军推进。\n\n❌ D. Stalingrad - Faux. Stalingrad appartient à la Seconde Guerre mondiale.\n中：错误。斯大林格勒是二战。`
  },
  {
    id: "gh0050",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel traité met fin officiellement à la Première Guerre mondiale ?",
    options: ["Traité de Rome", "Traité de Versailles", "Traité de Maastricht", "Traité de Vienne"],
    answer: 1,
    explanation: `❌ A. Traité de Rome - Faux. 1957, traité européen, pas une fin de guerre.\n中：错误。罗马条约是1957年，非战争结束条约。\n\n✅ B. Traité de Versailles - Correct ! Le traité de Versailles (1919) met fin officiellement à la Première Guerre mondiale.\n中：正确！1919年凡尔赛条约正式结束一战。\n\n❌ C. Traité de Maastricht - Faux. 1992, traité européen, pas une fin de guerre.\n中：错误。马约条约是1992年。\n\n❌ D. Traité de Vienne - Faux. 1815, après Napoléon.\n中：错误。维也纳条约是1815年。`
  },
  {
    id: "gh0051",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel régime autoritaire dirige la France après 1940 ?",
    options: ["La IVe République", "Le régime de Vichy", "Le Consulat", "Le Directoire"],
    answer: 1,
    explanation: `❌ A. La IVe République - Faux. La IVe République commence en 1946.\n中：错误。第四共和国1946年成立。\n\n✅ B. Le régime de Vichy - Correct ! Le régime de Vichy dirige la France de 1940 à 1944.\n中：正确！1940-1944年维希政权统治法国。\n\n❌ C. Le Consulat - Faux. C'est une période du début XIXe siècle.\n中：错误。执政府是19世纪初。\n\n❌ D. Le Directoire - Faux. 1795-1799, période révolutionnaire.\n中：错误。督政府是革命时期。`
  },
  {
    id: "gh0052",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel événement marque le début de la Libération de la France ?",
    options: ["La bataille de Stalingrad", "Le débarquement en Normandie", "La capitulation allemande", "Le procès de Nuremberg"],
    answer: 1,
    explanation: `❌ A. La bataille de Stalingrad - Faux. C'est un tournant, mais pas en France.\n中：错误。斯大林格勒战役不在法国。\n\n✅ B. Le débarquement en Normandie - Correct ! Le débarquement en Normandie (6 juin 1944) marque le début de la Libération.\n中：正确！1944年诺曼底登陆标志解放开始。\n\n❌ C. La capitulation allemande - Faux. Cela arrive après la Libération.\n中：错误。德国投降在解放后。\n\n❌ D. Le procès de Nuremberg - Faux. Procès après-guerre.\n中：错误。战后审判。`
  },
  {
    id: "gh0053",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel droit est accordé aux femmes françaises en 1944 ?",
    options: ["Le droit au travail", "Le droit à l'éducation", "Le droit de vote", "Le droit d'être élues présidentes"],
    answer: 2,
    explanation: `❌ A. Le droit au travail - Faux. Les femmes travaillaient déjà.\n中：错误。女性已可工作。\n\n❌ B. Le droit à l'éducation - Faux. Déjà accessible.\n中：错误。教育已开放。\n\n✅ C. Le droit de vote - Correct ! Les femmes obtiennent le droit de vote en 1944.\n中：正确！1944年女性获得投票权。\n\n❌ D. Le droit d'être élues présidentes - Faux. Pas spécifique à 1944.\n中：错误。1944年主要是投票权。`
  },
  {
    id: "gh0054",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel organisme protège les travailleurs après 1945 ?",
    options: ["Le Parlement", "La Sécurité sociale", "Le Conseil constitutionnel", "L'ONU"],
    answer: 1,
    explanation: `❌ A. Le Parlement - Faux. Il vote les lois, mais n'est pas l'organisme direct.\n中：错误。议会制定法律，但不是直接保护机构。\n\n✅ B. La Sécurité sociale - Correct ! La Sécurité sociale protège les travailleurs (santé, retraite, chômage).\n中：正确！社会保障保护工人（医疗、退休、失业）。\n\n❌ C. Le Conseil constitutionnel - Faux. Il contrôle les lois, ne protège pas directement les travailleurs.\n中：错误。宪法委员会审查法律合宪性。\n\n❌ D. L'ONU - Faux. Organisation internationale.\n中：错误。联合国是国际组织。`
  },
  {
    id: "gh0055",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui a défendu l'abolition de la peine de mort en 1981 ?",
    options: ["Simone Veil", "Robert Badinter", "Jules Ferry", "Jean Moulin"],
    answer: 1,
    explanation: `❌ A. Simone Veil - Faux. Elle a défendu l'avortement (loi Veil).\n中：错误。她主张堕胎合法化。\n\n✅ B. Robert Badinter - Correct ! Robert Badinter est l'auteur de la loi d'abolition de la peine de mort.\n中：正确！巴丹特是废除死刑的关键人物。\n\n❌ C. Jules Ferry - Faux. Il est lié à l'école, pas à la peine de mort.\n中：错误。费里与教育改革有关。\n\n❌ D. Jean Moulin - Faux. Il est un héros de la Résistance, pas le défenseur de cette loi.\n中：错误。他是抵抗运动人物。`
  },
  {
    id: "gh0056",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle loi met fin à la peine de mort en France ?",
    options: ["Une loi de 1975", "Une loi de 1981", "Une loi de 1958", "Une loi de 1946"],
    answer: 1,
    explanation: `❌ A. Une loi de 1975 - Faux. Pas l'année correcte.\n中：错误。1975年不是废除死刑的年份。\n\n✅ B. Une loi de 1981 - Correct ! La loi de 1981 supprime la peine de mort.\n中：正确！1981年的法律废除了死刑。\n\n❌ C. Une loi de 1958 - Faux. 1958 est la Constitution.\n中：错误。1958年是第五共和国宪法制定年份，不是废除死刑。\n\n❌ D. Une loi de 1946 - Faux. 1946 n'est pas l'année de l'abolition.\n中：错误。1946年不是废除死刑的年份。`
  },
  {
    id: "gh0057",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle loi dépénalise l'avortement en France ?",
    options: ["La loi Ferry", "La loi Veil", "La loi Badinter", "La loi Taubira"],
    answer: 1,
    explanation: `❌ A. La loi Ferry - Faux. Concernant l'école.\n中：错误。费里法案关于教育。\n\n✅ B. La loi Veil - Correct ! La loi Veil (1975) dépénalise l'avortement.\n中：正确！1975年韦伊法案使堕胎合法。\n\n❌ C. La loi Badinter - Faux. Concernant l'abolition de la peine de mort.\n中：错误。巴丹特法案废除死刑。\n\n❌ D. La loi Taubira - Faux. Concernant le mariage pour tous.\n中：错误。陶比拉法案与同性婚姻。`
  },
  {
    id: "gh0058",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel droit est inscrit dans la Constitution en 2024 ?",
    options: ["Le droit de grève", "Le droit à l'IVG", "Le droit au logement", "Le droit au travail"],
    answer: 1,
    explanation: `❌ A. Le droit de grève - Faux. Ce droit existe mais n'est pas nouvellement inscrit en 2024.\n中：错误。罢工权存在但非2024新写入。\n\n✅ B. Le droit à l'IVG - Correct ! En 2024, le droit à l'IVG est inscrit dans la Constitution.\n中：正确！2024年堕胎权写入宪法。\n\n❌ C. Le droit au logement - Faux. Non inscrit en 2024.\n中：错误。住房权未写入。\n\n❌ D. Le droit au travail - Faux. Non inscrit en 2024.\n中：错误。劳动权不是2024新增。`
  },
  {
    id: "gh0059",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel pays est le premier à inscrire l'IVG dans sa Constitution ?",
    options: ["L'Allemagne", "La France", "L'Espagne", "La Suède"],
    answer: 1,
    explanation: `❌ A. L'Allemagne - Faux. L'Allemagne n'a pas été le premier pays à inscrire l'IVG dans sa Constitution.\n中：错误。德国不是第一个在宪法中写入堕胎权的国家。\n\n✅ B. La France - Correct ! La France est le premier pays à inscrire l'IVG dans sa Constitution (en 2024).\n中：正确！法国是第一个在宪法中写入堕胎权的国家（2024年）。\n\n❌ C. L'Espagne - Faux. L'Espagne a légalisé l'IVG, mais pas la première à l'inscrire en Constitution.\n中：错误。西班牙合法化了堕胎，但不是第一个写入宪法的国家。\n\n❌ D. La Suède - Faux. Pas le premier non plus.\n中：错误。瑞典也不是。`
  },
  {
    id: "gh0060",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "En quelle année le mariage pour tous est-il adopté en France ?",
    options: ["2001", "2007", "2013", "2020"],
    answer: 2,
    explanation: `❌ A. 2001 - Faux. Ce n'est pas l'année de la loi.\n中：错误。2001年不是"婚姻平权法"的年份。\n\n❌ B. 2007 - Faux. Ce n'est pas l'année de la loi.\n中：错误。2007年也不是。\n\n✅ C. 2013 - Correct ! La loi sur le mariage pour tous a été adoptée en 2013.\n中：正确！2013年法国通过《婚姻平权法》。\n\n❌ D. 2020 - Faux. Trop tard.\n中：错误。2020年不是。`
  },
  {
    id: "gh0061",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel principe est défendu par l'ONU après 1945 ?",
    options: ["Le colonialisme", "Le droit des peuples à disposer d'eux-mêmes", "La monarchie", "Le protectionnisme"],
    answer: 1,
    explanation: `❌ A. Le colonialisme - Faux. L'ONU s'oppose au colonialisme.\n中：错误。联合国反对殖民主义。\n\n✅ B. Le droit des peuples à disposer d'eux-mêmes - Correct ! Après 1945, l'ONU soutient le droit des peuples à choisir leur avenir.\n中：正确！联合国支持民族自决权。\n\n❌ C. La monarchie - Faux. L'ONU ne promeut pas la monarchie en général.\n中：错误。联合国不推广君主制。\n\n❌ D. Le protectionnisme - Faux. L'ONU ne défend pas le protectionnisme comme principe central.\n中：错误。联合国不是以保护主义为核心。`
  },
  {
    id: "gh0062",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Comment se construit l'Union européenne ?",
    options: ["Par des révolutions", "Par des guerres", "Par étapes successives", "Par un seul traité"],
    answer: 2,
    explanation: `❌ A. Par des révolutions - Faux. L'UE se construit par des accords, pas par des révolutions.\n中：错误。欧盟不是通过革命建立的。\n\n❌ B. Par des guerres - Faux. L'UE se construit pour éviter les guerres, pas les provoquer.\n中：错误。欧盟是为了避免战争而建立的。\n\n✅ C. Par étapes successives - Correct ! L'UE se construit progressivement, avec plusieurs traités successifs.\n中：正确！欧盟通过多个条约逐步建立。\n\n❌ D. Par un seul traité - Faux. Il y a plusieurs traités (Rome, Maastricht, Lisbonne...).\n中：错误。不是单一条约。`
  },
  {
    id: "gh0063",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel domaine est d'abord concerné par la construction européenne ?",
    options: ["La culture", "L'économie", "L'éducation", "La défense"],
    answer: 1,
    explanation: `❌ A. La culture - Faux. Ce n'est pas le premier domaine.\n中：错误。文化不是最初关注的领域。\n\n✅ B. L'économie - Correct ! L'Europe commence par la coopération économique (CECA, CEE).\n中：正确！欧洲建设最早是经济合作（欧洲煤钢共同体、欧洲经济共同体）。\n\n❌ C. L'éducation - Faux. L'éducation est arrivée plus tard.\n中：错误。教育领域后期才发展。\n\n❌ D. La défense - Faux. La défense n'est pas le premier objectif.\n中：错误。防务不是最初重点。`
  },
  {
    id: "gh0064",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel objectif commun unit les États membres de l'Union européenne ?",
    options: ["Supprimer les frontières nationales", "Défendre l'intérêt collectif", "Imposer une seule langue", "Créer un État unique"],
    answer: 1,
    explanation: `❌ A. Supprimer les frontières nationales - Faux. Les frontières existent toujours, mais elles sont assouplies.\n中：错误。国家边界仍然存在，只是更开放。\n\n✅ B. Défendre l'intérêt collectif - Correct ! Les États membres travaillent ensemble pour un intérêt commun.\n中：正确！成员国合作是为了共同利益。\n\n❌ C. Imposer une seule langue - Faux. L'UE respecte la diversité linguistique.\n中：错误。欧盟尊重语言多样性。\n\n❌ D. Créer un État unique - Faux. L'UE n'est pas un État unique.\n中：错误。欧盟不是一个统一国家。`
  },
  {
    id: "gh0065",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui rédige principalement le Code civil ?",
    options: ["Louis XVI", "Robespierre", "Napoléon Bonaparte", "Jules Ferry"],
    answer: 2,
    explanation: `❌ A. Louis XVI - Faux. Il n'a pas rédigé le Code civil.\n中：错误。路易十六没有编写《民法典》。\n\n❌ B. Robespierre - Faux. Il n'est pas l'auteur du Code civil.\n中：错误。罗伯斯庇尔不是《民法典》的作者。\n\n✅ C. Napoléon Bonaparte - Correct ! Le Code civil est rédigé sous Napoléon (1804).\n中：正确！《民法典》在拿破仑时期制定。\n\n❌ D. Jules Ferry - Faux. Jules Ferry est lié à l'école laïque, pas au Code civil.\n中：错误。朱尔·费里与义务教育相关，不是民法典。`
  },
  {
    id: "gh0066",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel événement met fin au Premier Empire ?",
    options: ["La bataille d'Austerlitz", "La campagne d'Italie", "La défaite de Waterloo", "Le traité de Rome"],
    answer: 2,
    explanation: `❌ A. La bataille d'Austerlitz - Faux. C'est une victoire napoléonienne, pas la fin.\n中：错误。奥斯特利茨战役是拿破仑胜利。\n\n❌ B. La campagne d'Italie - Faux. C'est un succès du début de la carrière de Napoléon.\n中：错误。意大利战役是拿破仑早期胜利。\n\n✅ C. La défaite de Waterloo - Correct ! Waterloo (1815) met fin au Premier Empire.\n中：正确！滑铁卢战败（1815）结束了第一帝国。\n\n❌ D. Le traité de Rome - Faux. Ce traité est lié à l'Europe, pas à Napoléon.\n中：错误。罗马条约与欧洲共同体有关。`
  },
  {
    id: "gh0067",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Comment appelle-t-on la période de retour des rois après Napoléon ?",
    options: ["Le Consulat", "La Restauration", "La Terreur", "La Monarchie absolue"],
    answer: 1,
    explanation: `❌ A. Le Consulat - Faux. Le Consulat précède l'Empire.\n中：错误。执政府在帝国之前。\n\n✅ B. La Restauration - Correct ! La Restauration = retour de la monarchie après Napoléon.\n中：正确！复辟时期是拿破仑后王权回归。\n\n❌ C. La Terreur - Faux. La Terreur est une phase révolutionnaire (1793--1794).\n中：错误。恐怖统治是革命时期。\n\n❌ D. La Monarchie absolue - Faux. La monarchie absolue n'est pas le terme historique du retour.\n中：错误。不是正确历史术语。`
  },
  {
    id: "gh0068",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel titre prend Louis-Napoléon Bonaparte en 1852 ?",
    options: ["Président à vie", "Empereur", "Roi de France", "Premier ministre"],
    answer: 1,
    explanation: `❌ A. Président à vie - Faux. Il n'est pas "président à vie".\n中：错误。他不是终身总统。\n\n✅ B. Empereur - Correct ! En 1852, il devient Napoléon III, empereur.\n中：正确！1852年他成为拿破仑三世皇帝。\n\n❌ C. Roi de France - Faux. Il devient empereur, pas roi.\n中：错误。他是皇帝，不是国王。\n\n❌ D. Premier ministre - Faux. Il n'a jamais été Premier ministre.\n中：错误。不是首相。`
  },
  {
    id: "gh0069",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel régime politique correspond au Second Empire ?",
    options: ["Une république parlementaire", "Une monarchie constitutionnelle", "Un empire autoritaire", "Une démocratie directe"],
    answer: 2,
    explanation: `❌ A. Une république parlementaire - Faux. Ce n'est pas une république.\n中：错误。第二帝国不是共和国。\n\n❌ B. Une monarchie constitutionnelle - Faux. C'est un empire, pas une monarchie constitutionnelle.\n中：错误。不是君主立宪制。\n\n✅ C. Un empire autoritaire - Correct ! Le Second Empire est un régime impérial autoritaire (Napoléon III).\n中：正确！第二帝国是拿破仑三世的威权帝国。\n\n❌ D. Une démocratie directe - Faux. Pas une démocratie directe.\n中：错误。不是直接民主。`
  },
  {
    id: "gh0070",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel événement suit immédiatement la défaite de 1870 à Paris ?",
    options: ["La Commune de Paris", "Le Directoire", "Le Front populaire", "La Libération"],
    answer: 0,
    explanation: `✅ A. La Commune de Paris - Correct ! Après la défaite de 1870, la Commune de Paris se proclame.\n中：正确！1870年战败后巴黎公社爆发。\n\n❌ B. Le Directoire - Faux. Le Directoire est une période antérieure.\n中：错误。督政府时期更早。\n\n❌ C. Le Front populaire - Faux. Front populaire est en 1936.\n中：错误。人民阵线发生在1936年。\n\n❌ D. La Libération - Faux. La Libération est en 1944.\n中：错误。解放发生在1944年。`
  },
  {
    id: "gh0071",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle alliance regroupe la France pendant la Première Guerre mondiale ?",
    options: ["Les puissances de l'Axe", "L'Entente", "L'OTAN", "Le Pacte de Varsovie"],
    answer: 1,
    explanation: `❌ A. Les puissances de l'Axe - Faux. Les puissances de l'Axe correspondent à la Seconde Guerre mondiale (Allemagne, Italie, Japon).\n中：错误。轴心国属于二战阵营。\n\n✅ B. L'Entente - Correct ! Pendant la Première Guerre mondiale, la France fait partie de l'Entente (avec le Royaume-Uni et la Russie).\n中：正确！一战时期法国属于协约国（与英国、俄罗斯为盟友）。\n\n❌ C. L'OTAN - Faux. L'OTAN a été créée après la Seconde Guerre mondiale (1949).\n中：错误。北约成立于二战后。\n\n❌ D. Le Pacte de Varsovie - Faux. Le Pacte de Varsovie est une alliance de la Guerre froide (1955).\n中：错误。华沙条约组织是冷战时期。`
  },
  {
    id: "gh0072",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel pays est l'ennemi principal de la France en 1914 ?",
    options: ["L'Italie", "L'Espagne", "L'Allemagne", "Le Royaume-Uni"],
    answer: 2,
    explanation: `❌ A. L'Italie - Faux. L'Italie n'est pas l'ennemi principal au début.\n中：错误。意大利不是主要敌人。\n\n❌ B. L'Espagne - Faux. L'Espagne n'est pas en guerre contre la France.\n中：错误。西班牙没有与法国开战。\n\n✅ C. L'Allemagne - Correct ! L'Allemagne est le principal adversaire en 1914.\n中：正确！1914年德国是主要敌人。\n\n❌ D. Le Royaume-Uni - Faux. Le Royaume-Uni est allié de la France.\n中：错误。英国是盟友。`
  },
  {
    id: "gh0073",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle conséquence majeure a la Première Guerre mondiale pour l'Europe ?",
    options: ["Une croissance économique", "Une forte baisse de la population", "La fin des colonies", "La création de l'euro"],
    answer: 1,
    explanation: `❌ A. Une croissance économique - Faux. La guerre détruit l'économie.\n中：错误。战争破坏经济。\n\n✅ B. Une forte baisse de la population - Correct ! La guerre cause de très nombreuses pertes humaines.\n中：正确！一战造成大量人口损失。\n\n❌ C. La fin des colonies - Faux. La décolonisation vient plus tard.\n中：错误。殖民体系不是立即结束。\n\n❌ D. La création de l'euro - Faux. L'euro est récent。\n中：错误。欧元是现代事件。`
  },
  {
    id: "gh0074",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel événement déclenche la Seconde Guerre mondiale en 1939 ?",
    options: ["L'attaque de Pearl Harbor", "L'invasion de la Pologne", "La bataille de Stalingrad", "Le débarquement en Normandie"],
    answer: 1,
    explanation: `❌ A. L'attaque de Pearl Harbor - Faux. L'attaque de Pearl Harbor a eu lieu en 1941 et concerne les États-Unis.\n中：错误。珍珠港事件发生在1941年，与美国有关。\n\n✅ B. L'invasion de la Pologne - Correct ! L'invasion de la Pologne par l'Allemagne le 1er septembre 1939 déclenche la Seconde Guerre mondiale.\n中：正确！1939年9月1日德国入侵波兰，引发二战。\n\n❌ C. La bataille de Stalingrad - Faux. La bataille de Stalingrad a eu lieu en 1942--1943.\n中：错误。斯大林格勒战役发生在1942-1943年。\n\n❌ D. Le débarquement en Normandie - Faux. Le débarquement de Normandie a eu lieu en 1944.\n中：错误。诺曼底登陆发生在1944年。`
  },
  {
    id: "gh0075",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel régime collabore avec l'Allemagne nazie en France ?",
    options: ["La IVe République", "Le régime de Vichy", "Le Front populaire", "La IIIe République"],
    answer: 1,
    explanation: `❌ A. La IVe République - Faux. La IVe République est après 1945。\n中：错误。第四共和国在战后成立。\n\n✅ B. Le régime de Vichy - Correct ! Le régime de Vichy collabore avec l'Allemagne.\n中：正确！维希政权与纳粹合作。\n\n❌ C. Le Front populaire - Faux. C'est un gouvernement de 1936, pas collaborationniste。\n中：错误。人民阵线不是合作政权。\n\n❌ D. La IIIe République - Faux. La IIIe République est renversée en 1940。\n中：错误。第三共和国在1940年崩溃。`
  },
  {
    id: "gh0076",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui dirige le régime de Vichy ?",
    options: ["Charles de Gaulle", "Léon Blum", "Philippe Pétain", "Georges Clemenceau"],
    answer: 2,
    explanation: `❌ A. Charles de Gaulle - Faux. De Gaulle dirige la France libre, pas Vichy.\n中：错误。戴高乐领导自由法国。\n\n❌ B. Léon Blum - Faux. Blum est un dirigeant de gauche (Front populaire), pas Vichy。\n中：错误。布卢姆不是维希政权领导人。\n\n✅ C. Philippe Pétain - Correct ! Pétain est le chef de l'État français sous Vichy.\n中：正确！贝当领导维希政府。\n\n❌ D. Georges Clemenceau - Faux. Clemenceau est un dirigeant de la Première Guerre mondiale。\n中：错误。克莱蒙梭是第一次世界大战时期的领导人。`
  },
  {
    id: "gh0077",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Comment appelle-t-on les Français qui combattent l'occupation allemande ?",
    options: ["Les poilus", "Les résistants", "Les conscrits", "Les soldats coloniaux"],
    answer: 1,
    explanation: `❌ A. Les poilus - Faux. "Poilus" désigne les soldats de la Première Guerre mondiale.\n中：错误。"poilus"指的是一战士兵。\n\n✅ B. Les résistants - Correct ! Les résistants combattent l'occupation nazie.\n中：正确！抵抗组织成员抵抗纳粹占领。\n\n❌ C. Les conscrits - Faux. "Conscrits" = appelés, pas forcément résistants.\n中：错误。"征兵者"不等于抵抗者。\n\n❌ D. Les soldats coloniaux - Faux. Ils sont soldats, mais pas le terme général.\n中：错误。不是专门指抵抗者。`
  },
  {
    id: "gh0078",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel événement marque la libération de Paris ?",
    options: ["Le débarquement en Provence", "L'insurrection d'août 1944", "La capitulation allemande", "Le procès de Nuremberg"],
    answer: 1,
    explanation: `❌ A. Le débarquement en Provence - Faux. Le débarquement en Provence a lieu en août 1944, mais ce n'est pas l'événement direct de la libération de Paris.\n中：错误。普罗旺斯登陆虽在1944年，但不是巴黎解放的直接事件。\n\n✅ B. L'insurrection d'août 1944 - Correct ! L'insurrection parisienne en août 1944 marque la libération de Paris.\n中：正确！1944年8月巴黎起义标志着巴黎解放。\n\n❌ C. La capitulation allemande - Faux. La capitulation a lieu en mai 1945.\n中：错误。德国投降在1945年5月。\n\n❌ D. Le procès de Nuremberg - Faux. C'est un procès après-guerre, pas la libération.\n中：错误。纽伦堡审判是战后事件。`
  },
  {
    id: "gh0079",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel événement politique majeur a lieu en France en 1958 ?",
    options: ["La fin de la Seconde Guerre mondiale", "La création de la Ve République", "La décolonisation totale", "L'entrée dans l'ONU"],
    answer: 1,
    explanation: `❌ A. La fin de la Seconde Guerre mondiale - Faux. La Seconde Guerre mondiale se termine en 1945.\n中：错误。二战结束是1945年。\n\n✅ B. La création de la Ve République - Correct ! La Ve République est créée en 1958.\n中：正确！第五共和国成立于1958年。\n\n❌ C. La décolonisation totale - Faux. La décolonisation se poursuit après 1958.\n中：错误。非完全结束。\n\n❌ D. L'entrée dans l'ONU - Faux. La France est membre fondateur.\n中：错误。法国是联合国创始成员国。`
  },
  {
    id: "gh0080",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui revient au pouvoir en 1958 ?",
    options: ["François Mitterrand", "Georges Pompidou", "Charles de Gaulle", "Valéry Giscard d'Estaing"],
    answer: 2,
    explanation: `❌ A. François Mitterrand - Faux. François Mitterrand ne revient pas au pouvoir en 1958, il devient président en 1981.\n中：错误。密特朗不是1958年上台，而是1981年当选总统。\n\n❌ B. Georges Pompidou - Faux. Georges Pompidou devient président en 1969, pas en 1958.\n中：错误。蓬皮杜是1969年当选。\n\n✅ C. Charles de Gaulle - Correct ! Charles de Gaulle revient au pouvoir en 1958 et fonde la Ve République.\n中：正确！戴高乐1958年回归执政，并建立第五共和国。\n\n❌ D. Valéry Giscard d'Estaing - Faux. Il devient président en 1974.\n中：错误。纪尧姆·德斯坦是1974年当选。`
  },
  {
    id: "gh0081",
    type: "carte multi",
    category: "Grandes périodes et personnages historiques",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle réforme importante a lieu en France en 1981 ?",
    options: ["La création de la Sécurité sociale", "L'abolition de la peine de mort", "Le droit de vote des femmes", "La fin du service militaire"],
    answer: 1,
    explanation: `❌ A. La création de la Sécurité sociale - Faux. La Sécurité sociale a été créée en 1945.\n中：错误。社会保障制度在1945年建立。\n\n✅ B. L'abolition de la peine de mort - Correct ! En 1981, la France abolit la peine de mort (sous le président François Mitterrand).\n中：正确！1981年法国废除死刑（密特朗总统时期）。\n\n❌ C. Le droit de vote des femmes - Faux. Les femmes obtiennent le droit de vote en 1944.\n中：错误。女性投票权在1944年获得。\n\n❌ D. La fin du service militaire - Faux. Le service militaire est supprimé plus tard (1997-2001).\n中：错误。义务兵役在更晚时期取消。`
  },


  {
    id: "so0001",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    options: [
      "La mairie",
      "La préfecture", 
      "L'Assurance maladie",
      "La banque"
    ],
    answer: 2,
    explanation: `❌ A. La mairie - Faux. parce que la mairie ne gère pas les remboursements de santé. Donc ce n'est pas le bon organisme.\n中：错误，因为市政府不负责医疗报销，所以不是正确对象。\n\n❌ B. La préfecture - Faux. parce que la préfecture gère les titres de séjour et l'administration, pas la santé. Donc ce n'est pas correct.\n中：错误，因为省政府主要处理行政事务，不管医疗报销，所以不正确。\n\n✅ C. L'Assurance maladie - Correct ! parce que l'Assurance maladie rembourse les soins. Donc on demande le remboursement à cet organisme.\n中：正确，因为医保负责报销医疗费用，所以报销要向医保申请。\n\n❌ D. La banque - Faux. parce que la banque gère l'argent mais ne rembourse pas les soins. Donc ce n'est pas le bon service.\n中：错误，因为银行不负责医疗报销，所以不正确。`
  },
  {
    id: "so0002",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Concernant l'accès aux soins, quelle proposition est correcte ?",
    options: [
      "Tout le monde paie le même tarif",
      "Certaines personnes peuvent bénéficier de la couverture maladie universelle ou d'aides",
      "Les soins sont gratuits pour les touristes uniquement",
      "Les hôpitaux privés ne soignent jamais gratuitement"
    ],
    answer: 1,
    explanation: `❌ A. Tout le monde paie le même tarif - Faux. parce que les tarifs varient selon la situation (CMU, aides, etc.). Donc ce n'est pas correct.\n中：错误，因为不同情况（CMU等）费用不同，所以不是正确选项。\n\n✅ B. Certaines personnes peuvent bénéficier de la couverture maladie universelle ou d'aides - Correct ! parce que certaines personnes ont des aides pour accéder aux soins. Donc cette proposition est correcte.\n中：正确，因为部分人可以享受CMU或补助，所以这是正确说法。\n\n❌ C. Les soins sont gratuits pour les touristes uniquement - Faux. parce que les touristes ne bénéficient pas automatiquement de soins gratuits. Donc ce n'est pas vrai.\n中：错误，因为游客通常不享受免费医疗，所以不正确。\n\n❌ D. Les hôpitaux privés ne soignent jamais gratuitement - Faux. parce que dans certains cas, des soins peuvent être pris en charge ou aidés. Donc cette phrase est fausse.\n中：错误，因为在某些情况下私立医院也可获得资助或报销，所以不绝对。`
  },
  {
    id: "so0003",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "En cas de problème de santé non urgent, à qui faut-il s'adresser en premier ?",
    options: [
      "Médecin traitant",
      "Urgences de l'hôpital",
      "Pharmacie",
      "Ambulance"
    ],
    answer: 0,
    explanation: `✅ A. Médecin traitant - Correct ! parce que pour un problème non urgent, on consulte d'abord son médecin traitant. Donc c'est le premier contact.\n中：正确，因为非紧急健康问题先看家庭医生，所以是第一步。\n\n❌ B. Urgences de l'hôpital - Faux. parce que les urgences sont pour les situations graves et immédiates. Donc ce n'est pas la première étape.\n中：错误，因为急诊只处理严重紧急情况，所以不是第一步。\n\n❌ C. Pharmacie - Faux. parce que le pharmacien peut conseiller mais ne remplace pas un médecin pour un problème de santé. Donc ce n'est pas la première solution.\n中：错误，因为药师只能建议，不能代替医生诊断，所以不是首选。\n\n❌ D. Ambulance - Faux. parce que l'ambulance est pour les urgences et situations graves. Donc ce n'est pas adapté.\n中：错误，因为救护车用于紧急情况，所以不适用。`
  },
  {
    id: "so0004",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est le rôle du médecin traitant ?",
    options: [
      "Guider les patients et coordonner leurs soins",
      "Se concentrer uniquement sur les urgences",
      "Remplir des formulaires administratifs",
      "Faire uniquement des prescriptions pour les hôpitaux"
    ],
    answer: 0,
    explanation: `✅ A. Guider les patients et coordonner leurs soins - Correct ! parce que le médecin traitant oriente le patient et coordonne les soins. Donc c'est son rôle principal.\n中：正确，因为家庭医生指导并协调治疗，所以这是主要职责。\n\n❌ B. Se concentrer uniquement sur les urgences - Faux. parce que le médecin traitant suit le patient au quotidien, pas seulement les urgences. Donc ce n'est pas vrai.\n中：错误，因为家庭医生是长期跟踪，不只处理急诊，所以不对。\n\n❌ C. Remplir des formulaires administratifs - Faux. parce que ce n'est pas sa mission principale. Donc ce n'est pas la réponse.\n中：错误，因为填写表格不是主要职责，所以不对。\n\n❌ D. Faire uniquement des prescriptions pour les hôpitaux - Faux. parce que il prescrit aussi des soins courants et suit le patient. Donc ce n'est pas correct.\n中：错误，因为家庭医生也开常规处方，不仅给医院，所以不对。`
  },
 {
  id: "so0005",
  type: "carte multi",
  category: "Accès aux soins",
  difficulté: "simple",
  typeQuestion: "examen original",
  question: "Dans quelles situations doit-on se rendre aux urgences de l'hôpital ?",
  options: [
    "Pour un accident grave ou maladie nécessitant une intervention immédiate",
    "Pour un rhume léger",
    "Pour un rendez-vous de routine",
    "Pour des questions administratives"
  ],
  answer: 0,
  explanation: "a) Correct, parce que les urgences sont pour les situations graves nécessitant une action immédiate. Donc c’est le bon choix.\n中：正确，因为急诊用于严重事故或需立即治疗的病症，所以是正确选项。\n\nb) Faux, parce que un rhume léger ne nécessite pas d’urgence. Donc ce n’est pas la bonne raison.\n中：错误，因为轻微感冒不需要急诊，所以不对。\n\nc) Faux, parce que les rendez-vous de routine se font chez le médecin. Donc ce n’est pas urgent.\n中：错误，因为常规预约在医生处进行，不是急诊。\n\nd) Faux, parce que les urgences ne gèrent pas l’administration. Donc ce n’est pas correct.\n中：错误，因为急诊不处理行政问题，所以不对。"
},
  {
    id: "so0006",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est l'objectif des vaccinations obligatoires ?",
    options: [
      "Protéger la santé de tous",
      "Faire plaisir aux médecins",
      "Créer des emplois",
      "Être obligé de payer"
    ],
    answer: 0,
    explanation: `✅ A. Protéger la santé de tous - Correct ! parce que les vaccinations obligatoires visent à protéger la population et éviter les épidémies. Donc c'est l'objectif.\n中：正确，因为强制疫苗旨在保护全民健康，防止疫情，所以是目标。\n\n❌ B. Faire plaisir aux médecins - Faux. parce que ce n'est pas l'objectif des vaccins. Donc ce n'est pas vrai.\n中：错误，因为不是为了取悦医生，所以不对。\n\n❌ C. Créer des emplois - Faux. parce que ce n'est pas la raison principale. Donc ce n'est pas correct.\n中：错误，因为不是为了创造就业，所以不对。\n\n❌ D. Être obligé de payer - Faux. parce que la vaccination vise la santé, pas l'obligation de payer. Donc ce n'est pas la bonne réponse.\n中：错误，因为目的不是收费，所以不对。`
  },



  {
    id: "so0007",
  type: "carte multi",
  category: "Accès aux soins",
  difficulté: "simple",
  typeQuestion: "examen original",
  question: "À quoi sert la carte Vitale ?",
  options: [
    "Pour rembourser les frais de santé rapidement",
    "Pour payer moins d’impôts",
    "Pour justifier ses études",
    "Pour voyager à l’étranger"
  ],
  answer: 0,
  explanation: "a) Correct, parce que la carte Vitale permet d’accélérer les remboursements. Donc c’est son utilité.\n中：正确，因为Vitale卡可加快医疗报销，所以就是用来报销的。\n\nb) Faux, parce que la carte Vitale n’est pas liée aux impôts. Donc ce n’est pas son rôle.\n中：错误，因为与税务无关，所以不对。\n\nc) Faux, parce que ce n’est pas un document scolaire. Donc ce n’est pas correct.\n中：错误，因为不是学历证明，所以不对。\n\nd) Faux, parce que la carte Vitale sert en France pour la santé. Donc ce n’est pas sa fonction.\n中：错误，因为它在法国用于医疗，不是旅行证件。"
},
  {
    id: "so0008",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "À quoi sert une mutuelle santé ?",
    options: [
      "Compléter le remboursement de l'Assurance maladie",
      "Augmenter le salaire",
      "Remplacer la carte Vitale",
      "Payer les impôts"
    ],
    answer: 0,
    explanation: `✅ A. Compléter le remboursement de l'Assurance maladie - Correct ! parce que la mutuelle complète ce que l'Assurance maladie ne rembourse pas. Donc c'est son rôle.\n中：正确，因为补充医疗保险补足医保未报销部分，所以就是作用。\n\n❌ B. Augmenter le salaire - Faux. parce que la mutuelle n'est pas liée au salaire. Donc ce n'est pas vrai.\n中：错误，因为与工资无关，所以不对。\n\n❌ C. Remplacer la carte Vitale - Faux. parce que la carte Vitale est obligatoire pour l'Assurance maladie, la mutuelle ne la remplace pas. Donc ce n'est pas correct.\n中：错误，因为不能替代Vitale卡，所以不对。\n\n❌ D. Payer les impôts - Faux. parce que la mutuelle ne sert pas à payer les impôts. Donc ce n'est pas correct.\n中：错误，因为不是税务用途，所以不对。`
  },
  {
    id: "so0009",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Concernant l'accès aux soins, quelle proposition est correcte ?",
    options: [
      "Tout le monde peut consulter un médecin sans ordonnance.",
      "Les consultations médicales sont toujours remboursées à 100%.",
      "Certaines personnes peuvent bénéficier de la prise en charge sans avance de frais.",
      "Les soins dentaires sont gratuits pour tous."
    ],
    answer: 2,
    explanation: `❌ A. Tout le monde peut consulter un médecin sans ordonnance. - Faux. parce que certaines consultations nécessitent une ordonnance (par exemple un spécialiste ou certains examens). Donc on ne peut pas dire que tout le monde peut consulter sans ordonnance.\n中：错误，**因为**某些医生或检查需要处方，**所以**并不是所有人都可以无处方就看病。\n\n❌ B. Les consultations médicales sont toujours remboursées à 100%. - Faux. parce que le remboursement dépend de la situation et du type de soins. En général, ce n'est pas 100% sauf cas particuliers (ALD, maternité, etc.). Donc ce n'est pas toujours vrai.\n中：错误，**因为**报销比例取决于情况，通常不是 100%，**所以**不能说\"总是 100%\".\n\n✅ C. Certaines personnes peuvent bénéficier de la prise en charge sans avance de frais. - Correct ! parce que certaines personnes (ex : bénéficiaires de la C2S ou de l'ALD) peuvent bénéficier du tiers payant ou d'une prise en charge à 100% sans avancer l'argent. Donc cette proposition est correcte.\n中：正确，**因为**一些人（如 C2S 受益者、长期病患者）可享受\"第三方支付/不垫付费用\"，**所以**这项说法正确。\n\n❌ D. Les soins dentaires sont gratuits pour tous. - Faux. parce que les soins dentaires ne sont pas gratuits pour tout le monde : ils dépendent du remboursement de l'Assurance maladie et de la mutuelle. Donc ce n'est pas vrai.\n中：错误，**因为**牙科费用不是对所有人免费，取决于医保报销和补充保险，**所以**这项不正确。`
  },
  {
    id: "so0010",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "À qui est accessible la contraception ?",
    options: [
      "À toutes les personnes",
      "Aux adolescents uniquement",
      "Aux hommes uniquement",
      "À personne avant 18 ans"
    ],
    answer: 0,
    explanation: `✅ A. À toutes les personnes - Correct ! parce que la contraception est accessible à toute personne en âge de procréer, sans condition d'âge ou de situation, et l'accès est garanti pour tous (avec ou sans rendez-vous selon les structures). Donc c'est la bonne réponse.\n中：正确，**因为**避孕措施面向所有生育年龄的人，不限制年龄或身份，并且法律保障其可获得性，**所以**这是正确答案。\n\n❌ B. Aux adolescents uniquement - Faux. parce que la contraception ne se limite pas aux adolescents. Les adultes peuvent aussi y avoir accès. Donc cette proposition est trop restrictive.\n中：错误，**因为**避孕不仅限于青少年，成年人也可以使用，**所以**该选项过于狭窄。\n\n❌ C. Aux hommes uniquement - Faux. parce que la contraception concerne toutes les personnes, hommes et femmes (préservatifs, pilule, stérilet, etc.). Donc ce n'est pas réservé aux hommes.\n中：错误，**因为**避孕涉及男女双方，不仅男性，**所以**不正确。\n\n❌ D. À personne avant 18 ans - Faux. parce que les mineurs peuvent accéder à la contraception sans autorisation parentale dans un cadre médical. Donc cette affirmation est fausse.\n中：错误，**因为**未成年人在医疗机构可以获得避孕，不需要父母同意，**所以**该说法错误。`
  },
  {
    id: "so0011",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qu'est-ce que le principe de confidentialité dans le domaine de la santé ?",
    options: [
      "Les informations médicales restent secrètes entre patient et professionnel de santé",
      "Les médecins peuvent tout raconter à la famille",
      "Les infirmiers publient les dossiers",
      "Tout est accessible à la mairie"
    ],
    answer: 0,
    explanation: `✅ A. Les informations médicales restent secrètes entre patient et professionnel de santé - Correct ! parce que le secret médical protège la vie privée du patient. Donc les informations ne sont pas partagées sans autorisation.\n中：正确，因为医疗保密保护隐私，所以信息不会随意外泄。\n\n❌ B. Les médecins peuvent tout raconter à la famille - Faux. parce que sans accord du patient, ils ne peuvent pas divulguer. Donc ce n'est pas vrai.\n中：错误，因为未经患者同意不能告知家属，所以不对。\n\n❌ C. Les infirmiers publient les dossiers - Faux. parce que publier des dossiers viole le secret médical. Donc c'est interdit.\n中：错误，因为发布病历违反保密原则。\n\n❌ D. Tout est accessible à la mairie - Faux. parce que la mairie n'a pas accès aux données médicales. Donc ce n'est pas correct.\n中：错误，因为市政府无法获取医疗信息。`
  },
  {
    id: "so0012",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "L'inscription à l'Assurance maladie est :",
    options: [
      "Obligatoire pour tous les résidents en France",
      "Facultative",
      "Seule pour les employés",
      "Pour les retraités seulement"
    ],
    answer: 0,
    explanation: `✅ A. Obligatoire pour tous les résidents en France - Correct ! parce que la protection sociale est obligatoire pour les résidents. Donc l'inscription est obligatoire.\n中：正确，因为法国居民必须参加医保，所以注册是强制的。\n\n❌ B. Facultative - Faux. parce que ce n'est pas optionnel. Donc ce n'est pas correct.\n中：错误，因为不是自愿的，所以不对。\n\n❌ C. Seule pour les employés - Faux. parce que même les étudiants ou les sans emploi doivent être couverts. Donc ce n'est pas vrai.\n中：错误，因为不仅员工需要医保，其他居民也需要。\n\n❌ D. Pour les retraités seulement - Faux. parce que ce n'est pas réservé aux retraités. Donc ce n'est pas correct.\n中：错误，因为不限于退休人员。`
  },
  {
  id: "so0013",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "moyen",
  typeQuestion: "examen original",
  question: "Quel professionnel peut délivrer des conseils pour un mal de tête léger ?",
  options: [
    "Pharmacien",
    "Médecin spécialiste",
    "Chirurgien",
    "Infirmier"
  ],
  answer: 0,
  explanation: "a) Correct, parce que le pharmacien peut conseiller pour un mal de tête léger. Donc c’est le bon choix.\n中：正确，因为药师可建议轻微头痛处理。\n\nb) Faux, parce que ce n’est pas nécessaire pour un mal de tête léger. Donc ce n’est pas le premier choix.\n中：错误，因为不需要专科医生。\n\nc) Faux, parce qu’un chirurgien ne traite pas ce type de problème en priorité. Donc ce n’est pas adapté.\n中：错误，因为外科医生不适合处理轻微头痛。\n\nd) Faux, parce que l’infirmier peut aider, mais le pharmacien est le plus accessible pour ce cas. Donc ce n’est pas le meilleur choix.\n中：错误，因为护士可以协助，但药师更合适。"
},
{
    id: "so0014",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "moyen",
  typeQuestion: "examen original",
  question: "Que signifie le parcours de soins coordonnés ?",
  options: [
    "Commencer par le médecin traitant qui oriente vers d’autres professionnels",
    "Consulter directement un spécialiste",
    "Aller seulement à l’hôpital",
    "Ne jamais consulter le médecin"
  ],
  answer: 0,
  explanation: "a) Correct, parce que le parcours coordonné commence par le médecin traitant. Donc il oriente vers spécialistes si besoin.\n中：正确，因为协调医疗路径要先看家庭医生，由他转诊。\n\nb) Faux, parce que sans orientation, le remboursement peut être moins élevé. Donc ce n’est pas le parcours coordonné.\n中：错误，因为直接看专科可能报销降低，不属于协调路径。\n\nc) Faux, parce que l’hôpital n’est pas le seul lieu de soins. Donc ce n’est pas correct.\n中：错误，因为不只是去医院。\n\nd) Faux, parce que le médecin est au centre du parcours. Donc ce n’est pas vrai.\n中：错误，因为必须看医生。"
},
{
  id: "so0015",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "moyen",

  typeQuestion: "examen original",
  question: "Quelle structure peut accueillir les enfants de moins de 6 ans pour un suivi santé ?",
  options: [
    "Centre de protection maternelle et infantile (PMI)",
    "Hôpital privé",
    "Pharmacie",
    "Cabinet de médecin spécialiste"
  ],
  answer: 0,
  explanation: "a) Correct, parce que la PMI assure le suivi santé des jeunes enfants. Donc c’est la structure adaptée.\n中：正确，因为PMI负责6岁以下儿童健康随访，所以适合。\n\nb) Faux, parce que ce n’est pas le lieu principal pour le suivi systématique. Donc ce n’est pas la réponse idéale.\n中：错误，因为不是常规随访主要机构。\n\nc) Faux, parce que la pharmacie ne fait pas de suivi médical complet. Donc ce n’est pas correct.\n中：错误，因为药店不做完整健康随访。\n\nd) Faux, parce que ce n’est pas systématiquement pour tous les enfants. Donc ce n’est pas la structure principale.\n中：错误，因为专科诊所不一定适用于全部儿童随访。"
},
  {
    id: "so0016",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel professionnel assure le suivi de vaccination personnalisé ?",
    options: [
      "Médecin traitant",
      "Pharmacien",
      "Sage-femme uniquement",
      "Infirmier scolaire"
    ],
    answer: 0,
    explanation: `✅ A. Médecin traitant - Correct ! parce que le médecin traitant suit le dossier vaccinal du patient. Donc il assure un suivi personnalisé.\n中：正确，因为家庭医生跟踪疫苗记录，所以负责个性化随访。\n\n❌ B. Pharmacien - Faux. parce que il peut conseiller mais pas toujours suivre le dossier complet. Donc ce n'est pas le principal.\n中：错误，因为药师可以建议，但不负责完整档案。\n\n❌ C. Sage-femme uniquement - Faux. parce que la sage-femme suit surtout les femmes enceintes. Donc ce n'est pas uniquement elle.\n中：错误，因为助产士主要服务孕妇，不是唯一负责人。\n\n❌ D. Infirmier scolaire - Faux. parce que l'infirmier scolaire ne suit pas le dossier vaccinal complet de tous. Donc ce n'est pas correct.\n中：错误，因为学校护士不负责全程疫苗跟踪。`
  },
  {
    id: "so0017",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Où peut-on récupérer des médicaments sur prescription ?",
  options: [
    "Pharmacie",
    "Poste",
    "Banque",
    "Mairie"
  ],
  answer: 0,
  explanation: "a) Correct, parce que les médicaments sur ordonnance se retirent en pharmacie. Donc c’est le bon lieu.\n中：正确，因为处方药在药房取，所以答案是药房。\n\nb) Faux, parce que la poste ne distribue pas les médicaments. Donc ce n’est pas possible.\n中：错误，因为邮局不发药。\n\nc) Faux, parce que la banque ne vend pas de médicaments. Donc ce n’est pas correct.\n中：错误，因为银行不卖药。\n\nd) Faux, parce que la mairie ne délivre pas de médicaments. Donc ce n’est pas correct.\n中：错误，因为市政府不发药。"
},
  {
    id: "so0018",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel professionnel traite les troubles mentaux et émotionnels ?",
  options: [
    "Psychiatre",
    "Médecin généraliste",
    "Ophtalmologue",
    "Dentiste"
  ],
  answer: 0,
  explanation: "a) Correct, parce que le psychiatre est spécialisé dans les troubles mentaux. Donc c’est le professionnel adapté.\n中：正确，因为精神科医生专门治疗心理问题，所以是适合的专业人士。\n\nb) Faux, parce que il peut orienter, mais n’est pas spécialiste. Donc ce n’est pas la meilleure réponse.\n中：错误，因为全科医生可转诊，但不是专业医生。\n\nc) Faux, parce que il traite les yeux, pas la santé mentale. Donc ce n’est pas correct.\n中：错误，因为眼科医生不治心理问题。\n\nd) Faux, parce que il traite les dents, pas la santé mentale. Donc ce n’est pas correct.\n中：错误，因为牙医不处理心理问题。"
 },
  {
    id: "so0019",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui centralise le dossier médical du patient ?",
    options: [
      "Médecin traitant",
      "Pharmacien",
      "Hôpital",
      "Assurance maladie"
    ],
    answer: 0,
    explanation: `✅ A. Médecin traitant - Correct ! parce que le médecin traitant centralise le dossier médical du patient. Donc il suit l'historique médical.\n中：正确，因为家庭医生集中管理病历，所以负责跟踪历史记录。\n\n❌ B. Pharmacien - Faux. parce que il ne centralise pas le dossier complet. Donc ce n'est pas le bon choix.\n中：错误，因为药师不管理完整病历。\n\n❌ C. Hôpital - Faux. parce que l'hôpital a un dossier mais pas central pour tous les soins. Donc ce n'est pas la réponse.\n中：错误，因为医院有病历但不是全程中心。\n\n❌ D. Assurrance maladie - Faux. parce que elle gère les remboursements, pas le dossier médical complet. Donc ce n'est pas correct.\n中：错误，因为医保只管理报销，不是病历中心。`
  },
  {
    id: "so0020",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quels examens le médecin traitant peut-il prescrire ?",
    options: [
      "Examens de routine ou dépistage",
      "Seulement examens chirurgicaux",
      "Examens hors du territoire",
      "Aucun examen"
    ],
    answer: 0,
    explanation: `✅ A. Examens de routine ou dépistage - Correct ! parce que le médecin traitant peut prescrire des examens médicaux courants. Donc c'est correct.\n中：正确，因为家庭医生可开常规检查或筛查，所以答案是A。\n\n❌ B. Seulement examens chirurgicaux - Faux. parce que il peut prescrire d'autres examens, pas seulement chirurgicaux. Donc ce n'est pas correct.\n中：错误，因为不限于外科检查。\n\n❌ C. Examens hors du territoire - Faux. parce que ce n'est pas sa mission principale. Donc ce n'est pas vrai.\n中：错误，因为不负责境外检查。\n\n❌ D. Aucun examen - Faux. parce que il peut prescrire des examens. Donc ce n'est pas correct.\n中：错误，因为他可以开检查。`
  },
  {
    id: "so0021",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
     question: "Quel service est ouvert 24h/24 et 7j/7 pour les urgences vitales ?",
  options: [
    "Pharmacie",
    "Urgences hospitalières",
    "Médecin traitant",
    "Mutuelle"
  ],
  answer: 1,
  explanation: "a) Faux, parce que les pharmacies ne sont pas toutes ouvertes 24h/24.\n中：错误，因为药店并非全天候营业。\n\nb) Correct, parce que les urgences hospitalières sont ouvertes 24h/24 et 7j/7 pour les situations vitales.\n中：正确，因为医院急诊全天候开放，处理生命危险情况。\n\nc) Faux, parce que le médecin traitant consulte sur rendez-vous et n’est pas disponible 24h/24. Il n’est pas un service d’urgence vital.\n中：错误，因为家庭医生需要预约看诊，无法全天候值班，也不适用于生命危险的急诊。\n\nd) Faux, parce que la mutuelle est une assurance santé, pas un service d’urgence.\n中：错误，因为保险不是急诊服务。"
},
  {
    id: "so0022",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qu’est-ce que la Complémentaire Santé Solidaire (C2S) ?",
  options: [
    "Une couverture pour personnes aux ressources modestes",
    "Une couverture pour étudiants uniquement",
    "Une carte Vitale",
    "Une mutuelle obligatoire"
  ],
  answer: 0,
  explanation: "a) Correct, parce que la C2S aide les personnes à faibles ressources à payer les soins. Donc c’est une aide sociale.\n中：正确，因为C2S是给低收入人群的医疗补助。\n\nb) Faux, parce que ce n’est pas réservé aux étudiants. Donc ce n’est pas correct.\n中：错误，因为不只学生可用。\n\nc) Faux, parce que la C2S n’est pas une carte. Donc ce n’est pas vrai.\n中：错误，因为不是Vitale卡。\n\nd) Faux, parce que ce n’est pas obligatoire, c’est une aide selon les ressources. Donc ce n’est pas correct.\n中：错误，因为不是强制性互助保险。"
},
  {
    id: "so0023",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
     question: "Quelle plateforme peut-on utiliser pour prendre rendez-vous avec un médecin ?",
  options: [
    "Ameli",
    "Doctolib",
    "Banque en ligne",
    "Préfecture"
  ],
  answer: 1,
  explanation: "a) Faux, parce que Ameli sert surtout aux remboursements et démarches, pas aux rendez-vous. Donc ce n’est pas la meilleure réponse.\n中：错误，因为Ameli主要用于报销，不是预约。\n\nb) Correct, parce que Doctolib permet de prendre des rendez-vous médicaux en ligne. Donc c’est la bonne plateforme.\n中：正确，因为Doctolib可以在线预约医生，所以是正确答案。\n\nc) Faux, parce que la banque ne sert pas à prendre RDV médical. Donc ce n’est pas correct.\n中：错误，因为银行不能预约医生。\n\nd) Faux, parce que la préfecture gère l’administration, pas les rendez-vous médicaux. Donc ce n’est pas correct.\n中：错误，因为省政府不负责医疗预约。"
},
  {
    id: "so0024",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quels examens sont remboursés à 100% pendant la grossesse ?",
    options: [
      "Examens obligatoires du suivi de grossesse",
      "Tous les soins esthétiques",
      "Consultations vétérinaires",
      "Transport"
    ],
    answer: 0,
    explanation: `✅ A. Examens obligatoires du suivi de grossesse - Correct ! parce que les examens obligatoires de grossesse sont remboursés à 100%. Donc c'est la bonne réponse.\n中：正确，因为孕期必需检查100%报销。\n\n❌ B. Tous les soins esthétiques - Faux. parce que les soins esthétiques ne sont pas remboursés. Donc ce n'est pas correct.\n中：错误，因为美容不报销。\n\n❌ C. Consultations vétérinaires - Faux. parce que ce n'est pas médical pour humains. Donc ce n'est pas correct.\n中：错误，因为兽医不属于人类医疗。\n\n❌ D. Transport - Faux. parce que ce n'est pas systématiquement remboursé à 100%. Donc ce n'est pas correct.\n中：错误，因为交通费用不一定全报销。`
  },
  {
    id: "so0025",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "À quoi sert \"Mon Bilan Prévention\" ?",
    options: [
      "Évaluer ses habitudes de vie",
      "Obtenir un remboursement",
      "Se faire vacciner uniquement",
      "Prendre rendez-vous avec le pharmacien"
    ],
    answer: 0,
    explanation: `✅ A. Évaluer ses habitudes de vie - Correct ! parce que Mon Bilan Prévention aide à faire un bilan de santé et de mode de vie. Donc c'est son utilité.\n中：正确，因为它用于评估生活习惯和健康状况。\n\n❌ B. Obtenir un remboursement - Faux. parce que ce n'est pas une démarche de remboursement. Donc ce n'est pas correct.\n中：错误，因为不是报销工具。\n\n❌ C. Se faire vacciner uniquement - Faux. parce que c'est plus large que la vaccination. Donc ce n'est pas vrai.\n中：错误，因为不只疫苗。\n\n❌ D. Prendre rendez-vous avec le pharmacien - Faux. parce que ce n'est pas une plateforme de RDV. Donc ce n'est pas correct.\n中：错误，因为不是预约药师。`
  },
  {
    id: "so0026",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui peut devenir médecin traitant ?",
    options: [
      "Tout médecin généraliste déclaré par le patient",
      "Médecin spécialiste uniquement",
      "Pharmacien",
      "Chirurgien"
    ],
    answer: 0,
    explanation: `✅ A. Tout médecin généraliste déclaré par le patient - Correct ! parce que le médecin traitant est un médecin généraliste choisi par le patient. Donc c'est possible.\n中：正确，因为家庭医生是患者选择的全科医生。\n\n❌ B. Médecin spécialiste uniquement - Faux. parce que ce n'est pas un spécialiste mais un médecin généraliste. Donc ce n'est pas correct.\n中：错误，因为不是专科医生。\n\n❌ C. Pharmacien - Faux. parce que un pharmacien ne peut pas être médecin traitant. Donc ce n'est pas correct.\n中：错误，因为药师不能担任家庭医生。\n\n❌ D. Chirurgien - Faux. parce que ce n'est pas un rôle de chirurgien. Donc ce n'est pas correct.\n中：错误，因为外科医生不能当家庭医生。`
  },
  {
    id: "so0027",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelles consultations sont prises en charge par la PUMa ?",
    options: [
      "Consultations médicales de base pour tous les résidents",
      "Consultations esthétiques",
      "Voyages",
      "Téléphonie"
    ],
    answer: 0,
    explanation: `✅ A. Consultations médicales de base pour tous les résidents - Correct ! parce que la PUMa couvre les soins de base pour les résidents. Donc c'est la bonne réponse.\n中：正确，因为PUMa覆盖居民基础医疗。\n\n❌ B. Consultations esthétiques - Faux. parce que ce n'est pas médicalement nécessaire. Donc ce n'est pas pris en charge.\n中：错误，因为美容不属于医疗必要。\n\n❌ C. Voyages - Faux. parce que ce n'est pas un soin médical. Donc ce n'est pas correct.\n中：错误，因为旅游不是医疗。\n\n❌ D. Téléphonie - Faux. parce que ce n'est pas un service de santé. Donc ce n'est pas correct.\n中：错误，因为电话服务不属于。`
  },
  {
    id: "so0028",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle aide peut couvrir les frais de santé pour une personne sans ressources ?",
    options: [
      "C2S",
      "Mutuelle de l'employeur",
      "Carte Vitale",
      "Doctolib"
    ],
    answer: 0,
    explanation: `✅ A. C2S - Correct ! parce que la C2S aide les personnes sans ressources à payer les soins. Donc elle peut couvrir les frais.\n中：正确，因为C2S为无资源者提供医疗费用补助。\n\n❌ B. Mutuelle de l'employeur - Faux. parce que une personne sans ressources n'a souvent pas d'employeur. Donc ce n'est pas la solution.\n中：错误，因为无收入者通常没有雇主保险。\n\n❌ C. Carte Vitale - Faux. parce que la carte Vitale permet le remboursement mais ne suffit pas seule si pas de couverture. Donc ce n'est pas l'aide principale.\n中：错误，因为Vitale卡只是报销工具，不是补助。\n\n❌ D. Doctolib - Faux. parce que Doctolib sert à prendre RDV, pas à payer les soins. Donc ce n'est pas correct.\n中：错误，因为不是支付援助。`
  },
  {
    id: "so0029",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui peut donner des conseils pour arrêter de fumer ?",
    options: [
      "Médecin traitant",
      "Pharmacien",
      "Sage-femme uniquement",
      "Infirmier scolaire"
    ],
    answer: 0,
    explanation: `✅ A. Médecin traitant - Correct ! parce que le médecin traitant peut accompagner et prescrire des aides pour arrêter de fumer. Donc il peut donner des conseils.\n中：正确，因为家庭医生可提供戒烟建议和药物支持。\n\n❌ B. Pharmacien - Faux. parce que il peut conseiller mais ce n'est pas son rôle principal. Donc ce n'est pas la meilleure réponse.\n中：错误，因为药师可建议但不是主要负责人。\n\n❌ C. Sage-femme uniquement - Faux. parce que la sage-femme suit surtout les femmes enceintes. Donc ce n'est pas uniquement elle.\n中：错误，因为助产士主要服务孕妇。\n\n❌ D. Infirmier scolaire - Faux. parce que il peut informer mais pas toujours prescrire. Donc ce n'est pas le principal.\n中：错误，因为学校护士不一定能提供专业戒烟治疗。`
  },
  {
    id: "so0030",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel professionnel peut prescrire un rendez-vous chez un ophtalmologue ?",
    options: [
      "Médecin traitant",
      "Pharmacien",
      "Sage-femme",
      "Dentiste"
    ],
    answer: 0,
    explanation: `✅ A. Médecin traitant - Correct ! parce que il peut orienter vers un spécialiste comme l'ophtalmologue. Donc c'est la bonne réponse.\n中：正确，因为家庭医生可转诊眼科医生。\n\n❌ B. Pharmacien - Faux. parce que il ne prescrit pas de rendez-vous. Donc ce n'est pas correct.\n中：错误，因为药师不能开转诊。\n\n❌ C. Sage-femme - Faux. parce que ce n'est pas son rôle. Donc ce n'est pas correct.\n中：错误，因为助产士不负责转诊眼科。\n\n❌ D. Dentiste - Faux. parce que il ne prescrit pas des consultations d'ophtalmologie. Donc ce n'est pas correct.\n中：错误，因为牙医不转诊眼科。`
  },

  {
    id: "so0031",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel document prouve l'inscription à l'Assurance Maladie ?",
    options: [
      "Carte Vitale",
      "Passeport",
      "Carte bancaire",
      "Permis de conduire"
    ],
    answer: 0,
    explanation: `✅ A. Carte Vitale - Correct ! parce que la carte Vitale prouve que l'on est inscrit à l'Assurance maladie. Donc c'est le bon document.\n中：正确，因为Vitale卡证明医保注册。\n\n❌ B. Passeport - Faux. parce que le passeport prouve l'identité mais pas l'inscription. Donc ce n'est pas correct.\n中：错误，因为护照只证明身份，不证明医保。\n\n❌ C. Carte bancaire - Faux. parce que la carte bancaire n'a rien à voir avec l'assurance maladie. Donc ce n'est pas correct.\n中：错误，因为银行卡与医保无关。\n\n❌ D. Permis de conduire - Faux. parce que il prouve seulement le droit de conduire. Donc ce n'est pas correct.\n中：错误，因为驾照不证明医保。`
  },
  {
    id: "so0032",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel dispositif permet de ne pas avancer les frais médicaux remboursés ?",
    options: [
      "Tiers payant",
      "Mutuelle",
      "PUMa",
      "Carte Vitale"
    ],
    answer: 0,
    explanation: `✅ A. Tiers payant - Correct ! parce que le tiers payant permet de ne pas avancer les frais pris en charge. Donc le patient n'avance pas l'argent.\n中：正确，因为第三方支付可免垫付报销费用。\n\n❌ B. Mutuelle - Faux. parce que la mutuelle rembourse après paiement ou via tiers payant selon les cas, mais ce n'est pas le dispositif principal. Donc ce n'est pas la réponse.\n中：错误，因为互助保险通常是事后报销。\n\n❌ C. PUMa - Faux. parce que la PUMa est une couverture, pas un dispositif de paiement immédiat. Donc ce n'est pas correct.\n中：错误，因为PUMa是医保覆盖，不是免垫付机制。\n\n❌ D. Carte Vitale - Faux. parce que la carte Vitale facilite le remboursement, mais ne garantit pas l'absence d'avance. Donc ce n'est pas la réponse.\n中：错误，因为Vitale卡只是报销工具。`
  },
  {
    id: "so0033",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Où aller pour des conseils sur la sexualité et la contraception ?",
    options: [
      "Centre de santé sexuelle",
      "Médecin généraliste uniquement",
      "Pharmacie",
      "CPAM"
    ],
    answer: 0,
    explanation: `✅ A. Centre de santé sexuelle - Correct ! parce que ce centre donne des conseils sur la sexualité et la contraception. Donc c'est l'endroit adapté.\n中：正确，因为性健康中心提供避孕与性教育咨询。\n\n❌ B. Médecin généraliste uniquement - Faux. parce que le médecin peut aider, mais ce n'est pas le seul lieu. Donc ce n'est pas uniquement lui.\n中：错误，因为不仅全科医生能提供。\n\n❌ C. Pharmacie - Faux. parce que le pharmacien peut conseiller mais ne remplace pas un centre spécialisé. Donc ce n'est pas le meilleur choix.\n中：错误，因为药师不能完全替代专业中心。\n\n❌ D. CPAM - Faux. parce que la CPAM gère les remboursements, pas les conseils. Donc ce n'est pas correct.\n中：错误，因为CPAM不提供避孕咨询。`
  },
  {
    id: "so0034",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quels examens peuvent être proposés pour le dépistage du cancer colorectal ?",
    options: [
      "Par le médecin traitant dans le cadre de la prévention",
      "Par la mutuelle uniquement",
      "À la pharmacie",
      "Par les urgences"
    ],
    answer: 0,
    explanation: `✅ A. Par le médecin traitant dans le cadre de la prévention - Correct ! parce que le médecin traitant peut proposer le dépistage colorectal. Donc c'est la bonne réponse.\n中：正确，因为家庭医生可在预防中建议结肠癌筛查。\n\n❌ B. Par la mutuelle uniquement - Faux. parce que la mutuelle ne propose pas d'examens. Donc ce n'est pas correct.\n中：错误，因为互助保险不负责筛查安排。\n\n❌ C. À la pharmacie - Faux. parce que la pharmacie ne réalise pas ce dépistage. Donc ce n'est pas correct.\n中：错误，因为药店不做筛查。\n\n❌ D. Par les urgences - Faux. parce que les urgences ne font pas de dépistage. Donc ce n'est pas correct.\n中：错误，因为急诊不负责筛查。`
  },
  {
    id: "so0035",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "À quoi sert le secret médical partagé ?",
    options: [
      "Permettre aux professionnels de santé de communiquer pour soigner",
      "Partager avec la famille sans limite",
      "Publier les informations médicales",
      "Envoyer les informations à la mairie"
    ],
    answer: 0,
    explanation: `✅ A. Permettre aux professionnels de santé de communiquer pour soigner - Correct ! parce que le secret médical partagé facilite la coordination entre professionnels. Donc cela aide le soin.\n中：正确，因为共享医疗信息是为了医疗协调。\n\n❌ B. Partager avec la famille sans limite - Faux. parce que le partage est limité et protégé. Donc ce n'est pas vrai.\n中：错误，因为分享有权限限制。\n\n❌ C. Publier les informations médicales - Faux. parce que publier viole la confidentialité. Donc ce n'est pas correct.\n中：错误，因为发布信息违反保密。\n\n❌ D. Envoyer les informations à la mairie - Faux. parce que la mairie n'a pas accès. Donc ce n'est pas correct.\n中：错误，因为市政府无法获取。`
  },
  {
    id: "so0036",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quels professionnels suivent la santé mentale des jeunes ?",
    options: [
      "CMP, psychologues, psychiatres",
      "Médecin traitant uniquement",
      "Pharmacie",
      "Mutuelle"
    ],
    answer: 0,
    explanation: `✅ A. CMP, psychologues, psychiatres - Correct ! parce que ces professionnels interviennent pour la santé mentale des jeunes. Donc c'est la bonne réponse.\n中：正确，因为这些机构和专业人士负责青少年心理健康。\n\n❌ B. Médecin traitant uniquement - Faux. parce que il peut orienter mais n'est pas le seul. Donc ce n'est pas correct.\n中：错误，因为不是唯一。\n\n❌ C. Pharmacie - Faux. parce que la pharmacie ne suit pas la santé mentale. Donc ce n'est pas correct.\n中：错误，因为药店不负责。\n\n❌ D. Mutuelle - Faux. parce que la mutuelle ne suit pas la santé mentale. Donc ce n'est pas correct.\n中：错误，因为保险不跟踪。`
  },
  {
    id: "so0037",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
   question: "Quel remboursement est possible pendant la période de maternité ?",
  options: [
    "Les examens obligatoires à partir du 6ᵉ mois de grossesse",
    "Seulement consultations gynécologiques",
    "Soins esthétiques",
    "Transport"
  ],
  answer: 0,
  explanation: "a) Correct, parce que les examens obligatoires à partir du 6ᵉ mois font partie du suivi de grossesse et sont remboursés à 100% pendant la maternité.\n中：正确，因为从怀孕第六个月开始的必要检查属于孕期随访，符合“孕期保障”范围，因此可100%报销。\n\nb) Faux, parce que d’autres frais liés à la grossesse sont aussi remboursés. Donc ce n’est pas suffisant.\n中：错误，因为不只妇科咨询。\n\nc) Faux, parce que ce n’est pas médicalement nécessaire. Donc ce n’est pas remboursé.\n中：错误，因为美容不报销。\n\nd) Faux, parce que le transport n’est pas systématiquement remboursé à 100%. Donc ce n’est pas correct.\n中：错误，因为交通不一定全报销。"
},
  {
    id: "so0038",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle est la durée de couverture de la PUMa après un titre de séjour expiré ?",
    options: [
      "6 mois + 45 jours",
      "1 mois",
      "1 an",
      "Aucun"
    ],
    answer: 0,
    explanation: `✅ A. 6 mois + 45 jours - Correct ! parce que la PUMa continue parfois la couverture pendant cette durée après l'expiration du titre de séjour. Donc c'est la bonne réponse.\n中：正确，因为PUMa在居留证过期后有一定延续期（6个月+45天）。\n\n❌ B. 1 mois - Faux. parce que ce n'est pas la durée prévue. Donc ce n'est pas correct.\n中：错误，因为不是1个月。\n\n❌ C. 1 an - Faux. parce que c'est trop long. Donc ce n'est pas correct.\n中：错误，因为不是一年。\n\n❌ D. Aucun - Faux. parce que il existe une période de couverture. Donc ce n'est pas vrai.\n中：错误，因为不是完全没有。`
  },
  {
    id: "so0039",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quel professionnel peut se déplacer à domicile pour un problème urgent mais non vital ?",
    options: [
      "Médecin de garde",
      "Pharmacien",
      "Urgences hospitalières",
      "Dentiste"
    ],
    answer: 0,
    explanation: `✅ A. Médecin de garde - Correct ! parce que le médecin de garde peut faire une visite à domicile en cas d'urgence non vitale. Donc c'est le bon choix.\n中：正确，因为值班医生可上门处理非危急情况。\n\n❌ B. Pharmacien - Faux. parce que il ne se déplace pas à domicile. Donc ce n'est pas correct.\n中：错误，因为药师不上门。\n\n❌ C. Urgences hospitalières - Faux. parce que elles sont à l'hôpital, pas à domicile. Donc ce n'est pas correct.\n中：错误，因为急诊在医院。\n\n❌ D. Dentiste - Faux. parce que il ne se déplace pas pour ce type de situation. Donc ce n'est pas correct.\n中：错误，因为牙医不做此类上门。`
  },
  {
    id: "so0040",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui peut délivrer une ordonnance après consultation ?",
    options: [
      "Médecin traitant ou spécialiste",
      "Pharmacien",
      "Sage-femme uniquement",
      "Banque"
    ],
    answer: 0,
    explanation: `✅ A. Médecin traitant ou spécialiste - Correct ! parce que ce sont les professionnels habilités à prescrire. Donc ils peuvent délivrer une ordonnance.\n中：正确，因为医生或专科医生有处方权。\n\n❌ B. Pharmacien - Faux. parce que le pharmacien délivre le médicament mais ne prescrit pas. Donc ce n'est pas correct.\n中：错误，因为药师不写处方。\n\n❌ C. Sage-femme uniquement - Faux. parce que la sage-femme peut prescrire dans certains cas mais pas uniquement elle. Donc ce n'est pas correct.\n中：错误，因为助产士有一定权限但不是唯一。\n\n❌ D. Banque - Faux. parce que la banque n'a rien à voir avec la prescription médicale. Donc ce n'est pas correct.\n中：错误，因为银行不能开处方。`
  },
  {
    id: "so0041",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle couverture permet de compléter la PUMa ?",
    options: [
      "Mutuelle",
      "Carte Vitale",
      "Doctolib",
      "Pharmacie"
    ],
    answer: 0,
    explanation: `✅ A. Mutuelle - Correct ! parce que la mutuelle complète les remboursements de la PUMa. Donc c'est la bonne réponse.\n中：正确，因为互助保险补充PUMa报销。\n\n❌ B. Carte Vitale - Faux. parce que la carte Vitale ne complète pas, elle identifie simplement. Donc ce n'est pas correct.\n中：错误，因为Vitale卡只是识别工具。\n\n❌ C. Doctolib - Faux. parce que ce n'est pas une couverture. Donc ce n'est pas correct.\n中：错误，因为不是保险。\n\n❌ D. Pharmacie - Faux. parce que la pharmacie ne couvre pas les frais. Donc ce n'est pas correct.\n中：错误，因为药店不提供覆盖。`
  },
  {
    id: "so0042",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qu'est-ce que le tiers payant permet au patient ?",
    options: [
      "Ne pas avancer les frais remboursés",
      "Recevoir une mutuelle gratuite",
      "Voyager sans carte Vitale",
      "Obtenir des médicaments sans ordonnance"
    ],
    answer: 0,
    explanation: `✅ A. Ne pas avancer les frais remboursés - Correct ! parce que le tiers payant évite de payer d'avance ce qui est remboursé. Donc le patient ne paye pas sur place.\n中：正确，因为第三方支付免垫付报销部分。\n\n❌ B. Recevoir une mutuelle gratuite - Faux. parce que le tiers payant n'est pas une mutuelle. Donc ce n'est pas correct.\n中：错误，因为不是免费互助保险。\n\n❌ C. Voyager sans carte Vitale - Faux. parce que la carte Vitale est toujours utile pour les soins en France. Donc ce n'est pas correct.\n中：错误，因为仍需Vitale卡。\n\n❌ D. Obtenir des médicaments sans ordonnance - Faux. parce que il faut une ordonnance pour certains médicaments. Donc ce n'est pas correct.\n中：错误，因为不能无处方拿药。`
  },
  {
    id: "so0043",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Qui assure le suivi des maladies chroniques et de longue durée ?",
    options: [
      "Médecin traitant en coordination avec spécialistes",
      "Pharmacien uniquement",
      "Urgences hospitalières",
      "Banque"
    ],
    answer: 0,
    explanation: `✅ A. Médecin traitant en coordination avec spécialistes - Correct ! parce que le médecin traitant coordonne les soins pour les maladies chroniques. Donc il assure le suivi avec d'autres spécialistes.\n中：正确，因为家庭医生与专科医生协调管理慢性病。\n\n❌ B. Pharmacien uniquement - Faux. parce que le pharmacien ne gère pas le suivi complet. Donc ce n'est pas correct.\n中：错误，因为药师不能独立管理。\n\n❌ C. Urgences hospitalières - Faux. parce que les urgences traitent les crises, pas le suivi long terme. Donc ce n'est pas correct.\n中：错误，因为急诊只处理急性问题。\n\n❌ D. Banque - Faux. parce que la banque n'est pas impliquée dans la santé. Donc ce n'est pas correct.\n中：错误，因为银行不参与。`
  },
  {
    id: "so0044",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "À quoi sert le compte Ameli ?",
    options: [
      "Suivre ses remboursements et communiquer avec l'Assurance Maladie",
      "Acheter des médicaments",
      "Prendre rendez-vous avec le médecin",
      "Obtenir la mutuelle"
    ],
    answer: 0,
    explanation: `✅ A. Suivre ses remboursements et communiquer avec l'Assurance Maladie - Correct ! parce que le compte Ameli permet de suivre ses remboursements et démarches. Donc c'est son utilité.\n中：正确，因为Ameli账户可查看报销与办理医保事务。\n\n❌ B. Acheter des médicaments - Faux. parce que on achète les médicaments en pharmacie. Donc ce n'est pas correct.\n中：错误，因为药店买药。\n\n❌ C. Prendre rendez-vous avec le médecin - Faux. parce que Ameli n'est pas une plateforme de RDV. Donc ce n'est pas correct.\n中：错误，因为Ameli不用于预约。\n\n❌ D. Obtenir la mutuelle - Faux. parce que la mutuelle se choisit ailleurs. Donc ce n'est pas correct.\n中：错误，因为不是互助保险平台。`
  },
  {
    id: "so0045",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quels professionnels peuvent vacciner ?",
    options: [
      "Médecin, sage-femme, pharmacien ou infirmier",
      "Pharmacien uniquement",
      "Banque",
      "CPAM uniquement"
    ],
    answer: 0,
    explanation: `✅ A. Médecin, sage-femme, pharmacien ou infirmier - Correct ! parce que ces professionnels sont habilités à vacciner selon les règles. Donc ils peuvent administrer des vaccins.\n中：正确，因为医生、助产士、药师、护士都可按规定接种疫苗。\n\n❌ B. Pharmacien uniquement - Faux. parce que ce n'est pas seulement le pharmacien. Donc ce n'est pas correct.\n中：错误，因为不只药师。\n\n❌ C. Banque - Faux. parce que la banque n'est pas un professionnel de santé. Donc ce n'est pas correct.\n中：错误，因为银行不是医疗人员。\n\n❌ D. CPAM uniquement - Faux. parce que la CPAM n'administre pas les vaccins. Donc ce n'est pas correct.\n中：错误，因为医保局不打疫苗。`
  },
  {
    id: "so0046",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qu'est-ce que le dispositif MonPsy ?",
    options: [
      "Forfait pour séances psychologiques remboursées sous conditions",
      "Consultation chez le pharmacien",
      "Vaccination obligatoire",
      "Remboursement hospitalier"
    ],
    answer: 0,
    explanation: `✅ A. Forfait pour séances psychologiques remboursées sous conditions - Correct ! parce que MonPsy permet un remboursement de séances chez un psychologue. Donc c'est le bon dispositif.\n中：正确，因为MonPsy提供条件下心理咨询报销。\n\n❌ B. Consultation chez le pharmacien - Faux. parce que le pharmacien ne fait pas de séances psychologiques. Donc ce n'est pas correct.\n中：错误，因为药师不提供心理咨询。\n\n❌ C. Vaccination obligatoire - Faux. parce que MonPsy n'a rien à voir avec la vaccination. Donc ce n'est pas correct.\n中：错误，因为与疫苗无关。\n\n❌ D. Remboursement hospitalier - Faux. parce que ce dispositif concerne la psychologie, pas l'hôpital. Donc ce n'est pas correct.\n中：错误，因为不是医院报销。`
  },
  {
    id: "so0047",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui est responsable du protocole de soins pour les maladies de longue durée ?",
    options: [
      "Médecin traitant",
      "Pharmacien",
      "Urgences hospitalières",
      "Banque"
    ],
    answer: 0,
    explanation: `✅ A. Médecin traitant - Correct ! parce que le médecin traitant organise le protocole de soins pour les maladies longues. Donc il est responsable.\n中：正确，因为家庭医生负责长期疾病治疗方案。\n\n❌ B. Pharmacien - Faux. parce que il ne gère pas le protocole global. Donc ce n'est pas correct.\n中：错误，因为药师不负责治疗方案。\n\n❌ C. Urgences hospitalières - Faux. parce que elles ne gèrent pas le suivi long terme. Donc ce n'est pas correct.\n中：错误，因为急诊不负责长期治疗。\n\n❌ D. Banque - Faux. parce que la banque n'est pas impliquée. Donc ce n'est pas correct.\n中：错误，因为银行不参与。`
  },
  {
    id: "so0048",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelles actions sont menées pour la prévention de la santé mentale ?",
    options: [
      "Campagnes, interventions dans écoles et entreprises",
      "Vaccination obligatoire",
      "Pharmacie ouverte 24h",
      "Banque"
    ],
    answer: 0,
    explanation: `✅ A. Campagnes, interventions dans écoles et entreprises - Correct ! parce que la prévention se fait par des campagnes et actions éducatives. Donc c'est la bonne réponse.\n中：正确，因为心理健康预防通过宣传和学校/企业干预。\n\n❌ B. Vaccination obligatoire - Faux. parce que ce n'est pas lié à la santé mentale. Donc ce n'est pas correct.\n中：错误，因为与心理健康无关。\n\n❌ C. Pharmacie ouverte 24h - Faux. parce que ce n'est pas une action de prévention mentale. Donc ce n'est pas correct.\n中：错误，因为不是预防措施。\n\n❌ D. Banque - Faux. parce que la banque ne fait pas de prévention santé. Donc ce n'est pas correct.\n中：错误，因为银行不做健康预防。`
  },
  {
    id: "so0049",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Quelle structure accueille pour l'IVG et la contraception ?",
    options: [
      "Centre de santé sexuelle",
      "Médecin traitant uniquement",
      "Pharmacie",
      "CPAM"
    ],
    answer: 0,
    explanation: `✅ A. Centre de santé sexuelle - Correct ! parce que ce centre accueille pour IVG et contraception. Donc c'est la structure adaptée.\n中：正确，因为性健康中心提供避孕和堕胎服务。\n\n❌ B. Médecin traitant uniquement - Faux. parce que le médecin peut aider mais ce n'est pas le seul lieu. Donc ce n'est pas uniquement lui。\n中：错误，因为不只家庭医生能提供。\n\n❌ C. Pharmacie - Faux. parce que la pharmacie ne réalise pas l'IVG. Donc ce n'est pas correct.\n中：错误，因为药店不能做IVG。\n\n❌ D. CPAM - Faux. parce que la CPAM gère les remboursements, pas les consultations. Donc ce n'est pas correct。\n中：错误，因为医保局不提供医疗服务。`
  },
  {
    id: "so0050",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quelle structure gratuite s'occupe des femmes enceintes et enfants <6 ans ?",
    options: [
      "PMI",
      "CSAPA",
      "CLAT",
      "CMP"
    ],
    answer: 0,
    explanation: `✅ A. PMI - Correct ! parce que la PMI assure le suivi gratuit des femmes enceintes et jeunes enfants. Donc c'est la bonne structure.\n中：正确，因为PMI提供孕妇和6岁以下儿童免费随访。\n\n❌ B. CSAPA - Faux. parce que CSAPA concerne les addictions. Donc ce n'est pas correct.\n中：错误，因为是戒毒中心。\n\n❌ C. CLAT - Faux. parce que ce n'est pas une structure médicale. Donc ce n'est pas correct.\n中：错误，因为不是医疗机构。\n\n❌ D. CMP - Faux. parce que CMP concerne la santé mentale. Donc ce n'est pas correct.\n中：错误，因为精神健康中心。`
  },
  {
    id: "so0051",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui assure la centralisation des informations médicales (examens, diagnostics, traitements) ?",
    options: [
      "Médecin traitant",
      "Pharmacie",
      "Urgences",
      "Banque"
    ],
    answer: 0,
    explanation: `✅ A. Médecin traitant - Correct ! parce que le médecin traitant centralise les informations médicales du patient. Donc il assure la centralisation.\n中：正确，因为家庭医生整合病历信息。\n\n❌ B. Pharmacie - Faux. parce que la pharmacie ne centralise pas l'ensemble du dossier. Donc ce n'est pas correct.\n中：错误，因为药房不整合完整病历。\n\n❌ C. Urgences - Faux. parce que les urgences n'ont que les informations de leur service. Donc ce n'est pas centralisé.\n中：错误，因为急诊只记录当次情况。\n\n❌ D. Banque - Faux. parce que la banque n'a pas accès aux informations médicales. Donc ce n'est pas correct.\n中：错误，因为银行不参与。`
  },
  {
    id: "so0052",
    type: "carte multi",
    category: "Accès aux soins",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel professionnel peut informer sur les risques de santé selon le style de vie ?",
    options: [
      "Médecin traitant",
      "Pharmacien",
      "Banque",
      "Sage-femme uniquement"
    ],
    answer: 0,
    explanation: `✅ A. Médecin traitant - Correct ! parce que le médecin traitant conseille sur les risques liés au mode de vie (alimentation, tabac, etc.). Donc il peut informer.\n中：正确，因为家庭医生可根据生活方式提供健康风险建议。\n\n❌ B. Pharmacien - Faux. parce que il peut conseiller mais pas toujours en profondeur. Donc ce n'est pas le meilleur choix.\n中：错误，因为药师只能提供有限建议。\n\n❌ C. Banque - Faux. parce que la banque n'est pas un professionnel de santé. Donc ce n'est pas correct.\n中：错误，因为银行不提供健康咨询。\n\n❌ D. Sage-femme uniquement - Faux. parce que la sage-femme ne s'occupe pas de tous les patients. Donc ce n'est pas correct.\n中：错误，因为助产士只服务孕妇。`
  },

  {
    id: "ap0001",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Jusqu'à quel âge l'école est-elle obligatoire ?",
    options: [
      "12 ans",
      "16 ans",
      "18 ans",
      "15 ans"
    ],
    answer: 1,
    explanation: `❌ A. 12 ans - Faux. parce que l'école obligatoire continue au-delà de 12 ans (collège).\n中：错误，因为义务教育不止到12岁。\n\n✅ B. 16 ans - Correct ! parce que la loi impose l'école obligatoire jusqu'à 16 ans.\n中：正确，因为法国法律规定义务教育到16岁。\n\n❌ C. 18 ans - Faux. parce que 18 ans est la majorité, mais pas la fin de l'obligation scolaire.\n中：错误，18岁是成年，但不是义务教育结束年龄。\n\n❌ D. 15 ans - Faux. parce que 15 ans est encore dans le collège, donc l'obligation continue.\n中：错误，因为15岁仍在义务教育阶段。`
  },
  {
    id: "ap0002",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "L'autorité parentale prévoit l'obligation :",
    options: [
      "De scolariser et protéger l'enfant",
      "De payer uniquement",
      "De laisser l'enfant faire ce qu'il veut",
      "De partir en vacances ensemble"
    ],
    answer: 0,
    explanation: `✅ A. De scolariser et protéger l'enfant - Correct ! parce que l'autorité parentale implique d'assurer l'éducation, la protection et la santé de l'enfant.\n中：正确，因为父母责任包括教育和保护孩子。\n\n❌ B. De payer uniquement - Faux. parce que l'obligation ne se limite pas à l'argent.\n中：错误，因为父母责任不仅是支付费用。\n\n❌ C. De laisser l'enfant faire ce qu'il veut - Faux. parce que l'autorité parentale implique aussi des règles et une protection.\n中：错误，因为父母需要引导和保护孩子。\n\n❌ D. De partir en vacances ensemble - Faux. parce que ce n'est pas une obligation légale.\n中：错误，因为不是法律要求。`
  },
  {
    id: "ap0003",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel diplôme obtient-on à la fin du lycée ?",
    options: [
      "CAP",
      "BEP",
      "Baccalauréat",
      "Licence"
    ],
    answer: 2,
    explanation: `❌ A. CAP - Faux. parce que le CAP est un diplôme professionnel obtenu en lycée professionnel, pas la fin du lycée général.\n中：错误，CAP是职业学校的证书，不是普通高中毕业证。\n\n❌ B. BEP - Faux. parce que le BEP est remplacé par le CAP ou le bac pro.\n中：错误，BEP已被替代。\n\n✅ C. Baccalauréat - Correct ! parce que c'est le diplôme de fin d'études secondaires (lycée).\n中：正确，因为高中毕业获得的是法国高中毕业文凭（bac）。\n\n❌ D. Licence - Faux. parce que la licence est un diplôme universitaire (bac+3).\n中：错误，Licence是大学学位。`
  },
  {
    id: "ap0004",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Dans quels établissements scolaires vont les élèves après l'école élémentaire ?",
    options: [
      "Lycée",
      "Collège",
      "École maternelle",
      "Université"
    ],
    answer: 1,
    explanation: `❌ A. Lycée - Faux. parce que le lycée vient après le collège.\n中：错误，因为高中在初中之后。\n\n✅ B. Collège - Correct ! parce que après l'école élémentaire, les élèves entrent au collège.\n中：正确，因为小学后进入初中。\n\n❌ C. École maternelle - Faux. parce que la maternelle est avant l'élémentaire.\n中：错误，因为幼儿园在小学之前。\n\n❌ D. Université - Faux. parce que l'université vient après le lycée.\n中：错误，因为大学在高中之后。`
  },
  {
    id: "ap0005",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Un enfant inscrit à l'école :",
    options: [
      "Doit suivre les cours obligatoires",
      "Peut rester à la maison",
      "Peut choisir ses matières",
      "Ne reçoit pas de livre scolaire"
    ],
    answer: 0,
    explanation: `✅ A. Doit suivre les cours obligatoires - Correct ! parce que l'école impose des cours obligatoires et l'enfant doit y assister.\n中：正确，因为学校课程是强制性的。\n\n❌ B. Peut rester à la maison - Faux. parce que l'absence non justifiée est sanctionnée.\n中：错误，未经允许不能留在家里。\n\n❌ C. Peut choisir ses matières - Faux. parce que l'emploi du temps est défini par l'école.\n中：错误，课程由学校安排。\n\n❌ D. Ne reçoit pas de livre scolaire - Faux. parce que les manuels sont fournis ou demandés selon l'école.\n中：错误，学校通常提供或要求教材。`
  },
  {
    id: "ap0006",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Les enfants qui ne parlent pas français :",
    options: [
      "Ne peuvent pas aller à l'école",
      "Peuvent suivre des cours de français pour s'intégrer",
      "Sont exclus des activités scolaires",
      "Doivent attendre l'âge de 10 ans pour apprendre"
    ],
    answer: 1,
    explanation: `❌ A. Ne peuvent pas aller à l'école - Faux. parce que l'école est obligatoire même si l'enfant ne parle pas français.\n中：错误，因为不懂法语也必须上学。\n\n✅ B. Peuvent suivre des cours de français pour s'intégrer - Correct ! parce que l'école propose des dispositifs d'apprentissage du français pour les allophones.\n中：正确，因为学校提供法语课程帮助融入。\n\n❌ C. Sont exclus des activités scolaires - Faux. parce que ils participent normalement aux activités scolaires.\n中：错误，因为不会被排除。\n\n❌ D. Doivent attendre l'âge de 10 ans pour apprendre - Faux. parce que l'apprentissage commence dès l'entrée à l'école.\n中：错误，因为从入学就可以学习。`
  },
  {
    id: "ap0007",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Auprès de quelle institution les parents peuvent-ils inscrire leur enfant à l'école publique ?",
    options: [
      "La mairie",
      "L'Assurance maladie",
      "La préfecture",
      "Le commissariat"
    ],
    answer: 0,
    explanation: `✅ A. La mairie - Correct ! parce que l'inscription à l'école publique se fait à la mairie de la commune.\n中：正确，因为公立学校报名在市政府办理。\n\n❌ B. L'Assurance maladie - Faux. parce que ce n'est pas l'organisme scolaire.\n中：错误，因为不是教育机构。\n\n❌ C. La préfecture - Faux. parce que la préfecture gère les titres de séjour, pas l'école.\n中：错误，因为管理居留证。\n\n❌ D. Le commissariat - Faux. parce que la police ne s'occupe pas des inscriptions scolaires.\n中：错误，因为警局不负责学校报名。`
  },
  {
    id: "ap0008",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "En cas de divorce, qui exerce l'autorité parentale ?",
    options: [
      "Le père uniquement",
      "La mère uniquement",
      "Les deux parents ensemble ou selon le jugement",
      "Le juge seulement"
    ],
    answer: 2,
    explanation: `❌ A. Le père uniquement - Faux. parce que l'autorité parentale est généralement partagée.\n中：错误，因为通常是共同抚养。\n\n❌ B. La mère uniquement - Faux. parce que la mère n'a pas l'autorité seule sauf décision du juge.\n中：错误，除非法院判定。\n\n✅ C. Les deux parents ensemble ou selon le jugement - Correct ! parce que le juge peut décider d'une garde partagée ou exclusive selon l'intérêt de l'enfant.\n中：正确，因为法院会根据孩子利益决定共同或单独抚养。\n\n❌ D. Le juge seulement - Faux. parce que le juge décide, mais l'autorité est exercée par les parents.\n中：错误，因为法官只是裁定，执行由父母负责。`
  },
  {
    id: "ap0009",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui peut demander un congé parental d'éducation ?",
    options: [
      "Les parents salariés",
      "Les voisins",
      "Les grands-parents",
      "Les amis"
    ],
    answer: 0,
    explanation: `✅ A. Les parents salariés - Correct ! parce que le congé parental est un droit pour les parents qui travaillent.\n中：正确，因为育儿假是劳动父母的权利。\n\n❌ B. Les voisins - Faux. parce que ce n'est pas leur enfant.\n中：错误，因为不是孩子的父母。\n\n❌ C. Les grands-parents - Faux. parce que ils ne sont pas les parents salariés.\n中：错误，因为不是父母。\n\n❌ D. Les amis - Faux. parce que ce n'est pas leur responsabilité.\n中：错误，因为不是法定对象。`
  },
  {
    id: "ap0010",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qu'est-ce que l'école maternelle ?",
    options: [
      "Une école pour les enfants de 3 à 6 ans",
      "Une école pour adolescents",
      "Une école pour adultes",
      "Une université"
    ],
    answer: 0,
    explanation: `✅ A. Une école pour les enfants de 3 à 6 ans - Correct ! parce que la maternelle accueille les enfants avant l'école élémentaire.\n中：正确，因为幼儿园接收3--6岁儿童。\n\n❌ B. Une école pour adolescents - Faux. parce que les adolescents vont au collège.\n中：错误，因为青少年上初中。\n\n❌ C. Une école pour adultes - Faux. parce que ce n'est pas une école pour adultes.\n中：错误，因为不是成人学校。\n\n❌ D. Une université - Faux. parce que l'université est pour l'enseignement supérieur.\n中：错误，因为大学属于高等教育。`
  },

  {
    id: "ap0011",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Les parents d'élève ont le droit de :",
    options: [
      "Participer aux conseils d'école et suivre la scolarité de leurs enfants",
      "Choisir les notes",
      "Donner les cours",
      "Changer les professeurs"
    ],
    answer: 0,
    explanation: `✅ A. Participer aux conseils d'école et suivre la scolarité de leurs enfants - Correct ! parce que les parents ont un rôle dans la vie scolaire de l'enfant, notamment en participant aux conseils d'école et en suivant les progrès. Donc c'est leur droit.\n中：正确，**因为**家长有权参与学校会议并关注孩子学习情况，**所以**这是正确答案。\n\n❌ B. Choisir les notes - Faux. parce que les notes sont attribuées par les enseignants selon les résultats.\n中：错误，因为成绩由老师评定。\n\n❌ C. Donner les cours - Faux. parce que l'enseignement est assuré par les enseignants.\n中：错误，因为授课由教师负责。\n\n❌ D. Changer les professeurs - Faux. parce que ce n'est pas le pouvoir des parents.\n中：错误，因为家长不能决定换老师。`
  },
  {
    id: "ap0012",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Qui peut manger à la cantine scolaire ?",
    options: [
      "Tous les élèves inscrits à l'école",
      "Seulement les professeurs",
      "Les voisins",
      "Les touristes"
    ],
    answer: 0,
    explanation: `✅ A. Tous les élèves inscrits à l'école - Correct ! parce que la cantine est un service de l'école pour les élèves inscrits. Donc tous les élèves peuvent y accéder.\n中：正确，**因为**食堂是为注册学生提供的服务，**所以**所有学生都可以使用。\n\n❌ B. Seulement les professeurs - Faux. parce que les professeurs ne sont pas le public principal de la cantine scolaire.\n中：错误，因为食堂主要服务学生。\n\n❌ C. Les voisins - Faux. parce que ce n'est pas ouvert au public extérieur.\n中：错误，因为外人不能随意进入。\n\n❌ D. Les touristes - Faux. parce que les touristes ne sont pas inscrits à l'école.\n中：错误，因为不是学生。`
  },
  {
    id: "ap0013",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "À quel âge commence l'instruction obligatoire des enfants ?",
    options: [
      "3 ans",
      "6 ans",
      "2 ans",
      "5 ans"
    ],
    answer: 0,
    explanation: `✅ A. 3 ans - Correct ! parce que depuis 2019 l'instruction est obligatoire dès 3 ans.\n中：正确，**因为**自2019年起法国从3岁开始义务教育。\n\n❌ B. 6 ans - Faux. parce que auparavant l'obligation commençait à 6 ans, mais la loi a changé.\n中：错误，因为以前是6岁，但法律已改。\n\n❌ C. 2 ans - Faux. parce que 2 ans est trop jeune pour l'obligation scolaire.\n中：错误，因为2岁太小。\n\n❌ D. 5 ans - Faux. parce que l'obligation commence avant 5 ans.\n中：错误，因为义务教育在5岁之前就开始。`
  },
  {
    id: "ap0014",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel est l'âge de la majorité ?",
    options: [
      "16 ans",
      "18 ans",
      "20 ans",
      "21 ans"
    ],
    answer: 1,
    explanation: `❌ A. 16 ans - Faux. parce que 16 ans est l'âge de certains droits, mais pas la majorité.\n中：错误，因为16岁不是法定成年。\n\n✅ B. 18 ans - Correct ! parce que la majorité civile en France est à 18 ans.\n中：正确，因为法国法定成年年龄为18岁。\n\n❌ C. 20 ans - Faux. parce que la majorité est déjà à 18 ans.\n中：错误，因为18岁即可成年。\n\n❌ D. 21 ans - Faux. parce que 21 ans est au-delà de la majorité.\n中：错误，因为超过成年年龄。`
  },
  {
    id: "ap0015",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "À l'école, il est interdit aux parents de :",
    options: [
      "Participer aux conseils d'école",
      "Intervenir dans les cours et corriger les élèves eux-mêmes",
      "Suivre la scolarité",
      "Assister aux réunions"
    ],
    answer: 1,
    explanation: `❌ A. Participer aux conseils d'école - Faux. parce que c'est un droit des parents.\n中：错误，因为家长有权参与。\n\n✅ B. Intervenir dans les cours et corriger les élèves eux-mêmes - Correct ! parce que l'enseignement est réservé aux enseignants et les parents ne doivent pas intervenir en classe.\n中：正确，**因为**课堂教学由教师负责，家长不能在课堂上干预或批改学生。\n\n❌ C. Suivre la scolarité - Faux. parce que c'est un droit des parents.\n中：错误，因为家长可以关注孩子学习。\n\n❌ D. Assister aux réunions - Faux. parce que les réunions sont ouvertes aux parents.\n中：错误，因为家长可以参加。`
  },
  {
    id: "ap0016",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quel motif d'absence est accepté par l'école ?",
    options: [
      "Maladie justifiée",
      "Vacances non autorisées",
      "Désir personnel",
      "Excursion privée"
    ],
    answer: 0,
    explanation: `✅ A. Maladie justifiée - Correct ! parce que l'école accepte les absences pour maladie si elles sont justifiées par un certificat.\n中：正确，**因为**学校接受有医疗证明的病假。\n\n❌ B. Vacances non autorisées - Faux. parce que les vacances doivent être pendant les périodes officielles.\n中：错误，因为非规定假期离校不被允许。\n\n❌ C. Désir personnel - Faux. parce que l'école n'accepte pas les absences sans raison légitime.\n中：错误，因为个人意愿不是合法理由。\n\n❌ D. Excursion privée - Faux. parce que ce n'est pas un motif officiel.\n中：错误，因为私人旅行不是正当理由。`
  },
  {
    id: "ap0017",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?",
    options: [
      "Amende ou peine de prison",
      "Rien",
      "Félicitations",
      "Stage culturel"
    ],
    answer: 0,
    explanation: `✅ A. Amende ou peine de prison - Correct ! parce que ne pas scolariser un enfant est un délit et peut entraîner une sanction pénale.\n中：正确，**因为**不履行义务教育是违法行为，可被罚款或判刑。\n\n❌ B. Rien - Faux. parce que la loi prévoit des sanctions.\n中：错误，因为法律有处罚。\n\n❌ C. Félicitations - Faux. parce que c'est une infraction.\n中：错误，因为不是奖励。\n\n❌ D. Stage culturel - Faux. parce que ce n'est pas une sanction prévue.\n中：错误，因为法律没有这种处罚。`
  },
  {
    id: "ap0018",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "Quand ont lieu les vacances scolaires de Noël ?",
    options: [
      "En décembre -- début janvier",
      "En février",
      "En avril",
      "En octobre"
    ],
    answer: 0,
    explanation: `✅ A. En décembre -- début janvier - Correct ! parce que les vacances de Noël se déroulent généralement entre la fin décembre et début janvier.\n中：正确，因为圣诞假期通常在12月底到1月初。\n\n❌ B. En février - Faux. parce que février correspond aux vacances d'hiver.\n中：错误，因为2月是寒假。\n\n❌ C. En avril - Faux. parce que avril correspond aux vacances de printemps.\n中：错误，因为4月是春假。\n\n❌ D. En octobre - Faux. parce que octobre correspond aux vacances de la Toussaint.\n中：错误，因为10月是万圣节假期。`
  },
  {
    id: "ap0019",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "examen original",
    question: "À l'école, un enfant en situation de handicap :",
    options: [
      "Peut bénéficier d'un accompagnement adapté et d'un soutien spécifique",
      "Ne peut pas être scolarisé",
      "Doit rester à la maison",
      "Ne reçoit jamais de matériel adapté"
    ],
    answer: 0,
    explanation: `✅ A. Peut bénéficier d'un accompagnement adapté et d'un soutien spécifique - Correct ! parce que la loi garantit l'inclusion scolaire et des aides (AESH, matériel adapté).\n中：正确，**因为**法律保障残障儿童接受教育并提供支持。\n\n❌ B. Ne peut pas être scolarisé - Faux. parce que l'inclusion est un droit.\n中：错误，因为残障儿童有受教育权。\n\n❌ C. Doit rester à la maison - Faux. parce que l'école doit être accessible.\n中：错误，因为学校应对其开放。\n\n❌ D. Ne reçoit jamais de matériel adapté - Faux. parce que des aides matérielles sont prévues.\n中：错误，因为会提供适配设备。`
  },
  {
    id: "ap0020",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "examen original",
    question: "Comment s'appelle le diplôme passé par les élèves à la fin du collège ?",
    options: [
      "Baccalauréat",
      "Brevet des collèges",
      "CAP",
      "Licence"
    ],
    answer: 1,
    explanation: `❌ A. Baccalauréat - Faux. parce que le bac est à la fin du lycée.\n中：错误，因为bac在高中毕业时获得。\n\n✅ B. Brevet des collèges - Correct ! parce que c'est le diplôme obtenu à la fin du collège.\n中：正确，因为初中毕业获得 brevet。\n\n❌ C. CAP - Faux. parce que le CAP est un diplôme professionnel.\n中：错误，因为CAP是职业资格证。\n\n❌ D. Licence - Faux. parce que la licence est un diplôme universitaire.\n中：错误，因为Licence是大学学位。`
  },
  {
    id: "ap0021",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 注意：第21题没有"o"标记，是模拟题
    question: "L'intérêt supérieur de l'enfant signifie que :",
    options: [
      "L'enfant décide toujours seul",
      "Les parents décident toujours",
      "L'intérêt de l'enfant passe avant tout",
      "La famille décide librement"
    ],
    answer: 2,
    explanation: `❌ A. L'enfant décide toujours seul - Faux. parce que l'enfant n'a pas toujours la capacité juridique de décider seul.\n中：错误，因为孩子并不总有法律能力自己决定。\n\n❌ B. Les parents décident toujours - Faux. parce que les décisions doivent respecter l'intérêt de l'enfant, pas seulement la volonté des parents.\n中：错误，因为家长的决定必须以孩子利益为前提。\n\n✅ C. L'intérêt de l'enfant passe avant tout - Correct ! parce que la loi impose que l'intérêt de l'enfant soit la priorité dans toutes les décisions.\n中：正确，因为法律规定孩子利益优先。\n\n❌ D. La famille décide librement - Faux. parce que la loi encadre et limite les décisions familiales.\n中：错误，因为法律有约束。`
  },
  {
    id: "ap0022",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Un enfant a le droit :",
    options: [
      "De travailler sans limite",
      "D'avoir une identité",
      "De choisir ses lois",
      "D'ignorer l'école"
    ],
    answer: 1,
    explanation: `❌ A. De travailler sans limite - Faux. parce que le travail des enfants est réglementé et interdit dans certains cas.\n中：错误，因为童工受法律限制。\n\n✅ B. D'avoir une identité - Correct ! parce que chaque enfant a droit à un nom, une nationalité, une identité légale.\n中：正确，因为每个孩子都有身份权。\n\n❌ C. De choisir ses lois - Faux. parce que les lois s'appliquent à tous.\n中：错误，因为法律对所有人统一适用。\n\n❌ D. D'ignorer l'école - Faux. parce que l'école est obligatoire.\n中：错误，因为义务教育必须上学。`
  },
  {
    id: "ap0023",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Le droit à la vie privée de l'enfant concerne surtout :",
    options: [
      "Ses loisirs",
      "Son image et ses informations personnelles",
      "Son argent",
      "Son école"
    ],
    answer: 1,
    explanation: `❌ A. Ses loisirs - Faux. parce que ce n'est pas l'essentiel du droit à la vie privée.\n中：错误，因为这不是隐私权的核心。\n\n✅ B. Son image et ses informations personnelles - Correct ! parce que la vie privée protège les données et l'image de l'enfant.\n中：正确，因为隐私权保护孩子的个人信息和形象。\n\n❌ C. Son argent - Faux. parce que ce n'est pas le point principal.\n中：错误，因为不是重点。\n\n❌ D. Son école - Faux. parce que l'école est publique, mais la vie privée concerne les données personnelles.\n中：错误，因为学校不是隐私权的核心内容。`
  },
  {
    id: "ap0024",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Les enfants doivent être protégés contre :",
    options: [
      "Les devoirs",
      "La violence et l'exploitation",
      "Les enseignants",
      "Les règles scolaires"
    ],
    answer: 1,
    explanation: `❌ A. Les devoirs - Faux. parce que les devoirs font partie de l'école.\n中：错误，因为作业是学校教育的一部分。\n\n✅ B. La violence et l'exploitation - Correct ! parce que la loi protège les enfants contre toute forme de violence et d'exploitation.\n中：正确，因为法律保护孩子免受暴力和剥削。\n\n❌ C. Les enseignants - Faux. parce que les enseignants sont des professionnels, pas une menace.\n中：错误，因为老师不是威胁。\n\n❌ D. Les règles scolaires - Faux. parce que les règles scolaires sont nécessaires.\n中：错误，因为规则是必要的。`
  },
  {
    id: "ap0025",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Un enfant peut donner son avis :",
    options: [
      "Jamais",
      "Seulement à 18 ans",
      "Selon son âge et sa maturité",
      "Uniquement devant un juge"
    ],
    answer: 2,
    explanation: `❌ A. Jamais - Faux. parce que l'enfant peut exprimer son opinion selon son âge.\n中：错误，因为孩子可以表达意见。\n\n❌ B. Seulement à 18 ans - Faux. parce que l'enfant peut donner son avis avant 18 ans.\n中：错误，因为未满18岁也可表达意见。\n\n✅ C. Selon son âge et sa maturité - Correct ! parce que la loi reconnaît la parole de l'enfant selon sa capacité.\n中：正确，因为法律根据年龄和成熟度考虑孩子的意见。\n\n❌ D. Uniquement devant un juge - Faux. parce que l'enfant peut donner son avis dans d'autres situations.\n中：错误，因为不只在法庭。`
  },
  {
    id: "ap0026",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "L'autorité parentale concerne les enfants de moins de :",
    options: [
      "16 ans",
      "17 ans",
      "18 ans",
      "21 ans"
    ],
    answer: 2,
    explanation: `❌ A. 16 ans - Faux. parce que l'autorité parentale continue jusqu'à 18 ans.\n中：错误，因为父母权利持续到18岁。\n\n❌ B. 17 ans - Faux. parce que ce n'est pas la limite.\n中：错误，因为不是正确年龄。\n\n✅ C. 18 ans - Correct ! parce que la majorité est à 18 ans, donc l'autorité parentale s'arrête.\n中：正确，因为18岁成年，父母权利结束。\n\n❌ D. 21 ans - Faux. parce que ce n'est pas la loi.\n中：错误，因为法律规定18岁。`
  },
  {
    id: "ap0027",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Qui exerce normalement l'autorité parentale ?",
    options: [
      "Un seul parent",
      "Les deux parents",
      "Le juge",
      "L'école"
    ],
    answer: 1,
    explanation: `❌ A. Un seul parent - Faux. parce que en général les deux parents exercent l'autorité.\n中：错误，因为通常是双方共同。\n\n✅ B. Les deux parents - Correct ! parce que la loi prévoit l'exercice conjoint de l'autorité parentale.\n中：正确，因为法律规定父母共同负责。\n\n❌ C. Le juge - Faux. parce que le juge intervient seulement en cas de conflit.\n中：错误，因为只有在争议时才由法官决定。\n\n❌ D. L'école - Faux. parce que l'école n'a pas l'autorité parentale.\n中：错误，因为学校不拥有此权利。`
  },
  {
    id: "ap0028",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "L'autorité parentale s'exerce :",
    options: [
      "Sans règles",
      "Dans l'intérêt de l'enfant",
      "Selon les traditions familiales",
      "Selon la volonté des parents"
    ],
    answer: 1,
    explanation: `❌ A. Sans règles - Faux. parce que il existe des règles légales.\n中：错误，因为有法律规定。\n\n✅ B. Dans l'intérêt de l'enfant - Correct ! parce que l'autorité parentale doit toujours protéger l'enfant.\n中：正确，因为父母权利必须以孩子利益为先。\n\n❌ C. Selon les traditions familiales - Faux. parce que les traditions ne remplacent pas la loi.\n中：错误，因为法律优先。\n\n❌ D. Selon la volonté des parents - Faux. parce que la volonté parentale doit être encadrée par la loi.\n中：错误，因为需要符合法律。`
  },
  {
    id: "ap0029",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Les parents ont le droit de :",
    options: [
      "Punir physiquement l'enfant",
      "Surveiller l'enfant pour sa sécurité",
      "Ignorer sa scolarité",
      "Supprimer ses droits"
    ],
    answer: 1,
    explanation: `❌ A. Punir physiquement l'enfant - Faux. parce que la violence est interdite.\n中：错误，因为禁止体罚。\n\n✅ B. Surveiller l'enfant pour sa sécurité - Correct ! parce que la protection de l'enfant est un devoir.\n中：正确，因为父母有责任保障孩子安全。\n\n❌ C. Ignorer sa scolarité - Faux. parce que l'école est obligatoire.\n中：错误，因为必须保证孩子上学。\n\n❌ D. Supprimer ses droits - Faux. parce que l'enfant a des droits.\n中：错误，因为孩子有权利。`
  },
  {
    id: "ap0030",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Les parents peuvent surveiller l'enfant concernant :",
    options: [
      "Ses rêves",
      "Ses réseaux sociaux",
      "Ses goûts musicaux",
      "Ses amis adultes uniquement"
    ],
    answer: 1,
    explanation: `❌ A. Ses rêves - Faux. parce que les rêves ne sont pas surveillables.\n中：错误，因为梦境不可监控。\n\n✅ B. Ses réseaux sociaux - Correct ! parce que les parents doivent protéger l'enfant, notamment sur Internet.\n中：正确，因为父母应关注孩子网络安全。\n\n❌ C. Ses goûts musicaux - Faux. parce que ce n'est pas une obligation.\n中：错误，因为不是必须监管的内容。\n\n❌ D. Ses amis adultes uniquement - Faux. parce que la surveillance ne se limite pas aux adultes.\n中：错误，因为监护范围更广。`
  },
  {
    id: "tr0001",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "examen original", // 原题，因为有“1o”
    question: "Le travail non déclaré est :",
    options: [
      "Autorisé",
      "Illégal",
      "Récompensé",
      "Optionnel"
    ],
    answer: 1, // 对应选项 B (Illégal)
    explanation: `❌ A. Autorisé - Faux, parce que le travail non déclaré évite les impôts et les cotisations sociales. Donc il est interdit.
    中：错误，因为未申报工作逃税和社保，所以违法。
    
    ✅ B. Illégal - Correct, parce que il ne respecte pas la loi du travail et prive le salarié de droits. Donc c'est une infraction.
    中：正确，因为不遵守劳动法并剥夺劳动者权益，所以是违法的。
    
    ❌ C. Récompensé - Faux, parce que la loi ne récompense pas l'illégalité. Donc on ne reçoit pas de bénéfice légal.
    中：错误，因为法律不会奖励违法行为，所以不会有奖励。
    
    ❌ D. Optionnel - Faux, parce que le travail doit être déclaré obligatoirement. Donc ce n'est pas un choix.
    中：错误，因为必须申报，所以不是可选项。`
  },
  {
    id: "tr0002",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "examen original", // 原题，因为有“2o”
    question: "Que doit faire un employeur pour fixer un salaire ?",
    options: [
      "Le décider seul",
      "Respecter le SMIC et la convention collective",
      "Demander aux employés",
      "Publier au journal local"
    ],
    answer: 1, // 对应选项 B
    explanation: `❌ A. Le décider seul - Faux, parce que le salaire doit respecter le minimum légal et les règles du secteur. Donc l'employeur ne peut pas décider seul.
    中：错误，因为工资必须遵守最低工资和行业协议，所以不能单方面决定。
    
    ✅ B. Respecter le SMIC et la convention collective - Correct, parce que le SMIC est le minimum légal et la convention collective fixe les règles du métier. Donc l'employeur doit s'y conformer.
    中：正确，因为SMIC是最低标准，行业协议规定行业工资，所以必须遵守。
    
    ❌ C. Demander aux employés - Faux, parce que les employés ne déterminent pas le salaire légal. Donc ce n'est pas une méthode correcte.
    中：错误，因为员工不能决定法律规定的工资，所以不能靠员工决定。
    
    ❌ D. Publier au journal local - Faux, parce que publier un salaire ne remplace pas la réglementation légale. Donc cela ne sert à rien.
    中：错误，因为公布工资不能替代法律规定，所以无效。`
  },
  {
    id: "tr0003",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "examen original", // 原题，因为有“3 o”
    question: "Qu'est-ce que le SMIC ?",
    options: [
      "Salaire minimum interprofessionnel garanti",
      "Salaire maximum légal",
      "Taxe pour les entreprises",
      "Aide sociale pour chômeurs"
    ],
    answer: 0, // 对应选项 A
    explanation: `✅ A. Salaire minimum interprofessionnel garanti - Correct, parce que le SMIC fixe le salaire minimum légal en France. Donc personne ne peut être payé en dessous.
    中：正确，因为SMIC是法国法定最低工资，所以不能低于它。
    
    ❌ B. Salaire maximum légal - Faux, parce que le SMIC est un minimum, pas un maximum.
    中：错误，因为SMIC是最低工资，不是最高工资。
    
    ❌ C. Taxe pour les entreprises - Faux, parce que ce n'est pas une taxe, c'est un salaire minimum.
    中：错误，因为它不是税，而是工资标准。
    
    ❌ D. Aide sociale pour chômeurs - Faux, parce que le SMIC concerne les salariés, pas les aides.
    中：错误，因为它适用于在职人员，不是失业补助。`
  },
  {
    id: "tr0004",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "examen original", // 原题，因为有“4o”
    question: "Quelle est la première démarche à réaliser pour chercher un emploi ?",
    options: [
      "Préparer un CV et contacter France Travail",
      "Créer son entreprise",
      "Contacter les syndicats",
      "Attendre une offre par courrier"
    ],
    answer: 0, // 对应选项 A
    explanation: `✅ A. Préparer un CV et contacter France Travail - Correct, parce que pour chercher un emploi efficacement, il faut d'abord avoir un CV prêt et se faire accompagner par France Travail. Donc c'est la première démarche.
    中：正确，因为有效求职首先要准备简历并联系France Travail获取帮助，所以这是第一步。
    
    ❌ B. Créer son entreprise - Faux, parce que chercher un emploi ne signifie pas créer une entreprise. Donc ce n'est pas la première démarche.
    中：错误，因为找工作不等于创业，所以不是第一步。
    
    ❌ C. Contacter les syndicats - Faux, parce que les syndicats défendent les salariés, mais ils ne sont pas le premier contact pour trouver un emploi. Donc ce n'est pas la démarche initiale.
    中：错误，因为工会主要维护权益，不是求职的第一步，所以不正确。
    
    ❌ D. Attendre une offre par courrier - Faux, parce que attendre passivement ne permet pas de trouver rapidement un emploi. Donc ce n'est pas une démarche efficace.
    中：错误，因为被动等待无法快速找到工作，所以不是正确方法。`
  },
  {
    id: "tr0005",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "examen original", // 原题，因为有“5o”
    question: "Quelle est la durée légale du temps de travail par semaine ?",
    options: [
      "35 heures",
      "40 heures",
      "39 heures",
      "30 heures"
    ],
    answer: 0, // 对应选项 A
    explanation: `✅ A. 35 heures - Correct, parce que la durée légale du travail en France est de 35 heures par semaine. Donc tout travail au-delà est considéré comme heures supplémentaires.
    中：正确，因为法国法定工作时间是每周35小时，所以超过部分算加班。
    
    ❌ B. 40 heures - Faux, parce que 40 heures dépasse la durée légale.
    中：错误，因为40小时超过法定标准。
    
    ❌ C. 39 heures - Faux, parce que ce n'est pas la durée légale, mais un temps de travail possible selon les accords.
    中：错误，因为不是法定标准，只是某些企业的安排。
    
    ❌ D. 30 heures - Faux, parce que 30 heures est inférieur à la durée légale.
    中：错误，因为它低于法定时间。`
  },
  {
    id: "tr0006",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "examen original", // 原题，因为有“6o”
    question: "Qui est aidé par France Travail ?",
    options: [
      "Les salariés uniquement",
      "Les demandeurs d'emploi",
      "Les entreprises uniquement",
      "Les retraités"
    ],
    answer: 1, // 对应选项 B
    explanation: `❌ A. Les salariés uniquement - Faux, parce que France Travail accompagne surtout les personnes sans emploi. Donc ce n'est pas réservé aux salariés.
    中：错误，因为France Travail主要帮助失业者，所以不是只针对在职人员。
    
    ✅ B. Les demandeurs d'emploi - Correct, parce que France Travail est le service public dédié à l'accompagnement vers l'emploi. Donc il aide les demandeurs d'emploi.
    中：正确，因为France Travail是公共就业服务机构，所以帮助求职者。
    
    ❌ C. Les entreprises uniquement - Faux, parce que les entreprises peuvent être accompagnées, mais ce n'est pas la mission principale.
    中：错误，因为企业不是主要对象。
    
    ❌ D. Les retraités - Faux, parce que les retraités ne sont généralement pas en recherche d'emploi.
    中：错误，因为退休人员通常不求职。`
  },
  {
    id: "tr0007",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "examen original", // 原题，因为有“7o”
    question: "Une personne étrangère en situation régulière peut créer son entreprise :",
    options: [
      "Oui, sans restriction",
      "Non, c'est interdit",
      "Oui, après 5 ans en France",
      "Oui, mais seulement en partenariat avec un Français"
    ],
    answer: 0, // 对应选项 A (但解析显示有条件，题目本身似乎是陷阱。根据解析，A不完全对，但它是唯一提到“可以”的选项。实际正确答案应为A，但需注意条件。)
    explanation: `✅ A. Oui, sans restriction - Correct, parce que une personne étrangère en situation régulière peut créer son entreprise, sous réserve de certaines conditions administratives. Donc c'est possible.
    中：正确，因为持有合法居留的外国人可以创业，但需符合行政条件。所以是可行的。
    
    ❌ B. Non, c'est interdit - Faux, parce que les étrangers en situation régulière peuvent entreprendre.
    中：错误，因为合法居留者可以创业。
    
    ❌ C. Oui, après 5 ans en France - Faux, parce que la durée de résidence n'est pas une condition obligatoire.
    中：错误，因为居住年限不是必要条件。
    
    ❌ D. Oui, mais seulement en partenariat avec un Français - Faux, parce que ce n'est pas obligatoire d'avoir un partenaire français.
    中：错误，因为不需要必须与法国人合伙。`
  },
  {
    id: "tr0008",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "examen original", // 原题，因为有“8o”
    question: "Une femme peut-elle créer son entreprise ?",
    options: [
      "Oui",
      "Non",
      "Oui, mais avec un homme",
      "Seulement après mariage"
    ],
    answer: 0, // 对应选项 A
    explanation: `✅ A. Oui - Correct, parce que la loi française garantit l'égalité entre femmes et hommes. Donc une femme peut créer une entreprise comme un homme.
    中：正确，因为法国法律保障性别平等，所以女性可以自主创业。
    
    ❌ B. Non - Faux, parce que la loi ne l'interdit pas.
    中：错误，因为法律不禁止。
    
    ❌ C. Oui, mais avec un homme - Faux, parce que la présence d'un homme n'est pas une condition.
    中：错误，因为不需要男性参与。
    
    ❌ D. Seulement après mariage - Faux, parce que le mariage n'est pas une condition pour entreprendre.
    中：错误，因为婚姻不是创业条件。`
  },
{
  id: "tg0009",
  type: "carte multi",
  category: "Travail",
  difficulté: "moyen",
  typeQuestion: "examen original",
  question: "À partir de quel âge un mineur peut-il travailler ?",
  options: [
    "14 ans",
    "16 ans",
    "18 ans",
    "12 ans"
  ],
  answer: 1,
  explanation: "❌ A. 14 ans - Faux. 14 ans est possible seulement pour des travaux légers pendant les vacances scolaires, avec autorisation.\n中：错误。14岁只允许在假期进行轻工作并需授权。\n\n✅ B. 16 ans - Correct ! L’âge minimum pour travailler en France est généralement 16 ans (travail normal, sous conditions).\n中：正确！法国常规工作最低年龄通常为16岁（在符合条件的情况下）。\n\n❌ C. 18 ans - Faux, parce que 18 ans est l’âge adulte, pas l’âge minimum pour travailler.\n中：错误，因为不是最低年龄。\n\n❌ D. 12 ans - Faux, parce que 12 ans est trop jeune et interdit pour travailler.\n中：错误，因为12 岁不允许工作。"
}
,
  {
    id: "tr0010",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "examen original", // 原题，因为有“10o 中”
    question: "Quelles sont les affaires traitées par le conseil de prud'hommes ?",
    options: [
      "Litiges entre voisins",
      "Litiges entre salariés et employeurs",
      "Litiges familiaux",
      "Litiges fiscaux"
    ],
    answer: 1, // 对应选项 B
    explanation: `❌ A. Litiges entre voisins - Faux, parce que les conflits entre voisins relèvent souvent du tribunal civil.
    中：错误，因为邻里纠纷通常由民事法院处理。
    
    ✅ B. Litiges entre salariés et employeurs - Correct, parce que le conseil de prud'hommes est spécialisé dans les conflits du travail. Donc il traite les licenciements, salaires, contrats, etc.
    中：正确，因为劳动法庭专门处理雇员与雇主纠纷，所以它负责这类案件。
    
    ❌ C. Litiges familiaux - Faux, parce que les affaires familiales vont au tribunal de la famille.
    中：错误，因为家庭纠纷由家庭法院处理。
    
    ❌ D. Litiges fiscaux - Faux, parce que les impôts sont traités par le tribunal administratif.
    中：错误，因为税务纠纷由行政法院处理。`
  },
  {
    id: "tr0011",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée", // 模拟题，没有“o”
    question: "Travailler sans être déclaré est :",
    options: [
      "Autorisé",
      "Illégal",
      "Recommandé",
      "Optionnel"
    ],
    answer: 1, // 对应选项 B
    explanation: `❌ A. Autorisé - Faux, parce que le travail non déclaré est illégal. Donc ce n'est pas autorisé.
    中：错误，因为未申报工作违法，所以不允许。
    
    ✅ B. Illégal - Correct, parce que il viole les règles du travail et prive de droits. Donc c'est interdit.
    中：正确，因为违反劳动法并剥夺权利，所以违法。
    
    ❌ C. Recommandé - Faux, parce que la loi ne recommande pas l'illégalité.
    中：错误，因为法律不会推荐违法行为。
    
    ❌ D. Optionnel - Faux, parce que déclarer le travail est obligatoire.
    中：错误，因为必须申报。`
  },
  {
    id: "tr0012",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée", // 模拟题，没有“o”
    question: "Lorsqu'un employeur veut qu'un salarié travaille plus longtemps que la durée prévue dans le contrat de travail :",
    options: [
      "Il peut le faire sans rien dire",
      "Il doit demander l'accord et respecter la réglementation sur les heures supplémentaires",
      "Il n'a pas besoin d'accord",
      "Le salarié n'a jamais le droit"
    ],
    answer: 1, // 对应选项 B
    explanation: `❌ A. Il peut le faire sans rien dire - Faux, parce que l'employeur doit respecter la loi et informer le salarié. Donc il ne peut pas imposer.
    中：错误，因为雇主必须遵守法律并告知员工，所以不能擅自加班。
    
    ✅ B. Il doit demander l'accord et respecter la réglementation sur les heures supplémentaires - Correct, parce que les heures supplémentaires sont encadrées par la loi. Donc l'accord et la rémunération ou récupération sont obligatoires.
    中：正确，因为加班受法律约束，所以必须征得同意并支付或补休。
    
    ❌ C. Il n'a pas besoin d'accord - Faux, parce que le salarié doit accepter et la loi impose des règles.
    中：错误，因为需要员工同意且受法规限制。
    
    ❌ D. Le salarié n'a jamais le droit - Faux, parce que le salarié peut refuser dans certaines situations, mais pas \"jamais\".
    中：错误，因为员工在特定情况下可以拒绝，不是永远不能。`
  },
  {
    id: "tr0013",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée", // 模拟题，没有“o”
    question: "Quelle est la mission de France Travail ?",
    options: [
      "Aider les demandeurs d'emploi",
      "Organiser des festivals",
      "Contrôler les écoles",
      "Gérer les impôts"
    ],
    answer: 0, // 对应选项 A
    explanation: `✅ A. Aider les demandeurs d'emploi - Correct, parce que France Travail accompagne vers l'emploi, la formation et l'insertion professionnelle. Donc c'est sa mission principale.
    中：正确，因为France Travail负责求职、培训和就业融入，所以其主要任务是帮助求职者。
    
    ❌ B. Organiser des festivals - Faux, parce que ce n'est pas la mission d'un service public de l'emploi.
    中：错误，因为公共就业服务不负责组织节日。
    
    ❌ C. Contrôler les écoles - Faux, parce que l'éducation est gérée par d'autres services.
    中：错误，因为学校管理属于教育部门。
    
    ❌ D. Gérer les impôts - Faux, parce que les impôts sont gérés par l'administration fiscale.
    中：错误，因为税务由税务局管理。`
  },
  {
    id: "tr0014",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée", // 模拟题，没有“o”
    question: "Dans une entreprise, le droit syndical permet :",
    options: [
      "La création et l'adhésion à un syndicat",
      "D'ignorer les règles de l'entreprise",
      "D'augmenter automatiquement le salaire",
      "D'arrêter de travailler sans prévenir"
    ],
    answer: 0, // 对应选项 A
    explanation: `✅ A. La création et l'adhésion à un syndicat - Correct, parce que le droit syndical protège la liberté d'organisation des travailleurs. Donc les salariés peuvent créer ou rejoindre un syndicat.
    中：正确，因为工会权保障工人组织自由，所以员工可以创建或加入工会。
    
    ❌ B. D'ignorer les règles de l'entreprise - Faux, parce que le syndicat ne permet pas de violer les règles internes.
    中：错误，因为工会权不等于可以违反公司规定。
    
    ❌ C. D'augmenter automatiquement le salaire - Faux, parce que l'adhésion ne garantit pas une augmentation automatique.
    中：错误，因为加入工会不会自动涨工资。
    
    ❌ D. D'arrêter de travailler sans prévenir - Faux, parce que arrêter le travail sans procédure peut être un abus.
    中：错误，因为无通知停工可能违法。`
  },
  {
    id: "tr0015",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 模拟题，没有“o”
    question: "Dans une entreprise, le droit de grève autorise :",
    options: [
      "Les salariés à cesser le travail légalement pour défendre leurs droits",
      "Les patrons à suspendre les salariés",
      "Les collègues à décider du salaire",
      "Les employés à voyager"
    ],
    answer: 0, // 对应选项 A
    explanation: `✅ A. Les salariés à cesser le travail légalement pour défendre leurs droits - Correct, parce que la grève est un droit constitutionnel en France. Donc les salariés peuvent arrêter de travailler dans un cadre légal.
    中：正确，因为罢工是宪法权利，所以员工可在合法范围内停止工作。
    
    ❌ B. Les patrons à suspendre les salariés - Faux, parce que le droit de grève concerne les salariés, pas les employeurs.
    中：错误，因为罢工权是员工的，不是老板的。
    
    ❌ C. Les collègues à décider du salaire - Faux, parce que le salaire est défini par l'employeur et les accords, pas par une grève.
    中：错误，因为工资由雇主和协议决定，不是同事决定。
    
    ❌ D. Les employés à voyager - Faux, parce que le droit de grève ne concerne pas les voyages.
    中：错误，因为罢工与旅行无关。`
  },
  {
    id: "tr0016",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée", // 模拟题，没有“o”
    question: "Quelles sont les conditions pour toucher les allocations chômage ?",
    options: [
      "Avoir travaillé suffisamment et être en recherche active d'emploi",
      "Être retraité",
      "Être étudiant seulement",
      "Ne jamais avoir travaillé"
    ],
    answer: 0, // 对应选项 A
    explanation: `✅ A. Avoir travaillé suffisamment et être en recherche active d'emploi - Correct, parce que les allocations sont une aide pour les personnes ayant perdu un emploi et qui cherchent activement. Donc ces conditions sont obligatoires.
    中：正确，因为失业救济是给失业且积极找工作的人，所以必须满足工作时长和求职要求。
    
    ❌ B. Être retraité - Faux, parce que les retraités ne touchent pas l'allocation chômage.
    中：错误，因为退休人员不符合失业救济条件。
    
    ❌ C. Être étudiant seulement - Faux, parce que les étudiants ne sont pas automatiquement éligibles.
    中：错误，因为学生不一定符合条件。
    
    ❌ D. Ne jamais avoir travaillé - Faux, parce que il faut avoir travaillé pour cotiser.
    中：错误，因为必须有工作经历并缴纳保险。`
  },

  {
    id: "ap0031",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Les parents doivent assurer :",
    options: [
      "Le luxe de l'enfant",
      "Sa santé",
      "Son indépendance financière",
      "Ses vacances"
    ],
    answer: 1,
    explanation: `❌ A. Le luxe de l'enfant - Faux. parce que ce n'est pas une obligation.\n中：错误，因为不是必须提供奢侈品。\n\n✅ B. Sa santé - Correct ! parce que la santé est un droit et une obligation parentale.\n中：正确，因为父母必须保障孩子健康。\n\n❌ C. Son indépendance financière - Faux. parce que l'enfant n'est pas obligé d'être indépendant.\n中：错误，因为孩子不需要独立。\n\n❌ D. Ses vacances - Faux. parce que ce n'est pas obligatoire.\n中：错误，因为不是必须。`
  },
  {
    id: "ap0032",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "L'instruction obligatoire concerne les enfants de :",
    options: [
      "2 à 14 ans",
      "3 à 16 ans",
      "6 à 18 ans",
      "5 à 15 ans"
    ],
    answer: 1,
    explanation: `❌ A. 2 à 14 ans - Faux. parce que l'obligation commence à 3 ans.\n中：错误，因为从3岁开始。\n\n✅ B. 3 à 16 ans - Correct ! parce que la loi impose l'école de 3 à 16 ans.\n中：正确，因为义务教育从3岁到16岁。\n\n❌ C. 6 à 18 ans - Faux. parce que la période est différente.\n中：错误，因为不符合现行法律。\n\n❌ D. 5 à 15 ans - Faux. parce que ce n'est pas la bonne période.\n中：错误，因为不正确。`
  },
  {
    id: "ap0033",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "La loi française est :",
    options: [
      "Moins importante que les traditions",
      "Égale aux règles familiales",
      "Prioritaire sur les valeurs privées",
      "Optionnelle"
    ],
    answer: 2,
    explanation: `❌ A. Moins importante que les traditions - Faux. parce que la loi est supérieure.\n中：错误，因为法律高于传统。\n\n❌ B. Égale aux règles familiales - Faux. parce que la loi prime.\n中：错误，因为法律优先。\n\n✅ C. Prioritaire sur les valeurs privées - Correct ! parce que la loi s'applique à tous et doit être respectée.\n中：正确，因为法律优先于私人价值观。\n\n❌ D. Optionnelle - Faux. parce que la loi est obligatoire.\n中：错误，因为法律必须遵守。`
  },
  {
    id: "ap0034",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "L'égalité filles-garçons doit être respectée :",
    options: [
      "Uniquement à l'école",
      "Uniquement au travail",
      "Partout, même dans la famille",
      "Seulement en public"
    ],
    answer: 2,
    explanation: `❌ A. Uniquement à l'école - Faux. parce que l'égalité concerne toute la société.\n中：错误，因为平等适用于全社会。\n\n❌ B. Uniquement au travail - Faux. parce que ce n'est pas limité au travail.\n中：错误，因为不限于工作场所。\n\n✅ C. Partout, même dans la famille - Correct ! parce que l'égalité est un principe général dans la société française.\n中：正确，因为平等原则在家庭也适用。\n\n❌ D. Seulement en public - Faux. parce que l'égalité doit être respectée partout, même en privé.\n中：错误，因为不只在公共场合。`
  },
  {
    id: "ap0035",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Les parents peuvent gérer les biens de l'enfant jusqu'à :",
    options: [
      "14 ans",
      "15 ans",
      "16 ans",
      "18 ans"
    ],
    answer: 3,
    explanation: `❌ A. 14 ans - Faux. parce que la gestion se fait jusqu'à la majorité.\n中：错误，因为直到成年。\n\n❌ B. 15 ans - Faux. parce que ce n'est pas la limite.\n中：错误，因为不是正确年龄。\n\n❌ C. 16 ans - Faux. parce que la majorité est à 18 ans.\n中：错误，因为成年为18岁。\n\n✅ D. 18 ans - Correct ! parce que la majorité est à 18 ans, donc la gestion des biens se termine.\n中：正确，因为18岁成年后孩子自己管理财产。`
  },
  {
    id: "ap0036",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "L'autorité parentale prend fin automatiquement quand l'enfant :",
    options: [
      "Travaille",
      "Quitte l'école",
      "A 18 ans",
      "Se marie"
    ],
    answer: 2,
    explanation: `❌ A. Travaille - Faux. parce que travailler ne met pas fin à l'autorité parentale.\n中：错误，因为工作不影响父母权利。\n\n❌ B. Quitte l'école - Faux. parce que la fin de la scolarité ne change pas la situation juridique.\n中：错误，因为离校不等于成年。\n\n✅ C. A 18 ans - Correct ! parce que à 18 ans l'enfant devient majeur.\n中：正确，因为18岁成年，父母权利结束。\n\n❌ D. Se marie - Faux. parce que le mariage ne met pas automatiquement fin à l'autorité parentale.\n中：错误，因为不是自动终止。`
  },
  {
    id: "ap0037",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Qui décide du retrait de l'autorité parentale ?",
    options: [
      "L'école",
      "Les parents",
      "Un tribunal",
      "La mairie"
    ],
    answer: 2,
    explanation: `❌ A. L'école - Faux. parce que l'école n'a pas ce pouvoir.\n中：错误，因为学校没有此权力。\n\n❌ B. Les parents - Faux. parce que les parents ne peuvent pas décider seuls d'un retrait.\n中：错误，因为父母不能自行撤销权利。\n\n✅ C. Un tribunal - Correct ! parce que le retrait est décidé par un juge en cas de danger ou manquement.\n中：正确，因为需要法院判决。\n\n❌ D. La mairie - Faux. parce que la mairie n'a pas ce pouvoir.\n中：错误，因为市政府无权决定。`
  },
  {
    id: "ap0038",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Un parent peut renoncer seul à son autorité parentale :",
    options: [
      "Oui",
      "Non",
      "Par écrit",
      "Après 5 ans"
    ],
    answer: 1,
    explanation: `❌ A. Oui - Faux. parce que l'autorité parentale ne peut pas être abandonnée sans décision judiciaire.\n中：错误，因为不能自行放弃。\n\n✅ B. Non - Correct ! parce que il faut une décision du juge pour renoncer à l'autorité parentale.\n中：正确，因为必须由法官决定。\n\n❌ C. Par écrit - Faux. parce que une simple lettre n'est pas suffisante.\n中：错误，因为书面声明不具法律效力。\n\n❌ D. Après 5 ans - Faux. parce que il n'y a pas de délai automatique.\n中：错误，因为没有5年限制。`
  },
  {
    id: "ap0039",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Le retrait de l'autorité parentale peut être :",
    options: [
      "Oral",
      "Total ou partiel",
      "Temporaire sans décision",
      "Automatique"
    ],
    answer: 1,
    explanation: `❌ A. Oral - Faux. parce que cela doit être une décision écrite du tribunal.\n中：错误，因为必须有法院书面决定。\n\n✅ B. Total ou partiel - Correct ! parce que le juge peut retirer tous les droits ou seulement certains.\n中：正确，因为法官可全权或部分撤销。\n\n❌ C. Temporaire sans décision - Faux. parce que cela nécessite une décision judiciaire.\n中：错误，因为必须由法院决定。\n\n❌ D. Automatique - Faux. parce que ce n'est pas automatique.\n中：错误，因为不是自动发生。`
  },
  {
    id: "ap0040",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Même après un retrait total, le parent doit :",
    options: [
      "Quitter le pays",
      "Ne plus rien faire",
      "Participer à l'entretien de l'enfant",
      "Changer de nom"
    ],
    answer: 2,
    explanation: `❌ A. Quitter le pays - Faux. parce que ce n'est pas une obligation.\n中：错误，因为不需要离开国家。\n\n❌ B. Ne plus rien faire - Faux. parce que le parent garde des obligations financières.\n中：错误，因为仍需承担责任。\n\n✅ C. Participer à l'entretien de l'enfant - Correct ! parce que même sans autorité, le parent doit assurer la pension alimentaire.\n中：正确，因为即使失去权利仍需承担抚养义务。\n\n❌ D. Changer de nom - Faux. parce que ce n'est pas exigé.\n中：错误，因为不需要改名。`
  },
  {
    id: "ap0041",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Des aides financières existent pour :",
    options: [
      "Toutes les familles riches",
      "Les familles à faibles revenus",
      "Les touristes",
      "Les employeurs"
    ],
    answer: 1,
    explanation: `❌ A. Toutes les familles riches - Faux. parce que les aides sont ciblées sur les besoins, pas sur la richesse.\n中：错误，因为补助是针对困难家庭，不是富人。\n\n✅ B. Les familles à faibles revenus - Correct ! parce que l'État propose des aides pour soutenir les familles en difficulté financière.\n中：正确，因为国家为低收入家庭提供补助。\n\n❌ C. Les touristes - Faux. parce que les aides sont pour les résidents, pas les touristes.\n中：错误，因为游客通常不享受这些福利。\n\n❌ D. Les employeurs - Faux. parce que les aides concernent les familles, pas les employeurs.\n中：错误，因为不是给雇主的。`
  },
  {
    id: "ap0042",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Les enfants non francophones ont le droit :",
    options: [
      "De rester chez eux",
      "D'aller à l'école",
      "D'attendre 18 ans",
      "De ne pas apprendre le français"
    ],
    answer: 1,
    explanation: `❌ A. De rester chez eux - Faux. parce que l'école est obligatoire.\n中：错误，因为义务教育必须上学。\n\n✅ B. D'aller à l'école - Correct ! parce que tous les enfants ont droit à l'éducation, même s'ils ne parlent pas français.\n中：正确，因为所有孩子都有受教育权，包括不懂法语者。\n\n❌ C. D'attendre 18 ans - Faux. parce que l'école commence dès 3 ans.\n中：错误，因为教育从3岁开始。\n\n❌ D. De ne pas apprendre le français - Faux. parce que l'intégration passe aussi par l'apprentissage de la langue.\n中：错误，因为学习法语是融入社会的重要部分。`
  },
  {
    id: "ap0043",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Avant l'entrée à l'école, un enfant allophone peut passer :",
    options: [
      "Un entretien médical",
      "Un test de positionnement",
      "Un examen juridique",
      "Un concours"
    ],
    answer: 1,
    explanation: `❌ A. Un entretien médical - Faux. parce que ce n'est pas le but principal avant l'école.\n中：错误，因为不是主要目的。\n\n✅ B. Un test de positionnement - Correct ! parce que les enfants non francophones peuvent faire un test pour évaluer leur niveau de français.\n中：正确，因为对非法语儿童会进行法语水平测试。\n\n❌ C. Un examen juridique - Faux. parce que ce n'est pas lié à l'école.\n中：错误，因为与学校无关。\n\n❌ D. Un concours - Faux. parce que l'école maternelle n'exige pas de concours.\n中：错误，因为幼儿园不需要考试。`
  },
  {
    id: "ap0044",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "L'OEPRE s'adresse surtout :",
    options: [
      "Aux enseignants",
      "Aux enfants",
      "Aux parents étrangers",
      "Aux employeurs"
    ],
    answer: 2,
    explanation: `❌ A. Aux enseignants - Faux. parce que ce n'est pas le public principal.\n中：错误，因为不是主要对象。\n\n❌ B. Aux enfants - Faux. parce que l'OEPRE vise plutôt les parents.\n中：错误，因为主要面向家长。\n\n✅ C. Aux parents étrangers - Correct ! parce que l'OEPRE aide les parents étrangers à comprendre l'école et l'éducation en France.\n中：正确，因为OEPRE帮助外国父母了解法国教育体系。\n\n❌ D. Aux employeurs - Faux. parce que ce n'est pas lié au travail.\n中：错误，因为与雇主无关。`
  },
  {
    id: "ap0045",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Quel établissement accueille les enfants juste avant l'école élémentaire ?",
    options: [
      "Le collège",
      "Le lycée",
      "L'école maternelle",
      "L'université"
    ],
    answer: 2,
    explanation: `❌ A. Le collège - Faux. parce que le collège est après l'école élémentaire.\n中：错误，因为初中在小学之后。\n\n❌ B. Le lycée - Faux. parce que lycée est après le collège.\n中：错误，因为高中在初中之后。\n\n✅ C. L'école maternelle - Correct ! parce que la maternelle accueille les enfants de 3 à 6 ans, avant l'école élémentaire.\n中：正确，因为幼儿园在小学之前。\n\n❌ D. L'université - Faux. parce que c'est pour les adultes après le lycée.\n中：错误，因为大学是成年后。`
  },
  {
    id: "ap0046",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Quel diplôme permet l'accès à l'enseignement supérieur en France ?",
    options: [
      "Brevet des collèges",
      "CAP",
      "Baccalauréat",
      "BEP"
    ],
    answer: 2,
    explanation: `❌ A. Brevet des collèges - Faux. parce que ce diplôme n'est pas suffisant pour entrer à l'université.\n中：错误，因为初中毕业证不能直接上大学。\n\n❌ B. CAP - Faux. parce que c'est un diplôme professionnel, pas pour l'accès direct à l'université.\n中：错误，因为是职业证书，不是大学入学证。\n\n✅ C. Baccalauréat - Correct ! parce que le bac est le diplôme requis pour entrer à l'enseignement supérieur.\n中：正确，因为高中毕业证是进入高等教育的条件。\n\n❌ D. BEP - Faux. parce que c'est un diplôme professionnel.\n中：错误，因为不是大学入学证。`
  },
  {
    id: "ap0047",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Après le collège, un élève peut s'orienter vers :",
    options: [
      "Uniquement le lycée général",
      "Le lycée ou l'apprentissage",
      "L'université directement",
      "Le marché du travail sans formation"
    ],
    answer: 1,
    explanation: `❌ A. Uniquement le lycée général - Faux. parce que il existe aussi l'apprentissage et les lycées professionnels.\n中：错误，因为还有职业学校和学徒制。\n\n✅ B. Le lycée ou l'apprentissage - Correct ! parce que l'élève peut choisir lycée général/pro ou l'apprentissage.\n中：正确，因为可选普通高中、职业高中或学徒制。\n\n❌ C. L'université directement - Faux. parce que il faut le bac.\n中：错误，因为需要高中毕业证。\n\n❌ D. Le marché du travail sans formation - Faux. parce que il est préférable de continuer une formation.\n中：错误，因为通常需要继续学习或培训。`
  },
  {
    id: "ap0048",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Dans l'exercice de l'autorité parentale, les parents doivent agir :",
    options: [
      "Selon leurs intérêts personnels",
      "Selon les traditions familiales",
      "Dans le respect et l'intérêt de l'enfant",
      "Selon l'avis de l'école"
    ],
    answer: 2,
    explanation: `❌ A. Selon leurs intérêts personnels - Faux. parce que l'intérêt de l'enfant doit primer.\n中：错误，因为孩子利益优先。\n\n❌ B. Selon les traditions familiales - Faux. parce que la loi prime sur les traditions.\n中：错误，因为法律优先。\n\n✅ C. Dans le respect et l'intérêt de l'enfant - Correct ! parce que l'autorité parentale doit protéger et respecter l'enfant.\n中：正确，因为父母必须尊重并以孩子利益为先。\n\n❌ D. Selon l'avis de l'école - Faux. parce que l'école donne des conseils mais ne décide pas.\n中：错误，因为学校不能替代父母决定。`
  },
  {
    id: "ap0049",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Les parents ont le devoir d'assurer :",
    options: [
      "La santé de l'enfant",
      "Les loisirs des parents",
      "Le travail de l'enfant",
      "Les examens"
    ],
    answer: 0,
    explanation: `✅ A. La santé de l'enfant - Correct ! parce que la santé est un besoin fondamental.\n中：正确，因为健康是基本需求。\n\n❌ B. Les loisirs des parents - Faux. parce que ce n'est pas une obligation.\n中：错误，因为不是必须。\n\n❌ C. Le travail de l'enfant - Faux. parce que le travail n'est pas un devoir pour l'enfant.\n中：错误，因为孩子不应工作。\n\n❌ D. Les examens - Faux. parce que l'école s'en charge.\n中：错误，因为考试由学校组织。`
  },
  {
    id: "ap0050",
    type: "carte multi",
    category: "Autorité parentale et système éducatif",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"标记
    question: "Dans l'autorité parentale, les parents doivent :",
    options: [
      "Utiliser la violence",
      "Respecter l'enfant",
      "Ignorer ses besoins",
      "Le laisser seul"
    ],
    answer: 1,
    explanation: `❌ A. Utiliser la violence - Faux. parce que la violence est interdite.\n中：错误，因为禁止暴力。\n\n✅ B. Respecter l'enfant - Correct ! parce que le respect est un principe fondamental de l'autorité parentale.\n中：正确，因为尊重是父母权利的重要原则。\n\n❌ C. Ignorer ses besoins - Faux. parce que ils doivent assurer ses besoins.\n中：错误，因为必须满足孩子需求。\n\n❌ D. Le laisser seul - Faux. parce que la surveillance est obligatoire.\n中：错误，因为必须照看孩子。`
  },

  {
    id: "tr0017",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée", // 模拟题，没有“o”
    question: "Que fait France Travail pour les personnes sans emploi ?",
    options: [
      "Leur prête de l'argent",
      "Les aide à chercher un emploi ou une formation",
      "Donne des vacances",
      "Organise des fêtes"
    ],
    answer: 1, // 对应选项 B
    explanation: `❌ A. Leur prête de l'argent - Faux, parce que France Travail ne prête pas d'argent, il accompagne vers l'emploi.
    中：错误，因为France Travail不提供贷款，只提供就业支持。
    
    ✅ B. Les aide à chercher un emploi ou une formation - Correct, parce que c'est son rôle principal d'accompagnement. Donc il propose des offres, des conseils et des formations.
    中：正确，因为其主要职责是帮助找工作或培训，所以提供岗位、指导和培训。
    
    ❌ C. Donne des vacances - Faux, parce que ce n'est pas un service de loisirs.
    中：错误，因为它不是提供假期的机构。
    
    ❌ D. Organise des fêtes - Faux, parce que ce n'est pas sa mission.
    中：错误，因为不负责组织活动。`
  },
  {
    id: "tr0018",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 模拟题，没有“o”
    question: "Le questionnaire d'orientation permet de connaître :",
    options: [
      "Le niveau de français et les compétences professionnelles",
      "Les goûts alimentaires",
      "Les hobbies sportifs",
      "Les opinions politiques"
    ],
    answer: 0, // 对应选项 A
    explanation: `✅ A. Le niveau de français et les compétences professionnelles - Correct, parce que ce questionnaire sert à orienter vers la formation ou l'emploi adapté. Donc il évalue les compétences.
    中：正确，因为问卷用于确定合适的培训或工作方向，所以评估法语和技能。
    
    ❌ B. Les goûts alimentaires - Faux, parce que cela n'a pas de lien avec l'emploi.
    中：错误，因为饮食偏好与工作无关。
    
    ❌ C. Les hobbies sportifs - Faux, parce que les loisirs ne sont pas l'objectif du questionnaire.
    中：错误，因为爱好不是目的。
    
    ❌ D. Les opinions politiques - Faux, parce que la politique n'est pas prise en compte.
    中：错误，因为不涉及政治观点。`
  },
  {
    id: "tr0019",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée", // 模拟题，没有“o”
    question: "L'application Travailler en France sert à :",
    options: [
      "Réserver un hôtel",
      "Trouver des offres d'emploi et faire un CV",
      "Regarder la météo",
      "Acheter des actions"
    ],
    answer: 1, // 对应选项 B
    explanation: `❌ A. Réserver un hôtel - Faux, parce que ce n'est pas une application de voyage.
    中：错误，因为它不是订酒店的软件。
    
    ✅ B. Trouver des offres d'emploi et faire un CV - Correct, parce que l'application est conçue pour faciliter la recherche d'emploi et la candidature. Donc elle aide à trouver des postes et créer un CV.
    中：正确，因为该应用用于求职和制作简历，所以可用来找工作。
    
    ❌ C. Regarder la météo - Faux, parce que ce n'est pas un service météo.
    中：错误，因为不是天气应用。
    
    ❌ D. Acheter des actions - Faux, parce que ce n'est pas une application financière.
    中：错误，因为不涉及股票交易。`
  },
{
  id: "tr0020",
  type: "carte multi",
  category: "Travail",
  difficulté: "moyen",
  typeQuestion: "examen original",
  question: "Une personne qui reçoit le RSA :",
  options: [
    "Peut être accompagné par France Travail",
    "Obligée de créer une entreprise",
    "Exclue de tout accompagnement",
    "Licenciée automatiquement"
  ],
  answer: 0,
  explanation: "✅ A. Peut être accompagné par France Travail - Correct, parce que le RSA est lié à l’insertion professionnelle. Donc la personne doit être accompagnée vers l’emploi.\n中：正确，因为RSA 与就业融入相关，所以通常会被纳入 France Travail 伴随计划。\n\n❌ B. Obligée de créer une entreprise - Faux, parce que le RSA ne force pas à créer une entreprise.\n中：错误，因为RSA 不要求创业。\n\n❌ C. Exclue de tout accompagnement - Faux, parce que au contraire elle doit être accompagnée pour retrouver un emploi.\n中：错误，因为相反需要支持。\n\n❌ D. Licenciée automatiquement - Faux, parce que le RSA n’a aucun lien avec un licenciement.\n中：错误，因为RSA 与解雇无关。"
}
,
  
  {
    id: "tr0021",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Qu'est-ce que le CDI ?",
    options: [
      "Contrat qui a une date de fin",
      "Contrat sans date de fin",
      "Contrat pour étudiants uniquement",
      "Contrat temporaire"
    ],
    answer: 1,
    explanation: `❌ A. Contrat qui a une date de fin - Faux, parce que le CDI est un contrat à durée indéterminée.
    中：错误，因为CDI没有结束日期。
    
    ✅ B. Contrat sans date de fin - Correct, parce que le CDI n'a pas de durée limitée. Donc il est stable et durable.
    中：正确，因为CDI没有期限，所以更稳定。
    
    ❌ C. Contrat pour étudiants uniquement - Faux, parce que le CDI est pour tout salarié.
    中：错误，因为适用于所有员工。
    
    ❌ D. Contrat temporaire - Faux, parce que cela décrit un CDD.
    中：错误，因为临时合同是CDD。`
  },
  {
    id: "tr0022",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le CDD est utilisé :",
    options: [
      "Pour un travail permanent",
      "Pour une mission précise et limitée dans le temps",
      "Pour créer une entreprise",
      "Pour un stage uniquement"
    ],
    answer: 1,
    explanation: `❌ A. Pour un travail permanent - Faux, parce que le CDD est limité dans le temps.
    中：错误，因为CDD有期限。
    
    ✅ B. Pour une mission précise et limitée dans le temps - Correct, parce que le CDD sert à un besoin temporaire (remplacement, saison, etc.). Donc il a une date de fin.
    中：正确，因为CDD用于临时任务，所以有结束日期。
    
    ❌ C. Pour créer une entreprise - Faux, parce que un contrat de travail n'est pas une création d'entreprise.
    中：错误，因为合同与创业无关。
    
    ❌ D. Pour un stage uniquement - Faux, parce que un stage n'est pas un CDD.
    中：错误，因为实习合同不同。`
  },


  {
    id: "dr0086",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Le droit à la protection de la santé signifie que l'État doit :",
    options: [
      "Soigner uniquement les personnes riches",
      "Garantir l'accès aux soins",
      "Supprimer les hôpitaux publics",
      "Rendre la santé privée"
    ],
    answer: 1,
    explanation: `❌ A. Soigner uniquement les personnes riches - Faux. L'État doit garantir l'accès aux soins pour tous.
中：错误。国家应保障人人可获得医疗。

✅ B. Garantir l'accès aux soins - Correct ! L'État doit garantir l'accès aux soins pour tous.
中：正确。保障医疗可及性。

❌ C. Supprimer les hôpitaux publics - Faux. Cela va à l'encontre du droit à la santé.
中：错误。与健康权相反。

❌ D. Rendre la santé privée - Faux. L'État doit assurer un système public de santé.
中：错误。不是让健康完全私有化。`
  },
  {
    id: "dr0087",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "difficile",
    typeQuestion: "question simulée", // 标记为"难"，无"o"
    question: "Le droit à la santé est inscrit notamment dans :",
    options: [
      "Le Code pénal",
      "Le Préambule de la Constitution de 1946",
      "La Déclaration de 1789",
      "Le Code de la route"
    ],
    answer: 1,
    explanation: `❌ A. Le Code pénal - Faux. Le Code pénal ne traite pas directement de ce droit.
中：错误。刑法典不涉及健康权。

✅ B. Le Préambule de la Constitution de 1946 - Correct ! Le droit à la santé est mentionné dans le préambule de 1946.
中：正确。1946宪法序言中包含健康权。

❌ C. La Déclaration de 1789 - Faux. La Déclaration de 1789 ne mentionne pas explicitement la santé.
中：错误。1789宣言未明确健康权。

❌ D. Le Code de la route - Faux. Le code de la route concerne la circulation, pas la santé.
中：错误。交通法规不涉及健康权。`
  },
  {
    id: "dr0088",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Le droit à l'éducation garantit :",
    options: [
      "Une école payante pour tous",
      "L'égal accès à l'instruction",
      "L'école obligatoire jusqu'à 30 ans",
      "L'interdiction de l'enseignement public"
    ],
    answer: 1,
    explanation: `❌ A. Une école payante pour tous - Faux. L'éducation doit être accessible à tous, souvent gratuite.
中：错误。教育应普及且通常免费。

✅ B. L'égal accès à l'instruction - Correct ! Le droit à l'éducation garantit l'accès à l'instruction pour tous.
中：正确。保障平等受教育权。

❌ C. L'école obligatoire jusqu'à 30 ans - Faux. L'école obligatoire ne va pas jusqu'à 30 ans.
中：错误。义务教育不是到30岁。

❌ D. L'interdiction de l'enseignement public - Faux. Au contraire, l'enseignement public est un droit.
中：错误。公立教育是权利。`
  },
  {
    id: "dr0089",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "En France, l'enseignement public est :",
    options: [
      "Facultatif et payant",
      "Gratuit et laïque",
      "Réservé aux garçons",
      "Organisé par les entreprises"
    ],
    answer: 1,
    explanation: `❌ A. Facultatif et payant - Faux. L'enseignement public est gratuit et obligatoire.
中：错误。公立教育免费且义务。

✅ B. Gratuit et laïque - Correct ! L'enseignement public est gratuit et laïque en France.
中：正确。公立教育免费且世俗。

❌ C. Réservé aux garçons - Faux. L'enseignement est mixte.
中：错误。男女平等。

❌ D. Organisé par les entreprises - Faux. Il est organisé par l'État.
中：错误。由国家组织。`
  },
  {
    id: "dr0090",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Qui possède le statut de militaires ?",
    options: [
      "Les policiers",
      "Les gendarmes",
      "Les magistrats",
      "Les élus locaux"
    ],
    answer: 1,
    explanation: `❌ A. Les policiers - Faux. Les policiers ne sont pas militaires.
中：错误。警察不是军人。

✅ B. Les gendarmes - Correct ! Les gendarmes sont des militaires.
中：正确。宪兵具有军人身份。

❌ C. Les magistrats - Faux. Les magistrats sont des juges, pas militaires.
中：错误。法官不是军人。

❌ D. Les élus locaux - Faux. Les élus ne sont pas militaires.
中：错误。不是军人。`
  },
  {
    id: "dr0091",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 无"o"标记
    question: "La Constitution française fixe notamment :",
    options: [
      "Les règles de politesse",
      "L'organisation de l'État",
      "Les horaires scolaires",
      "Les prix des produits"
    ],
    answer: 1,
    explanation: `❌ A. Les règles de politesse - Faux. La Constitution ne traite pas de la politesse.
中：错误。宪法不规定礼仪。

✅ B. L'organisation de l'État - Correct ! Elle organise les institutions et les pouvoirs.
中：正确。宪法规定国家组织。

❌ C. Les horaires scolaires - Faux. Les horaires sont fixés par l'éducation nationale.
中：错误。学校时间由教育部门规定。

❌ D. Les prix des produits - Faux. Les prix sont déterminés par le marché et la politique économique.
中：错误。商品价格由市场与政策决定。`
  },
  {
    id: "dr0092",
    type: "carte multi",
    category: "Droits fondamentaux",
    difficulté: "simple",
    typeQuestion: "question simulée", // 无"o"标记
    question: "Quels sont les trois textes de référence mentionnés dans le Préambule de la Constitution de 1958 ?",
    options: [
      "Le Code civil, le Code pénal, le Code du travail",
      "La DDHC de 1789, le Préambule de 1946, la Charte de l'environnement",
      "La Constitution de 1791, la loi de 1905, le traité de Rome",
      "Le Code de la route, le Code rural, le Code fiscal"
    ],
    answer: 1,
    explanation: `❌ A. Le Code civil, le Code pénal, le Code du travail - Faux. Ces codes ne sont pas mentionnés dans le préambule.
中：错误。民法典、刑法典和劳动法典不在宪法序言中提到。

✅ B. La DDHC de 1789, le Préambule de 1946, la Charte de l'environnement - Correct ! Le préambule de 1958 renvoie à ces trois textes fondamentaux.
中：正确。1958年宪法序言引用了1789人权宣言、1946宪法序言和环境宪章。

❌ C. La Constitution de 1791, la loi de 1905, le traité de Rome - Faux. Ces textes ne sont pas mentionnés dans le préambule.
中：错误。1791宪法、1905法案、罗马条约不在宪法序言中提到。

❌ D. Le Code de la route, le Code rural, le Code fiscal - Faux. Ces codes ne font pas partie des textes fondamentaux du préambule.
中：错误。道路法典、农村法典、税法典不属于宪法序言的参考文本。`
  },

  {
    id: "tr0023",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le CDD d'usage sert à :",
    options: [
      "Embaucher pour un long projet",
      "Embaucher pour une courte durée (quelques heures ou jours)",
      "Embaucher uniquement des étrangers",
      "Remplacer le CDI"
    ],
    answer: 1,
    explanation: `❌ A. Embaucher pour un long projet - Faux, parce que le CDD d'usage est prévu pour des besoins courts et réguliers.
    中：错误，因为用途合同用于短期且常见的临时需求。
    
    ✅ B. Embaucher pour une courte durée (quelques heures ou jours) - Correct, parce que il est utilisé dans certains secteurs (spectacle, hôtellerie) pour des missions courtes. Donc il peut être très court.
    中：正确，因为适用于演出、酒店等行业的短期工作，所以可以是几小时或几天。
    
    ❌ C. Embaucher uniquement des étrangers - Faux, parce que la nationalité n'est pas un critère.
    中：错误，因为不限制国籍。
    
    ❌ D. Remplacer le CDI - Faux, parce que le CDD d'usage ne remplace pas le CDI, il reste temporaire.
    中：错误，因为它仍是临时合同，不取代CDI。`
  },
  {
    id: "tr0024",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Les heures supplémentaires doivent être :",
    options: [
      "Non payées",
      "Payées ou rattrapées par le salarié",
      "Ignorées",
      "Décidées par le voisin"
    ],
    answer: 1,
    explanation: `❌ A. Non payées - Faux, parce que la loi oblige la rémunération ou le repos compensateur. Donc elles doivent être payées ou récupérées.
    中：错误，因为法律要求加班要支付或补休，所以不能不付。
    
    ✅ B. Payées ou rattrapées par le salarié - Correct, parce que la réglementation impose une compensation. Donc l'employeur doit payer ou donner du repos.
    中：正确，因为法规要求补偿，所以必须支付或补休。
    
    ❌ C. Ignorées - Faux, parce que ignorer les heures supplémentaires est illégal.
    中：错误，因为忽略加班不合法。
    
    ❌ D. Décidées par le voisin - Faux, parce que le voisin n'a aucun rôle dans le temps de travail.
    中：错误，因为邻居不参与工作安排。`
  },
  {
    id: "tr0025",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Quelle est la durée légale des congés payés par mois travaillé ?",
    options: [
      "1 jour",
      "2,5 jours",
      "5 jours",
      "0 jour"
    ],
    answer: 1,
    explanation: `❌ A. 1 jour - Faux, parce que la loi prévoit plus de jours.
    中：错误，因为法律规定更多天。
    
    ✅ B. 2,5 jours - Correct, parce que la règle générale est 2,5 jours de congés payés par mois de travail. Donc cela fait 30 jours par an.
    中：正确，因为一般规则是每月2.5天，所以一年约30天。
    
    ❌ C. 5 jours - Faux, parce que 5 jours est trop élevé par mois.
    中：错误，因为每月5天过多。
    
    ❌ D. 0 jour - Faux, parce que les congés payés sont un droit obligatoire.
    中：错误，因为带薪休假是法定权利。`
  },
  {
    id: "tr0026",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "L'âge légal pour commencer à travailler en France est :",
    options: [
      "14 ans",
      "16 ans",
      "18 ans",
      "21 ans"
    ],
    answer: 0,
    explanation: `✅ A. 14 ans - Correct, parce que la loi autorise le travail à partir de 14 ans sous conditions. Donc c'est l'âge minimum.
    中：正确，因为法律允许14岁起在特定条件下工作，所以这是最低年龄。
    
    ❌ B. 16 ans - Faux, parce que l'âge minimum est 14 ans.
    中：错误，因为最低年龄不是16。
    
    ❌ C. 18 ans - Faux, parce que 18 ans est l'âge adulte, pas l'âge minimum.
    中：错误，因为不是最低年龄。
    
    ❌ D. 21 ans - Faux, parce que c'est trop tard par rapport à la loi.
    中：错误，因为比法定最低年龄高很多。`
  },
  {
    id: "tr0027",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Le Code du travail protège :",
    options: [
      "Les animaux",
      "Les salariés",
      "Les touristes",
      "Les entreprises seulement"
    ],
    answer: 1,
    explanation: `❌ A. Les animaux - Faux, parce que les animaux sont protégés par d'autres lois.
    中：错误，因为动物保护属于其他法律。
    
    ✅ B. Les salariés - Correct, parce que le Code du travail fixe les règles du travail pour protéger les employés. Donc il protège les salariés.
    中：正确，因为劳动法规定劳动规则以保护员工，所以保护劳动者。
    
    ❌ C. Les touristes - Faux, parce que le Code du travail ne concerne pas les touristes.
    中：错误，因为旅游者不属于劳动法保护对象。
    
    ❌ D. Les entreprises seulement - Faux, parce que il protège aussi les salariés.
    中：错误，因为不仅保护企业，还保护员工。`
  },
  {
    id: "tr0028",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Les conventions collectives concernent :",
    options: [
      "Une profession spécifique",
      "Tous les citoyens",
      "Les retraités",
      "Les écoles"
    ],
    answer: 0,
    explanation: `✅ A. Une profession spécifique - Correct, parce que une convention collective est négociée pour un secteur ou une branche. Donc elle s'applique aux métiers concernés.
    中：正确，因为集体协议针对特定行业，所以适用于相关职业。
    
    ❌ B. Tous les citoyens - Faux, parce que elle concerne seulement les salariés d'un secteur.
    中：错误，因为只适用于某行业员工。
    
    ❌ C. Les retraités - Faux, parce que les retraités ne travaillent plus.
    中：错误，因为退休人员不属于劳动合同对象。
    
    ❌ D. Les écoles - Faux, parce que ce n'est pas une catégorie générale.
    中：错误，因为学校只是某个行业的一部分。`
  },
{
  id: "tr0029",
  type: "carte multi",
  category: "Travail",
  difficulté: "moyen",
  typeQuestion: "examen original",
  question: "Un salarié peut cumuler plusieurs contrats si :",
  options: [
    "La loi le permet et il respecte les heures maximales",
    "Son employeur refuse",
    "Il est mineur",
    "Il est retraité"
  ],
  answer: 0,
  explanation: "✅ A. La loi le permet et il respecte les heures maximales - Correct, parce qu’il est possible d’avoir plusieurs emplois si le temps de travail total respecte la réglementation. Donc c’est autorisé sous conditions. Il faut aussi respecter une clause d’exclusivité si elle existe dans le contrat, et vérifier que les emplois ne sont pas incompatibles.\n中：正确，因为只要总工时符合法规，可以多份合同。且如果合同中有“排他性条款”，或工作时间冲突，则不能累积。\n\n❌ B. Son employeur refuse - Faux, parce que le refus de l’employeur n’empêche pas toujours le cumul si la loi l’autorise.\n中：错误，因为只要法律允许，雇主不能随意禁止。\n\n❌ C. Il est mineur - Faux, parce que les mineurs ont des restrictions spécifiques.\n中：错误，因为未成年人有特殊限制。\n\n❌ D. Il est retraité - Faux, parce que être retraité ne donne pas automatiquement le droit à plusieurs contrats.\n中：错误，因为退休与合同数量无关。"
}
,
  {
    id: "tr0030",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Que fait le Conseil de Prud'hommes ?",
    options: [
      "Décide des litiges entre voisins",
      "Décide des conflits entre salarié et employeur",
      "Gère les impôts",
      "Organise les élections"
    ],
    answer: 1,
    explanation: `❌ A. Décide des litiges entre voisins - Faux, parce que ce type de litige relève du tribunal civil.
    中：错误，因为邻里纠纷由民事法院处理。
    
    ✅ B. Décide des conflits entre salarié et employeur - Correct, parce que c'est sa mission principale. Donc il traite licenciements, salaires, contrats, etc.
    中：正确，因为劳动法庭专门处理雇主与员工纠纷，所以处理这些案件。
    
    ❌ C. Gère les impôts - Faux, parce que les impôts sont gérés par l'administration fiscale.
    中：错误，因为税务由税务局处理。
    
    ❌ D. Organise les élections - Faux, parce que ce n'est pas sa mission.
    中：错误，因为不负责选举。`
  },
  {
    id: "tr0031",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Le droit syndical permet de :",
    options: [
      "Créer ou adhérer à un syndicat",
      "Augmenter automatiquement le salaire",
      "Travailler sans contrat",
      "Ignorer les règles de l'entreprise"
    ],
    answer: 0,
    explanation: `✅ A. Créer ou adhérer à un syndicat - Correct, parce que il protège la liberté d'organisation des travailleurs. Donc les salariés peuvent se syndiquer.
    中：正确，因为保障工人组织自由，所以可创建或加入工会。
    
    ❌ B. Augmenter automatiquement le salaire - Faux, parce que la syndicalisation ne garantit pas une augmentation automatique.
    中：错误，因为不会自动涨工资。
    
    ❌ C. Travailler sans contrat - Faux, parce que le syndicat ne permet pas d'ignorer la loi.
    中：错误，因为不能因此无合同工作。
    
    ❌ D. Ignorer les règles de l'entreprise - Faux, parce que les règles doivent être respectées même avec un syndicat.
    中：错误，因为仍需遵守公司规则。`
  },
  {
    id: "tr0032",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le CPF permet :",
    options: [
      "De payer moins d'impôts",
      "De suivre des formations, y compris en français",
      "D'obtenir un emploi automatiquement",
      "De créer une entreprise"
    ],
    answer: 1,
    explanation: `❌ A. De payer moins d'impôts - Faux, parce que le CPF est un droit à la formation, pas une réduction fiscale.
    中：错误，因为CPF是培训权，不是减税。
    
    ✅ B. De suivre des formations, y compris en français - Correct, parce que le CPF finance des formations professionnelles. Donc il peut servir à apprendre le français.
    中：正确，因为CPF资助职业培训，所以可以用来学法语。
    
    ❌ C. D'obtenir un emploi automatiquement - Faux, parce que la formation aide mais ne garantit pas un emploi.
    中：错误，因为培训不能保证就业。
    
    ❌ D. De créer une entreprise - Faux, parce que le CPF ne finance pas la création d'entreprise.
    中：错误，因为不用于创业。`
  },
  {
    id: "tr0033",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La VAE sert à :",
    options: [
      "Obtenir un diplôme officiel grâce à l'expérience",
      "Recevoir le RSA",
      "Travailler sans contrat",
      "Annuler le contrat de travail"
    ],
    answer: 0,
    explanation: `✅ A. Obtenir un diplôme officiel grâce à l'expérience - Correct, parce que la VAE reconnaît les compétences acquises par l'expérience. Donc elle permet d'obtenir un diplôme ou une certification.
    中：正确，因为VAE通过工作经验认证技能，所以可获得文凭。
    
    ❌ B. Recevoir le RSA - Faux, parce que RSA est une aide sociale, pas une validation de compétences.
    中：错误，因为RSA是补助，不是学历认证。
    
    ❌ C. Travailler sans contrat - Faux, parce que la VAE n'a rien à voir avec l'emploi sans contrat.
    中：错误，因为VAE与无合同工作无关。
    
    ❌ D. Annuler le contrat de travail - Faux, parce que la VAE ne sert pas à rompre un contrat.
    中：错误，因为不用于解除合同。`
  },
  {
    id: "tr0034",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Pour reconnaître un diplôme étranger, on peut contacter :",
    options: [
      "Le lycée local",
      "Enic-Naric",
      "La mairie",
      "France Travail"
    ],
    answer: 1,
    explanation: `❌ A. Le lycée local - Faux, parce que un lycée ne gère pas la reconnaissance des diplômes étrangers.
    中：错误，因为中学不负责外国学历认证。
    
    ✅ B. Enic-Naric - Correct, parce que Enic-Naric est le service officiel qui évalue les diplômes étrangers. Donc c'est l'organisme à contacter.
    中：正确，因为Enic-Naric是官方学历认证机构，所以应联系它。
    
    ❌ C. La mairie - Faux, parce que la mairie ne fait pas ce travail.
    中：错误，因为市政府不负责学历认证。
    
    ❌ D. France Travail - Faux, parce que France Travail aide à l'emploi mais ne reconnaît pas les diplômes.
    中：错误，因为它不负责学历认证。`
  },
  {
    id: "tr0035",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le salaire minimum légal en France s'appelle :",
    options: [
      "SMIC",
      "VAE",
      "RSA",
      "CPF"
    ],
    answer: 0,
    explanation: `✅ A. SMIC - Correct, parce que SMIC est le salaire minimum légal en France. Donc c'est son nom officiel.
    中：正确，因为SMIC是法国法定最低工资，所以这是名称。
    
    ❌ B. VAE - Faux, parce que VAE concerne la validation des acquis de l'expérience.
    中：错误，因为VAE是经验认证。
    
    ❌ C. RSA - Faux, parce que RSA est une aide sociale.
    中：错误，因为RSA是补助。
    
    ❌ D. CPF - Faux, parce que CPF est un droit à la formation.
    中：错误，因为CPF是培训权。`
  },
  {
    id: "tr0036",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Tous les salariés ont droit à un bulletin de paie :",
    options: [
      "Vrai",
      "Faux",
      "Seulement si le contrat est écrit",
      "Seulement si le salaire dépasse 2000€"
    ],
    answer: 0,
    explanation: `✅ A. Vrai - Correct, parce que la loi oblige l'employeur à remettre une fiche de paie à chaque salarié. Donc c'est un droit universel.
    中：正确，因为法律要求雇主发工资单，所以所有员工都有权获得。
    
    ❌ B. Faux - Faux, parce que la loi impose le bulletin de paie.
    中：错误，因为法律强制发放。
    
    ❌ C. Seulement si le contrat est écrit - Faux, parce que même sans contrat écrit, la fiche de paie est obligatoire.
    中：错误，因为即使口头合同也必须发工资单。
    
    ❌ D. Seulement si le salaire dépasse 2000€ - Faux, parce que le montant du salaire n'influence pas ce droit.
    中：错误，因为工资多少不影响工资单权利。`
  },
  {
    id: "tr0037",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le congé payé est un droit et une obligation :",
    options: [
      "Vrai",
      "Faux",
      "Seulement pour le CDI",
      "Seulement pour le CDD"
    ],
    answer: 0,
    explanation: `✅ A. Vrai - Correct, parce que l'employeur doit donner des congés payés et le salarié doit les prendre. Donc c'est un droit et une obligation.
    中：正确，因为雇主必须安排带薪假，员工也必须休假，所以既是权利也是义务。
    
    ❌ B. Faux - Faux, parce que c'est bien un droit obligatoire.
    中：错误，因为带薪假是法定权利。
    
    ❌ C. Seulement pour le CDI - Faux, parce que les salariés en CDD ont aussi droit aux congés.
    中：错误，因为CDD也有带薪假。
    
    ❌ D. Seulement pour le CDD - Faux, parce que les CDI aussi.
    中：错误，因为CDI也享有。`
  },
  {
    id: "tr0038",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "France Travail aide :",
    options: [
      "Les demandeurs d'emploi",
      "Les retraités",
      "Les touristes",
      "Les écoles"
    ],
    answer: 0,
    explanation: `✅ A. Les demandeurs d'emploi - Correct, parce que c'est sa mission principale. Donc il accompagne les personnes en recherche d'emploi.
    中：正确，因为这是主要任务，所以帮助求职者。
    
    ❌ B. Les retraités - Faux, parce que les retraités ne sont pas la cible principale.
    中：错误，因为退休人员不是主要对象。
    
    ❌ C. Les touristes - Faux, parce que les touristes ne cherchent pas un emploi en France.
    中：错误，因为游客不属于求职人群。
    
    ❌ D. Les écoles - Faux, parce que France Travail ne gère pas les écoles.
    中：错误，因为不管理学校。`
  },
  {
    id: "tr0039",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Pour s'inscrire à France Travail, il faut remplir :",
    options: [
      "Une déclaration d'impôts",
      "Le questionnaire d'orientation",
      "Un bulletin de salaire",
      "Une carte Vitale"
    ],
    answer: 1,
    explanation: `❌ A. Une déclaration d'impôts - Faux, parce que la déclaration fiscale n'est pas la procédure d'inscription.
    中：错误，因为报税不是注册流程。
    
    ✅ B. Le questionnaire d'orientation - Correct, parce que ce questionnaire permet d'évaluer le profil et orienter vers les services adaptés. Donc c'est une étape nécessaire.
    中：正确，因为问卷用于评估并指导服务，所以是注册步骤。
    
    ❌ C. Un bulletin de salaire - Faux, parce que ce n'est pas obligatoire pour s'inscrire.
    中：错误，因为不需要工资单。
    
    ❌ D. Une carte Vitale - Faux, parce que la carte Vitale concerne la santé, pas l'emploi.
    中：错误，因为它属于医保体系。`
  },
  {
    id: "tr0040",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Les missions locales aident :",
    options: [
      "Les jeunes de 16 à 25 ans",
      "Les retraités",
      "Les enfants de moins de 10 ans",
      "Les entreprises uniquement"
    ],
    answer: 0,
    explanation: `✅ A. Les jeunes de 16 à 25 ans - Correct, parce que les missions locales sont dédiées à l'insertion professionnelle des jeunes. Donc elles accompagnent cette tranche d'âge.
    中：正确，因为使命中心专门帮助16-25岁青年就业，所以服务对象是这个年龄段。
    
    ❌ B. Les retraités - Faux, parce que ils ne font pas partie de la tranche ciblée.
    中：错误，因为退休人员不在目标范围。
    
    ❌ C. Les enfants de moins de 10 ans - Faux, parce que ils ne sont pas en âge de travailler.
    中：错误，因为不在就业年龄。
    
    ❌ D. Les entreprises uniquement - Faux, parce que les entreprises ne sont pas le public principal.
    中：错误，因为主要服务对象是青年求职者。`
  },
  {
    id: "tr0041",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "Le revenu de solidarité active (RSA) concerne :",
    options: [
      "Les salariés uniquement",
      "Les personnes sans emploi et en situation régulière",
      "Les étudiants étrangers uniquement",
      "Les entreprises"
    ],
    answer: 1,
    explanation: `❌ A. Les salariés uniquement - Faux, parce que le RSA est une aide pour les personnes à faibles ressources, souvent sans emploi.
    中：错误，因为RSA主要面向低收入者，通常是失业者。
    
    ✅ B. Les personnes sans emploi et en situation régulière - Correct, parce que le RSA vise à soutenir les personnes en difficulté financière et les aider à retrouver un emploi. Donc il s'adresse aux personnes en situation régulière.
    中：正确，因为RSA支持经济困难者并帮助就业，所以面向合法居留者。
    
    ❌ C. Les étudiants étrangers uniquement - Faux, parce que ce n'est pas limité aux étudiants.
    中：错误，因为不限于留学生。
    
    ❌ D. Les entreprises - Faux, parce que c'est une aide individuelle, pas une aide aux entreprises.
    中：错误，因为RSA不是企业补助。`
  },
  {
    id: "tr0042",
    type: "carte multi",
    category: "Travail",
    difficulté: "moyen",
    typeQuestion: "question simulée",
    question: "La VAE peut être demandée par :",
    options: [
      "Toute personne ayant au moins un an d'expérience liée au diplôme",
      "Les enfants",
      "Les retraités uniquement",
      "Les touristes"
    ],
    answer: 0,
    explanation: `✅ A. Toute personne ayant au moins un an d'expérience liée au diplôme - Correct, parce que la VAE permet de faire reconnaître une expérience professionnelle d'au moins un an. Donc elle est ouverte à toute personne remplissant cette condition.
    中：正确，因为VAE认可至少一年相关经验，所以符合条件者都可申请。
    
    ❌ B. Les enfants - Faux, parce que les enfants n'ont pas l'expérience requise.
    中：错误，因为儿童没有工作经验。
    
    ❌ C. Les retraités uniquement - Faux, parce que ce n'est pas réservé aux retraités.
    中：错误，因为不限于退休人员。
    
    ❌ D. Les touristes - Faux, parce que les touristes n'ont pas une expérience professionnelle en France.
    中：错误，因为游客没有相关工作经验。`
  },
 {
  id: "tr0043",
  type: "carte multi",
  category: "Travail",
  difficulté: "simple",
  typeQuestion: "examen original",
  question: "Le temps de travail maximal légal est :",
  options: [
    "48 heures par semaine",
    "60 heures par semaine",
    "6 heures par jour",
    "30 heures par semaine"
  ],
  answer: 0,
  explanation: "✅ A. 48 heures par semaine - Correct, parce que la limite hebdomadaire est de 48 heures (avec une moyenne de 44 heures sur 12 semaines). Donc cette réponse est la bonne.\n中：正确，因为法律规定每天最多10小时，每周最多48小时（12周平均44小时），所以这是正确答案。\n\n❌ B. 60 heures par semaine - Faux, parce que ces limites dépassent la réglementation française.\n中：错误，因为超出了法国法定最高工作时长。\n\n❌ C. 6 heures par jour - Faux, parce que ce n’est pas une règle générale, seulement une situation particulière (ex : mineurs, certains secteurs).\n中：错误，因为6小时不是一般规定，只是某些特定情况。\n\n❌ D. 30 heures par semaine - Faux, parce que la durée légale est 35 heures par semaine.\n中：错误，因为法定标准是每周35小时。"
}
,
  {
    id: "tr0044",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le travail temporaire (intérim) est :",
    options: [
      "Pour quelques jours ou mois",
      "Pour un CDI",
      "Pour une entreprise personnelle",
      "Pour les vacances"
    ],
    answer: 0,
    explanation: `✅ A. Pour quelques jours ou mois - Correct, parce que l'intérim est un emploi temporaire, souvent pour une mission courte. Donc la durée est limitée.
    中：正确，因为临时工是短期工作，所以几天或几个月。
    
    ❌ B. Pour un CDI - Faux, parce que l'intérim n'est pas un contrat à durée indéterminée.
    中：错误，因为不是CDI。
    
    ❌ C. Pour une entreprise personnelle - Faux, parce que l'intérim se fait via une agence d'intérim.
    中：错误，因为需通过中介公司。
    
    ❌ D. Pour les vacances - Faux, parce que ce n'est pas un emploi de vacances.
    中：错误，因为不是假期工作。`
  },
  {
    id: "tr0045",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le CDD standard peut durer au maximum :",
    options: [
      "6 mois",
      "12 mois",
      "18 mois",
      "24 mois"
    ],
    answer: 2,
    explanation: `❌ A. 6 mois - Faux, parce que la durée maximale dépend du type de CDD et peut être plus longue.
    中：错误，因为最大期限不是固定6个月。
    
    ❌ B. 12 mois - Faux, parce que certains CDD peuvent aller au-delà.
    中：错误，因为不是统一12个月。
    
    ✅ C. 18 mois - Correct, parce que la durée maximale d'un CDD standard est généralement 18 mois (selon le motif). Donc c'est la limite la plus fréquente.
    中：正确，因为一般CDD最长18个月（视情况而定），所以是常见上限。
    
    ❌ D. 24 mois - Faux, parce que 24 mois est possible dans certains cas très spécifiques, mais pas la règle générale.
    中：错误，因为24个月只在特定情况才允许，不是常规上限。`
  },
  {
    id: "tr0046",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le salarié doit respecter :",
    options: [
      "Les règles de l'entreprise et la laïcité",
      "Les règles de l'école",
      "Les lois d'un autre pays",
      "Rien du tout"
    ],
    answer: 0,
    explanation: `✅ A. Les règles de l'entreprise et la laïcité - Correct, parce que le salarié doit respecter le règlement intérieur et les valeurs républicaines (neutralité). Donc il doit respecter ces règles.
    中：正确，因为员工必须遵守公司规定和共和价值（中立原则），所以需要遵守。
    
    ❌ B. Les règles de l'école - Faux, parce que cela concerne l'éducation, pas le travail.
    中：错误，因为学校规则与工作无关。
    
    ❌ C. Les lois d'un autre pays - Faux, parce que en France il faut respecter la loi française.
    中：错误，因为在法国应遵守法国法律。
    
    ❌ D. Rien du tout - Faux, parce que le salarié doit respecter la loi et le règlement intérieur.
    中：错误，因为必须遵守法律和公司规定。`
  },
  {
    id: "tr0047",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le congé payé se calcule :",
    options: [
      "2,5 jours par mois travaillé",
      "1 jour par mois",
      "5 jours par mois",
      "0 jour"
    ],
    answer: 0,
    explanation: `✅ A. 2,5 jours par mois travaillé - Correct, parce que la règle générale est 2,5 jours de congé payé par mois de travail. Donc c'est la base de calcul.
    中：正确，因为一般规则是每月2.5天，所以按此计算。
    
    ❌ B. 1 jour par mois - Faux, parce que c'est inférieur à la règle légale.
    中：错误，因为少于法定标准。
    
    ❌ C. 5 jours par mois - Faux, parce que trop élevé.
    中：错误，因为过高。
    
    ❌ D. 0 jour - Faux, parce que le congé payé est obligatoire.
    中：错误，因为带薪假是法定权利。`
  },
  {
    id: "tr0048",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Les heures supplémentaires :",
    options: [
      "Doivent être payées ou récupérées",
      "Sont interdites",
      "Sont gratuites",
      "Sont optionnelles"
    ],
    answer: 0,
    explanation: `✅ A. Doivent être payées ou récupérées - Correct, parce que la loi impose une compensation (argent ou repos). Donc elles ne peuvent pas rester gratuites.
    中：正确，因为法律要求补偿，所以必须支付或补休。
    
    ❌ B. Sont interdites - Faux, parce que elles sont autorisées mais encadrées.
    中：错误，因为加班允许但受法规限制。
    
    ❌ C. Sont gratuites - Faux, parce que elles doivent être payées ou compensées.
    中：错误，因为必须补偿。
    
    ❌ D. Sont optionnelles - Faux, parce que cela dépend du contrat et de la loi, pas d'un choix libre.
    中：错误，因为要遵守合同与法规。`
  },
  {
    id: "tr0049",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le CPF permet de financer :",
    options: [
      "Des formations professionnelles",
      "Des vacances",
      "Des cadeaux",
      "Une voiture"
    ],
    answer: 0,
    explanation: `✅ A. Des formations professionnelles - Correct, parce que le CPF est un droit à la formation. Donc il finance des formations pour améliorer les compétences.
    中：正确，因为CPF是培训权，所以可资助职业培训。
    
    ❌ B. Des vacances - Faux, parce que ce n'est pas un droit de loisirs.
    中：错误，因为不是用于度假。
    
    ❌ C. Des cadeaux - Faux, parce que ce n'est pas un usage autorisé.
    中：错误，因为不允许用于买礼物。
    
    ❌ D. Une voiture - Faux, parce que le CPF ne finance pas l'achat d'un véhicule.
    中：错误，因为不用于购车。`
  },
  {
    id: "tr0050",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Le salarié a droit à un congé payé même en CDD :",
    options: [
      "Vrai",
      "Faux",
      "Seulement après un an",
      "Seulement en CDI"
    ],
    answer: 0,
    explanation: `✅ A. Vrai - Correct, parce que le droit aux congés payés s'applique à tous les salariés, y compris en CDD. Donc un CDD a aussi des congés.
    中：正确，因为带薪假适用于所有员工，包括CDD，所以CDD也有权利。
    
    ❌ B. Faux - Faux, parce que même en CDD on a droit aux congés.
    中：错误，因为CDD也有带薪假。
    
    ❌ C. Seulement après un an - Faux, parce que le congé se calcule dès le début du contrat.
    中：错误，因为从合同开始就计算。
    
    ❌ D. Seulement en CDI - Faux, parce que CDI 不是唯一享有带薪假的。
    中：错误，因为CDD也有。`
  },
  {
    id: "tr0051",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "France Travail propose :",
    options: [
      "Des offres d'emploi et des conseils pour postuler",
      "Des services médicaux",
      "Des assurances",
      "Des vacances"
    ],
    answer: 0,
    explanation: `✅ A. Des offres d'emploi et des conseils pour postuler - Correct, parce que France Travail aide à trouver un emploi et accompagne les démarches. Donc il propose des offres et des conseils.
    中：正确，因为France Travail帮助求职并提供支持，所以提供职位和建议。
    
    ❌ B. Des services médicaux - Faux, parce que la santé est gérée par d'autres organismes.
    中：错误，因为医疗由其他机构负责。
    
    ❌ C. Des assurances - Faux, parce que ce n'est pas une compagnie d'assurance.
    中：错误，因为不是保险机构。
    
    ❌ D. Des vacances - Faux, parce que ce n'est pas un service de loisirs.
    中：错误，因为不是提供假期。`
  },
  {
    id: "tr0052",
    type: "carte multi",
    category: "Travail",
    difficulté: "simple",
    typeQuestion: "question simulée",
    question: "Un contrat de travail définit :",
    options: [
      "Salaire, tâches, durée et droits du salarié",
      "Les vacances de l'employeur",
      "Le lieu de vacances",
      "Le code postal de l'entreprise"
    ],
    answer: 0,
    explanation: `✅ A. Salaire, tâches, durée et droits du salarié - Correct, parce que le contrat fixe les conditions de travail et les obligations des deux parties. Donc il définit salaire, missions, horaires, etc.
    中：正确，因为合同规定工作条件与义务，所以包含工资、任务、时长和权利。
    
    ❌ B. Les vacances de l'employeur - Faux, parce que le contrat concerne le salarié, pas les vacances du patron.
    中：错误，因为合同不是为雇主安排假期。
    
    ❌ C. Le lieu de vacances - Faux, parce que ce n'est pas un élément du contrat de travail.
    中：错误，因为不涉及度假地点。
    
    ❌ D. Le code postal de l'entreprise - Faux, parce que ce n'est pas un élément essentiel du contrat.
    中：错误，因为邮编不是核心内容。`
  },
    
  {
    id: "ir0001",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"1o"
    question: "Quel numéro d'urgence permet d'appeler le SAMU ?",
    options: [
      "15",
      "17",
      "18",
      "112"
    ],
    answer: 0,
    explanation: `✅ A. 15 - Correct ! Le 15 permet de joindre le SAMU, qui gère les urgences médicales (malaises, accidents, urgences vitales).
    中：正确！15是法国医疗急救（SAMU）的号码，用于突发疾病、严重受伤等紧急医疗情况。
    
    ❌ B. 17 - Faux. Le 17 est réservé à la police et aux situations de sécurité, pas aux urgences médicales.
    中：错误。17是报警电话，不负责医疗急救。
    
    ❌ C. 18 - Faux. Le 18 permet d'appeler les pompiers, principalement pour les incendies et les secours.
    中：错误。18是消防电话，主要用于火灾和救援。
    
    ❌ D. 112 - Faux. Le 112 est un numéro d'urgence européen général, mais ce n'est pas le numéro spécifique du SAMU.
    中：错误。112是欧洲通用紧急号码，但不是专门联系SAMU的号码。`
  },
  {
    id: "ir0002",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"2o"
    question: "Quel numéro d'urgence permet d'appeler les pompiers ?",
    options: [
      "15",
      "18",
      "17",
      "112"
    ],
    answer: 1,
    explanation: `❌ A. 15 - Faux. Le 15 concerne uniquement les urgences médicales.
    中：错误。15只用于医疗急救。
    
    ✅ B. 18 - Correct ! Le 18 permet de joindre directement les pompiers en cas d'incendie, d'accident ou de danger.
    中：正确！18是消防电话，用于火灾、事故或紧急救援。
    
    ❌ C. 17 - Faux. Le 17 est le numéro de la police nationale.
    中：错误。17是警察电话。
    
    ❌ D. 112 - Faux. Le 112 peut être utilisé en urgence, mais le numéro spécifique des pompiers reste le 18.
    中：错误。112虽可应急使用，但消防专用号码是18。`
  },
  {
    id: "ir0003",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"3o"
    question: "Après avoir obtenu le permis de conduire, que faut-il faire pour pouvoir conduire sa voiture ?",
    options: [
      "Payer l'assurance",
      "Faire une carte grise",
      "Passer le contrôle technique si le véhicule y est soumis",
      "Tout ce qui précède"
    ],
    answer: 3,
    explanation: `❌ A. Payer l'assurance - Faux. L'assurance est obligatoire, mais elle ne suffit pas sans les autres démarches administratives.
    中：错误。保险是必须的，但单独购买保险还不能合法上路。
    
    ❌ B. Faire une carte grise - Faux. La carte grise est indispensable, mais elle ne suffit pas à elle seule.
    中：错误。行驶证是必要的，但仅有行驶证不够。
    
    ❌ C. Passer le contrôle technique - Faux. Le contrôle technique est obligatoire selon l'âge du véhicule, mais pas suffisant seul.
    中：错误。技术检测在特定情况下必须，但不是唯一条件。
    
    ✅ D. Tout ce qui précède - Correct ! Pour conduire légalement, le véhicule doit être assuré, immatriculé et conforme aux règles techniques.
    中：正确！合法驾驶必须同时具备保险、行驶证，并符合技术安全要求。`
  },
  {
    id: "ir0004",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"4o"
    question: "Quelles sont les conditions pour qu'un mariage soit légal en France ?",
    options: [
      "Les deux personnes doivent être majeures",
      "Il faut que les parents donnent leur accord pour tous les mariages",
      "Le mariage doit être célébré uniquement à l'église",
      "Il suffit de signer un papier à la mairie sans autre formalité"
    ],
    answer: 0,
    explanation: `✅ A. Les deux personnes doivent être majeures - Correct ! En France, le mariage est autorisé uniquement à partir de 18 ans pour les deux époux.
    中：正确！法国法律规定，结婚双方必须年满18岁。
    
    ❌ B. Il faut que les parents donnent leur accord pour tous les mariages - Faux. L'accord parental n'est pas requis pour les personnes majeures.
    中：错误。成年人结婚不需要父母同意。
    
    ❌ C. Le mariage doit être célébré uniquement à l'église - Faux. Seul le mariage civil célébré à la mairie a une valeur légale.
    中：错误。只有在市政府举行的民事婚姻才具有法律效力。
    
    ❌ D. Il suffit de signer un papier à la mairie sans autre formalité - Faux. Le mariage nécessite un dossier complet et une procédure légale.
    中：错误。结婚需要提交材料并遵守法律程序。`
  },
  {
    id: "ir0005",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"5o"
    question: "Quand faut-il déclarer son enfant au service d'état civil de la mairie ?",
    options: [
      "Dans les 3 jours",
      "Dans le mois",
      "À la fin de l'année",
      "À l'école maternelle"
    ],
    answer: 0,
    explanation: `✅ A. Dans les 3 jours - Correct ! La loi impose de déclarer la naissance dans les 3 jours suivant l'accouchement.
    中：正确！法律规定孩子出生后3天内必须在市政府申报。
    
    ❌ B. Dans le mois - Faux. Ce délai est trop long et non conforme à la loi.
    中：错误。一个月已超过法定期限。
    
    ❌ C. À la fin de l'année - Faux. La déclaration doit être faite immédiatement après la naissance.
    中：错误。不能等到年底。
    
    ❌ D. À l'école maternelle - Faux. La déclaration se fait à la naissance, pas lors de la scolarisation.
    中：错误。申报应在出生时完成，而不是入学时。`
  },
  {
    id: "ir0006",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"6o"
    question: "Qu'est-ce qu'un numéro d'urgence ?",
    options: [
      "Un numéro pour appeler les amis",
      "Un numéro pour contacter les services en cas de danger ou problème grave",
      "Un numéro publicitaire",
      "Un numéro pour les administrations"
    ],
    answer: 1,
    explanation: `❌ A. Un numéro pour appeler les amis - Faux. Un numéro d'urgence est réservé aux situations graves, pas aux appels personnels.
    中：错误。紧急号码只用于严重或危险情况，不能用于私人联系。
    
    ✅ B. Un numéro pour contacter les services en cas de danger ou problème grave - Correct ! Il permet de joindre rapidement les secours pour protéger les personnes et les biens.
    中：正确！紧急号码用于在危险或严重问题时快速联系救援部门。
    
    ❌ C. Un numéro publicitaire - Faux. Les numéros d'urgence ne servent pas à des fins commerciales.
    中：错误。紧急号码不用于商业或广告。
    
    ❌ D. Un numéro pour les administrations - Faux. Les administrations ont des numéros classiques, pas d'urgence.
    中：错误。行政部门有普通电话，不属于紧急号码。`
  },
  {
    id: "ir0007",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"7o"
    question: "Quel mariage est reconnu par l'État ?",
    options: [
      "Mariage civil entre deux majeurs consentants",
      "Mariage religieux uniquement",
      "Mariage avec consentement des parents seulement",
      "Mariage non déclaré à la mairie"
    ],
    answer: 0,
    explanation: `✅ A. Mariage civil entre deux majeurs consentants - Correct ! Seul le mariage civil célébré à la mairie a une valeur juridique en France.
    中：正确！只有在市政府登记的民事婚姻才被国家承认。
    
    ❌ B. Mariage religieux uniquement - Faux. Le mariage religieux n'a pas de valeur légale sans mariage civil.
    中：错误。单独的宗教婚姻不具有法律效力。
    
    ❌ C. Mariage avec consentement des parents seulement - Faux. Le consentement parental ne remplace pas les conditions légales.
    中：错误。父母同意不能代替法律条件。
    
    ❌ D. Mariage non déclaré à la mairie - Faux. Sans déclaration officielle, le mariage n'existe pas légalement.
    中：错误。未在市政府登记的婚姻不受法律保护。`
  },
  {
    id: "ir0008",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"8o"
    question: "Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?",
    options: [
      "Aide juridictionnelle",
      "CAF",
      "Pôle emploi",
      "SMIC"
    ],
    answer: 0,
    explanation: `✅ A. Aide juridictionnelle - Correct ! Elle permet à l'État de prendre en charge tout ou partie des frais de justice.
    中：正确！司法援助可以由国家承担全部或部分律师费用。
    
    ❌ B. CAF - Faux. La CAF verse des aides sociales, pas des frais d'avocat.
    中：错误。CAF提供社会补助，不负责律师费用。
    
    ❌ C. Pôle emploi - Faux. Pôle emploi aide à l'emploi, pas à la justice.
    中：错误。就业中心不提供法律援助。
    
    ❌ D. SMIC - Faux. Le SMIC est un salaire minimum, pas une aide juridique.
    中：错误。SMIC是最低工资标准，不是法律援助。`
  },
  {
    id: "ir0009",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"9o"
    question: "Où faut-il déclarer la naissance d'un enfant ?",
    options: [
      "À l'école",
      "À la mairie",
      "À la préfecture",
      "À l'hôpital uniquement"
    ],
    answer: 1,
    explanation: `❌ A. À l'école - Faux. L'école intervient plus tard pour la scolarité, mais elle ne gère pas l'identité légale d'un enfant.
    中：错误。学校只负责教育，不负责孩子的法律身份登记。
    
    ✅ B. À la mairie - Correct ! La déclaration à la mairie permet à l'enfant d'exister légalement (acte de naissance, nationalité, droits sociaux).
    中：正确！在市政府申报出生，孩子才能拥有出生证明、国籍、医保等法律身份。
    
    ❌ C. À la préfecture - Faux. La préfecture ne s'occupe pas des déclarations de naissance.
    中：错误。省政府不负责出生登记。
    
    ❌ D. À l'hôpital uniquement - Faux. L'hôpital délivre un certificat de naissance, mais la déclaration officielle se fait à la mairie.
    中：错误。医院只出具医学证明，法律登记必须在市政府完成。`
  },
{
  id: "ir0010",
  type: "carte multi",
  category: "S'installer et résider en France",
  difficulté: "simple",
  typeQuestion: "examen original",
  question: "À quel âge peut-on conduire seul après avoir obtenu le permis B ?",
  options: [
    "Avoir 16 ans",
    "Avoir suivi la formation obligatoire et réussir l’examen",
    "Payer une amende",
    "Avoir un véhicule ancien"
  ],
  answer: 1,
  explanation: "✅ B. Avoir suivi la formation obligatoire et réussir l’examen - Correct ! Pour conduire seul en France, il faut avoir suivi toute la formation obligatoire et avoir réussi l'examen du permis B.\n中：正确！在法国，要独自驾驶，必须完成规定培训并通过驾照考试。\n\n❌ A. Avoir 16 ans - Faux. À 17 ans, on peut commencer certaines formations et passer l’examen classique du permis B.\n中：错误。16岁还不能独自驾驶，17岁可以开始学习并参加普通驾照考试。\n\n❌ C. Payer une amende - Faux. Payer une amende n’a aucun rapport avec l’âge légal pour conduire.\n中：错误。支付罚款与法定驾驶年龄无关。\n\n❌ D. Avoir un véhicule ancien - Faux. Le type de véhicule ne change pas l’âge légal.\n中：错误。车辆类型不影响法定驾驶年龄。"
}
,
  {
    id: "ir0011",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"11o"
    question: "Un bail locatif est valide s'il est :",
    options: [
      "Oral uniquement",
      "Écrit et signé par le locataire et le propriétaire",
      "Déposé à la mairie",
      "Approuvé par le voisinage"
    ],
    answer: 1,
    explanation: `❌ A. Oral uniquement - Faux. Un bail oral ne protège pas correctement les droits du locataire et du propriétaire en cas de litige.
    中：错误。口头合同在发生纠纷时很难保护双方权益。
    
    ✅ B. Écrit et signé par le locataire et le propriétaire - Correct ! Le bail écrit précise les droits et obligations de chacun et a une valeur juridique.
    中：正确！书面并签字的合同明确双方责任，具有法律效力。
    
    ❌ C. Déposé à la mairie - Faux. Il n'est pas obligatoire de déposer un bail à la mairie.
    中：错误。租房合同不需要交到市政府。
    
    ❌ D. Approuvé par le voisinage - Faux. Les voisins n'ont aucun rôle juridique.
    中：错误。邻居没有法律决定权。`
  },
  {
    id: "ir0012",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"12o中"
    question: "Où peut-on déposer un lave-vaisselle cassé ?",
    options: [
      "Dans une poubelle normale",
      "Dans un point de collecte ou déchetterie",
      "Chez le voisin",
      "Dans le parc public"
    ],
    answer: 1,
    explanation: `❌ A. Dans une poubelle normale - Faux. Les appareils électroménagers contiennent des composants polluants.
    中：错误。家电含有污染物，不能当普通垃圾处理。
    
    ✅ B. Dans un point de collecte ou déchetterie - Correct ! Ces lieux permettent le recyclage et évitent la pollution de l'environnement.
    中：正确！回收站可以进行环保处理，防止污染。
    
    ❌ C. Chez le voisin - Faux.
    中：错误。
    
    ❌ D. Dans le parc public - Faux. Déposer des déchets dans l'espace public est une infraction.
    中：错误。在公共场所丢弃垃圾是违法行为。`
  },
  {
    id: "ir0013",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "examen original", // 有"13o"
    question: "Quel numéro d'urgence permet d'appeler la police ?",
    options: [
      "15",
      "17",
      "18",
      "112"
    ],
    answer: 1,
    explanation: `❌ A. 15 - Faux. Le 15 concerne les urgences médicales.
    中：错误。15是医疗急救电话。
    
    ✅ B. 17 - Correct ! Le 17 permet de contacter la police en cas de danger, de vol ou d'agression.
    中：正确！17用于报警，如盗窃、暴力、威胁等情况。
    
    ❌ C. 18 - Faux. Le 18 est réservé aux pompiers.
    中：错误。18是消防电话。
    
    ❌ D. 112 - Faux. Le 112 est général, mais le numéro direct de la police est le 17.
    中：错误。112是通用号码，警方专用是17。`
  },
  {
    id: "ir0014",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"14中"
    question: "Qu'est-ce que la domiciliation ?",
    options: [
      "Un logement temporaire",
      "Une adresse administrative",
      "Un type d'assurance",
      "Une banque"
    ],
    answer: 1,
    explanation: `❌ A. Un logement temporaire - Faux, parce que la domiciliation ne donne pas un lieu pour habiter. Donc elle ne permet pas de dormir ou de se loger.
    中：错误，因为行政挂靠不是住房，所以不能住人。
    
    ✅ B. Une adresse administrative - Correct, parce que la domiciliation sert à avoir une adresse officielle. Donc elle permet de recevoir le courrier de l'État et d'avoir des droits (CAF, impôts, sécurité sociale).
    中：正确，因为行政挂靠提供一个官方地址，所以可以收政府信件、办补助、医保、税务等。
    
    ❌ C. Un type d'assurance - Faux, parce que une assurance protège contre des risques. Donc elle n'a aucun lien avec une adresse.
    中：错误，因为保险是风险保障，所以和地址无关。
    
    ❌ D. Une banque - Faux, parce que une banque gère de l'argent. Donc elle ne fournit pas d'adresse administrative.
    中：错误，因为银行管钱，所以不提供行政地址。`
  },
  {
    id: "ir0015",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "examen original", // 有"15中"
    question: "Qui peut bénéficier de la domiciliation ?",
    options: [
      "Les étudiants seulement",
      "Les personnes sans domicile fixe ou en habitat précaire",
      "Tous les Français",
      "Les retraités uniquement"
    ],
    answer: 1,
    explanation: `❌ A. Les étudiants seulement - Faux, parce que les étudiants ont généralement une adresse (logement, résidence). Donc la domiciliation ne leur est pas réservée.
    中：错误，因为学生通常有住址，所以不是只给学生用的。
    
    ✅ B. Les personnes sans domicile fixe ou en habitat précaire - Correct, parce que sans adresse, on ne peut pas faire de démarches administratives. Donc la domiciliation permet à ces personnes d'exercer leurs droits.
    中：正确，因为没有地址就无法办手续，所以无固定住所或居住不稳定的人可以申请行政挂靠。
    
    ❌ C. Tous les Français - Faux, parce que toute personne n'a pas besoin d'une domiciliation. Donc elle est réservée aux personnes sans adresse stable.
    中：错误，因为不是每个人都缺地址，所以不是所有法国人都适用。
    
    ❌ D. Les retraités uniquement - Faux, parce que la retraite n'a aucun lien avec l'absence d'adresse.
    中：错误，因为退休与是否有住址没有关系。`
  },
  {
    id: "ir0016",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quel document est nécessaire pour ouvrir un compte bancaire ?",
    options: [
      "Une facture de téléphone",
      "Une pièce d'identité officielle",
      "Un certificat médical",
      "Un contrat de travail"
    ],
    answer: 1,
    explanation: `❌ A. Une facture de téléphone - Faux, parce que une facture prouve seulement une adresse. Donc elle ne permet pas de vérifier l'identité.
    中：错误，因为账单只能证明住址，所以不能证明身份。
    
    ✅ B. Une pièce d'identité officielle - Correct, parce que la loi oblige la banque à vérifier l'identité du client. Donc c'est un document indispensable.
    中：正确，因为法律要求银行核实身份，所以身份证件是必须的。
    
    ❌ C. Un certificat médical - Faux, parce que l'état de santé n'a aucun lien avec l'ouverture d'un compte.
    中：错误，因为健康状况与银行账户无关。
    
    ❌ D. Un contrat de travail - Faux, parce que on peut ouvrir un compte même sans emploi.
    中：错误，因为没有工作也可以开户。`
  },
  {
    id: "ir0017",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"
    question: "Qui peut refuser d'ouvrir un compte bancaire ?",
    options: [
      "La banque, sans justification",
      "La mairie",
      "L'assurance",
      "La préfecture"
    ],
    answer: 0,
    explanation: `✅ A. La banque, sans justification - Correct, parce que une banque est une entreprise privée. Donc elle peut refuser, mais doit informer du droit au compte.
    中：正确，因为银行是私营机构，所以可以拒绝，但必须告知"开户权"。
    
    ❌ B. La mairie - Faux, parce que la mairie ne gère pas les banques.
    中：错误，因为市政府不管银行业务。
    
    ❌ C. L'assurance - Faux, parce que une assurance ne peut pas ouvrir ou refuser un compte bancaire.
    中：错误，因为保险公司没有这个权力。
    
    ❌ D. La préfecture - Faux, parce que la préfecture ne décide pas des relations bancaires.
    中：错误，因为省政府不决定银行开户。`
  },
  {
    id: "ir0018",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quel service assure le droit au compte en France ?",
    options: [
      "Banque de France",
      "Service-public.fr",
      "Pôle Emploi",
      "La CAF"
    ],
    answer: 0,
    explanation: `✅ A. Banque de France - Correct, parce que la Banque de France oblige une banque à ouvrir un compte quand toutes ont refusé.
    中：正确，因为法国央行可以指定一家银行必须给你开户。
    
    ❌ B. Service-public.fr - Faux, parce que ce site donne des informations mais ne prend pas de décisions.
    中：错误，因为它只提供信息，不作决定。
    
    ❌ C. Pôle Emploi - Faux, parce que Pôle Emploi s'occupe de l'emploi, pas des banques.
    中：错误，因为就业中心不负责银行账户。
    
    ❌ D. La CAF - Faux, parce que la CAF verse des aides mais ne garantit pas l'ouverture d'un compte.
    中：错误，因为CAF只发补助，不管开户。`
  },
{
  id: "ir0019",
  type: "carte multi",
  category: "S'installer et résider en France",
  difficulté: "simple",
  typeQuestion: "question simulée",
  question: "À quel âge peut-on passer l’examen du permis B pour conduire seul ?",
  options: [
    "16 ans",
    "17 ans",
    "18 ans",
    "20 ans"
  ],
  answer: 1,
  explanation: "✅ B. 17 ans - Correct ! On peut passer l’examen du permis B à 17 ans. Après obtention, la conduite est possible en respectant les règles (conduite accompagnée ou sous certaines conditions).\n中：正确。17岁可以参加B类驾照考试，拿到驾照后在符合法规的条件下可以驾驶（如陪同驾驶等）。\n\n❌ A. 16 ans - Faux, parce qu'à 16 ans on peut seulement commencer certaines formations (conduite accompagnée), donc on ne peut pas passer l’examen classique.\n中：错误。16岁只能开始学习或陪同驾驶，不能正式考驾照。\n\n❌ C. 18 ans - Faux. À 18 ans, on peut conduire seul sans restriction, mais l’examen peut déjà être passé à 17 ans.\n中：错误。18岁可以独立驾驶，但考试可以在17岁就参加。\n\n❌ D. 20 ans - Faux, parce que la loi n’impose pas d’attendre 20 ans.\n中：错误。法律没有规定必须等到20岁。"
}
,
  {
    id: "ir0020",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"
    question: "Combien d'heures minimum de conduite pratique sont requises pour le permis B en auto-école (formation classique) ?",
    options: [
      "10 heures",
      "15 heures",
      "20 heures",
      "25 heures"
    ],
    answer: 2,
    explanation: `❌ A. 10 heures - Faux, parce que ce nombre est insuffisant pour apprendre à conduire en sécurité.
    中：错误，因为10小时不足以掌握安全驾驶。
    
    ❌ B. 15 heures - Faux, parce que la loi fixe un minimum plus élevé.
    中：错误，因为法律要求的最低小时数更高。
    
    ✅ C. 20 heures - Correct, parce que la réglementation impose au minimum 20 heures afin d'assurer une formation sérieuse.
    中：正确，因为法律规定至少20小时，所以这是最低学习保障。
    
    ❌ D. 25 heures - Faux, parce que ce n'est pas le minimum légal, même si certaines personnes en font plus.
    中：错误，因为25小时不是法定最低要求。`
  },
  {
    id: "ir0021",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"
    question: "L'assurance responsabilité civile couvre :",
    options: [
      "Les dommages causés à soi-même",
      "Les dommages causés aux autres",
      "Les impôts",
      "Les frais de scolarité"
    ],
    answer: 1,
    explanation: `❌ A. Les dommages causés à soi-même - Faux, parce que la responsabilité civile sert à réparer les dommages causés à autrui. Donc elle ne protège pas le responsable lui-même.
    中：错误，因为责任险是赔偿他人损失的，所以不赔自己。
    
    ✅ B. Les dommages causés aux autres - Correct, parce que cette assurance protège les victimes quand on cause un dommage involontaire.
    中：正确，因为责任险的目的就是赔偿你对他人造成的损害。
    
    ❌ C. Les impôts - Faux, parce que les impôts ne sont pas des dommages.
    中：错误，因为税款不属于损害赔偿。
    
    ❌ D. Les frais de scolarité - Faux, parce que ils n'ont aucun lien avec la responsabilité civile.
    中：错误，因为学费与责任险无关。`
  },
  {
    id: "ir0022",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"
    question: "Que se passe-t-il si un permis étranger n'est pas échangeable après 1 an en France ?",
    options: [
      "On peut conduire sans permis",
      "Il faut passer le permis français",
      "Il faut partir du pays",
      "Il faut payer une amende uniquement"
    ],
    answer: 1,
    explanation: `❌ A. On peut conduire sans permis - Faux, parce que conduire sans permis est un délit puni par la loi.
    中：错误，因为无证驾驶是违法行为。
    
    ✅ B. Il faut passer le permis français - Correct, parce que après un an, le permis étranger n'est plus valable s'il n'est pas échangeable. Donc il faut repasser l'examen français.
    中：正确，因为超过一年后外国驾照失效，所以必须考法国驾照。
    
    ❌ C. Il faut partir du pays - Faux, parce que le problème concerne la conduite, pas le droit de séjour.
    中：错误，因为这是驾照问题，不是居留问题。
    
    ❌ D. Il faut payer une amende uniquement - Faux, parce que payer une amende ne remplace pas un permis valide.
    中：错误，因为交罚款不能代替合法驾照。`
  },
  {
    id: "ir0023",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Qui doit déclarer ses revenus en France ?",
    options: [
      "Tout résident de plus de 18 ans",
      "Seulement les travailleurs",
      "Seulement les Français",
      "Seulement les propriétaires"
    ],
    answer: 0,
    explanation: `✅ A. Tout résident de plus de 18 ans - Correct, parce que toute personne majeure résidant en France est soumise aux obligations fiscales.
    中：正确，因为在法国居住的成年人都有报税义务。
    
    ❌ B. Seulement les travailleurs - Faux, parce que même sans emploi, une déclaration peut être obligatoire.
    中：错误，因为没有工作也可能需要申报收入。
    
    ❌ C. Seulement les Français - Faux, parce que les étrangers résidents sont aussi imposables en France.
    中：错误，因为外国居民同样需要报税。
    
    ❌ D. Seulement les propriétaires - Faux, parce que l'impôt sur le revenu ne dépend pas du fait d'être propriétaire.
    中：错误，因为是否有房产与报税无关。`
  },
  {
    id: "ir0024",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quand doit-on déclarer ses revenus pour l'année précédente ?",
    options: [
      "Janvier",
      "Avril-Mai",
      "Juillet",
      "Décembre"
    ],
    answer: 1,
    explanation: `❌ A. Janvier - Faux, parce que l'administration fiscale n'ouvre pas la déclaration à cette période.
    中：错误，因为1月不是官方报税时间。
    
    ✅ B. Avril-Mai - Correct, parce que c'est la période officielle fixée chaque année par l'État.
    中：正确，因为法国政府每年规定4-5月报税。
    
    ❌ C. Juillet - Faux, parce que la période est déjà terminée.
    中：错误，因为已经超过截止时间。
    
    ❌ D. Décembre - Faux, parce que la déclaration se fait bien avant la fin de l'année.
    中：错误，因为报税不在年底进行。`
  },
  {
    id: "ir0025",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quel type de titre de séjour est obligatoire pour les étrangers ?",
    options: [
      "Aucun",
      "Titre de séjour valide correspondant à la situation",
      "Passeport seulement",
      "Carte d'identité française"
    ],
    answer: 1,
    explanation: `❌ A. Aucun - Faux, parce que vivre en France sans titre valide est illégal.
    中：错误，因为没有合法居留证属于违法居留。
    
    ✅ B. Titre de séjour valide correspondant à la situation - Correct, parce que le titre doit correspondre au motif du séjour (travail, études, famille).
    中：正确，因为居留证必须与居留目的一致。
    
    ❌ C. Passeport seulement - Faux, parce que le passeport ne suffit pas pour résider durablement en France.
    中：错误，因为护照不能代替居留证。
    
    ❌ D. Carte d'identité française - Faux, parce que elle est réservée aux citoyens français.
    中：错误，因为法国身份证只给法国公民。`
  },
  {
    id: "ir0026",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quand demander le renouvellement d'un titre de séjour ?",
    options: [
      "Au moins 6 mois avant expiration",
      "3 mois avant la fin de validité",
      "1 mois avant",
      "Après expiration"
    ],
    answer: 1,
    explanation: `❌ A. Au moins 6 mois avant expiration - Faux, parce que les démarches sont généralement ouvertes plus tard.
    中：错误，因为通常不需要提前这么久。
    
    ✅ B. 3 mois avant la fin de validité - Correct, parce que cela permet d'éviter une situation irrégulière et les retards administratifs.
    中：正确，因为提前3个月可以避免居留中断。
    
    ❌ C. 1 mois avant - Faux, parce que les délais administratifs sont souvent trop longs.
    中：错误，因为一个月往往来不及处理。
    
    ❌ D. Après expiration - Faux, parce que le titre doit toujours être renouvelé avant sa fin de validité.
    中：错误，因为过期后再办会变成非法居留。`
  },
  {
    id: "ir0027",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quels documents sont nécessaires pour déclarer une naissance ?",
    options: [
      "Certificat médical, pièce d'identité des parents",
      "Contrat de travail",
      "Bail",
      "Permis de conduire"
    ],
    answer: 0,
    explanation: `✅ A. Certificat médical, pièce d'identité des parents - Correct, parce que le certificat médical confirme la naissance et les pièces d'identité permettent d'identifier les parents. Donc ces documents sont indispensables pour la déclaration.
    中：正确，因为医疗证明确认出生事实，身份证明父母身份，所以申报必须提供这些材料。
    
    ❌ B. Contrat de travail - Faux, parce que le travail des parents n'a aucun lien avec la naissance.
    中：错误，因为工作合同与出生登记无关。
    
    ❌ C. Bail - Faux, parce que le logement n'est pas exigé pour déclarer une naissance.
    中：错误，因为住址证明不是必须材料。
    
    ❌ D. Permis de conduire - Faux, parce que le permis n'est pas nécessaire pour déclarer une naissance.
    中：错误，因为驾照不是出生登记材料。`
  },
  {
    id: "ir0028",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quelle est l'âge minimum pour se marier sans autorisation ?",
    options: [
      "16 ans",
      "18 ans",
      "21 ans",
      "25 ans"
    ],
    answer: 1,
    explanation: `❌ A. 16 ans - Faux, parce que le mariage à 16 ans nécessite une autorisation judiciaire.
    中：错误，因为16岁结婚需要法院许可。
    
    ✅ B. 18 ans - Correct, parce que la loi française fixe la majorité matrimoniale à 18 ans. Donc à partir de 18 ans, aucun accord parental n'est nécessaire.
    中：正确，因为法国法律规定18岁为结婚法定年龄，所以18岁后无需父母同意。
    
    ❌ C. 21 ans - Faux, parce que la loi ne demande pas d'attendre 21 ans.
    中：错误，因为法律没有要求必须等到21岁。
    
    ❌ D. 25 ans - Faux, parce que 25 ans est trop élevé par rapport à la loi.
    中：错误，因为法律规定的最低年龄比25岁低。`
  },
  {
    id: "ir0029",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Où déclarer un décès ?",
    options: [
      "Préfecture",
      "Mairie",
      "Banque",
      "Assurance"
    ],
    answer: 1,
    explanation: `❌ A. Préfecture - Faux, parce que la préfecture ne gère pas les actes d'état civil.
    中：错误，因为省政府不负责死亡登记。
    
    ✅ B. Mairie - Correct, parce que la mairie enregistre les actes d'état civil, y compris les décès. Donc c'est le lieu officiel de déclaration.
    中：正确，因为市政府负责民事登记，所以死亡必须在市政府申报。
    
    ❌ C. Banque - Faux, parce que une banque ne peut pas enregistrer un décès.
    中：错误，因为银行不负责死亡登记。
    
    ❌ D. Assurance - Faux, parce que une assurance peut être informée mais ne fait pas la déclaration officielle.
    中：错误，因为保险公司不能替代官方登记。`
  },
  {
    id: "ir0030",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Qui peut déclarer un décès à la mairie ?",
    options: [
      "Tout parent ou personne majeure connaissant l'état civil du défunt",
      "Seulement le maire",
      "La police uniquement",
      "L'assurance"
    ],
    answer: 0,
    explanation: `✅ A. Tout parent ou personne majeure connaissant l'état civil du défunt - Correct, parce que la loi permet à un proche ou une personne informée d'effectuer la déclaration. Donc il n'est pas nécessaire d'attendre une autorité.
    中：正确，因为法律允许亲属或了解情况的成年人申报，所以不必等待官方人员。
    
    ❌ B. Seulement le maire - Faux, parce que le maire n'est pas obligé de faire la déclaration lui-même.
    中：错误，因为市长不必亲自申报。
    
    ❌ C. La police uniquement - Faux, parce que la police peut intervenir, mais elle n'est pas la seule autorisée.
    中：错误，因为警察不是唯一有权申报的人。
    
    ❌ D. L'assurance - Faux, parce que l'assurance ne fait pas l'acte officiel d'état civil.
    中：错误，因为保险公司不能登记死亡。`
  },
  {
    id: "ir0031",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quel est l'objectif de l'impôt sur le revenu ?",
    options: [
      "Réduire les inégalités et financer les services publics",
      "Payer le loyer",
      "Ouvrir un compte bancaire",
      "Renouveler le permis"
    ],
    answer: 0,
    explanation: `✅ A. Réduire les inégalités et financer les services publics - Correct, parce que l'impôt sert à redistribuer les ressources et à financer l'éducation, la santé, la sécurité, etc. Donc c'est un outil de solidarité nationale.
    中：正确，因为税收用于公共服务和社会再分配，所以它是国家团结与公平的重要工具。
    
    ❌ B. Payer le loyer - Faux, parce que le loyer est une dépense privée, pas un impôt.
    中：错误，因为房租是个人支出，不是税。
    
    ❌ C. Ouvrir un compte bancaire - Faux, parce que ouvrir un compte n'a rien à voir avec l'impôt.
    中：错误，因为开户与税收无关。
    
    ❌ D. Renouveler le permis - Faux, parce que le permis est un document administratif, pas une fonction de l'impôt.
    中：错误，因为驾照更新不是税收目的。`
  },
  {
    id: "ir0032",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quelle assurance est obligatoire pour les locataires ?",
    options: [
      "Assurance automobile",
      "Assurance habitation couvrant les risques locatifs",
      "Assurance santé",
      "Assurance scolaire"
    ],
    answer: 1,
    explanation: `❌ A. Assurance automobile - Faux, parce que l'assurance auto couvre un véhicule, pas un logement.
    中：错误，因为车险覆盖车辆，不覆盖住房。
    
    ✅ B. Assurance habitation couvrant les risques locatifs - Correct, parce que le locataire doit couvrir les dommages qu'il peut causer au logement (incendie, dégâts des eaux). Donc cette assurance est obligatoire.
    中：正确，因为租客要对房屋损坏负责，所以必须买房屋保险。
    
    ❌ C. Assurance santé - Faux, parce que santé et logement sont deux domaines différents.
    中：错误，因为健康保险与租房无关。
    
    ❌ D. Assurance scolaire - Faux, parce que elle concerne l'école, pas le logement.
    中：错误，因为学平险与房屋无关。`
  },
  {
    id: "ir0033",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quelle est la durée minimale du préavis pour un logement non meublé hors zone tendue?",
    options: [
      "1 mois",
      "3 mois",
      "6 mois",
      "12 mois"
    ],
    answer: 1,
    explanation: `❌ A. 1 mois - Faux, parce que la loi prévoit un préavis plus long pour un logement non meublé (sauf cas particuliers).
    中：错误，因为法律对非家具房要求的提前通知更长。
    
    ✅ B. 3 mois - Correct, parce que le préavis standard pour un logement vide est de 3 mois. Donc le locataire doit prévenir 3 mois à l'avance.
    中：正确，因为空房租约的标准提前通知是3个月，所以需要提前3个月告知。
    
    ❌ C. 6 mois - Faux, parce que 6 mois est trop long par rapport à la règle générale.
    中：错误，因为一般规定不是6个月。
    
    ❌ D. 12 mois - Faux, parce que cela dépasse largement la durée légale minimale.
    中：错误，因为远超法定最低期限。`
  },
  {
    id: "ir0034",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quel numéro d'urgence appeler en cas d'incendie ?",
    options: [
      "15",
      "17",
      "18",
      "112"
    ],
    answer: 2,
    explanation: `❌ A. 15 - Faux, parce que le 15 est pour les urgences médicales. Donc il ne sert pas aux incendies.
    中：错误，因为15是医疗急救，不用于火灾。
    
    ❌ B. 17 - Faux, parce que le 17 est pour la police, pas pour les incendies.
    中：错误，因为17是警察电话，不处理火灾。
    
    ✅ C. 18 - Correct, parce que le 18 permet d'appeler les pompiers, spécialisés pour les incendies et les secours. Donc c'est le bon numéro.
    中：正确，因为18是消防电话，所以火灾时应拨打。
    
    ❌ D. 112 - Faux, parce que le 112 est général, mais le numéro spécifique pour incendie est le 18.
    中：错误，因为112虽可用，但火灾专用仍是18。`
  },
  {
    id: "ir0035",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quel numéro d'urgence européen est valable pour tout type d'urgence ?",
    options: [
      "15",
      "17",
      "112",
      "114"
    ],
    answer: 2,
    explanation: `❌ A. 15 - Faux, parce que 15 est spécifique aux urgences médicales.
    中：错误，因为15只针对医疗急救。
    
    ❌ B. 17 - Faux, parce que 17 est spécifique à la police.
    中：错误，因为17只针对警务。
    
    ✅ C. 112 - Correct, parce que le 112 est le numéro d'urgence européen valable partout en Europe pour toutes les urgences. Donc il fonctionne pour police, pompiers ou SAMU.
    中：正确，因为112是欧洲通用紧急号码，所以在欧洲任何紧急情况都可拨打。
    
    ❌ D. 114 - Faux, parce que le 114 est un numéro pour les personnes sourdes ou malentendantes, mais pas le numéro général.
    中：错误，因为114主要为听障人士提供文字/visio服务，不是通用紧急号码。`
  },
  {
    id: "ir0036",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Pour obtenir la nationalité française par décret, combien d'années de résidence sont nécessaires ?",
    options: [
      "3 ans",
      "5 ans",
      "7 ans",
      "10 ans"
    ],
    answer: 1,
    explanation: `❌ A. 3 ans - Faux, parce que 3 ans est trop court pour la naturalisation par décret.
    中：错误，因为3年不符合一般居住要求。
    
    ✅ B. 5 ans - Correct, parce que la naturalisation par décret nécessite généralement 5 ans de résidence continue en France. Donc c'est le délai standard.
    中：正确，因为通常需要连续居住5年才能申请归化。
    
    ❌ C. 7 ans - Faux, parce que 7 ans est plus long que le délai habituel.
    中：错误，因为法定标准不是7年。
    
    ❌ D. 10 ans - Faux, parce que 10 ans dépasse largement la durée exigée.
    中：错误，因为远超过标准居住时间。`
  },
  {
    id: "ir0037",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"
    question: "Qui valide la compréhension des principes de la République pour la naturalisation ?",
    options: [
      "La mairie",
      "La préfecture lors de l'entretien d'assimilation",
      "La police",
      "La Banque de France"
    ],
    answer: 1,
    explanation: `❌ A. La mairie - Faux, parce que la mairie ne gère pas les entretiens de naturalisation.
    中：错误，因为市政府不负责归化面试。
    
    ✅ B. La préfecture lors de l'entretien d'assimilation - Correct, parce que c'est la préfecture qui organise l'entretien et vérifie la compréhension des valeurs républicaines. Donc elle valide ce point.
    中：正确，因为省政府负责组织面试并核查对共和价值的理解，所以由省政府确认。
    
    ❌ C. La police - Faux, parce que la police n'est pas chargée des procédures de naturalisation.
    中：错误，因为警察不负责归化手续。
    
    ❌ D. La Banque de France - Faux, parce que la Banque de France n'a aucun rôle dans la naturalisation.
    中：错误，因为央行与归化无关。`
  },
  {
    id: "ir0038",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quel document justifie le domicile pour ouvrir un compte ?",
    options: [
      "Attestation d'assurance",
      "Facture d'eau ou électricité de moins de 3 mois",
      "Carte d'identité",
      "Contrat de travail"
    ],
    answer: 1,
    explanation: `❌ A. Attestation d'assurance - Faux, parce que une attestation d'assurance ne prouve pas forcément l'adresse.
    中：错误，因为保险证明不一定能证明住址。
    
    ✅ B. Facture d'eau ou électricité de moins de 3 mois - Correct, parce que ces factures montrent une adresse récente et officielle. Donc elles servent de justificatif de domicile.
    中：正确，因为水电账单是官方且近期的地址证明，所以可用于开户。
    
    ❌ C. Carte d'identité - Faux, parce que la carte d'identité prouve l'identité mais pas l'adresse.
    中：错误，因为身份证只证明身份，不证明住址。
    
    ❌ D. Contrat de travail - Faux, parce que le contrat de travail ne prouve pas l'adresse de résidence.
    中：错误，因为工作合同不等于住址证明。`
  },
  {
    id: "ir0039",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Qu'est-ce qu'un bail ?",
    options: [
      "Une assurance",
      "Un contrat de location",
      "Une déclaration d'impôt",
      "Une autorisation de conduire"
    ],
    answer: 1,
    explanation: `❌ A. Une assurance - Faux, parce que une assurance est un contrat de protection. Donc un bail n'est pas une assurance.
    中：错误，因为保险是保障合同，所以租约不是保险。
    
    ✅ B. Un contrat de location - Correct, parce que un bail est le contrat signé entre le locataire et le propriétaire. Donc il définit les droits et obligations de chacun.
    中：正确，因为租约是租赁合同，所以明确房东与租客的权利义务。
    
    ❌ C. Une déclaration d'impôt - Faux, parce que l'impôt concerne les revenus, pas la location.
    中：错误，因为税务申报与租约无关。
    
    ❌ D. Une autorisation de conduire - Faux, parce que le permis de conduire est un document différent.
    中：错误，因为驾照与租赁合同无关。`
  },
  {
    id: "ir0040",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Qui peut célébrer un mariage civil ?",
    options: [
      "La mairie",
      "L'église",
      "La préfecture",
      "Le consulat"
    ],
    answer: 0,
    explanation: `✅ A. La mairie - Correct, parce que le mariage civil doit être célébré par un officier d'état civil de la mairie. Donc la mairie est le lieu officiel.
    中：正确，因为民事婚姻必须由市政府民事官员主持，所以市政府是唯一合法地点。
    
    ❌ B. L'église - Faux, parce que le mariage religieux n'a pas de valeur légale sans mariage civil.
    中：错误，因为宗教婚礼没有法律效力。
    
    ❌ C. La préfecture - Faux, parce que la préfecture ne célèbre pas les mariages.
    中：错误，因为省政府不负责主持婚礼。
    
    ❌ D. Le consulat - Faux, parce que le consulat peut aider, mais le mariage civil doit être célébré selon les règles locales.
    中：错误，因为领事馆不能替代市政府进行民事婚姻。`
  },
  {
    id: "ir0041",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quels documents sont nécessaires pour un mariage civil ?",
    options: [
      "Actes de naissance, pièces d'identité, justificatif de domicile",
      "Bail et compte bancaire",
      "Permis de conduire et assurance",
      "Déclaration de revenus"
    ],
    answer: 0,
    explanation: `✅ A. Actes de naissance, pièces d'identité, justificatif de domicile - Correct, parce que ces documents permettent de vérifier l'identité, l'âge, la nationalité et l'adresse des futurs époux. Donc ils sont obligatoires.
    中：正确，因为这些材料能核实身份、年龄、国籍和住址，所以必须提供。
    
    ❌ B. Bail et compte bancaire - Faux, parce que un compte bancaire n'est pas exigé pour se marier.
    中：错误，因为结婚不要求有银行账户。
    
    ❌ C. Permis de conduire et assurance - Faux, parce que ils ne servent pas à prouver l'identité ou la situation civile.
    中：错误，因为驾照和保险不能证明婚姻资格。
    
    ❌ D. Déclaration de revenus - Faux, parce que la déclaration de revenus n'est pas un document obligatoire pour un mariage.
    中：错误，因为报税单不是结婚必备材料。`
  },
  {
    id: "ir0042",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Qu'est-ce qui est obligatoire pour conduire légalement en France ?",
    options: [
      "Carte grise et assurance",
      "Bail et assurance habitation",
      "Justificatif de domicile uniquement",
      "Déclaration de naissance"
    ],
    answer: 0,
    explanation: `✅ A. Carte grise et assurance - Correct, parce que la carte grise prouve l'immatriculation du véhicule et l'assurance couvre les dommages causés aux tiers. Donc ces deux documents sont indispensables.
    中：正确，因为行驶证证明车辆登记，保险赔偿第三方损失，所以两者都必须。
    
    ❌ B. Bail et assurance habitation - Faux, parce que ces documents concernent le logement, pas la conduite.
    中：错误，因为它们是住房相关，不是驾驶必需。
    
    ❌ C. Justificatif de domicile uniquement - Faux, parce que le domicile ne suffit pas pour prouver que le véhicule est assuré et immatriculé.
    中：错误，因为住址证明不能代替行驶证和保险。
    
    ❌ D. Déclaration de naissance - Faux, parce que elle n'a aucun lien avec la conduite.
    中：错误，因为出生证明与驾驶无关。`
  },
  {
    id: "ir0043",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Qui peut faire une domiciliation administrative en France ?",
    options: [
      "Une personne sans domicile fixe",
      "Un conducteur de taxi uniquement",
      "Un touriste en séjour de moins d'une semaine",
      "Un étudiant étranger seulement"
    ],
    answer: 0,
    explanation: `✅ A. Une personne sans domicile fixe - Correct, parce que la domiciliation est précisément prévue pour les personnes sans adresse stable. Donc elles peuvent obtenir une adresse administrative.
    中：正确，因为行政挂靠就是为无固定住址者设立，所以他们可以申请。
    
    ❌ B. Un conducteur de taxi uniquement - Faux, parce que la domiciliation n'est pas liée à une profession.
    中：错误，因为职业与挂靠无关。
    
    ❌ C. Un touriste en séjour de moins d'une semaine - Faux, parce que un touriste a une adresse temporaire et ne remplit pas les conditions.
    中：错误，因为游客只是短期停留，不需要行政挂靠。
    
    ❌ D. Un étudiant étranger seulement - Faux, parce que la domiciliation ne se limite pas aux étudiants étrangers.
    中：错误，因为不限于某一类人群。`
  },
  {
    id: "ir0044",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Le permis de conduire en France comprend :",
    options: [
      "Une épreuve théorique et une épreuve pratique",
      "Un examen médical seulement",
      "Un cours de sécurité routière en ligne uniquement",
      "Un paiement de taxe locale"
    ],
    answer: 0,
    explanation: `✅ A. Une épreuve théorique et une épreuve pratique - Correct, parce que il faut d'abord réussir le code (théorie) puis la conduite (pratique). Donc les deux étapes sont obligatoires.
    中：正确，因为先考理论再考实际驾驶，所以两部分都必须通过。
    
    ❌ B. Un examen médical seulement - Faux, parce que un examen médical ne remplace pas l'examen du code et de la conduite.
    中：错误，因为体检不能代替考试。
    
    ❌ C. Un cours de sécurité routière en ligne uniquement - Faux, parce que un simple cours en ligne ne suffit pas pour obtenir le permis.
    中：错误，因为线上课程不能替代考试。
    
    ❌ D. Un paiement de taxe locale - Faux, parce que payer une taxe ne donne pas automatiquement le permis.
    中：错误，因为缴费不等于获得驾照。`
  },
  {
    id: "ir0045",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "L'assurance responsabilité civile est obligatoire pour :",
    options: [
      "Tout résident français qui peut causer des dommages involontaires",
      "Les personnes qui voyagent à l'étranger seulement",
      "Les étudiants inscrits à l'université uniquement",
      "Les employés d'une entreprise publique uniquement"
    ],
    answer: 0,
    explanation: `✅ A. Tout résident français qui peut causer des dommages involontaires - Correct, parce que la responsabilité civile protège les victimes quand quelqu'un cause un dommage sans le vouloir. Donc elle est obligatoire pour tous ceux qui peuvent être responsables.
    中：正确，因为责任险用于赔偿你无意造成的损害，所以凡可能造成损害的人都必须购买。
    
    ❌ B. Les personnes qui voyagent à l'étranger seulement - Faux, parce que la responsabilité civile est obligatoire même en France.
    中：错误，因为即使在法国也必须购买。
    
    ❌ C. Les étudiants inscrits à l'université uniquement - Faux, parce que ce n'est pas une obligation réservée aux étudiants.
    中：错误，因为不是只有学生需要。
    
    ❌ D. Les employés d'une entreprise publique uniquement - Faux, parce que cela concerne toute la population, pas seulement certains employés.
    中：错误，因为适用于所有人。`
  },
  {
    id: "ir0046",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "simple",
    typeQuestion: "question simulée", // 没有"o"
    question: "Pour louer un logement, le locataire doit :",
    options: [
      "Payer le loyer et souscrire une assurance habitation",
      "Faire un test de conduite",
      "Déclarer ses revenus à la mairie uniquement",
      "Avoir une domiciliation administrative obligatoire"
    ],
    answer: 0,
    explanation: `✅ A. Payer le loyer et souscrire une assurance habitation - Correct, parce que le loyer rémunère le propriétaire et l'assurance protège le logement. Donc ces deux obligations sont essentielles.
    中：正确，因为租金是对房东的支付，保险保障房屋风险，所以租客必须做到这两点。
    
    ❌ B. Faire un test de conduite - Faux, parce que conduire n'a aucun lien avec la location d'un logement.
    中：错误，因为开车考试与租房无关。
    
    ❌ C. Déclarer ses revenus à la mairie uniquement - Faux, parce que la déclaration de revenus ne suffit pas pour louer.
    中：错误，因为报税不是租房必要条件。
    
    ❌ D. Avoir une domiciliation administrative obligatoire - Faux, parce que la domiciliation n'est pas obligatoire pour louer un logement.
    中：错误，因为租房不要求必须行政挂靠。`
  },
  {
    id: "ir0047",
    type: "carte multi",
    category: "S'installer et résider en France",
    difficulté: "moyen",
    typeQuestion: "question simulée", // 没有"o"
    question: "Quel est l'objectif principal de la déclaration de mariage civil ?",
    options: [
      "Obtenir la reconnaissance officielle de l'État",
      "Recevoir automatiquement un logement social",
      "Obtenir un passeport pour voyager",
      "Déclarer ses revenus"
    ],
    answer: 0,
    explanation: `✅ A. Obtenir la reconnaissance officielle de l'État - Correct, parce que seul le mariage civil donne un statut légal au couple. Donc la déclaration permet d'être reconnu par l'État.
    中：正确，因为只有民事婚姻具有法律效力，所以申报是为了获得国家承认。
    
    ❌ B. Recevoir automatiquement un logement social - Faux, parce que le mariage ne garantit pas un logement social.
    中：错误，因为结婚并不会自动获得社会住房。
    
    ❌ C. Obtenir un passeport pour voyager - Faux, parce que le passeport dépend de la nationalité, pas du mariage.
    中：错误，因为护照与婚姻无关。
    
    ❌ D. Déclarer ses revenus - Faux, parce que la déclaration de revenus est une démarche différente.
    中：错误，因为报税不是结婚的目的。`
  }
];






