export const DefaultForm = {
    id: '',
    title: '', // 直播标题
    viewersNum: '0',  // 观看人数
    startTime: '',  // 直播开始时间
    endTime: '',  // 直播结束时间
    isLive: 1,  // 直播 0：否，1：是
    isScene: 1,  // 现场 0：否，1：是
    player1: {
        id: '', 
        name: ''
    },  // 选手1
    player2: {
        id: '', 
        name: ''
    },  // 选手2
    intro: '',  // 简介
};

export const Players = [
    { id: 'play01', gender: 1, age: 28, name: '杨兴新', thumbsUp: 452, victory: 12, into: '杨兴新，1992年7月29日出生于云南省昭通市巧家县，中国职业拳击运动员，现效力于北京拳威四海拳击队。'},
    { id: 'play02', gender: 1, age: 27, name: '迈克·泰森', thumbsUp: 657, victory: 14, into: '拳击场外问题多多使得泰森难以成为世界上现存的最伟大的拳王。从1986年到1989年，泰森凭借天生神力与他对进攻时机的把握的恰到'},
    { id: 'play03', gender: 1, age: 26, name: '霍利菲尔德', thumbsUp: 89, victory: 23, into: '伊万德·霍利菲尔德（Evander Holyfield，1962年10月19日）生于美国亚拉巴马州阿特莫尔，是美国职业拳击手，更是多次夺得次重量'},
    { id: 'play04', gender: 1, age: 25, name: '邹市明', thumbsUp: 567, victory: 25, into: ' 邹市明 Zou Shiming (中国) 籍贯：上海 性别：男 生日：1981.5.18 身高：1.62米 体重：48公斤 项目：拳击'},
    { id: 'play05', gender: 2, age: 24, name: '蔡宗菊', thumbsUp: 6587, victory: 10, into: '蔡宗菊，职业拳击运动员，是中国拳击在世界上唯一有真正名号的女子拳击选手。蔡宗菊目前排名105磅级别世界第一。2017年1月30日晚，26岁的山东姑娘蔡宗菊在澳门经过10回合苦战，在贺岁杯国际拳击联合会（IBF）世界拳王争霸赛上以点数战胜日本拳王多田悦子，赢得女子迷你轻量级世界拳王金腰带。蔡宗菊就此成为该拳击组织历史上首位中国女子世界拳王。'},
    { id: 'play06', gender: 1, age: 23, name: '刘易斯 Lennox Lewis', thumbsUp: 573, victory: 11, into: '1993年5月8日，十二回合点数击败塔克，获得WBC金腰带拳王　1993年10月1日，七回合击倒布鲁诺，成功卫冕 　　1995年10月7日，六.'},
    { id: 'play07', gender: 2, age: 22, name: '任灿灿', thumbsUp: 863, victory: 7, into: '拳击选手 。2010年11月22日，获得52公斤级世界冠军。2010年广州亚运会11月25日CCTV亚运之星候选人。2012年伦敦奥运会女子拳击51公斤级亚军。2013年辽宁全运会女子拳击51公斤级冠军。2015年乌兰察布亚洲女子拳击锦标赛51公斤级冠军。刚练拳击时，任灿灿对基本技术和步伐不得要领，经常在训练中被人猛揍，一天下来，身上到处都是淤伤。任灿灿没掉过一次眼泪。她骨子里那种不服输的劲头又来了，即便身上挨再多的拳头，她也要奋力还击。有一次训练中，她的对手都打累了，任灿灿还是咬着牙忍痛还击，后来追着对手满场跑。'},
    { id: 'play08', gender: 2, age: 28, name: '汪柯菡', thumbsUp: 78537, victory: 6, into: '昆仑决中国勇士，多次代表中国参加大型比赛，2012年退役后转战职业，她以个性的外表，腼腆的性格，擂台上的霸气给人留下深刻的印象，2013年在C3格斗之王比赛中KO世界现役泰拳冠军白俄罗斯第一美女伊卡翠娜，扬名世界。随后夺得WLF56kg 世界冠军金腰带，昆仑决世界冠军、IPCC 60kg级世界冠军 。自2014年登陆“昆仑决”至今，汪柯菡保持着近乎完美的竞技状态，连战连捷，并相继飞赴荷兰等搏击强国巩固自己日渐成熟的搏击体系。汪柯菡师承乌克兰著名拳王“美丽死神”奇斯辛柯，在拳法造诣和进攻战机把握上更加精纯老道，综合实力进一步大增'},
    { id: 'play09', gender: 2, age: 29, name: '徐春燕', thumbsUp: 79, victory: 19, into: '（全国拳击冠军）2005年从事拳击专业，进入宁波体工队女子拳击队，曾多次在全国女子拳击上获得冠军。徐春燕曾是一名出色的奥运体系拳手，曾先后多次摘得全国锦标赛、全国冠军赛的桂冠。2008年，徐春燕正式转入职业拳坛。转入职业拳坛的第二场比赛她就挑战了WBA的世界女子126磅拳王头衔，遗憾落败；2013年在韩国挑战IFBA组织的女子世界拳王再次失利。2014年，她终于迎来了拳击事业的巅峰，在海口举办的CCTV贺岁杯上击败了来自加拿大的强敌，成功加冕WBC国际拳王金腰带。'},
    { id: 'play10', gender: 1, age: 25, name: '小罗伊-琼斯 Roy Jones Jr', thumbsUp: 7967, victory: 21, into: '小罗伊-琼斯 Roy Jones Jr (美国) 国籍：美国 性别：男 生日：1969.1.16 身高：1.80米 体重：80公斤 项目：拳击'},
    { id: 'play11', gender: 1, age: 26, name: '霍普金斯', thumbsUp: 76, victory: 17, into: '出生年月：1965年1月15日 国籍：美国 绰号：侩子手 战绩：52胜5负2平， 32场比赛击倒对手获胜 身高：185厘米 臂展：191厘'},
];

