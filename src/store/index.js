import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  latitude: '', // 当前位置纬度
  longitude: '', // 当前位置经度
  cartList: {}, // 加入购物车的商品列表
  shopDetail: null, // 商家详情信息
  userInfo: 'hpysirius', // 用户信息
  defaultUrl: require('../assets/default.png'),
  result: {
  } // 需要跳转存储的临时数据
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
