// 周易六十四卦完整数据
const hexagrams = [
    {
        num: 1,
        name: '乾卦',
        symbol: '☰☰',
        pinyin: 'Qián',
        meaning: '刚健、创造、进取',
        text: '元亨利贞。',
        core: '天的力量，自强不息',
        wuxing: { upper: '金', lower: '金' },
        yaoci: [
            '初九：潜龙勿用。',
            '九二：见龙在田，利见大人。',
            '九三：君子终日乾乾，夕惕若厉，无咎。',
            '九四：或跃在渊，无咎。',
            '九五：飞龙在天，利见大人。',
            '上九：亢龙有悔。'
        ],
        yong: '用九：见群龙无首，吉。',
        xiang: '天行健，君子以自强不息。'
    },
    {
        num: 2,
        name: '坤卦',
        symbol: '☷☷',
        pinyin: 'Kūn',
        meaning: '柔顺、包容、承载',
        text: '元亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞吉。',
        core: '大地的德行，厚德载物',
        wuxing: { upper: '土', lower: '土' },
        yaoci: [
            '初六：履霜，坚冰至。',
            '六二：直方大，不习无不利。',
            '六三：含章可贞，或从王事，无成有终。',
            '六四：括囊，无咎无誉。',
            '六五：黄裳元吉。',
            '上六：龙战于野，其血玄黄。'
        ],
        yong: '用六：利永贞。',
        xiang: '地势坤，君子以厚德载物。'
    },
    {
        num: 3,
        name: '屯卦',
        symbol: '☵☳',
        pinyin: 'Zhūn',
        meaning: '初生、艰难起步',
        text: '元亨利贞。勿用有攸往，利建侯。',
        core: '万物始生，充满挑战但前途光明',
        wuxing: { upper: '水', lower: '木' },
        yaoci: [
            '初九：磐桓，利居贞，利建侯。',
            '六二：屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。',
            '六三：即鹿无虞，惟入于林中，君子几不如舍，往吝。',
            '六四：乘马班如，求婚媾，往吉，无不利。',
            '九五：屯其膏，小贞吉，大贞凶。',
            '上六：乘马班如，泣血涟如。'
        ],
        yong: '',
        xiang: '云雷，屯；君子以经纶。'
    },
    {
        num: 4,
        name: '蒙卦',
        symbol: '☵☶',
        pinyin: 'Méng',
        meaning: '启蒙、教育、开智',
        text: '亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。',
        core: '学习的态度和方法',
        wuxing: { upper: '土', lower: '水' },
        yaoci: [
            '初六：发蒙，利用刑人，用说桎梏，以往吝。',
            '九二：包蒙吉，纳妇吉，子克家。',
            '六三：勿用取女，见金夫，不有躬，无攸利。',
            '六四：困蒙，吝。',
            '六五：童蒙，吉。',
            '上九：击蒙，不利为寇，利御寇。'
        ],
        yong: '',
        xiang: '山下出泉，蒙；君子以果行育德。'
    },
    {
        num: 5,
        name: '需卦',
        symbol: '☵☰',
        pinyin: 'Xū',
        meaning: '等待、耐心、需求',
        text: '有孚，光亨，贞吉。利涉大川。',
        core: '时机的把握和耐心的修养',
        wuxing: { upper: '水', lower: '金' },
        yaoci: [
            '初九：需于郊，利用恒，无咎。',
            '九二：需于沙，小有言，终吉。',
            '九三：需于泥，致寇至。',
            '六四：需于血，出自穴。',
            '九五：需于酒食，贞吉。',
            '上六：入于穴，有不速之客三人来，敬之终吉。'
        ],
        yong: '',
        xiang: '云上于天，需；君子以饮食宴乐。'
    },
    {
        num: 6,
        name: '讼卦',
        symbol: '☵☰',
        pinyin: 'Sòng',
        meaning: '争议、诉讼、冲突',
        text: '有孚窒惕，中吉，终凶。利见大人，不利涉大川。',
        core: '以和为贵，避免无谓争执',
        wuxing: { upper: '金', lower: '水' },
        yaoci: [
            '初六：不永所事，小有言，终吉。',
            '九二：不克讼，归而逋，其邑人三百户，无眚。',
            '六三：食旧德，贞厉，终吉，或从王事，无成。',
            '九四：不克讼，复即命渝，安贞吉。',
            '九五：讼元吉。',
            '上九：或锡之鞶带，终朝三褫之。'
        ],
        yong: '',
        xiang: '天与水违行，讼；君子以作事谋始。'
    },
    {
        num: 7,
        name: '师卦',
        symbol: '☵☷',
        pinyin: 'Shī',
        meaning: '军队、组织、领导力',
        text: '贞丈人吉，无咎。',
        core: '纪律和正确的领导',
        wuxing: { upper: '水', lower: '土' },
        yaoci: [
            '初六：师出以律，否臧凶。',
            '九二：在师中，吉无咎，王三锡命。',
            '六三：师或舆尸，凶。',
            '六四：师左次，无咎。',
            '六五：田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。',
            '上六：大君有命，开国承家，小人勿用。'
        ],
        yong: '',
        xiang: '地中有水，师；君子以容民畜众。'
    },
    {
        num: 8,
        name: '比卦',
        symbol: '☷☵',
        pinyin: 'Bǐ',
        meaning: '亲附、团结、互助',
        text: '吉。原筮元永贞，无咎。不宁方来，后夫凶。',
        core: '建立和谐的人际关系',
        wuxing: { upper: '土', lower: '水' },
        yaoci: [
            '初六：有孚比之，无咎。有孚盈缶，终来有他，吉。',
            '六二：比之自内，贞吉。',
            '六三：比之匪人。',
            '六四：外比之，贞吉。',
            '九五：显比，王用三驱，失前禽，邑人不诫，吉。',
            '上六：比之无首，凶。'
        ],
        yong: '',
        xiang: '地上有水，比；先王以建万国，亲诸侯。'
    },
    {
        num: 9,
        name: '小畜卦',
        symbol: '☰☴',
        pinyin: 'Xiǎo Chù',
        meaning: '小有积蓄、渐进',
        text: '亨。密云不雨，自我西郊。',
        core: '力量尚未充足，需要积累',
        wuxing: { upper: '木', lower: '金' },
        yaoci: [
            '初九：复自道，何其咎，吉。',
            '九二：牵复，吉。',
            '九三：舆说辐，夫妻反目。',
            '六四：有孚，血去惕出，无咎。',
            '九五：有孚挛如，富以其邻。',
            '上九：既雨既处，尚德载，妇贞厉。月几望，君子征凶。'
        ],
        yong: '',
        xiang: '风行天上，小畜；君子以懿文德。'
    },
    {
        num: 10,
        name: '履卦',
        symbol: '☰☱',
        pinyin: 'Lǚ',
        meaning: '实践、履行、谨慎',
        text: '履虎尾，不咥人，亨。',
        core: '如履薄冰，强调小心行事',
        wuxing: { upper: '金', lower: '金' },
        yaoci: [
            '初九：素履往，无咎。',
            '九二：履道坦坦，幽人贞吉。',
            '六三：眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。',
            '九四：履虎尾，愬愬终吉。',
            '九五：夬履，贞厉。',
            '上九：视履考祥，其旋元吉。'
        ],
        yong: '',
        xiang: '上天下泽，履；君子以辩上下，定民志。'
    },
    {
        num: 11,
        name: '泰卦',
        symbol: '☷☰',
        pinyin: 'Tài',
        meaning: '通达、安泰、阴阳交融',
        text: '小往大来，吉亨。',
        core: '天地交而万物通',
        wuxing: { upper: '金', lower: '土' },
        yaoci: [
            '初九：拔茅茹，以其汇，征吉。',
            '九二：包荒，用冯河，不遐遗，朋亡，得尚于中行。',
            '九三：无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福。',
            '六四：翩翩不富，以其邻，不戒以孚。',
            '六五：帝乙归妹，以祉元吉。',
            '上六：城复于隍，勿用师。自邑告命，贞吝。'
        ],
        yong: '',
        xiang: '天地交，泰；后以财成天地之道，辅相天地之宜，以左右民。'
    },
    {
        num: 12,
        name: '否卦',
        symbol: '☰☷',
        pinyin: 'Pǐ',
        meaning: '闭塞、困难、阴阳不交',
        text: '否之匪人，不利君子贞，大往小来。',
        core: '时运不济，宜静不宜动',
        wuxing: { upper: '土', lower: '金' },
        yaoci: [
            '初六：拔茅茹，以其汇，贞吉，亨。',
            '六二：包承，小人吉，大人否亨。',
            '六三：包羞。',
            '九四：有命无咎，畴离祉。',
            '九五：休否，大人吉。其亡其亡，系于苞桑。',
            '上九：倾否，先否后喜。'
        ],
        yong: '',
        xiang: '天地不交，否；君子以俭德辟难，不可荣以禄。'
    },
    {
        num: 13,
        name: '同人卦',
        symbol: '☲☰',
        pinyin: 'Tóng Rén',
        meaning: '团结、合作、共识',
        text: '同人于野，亨。利涉大川，利君子贞。',
        core: '与人和同，广结善缘',
        wuxing: { upper: '火', lower: '金' },
        yaoci: [
            '初九：同人于门，无咎。',
            '六二：同人于宗，吝。',
            '九三：伏戎于莽，升其高陵，三岁不兴。',
            '九四：乘其墉，弗克攻，吉。',
            '九五：同人先号啕而后笑，大师克相遇。',
            '上九：同人于郊，无悔。'
        ],
        yong: '',
        xiang: '天与火，同人；君子以类族辨物。'
    },
    {
        num: 14,
        name: '大有卦',
        symbol: '☲☷',
        pinyin: 'Dà Yōu',
        meaning: '丰盛、富有、成功',
        text: '元亨。',
        core: '大有收获，但需谦虚谨慎',
        wuxing: { upper: '火', lower: '土' },
        yaoci: [
            '初九：无交害，匪咎，艰则无咎。',
            '九二：大车以载，有攸往，无咎。',
            '九三：公用亨于天子，小人弗克。',
            '九四：匪其彭，无咎。',
            '六五：厥孚交如，威如，吉。',
            '上九：自天佑之，吉无不利。'
        ],
        yong: '',
        xiang: '火在天上，大有；君子以遏恶扬善，顺天休命。'
    },
    {
        num: 15,
        name: '谦卦',
        symbol: '☵☶',
        pinyin: 'Qiān',
        meaning: '谦虚、谦逊、美德',
        text: '亨，君子有终。',
        core: '满招损，谦受益',
        wuxing: { upper: '土', lower: '水' },
        yaoci: [
            '初六：谦谦君子，用涉大川，吉。',
            '六二：鸣谦，贞吉。',
            '九三：劳谦，君子有终，吉。',
            '六四：无不利，撝谦。',
            '六五：不富以其邻，利用侵伐，无不利。',
            '上六：鸣谦，利用行师，征邑国。'
        ],
        yong: '',
        xiang: '地中有山，谦；君子以裒多益寡，称物平施。'
    },
    {
        num: 16,
        name: '豫卦',
        symbol: '☳☷',
        pinyin: 'Yù',
        meaning: '愉悦、安逸、准备',
        text: '利建侯行师。',
        core: '安乐中需保持警惕',
        wuxing: { upper: '木', lower: '土' },
        yaoci: [
            '初六：鸣豫，凶。',
            '六二：介于石，不终日，贞吉。',
            '六三：盱豫悔，迟有悔。',
            '九四：由豫，大有得，勿疑，朋盍簪。',
            '六五：贞疾，恒不死。',
            '上六：冥豫成，有渝无咎。'
        ],
        yong: '',
        xiang: '雷出地奋，豫；先王以作乐崇德，殷荐之上帝，以配祖考。'
    },
    {
        num: 17,
        name: '随卦',
        symbol: '☳☴',
        pinyin: 'Suí',
        meaning: '随顺、跟随、变通',
        text: '元亨利贞，无咎。',
        core: '随宜从俗，顺势而为',
        wuxing: { upper: '木', lower: '木' },
        yaoci: [
            '初九：官有渝，贞吉。出门交有功。',
            '六二：系小子，失丈夫。',
            '六三：系丈夫，失小子。随有求得，利居贞。',
            '九四：随有获，贞凶。有孚在道，以明，何咎。',
            '九五：孚于嘉，吉。',
            '上六：拘系之，乃从维之，王用亨于西山。'
        ],
        yong: '',
        xiang: '泽中有雷，随；君子以向晦入宴息。'
    },
    {
        num: 18,
        name: '蛊卦',
        symbol: '☴☶',
        pinyin: 'Gǔ',
        meaning: '腐败、革新、整治',
        text: '元亨，利涉大川。先甲三日，后甲三日。',
        core: '弊乱之后，需要整顿革新',
        wuxing: { upper: '木', lower: '土' },
        yaoci: [
            '初六：干父之蛊，有子，考无咎，厉终吉。',
            '九二：干母之蛊，不可贞。',
            '九三：干父之蛊，小有悔，无大咎。',
            '六四：裕父之蛊，往见吝。',
            '六五：干父之蛊，用誉。',
            '上九：不事王侯，高尚其事。'
        ],
        yong: '',
        xiang: '山下有风，蛊；君子以振民育德。'
    },
    {
        num: 19,
        name: '临卦',
        symbol: '☷☱',
        pinyin: 'Lín',
        meaning: '临近、监督、亲临',
        text: '元亨利贞。至于八月有凶。',
        core: '以上临下，需真诚待人',
        wuxing: { upper: '土', lower: '金' },
        yaoci: [
            '初九：咸临，贞吉。',
            '九二：咸临，吉无不利。',
            '六三：甘临，无攸利。既忧之，无咎。',
            '六四：至临，无咎。',
            '六五：知临，大君之宜，吉。',
            '上六：敦临，吉，无咎。'
        ],
        yong: '',
        xiang: '泽上有地，临；君子以教思无穷，容保民无疆。'
    },
    {
        num: 20,
        name: '观卦',
        symbol: '☴☷',
        pinyin: 'Guān',
        meaning: '观察、审视、学习',
        text: '盥而不荐，有孚颙若。',
        core: '通过观察了解事物真相',
        wuxing: { upper: '木', lower: '土' },
        yaoci: [
            '初六：童观，小人无咎，君子吝。',
            '六二：窥观，利女贞。',
            '六三：观我生，进退。',
            '六四：观国之光，利用宾于王。',
            '九五：观我生，君子无咎。',
            '上九：观其生，君子无咎。'
        ],
        yong: '',
        xiang: '风行地上，观；先王以省方观民设教。'
    },
    {
        num: 21,
        name: '噬嗑卦',
        symbol: '☲☶',
        pinyin: 'Shì Hé',
        meaning: '咬合、刑罚、排除障碍',
        text: '亨。利用狱。',
        core: '刚柔相济，清除阻碍',
        wuxing: { upper: '火', lower: '土' },
        yaoci: [
            '初九：屦校灭趾，无咎。',
            '六二：噬肤灭鼻，无咎。',
            '六三：噬腊肉，遇毒，小吝，无咎。',
            '九四：噬乾胏，得金矢，利艰贞，吉。',
            '六五：噬乾肉，得黄金，贞厉，无咎。',
            '上九：何校灭耳，凶。'
        ],
        yong: '',
        xiang: '雷电，噬嗑；先王以明罚敕法。'
    },
    {
        num: 22,
        name: '贲卦',
        symbol: '☶☲',
        pinyin: 'Bì',
        meaning: '装饰、文饰、美化',
        text: '亨。小利有攸往。',
        core: '文质彬彬，然后君子',
        wuxing: { upper: '土', lower: '火' },
        yaoci: [
            '初九：贲其趾，舍车而徒。',
            '六二：贲其须。',
            '九三：贲如濡如，永贞吉。',
            '六四：贲如皤如，白马翰如，匪寇婚媾。',
            '六五：贲于丘园，束帛戋戋，吝，终吉。',
            '上九：白贲，无咎。'
        ],
        yong: '',
        xiang: '山下有火，贲；君子以明庶政，无敢折狱。'
    },
    {
        num: 23,
        name: '剥卦',
        symbol: '☶☷',
        pinyin: 'Bō',
        meaning: '剥落、衰败、阴盛阳衰',
        text: '不利有攸往。',
        core: '宜静守，不宜进取',
        wuxing: { upper: '土', lower: '土' },
        yaoci: [
            '初六：剥床以足，蔑贞凶。',
            '六二：剥床以辨，蔑贞凶。',
            '六三：剥之，无咎。',
            '六四：剥床以肤，凶。',
            '六五：贯鱼，以宫人宠，无不利。',
            '上九：硕果不食，君子得舆，小人剥庐。'
        ],
        yong: '',
        xiang: '山附于地，剥；上以厚下安宅。'
    },
    {
        num: 24,
        name: '复卦',
        symbol: '☳☷',
        pinyin: 'Fù',
        meaning: '回复、复兴、循环',
        text: '亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。',
        core: '阳气复生，前途光明',
        wuxing: { upper: '木', lower: '土' },
        yaoci: [
            '初九：不远复，无祗悔，元吉。',
            '六二：休复，吉。',
            '六三：频复，厉无咎。',
            '六四：中行独复。',
            '六五：敦复，无悔。',
            '上六：迷复，凶，有灾眚。用行师，终有大败，以其国君凶，至于十年不克征。'
        ],
        yong: '',
        xiang: '雷在地中，复；先王以至日闭关，商旅不行，后不省方。'
    },
    {
        num: 25,
        name: '无妄卦',
        symbol: '☰☳',
        pinyin: 'Wú Wàng',
        meaning: '无妄、真实、不虚妄',
        text: '元亨利贞。其匪正有眚，不利有攸往。',
        core: '脚踏实地，不存妄念',
        wuxing: { upper: '金', lower: '木' },
        yaoci: [
            '初九：无妄往，吉。',
            '六二：不耕获，不菑畲，则利有攸往。',
            '六三：无妄之灾，或系之牛，行人之得，邑人之灾。',
            '九四：可贞，无咎。',
            '九五：无妄之疾，勿药有喜。',
            '上九：无妄行，有眚，无攸利。'
        ],
        yong: '',
        xiang: '天下雷行，物与无妄；先王以茂对时，育万物。'
    },
    {
        num: 26,
        name: '大畜卦',
        symbol: '☰☶',
        pinyin: 'Dà Chù',
        meaning: '大有积蓄、准备充分',
        text: '利贞，不家食吉，利涉大川。',
        core: '厚积薄发，待时而动',
        wuxing: { upper: '金', lower: '土' },
        yaoci: [
            '初九：有厉，利已。',
            '九二：舆说輹。',
            '九三：良马逐，利艰贞。曰闲舆卫，利有攸往。',
            '六四：童牛之牿，元吉。',
            '六五：豮豕之牙，吉。',
            '上九：何天之衢，亨。'
        ],
        yong: '',
        xiang: '天在山中，大畜；君子以多识前言往行，以畜其德。'
    },
    {
        num: 27,
        name: '颐卦',
        symbol: '☶☳',
        pinyin: 'Yí',
        meaning: '颐养、养生、自给自足',
        text: '贞吉。观颐，自求口实。',
        core: '自食其力，正当谋生',
        wuxing: { upper: '土', lower: '木' },
        yaoci: [
            '初九：舍尔灵龟，观我朵颐，凶。',
            '六二：颠颐，拂经于丘颐，征凶。',
            '六三：拂颐，贞凶，十年勿用，无攸利。',
            '六四：颠颐，吉。虎视眈眈，其欲逐逐，无咎。',
            '六五：拂经，居贞吉，不可涉大川。',
            '上九：由颐，厉吉，利涉大川。'
        ],
        yong: '',
        xiang: '山下有雷，颐；君子以慎言语，节饮食。'
    },
    {
        num: 28,
        name: '大过卦',
        symbol: '☴☱',
        pinyin: 'Dà Guò',
        meaning: '过度、非常、创新',
        text: '栋桡，利有攸往，亨。',
        core: '非常时期行非常之事',
        wuxing: { upper: '木', lower: '金' },
        yaoci: [
            '初六：藉用白茅，无咎。',
            '九二：枯杨生稊，老夫得其女妻，无不利。',
            '九三：栋桡，凶。',
            '九四：栋隆，吉，有它吝。',
            '九五：枯杨生华，老妇得其士夫，无咎无誉。',
            '上六：过涉灭顶，凶，无咎。'
        ],
        yong: '',
        xiang: '泽灭木，大过；君子以独立不惧，遁世无闷。'
    },
    {
        num: 29,
        name: '坎卦',
        symbol: '☵☵',
        pinyin: 'Kǎn',
        meaning: '险陷、困难、水流',
        text: '习坎，有孚，维心亨，行有尚。',
        core: '面对险境，保持诚信和坚定',
        wuxing: { upper: '水', lower: '水' },
        yaoci: [
            '初六：习坎，入于坎窞，凶。',
            '九二：坎有险，求小得。',
            '六三：来之坎坎，险且枕，入于坎窞，勿用。',
            '六四：樽酒簋贰，用缶，纳约自牖，终无咎。',
            '九五：坎不盈，祇既平，无咎。',
            '上六：系用徽纆，置于丛棘，三岁不得，凶。'
        ],
        yong: '',
        xiang: '水洊至，习坎；君子以常德行，习教事。'
    },
    {
        num: 30,
        name: '离卦',
        symbol: '☲☲',
        pinyin: 'Lí',
        meaning: '依附、光明、文明',
        text: '利贞，亨。畜牝牛，吉。',
        core: '如火焰般光明，但需有所依附',
        wuxing: { upper: '火', lower: '火' },
        yaoci: [
            '初九：履错然，敬之无咎。',
            '六二：黄离，元吉。',
            '九三：日昃之离，不鼓缶而歌，则大耋之嗟，凶。',
            '九四：突如其来如，焚如，死如，弃如。',
            '六五：出涕沱若，戚嗟若，吉。',
            '上九：王用出征，有嘉折首，获匪其丑，无咎。'
        ],
        yong: '',
        xiang: '明两作，离；大人以继明照于四方。'
    },
    {
        num: 31,
        name: '咸卦',
        symbol: '☶☱',
        pinyin: 'Xián',
        meaning: '感应、交流、情感',
        text: '亨，利贞。取女吉。',
        core: '阴阳感应，万物相通',
        wuxing: { upper: '土', lower: '金' },
        yaoci: [
            '初六：咸其拇。',
            '六二：咸其腓，凶，居吉。',
            '九三：咸其股，执其随，往吝。',
            '九四：贞吉，悔亡，憧憧往来，朋从尔思。',
            '九五：咸其脢，无悔。',
            '上六：咸其辅颊舌。'
        ],
        yong: '',
        xiang: '山上有泽，咸；君子以虚受人。'
    },
    {
        num: 32,
        name: '恒卦',
        symbol: '☳☴',
        pinyin: 'Héng',
        meaning: '恒久、坚持、稳定',
        text: '亨，无咎，利贞。利有攸往。',
        core: '持之以恒，方能有成',
        wuxing: { upper: '木', lower: '木' },
        yaoci: [
            '初六：浚恒，贞凶，无攸利。',
            '九二：悔亡。',
            '九三：不恒其德，或承之羞，贞吝。',
            '九四：田无禽。',
            '六五：恒其德，贞，妇人吉，夫子凶。',
            '上六：振恒，凶。'
        ],
        yong: '',
        xiang: '雷风，恒；君子以立不易方。'
    },
    {
        num: 33,
        name: '遁卦',
        symbol: '☶☰',
        pinyin: 'Dùn',
        meaning: '退避、隐退、保全',
        text: '亨，小利贞。',
        core: '时运不济时，宜退不宜进',
        wuxing: { upper: '土', lower: '金' },
        yaoci: [
            '初六：遁尾，厉，勿用有攸往。',
            '六二：执之用黄牛之革，莫之胜说。',
            '九三：系遁，有疾厉，畜臣妾吉。',
            '九四：好遁，君子吉，小人否。',
            '九五：嘉遁，贞吉。',
            '上九：肥遁，无不利。'
        ],
        yong: '',
        xiang: '天下有山，遁；君子以远小人，不恶而严。'
    },
    {
        num: 34,
        name: '大壮卦',
        symbol: '☰☳',
        pinyin: 'Dà Zhuàng',
        meaning: '强盛、壮大、阳盛',
        text: '利贞。',
        core: '强盛时更需谨慎，防止过刚易折',
        wuxing: { upper: '金', lower: '木' },
        yaoci: [
            '初九：壮于趾，征凶，有孚。',
            '九二：贞吉。',
            '九三：小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。',
            '九四：贞吉，悔亡。藩决不羸，壮于大舆之輹。',
            '六五：丧羊于易，无悔。',
            '上六：羝羊触藩，不能退，不能遂，无攸利，艰则吉。'
        ],
        yong: '',
        xiang: '雷在天上，大壮；君子以非礼弗履。'
    },
    {
        num: 35,
        name: '晋卦',
        symbol: '☲☷',
        pinyin: 'Jìn',
        meaning: '进取、晋升、光明',
        text: '康侯用锡马蕃庶，昼日三接。',
        core: '如日升起，前途光明',
        wuxing: { upper: '火', lower: '土' },
        yaoci: [
            '初六：晋如摧如，贞吉。罔孚，裕无咎。',
            '六二：晋如愁如，贞吉。受兹介福，于其王母。',
            '六三：众允，悔亡。',
            '九四：晋如鼫鼠，贞厉。',
            '六五：悔亡，失得勿恤，往吉，无不利。',
            '上九：晋其角，维用伐邑，厉吉，无咎，贞吝。'
        ],
        yong: '',
        xiang: '明出地上，晋；君子以自昭明德。'
    },
    {
        num: 36,
        name: '明夷卦',
        symbol: '☷☲',
        pinyin: 'Míng Yí',
        meaning: '光明受损、困境、隐忍',
        text: '利艰贞。',
        core: '明入地中，宜韬光养晦',
        wuxing: { upper: '土', lower: '火' },
        yaoci: [
            '初九：明夷于飞，垂其翼。君子于行，三日不食，有攸往，主人有言。',
            '六二：明夷，夷于左股，用拯马壮，吉。',
            '九三：明夷于南狩，得其大首，不可疾贞。',
            '六四：入于左腹，获明夷之心，于出门庭。',
            '六五：箕子之明夷，利贞。',
            '上六：不明晦，初登于天，后入于地。'
        ],
        yong: '',
        xiang: '明入地中，明夷；君子以莅众，用晦而明。'
    },
    {
        num: 37,
        name: '家人卦',
        symbol: '☲☴',
        pinyin: 'Jiā Rén',
        meaning: '家庭、内部、治理',
        text: '利女贞。',
        core: '家和万事兴，正家而天下定',
        wuxing: { upper: '火', lower: '木' },
        yaoci: [
            '初九：闲有家，悔亡。',
            '六二：无攸遂，在中馈，贞吉。',
            '九三：家人嗃嗃，悔厉吉；妇子嘻嘻，终吝。',
            '六四：富家，大吉。',
            '九五：王假有家，勿恤，吉。',
            '上九：有孚威如，终吉。'
        ],
        yong: '',
        xiang: '风自火出，家人；君子以言有物而行有恒。'
    },
    {
        num: 38,
        name: '睽卦',
        symbol: '☱☲',
        pinyin: 'Kuí',
        meaning: '乖离、差异、矛盾',
        text: '小事吉。',
        core: '异中有同，需在差异中求统一',
        wuxing: { upper: '金', lower: '火' },
        yaoci: [
            '初九：悔亡，丧马勿逐，自复；见恶人，无咎。',
            '九二：遇主于巷，无咎。',
            '六三：见舆曳，其牛掣，其人天且劓，无初有终。',
            '九四：睽孤，遇元夫，交孚，厉无咎。',
            '六五：悔亡，厥宗噬肤，往何咎。',
            '上九：睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉。'
        ],
        yong: '',
        xiang: '上火下泽，睽；君子以同而异。'
    },
    {
        num: 39,
        name: '蹇卦',
        symbol: '☵☶',
        pinyin: 'Jiǎn',
        meaning: '艰难、阻碍、困境',
        text: '利西南，不利东北。利见大人，贞吉。',
        core: '面对困难，宜向有利方向求进',
        wuxing: { upper: '水', lower: '土' },
        yaoci: [
            '初六：往蹇来誉。',
            '六二：王臣蹇蹇，匪躬之故。',
            '九三：往蹇来反。',
            '六四：往蹇来连。',
            '九五：大蹇朋来。',
            '上六：往蹇来硕，吉；利见大人。'
        ],
        yong: '',
        xiang: '山上有水，蹇；君子以反身修德。'
    },
    {
        num: 40,
        name: '解卦',
        symbol: '☳☵',
        pinyin: 'Jiě',
        meaning: '解脱、缓解、解决',
        text: '利西南。无所往，其来复吉。有攸往，夙吉。',
        core: '困难之后，宜宽松从容',
        wuxing: { upper: '木', lower: '水' },
        yaoci: [
            '初六：无咎。',
            '九二：田获三狐，得黄矢，贞吉。',
            '六三：负且乘，致寇至，贞吝。',
            '九四：解而拇，朋至斯孚。',
            '六五：君子维有解，吉；有孚于小人。',
            '上六：公用射隼于高墉之上，获之，无不利。'
        ],
        yong: '',
        xiang: '雷雨作，解；君子以赦过宥罪。'
    },
    {
        num: 41,
        name: '损卦',
        symbol: '☶☱',
        pinyin: 'Sǔn',
        meaning: '减损、节制',
        text: '有孚，元吉，无咎，可贞，利有攸往。曷之用？二簋可用享。',
        core: '损有余补不足，损益相宜',
        wuxing: { upper: '土', lower: '金' },
        yaoci: [
            '初九：已事遄往，无咎，酌损之。',
            '九二：利贞，征凶，弗损，益之。',
            '六三：三人行，则损一人；一人行，则得其友。',
            '六四：损其疾，使遄有喜，无咎。',
            '六五：或益之十朋之龟，弗克违，元吉。',
            '上九：弗损，益之，无咎，贞吉，利有攸往，得臣无家。'
        ],
        yong: '',
        xiang: '山下有泽，损；君子以惩忿窒欲。'
    },
    {
        num: 42,
        name: '益卦',
        symbol: '☴☳',
        pinyin: 'Yì',
        meaning: '增益、受益、助益',
        text: '利有攸往，利涉大川。',
        core: '损上益下，民悦无疆',
        wuxing: { upper: '木', lower: '木' },
        yaoci: [
            '初九：利用为大作，元吉，无咎。',
            '六二：或益之十朋之龟，弗克违，永贞吉。王用享于帝，吉。',
            '六三：益之用凶事，无咎。有孚中行，告公用圭。',
            '六四：中行告公从，利用为依迁国。',
            '九五：有孚惠心，勿问元吉。有孚惠我德。',
            '上九：莫益之，或击之，立心勿恒，凶。'
        ],
        yong: '',
        xiang: '风雷，益；君子以见善则迁，有过则改。'
    },
    {
        num: 43,
        name: '夬卦',
        symbol: '☱☰',
        pinyin: 'Guài',
        meaning: '决断、果断、清除',
        text: '扬于王庭，孚号有厉。告自邑，不利即戎，利有攸往。',
        core: '毅然决然，但需谨慎行事',
        wuxing: { upper: '金', lower: '金' },
        yaoci: [
            '初九：壮于前趾，往不胜，为咎。',
            '九二：惕号，莫夜有戎，勿恤。',
            '九三：壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎。',
            '九四：臀无肤，其行次且。牵羊悔亡，闻言不信。',
            '九五：苋陆夬夬，中行无咎。',
            '上六：无号，终有凶。'
        ],
        yong: '',
        xiang: '泽上于天，夬；君子以施禄及下，居德则忌。'
    },
    {
        num: 44,
        name: '姤卦',
        symbol: '☴☰',
        pinyin: 'Gòu',
        meaning: '相遇、邂逅、意外',
        text: '女壮，勿用取女。',
        core: '不期而遇，需谨慎应对',
        wuxing: { upper: '木', lower: '金' },
        yaoci: [
            '初六：系于金柅，贞吉。有攸往，见凶，羸豕孚蹢躅。',
            '九二：包有鱼，无咎，不利宾。',
            '九三：臀无肤，其行次且，厉，无大咎。',
            '九四：包无鱼，起凶。',
            '九五：以杞包瓜，含章，有陨自天。',
            '上九：姤其角，吝，无咎。'
        ],
        yong: '',
        xiang: '天下有风，姤；后以施命诰四方。'
    },
    {
        num: 45,
        name: '萃卦',
        symbol: '☱☷',
        pinyin: 'Cuì',
        meaning: '聚集、团结、荟萃',
        text: '亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。',
        core: '众志成城，聚集力量',
        wuxing: { upper: '金', lower: '土' },
        yaoci: [
            '初六：有孚不终，乃乱乃萃，若号，一握为笑，勿恤，往无咎。',
            '六二：引吉，无咎，孚乃利用禴。',
            '六三：萃如嗟如，无攸利，往无咎，小吝。',
            '九四：大吉，无咎。',
            '九五：萃有位，无咎，匪孚，元永贞，悔亡。',
            '上六：赍咨涕洟，无咎。'
        ],
        yong: '',
        xiang: '泽上于地，萃；君子以除戎器，戒不虞。'
    },
    {
        num: 46,
        name: '升卦',
        symbol: '☴☷',
        pinyin: 'Shēng',
        meaning: '上升、进步、发展',
        text: '元亨，用见大人，勿恤，南征吉。',
        core: '积小成大，步步高升',
        wuxing: { upper: '木', lower: '土' },
        yaoci: [
            '初六：允升，大吉。',
            '九二：孚乃利用禴，无咎。',
            '九三：升虚邑。',
            '六四：王用亨于岐山，吉，无咎。',
            '六五：贞吉，升阶。',
            '上六：冥升，利于不息之贞。'
        ],
        yong: '',
        xiang: '地中生木，升；君子以顺德，积小以高大。'
    },
    {
        num: 47,
        name: '困卦',
        symbol: '☱☵',
        pinyin: 'Kùn',
        meaning: '困顿、困境、考验',
        text: '亨，贞，大人吉，无咎。有言不信。',
        core: '困境中保持节操，终能脱困',
        wuxing: { upper: '金', lower: '水' },
        yaoci: [
            '初六：臀困于株木，入于幽谷，三岁不觌。',
            '九二：困于酒食，朱绂方来，利用享祀，征凶，无咎。',
            '六三：困于石，据于蒺藜，入于其宫，不见其妻，凶。',
            '九四：来徐徐，困于金车，吝，有终。',
            '九五：劓刖，困于赤绂，乃徐有说，利用祭祀。',
            '上六：困于葛藟，于臲卼，曰动悔有悔，征吉。'
        ],
        yong: '',
        xiang: '泽无水，困；君子以致命遂志。'
    },
    {
        num: 48,
        name: '井卦',
        symbol: '☴☵',
        pinyin: 'Jǐng',
        meaning: '井泉、滋养、稳定',
        text: '改邑不改井，无丧无得。往来井井。汔至亦未繘井，羸其瓶，凶。',
        core: '井水养人，但需养护得当',
        wuxing: { upper: '木', lower: '水' },
        yaoci: [
            '初六：井泥不食，旧井无禽。',
            '九二：井谷射鲋，瓮敝漏。',
            '九三：井渫不食，为我心恻，可用汲，王明，并受其福。',
            '六四：井甃，无咎。',
            '九五：井冽，寒泉食。',
            '上六：井收勿幕，有孚元吉。'
        ],
        yong: '',
        xiang: '木上有水，井；君子以劳民劝相。'
    },
    {
        num: 49,
        name: '革卦',
        symbol: '☲☱',
        pinyin: 'Gé',
        meaning: '变革、革新、改革',
        text: '巳日乃孚，元亨利贞，悔亡。',
        core: '顺应时势，革故鼎新',
        wuxing: { upper: '火', lower: '金' },
        yaoci: [
            '初九：巩用黄牛之革。',
            '六二：巳日乃革之，征吉，无咎。',
            '九三：征凶，贞厉，革言三就，有孚。',
            '九四：悔亡，有孚改命，吉。',
            '九五：大人虎变，未占有孚。',
            '上六：君子豹变，小人革面，征凶，居贞吉。'
        ],
        yong: '',
        xiang: '泽中有火，革；君子以治历明时。'
    },
    {
        num: 50,
        name: '鼎卦',
        symbol: '☴☲',
        pinyin: 'Dǐng',
        meaning: '鼎器、稳定、供养',
        text: '元吉，亨。',
        core: '鼎新之士，承载重任',
        wuxing: { upper: '木', lower: '火' },
        yaoci: [
            '初六：鼎颠趾，利出否，得妾以其子，无咎。',
            '九二：鼎有实，我仇有疾，不我能即，吉。',
            '九三：鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉。',
            '九四：鼎折足，覆公餗，其形渥，凶。',
            '六五：鼎黄耳金铉，利贞。',
            '上九：鼎玉铉，大吉，无不利。'
        ],
        yong: '',
        xiang: '木上有火，鼎；君子以正位凝命。'
    },
    {
        num: 51,
        name: '震卦',
        symbol: '☳☳',
        pinyin: 'Zhèn',
        meaning: '震动、警醒、行动',
        text: '亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。',
        core: '雷霆万钧，警醒世人',
        wuxing: { upper: '木', lower: '木' },
        yaoci: [
            '初九：震来虩虩，后笑言哑哑，吉。',
            '六二：震来厉，亿丧贝，跻于九陵，勿逐，七日得。',
            '六三：震苏苏，震行无眚。',
            '九四：震遂泥。',
            '六五：震往来厉，亿无丧，有事。',
            '上六：震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。'
        ],
        yong: '',
        xiang: '洊雷，震；君子以恐惧修省。'
    },
    {
        num: 52,
        name: '艮卦',
        symbol: '☶☶',
        pinyin: 'Gèn',
        meaning: '停止、静止、克制',
        text: '艮其背，不获其身。行其庭，不见其人。无咎。',
        core: '当行则行，当止则止',
        wuxing: { upper: '土', lower: '土' },
        yaoci: [
            '初六：艮其趾，无咎，利永贞。',
            '六二：艮其腓，不拯其随，其心不快。',
            '九三：艮其限，列其夤，厉薰心。',
            '六四：艮其身，无咎。',
            '六五：艮其辅，言有序，悔亡。',
            '上九：敦艮，吉。'
        ],
        yong: '',
        xiang: '兼山，艮；君子以思不出其位。'
    },
    {
        num: 53,
        name: '渐卦',
        symbol: '☴☶',
        pinyin: 'Jiàn',
        meaning: '渐进、逐步、有序',
        text: '女归吉，利贞。',
        core: '循序渐进，不可急躁',
        wuxing: { upper: '木', lower: '土' },
        yaoci: [
            '初六：鸿渐于干，小子厉，有言，无咎。',
            '六二：鸿渐于磐，饮食衎衎，吉。',
            '九三：鸿渐于陆，夫征不复，妇孕不育，凶，利御寇。',
            '六四：鸿渐于木，或得其桷，无咎。',
            '九五：鸿渐于陵，妇三岁不孕，终莫之胜，吉。',
            '上九：鸿渐于陆，其羽可用为仪，吉。'
        ],
        yong: '',
        xiang: '山上有木，渐；君子以居贤德善俗。'
    },
    {
        num: 54,
        name: '归妹卦',
        symbol: '☱☳',
        pinyin: 'Guī Mèi',
        meaning: '婚嫁、归宿、终结',
        text: '征凶，无攸利。',
        core: '事物发展至终点，需理性看待',
        wuxing: { upper: '金', lower: '木' },
        yaoci: [
            '初九：归妹以娣，跛能履，征吉。',
            '九二：眇能视，利幽人之贞。',
            '六三：归妹以须，反归以娣。',
            '九四：归妹愆期，迟归有时。',
            '六五：帝乙归妹，其君之袂，不如其娣之袂良，月几望，吉。',
            '上六：女承筐无实，士刲羊无血，无攸利。'
        ],
        yong: '',
        xiang: '泽上有雷，归妹；君子以永终知敝。'
    },
    {
        num: 55,
        name: '丰卦',
        symbol: '☲☳',
        pinyin: 'Fēng',
        meaning: '丰盛、繁荣、光大',
        text: '亨。王假之，勿忧，宜日中。',
        core: '丰大之时，需保持中正',
        wuxing: { upper: '火', lower: '木' },
        yaoci: [
            '初九：遇其配主，虽旬无咎，往有尚。',
            '六二：丰其蔀，日中见斗，往得疑疾，有孚发若，吉。',
            '九三：丰其沛，日中见沫，折其右肱，无咎。',
            '九四：丰其蔀，日中见斗，遇其夷主，吉。',
            '六五：来章，有庆誉，吉。',
            '上六：丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。'
        ],
        yong: '',
        xiang: '雷电皆至，丰；君子以折狱致刑。'
    },
    {
        num: 56,
        name: '旅卦',
        symbol: '☶☲',
        pinyin: 'Lǚ',
        meaning: '旅行、漂泊、客居',
        text: '小亨，旅贞吉。',
        core: '行旅之中，宜谨慎低调',
        wuxing: { upper: '土', lower: '火' },
        yaoci: [
            '初六：旅琐琐，斯其所取灾。',
            '六二：旅即次，怀其资，得童仆贞。',
            '九三：旅焚其次，丧其童仆，贞厉。',
            '九四：旅于处，得其资斧，我心不快。',
            '六五：射雉一矢亡，终以誉命。',
            '上九：鸟焚其巢，旅人先笑后号啕，丧牛于易，凶。'
        ],
        yong: '',
        xiang: '山上有火，旅；君子以明慎用刑，而不留狱。'
    },
    {
        num: 57,
        name: '巽卦',
        symbol: '☴☴',
        pinyin: 'Xùn',
        meaning: '顺从、谦逊、深入',
        text: '小亨，利有攸往，利见大人。',
        core: '如风入物，无孔不入',
        wuxing: { upper: '木', lower: '木' },
        yaoci: [
            '初六：进退，利武人之贞。',
            '九二：巽在床下，用史巫纷若，吉，无咎。',
            '九三：频巽，吝。',
            '六四：悔亡，田获三品。',
            '九五：贞吉，悔亡，无不利。无初有终，先庚三日，后庚三日，吉。',
            '上九：巽在床下，丧其资斧，贞凶。'
        ],
        yong: '',
        xiang: '随风，巽；君子以申命行事。'
    },
    {
        num: 58,
        name: '兑卦',
        symbol: '☱☱',
        pinyin: 'Duì',
        meaning: '喜悦、和悦、交流',
        text: '亨，利贞。',
        core: '悦人以诚，但需守住原则',
        wuxing: { upper: '金', lower: '金' },
        yaoci: [
            '初九：和兑，吉。',
            '九二：孚兑，吉，悔亡。',
            '六三：来兑，凶。',
            '九四：商兑未宁，介疾有喜。',
            '九五：孚于剥，有厉。',
            '上六：引兑。'
        ],
        yong: '',
        xiang: '丽泽，兑；君子以朋友讲习。'
    },
    {
        num: 59,
        name: '涣卦',
        symbol: '☴☵',
        pinyin: 'Huàn',
        meaning: '涣散、离散、化解',
        text: '亨。王假有庙，利涉大川，利贞。',
        core: '散中求聚，化解隔阂',
        wuxing: { upper: '木', lower: '水' },
        yaoci: [
            '初六：用拯马壮，吉。',
            '九二：涣奔其机，悔亡。',
            '六三：涣其躬，无悔。',
            '六四：涣其群，元吉，涣有丘，匪夷所思。',
            '九五：涣汗其大号，涣王居，无咎。',
            '上九：涣其血，去逖出，无咎。'
        ],
        yong: '',
        xiang: '风行水上，涣；先王以享于帝，立庙。'
    },
    {
        num: 60,
        name: '节卦',
        symbol: '☵☱',
        pinyin: 'Jié',
        meaning: '节制、节度、规范',
        text: '亨。苦节不可贞。',
        core: '有节有度，但不可过度',
        wuxing: { upper: '水', lower: '金' },
        yaoci: [
            '初九：不出户庭，无咎。',
            '九二：不出门庭，凶。',
            '六三：不节若，则嗟若，无咎。',
            '六四：安节，亨。',
            '九五：甘节，吉，往有尚。',
            '上六：苦节，贞凶，悔亡。'
        ],
        yong: '',
        xiang: '泽上有水，节；君子以制数度，议德行。'
    },
    {
        num: 61,
        name: '中孚卦',
        symbol: '☱☴',
        pinyin: 'Zhōng Fú',
        meaning: '诚信、中道、感通',
        text: '豚鱼吉，利涉大川，利贞。',
        core: '至诚如神，感通万物',
        wuxing: { upper: '金', lower: '木' },
        yaoci: [
            '初九：虞吉，有它不燕。',
            '九二：鸣鹤在阴，其子和之；我有好爵，吾与尔靡之。',
            '六三：得敌，或鼓或罢，或泣或歌。',
            '六四：月几望，马匹亡，无咎。',
            '九五：有孚挛如，无咎。',
            '上九：翰音登于天，贞凶。'
        ],
        yong: '',
        xiang: '泽上有风，中孚；君子以议狱缓死。'
    },
    {
        num: 62,
        name: '小过卦',
        symbol: '☶☳',
        pinyin: 'Xiǎo Guò',
        meaning: '小有过度、谨小慎微',
        text: '亨，利贞。可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。',
        core: '小过无妨，大过则凶',
        wuxing: { upper: '土', lower: '木' },
        yaoci: [
            '初六：飞鸟以凶。',
            '六二：过其祖，遇其妣；不及其君，遇其臣，无咎。',
            '九三：弗过防之，从或戕之，凶。',
            '九四：无咎，弗过遇之，往厉必戒，勿用永贞。',
            '六五：密云不雨，自我西郊，公弋取彼在穴。',
            '上六：弗遇过之，飞鸟离之，凶，是谓灾眚。'
        ],
        yong: '',
        xiang: '山上有雷，小过；君子以行过乎恭，丧过乎哀，用过乎俭。'
    },
    {
        num: 63,
        name: '既济卦',
        symbol: '☲☵',
        pinyin: 'Jì Jì',
        meaning: '事已成、圆满、成功',
        text: '亨小，利贞。初吉终乱。',
        core: '成功之后，需防患未然',
        wuxing: { upper: '火', lower: '水' },
        yaoci: [
            '初九：曳其轮，濡其尾，无咎。',
            '六二：妇丧其茀，勿逐，七日得。',
            '九三：高宗伐鬼方，三年克之，小人勿用。',
            '六四：繻有衣袽，终日戒。',
            '九五：东邻杀牛，不如西邻之禴祭，实受其福。',
            '上六：濡其首，厉。'
        ],
        yong: '',
        xiang: '水在火上，既济；君子以思患而豫防之。'
    },
    {
        num: 64,
        name: '未济卦',
        symbol: '☵☲',
        pinyin: 'Wèi Jì',
        meaning: '事未成、无限可能',
        text: '亨。小狐汔济，濡其尾，无攸利。',
        core: '未完成的状态，蕴含新的可能',
        wuxing: { upper: '水', lower: '火' },
        yaoci: [
            '初六：濡其尾，吝。',
            '九二：曳其轮，贞吉。',
            '六三：未济，征凶，利涉大川。',
            '九四：贞吉，悔亡，震用伐鬼方，三年有赏于大国。',
            '六五：贞吉，无悔，君子之光，有孚，吉。',
            '上九：有孚于饮酒，无咎，濡其首，有孚失是。'
        ],
        yong: '',
        xiang: '火在水上，未济；君子以慎辨物居方。'
    }
];

