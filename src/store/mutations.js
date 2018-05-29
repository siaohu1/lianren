const mutations = {
  setUserData(state, data){ // state是自动放入的，默认指的就是当前的state
    state.token = data.token;
    state.userId = data.userId;
    state.phone = data.phone;
  },
  delUserData(state){
    state.token = '';
    state.userId = '';
    state.phone = '';
  },
};
export default mutations;
