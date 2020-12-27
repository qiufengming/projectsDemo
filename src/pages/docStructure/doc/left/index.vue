<template src="./index.html"></template>

<script>
    import { mapMutations, mapActions, mapGetters, mapState } from 'vuex' 

    export default {
        components: {
        },
        data(){
            return {
                filterText: '',
                defaultProps: {
                    children: 'children',
                    label: 'title'
                },
                setChapterDlg: false,
                configTableData: [],
            };
        },
        computed: {
            ...mapGetters({
                tree: 'docStructureDetails/getterChapterTree'
            }),
        },
        watch: {
            filterText(val) {
                this.$refs.chapterTree.filter(val);
            }
        },
        created(){
            let self = this;
            self.testDeepCopy()
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
            // 测试深拷贝
            testDeepCopy(){
                let self= this;
                // 定义变量
                let date = new Date();
                let reg = /hello word/gi;
                let obj = {
                    prop: 'this ia a string',
                    arr: [1, 2, 3],
                    o: {
                        wow: 'aha'
                    },
                    func: function(a,b){
                        console.log(a+','+b)
                    }
                };
                let refer1 = {
                    arr: [1, 2, 3]
                };
                let refer2 = {
                    refer: refer1
                };
                refer1.refer = refer2;
                // 
                var cloneDate = self.$q.deepClone(date, false);
                var cloneReg = self.$q.deepClone(reg, false);
                var cloneObj = self.$q.deepClone(obj, false);
                self.$q.deepClone(refer2, false);
            },
        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
    @import "./index.less";
</style>