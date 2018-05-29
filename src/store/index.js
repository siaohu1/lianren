import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import logger from 'vuex/dist/logger'; // logger是一个日志插件
const state = {
  token: '',
  userId: '',
  phone: ''
};
// const getters = {
//   val:(state)=>state.count%2?'奇数':'偶数'
// };
import mutations from './mutations';
export default new Vuex.Store({
  state,
  mutations,
  // getters,
  plugins:[logger()],
  strict:true // 只能通过mutation(管理员)来更改状态，mutation不支异步
});
