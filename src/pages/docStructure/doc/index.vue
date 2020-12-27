<template src="./index.html"></template>

<script>
    import { mapMutations, mapActions, mapGetters, mapState } from 'vuex' 
    import left from './left'
    import center from './center'
    import right from './right'

    export default {
        components: {
            left: left,
            center: center,
            right: right,
        },
        data(){
            return {
                data: [],
            };
        },
        computed: {
        },
        created(){
            let self = this;
            self.getDocChapter();
        },
        mounted(){
            let self = this;
        },
        methods: {
            // vuex 的 actions
            // 相当于this.$store.dispatch('docStructureDetails/getChapter'),提交这个方法
            ...mapActions({
                getDocChapter: 'docStructureDetails/getChapter'
            }),
            // 获取文档列表
            getDocDetails(){
                let self= this;
                self.$http.get('./static/data/docStructureDetails.json').then(res => {
                    let d = res.data;
                    self.data = d;
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