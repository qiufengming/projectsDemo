<template src="./index.html"></template>

<script>
    // import Vue from 'vue';
    // import echarts from 'echarts';
    // Vue.prototype.$echarts = echarts;
    import header2 from './../commons/header2.vue'
    import footer1 from './../footer1/index.vue'

    import ad1024 from './../commons/ad1024.vue'
    import adRow3 from './../commons/adRow3.vue'
    import SparkLine from './../commons/SparkLine.vue'
    import adDemo from './../commons/adDemo.vue'

    export default {
        name: 'LiveRoom',
        components: {
            'my-header': header2,
            'my-footer': footer1,
            'ad-1024': ad1024,
            'ad-row-3': adRow3,
            'spark-line': SparkLine,
            'ad-demo': adDemo,
        },
        data(){
            return {
                liveInfo: {},
                emojiList: [],
                inputCont: '',
                showEmoji: false,
                chatList: [],
                icon01: require('@/assets/KungFuChina/10.png'),
                icon02: require('@/assets/KungFuChina/24.png'),
                contributes1H: 90,
                contributes2H: 90,
            };
        },
        created(){
            this.getLiveInfo();
            this.getEmojiData();
            this.getChatroomCont();
            // this.getSupportRateCartogram();


        },
        mounted(){
            let self = this;
            // self.getSupportRateCartogram();
        },
        methods: {
            // 获取直播信息
            getLiveInfo(){
                let self = this;
                let data = {
                    player1Info: {
                        name: '阿拉斯加',
                        supportNum: '6',
                        myContributes: 156,
                        contributes: [
                            {id: '1', name: '张三', goldNum: '8888'},
                            {id: '2', name: '李四', goldNum: '8899'},
                            {id: '3', name: '王五', goldNum: '8800'},
                            {id: '4', name: '赵六', goldNum: '7894'},
                            {id: '5', name: '小七', goldNum: '7521'},
                            {id: '6', name: '小八', goldNum: '7000'},
                            {id: '7', name: '九九', goldNum: '6688'},
                            {id: '8', name: '小明', goldNum: '6666'},
                            {id: '9', name: '小红', goldNum: '5555'},
                            {id: '10', name: '小兰', goldNum: '5566'}
                        ],
                    },
                    player2Info: {
                        name: '朴春雷腾',
                        supportNum: '8',
                        myContributes: 78,
                        contributes: [
                            {id: '1', name: '小明', goldNum: '8888'},
                            {id: '2', name: '小红', goldNum: '8899'},
                            {id: '3', name: '小七', goldNum: '8800'},
                            {id: '4', name: '九九', goldNum: '7894'},
                            {id: '5', name: '赵六', goldNum: '7521'},
                            {id: '6', name: '小八', goldNum: '7000'},
                            {id: '7', name: '张三', goldNum: '6688'},
                            {id: '8', name: '李四', goldNum: '6666'},
                            {id: '9', name: '王五', goldNum: '5555'},
                            {id: '10', name: '小兰', goldNum: '5566'}
                        ],
                    },
                    liveInfo: {
                        title: '拳王争霸赛',
                        time: '2020-12-05 20:00:00',
                        thumbsupNum: '154',
                        audience: '289',
                    },
                };
                self.liveInfo = data;
            },
            // 鼠标移动到贡献榜
            mouseoverContributes(table){
                let self = this;
            },
            // 支持率统计图
            getSupportRateCartogram(){
                let self = this;
                let myChart = self.$echarts.init(self.$refs['supportRateCartogram']);
                myChart.clear();
                let option = {
                    title : {
                        text: '',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} :<br/> {c} ({d}%)"
                    },
                    legend: {
                        orient: 'horizontal',
                        x: 'center',
                        y:'bottom',
                        data: ['阿拉斯加','朴春雷腾']
                    },
                    series : [
                        {
                            name: '支持率',
                            type: 'pie',
                            radius : '50%',
                            center: ['50%', '50%'],
                            data:[
                                {
                                    value: self.liveInfo.player1Info.supportNum,
                                    name:'阿拉斯加',
                                    itemStyle: {
                                        normal: {
                                            color: '#228EC8'
                                        }
                                    }
                                },
                                {
                                    value: self.liveInfo.player2Info.supportNum,
                                    name:'朴春雷腾',
                                    itemStyle: {
                                        normal: {
                                            color: '#B01416'
                                        }
                                    }
                                },
                            ],
                            label: {
                                normal: {
                                    textStyle: {
                                        /*color: 'rgba(0, 0, 0, 0.9)'*/		                    	
                                    },
                                    //position: 'inner'
                                    //formatter: '<p style="width: 100px;">{b}<p>'
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(0, 0, 0, 0.5)'
                                    },
                                    smooth: 0.2,
                                    length: 5,
                                    length2: 10
                                }
                            },
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
		        };
                myChart.setOption(option);
            },
            // 文字表情包
            getEmojiData(){
                let self = this;
                let data = ["(⌒▽⌒)","（￣▽￣）","(=・ω・=)","(｀・ω・´)","(〜￣△￣)〜","(･∀･)","(°∀°)ﾉ","(￣3￣)","(-_-#)","･*･:≡(　ε:)",
	           "╮(￣▽￣)╭","_(:3」∠)_","( ´_ゝ｀)","←_←","→_→","(&lt;_&lt;)","(&gt;_&gt;)","(;¬_¬)",'("▔□▔)/',"(ﾟДﾟ≡ﾟдﾟ)!?",
	           "Σ(ﾟдﾟ;)","Σ( ￣□￣||)","(´；ω；`)","（/TДT)/","(^・ω・^ )","(｡･ω･｡)","(●￣(ｴ)￣●)","ε=ε=(ノ≧∇≦)ノ","（￣へ￣）","(￣ε(#￣) Σ",
               "ヽ(`Д´)ﾉ","（#-_-)┯━┯","(╯°口°)╯(┴—┴","←◡←","( ♥д♥)","Σ&gt;―(〃°ω°〃)♡→","⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄","(╬ﾟдﾟ)▄︻┻┳═一"];

               self.emojiList = data;
            },
            // 
            choiceEmoji(emoji){
                let self = this;
                self.inputCont = self.inputCont+emoji+'';
            },
            // 
            showHiddenEmojiList(){
                let self = this;
                self.showEmoji = !self.showEmoji;
            },
            // 聊天室清屏
            clearScreen(){
                let self = this;
                self.chatList = [];
            },
            // 发送
            sendChat(){
                let self = this;
                let date = new Date();
                let Y =  date.getFullYear();
                let M =  date.getMonth() + 1;
                let D =  date.getDate();
                let h =  date.getHours();
                let m =  date.getMinutes();
                let s =  date.getSeconds();
                let newData = {
                    id: self.chatList.length, 
                    time: `${Y}-${M}-${D} ${h}:${m}:${s}`, 
                    name: '张三', 
                    cont: self.inputCont
                };
                self.chatList.push(newData);
                self.$nextTick();
            },
            // 获取聊天室内容
            getChatroomCont(){
                let self = this;
                let data = [
                    {id: '1', time: '2020-12-06 21:37:45', name: '小明', cont: '好棒啊~'},
                    {id: '2', time: '2020-12-06 21:37:59', name: '小红', cont: '666~'},
                    {id: '3', time: '2020-12-06 21:38:12', name: '小兰', cont: '233333~'},
                    {id: '4', time: '2020-12-06 21:38:33', name: '拳王粉丝', cont: '支持朴春雷腾'},
                    {id: '5', time: '2020-12-06 21:39:45', name: '哈哈', cont: '阿拉斯加厉害'},
                    {id: '6', time: '2020-12-06 21:40:45', name: '你猜我是谁', cont: '左勾拳'},
                ];
                self.chatList = data;
            },
            //
            changeContent(){
                let self = this;
                let txt = self.inputCont;
                let len = self.inputCont.length;
                if(/.*[\u4e00-\u9fa5]+.*$/.test(txt)){
                    if(len>32){
                        self.inputCont = txt.substring(0,32);
                    }
                }else{
                    if(len>45){
                        self.inputCont = txt.substring(0,45);
                    }
                }
            },

        }
    }
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
    @import "./index.less";
</style>