// 五行生克关系
const wuxingRelation = {
    '金': {
        '金': '比和',
        '木': '相克',
        '水': '相生',
        '火': '被克',
        '土': '被生'
    },
    '木': {
        '金': '被克',
        '木': '比和',
        '水': '被生',
        '火': '相生',
        '土': '相克'
    },
    '水': {
        '金': '被生',
        '木': '相生',
        '水': '比和',
        '火': '相克',
        '土': '被克'
    },
    '火': {
        '金': '相克',
        '木': '被生',
        '水': '被克',
        '火': '比和',
        '土': '相生'
    },
    '土': {
        '金': '相生',
        '木': '被克',
        '水': '相克',
        '火': '被生',
        '土': '比和'
    }
};

// 六爻占卜算法 - 金钱卦法
function tossCoins() {
    const results = [];
    for (let i = 0; i < 6; i++) {
        let line = 0;
        for (let j = 0; j < 3; j++) {
            line += Math.floor(Math.random() * 2) + 2;
        }
        results.push(line);
    }
    return results;
}

// 根据爻结果获取本卦和变卦
function getHexagramFromLines(lines) {
    let binary = '';
    let changes = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line === 6) {
            binary = '0' + binary; // 老阴，变阳
            changes.push(i);
        } else if (line === 7) {
            binary = '1' + binary; // 少阳，不变
        } else if (line === 8) {
            binary = '0' + binary; // 少阴，不变
        } else if (line === 9) {
            binary = '1' + binary; // 老阳，变阴
            changes.push(i);
        }
    }
    
    const index = parseInt(binary, 2);
    return { hexagram: hexagrams[index], changes };
}

