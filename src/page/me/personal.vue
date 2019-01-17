<template>
  	<div>
        <Header title="个人中心"></Header>
        <div class="wap_scroll">
            <van-cell class="me_vancel" title="订单记录（10）" is-link value="待处理" />
            <van-cell class="me_vancel" title="服务人员（100）" is-link value="查看" />
            <div class="per_list">
                <div class="per_li">
                    <img :src="item.imgUrl" class="per_img" />
                    <div class="per_info">
                        <div class="per_wrap">
                            <div class="per_left">
                                <h3>
                                    {{item.nickname}} 
                                    <router-link to="./auth">
                                        <van-tag 
                                            :color="AUTHSTSTUS[item.status].color" 
                                            plain
                                            class="status_tag"
                                        >
                                        {{AUTHSTSTUS[item.status].name}}</van-tag>
                                    </router-link>
                                </h3>
                                <p class="level">星级评价：
                                    <van-rate 
                                        v-model="item.level"
                                        :size="10"
                                        color="#00BEAF"
                                        void-color="#00BEAF"
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <van-cell class="me_celtit" title="基础信息" value="修改" />
            <van-field
                v-model="info.con"
                clearable
                label="摘要信息"
                placeholder="请输入摘要信息"
            />
            <van-field
                v-model="info.service"
                clearable
                label="服务项目"
                placeholder="请输入服务项目"
            />
            <van-cell class="me_celtit" title="联系信息" value="修改" />
            <van-field
                v-model="info.phone"
                clearable
                label="联系信息"
                placeholder="请输入联系信息"
            />
            <van-field
                v-model="info.address"
                clearable
                label="联系地址"
                placeholder="请输入联系地址"
            />
            <van-cell class="me_celtit" title="所属企业" value="绑定" />
            <van-field
                v-model="info.company"
                clearable
                label="企业名称"
                placeholder="请输入企业名称"
            />
            <van-field
                class="end"
                v-model="info.code"
                clearable
                label="信用代码"
                placeholder="请输入信用代码"
            />
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { Cell, CellGroup, Tag, Rate, Field } from 'vant';
import { mapState, mapMutations } from 'vuex'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FindList from '../../components/FindList'
import { AUTHSTSTUS } from '../../utils/constants';

Vue.use(Cell).use(CellGroup);
Vue.use(Tag);
Vue.use(Rate);
Vue.use(Field);

export default {
    data(){
        return{
            AUTHSTSTUS,
            item: {
                id: 0,
                status: 0,
                nickname: '昵称名字',
                level: 4,
                phone: '18030728562',
                imgUrl: require('../../assets/banner.png'),
                desc: '服务项目：住家保姆、钟点工、打扫卫生、煮饭、收拾房间等...'
            },
            info: {
                con: '内容内容内容',
                service: '煮饭、打扫卫生',
                phone: '18030728562',
                address: '四川省成都市',
                company: '未绑定',
                code: '098766789'
            }
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
        FindList,
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
.me_vancel {
    margin-bottom: 1px;
    font-weight: normal;
    font-size: 15px;
    color: #fff;
    background: #00BEAF;
    .van-cell__value {
        color: #fff!important;
    }
    .van-cell__right-icon {
        color: #fff!important;
    }
}
.me_vancel:not(:last-child)::after {
    border-bottom: none!important;
}
.per_list {
    .per_li {
        display: flex;
        background-color: #fff;
        padding: 20px 20px 10px 16px;
        // margin-bottom: 10px;
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
.me_celtit {
    .van-cell__title {
        font-weight: bold;
    }
    margin-top: 10px;
}
.end {
    margin-bottom: 20px;
}
</style>
