<template>
  	<div>
        <Header title="法律咨询"></Header>
        <div class="wap_scroll">
            <div class="low_btn">
                <router-link to="./addLow" class="f_nav f_main">
                     <van-button size="large" type="default">新建咨询</van-button>
                </router-link>
            </div>
            <van-loading type="spinner" v-if="loading" />
            <ul class="low_container">
                <li v-for="item in list" :key="item.id" class="low_li">
                    <router-link :to="{path: './lowDetail', query: item}" class="low_link">
                        <img :src="item.imgUrl || imageUrl" />
                        <div class="low_txt" :style="{backgroundImage: item.status === 0 ? status0 : status1}">
                            <h3>{{item.title}}</h3>
                            <p><span>问题：</span>{{item.question}}</p>
                            <p><span>更新时间：</span>{{item.creat_time}}</p>
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
import { Button, Loading } from 'vant';
import {
 Getlegalconsulting
} from "@/service/getData";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import { LSTATUS } from '../../utils/constants';

Vue.use(Button);
Vue.use(Loading);
export default {
    data(){
        return{
            a: 1,
            loading: false,
            status0:'url(' + require('../../assets/low_status0.png') + ')',
            status1:'url(' + require('../../assets/low_status1.png') + ')',
            imageUrl: require('../../assets/find.png'),
            list: []
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
            // const { uid } = this.$store.state.result
            const { uid } = JSON.parse(window.localStorage.getItem('result'));
            this.loading = true;
            const data = await Getlegalconsulting({ uid: uid || 0 });
            this.loading = false;
            console.log(data);
            this.list = (data && data.list) || [];
        }
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
        min-height: 75px;
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
        background-size: 67px 58px;
        background-position: right center;
        background-repeat: no-repeat;
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
