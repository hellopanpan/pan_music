import { reducer as HeaderReducer } from '@/views/header/store'
// 将最外层的state转化成immutable对象
import { combineReducers } from 'redux-immutable'

export default combineReducers({
  header: HeaderReducer
})