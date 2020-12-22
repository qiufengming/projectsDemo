export const getUserData = state => {
    return state.obj
}
export const getterLiveList = state => {
    // return state.liveList
    let list = state.liveList
    try {   // 用户关闭了本地存储功能，此时在外层加个try...catch
        if (!list){
            list = JSON.parse(window.localStorage.getItem('liveList'))
        }
    }catch(e){}
    return list;
}
export const getterPlayerList = state => {
    return state.playerList
}