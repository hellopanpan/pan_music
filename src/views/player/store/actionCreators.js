import { 
  SET_PLAY, 
  SET_VOLUME,
  SET_SRC,
  SET_LRC,
  SET_CURRENT,
  SET_PLAYER,
  SET_LIST
 } from './actionType'
import * as api from '@/api'
export const setPlay = (flag) => ({
  type: SET_PLAY,
  value: flag
});
export const setVolume = (num) => ({
  type: SET_VOLUME,
  value: num
});
export const setSrc = (src) => ({
  type: SET_SRC,
  value: src
});
export const setlrc = (src) => ({
  type: SET_LRC,
  value: src
});
export const setCurrenttime = (time) => ({
  type: SET_CURRENT,
  value: time
});
export const setCurrentPlayer = (player) => ({
  type: SET_PLAYER,
  value: player
});
export const setPlaylist = (list) => ({
  type: SET_LIST,
  value: list
});
export const getSrc = (id) => {
  return (dispatch) => {
    // 异步操作
    let src = api.getSongUrlSrc(id)
    // dispatch过去
    let action  = setSrc(src)
    dispatch(action)
  };
};
export const getlrc = (id) => {
  return (dispatch) => {
    // 异步操作
    api.getSongLrc({id}).then(res => {
      let action = setlrc(res.lrc.lyric)
      dispatch(action)
    }).catch(err => {
      console.log(err)
    })

  }
}