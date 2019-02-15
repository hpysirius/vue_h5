<template>
  	<div>
        <Header title="个人中心"></Header>
        <div class="wap_scroll">
            <van-loading type="spinner" v-if="loading" />
            <!-- <van-cell class="me_vancel" title="订单记录（10）" is-link value="待处理" />
            <van-cell class="me_vancel" title="服务人员（100）" is-link value="查看" /> -->
            <div class="per_list">
                <div class="per_li">
                    <img :src="item.imgUrl || defaultUrl" class="per_img" />
                    <div class="per_info">
                        <div class="per_wrap">
                            <div class="per_left">
                                <h3>
                                    {{item.contacts}} 
                                    <router-link to="./auth" v-if="AUTHSTSTUS[item.status]">
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
                                        v-model="item.star"
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
            <van-cell class="me_celtit" title="基础信息" />
            <!-- <van-field
                v-model="item.con"
                clearable
                label="摘要信息"
                placeholder="请输入摘要信息"
            /> -->
            <van-field
                v-model="item.skills"
                clearable
                label="服务项目"
                placeholder="请输入服务项目"
                disabled
            />
            <van-cell class="me_celtit" title="联系信息" />
            <van-field
                v-model="item.telphone"
                clearable
                label="联系信息"
                placeholder="请输入联系信息"
                disabled
            />
            <van-field
                v-model="item.adress"
                clearable
                label="联系地址"
                placeholder="请输入联系地址"
                disabled
            />
            <div v-if="user_type === 1">
            <van-cell class="me_celtit" title="所属企业" value="绑定" />
            <van-field
                v-model="item.company"
                clearable
                label="企业名称"
                placeholder="请输入企业名称"
                disabled
            />
            <van-field
                class="end"
                v-model="item.code"
                clearable
                label="信用代码"
                placeholder="请输入信用代码"
                disabled
            />
            </div>
            <div class="btn">
                <van-button size="large" @click="logout" type="default">退出登录</van-button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { Cell, CellGroup, Tag, Rate, Field, Loading, Toast } from 'vant';
import { mapState, mapMutations } from 'vuex'
import {
    Getuserinfo, Getskills
} from "@/service/getData";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FindList from '../../components/FindList'
import { AUTHSTSTUS } from '../../utils/constants';

Vue.use(Cell).use(CellGroup);
Vue.use(Tag);
Vue.use(Rate);
Vue.use(Field);
Vue.use(Loading);
Vue.use(Toast);

export default {
    data(){
        return{
            user_type: '',
            loading: false,
            AUTHSTSTUS,
            item: {}
        }
    },
    computed: {
         ...mapState([
            'userInfo', 'result', 'defaultUrl'
        ]),
    },
    created() {
        this.getData();
    },
    methods: {
        async logout(){
            window.localStorage.setItem('isLogin', '');
            this.$router.push({ path: '/login', query: {} });
        },
        async getData() {
            const { user_type, ufid, uid } = JSON.parse(window.localStorage.getItem('result'));
            this.user_type = user_type;
            this.loading = true;
            const data =  await Getuserinfo({ user_type, ufid });
            this.loading = false;
            if(data.result === 'True'){
                if(data.skills){
                    const { list } = await Getskills({ uid: uid || 0 });
                    data.skills = data.skills.split('|').map(item => {
                        const findItem = list.find(skill => skill.code === item)
                        return findItem.skill
                    }).join(',')
                }
                this.item = data;
            }else{
                this.item = {};
                Toast('暂无数据');
            }
        }
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
.btn {
    margin: 10px 0;
    padding: 16px;
    background-color: #fff;
    .van-button--large {
        background: #00BEAF;
        border-radius: 8px;
        .van-button__text {
            color: #fff;
        }
    }
}
</style>
