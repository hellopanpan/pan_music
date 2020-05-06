import Axios from "axios" 
export const fetch = (options) => {
  let opts = Object.assign({
    method: 'POST'
  }, options)
  return new Promise((resolve, reject) => {
    Axios(opts).then(res => {
      if (res.data.code === 200) {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    }).catch(err => {
      reject(err);
    });
  })
}