// 事业前程专业分析
function analyzeCareer(hexagram, changes) {
    const wuxing = hexagram.wuxing;
    const relation = wuxingRelation[wuxing.upper][wuxing.lower];
    
    let analysis = `【${hexagram.name}】事业分析\n`;
    analysis += `卦象：${hexagram.symbol}\n`;
    analysis += `卦辞：${hexagram.text}\n`;
    analysis += `核心含义：${hexagram.core}\n\n`;
    analysis += `五行分析：上卦属${wuxing.upper}，下卦属${wuxing.lower}，${wuxing.upper}与${wuxing.lower}为${relation}关系。\n\n`;
    
    if (changes.length > 0) {
        analysis += `变爻分析：有${changes.length}个变爻，需要关注卦象的变化趋势。\n`;
        changes.forEach((change, idx) => {
            analysis += `第${change + 1}爻变：${hexagram.yaoci[change]}\n`;
        });
    } else {
        analysis += `静卦：无变爻，需关注本卦所显示的稳定趋势。\n`;
    }
    
    analysis += `\n事业建议：\n`;
    if (relation === '相生' || relation === '比和') {
        analysis += `✓ 卦象五行相生比和，事业运势佳，适合积极进取。\n`;
    } else if (relation === '相克' || relation === '被克') {
        analysis += `⚠ 卦象五行相克，事业需谨慎行事，防患未然。\n`;
    }
    
    return analysis;
}

