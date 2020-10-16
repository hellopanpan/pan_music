import { 
  SET_PLAY, 
  SET_VOLUME,
  SET_SRC,
  SET_LRC,
  SET_CURRENT,
  SET_PLAYER,
  SET_LIST,
  TOGGlE_MINI,
  SET_REMOVE,
  TOGGLE_CIRCLE,
  PUSH_LIST,
  OPEN_PLAYER,
  SET_LOADING,
  SET_XY
} from './actionType'

import * as api from '@/api'
export const setPlay = () => ({
  type: SET_PLAY
});
export const setVolume = (num) => ({
  type: SET_VOLUME,
  value: num
});
export const setLoading = (value) => ({
  type: SET_LOADING,
  value
});
export const setSrc = (src) => ({
  type: SET_SRC,
  value: src
});
export const setXY = (xy) => ({
  type: SET_XY,
  value: xy
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
// 设置 播放列表
export const setPlaylist = (list) => ({
  type: SET_LIST,
  value: list
});
// 添加 播放列表
export const pushPlaylist = (song) => ({
  type: PUSH_LIST,
  value: song
});
// 切换 大小播放器
export const toggleMini = () => ({
  type: TOGGlE_MINI
});
//移除歌曲
export const removeSong = (item) => ({
  type: SET_REMOVE,
  value: item
});
// 打开音乐播放器
export const openPlayer = () => ({
  type: OPEN_PLAYER
});
//移除歌曲
export const toggleCircle = (item) => ({
  type: TOGGLE_CIRCLE,
});
// 上下一曲
export const goNext = (id, list, flag) => {
  let player = {}
  let index1 = 0
  let list1 = JSON.parse(JSON.stringify(list))
  list1.forEach((item, index) => {
    if (item.id ===  id) {
      if (flag) index1 = index + 1
      if (!flag) index1 = index - 1
    }
  })
  if (index1 === list.length) index1 = 0
  if (index1 === -1) index1 = list.length - 1
  
  player = list1.splice(index1, 1)
  return (dispatch) => {
    dispatch(getSrc(player[0].id))
    dispatch(setCurrentPlayer(player[0]))
  }
};
// 获取歌曲src
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