// common.js
const axios = require('axios')
// JSON参数请求
exports.ajax = function (type, url, params, data) {
  return axios({
    method: type,
    url,
    params,
    data,
  })
}

exports.get = function (url, params) {
  let rand = Math.random()
  params['rand'] = rand
  return axios({
    url: url,
    params: params
  })

  // return axios.get(url, {params: params})
  // let rand = ''
  // if (!url.includes('?')) {
  //   rand = '?r=' + Math.random()
  // } else {
  //   rand = '&r=' + Math.random()
  // }
  //
  // return axios.get(url + rand)
}

exports.post = function (url, params, data) {
  return axios({
    method: 'post',
    url: url,
    params: params,
    data: data
  })
}
