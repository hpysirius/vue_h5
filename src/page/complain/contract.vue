<template>
  	<div>
        <Header title="合同模版"></Header>
        <div class="wap_scroll">
            <ul class="low_container">
                <li v-for="item in list" :key="item.id" class="low_li">
                    <router-link :to="item.url" class="low_link">
                        <img :src="item.imgUrl" />
                        <div class="low_txt">
                            <van-row>
                                <van-col span="16">
                                    <h3>{{item.tit}}</h3>
                                    <p>{{item.desc}}</p>
                                </van-col>
                                <van-col span="8">
                                    <van-button class="down" type="primary">下载</van-button>
                                </van-col>
                            </van-row>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue';
import {mapState, mapMutations} from 'vuex'
import { Button, Row, Col } from 'vant';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

Vue.use(Button);
Vue.use(Row).use(Col);
export default {
    data(){
        return{
            a: 1,
            list: [
                {
                    imgUrl: require('../../assets/banner.png'),
                    tit: '合同模板1',
                    desc: '甲方为个人',
                    url: './comp',
                },
                {
                    imgUrl: require('../../assets/banner.png'),
                    tit: '合同模板2',
                    desc: '甲方为个人',
                    url: './low',
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
.ss_con {
    padding: 0 8px;
}
.btn {
    margin: 16px;
    .van-button--large {
        background: #00BEAF;
        border-radius: 8px;
        .van-button__text {
            color: #fff;
        }
    }
}
.low_container {
    .low_li {
        min-height: 70px;
        margin: 10px 0;
        padding: 16px 12px 16px 16px;
        background-color: #fff;

    }
    .low_li img {
        float: left;
        width: 125px;
        height: 75px;
    }
    .low_txt {
        width: calc(100% - 137px);
        display: inline-block;
        padding: 7px 2px 0 10px;
    }
    .low_txt h3{
        font-weight: normal;
        font-size: 15px;
        color: #1E2227;
        line-height: 20px;
    }
    .low_txt p {
        margin-top: 5px;
        font-size: 12px;
        color: #92979E;
        line-height: 20px;
    }
    .van-button--primary {
        background: #00BEAF!important;
        border-radius: 8px;
    }
    .van-button {
        height: 32px;
        line-height: 32px;
    }
}

</style>