// 财富格局分析
function analyzeWealth(hexagram, changes) {
    let analysis = `【${hexagram.name}】财富分析\n`;
    analysis += `卦象：${hexagram.symbol}\n`;
    analysis += `卦辞：${hexagram.text}\n`;
    analysis += `核心含义：${hexagram.core}\n\n`;
    
    const wealthKeywords = ['大有', '恒', '益', '晋', '升', '家人'];
    const isWealthy = wealthKeywords.some(keyword => hexagram.name.includes(keyword));
    
    if (isWealthy) {
        analysis += `此卦显示财富格局较好，可能有较好的财运。\n`;
    } else {
        analysis += `此卦财富格局需要谨慎，注意风险控制。\n`;
    }
    
    return analysis;
}

// 正缘桃花分析
function analyzeRelationship(hexagram, gender) {
    let analysis = `【${hexagram.name}】姻缘分析\n`;
    analysis += `卦象：${hexagram.symbol}\n`;
    analysis += `您的性别：${gender === 'male' ? '男' : '女'}\n\n`;
    
    const loveHexagrams = ['咸', '恒', '渐', '归妹', '家人', '睽'];
    const hasLoveSign = loveHexagrams.some(keyword => hexagram.name.includes(keyword));
    
    if (hasLoveSign) {
        analysis += `此卦显示正缘桃花运势较佳。\n`;
    }
    
    analysis += `核心含义：${hexagram.core}\n`;
    analysis += `卦辞：${hexagram.text}\n`;
    
    return analysis;
}

