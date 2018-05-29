import * as Types from './mutations-type'
const mutations = {
  [Types.INCREMENT](state,count){ // state是自动放入的，默认指的就是当前的state
    state.count+=count;
  },
};
export default mutations;
