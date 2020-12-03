<template src="./index.html"></template>

<script>
    import header1 from './../header1/index.vue'
    import footer1 from './../footer1/index.vue'
    import ad1024 from './../commons/ad1024.vue'
    import adRow3 from './../commons/adRow3.vue'
    import SparkLine from './../commons/SparkLine.vue'
    import adDemo from './../commons/adDemo.vue'
    export default {
        components: {
            'my-header': header1,
            'my-footer': footer1,
            'ad-1024': ad1024,
            'ad-row-3': adRow3,
            'spark-line': SparkLine,
            'ad-demo': adDemo,
        },
        data(){
            return {
                menus: [],
                twoBevel1: [],
                twoBevel2: [],
                ad1024: require('@/assets/KungFuChina/ad01.png'),
                newsList: [],
                carousel: [
                    {id: '1', img: require('@/assets/KungFuChina/01.png'), title: '蓬佩奥被指或与伊朗专家遇害有关'},
                    {id: '2', img: require('@/assets/KungFuChina/02.png'), title: '新加坡新生男婴自带新冠抗体'},
                    {id: '3', img: require('@/assets/KungFuChina/03.png'), title: '中国3千万男光棍?人口普查将揭晓'},
                ],
                icon01: require('@/assets/KungFuChina/06.png'),
                icon02: require('@/assets/KungFuChina/07.png'),
                playerRank: [],
                icon03: require('@/assets/KungFuChina/10.png'),
                icon04: require('@/assets/KungFuChina/09.png'),
                icon05: require('@/assets/KungFuChina/08.png'),
                icon06: require('@/assets/KungFuChina/11.png'),
                madeMatchList: [],
                excellentAthlete: [],
                moreClassify: [],
            };
        },
        created(){
            this.getMenus();
            this.getTwoBevel();
            this.getNewsList();
            this.getPlayerRank();
            this.getMadeMatchList();
            this.getExcellentAthlete();
            this.getMoreClassify();
        },
        mounted(){},
        methods: {
            // 获取导航
            getMenus(){
                let self = this;
                let data = [
                    {id: '1', name: '功夫资讯', link: ''},
                    {id: '2', name: '中国功夫', link: ''},
                    {id: '3', name: '世界功夫', link: ''},
                    {id: '4', name: '功夫探索', link: ''},
                    {id: '5', name: '武术讲坛', link: ''},
                    {id: '6', name: '武术养生', link: ''},
                    {id: '7', name: '功夫智库', link: ''},
                    {id: '8', name: '功夫商城', link: ''},
                    {id: '9', name: '学习机构', link: ''},
                    {id: '10', name: '赛事直播', link: ''},
                    {id: '11', name: '功夫视频', link: ''},
                    {id: '12', name: '功夫图片', link: ''},
                    {id: '13', name: '武术演艺', link: ''},
                    {id: '14', name: '武术名家', link: ''},
                    {id: '15', name: '功夫生活', link: ''},
                    {id: '16', name: '武术专题', link: ''},
                    {id: '17', name: '武术器材', link: ''},
                    {id: '18', name: '武术社区', link: ''},
                ];
                self.menus = data;
            },
            // 获取推荐菜单
            getTwoBevel(){
                let self = this;
                let data1 = [
                    {id: '1', name: '流派介绍', link: ''},
                    {id: '2', name: '武德风范', link: ''},
                    {id: '3', name: '健康养身', link: ''},
                    {id: '4', name: '防身自卫', link: ''},
                    {id: '5', name: '功夫影视', link: ''},
                    {id: '6', name: '海外功夫', link: ''},
                    {id: '7', name: '武术文化', link: ''},
                    {id: '8', name: '武术百科', link: ''},
                    {id: '9', name: '武术教学', link: ''},
                ];
                let data2 = [
                    {id: '10', name: '武术社区', link: ''},
                    {id: '11', name: '功夫视频', link: ''},
                    {id: '12', name: '功夫生活', link: ''},
                    {id: '13', name: '武术演艺', link: ''},
                    {id: '14', name: '武术教学', link: ''},
                    {id: '15', name: '功夫生活', link: ''},
                    {id: '16', name: '武术教学', link: ''},
                    {id: '17', name: '武术器材', link: ''},
                    {id: '18', name: '健康养身', link: ''},
                ];
                self.twoBevel1 = data1;
                self.twoBevel2 = data2;
            },
            // 获取新闻列表
            getNewsList(){
                let self = this;
                let data = [
                    {id: '1', title: '西鑫度武术俱乐部以中央电视台和中国武术职业联盟为平台，将传承发扬中国武术的搏击技术技法', link: ''},
                    {id: '2', title: '合职业中专坐落于陕西西安市，是一所国家承认学历的新型职业技能学校，学校于2015年开设的运动训练专', link: ''},
                    {id: '3', title: '2015年开设的运动训练专业是经西安市教育部门批准的特色专业，地处西安市中心钟楼商业区，交通', link: ''},
                    {id: '4', title: '发展传统武术为已任，旨在打造具有“山西领先、全国一流、世界知名”的文化产业。', link: ''},
                    {id: '5', title: '中央电视台和中国武术职业联盟为平台，将传承发扬中国武术的搏击技术技法、搜索', link: ''},
                    {id: '6', title: '2011-2012WMA 中国武术职业联赛(团体赛)', link: ''},
                    {id: '7', title: '中国武术职业联赛明星赛鑫度张开印夺冠', link: ''},
                    {id: '8', title: '教授，中共党员，国家级教练员。研究生学历。现任西安体育学院系副主任', link: ''},
                    {id: '9', title: '世界及全国比赛中斩获各项大奖', link: ''},
                    {id: '10', title: '“精武门”综合格斗职业联赛（2016-2017赛季）近期将于湖北卫视播出，敬请期待！', link: ''},
                ];
                self.newsList = data;
            },
            // 获取轮播列表
            // getNewsList(){},
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
                    {
                        classify: '功夫探索',
                        list: [ 
                            { id: 'MC01', title: '《武林笼中对》严启慧与梁娜上演金腰带卫冕战', img: '' },
                            { id: 'MC02', title: '恭喜运城队在省运会取得三金两银三铜的骄人成绩', img: '' },
                            { id: 'MC03', title: '运城市散打比赛丨鑫度武术获得团体总分第一名', img: '' },
                            { id: 'MC04', title: '哲学是武术之本', img: '' },
                            { id: 'MC05', title: '喜讯：运城队九名队员八名进前三，等待冠亚角逐', img: '' },
                            { id: 'MC05', title: '鑫度武术代表我市参加省第十五届运动会武术散打比赛', img: '' },
                        ]
                    },
                ];
                self.moreClassify = data;
            },
        }
    }
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
    @import "./index.less";
