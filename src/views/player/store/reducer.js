import { SET_PLAY, SET_SRC, SET_VOLUME } from './actionType'
// immutable 库
import { fromJS } from 'immutable'
const defaultState = fromJS({
  play: true,
  volume: 100, 
  src: ''
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
  return state;
}