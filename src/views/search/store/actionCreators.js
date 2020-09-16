import { 
  SET_SEARCH, 
  SET_BANNER,
  SET_PERSONAL
 } from './actionType'
import * as api from '@/api'
export const searchFoucs = (flag) => ({
  type: SET_SEARCH,
  value: flag
});
export const setBanner = (res) => ({
  type: SET_BANNER,
  value: res
});
export const setPersonal = (res) => ({
  type: SET_PERSONAL,
  value: res
});
export const getList = (flag) => {
  // 可以return 一个函数
  return (dispatch) => {
    // 异步操作
    let action  = searchFoucs(flag)
    // dispatch过去
    dispatch(action)
  }
}
export const getBaner = () => {
  // 可以return 一个函数
  return (dispatch) => {
    // 异步操作
    api.getSongUr({}).then(res => {
      let action  = setBanner(res.banners || [])
      dispatch(action)
    }).catch(err => {
      console.log(err)
    })
    // dispatch过去
    
  }
}
export const getPersonal = () => {
  // 可以return 一个函数
  return (dispatch) => {
    // 异步操作
    api.getPersonal({}).then(res => {
      let action  = setPersonal(res.result || [])
      dispatch(action)
    }).catch(err => {
      console.log(err)
    })
    // dispatch过去
    
  }
}