export default {
    namespace: 'common',
    state: {
      breadcrumb:[
        {
          name:'首页',
          path:'/detail'
        }
      ]
    },
    reducers: {
      changeBreadcrumb(state,{ payload: breadcrumb }) {
        return {...state, ...breadcrumb}
      }
    },
    effects: {},
    subscriptions: {},
  }