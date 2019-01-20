<template>
  	<div>
        <Header title="法律咨询"></Header>
        <div class="wap_scroll">
            <div class="low_btn">
                <van-button size="large" type="default">新建咨询</van-button>
            </div>
            <ul class="low_container">
                <li v-for="item in list" :key="item.id" class="low_li">
                    <router-link :to="item.url" class="low_link">
                        <img :src="item.imgUrl" />
                        <div class="low_txt">
                            <h3>{{item.tit}}</h3>
                            <p><span>对话条数：</span>{{item.num}}</p>
                            <p><span>更新时间：</span>{{item.updatetime}}</p>
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
import { Button } from 'vant';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

Vue.use(Button);
export default {
    data(){
        return{
            a: 1,
            list: [
                {
                    imgUrl: require('../../assets/banner.png'),
                    tit: '雇主提前解约',
                    num: '36条',
                    url: './comp',
                    updatetime: '2019-01-06  23:23:34'
                },
                {
                    imgUrl: require('../../assets/banner.png'),
                    tit: '法律咨询',
                    num: '36条',
                    url: './low',
                    updatetime: '2019-01-06  23:23:34'
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
.low_btn {
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
}

</style>
