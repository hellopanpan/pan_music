import { reducer as recomendReducer } from '@/views/recomend/store'
import { reducer as PlayerReducer } from '@/views/player/store'
// 将最外层的state转化成immutable对象
import { combineReducers } from 'redux'

export default combineReducers({
  recomend: recomendReducer,
  player: PlayerReducer,
})