// 健康五行分析
function analyzeHealth(hexagram, year, month) {
    const yearWuxing = ['水', '火', '木', '土', '金'][year % 5];
    let analysis = `【${hexagram.name}】健康分析\n`;
    analysis += `出生年五行：${yearWuxing}\n`;
    analysis += `卦象五行：上${hexagram.wuxing.upper}，下${hexagram.wuxing.lower}\n\n`;
    
    const healthAdvice = [
        '注意劳逸结合，保持规律作息。',
        '饮食宜清淡，避免过食辛辣油腻。',
        '适当运动，增强体质。',
        '保持心情舒畅，避免过度焦虑。'
    ];
    
    analysis += `健康建议：\n`;
    healthAdvice.forEach(advice => analysis += `• ${advice}\n`);
    
    return analysis;
}

// 流年运势分析
function analyzeYearly(hexagram, birthYear, targetYear) {
    const zodiacs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    const zodiac = zodiacs[(targetYear - 4) % 12];
    const age = targetYear - birthYear;
    
    let analysis = `【${targetYear}年】运势分析\n`;
    analysis += `生肖：${zodiac}，年龄：${age}岁\n`;
    analysis += `流年卦象：${hexagram.name} ${hexagram.symbol}\n\n`;
    analysis += `核心启示：${hexagram.core}\n`;
    analysis += `卦辞：${hexagram.text}\n`;
    
    return analysis;
}

