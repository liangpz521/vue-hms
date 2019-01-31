const fn = require('./common.js')
const relativeUrl = '/user'
module.exports = {
  /**
   * 列表
   * @param data
   * @returns {*|AxiosPromise}
   */

  search (params) {
    return fn.get('/user/list', params)
  }
}
