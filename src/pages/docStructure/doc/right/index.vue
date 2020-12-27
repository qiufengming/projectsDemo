<template src="./index.html"></template>

<script>
    import { mapMutations, mapActions, mapGetters, mapState } from 'vuex' 

    export default {
        components: {
        },
        data(){
            return {
            };
        },
        computed: {
            ...mapGetters({
                tree: 'docStructureDetails/getterChapterTree'
            }),
        },
        created(){
            let self = this;
        },
        mounted(){
            let self = this;
        },
        methods: {
            // 树过滤
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            // 打开树的配置dialog
            openTreeCfgDlg(){
                let self= this;
                self.configTableData = self.$q.deepClone(self.tree, false);
                self.setChapterDlg = true;
            },
            // 章节树配置弹窗 编辑
            edit(i, row){
                let self= this;
                self.$set(row, 'isEdit', true);
            },
            // 章节树配置弹窗 删除
            del(i, row){
                let self= this;
            },
            // 章节树配置弹窗 保存配置
            saveTreeConfig(){
                let self= this;
                self.updateChapterTree(self.configTableData);
                self.setChapterDlg = false;
            },
            ...mapMutations({
                updateChapterTree: 'docStructureDetails/updateChapterTree'
            }),
        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
    @import "./index.less";
</style>