// 一生命运分析
function analyzeDestiny(hexagram, year, month, day) {
    const total = parseInt(year) + parseInt(month) + parseInt(day);
    const destinyNum = total % 9;
    
    const destinyMap = [
        '一生平顺，贵人相助，晚年安乐。',
        '聪慧机敏，才华横溢，事业有成。',
        '性格坚毅，能成大事，中晚年发达。',
        '家庭美满，财运亨通，福禄双全。',
        '贵人相助，机遇不断，功成名就。',
        '一生勤勉，踏实肯干，终有所成。',
        '家庭和睦，事业稳定，生活幸福。',
        '德才兼备，受人尊敬，声名远播。',
        '财运亨通，事业顺利，心想事成。'
    ];
    
    let analysis = `【命格分析】\n`;
    analysis += `出生日期：${year}年${month}月${day}日\n`;
    analysis += `命卦：${hexagram.name} ${hexagram.symbol}\n\n`;
    analysis += `命运解析：${destinyMap[destinyNum]}\n\n`;
    analysis += `卦象启示：${hexagram.core}\n`;
    
    return analysis;
}

// 重新实现各占卜功能
let currentHexagramIndex = 0;

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav a').forEach(link => {
        link.classList.remove('nav-active');
    });
    document.getElementById(sectionId).classList.add('active');
    event.target?.classList.add('nav-active');
}

