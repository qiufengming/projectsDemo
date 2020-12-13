<template>
    <div class="live_manager">
        <router-view/>
        <el-container>
            <el-header class="header">
                <el-row>
                    <el-col :span="4" class="system_name">
                        <span>功夫中国后台管理系统</span>
                    </el-col>
                    <el-col :span="16" class="nav_horizontal_wrap">
                        <el-menu :default-active="activeNavH" class="nav_horizontal" mode="horizontal" @select="selectNavH">
                            <el-menu-item index="1">首页</el-menu-item>
                            <el-menu-item index="2">直播</el-menu-item>
                            <el-menu-item index="3">门票</el-menu-item>
                            <el-menu-item index="4">安保</el-menu-item>
                            <el-menu-item index="5">新闻</el-menu-item>
                            <el-menu-item index="6">内容</el-menu-item>
                            <el-menu-item index="7">会员</el-menu-item>
                            <el-menu-item index="8">系统</el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="2" class="date_wrap">
                        <p>星期日</p>
                        <p>2020年12月13日</p>
                    </el-col>
                    <el-col :span="2" class="user_wrap">
                        <span class="head_portrait"></span>
                    </el-col>
                </el-row>
            </el-header>
            <el-row class="welcome p_r">
                <span>您好，admin！欢迎登陆功夫中国后台管理系统</span>
                <el-button type="text" class="go_portal p_a">去门户网站<i class="el-icon-d-arrow-right"></i></el-button>
            </el-row>
            <el-container class="container">
                <el-aside width="200px">
                    <el-menu :default-active="activeNavV" class="nav_vertical">
                        <el-menu-item :index="item.id" v-for="item in navVerticalData" :key="item.id">
                            <span slot="title">{{ item.name }}</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                activeNavH: '1',
                activeNavV: '1',
                navVerticalData: [],
            };
        },
        created(){
            let self = this;
            self.getNavVerticalData(0)
        },
        mounted(){},
        methods: {
            // 点击横向导航
            selectNavH(key, keyPath){
                let self = this;
                
                self.getNavVerticalData(key-1)
            },
            // 获取二级导航
            getNavVerticalData(index){
                let self = this;
                let i = index || '0';
                let data = [
                    [
                        {id: '1', name: '首页', routeName: '', path: ''}
                    ],
                    [
                        {id: '1', name: '直播列表', routeName: '', path: ''},
                        {id: '2', name: '礼物列表', routeName: '', path: ''},
                        {id: '3', name: '比赛选手', routeName: '', path: ''},
                        {id: '4', name: '选手所获得礼物', routeName: '', path: ''},
                        {id: '5', name: '门票信息列表', routeName: '', path: ''},
                        {id: '6', name: '点赞信息表', routeName: '', path: ''},
                        {id: '7', name: '评论信息表', routeName: '', path: ''},
                    ],
                    [
                        {id: '1', name: '门票的列表', routeName: '', path: ''}
                    ],
                    [
                        {id: '1', name: '安保的列表', routeName: '', path: ''}
                    ],
                    [
                        {id: '1', name: '新闻的列表', routeName: '', path: ''}
                    ],
                    [
                        {id: '1', name: '内容的列表', routeName: '', path: ''}
                    ],
                    [
                        {id: '1', name: '会员的列表', routeName: '', path: ''}
                    ],
                    [
                        {id: '1', name: '系统的列表', routeName: '', path: ''}
                    ],
                ];
                self.navVerticalData = data[i];
                self.$nextTick(() => {
                    self.activeNavV = '1';
                })
            },
        }
    }
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.live_manager{
    padding: 0px;
    .header{
        background-color: #2F4D8D; color: #fff; font-size: 12px; border-bottom: 5px solid #1F325C;
        .system_name{
            line-height: 60px; font-size: 18px; font-weight: 600; text-align: right;
        }
        .nav_horizontal_wrap{
            padding: 15px 10px 0;
        }
        .nav_horizontal{
            background-color: inherit; border-bottom: 0;
        }
        .el-menu-item{
            color: #fff; height: 40px; line-height: 40px; border-radius: 6px 6px 0 0; border-bottom: 0;
            &.is-active{
                border-bottom: 0; background-color: #1F325C;
                &:hover{
                    background-color: #1F325C; font-weight: normal;
                }
            }
            &:hover{
                background-color: transparent; font-weight: 600;
            }
        }
        .date_wrap{
            text-align: center; padding: 12px 0;
        }
        .user_wrap{
            text-align: center; padding: 10px 0;
        }
    }
    .welcome{
        font-size: 12px; height: 30px; line-height: 30px; padding-left: 200px; color: #2F4D8D; background-color: #DEE4ED;
        .go_portal{
            color: #EC6969; right: 10px; padding: 7px 0; text-decoration: underline;
        }
    }
    .container{
        background-color: #DEE4ED; min-height: calc(100vh - 95px);
        .nav_vertical{
            height: 100%; background-color: #DEE4ED; color: #2F4D8D; border-right: 0;
            .el-menu-item{
                color: #2F4D8D; 
                &.is-active{ background-color: #ffffff; }
            }
        }
        .el-main{
            background-color: #ffffff;
        }
    }
}
</style>
