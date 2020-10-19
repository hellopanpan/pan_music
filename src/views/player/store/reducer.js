import { SET_PLAY,SET_LOADING, SET_SRC, SET_VOLUME, SET_LRC, SET_CURRENT, SET_PLAYER, SET_LIST, SET_XY, TOGGlE_MINI, SET_REMOVE, TOGGLE_CIRCLE, PUSH_LIST, OPEN_PLAYER } from './actionType'
// immutable 库
import { fromJS} from 'immutable'
const defaultState = fromJS({
  play: false,
  volume: 100, 
  src: '',
  lrc: '',
  current: 0,
  playerinfo: {},
  xy: {},
  playList: [],
  showMini: false,
  openPlayer: false,
  circle: false,
  loading: false
})
export default (state = defaultState, action) => {
  if (action.type === SET_PLAY ) {
    return state.set('play', !state.get('play'))
  };
  if (action.type === SET_LOADING ) {
    return state.set('loading', action.value)
  };
  if (action.type === SET_VOLUME) {
    return state.set('volume', action.value)
  }
  if (action.type === SET_SRC) {
    return state.set('src', action.value)
  }
  if (action.type === SET_XY) {
    return state.set('xy', action.value)
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
  if (action.type === TOGGlE_MINI) {
    return state.set('showMini', !state.get('showMini'))
  }
  if (action.type === SET_LIST) {
    return state.set('playList', action.value)
  }
  if (action.type === PUSH_LIST) {
    const list = state.get('playList')
    let arr = []
    list.forEach((item, index) => {
      if (action.value.id !== item.id) {
        arr.push(item)
      }
    })
    arr.unshift(action.value)
    return state.set('playList', arr)
  }
  if (action.type === TOGGLE_CIRCLE) {
    return state.set('circle', !state.get('circle'))
  }
  if (action.type === OPEN_PLAYER) {
    return state.set('openPlayer', true)
  }
  if (action.type === SET_REMOVE) {
    const list = state.get('playList')
    let arr = []
    list.forEach(item => {
      if (action.value.id !== item.id) {
        arr.push(item)
      }
    })
    return state.set('playList', arr)
  }
  return state;
}