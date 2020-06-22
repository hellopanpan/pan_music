import { 
  SET_PLAY, 
  SET_VOLUME,
  SET_SRC
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
export const getSrc = (id) => {
  return (dispatch) => {
    // 异步操作
    let src = api.getSongUrlSrc(id)
    // dispatch过去
    let action  = setSrc(src)
    dispatch(action)
  }
}