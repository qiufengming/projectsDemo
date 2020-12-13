<template>
    <div class="kung_fu_header">
        <div class="top_wrap">
            <el-row class="top w1024">
                <el-col :span="12">
                    <a href="" class="q_btn_text">收藏本站</a>
                    <a href="" class="q_btn_text">网站导航</a>
                </el-col>
                <el-col :span="12" class="t_r">
                    <span>888888@163.com</span>
                    <a href="" class="q_btn_text"><i class="el-icon-mobile-phone"></i>下载APP</a>
                    <a href="http://"></a>
                    <label class="login_register t_c d_ib">
                        <el-link>登录</el-link>
                        <el-link>注册</el-link>
                    </label>
                </el-col>
            </el-row>
        </div>
        
        <el-row class="w1024 logo_search">
            <el-col :span="8" class="logo_wrap">
                <img :src="logo" alt="LOGO" class="logo">
            </el-col>
            <el-col :span="6" class="searcch_wrap">
                <el-input placeholder="赛事、资讯、百科..." v-model="keyword">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <!-- <label class="searcch_input_wrap">
                    <el-input placeholder="赛事、资讯、百科..." v-model="keyword">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </label> -->
            </el-col>
            <el-col :span="4" class="t_c date_wrap">
                <p>{{ today }}</p>
                <p>{{ week }}</p>
            </el-col>
            <el-col :span="6" class="btn_wtap">
                <el-row>
                    <el-col :span="12">
                        <button>赛事承办</button>
                    </el-col>
                    <el-col :span="12">
                        <button>特卫预约</button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <button>在线订票</button>
                    </el-col>
                    <el-col :span="12">
                        <button>武术培训</button>
                    </el-col>
                </el-row>

            </el-col>
            
        </el-row>

        <div class="page_nav">
            <el-row class="nav_wrapper">
                <ul class="nav_menu">
					<li><a href="index.html">功夫中国首页</a></li>
					<li><a href="live_home.html">赛事直播</a></li>
					<li><a href="tickets.html">现场门票</a></li>
					<li><a href="bodyguard.html">特卫预约</a></li>
					<li><a href="studentRecruitment.html">学员招募</a></li>
					<li><a href="investmentMessage.html">招商留言</a></li>
					<li><a href="contactUs.html">联系我们</a></li>						
				</ul>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                logo: require('@/assets/KungFuChina/logo.png'),
                keyword: '',
                today: '',
                week: '',
            };
        },
        created(){
            let self = this;
            self.getToday();
        },
        mounted(){},
        methods: {
            getToday(){
                let self = this;

                let date = new Date();
                let Y =  date.getFullYear();
                let M =  date.getMonth() + 1;
                let D =  date.getDate();
                let h =  date.getHours();
                let m =  date.getMinutes();
                let s =  date.getSeconds();
                let week = date.getDay();
                let weekName = '';
                switch(week){
                    case 0: 
                        weekName = '日'
                        break;
                    case 1: 
                        weekName = '一'
                        break;
                    case 2: 
                        weekName = '二'
                        break;
                    case 3: 
                        weekName = '三'
                        break;
                    case 4: 
                        weekName = '四'
                        break;
                    case 5: 
                        weekName = '五'
                        break;
                    case 6: 
                        weekName = '六'
                        break;
                }
                self.today = `${Y}年${M}月${D}日`;
                self.week = `星期${weekName}`;
            },
        }
    }
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.kung_fu_header{
    position: relative; width: 100%;
    .top_wrap{ height: 42px; line-height: 42px; color: #fff; background-color: #000; z-index: 1; }
    
    .top{
        position: relative; height: 100%; margin: auto;
    }
    .q_btn_text{
        color: #fff; height: 42px; padding: 0 14px; transition: .15s background-color;
        &:hover{ background-color: rgba(255, 255, 255, 0.5); text-decoration: underline; }
    }
    .login_register{
        background-color: #E10336; width: 81px; padding: 0 10px; z-index: 1; height: 42px; line-height: 42px; position: relative;
    }
    .el-link.el-link--default{ color: #fff; }
    .logo_search{ height: 128px; }
    .logo_wrap{ padding-top: 14px; }
    .logo{ width: 300px; }
    .searcch_wrap{ line-height: 128px; padding: 0 2px; }
    .searcch_input_wrap{ width: 250px; }
    .date_wrap{ padding: 19px 1px; }
    .btn_wtap{
        padding-top: 24px;
        button{ width: 105px; height: 30px; margin: 5px; }
    }

    .page_nav{
        width: 100%; margin: 0 auto; margin-top: -4px; height: 46px; background-image: linear-gradient(#898788,#060302);
    }
    .nav_wrapper{
        position: relative; width: 100%; margin: 0 auto; height: 100%;
    }
    .nav_menu{
        zoom: 1; display: inline-block; height: 100%; width: 100%; margin: -4px auto 0; padding: 0; text-align: center;
        li{
            position: relative; height: 46px; line-height: 46px; font-size: 14px; display: inline-block; text-align: center; margin: 0 auto;
        }
        a{
            position: relative; font-size: 20px; color: rgb(255, 255, 255); display: block; font-family: 宋体, SimSun; padding: 0px 22px;
        }
    }
}
</style>