// import request from '../utils/request';
import { getReportingEvent,addEvent,remove,update } from '../services/userService';
import {message} from 'antd';


const param = {}

export default {
  namespace: 'user',
  state: {
    /*table state 表格的state 更新list及刷新表格*/
    list: [],
    loading:false,
    pagination:{
      current : 1,
      total: null,
    },
    /*modal state*/
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
  },
  subscriptions: {
    setup({dispatch,history}){
        history.listen(location => {
          if(location.pathname === '/detail/test1'){
            dispatch({
              type: 'query',
              payload : {
                pageSize: 10,
                currentPage: 0
              }
            })
          }
        })
      }
  },
  effects : {
    *query({payload},{call,put}){
      yield put({type:'showLoading'});
        const data = yield call(getReportingEvent,payload);
         console.log(data);
        if(data){
            console.log("111111111111");
          yield put({
            type: 'querySuccess',
            payload:{
              list: data,
            }
          })
        }else {
          yield put({
            type : 'queryFaild',
            payload :{
              msg: '查询失败'
          }
          })
        }
    },
    *delete ({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });
      console.log(`删除 ${payload}`);
      const data = yield call(remove, { id: payload });
      if (data) {
        console.log(`查询前`);
        console.log(data);
        const dataList = yield call(getReportingEvent, {currentPage: 1, pageSize: 10});
        console.log(`查询后 ${dataList}`);
        yield put({
          type: 'querySuccess',
          payload: {
            list: dataList,
          }
        });
        message.success('查询成功')
      }else{
        yield put({ type: 'queryFaild',
          payload: {
            msg: '查询失败'
          }
        })
      }
    },
    *loadModalTree ({ payload }, { call, put }) {
      yield put({type: 'showModal',payload: {modalType: payload.modalType, currentItem: payload.currentItem}});
      yield put({ type: 'showLoading' });
    },
    *create ({ payload }, { call, put }) {
      //隐藏弹窗
      yield put({ type: 'hideModal' });
      //展示加载中
      yield put({ type: 'showLoading' });
      //返回数据常量
      delete payload.currentPage
      delete payload.pageSize
      const  data = yield call(addEvent, payload);
      if (data) {
        const dataList = yield call(getReportingEvent, {currentPage: 1,pageSize: 10})
        yield put({
          type: 'querySuccess',
          //list为table的state 如果改变列表会自动刷新
          payload: {
            list: dataList,
          }
        });
        message.success('查询成功')
      }else{
        yield put({ type: 'queryFaild',
          payload: {
            msg: '查询失败'
          }
        })
      }
    },
    *update ({ payload }, { select, call, put }) {
      yield put({ type: 'showLoading' })
      yield put({ type: 'hideModal' })
      const id = yield select(({ reportingEvent }) => reportingEvent.currentItem.id)
      const newInsInfo = { ...payload, id }
      const data = yield call(update, newInsInfo)
      if (data ) {
        const dataList = yield call(getReportingEvent, {currentPage: payload.currentPage, pageSize: payload.pageSize})
        yield put({
          //触发某个action
          type: 'querySuccess',
          payload: {
            list: dataList,
          }
        })
        message.success('查询成功')
      }else{
        yield put({ type: 'queryFaild',
          payload: {
            msg: '查询失败'
          }
        })
      }
    }
  },
  reducers: {
    showLoading (state) {
      return { ...state, loading: true }
    },
    hideLoading (state) {
      return { ...state, loading: false }
    },
    querySuccess (state, action) {
        console.log(action.payload);
      return { ...state, ...action.payload, loading: false }
    },
    queryFaild (state, action) {
      message.destroy()
      message.error(action.payload.msg);
      return { ...state, ...action.payload, loading: false }
    },
    showModal (state, action) {
      return { ...state, ...action.payload, modalVisible: true }
    },
    hideModal (state) {
      return { ...state, modalVisible: false }
    },
  }
}

  

