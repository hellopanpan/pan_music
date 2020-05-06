import { SET_SEARCH } from './actionType'
// immutable 库
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === SET_SEARCH && action.value) {
    return state.set('focused', true)
  };
  if (action.type === SET_SEARCH && !action.value) {
    return state.set('focused', false)

  }
  return state;
}