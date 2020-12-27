<template>
    <div class="doc_structure">
        <el-header class="header">
            <strong>LOGO</strong>
            <router-link :to="{name: 'projectsList' }" class="f_r toProjectList"> 返回项目列表页 <i class="el-icon-d-arrow-right"></i></router-link>
        </el-header>
        <div class="line"></div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {};
        },
        created(){},
        mounted(){},
        methods: {}
    }
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.doc_structure{
    padding: 0px;
    .header{
        background-color: #409eff; line-height: 60px; color: #fff; 
        &:after{ clear: both; }
        strong{
            font-size: 30px;
        }
        .toProjectList{
            color: #fff;
            &:hover{ text-decoration: underline; }
        }
    }
    .line{
        background-color: #E4E7ED; height: 10px;
    }
}
</style>
