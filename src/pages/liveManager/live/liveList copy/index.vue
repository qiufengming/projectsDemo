<template src="./index.html"></template>

<script>
    import { mapMutations, mapActions, mapGetters } from 'vuex' 
    import { DefaultForm, Players, LiveList } from './index.js'

    export default {
        components: {},
        data(){
            return {
                isList: true,
                queryFrom: {
                    liveTitle: ''
                },
                listData: [],
                addEditForm: {...DefaultForm},
                playersList: [...Players],
                isEdit: false,
                currLive: {
                    index: 0,
                    id: ''
                },
            };
        },
        computed: {
            ...mapGetters(['getterLiveList', 'getterPlayerList']),
        },
        created(){
            let self = this;
            self.getListData()
            self.getDemoData()
            // vuex
            self.getLiveList()
            self.getPlayerList()

        },
        mounted(){
            let self = this;
            // debugger;
        },
        methods: {
            ...mapActions( // 语法糖
                ['getLiveList', 'getPlayerList', 'updateLiveList', 'updatePlayerList'] // 相当于this.$store.dispatch('updateLiveList'),提交这个方法
            ),
            query(){
                let self = this;
                self.$message({ message: '查询成功', type: 'success' });
            },
            // 获取直播列表数据
            getListData(){
                let self = this;
                self.listData = [...LiveList];
            },
            handleSelectionChange(val){
                let self = this;
            },
            // 编辑
            handleEdit(index, row){
                let self = this;
                self.isEdit = true;
                self.$set(self.currLive, 'index', index);
                self.$set(self.currLive, 'id', row.id);
                self.addEditForm = {...row};
                self.isList = false;
            },
            // 删除
            handleDelete(index, row){},
            // 返回
            goBack(){
                this.isList = true;
            },
            // 新增
            add(){
                let self = this;
                self.isEdit = false;
                self.addEditForm = {...DefaultForm};
                let newId = self.listData[self.listData.length-1].id.replace(/live/ig, '');
                newId = 'live'+(Number(newId)+1);

                self.$set(self.addEditForm, 'id', newId);
                self.isList = false;
            },
            // 保存
            save(){
                let self = this;
                if(self.isEdit){
                    let i = self.currLive.index
                    self.listData[i] = {...self.addEditForm};
                    // self.getLiveList[i] = {...self.addEditForm};
                }else{
                    self.listData.push({...self.addEditForm});
                    self.$nextTick();
                }
                
                self.isList = true;
            },
            // demo
            getDemoData(){
                let self = this;
                self.$http.get('./static/data/demo.json').then(res => {
                }).catch(e => {
                });
            },
        }
    }
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
    @import "./index.less";
</style>