
export default {

  namespace: 'global',

  state: {
    collapsed:false,//菜单是否展开
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    //dispatch 菜单是否展开
    *setCollapsed({ payload }, {  put }) {  // eslint-disable-line
      yield put({ type: 'set_collapsed',payload});
    },
  },

  reducers: {
    // state 菜单是否展开
    set_collapsed(state, {payload}) {
      return { ...state, collapsed:payload };
    },
  },

};