export const LiveList = [
    {id: 'live01', title: 'aaaaaa', startTime: '2020-12-17 10:00:00', endTime: '2020-12-17 10:30:00', intro: '直播简介', isLive: 1, isScene: 1, viewersNum: 0, player1: {id: 'play01', name: '杨兴新'}, player2: {id: 'play11', name: '霍普金斯'}},
    {id: 'live02', title: 'bbbbb', startTime: '2020-12-18 10:00:00', endTime: '2020-12-18 10:30:00', intro: '直播简介', isLive: 1, isScene: 0, viewersNum: 0, player1: {id: 'play01', name: '杨兴新'}, player2: {id: 'play11', name: '霍普金斯'}},
    {id: 'live03', title: 'ccccccccccccccc', startTime: '2020-12-19 10:00:00', endTime: '2020-12-19 10:30:00', intro: '直播简介', isLive: 1, isScene: 0, viewersNum: 0, player1: {id: 'play01', name: '杨兴新'}, player2: {id: 'play11', name: '霍普金斯'}},
    {id: 'live04', title: 'ddddddddddddd', startTime: '2020-12-20 10:00:00', endTime: '2020-12-20 10:30:00', intro: '直播简介', isLive: 0, isScene: 1, viewersNum: 0, player1: {id: 'play01', name: '杨兴新'}, player2: {id: 'play11', name: '霍普金斯'}},
    {id: 'live05', title: 'eeeeeeeeee', startTime: '2020-12-21 10:00:00', endTime: '2020-12-21 10:30:00', intro: '直播简介', isLive: 0, isScene: 1, viewersNum: 0, player1: {id: 'play01', name: '杨兴新'}, player2: {id: 'play11', name: '霍普金斯'}},
    {id: 'live06', title: 'ffffffffffff', startTime: '2020-12-22 10:00:00', endTime: '2020-12-22 10:30:00', intro: '直播简介', isLive: 1, isScene: 1, viewersNum: 0, player1: {id: 'play01', name: '杨兴新'}, player2: {id: 'play11', name: '霍普金斯'}},
    {id: 'live07', title: 'gggggggggggg', startTime: '2020-12-23 10:00:00', endTime: '2020-12-23 10:30:00', intro: '直播简介', isLive: 0, isScene: 1, viewersNum: 0, player1: {id: 'play01', name: '杨兴新'}, player2: {id: 'play11', name: '霍普金斯'}},
    {id: 'live08', title: 'hhhhhhhhhhhh', startTime: '2020-12-24 10:00:00', endTime: '2020-12-24 10:30:00', intro: '直播简介', isLive: 1, isScene: 1, viewersNum: 0, player1: {id: 'play01', name: '杨兴新'}, player2: {id: 'play11', name: '霍普金斯'}},
    {id: 'live09', title: 'iiiiiiiiiii', startTime: '2020-12-25 10:00:00', endTime: '2020-12-25 10:30:00', intro: '直播简介', isLive: 1, isScene: 1, viewersNum: 0, player1: {id: 'play01', name: '杨兴新'}, player2: {id: 'play11', name: '霍普金斯'}},
    {id: 'live10', title: 'jjjjjjjjjjjj', startTime: '2020-12-26 10:00:00', endTime: '2020-12-26 10:30:00', intro: '直播简介', isLive: 0, isScene: 1, viewersNum: 0, player1: {id: 'play01', name: '杨兴新'}, player2: {id: 'play11', name: '霍普金斯'}},
];




