import {
  BUY_CART,
  SET_RESULT
} from './mutation-types.js'

// import {setStore, getStore} from '../config/mUtils'

export default {
  // 会员卡价格纪录
  [BUY_CART] (state, price) {
    state.cartPrice = price
  },
  // 临时数据记录
  [SET_RESULT] (state, result) {
    console.log(state, result)
    state.result = result
  }
}
