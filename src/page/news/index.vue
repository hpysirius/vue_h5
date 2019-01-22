<template>
  	<div>
        <Header title="行业资讯"></Header>
        <div class="news_scroll">
            <div>
                <div class="scorll_wrap">
                    <Swiper :swiperList="swiperList"></Swiper>
                </div>
                <ul>
                    <li 
                        v-for="(item) in newsList" :key="item.id" 
                        class="newslist_li"
                    >
                        <a :href="item.news_url" class="sk_link">
                            <h3 class="news_tit">{{item.news_title}}</h3>
                            <!-- <p class="news_desc">{{item.news_url}}</p> -->
                            <img v-show="item.img" class="news_img" :src="item.cover_picture" />
                            <p class="news_time">{{item.creat_time}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import {
 GetAdver,
 GetNews
} from "@/service/getData";
import Header from '../../components/Header'
import Swiper from '../../components/Swiper'
import News from '../../components/News'
import Footer from '../../components/Footer'
export default {
    data(){
        return{
            a: 1,
            swiperList: [],
            newsList: []
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
        }
    },
    components: {
        Footer,
        Header,
        Swiper,
        News,
    },
    
}

</script>

<style lang="scss">
@import '../../style/mixin/border-retina.scss';
.news_scroll {
    background-color: #f3f6fb;
    // padding: 10px 8px 0;
    overflow-y: auto;
    margin: 44px 0 53px;
}
.scorll_wrap {
    padding: 10px 8px 0;
}
.newslist_li {
    position: relative;
    padding: 10px 16px;
    margin: 10px 0 0;
    background-color: #fff;
    // &:after {
    //     @include border-retina(bottom, #DFDFDF);
    // }
}
.news_tit {
    font-weight: normal;
    font-size: 15px;
    line-height: 32px;
    color: #333;
}
.news_desc {
    line-height: 21px;
    font-size: 13px;
    color: #999;
}
.news_time {
    line-height: 30px;
    font-size: 13px;
    color: #CECECE;
}
.news_img{
    width: 343px;
    height: 120px;
}
</style>
