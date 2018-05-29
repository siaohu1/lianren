import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)
import logger from 'vuex/dist/logger' // logger是一个日志插件
const state = {
  token: '',
  userId: '',
  phone: ''
}
// const getters = {
//   val:(state)=>state.count%2?'奇数':'偶数'
// };
import mutations from './mutations'

export default new Vuex.Store({
  state,
  mutations,
  // getters,
  plugins: [
    logger(),
    createPersistedState({
      key: 'lianren',
      storage: {
        getItem: key => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, {expires: 3}),
        removeItem: key => Cookies.remove(key)
      },
      filter(mutation) {
        return mutation.type === 'setUserData' || mutation.type === 'delUserData'
      }
    })
  ],
  strict: true // 只能通过mutation(管理员)来更改状态，mutation不支异步
})
