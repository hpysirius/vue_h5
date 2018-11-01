import {
  BUY_CART
} from './mutation-types.js'

// import {setStore, getStore} from '../config/mUtils'

export default {
  // 会员卡价格纪录
  [BUY_CART] (state, price) {
    state.cartPrice = price
  }

}
