import * as types from './mutation-types'

// 定义所需的 mutations
const mutations = {
    //工具箱里的签名解析
    //PERMISSION_DATA 书写方便，便于管理，通常有mutation-types做关联
    //store 是当前状态树 state.js 的store,//payload 是提交mutation时候传入的参数
    //()这里有空格{}
	[types.PERMISSION_DATA](state, payload) {
        state.obj = payload //修改state.js中存储obj
    },
    [types.UPDATE_LIVE_LIST](state, data){
        state.liveList = data
        try {
            window.localStorage.setItem('liveList', JSON.stringify(data));
            // 数据改变的时候把数据拷贝一份保存到localStorage里面
        } catch (e) {}
    },
    [types.UPDATE_PLAYER_LIST](state, data){
        state.playerList = data
        try {
            window.localStorage.setItem('playerList', JSON.stringify(data));
        } catch (e) {}
    },
}

export default mutations