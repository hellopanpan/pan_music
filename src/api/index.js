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
// 获取详情
export const getPlaylistDetail = (params) => {
  return fetch({
    method: 'get',
    url: '/playlist/detail',
    params
  })
}
// 歌曲链接
export const getSongUrlSrc = id => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};
// 歌词链接
export const getSongLrc = params => {
  return fetch({
    method: 'get',
    url: '/lyric',
    params
  })
};