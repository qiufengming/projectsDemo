<template>
    <div class="links_wrap" :style="{width: width+'px', height: height+'px'}">
        <div class="link">
            <h2 :style="{width: width+'px', height: height+'px', 'line-height': height+'px', 'background-color': bgColor, color: fontColor}">广告</h2>
            <span class="links_font" style="display: block;">广告</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AdDemo',
        components: {},
        props: {
            width: {
                default: 1024
            },
            height: {
                default: 100
            },
            bgColor: {
                default: '#9cd6f4'
            },
            fontColor: {
                default: '#ffffff'
            },
        },
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
    .link{ 
        width: 100%; height: 100%; position: relative; text-align: center;
    }
    /* h2{ color: #fff; background-color: #9cd6f4; } */
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

