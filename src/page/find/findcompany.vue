<template>
  	<div>
        <Header title="找家政企业"></Header>
        <div class="wap_scroll">
            <ul class="per_list">
                <li v-for="item in list" :key="item.id" class="per_li">
                    <img :src="item.imgUrl" class="per_img" />
                    <div class="per_info">
                        <div class="per_wrap">
                            <div class="per_left">
                                <h3>
                                    {{item.nickname}} 
                                    <van-tag 
                                        :color="AUTHSTSTUS[item.status].color" 
                                        plain
                                        class="status_tag"
                                    >
                                    {{AUTHSTSTUS[item.status].name}}</van-tag>
                                </h3>
                                <p class="phone">
                                    <span>{{item.person}}</span>
                                    <van-icon name="phone-o" />
                                    {{item.phone}}
                                </p>
                                <p class="level">星级评价：
                                    <van-rate 
                                        v-model="item.level"
                                        :size="10"
                                        color="#00BEAF"
                                        void-color="#00BEAF"
                                    />
                                </p>
                            </div>
                            <div class="per_right">
                                <van-button type="primary">订单</van-button>
                            </div>
                        </div>
                        <div class="per_desc">
                            {{item.desc}}
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
                    nickname: '某某家政服务有限公司',
                    level: 4,
                    person: '张经理',
                    phone: '18030728562',
                    imgUrl: require('../../assets/banner.png'),
                    desc: '服务项目：住家保姆、钟点工、打扫卫生、煮饭、收拾房间等...'
                },
                {
                    id: 1,
                    status: 1,
                    nickname: '某某家政服务有限公司',
                    level: 2,
                    person: '张经理',
                    phone: '18030728562',
                    imgUrl: require('../../assets/banner.png'),
                    desc: '服务项目：住家保姆、钟点工、打扫卫生、煮饭、收拾房间等...'
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
            h3 {
                font-size: 14px;
                color: #1E2227;
                line-height: 24px;
            }
            .level {
                display: flex;
                font-size: 11px;
                color: #555;
                line-height: 26px;
            }
            .phone {
                span {
                    margin-right: 10px;
                    font-size: 14px;
                    color: #1E2227;
                    line-height: 28px;
                }
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
