<template>
  	<div class="wrap">
        <Header title="宣汉家政平台"></Header>
        <div class="wap_scroll">
            <div class="ss_con">
                <!-- <van-search placeholder="请输入搜索关键词" v-model="value" /> -->
                <div class="scorll_wrap">
                    <Swiper :swiperList="swiperList"></Swiper>
                </div>
            </div>
            <Nav></Nav>
            <News></News>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex'
import {
 GetAdver
} from "@/service/getData";
import Header from '../../components/Header'
import { Search } from 'vant';
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Swiper from '../../components/Swiper'
import News from '../../components/News'

Vue.use(Search);
export default {
    data(){
        return{
            swiperList: [
                {"pid": 1, "type": 0, "url": "http://jzapi.3pgis.cn/adver_p/ad_p1.png"}
            ]
        }
    },
    computed: {
         ...mapState([
            'userInfo'
        ]),
    },
    created() {
        this.getData();
    },
    methods: {
        async getData(){
            // let swiperList = await GetAdver({ type: 1 });
            // this.swiperList = (swiperList && swiperList.list) || [];
            // console.log(this.swiperList);
        }
    },
    components: {
        Header,
        Search,
        Banner,
        Footer,
        Swiper,
        News,
        Nav
    },
    
}

</script>

<style lang="scss">
.wrap {
    width: 100%;
    height: 100vh;
    background-color: #f3f6fb;
}
.ss_con {
    padding: 0 8px;
    background-color: #f3f6fb;
    .van-search {
        padding: 0;
    }
    .van-cell__left-icon {
        height: 36px;
        line-height: 30px;
    }
    .van-cell {
        height: 36px;
        line-height: 30px;
    }
}
.scorll_wrap {
    padding: 10px 0;
}
.wap_scroll {
    overflow-y: auto;
    margin: 44px 0 53px;
}
</style>
