<template>
  	<div>
        <Header title="登录" hasback="false"></Header>
        <div class="wap_scroll">
            <div class="logo_wrap">
                <img :src="images" />
            </div>
            <van-cell-group class="input_con">
                <div class="input_wrap">
                    <van-field
                        v-model="username"
                        placeholder="请输入用户名"
                        :left-icon="user_icon"
                        :error="false"
                    />
                </div>
                <div class="input_wrap">
                    <van-field
                        v-model="phone"
                        :left-icon="pa_icon"
                        placeholder="请输入用户名登录密码"
                        :error="false"
                    />
                </div>
            </van-cell-group>
            <router-link to="./findPassword">
                <p class="find_password">忘记密码 ？</p>
            </router-link>
            <div class="btn_wrap">
                <van-button type="primary" size="large">登录</van-button>
                <router-link to="./register">
                    <van-button type="default" size="large">注册</van-button>
                </router-link>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue';
import { RadioGroup, Radio } from 'vant';
import { mapState, mapMutations } from 'vuex'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Skill from '../../components/Skill'
import { Tab, Tabs, Swipe, SwipeItem, Field, Button } from 'vant'

Vue.use(Button);
Vue.use(Field);
Vue.use(Tab).use(Tabs);
Vue.use(Swipe).use(SwipeItem);
Vue.use(RadioGroup);
Vue.use(Radio);
export default {
    data(){
        return{
            pa_icon: require('../../assets/pa_icon.png'),
            user_icon: require('../../assets/user_icon.png'),
            images: require('../../assets/logo.png'),
            a: 1,
            active: 2
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
        Skill,
    },
    
}

</script>

<style lang="scss">
.find_password {
    margin-right: 15px;
    font-size: 13px;
    color: #00BEAF;
    text-align: right;
}
.wap_scroll {
    height: calc(100vh - 98px);
    overflow-y: auto;
    margin: 44px 0 53px;
    background-color: #fff;
}
.logo_wrap {
    padding: 10px 8px;
    text-align: center;
    background-color: #fff;
}
.logo_wrap img {
    height: 140px;
}
.ss_con {
    padding: 0 8px;
}
.van-tab--active {
    color: #00BEAF!important;
}
.van-tab {
    color: #1E2227;
}
.van-tabs__content {
    padding: 6px 0;
    background-color: #fff;
}
.input_wrap {
    padding: 6px 16px;
    background: #FFFFFF;
}
.input_wrap .van-cell {
    border-radius: 8px;
    border: 1px solid #E6E6EA;
}
.btn_wrap {
    margin-top: 10px;
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
