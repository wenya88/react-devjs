
export default {

  namespace: 'global',

  state: {
    collapsed:false,//菜单是否展开
    isShowMenu:true,//是否显示菜单
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
    // 是否显示菜单
    *setIsShowMenu({payload},{put}){
      yield put({type:'set_isShowMenu',payload})
    }
  },

  reducers: {
    // state 菜单是否展开
    set_collapsed(state, {payload}) {
      return { ...state, collapsed:payload };
    },
    // 布局菜单是否显示
    set_isShowMenu(state, {payload}){
      return { ...state, isShowMenu:payload };
    }
  },

};
