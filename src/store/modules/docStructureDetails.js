import axios from 'axios'
import QFM from '@/script/common.js'

export default {
    namespaced: true, // 使用命名空间，这样只在局部使用
    state: {
        test1: [],
        chapterAll: [],
        chapterTree: [],
        currChapter: {},
    },
    getters: {
        test1: state => {
            return state.test1;
        },
        test2: (state, getters) => {
            // getters中可以传入第二个参数就是getters，然后通过这样使用其它getter。
            // 当然getters也可以传入根节点状态和getters
            let a = getters.test1;
            return a;
        },
        test3: (state, getters, rootState, rootGetters) => {
            // 在这个模块的 getter 中，`getters` 被局部化了
            // 可以使用 getter 的第四个参数来调用 `rootGetters`
            return state.test1;
        },
        getterChapterAll: state => {
            return state.chapterAll;
        },
        getterChapterTree: state => {
            return state.chapterTree;
        },
        getterCurrChapter: state => {
            return state.currChapter;
        },
    },
    mutations: {
        updateChapterAll(state, data){
            state.chapterAll = data;
        },
        updateCurrChapter(state, data){
            state.currChapter = data;
        },
        updateChapterTree(state, data){
            state.chapterTree = data;
        },
    },
    actions: {
        // 有命名空间提交方式，类似this.$store.dispatch("user/getAllUserList");
        test1(context, _this){
            // 局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：
        },
        async test2(context, object){
            // context包含的参数：commit,dispatch,getters,rootGetters,rootState,state

            // actions中调用其它action
            context.dispatch('test1', object._this)
        },
        // 获取章节
        getChapter(context, url='./static/data/docStructureDetails.json'){
            axios.get(url).then(res => {
                let d = res.data;
                let chapterTree = QFM.objInsertChild(d.chapter)
                context.commit('updateChapterAll', d)
                context.commit('updateChapterTree', chapterTree)
                context.commit('updateCurrChapter', chapterTree[0])
            }).catch(err => {
                console.log('********************获取文档结构化中的文档详情数据报错********************');
                console.log(err);
            })
        }

    }
}

function sortArrObj(property){
    return function(a, b){
        let val1 = a[property];
        let val2 = b[property];
        return val1 - val2;
    }
}