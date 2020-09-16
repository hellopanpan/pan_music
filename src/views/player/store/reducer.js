import { SET_PLAY, SET_SRC, SET_VOLUME, SET_LRC, SET_CURRENT, SET_PLAYER, SET_LIST } from './actionType'
// immutable 库
import { fromJS } from 'immutable'
const defaultState = fromJS({
  play: true,
  volume: 100, 
  src: '',
  lrc: '',
  current: 0,
  playerinfo: {},
  playList: []
})
export default (state = defaultState, action) => {
  if (action.type === SET_PLAY ) {
    return state.set('play', action.value)
  };
  if (action.type === SET_VOLUME) {
    return state.set('volume', action.value)
  }
  if (action.type === SET_SRC) {
    return state.set('src', action.value)
  }
  if (action.type === SET_LRC) {
    return state.set('lrc', action.value)
  }
  if (action.type === SET_CURRENT) {
    return state.set('current', action.value)
  }
  if (action.type === SET_PLAYER) {
    return state.set('playerinfo', action.value)
  }
  if (action.type === SET_LIST) {
    let playList2 = state.get('playList')
    let flagPush = -1
    playList2.forEach((item, index) => {
      if (item.id === action.value.id) {
        flagPush = index
      }
    })
    if (flagPush > -1) playList2 = playList2.splice(flagPush, 1)
    playList2 = playList2.unshift(action.value)
    return state.set('playList', playList2)
  }
  return state;
}