function generateRandomHexagram() {
    return Math.floor(Math.random() * 64);
}

function startDivination() {
    const question = document.getElementById('div-question').value;
    if (!question.trim()) {
        alert('请先输入您想询问的问题');
        return;
    }
    
    const coins = document.querySelectorAll('.coin');
    coins.forEach(coin => coin.classList.add('shaking'));
    
    document.getElementById('result-area').style.display = 'none';
    
    setTimeout(() => {
        coins.forEach(coin => coin.classList.remove('shaking'));
        const lines = tossCoins();
        const { hexagram, changes } = getHexagramFromLines(lines);
        displayDivinationResult(hexagram, changes, question);
    }, 3000);
}

function displayDivinationResult(hexagram, changes, question) {
    document.getElementById('result-hexagram').textContent = hexagram.symbol;
    document.getElementById('hexagram-name').textContent = `${hexagram.num}、${hexagram.name} (${hexagram.pinyin})`;
    document.getElementById('hexagram-meaning').textContent = hexagram.meaning;
    
    let interpretation = `<p><strong>您的问题：</strong>${question}</p>`;
    interpretation += `<p><strong>卦辞：</strong>${hexagram.text}</p>`;
    interpretation += `<p><strong>象曰：</strong>${hexagram.xiang}</p>`;
    interpretation += `<p><strong>核心含义：</strong>${hexagram.core}</p>`;
    
    if (changes.length > 0) {
        interpretation += `<p><strong>变爻分析（共${changes.length}个）：</strong></p><ul>`;
        changes.forEach(change => {
            interpretation += `<li>${hexagram.yaoci[change]}</li>`;
        });
        interpretation += `</ul>`;
    }
    
    document.getElementById('interpretation').innerHTML = interpretation;
    document.getElementById('result-area').style.display = 'block';
    
    saveReading('divination', {
        question: question,
        hexagram: hexagram,
        changes: changes,
        timestamp: new Date().toISOString()
    });
}

