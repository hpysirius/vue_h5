<template>
  	<div>
        <Header title="证书查询"></Header>
        <div class="wap_scroll">
            <div class="wap_swipe">
                <Swiper :swiperList="swiperList"></Swiper>
                <!-- <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img :src="image" />
                    </van-swipe-item>
                </van-swipe> -->
            </div>
            <van-tabs v-model="active" class="wap_tabs">
                <van-tab title="身份证查询">
                    <van-cell-group class="input_con">
                        <div class="input_wrap">
                            <van-field
                                v-model="paramId.id_card"
                                label="身份证号"
                                placeholder="请输入身份证号"
                                :error="false"
                            />
                        </div>
                        <div class="input_wrap">
                            <van-field
                                v-model="paramId.name"
                                label="姓名"
                                placeholder="请输入姓名"
                                :error="false"
                            />
                        </div>
                    </van-cell-group>
                </van-tab>
                <van-tab title="证书查询">
                    <van-cell-group class="input_con">
                        <div class="input_wrap">
                            <van-field
                                v-model="paramNo.certificate_no"
                                label="证书编号"
                                placeholder="请输入证书编号"
                                :error="false"
                            />
                        </div>
                        <div class="input_wrap">
                            <van-field
                                v-model="paramNo.name"
                                label="姓名"
                                placeholder="请输入姓名"
                                :error="false"
                            />
                        </div>
                    </van-cell-group>
                </van-tab>
                <div class="btn_wrap">
                    <van-button @click="submit" size="large">查询</van-button>
                </div>
            </van-tabs>
            <p class="cred_desc">
                可查询到家政协会认证分发的相关技能培训证书，查询内容包含技能名
            </p>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue';
import { RadioGroup, Radio, Toast } from 'vant';
import { mapState, mapMutations } from 'vuex'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Skill from '../../components/Skill'
import Swiper from '../../components/Swiper'
import { Tab, Tabs, Swipe, SwipeItem, Field, Button } from 'vant'
import {
 GetcertificateByid,
 GetcertificateByno,
 GetAdver
} from "@/service/getData";

Vue.use(Button);
Vue.use(Field);
Vue.use(Tab).use(Tabs);
Vue.use(Swipe).use(SwipeItem);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Toast);
export default {
    data(){
        return{
            paramId: {
                name: '',
                id_card: '',
            },
            paramNo: {
                name: '',
                certificate_no: ''
            },
            resultId: {
                id: 1,
                certificate: '从业资格证',
                certificate_no: '513455555555555585858',
                name: '张小二',
                id_card: '510129********6756',
                issuing_authority: 'XXXX家政协会',
                issuing_date: '2018-11-02'
            },
            swiperList: [
                // require('../../assets/banner.png'),
                // require('../../assets/banner.png'),
                // require('../../assets/banner.png')
            ],
            a: 1,
            active: 0
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
        },
        async submit(){
            if(this.active === 0){
                const data = await GetcertificateByid(this.paramId);
                this.resultId = (data && data.list) || [];
            }else{
                const data = await GetcertificateByno(this.paramNo);
                this.resultId = (data && data.list) || [];
            }
            if(this.resultId.length){
                this.$router.push({ path: '/credInfo', query: this.resultId });
            }else{
                Toast('查询无数据');
            }
        }
    },
    components: {
        Footer,
        Header,
        Skill,
        Swiper
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
.wap_swipe {
    height: 140px;
    padding: 10px 8px;
}
.wap_swipe img {
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
    padding: 6px 16px 10px;
    .van-button--large {
        height: 45px;
        line-height: 45px;
        background-color: #00BEAF;
        border-radius: 8px;
    }
    .van-button--default {
        font-size: 16px;
        color: #FFF;
    }
}
.cred_desc {
    padding: 7px 15px;
    font-size: 12px;
    color: #92979E;
    line-height: 20px;
}
</style>
