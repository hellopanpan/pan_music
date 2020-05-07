import { fetch } from '@/utils/fetch'

export const getSongUr = (params) => {
  return fetch({
    method: 'get',
    url: '/banner'
  })
}
export const getPersonal = (params) => {
  return fetch({
    method: 'get',
    url: '/personalized'
  })
}