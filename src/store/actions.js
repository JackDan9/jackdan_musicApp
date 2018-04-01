import  * as types from './types';
export default {
    //添加音乐播放元素
    sendAudio({commit,state},obj) {
        commit(types.SENDAUDIO,obj)
    },

    //添加音乐
    sendMusic({commit,state},obj) {
        commit(types.SENDMUSIC,obj)
    },

    //循环播放
    loopPlayback({commit,state}){
        commit(types.LOOPPLAYBACK)
    },

    //播放音乐
    play({commit,state}){
        if (state.musicList.length!=0) {
            if (state.playState==false) {
                state.dom.play();
                commit(types.PLAY)
            } else {
                state.dom.pause();
                commit(types.PAUSE)
            }
        }
    },

    //播放下一曲
    nextMusic({commit,state}){
        state.musicList.length!=0 ? commit(types.LOOPPLAYBACK) : false;
    },

    //播放上一曲
    prevMusic({commit,state}){
        state.musicList.length!=0 ? commit(types.PREVSONG) : false;
    },

    getcurrentTime({state}){
        state.currentTime=state.dom.currentTime
    },

    getDuration({state}){
        state.duration=state.dom.duration;
    },

    closeListState({commit,state}){
        commit(types.CLOSELISTSTATE)
    },

    openListState({commit,state}){
        commit(types.OPENLISTSTATE)
    },

    selectMusic({commit,state},index){
        commit(types.SELECTMUSIC,index)
    },

    delMusic({commit,state},index){
        commit(types.DELMUSIC,index)
    },

    showLoading({commit,state}){//显示loading
        commit(types.SHOWLOADING)
    },

    hidLoading({commit,state}){//隐藏loading
        commit(types.HIDLOADING)
    },

    showPlayInfo({commit}){
        commit(types.SHOWPLAYINFO)
    },

    hidPlayInfo({commit}){
        commit(types.HIDPLAYINFO)
    },

    setCurrentTime({commit,state},time){
        if (state.musicPlace!=-1) {
            commit(types.SETCURRENTTIME,time)
        }
    }
}