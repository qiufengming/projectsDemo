<template>
    <div class="links_wrap">
        <el-row class="link_1024">
            <el-col :span="8" class="ad_wrap ad_1">
                <div class="p_r">
                    <h2>广告1</h2>
                    <span class="links_font" style="display: block;">广告</span>
                </div>
            </el-col>
            <el-col :span="8" class="ad_wrap ad_2">
                <div class="p_r">
                    <h2>广告2</h2>
                    <span class="links_font" style="display: block;">广告</span>
                </div>
            </el-col>
            <el-col :span="8" class="ad_wrap ad_3">
                <div class="p_r">
                    <h2>广告3</h2>
                    <span class="links_font" style="display: block;">广告</span>
                </div>
            </el-col>
        </el-row>
        <!-- <div class="link_1024">
            
            <img :src="ad1024" alt="LOGO" class="logo">
            <span class="links_font" style="display: block;">广告</span>
        </div> -->
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                ad1024: require('@/assets/KungFuChina/ad01.png'),
            };
        },
        created(){ },
        mounted(){},
        methods: {
            // 获取导航
        }
    }
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.links_wrap{
    margin: 10px auto;;
    .link_1024{
        height: 130px; overflow: hidden;
    }
    .ad_wrap{
        position: relative; text-align: center;
        h2{ height: 130px; line-height: 130px; color: #fff; background-color: #9cd6f4; }
    }
    .ad_1{ 
        padding-right: 8px; 
        /* h2{ background-color: #82e444; } */
    }
    .ad_2{
        padding: 0 8px;
        /* h2{ background-color: #ec5a5a; } */
    }
    .ad_3{
        padding-left: 8px;
        /* h2{ background-color: #69dfef; } */
    }
    .links_font{
        background-color: rgba(0,0,0,0.8);
        color: #fff;
        position: absolute;
        bottom: 1px;
        right: 1px;
        padding: 3px 6px;
        border-radius: 10px 0 0 0;
        font-size: 12px;
    }
}
</style>
