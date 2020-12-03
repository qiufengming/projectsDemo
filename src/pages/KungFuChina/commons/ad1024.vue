<template>
    <div class="links_wrap">
        <div class="link_1024">
            <img :src="ad1024" alt="LOGO" class="logo">
            <span class="links_font" style="display: block;">广告</span>
        </div>
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
    position: relative;
    .link_1024{
        height: 100px; overflow: hidden;
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
