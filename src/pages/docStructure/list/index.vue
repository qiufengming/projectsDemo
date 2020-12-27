<template src="./index.html"></template>

<script>
    import { mapMutations, mapActions, mapGetters, mapState } from 'vuex' 

    export default {
        components: {
        },
        data(){
            return {
                activeName: '1',
                lists: [],
            };
        },
        computed: {
        },
        created(){
            this.getDocList();
        },
        mounted(){
            let self = this;
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            // 获取文档列表
            getDocList(){
                let self= this;
                self.$http.get('./static/data/docStructureList.json').then(res => {
                    let d = res.data;
                    self.lists = d;
                }).catch(err => {
                    console.log(err);
                });
            },
            // 编辑
            edit(i, row){
                let self= this;
            },
            // 删除
            del(i, row){
                let self= this;
            },




        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
    @import "./index.less";
</style>