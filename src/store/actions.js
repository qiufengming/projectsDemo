import * as types from './mutation-types';
import state from './state.js'
import axios from 'axios'

export const getLiveList = ({ commit }) => {
    axios.get('./static/data/liveList.json').then(res => {
        let d = res.data;
        commit('UPDATE_LIVE_LIST', d)
    }).catch(err => {
        console.log('********************获取直播列表数据报错********************');
        console.log(err);
    })
}
export const getPlayerList = (context) => {
    axios.get('./static/data/playerList.json').then(res => {
        let d = res.data;
        context.commit('UPDATE_PLAYER_LIST', d)
    }).catch(err => {
        console.log('********************获取选手列表数据报错********************');
        console.log(err);
    })
}
export const updateLiveList = ({ commit }, data) => {
    commit('UPDATE_LIVE_LIST', data)
}
export const updatePlayerList = (context, data) => {
    context.commit('UPDATE_PLAYER_LIST', data)
}

/*
export function updateLiveList({commit}) {
    axios.get('./static/data/liveList.json').then(res => {
        let d = res.data;
        return commit('UPDATE_LIVE_LIST', d)
    }).catch(err => {
        console.log('********************获取直播列表数据报错********************');
        console.log(err);
    })
}
export function updatePlayerList({commit}) {
    axios.get('./static/data/playerList.json').then(res => {
        let d = res.data;
        return commit('UPDATE_PLAYER_LIST', d)
    }).catch(err => {
        console.log('********************获取直播列表数据报错********************');
        console.log(err);
    })
}
*/
