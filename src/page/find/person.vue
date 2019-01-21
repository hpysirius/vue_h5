<template>
  	<div>
        <Header title="找家政人员"></Header>
        <div class="wap_scroll">
            <van-loading type="spinner" v-if="loading" />
            <ul class="per_list">
                <li v-for="item in list" :key="item.id" class="per_li">
                    <img :src="item.imgUrl || defaultUrl" class="per_img" />
                    <div class="per_info">
                        <div class="per_wrap">
                            <div class="per_left">
                                <h3>
                                    {{item.name}} 
                                    <van-tag 
                                        :color="AUTHSTSTUS[item.status].color" 
                                        plain
                                        class="status_tag"
                                    >
                                    {{AUTHSTSTUS[item.status].name}}</van-tag>
                                </h3>
                                <p class="level">星级评价：
                                    <van-rate 
                                        v-model="item.star"
                                        :size="10"
                                        color="#00BEAF"
                                        void-color="#00BEAF"
                                    />
                                </p>
                                <!-- <p class="phone">
                                    <van-icon name="phone" />
                                    {{item.phone}}
                                </p> -->
                            </div>
                            <div class="per_right">
                                <van-button type="primary">雇佣</van-button>
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
import { Button, Tag, Rate, Icon, Toast, Loading } from 'vant';
import { mapState, mapMutations } from 'vuex'
import {
    Pullpractitioner, Getskills
} from "@/service/getData";
import { AUTHSTSTUS, SKILL_TYPE } from '../../utils/constants';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

Vue.use(Button);
Vue.use(Tag);
Vue.use(Rate);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(Loading);

export default {
    data(){
        return{
            loading: false,
            AUTHSTSTUS,
            list: []
        }
    },
    computed: {
         ...mapState([
            'defaultUrl'
        ]),
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            this.loading = true;
           const personList =  await Pullpractitioner();
            const skills = await Getskills();
            this.loading = false;
            const list = (personList && personList.list) || [];
            if(list.length){
                list.map((val, index) => {
                    const skillStr = (val.skills && val.skills.split("|").map(skill => SKILL_TYPE[skill]).join(",")) || '';
                    val.desc = skillStr;
                    return val;
                });
                this.list = list;
            }else{
                this.list = [];
                Toast('暂无数据');
            }
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
