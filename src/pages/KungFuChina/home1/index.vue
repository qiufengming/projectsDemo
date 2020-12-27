<template src="./index.html"></template>

<script>
    import { mapMutations, mapActions, mapGetters, mapState } from 'vuex' 
    import QRCode from 'qrcodejs2';
    import adDemo from './../commons/adDemo.vue'
    import footer1 from './../footer1/index.vue'

    export default {
        components: {
            'ad-demo': adDemo,
            'my-footer': footer1,
        },
        data(){
            return {
                headerData: {},
                logo: require('@/assets/KungFuChina/29.png'),
                keyword: '',
                showDownAppCode: false,
                menus: [],
                newsList: [],
                icon01: require('@/assets/KungFuChina/31.png'),
                icon02: require('@/assets/KungFuChina/30.png'),
                icon03: require('@/assets/KungFuChina/33.png'),
                icon04: require('@/assets/KungFuChina/32.png'),
                madeMatchList: [],
                playerRank: [],
                icon05: require('@/assets/KungFuChina/10.png'),
                icon06: require('@/assets/KungFuChina/34.png'),
                excellentAthlete: [],
                moreClassify: [],
            };
        },
        computed: {
            liveInfo(){
                return this.$store.state.liveList[0];
            },
            ...mapGetters(['getterLiveList', 'getterPlayerList']),
        },
        created(){
            let self = this;
            self.getHeaderData()
            self.getMenus()
            self.getNewsList()
            self.getMadeMatchList()
            self.getPlayerRank();
            self.getExcellentAthlete();
            self.getMoreClassify();
            // self.getLiveList()

        },
        mounted(){
            let self = this;
            self.createDownAppCode()
        },
        methods: {
            ...mapActions( // 语法糖
                ['getLiveList', 'getPlayerList'] // 相当于this.$store.dispatch('updateLiveList'),提交这个方法
            ),
            // 获取头部数据
            getHeaderData(){
                let self = this;
                let data = {
                    topNav: [
                        {id: '1', name: '赛事承办', url: 'https://www.baidu.com/'},
                        {id: '2', name: '在线订票', url: 'https://blog.csdn.net/qq_29326717'},
                        {id: '3', name: '特卫预约', url: 'https://www.baidu.com/'},
                        {id: '4', name: '武术培训', url: 'https://www.baidu.com/'},
                        {id: 'managerSys', name: '后台管理', url: '/liveManager/liveList'},
                    ],
                    stockCode: '870431',
                    citys: [
                        {id: '1', name: '北京', url: 'https://www.baidu.com/'},
                        {id: '2', name: '天津', url: 'https://www.baidu.com/'},
                        {id: '3', name: '太原', url: 'https://www.baidu.com/'},
                        {id: '4', name: '山东', url: 'https://www.baidu.com/'},
                        {id: '5', name: '广东', url: 'https://www.baidu.com/'},
                        {id: '6', name: '湖南', url: 'https://www.baidu.com/'},
                        {id: '7', name: '长沙', url: 'https://www.baidu.com/'},
                        {id: '8', name: '呼和浩特', url: 'https://www.baidu.com/'},
                        {id: '9', name: '乌鲁木齐', url: 'https://www.baidu.com/'},
                    ],
                };
                self.headerData = data;
                // headerData.topNav
            },
            // 点击头部导航
            clickHeaderNav(item){
                let self = this;
                if(item.id == 'managerSys'){
                    self.$router.push({
                        path: item.url,
                        query: {}
                    });
                }else{
                    window.open(item.url, '_blank')
                }
                
            },
            // 点击头部城市
            clickHeaderCity(item){
                let self = this;
                window.open(item.url, '_blank')
            },
            // 收藏
            addFavorite(){
                let self = this;
                let url = window.location;
                let title = '鑫度武术官方网站'; 
                let ua = navigator.userAgent.toLowerCase();
                if (ua.indexOf("360se") > -1) {
                    self.$message({ message: '由于360浏览器功能限制，请按 Ctrl+D 手动收藏！', type: 'warning' });
                }else if (ua.indexOf("msie 8") > -1) {
                    window.external.AddToFavoritesBar(url, title); // IE8
                }else if (document.all) {
                    try{
                        window.external.addFavorite(url, title);
                    }catch(e){
                        self.$message({ message: '您的浏览器不支持,请按 Ctrl+D 手动收藏!', type: 'warning' });
                    }
                }else if (window.sidebar) {
                    window.sidebar.addPanel(title, url, "");
                }else {
                    self.$message({ message: '您的浏览器不支持,请按 Ctrl+D 手动收藏!', type: 'warning' });
                }
            },
            // 生成二维码
            createDownAppCode(){
                let self = this;
                new QRCode(self.$refs.downAppCode, {
                    text: 'https://www.baidu.com',
                    width: 100,
                    height: 100,
                    colorDark: '#333333', //二维码颜色
                    colorLight: '#ffffff', //二维码背景色
                    correctLevel: QRCode.CorrectLevel.L // 容错率，L/M/H
                });
            },
            // 鼠标移入下载APP
            mouseoverDownApp(){
                let self = this;
                self.showDownAppCode = true;
            },
            // 鼠标移出下载APP
            mouseoutDownApp(){
                let self = this;
                self.showDownAppCode = false;
            },
            // 获取菜单
            getMenus(){
                let self = this;
                self.$http.get('/apis/kungfuChina/getMenus').then(res => {
                    let d = res.data.data;
                    self.menus = d;
                }).catch(err => {
                    console.log(err);
                });
                // let data = [
                //     {id: '1', name: '资讯', url: 'https://www.baidu.com/'},
                //     {id: '2', name: '特卫', url: 'https://blog.csdn.net/qq_29326717'},
                //     {id: '3', name: '门票', url: 'https://www.baidu.com/'},
                //     {id: '4', name: '人物', url: 'https://www.baidu.com/'},
                //     {id: '5', name: '影视', url: 'https://www.baidu.com/'},
                //     {id: '6', name: '阅读', url: 'https://www.baidu.com/'},
                //     {id: '7', name: '智库', url: 'https://www.baidu.com/'},
                //     {id: '8', name: '俱乐部', url: 'https://www.baidu.com/'},
                //     {id: '9', name: '赛事', url: 'https://www.baidu.com/'},
                //     {id: '10', name: '演艺', url: 'https://www.baidu.com/'},
                //     {id: '11', name: '学堂', url: 'https://www.baidu.com/'},
                //     {id: '12', name: '直播', url: 'https://www.baidu.com/'},
                //     {id: '13', name: '图片', url: 'https://www.baidu.com/'},
                //     {id: '14', name: '访谈', url: 'https://www.baidu.com/'},
                //     {id: '15', name: '养生', url: 'https://www.baidu.com/'},
                //     {id: '16', name: '武校', url: 'https://www.baidu.com/'},
                //     {id: '17', name: '资讯', url: 'https://www.baidu.com/'},
                //     {id: '18', name: '特卫', url: 'https://www.baidu.com/'},
                //     {id: '19', name: '门票', url: 'https://www.baidu.com/'},
                //     {id: '20', name: '人物', url: 'https://www.baidu.com/'},
                //     {id: '21', name: '影视', url: 'https://www.baidu.com/'},
                //     {id: '22', name: '阅读', url: 'https://www.baidu.com/'},
                //     {id: '23', name: '智库', url: 'https://www.baidu.com/'},
                //     {id: '24', name: '俱乐部', url: 'https://www.baidu.com/'},
                //     {id: '25', name: '赛事', url: 'https://www.baidu.com/'},
                //     {id: '26', name: '演艺', url: 'https://www.baidu.com/'},
                //     {id: '27', name: '学堂', url: 'https://www.baidu.com/'},
                //     {id: '28', name: '直播', url: 'https://www.baidu.com/'},
                //     {id: '29', name: '图片', url: 'https://www.baidu.com/'},
                //     {id: '30', name: '访谈', url: 'https://www.baidu.com/'},
                // ];
                // self.menus = data;
            },
            // 获取新闻列表
            getNewsList(){
                let self = this;
                self.$http.get('/apis/kungfuChina/getNewsList').then(res => {
                    let d = res.data;
                    self.newsList = d;
                }).catch(err => {
                    console.log(err);
                });
                // let data = [
                //     {id: '1', title: '国际赛事：西鑫度武术俱乐部以中央电视台和中国武术职业联盟为平台，将传承发扬中国武术的搏击技术技法', link: 'https://www.baidu.com/'},
                //     {id: '2', title: '国内赛事：合职业中专坐落于陕西西安市，是一所国家承认学历的新型职业技能学校，学校于2015年开设的运动训练专', link: 'https://www.baidu.com/'},
                //     {id: '3', title: '2015年开设的运动训练专业是经西安市教育部门批准的特色专业，地处西安市中心钟楼商业区，交通', link: 'https://www.baidu.com/'},
                //     {id: '4', title: '发展传统武术为已任，旨在打造具有“山西领先、全国一流、世界知名”的文化产业。', link: 'https://www.baidu.com/'},
                //     {id: '5', title: '中央电视台和中国武术职业联盟为平台，将传承发扬中国武术的搏击技术技法、搜索', link: 'https://www.baidu.com/'},
                //     {id: '6', title: '2011-2012WMA 中国武术职业联赛(团体赛)', link: 'https://www.baidu.com/'},
                //     {id: '7', title: '中国武术职业联赛明星赛鑫度张开印夺冠', link: 'https://www.baidu.com/'},
                //     {id: '8', title: '教授，中共党员，国家级教练员。研究生学历。现任西安体育学院系副主任', link: 'https://www.baidu.com/'},
                //     {id: '9', title: '世界及全国比赛中斩获各项大奖', link: 'https://www.baidu.com/'},
                //     {id: '10', title: '“精武门”综合格斗职业联赛（2016-2017赛季）近期将于湖北卫视播出，敬请期待！', link: 'https://www.baidu.com/'},
                // ];
                // self.newsList = data;
            },
            // 页面跳转
            goPage(url){
                window.open(url, '_blank')
            },
            // 获取定制赛事
            getMadeMatchList(){
                let self = this;
                let data = [ 
                    { id: 'M01', player1: '选手A', player2: '选手B', thumbsUp: 123 },
                    { id: 'M02', player1: '选手B', player2: '选手I', thumbsUp: 235 },
                    { id: 'M03', player1: '选手Y', player2: '选手T', thumbsUp: 467 },
                    { id: 'M04', player1: '选手M', player2: '选手F', thumbsUp: 6 },
                    { id: 'M05', player1: '选手Z', player2: '选手Y', thumbsUp: 456 },
                ];
                self.madeMatchList = data;
            },
            // 获取排行榜
            getPlayerRank(){
                let self = this;
                let data = [
                    {id: '1', name: '张三', winNum: '12', synopsis: '中国武术职业联赛明星赛鑫度张开印夺冠', praiseNum: '568'},
                    {id: '2', name: '李四', winNum: '43', synopsis: '中国武术职业联赛明星赛鑫度张开印夺冠', praiseNum: '34'},
                    {id: '3', name: '张三', winNum: '66', synopsis: '中国武术职业联赛明星赛鑫度张开印夺冠', praiseNum: '67'},
                    {id: '4', name: '王五', winNum: '23', synopsis: '中国武术职业联赛明星赛鑫度张开印夺冠', praiseNum: '8908'},
                    {id: '5', name: '赵六', winNum: '43', synopsis: '中国武术职业联赛明星赛鑫度张开印夺冠', praiseNum: '56'},
                    {id: '6', name: '田七', winNum: '64', synopsis: '中国武术职业联赛明星赛鑫度张开印夺冠', praiseNum: '66'},
                    {id: '7', name: '小八', winNum: '54', synopsis: '中国武术职业联赛明星赛鑫度张开印夺冠', praiseNum: '55'},
                    {id: '8', name: '九九', winNum: '21', synopsis: '中国武术职业联赛明星赛鑫度张开印夺冠', praiseNum: '77'},
                    {id: '9', name: '小十', winNum: '87', synopsis: '中国武术职业联赛明星赛鑫度张开印夺冠', praiseNum: '88'},
                    {id: '10', name: '十一', winNum: '89', synopsis: '中国武术职业联赛明星赛鑫度张开印夺冠', praiseNum: '99'},
                ];
                self.playerRank = data;
            },
            // 获取优秀学员
            getExcellentAthlete(){
                let self = this;
                let data = [ 
                    { id: 'A01', name: '选手A', img: '' },
                    { id: 'A02', name: '选手B', img: '' },
                    { id: 'A03', name: '选手Y', img: '' },
                    { id: 'A04', name: '选手M', img: '' },
                    { id: 'A05', name: '选手Z', img: '' },
                ];
                self.excellentAthlete = data;
            },
            // 获取更多分类
            getMoreClassify(){
                let self = this;
                let data = [
                    {
                        classify: '功夫资讯',
                        list: [ 
                            { id: 'MC01', title: '《武林笼中对》严启慧与梁娜上演金腰带卫冕战', img: '' },
                            { id: 'MC02', title: '恭喜运城队在省运会取得三金两银三铜的骄人成绩', img: '' },
                            { id: 'MC03', title: '运城市散打比赛丨鑫度武术获得团体总分第一名', img: '' },
                            { id: 'MC04', title: '哲学是武术之本', img: '' },
                            { id: 'MC05', title: '喜讯：运城队九名队员八名进前三，等待冠亚角逐', img: '' },
                            { id: 'MC05', title: '鑫度武术代表我市参加省第十五届运动会武术散打比赛', img: '' },
                        ]
                    },
                    {
                        classify: '中国功夫',
                        list: [ 
                            { id: 'MC01', title: '《武林笼中对》严启慧与梁娜上演金腰带卫冕战', img: '' },
                            { id: 'MC02', title: '恭喜运城队在省运会取得三金两银三铜的骄人成绩', img: '' },
                            { id: 'MC03', title: '运城市散打比赛丨鑫度武术获得团体总分第一名', img: '' },
                            { id: 'MC04', title: '哲学是武术之本', img: '' },
                            { id: 'MC05', title: '喜讯：运城队九名队员八名进前三，等待冠亚角逐', img: '' },
                            { id: 'MC05', title: '鑫度武术代表我市参加省第十五届运动会武术散打比赛', img: '' },
                        ]
                    },
                    {
                        classify: '世界功夫',
                        list: [ 
                            { id: 'MC01', title: '《武林笼中对》严启慧与梁娜上演金腰带卫冕战', img: '' },
                            { id: 'MC02', title: '恭喜运城队在省运会取得三金两银三铜的骄人成绩', img: '' },
                            { id: 'MC03', title: '运城市散打比赛丨鑫度武术获得团体总分第一名', img: '' },
                            { id: 'MC04', title: '哲学是武术之本', img: '' },
                            { id: 'MC05', title: '喜讯：运城队九名队员八名进前三，等待冠亚角逐', img: '' },
                            { id: 'MC05', title: '鑫度武术代表我市参加省第十五届运动会武术散打比赛', img: '' },
                        ]
                    },
                    // {
                    //     classify: '功夫探索',
                    //     list: [ 
                    //         { id: 'MC01', title: '《武林笼中对》严启慧与梁娜上演金腰带卫冕战', img: '' },
                    //         { id: 'MC02', title: '恭喜运城队在省运会取得三金两银三铜的骄人成绩', img: '' },
                    //         { id: 'MC03', title: '运城市散打比赛丨鑫度武术获得团体总分第一名', img: '' },
                    //         { id: 'MC04', title: '哲学是武术之本', img: '' },
                    //         { id: 'MC05', title: '喜讯：运城队九名队员八名进前三，等待冠亚角逐', img: '' },
                    //         { id: 'MC05', title: '鑫度武术代表我市参加省第十五届运动会武术散打比赛', img: '' },
                    //     ]
                    // },
                ];
                self.moreClassify = data;
            },





        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
    @import "./index.less";
    /* .header_bg{
        background-image: linear-gradient(to right, #54000F , #510000), url(./../../../assets/KungFuChina/28.png);
    } */
</style>