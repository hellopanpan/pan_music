import { SET_SEARCH, SET_BANNER } from './actionType'
// immutable 库
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  banner: []
})

export default (state = defaultState, action) => {
  if (action.type === SET_SEARCH && action.value) {
    return state.set('focused', true)
  };
  if (action.type === SET_SEARCH && !action.value) {
    return state.set('focused', false)

  }
  if (action.type === SET_BANNER ) {
    return state.set('banner', action.value)

  }
  return state;
}