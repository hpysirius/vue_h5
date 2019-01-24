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
            <News :newsList="newsList"></News>
            <a href="http://jzapi.3pgis.cn/apk/jz.apk" class="btn_wrap btn_down">
                 <van-button type="primary" size="large">APP下载</van-button>
            </a>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations, mapGetters } from 'vuex'
import {
 GetAdver,
 GetNews
} from "@/service/getData";
import Header from '../../components/Header'
import { Search, Button } from 'vant';
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Swiper from '../../components/Swiper'
import News from '../../components/News'

Vue.use(Search);
Vue.use(Button);
export default {
    data(){
        return{
            swiperList: [
                // {"pid": 1, "type": 0, "url": "http://jzapi.3pgis.cn/adver_p/ad_p1.png"},
                // {"pid": 1, "type": 0, "url": "http://jzapi.3pgis.cn/adver_p/ad_p1.png"}
            ],
            newsList: [
                // {
                //     id: 0,
                //     img: true,
                //     news_title: '技能培训合格家政人员名单公示',
                //     news_url: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道…',
                //     cover_picture: 'http://jzapi.3pgis.cn/adver_p/ad_p1.png',
                //     creat_time: '2019-01-04 23:23:09'
                // },
                // {
                //     id: 1,
                //     img: false,
                //     news_title: '技能培训合格家政人员名单公示',
                //     news_url: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道…',
                //     cover_picture: 'http://jzapi.3pgis.cn/adver_p/ad_p1.png',
                //     creat_time: '2019-01-04 23:23:09'
                // }
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
            const swiperList = await GetAdver({ type: 1 });
            this.swiperList = (swiperList && swiperList.list) || [];
            const newsList = await GetNews();
            this.newsList = (newsList && newsList.list) || [];
            if(this.newsList.length > 4){
                this.newsList.length = 4;
            }
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
.btn_down {
    display: block;
    margin-top: 20px;
    padding: 6px 16px 10px;
    .van-button--large {
        height: 45px;
        margin: 8px 0;
        line-height: 45px;
        border-radius: 4px;
    }
    .van-button--primary {
        font-size: 16px;
        background-color: #00BEAF;
        color: #FFF;
    }
    .van-button--default {
        border-color: #00BEAF;
        color: #00BEAF;
    }
}
</style>
