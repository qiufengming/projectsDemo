import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as actions from './actions' // *号是匹配符，匹配这个actions的所有 export function
import * as getters from './getters' 

Vue.use(Vuex)

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    mutations,
    state
})