function calculateCareer() {
    const year = document.getElementById('career-year').value;
    const question = document.getElementById('career-question').value;
    
    if (!year || !question.trim()) {
        alert('请填写完整信息');
        return;
    }
    
    const lines = tossCoins();
    const { hexagram, changes } = getHexagramFromLines(lines);
    const analysis = analyzeCareer(hexagram, changes);
    
    document.getElementById('career-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
    
    saveReading('career', {
        year: year,
        question: question,
        hexagram: hexagram,
        changes: changes,
        timestamp: new Date().toISOString()
    });
}

function calculateWealth() {
    const year = document.getElementById('wealth-year').value;
    const question = document.getElementById('wealth-question').value;
    
    if (!year || !question.trim()) {
        alert('请填写完整信息');
        return;
    }
    
    const lines = tossCoins();
    const { hexagram, changes } = getHexagramFromLines(lines);
    const analysis = analyzeWealth(hexagram, changes);
    
    document.getElementById('wealth-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
    
    saveReading('wealth', {
        year: year,
        question: question,
        hexagram: hexagram,
        changes: changes,
        timestamp: new Date().toISOString()
    });
}

function calculateRelationship() {
    const gender = document.getElementById('rel-gender').value;
    const year = document.getElementById('rel-year').value;
    const question = document.getElementById('rel-question').value;
    
    if (!year || !question.trim()) {
        alert('请填写完整信息');
        return;
    }
    
    const lines = tossCoins();
    const { hexagram, changes } = getHexagramFromLines(lines);
    const analysis = analyzeRelationship(hexagram, gender);
    
    document.getElementById('rel-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
    
    saveReading('relationship', {
        gender: gender,
        year: year,
        question: question,
        hexagram: hexagram,
        changes: changes,
        timestamp: new Date().toISOString()
    });
}

function calculateHealth() {
    const year = document.getElementById('health-year').value;
    const month = document.getElementById('health-month').value;
    
    if (!year || !month) {
        alert('请填写完整信息');
        return;
    }
    
    const lines = tossCoins();
    const { hexagram, changes } = getHexagramFromLines(lines);
    const analysis = analyzeHealth(hexagram, year, month);
    
    document.getElementById('health-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
    
    saveReading('health', {
        year: year,
        month: month,
        hexagram: hexagram,
        changes: changes,
        timestamp: new Date().toISOString()
    });
}

function calculateYearly() {
    const birthYear = document.getElementById('yearly-year').value;
    const targetYear = document.getElementById('target-year').value || new Date().getFullYear();
    
    if (!birthYear) {
        alert('请填写出生年份');
        return;
    }
    
    const lines = tossCoins();
    const { hexagram, changes } = getHexagramFromLines(lines);
    const analysis = analyzeYearly(hexagram, birthYear, targetYear);
    
    document.getElementById('yearly-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
    
    saveReading('yearly', {
        birthYear: birthYear,
        targetYear: targetYear,
        hexagram: hexagram,
        changes: changes,
        timestamp: new Date().toISOString()
    });
}

function calculateDestiny() {
    const year = document.getElementById('lifetime-year').value;
    const month = document.getElementById('lifetime-month').value;
    const day = document.getElementById('lifetime-day').value;
    
    if (!year || !month || !day) {
        alert('请填写完整信息');
        return;
    }
    
    const lines = tossCoins();
    const { hexagram, changes } = getHexagramFromLines(lines);
    const analysis = analyzeDestiny(hexagram, year, month, day);
    
    document.getElementById('lifetime-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
    
    saveReading('lifetime', {
        year: year,
        month: month,
        day: day,
        hexagram: hexagram,
        changes: changes,
        timestamp: new Date().toISOString()
    });
}

function saveReading(type, data) {
    const readings = JSON.parse(localStorage.getItem('zhouyi_readings') || '[]');
    readings.push({ type, ...data });
    localStorage.setItem('zhouyi_readings', JSON.stringify(readings));
}

function loadReadings() {
    return JSON.parse(localStorage.getItem('zhouyi_readings') || '[]');
}

function cycleHexagram() {
    currentHexagramIndex = (currentHexagramIndex + 1) % hexagrams.length;
    document.getElementById('home-hexagram').textContent = hexagrams[currentHexagramIndex].symbol;
}

document.addEventListener('DOMContentLoaded', function() {
    cycleHexagram();
    setInterval(cycleHexagram, 3000);
});