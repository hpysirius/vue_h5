<template>
  	<div>
        <Header title="订单记录"></Header>
        <div class="wap_scroll">
            <ul class="per_list">
                <li v-for="item in list" :key="item.id" class="per_li">
                    <img :src="item.imgUrl" class="per_img" />
                    <div class="per_info">
                        <div class="per_wrap">
                            <div class="per_left">
                                <h3>
                                    {{item.nickname}} 
                                    <span class="phone">
                                        {{item.phone}}
                                    </span>
                                </h3>
                                <p class="time">
                                    订单时间：{{item.time}}
                                </p>
                                <van-button v-if="item.hasCancel" plain type="primary">取消</van-button>
                            </div>
                            <div class="per_right">
                                <img class="per_st" :src="item.statusUrl" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { Button, Tag, Rate, Icon } from 'vant';
import { mapState, mapMutations } from 'vuex'
import { AUTHSTSTUS } from '../../utils/constants';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

Vue.use(Button);
Vue.use(Tag);
Vue.use(Rate);
Vue.use(Icon);

export default {
    data(){
        return{
            AUTHSTSTUS,
            list: [
                {
                    id: 0,
                    status: 0,
                    nickname: '李嫂',
                    time: '2019-01-02  09:09:00',
                    phone: '18030728562',
                    statusUrl: require('../../assets/status0.png'),
                    hasCancel: true,
                    imgUrl: require('../../assets/banner.png')
                },
                {
                    id: 1,
                    status: 1,
                    nickname: '李嫂',
                    time: '2019-01-02  09:09:00',
                    phone: '18030728562',
                    statusUrl: require('../../assets/status1.png'),
                    hasCancel: false,
                    imgUrl: require('../../assets/banner.png')
                },
                {
                    id: 2,
                    status: 2,
                    nickname: '李嫂',
                    time: '2019-01-02  09:09:00',
                    phone: '18030728562',
                    statusUrl: require('../../assets/status2.png'),
                    hasCancel: false,
                    imgUrl: require('../../assets/banner.png')
                },
                {
                    id: 3,
                    status: 3,
                    nickname: '李嫂',
                    time: '2019-01-02  09:09:00',
                    phone: '18030728562',
                    statusUrl: require('../../assets/status3.png'),
                    hasCancel: false,
                    imgUrl: require('../../assets/banner.png')
                }
            ]
        }
    },
    computed: {
         ...mapState([
            'userInfo'
        ]),
    },
    components: {
        Footer,
        Header,
    },
    
}

</script>

<style lang="scss">
.wap_scroll {
    height: calc(100vh - 98px);
    overflow-y: auto;
    margin: 44px 0 53px;
    background-color: #f3f6fb;
}
.per_list {
    .per_li {
        display: flex;
        background-color: #fff;
        padding: 20px 20px 10px 16px;
        margin-bottom: 10px;
    }
    .per_img {
        width: 40px;
        height: 40px;
        border-radius: 4px;
    }
    .per_info {
        width: 100%;
        padding-left: 10px;
    }
    .per_wrap {
        display: flex;
        justify-content: space-between;
        .per_left {
            .van-button {
                width: 82px;
                height: 32px;
                line-height: 32px;
                border: 1px solid #00BEAF;
                border-radius: 4px;
            }
            h3 {
                font-size: 14px;
                color: #1E2227;
                line-height: 24px;
            }
            .time {
                display: flex;
                font-size: 13px;
                color: #555;
                line-height: 26px;
            }
            .phone {
                font-size: 12px;
                color: #00BEAF;
                line-height: 20px;
            }
        }
        .per_right {
            .van-button--primary {
                width: 64px;
                height: 32px;
                line-height: 32px;
                background: #00BEAF;
                border-radius: 4px;
            }
            .per_st {
                width: 67px;
                height: 67px;
            }
        }
    }
    .per_desc {
        padding: 10px 0 5px;
        font-size: 13px;
        color: #333;
        letter-spacing: 0;
        line-height: 18px;
    }
}

</style>