</style>

<!-- <style lang="less" rel="stylesheet/less" type="text/less" scoped>
.kung_fu_china_home{
    padding: 1px;
    .el-main{ padding: 0; }
    .menus_wrap{
        height: 72px; background-color: #D2393C; padding: 6px 15px;
        &>ul{
            zoom: 1; display: inline-block; height: 100%; width: 100%; margin: 0 auto; padding: 0;
        }
        .menu{
            float: left; position: relative; height: 30px; line-height: 30px; font-size: 14px; text-align: center; padding: 0 21px;
        }
        .i_link{
            position: relative; font-size: 15px; color: #fff; font-weight: bold; font-family: "宋体","YouYuan"; cursor: pointer;
            &:hover{
                color: #fff; 
                text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de;
            }
        }
    }
    .two_bevel_wrap{
        margin: 5px auto; background-color: #EEECED; height: 30px; padding: 0 20px;
        .i_link{
            display: inline-block; padding: 0 23px; line-height: 30px; font-weight: 400; font-size: 15px;
        }
    }
    .news_list_wrap{ padding-right: 20px; }
    .news_list{
        padding: 5px 0; overflow: hidden; font-size: 16px;
        &>li{ 
            padding: 6px 0; 
            &:nth-child(1) a{
                font-weight: bold; color: #BE0433;
            }
        }
        a{
            &:hover{ color: #F31616; font-weight: 600; }
        }
    }
    .new_carousel{
        text-align: center; 
        h3 {
            color: #475669; font-size: 100px; opacity: 0.75; line-height: 350px; margin: 0;
        }
        .el-carousel__item:nth-child(2n) { background-color: #99a9bf; }
        .el-carousel__item:nth-child(2n+1) { background-color: #d3dce6; }
    }
    .modal_title_wrap{
        height: 30px; line-height: 30px; margin-bottom: 10px;
        &>img{ vertical-align: middle; margin-right: 5px; }
        .el-link{ font-size: 18px; font-weight: 600; color: #333; }
    }
    .live_player_rank{
        .live_wrap{ padding: 10px; color: #585757; font-size: 12px; }
        .live_cover{ height: 220px; line-height: 220px; text-align: center; font-size: 60px; color: #9a9a9a; border-radius: 5px; background-color: #e8e8e8; }
        .live_msg{ padding: 1px 10px; }
        .live_time{ 
            margin: 2px 0;  line-height: 25px; 
            .time{ color: #9A9A9A; }
        }
        .live_title{ margin: 2px 0; font-size: 16px; line-height: 25px; }
        .live_player{ margin: 2px 0; }
        .live_place{ margin: 2px 0; color: #9A9A9A; text-align: right; font-size: 12px; padding: 0 10px; }
        .live_synopsis{ margin: 2px 0; line-height: 25px; height: 100px; overflow: hidden; text-indent: 2em; }
        .player_rank{ font-size: 12px; }
        .player_info{
            cursor: pointer;
            &:hover{ color: rgba(221,68,73,0.8); }
        }
        .player{ 
            padding: 6px 1px; 
            .name{ font-weight: 600; color: #D2393C; }
        }
        .player_synopsis{ padding: 3px 0; }
        .praise_num_img{ width: 15px; height: 15px;}
        .praise_num{ color: #FF7700; }
        .bodyguard_wrap{
            li{
                width: 120px; height: 140px; margin-right: 10px; float: left; border-radius: 5px;
                background-color: #e8e8e8; color: #9a9a9a; border: 1px solid #EEEEEE; position: relative;
                line-height: 140px; text-align: center; overflow: hidden;
                &::before{ content: "特为服务"; font-size: 18px; }
                &:hover{
                    border: 2px solid #089AF6; line-height: 136px;
                    p{ background-color: #089AF6; color: #fff; }
                }
                p{ height: 25px; line-height: 25px; background-color: #fff; position: absolute; width: 100%; bottom: 0; }
            }
        }
        .ad{
            height: 80px; background-color: #9cd6f4; margin-top: 30px;
            &:before{
                content: "广告"; line-height: 80px; text-align: center; width: 100%; color: #fff; font-size: 30px; font-weight: bold;
            }
            .links_font{
                background-color: rgba(0,0,0,0.8); color: #fff; position: absolute; bottom: 1px; right: 1px; 
                padding: 3px 6px; border-radius: 10px 0 0 0; font-size: 12px;
            }
        }
    }
}
</style> -->