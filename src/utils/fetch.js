import Axios from "axios" 
import store from '@/store';
import { actionsCreators as actionsCreatorsPlayer } from '@/views/player/store'
const BasicUrl = '/music-api'
export const fetch = (options) => {
  let opts = Object.assign({
    method: 'POST',
  }, options)
  opts.url = BasicUrl + opts.url
  store.dispatch(actionsCreatorsPlayer.setLoading(true))
  return new Promise((resolve, reject) => {
    Axios(opts).then(res => {
      store.dispatch(actionsCreatorsPlayer.setLoading(false))
      if (res.data.code === 200) {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    }).catch(err => {
      store.dispatch(actionsCreatorsPlayer.setLoading(false))
      reject(err);
    });
  })
}