<template>
  	<div>
        <Header title="家政企业查询"></Header>
        <div class="wap_scroll">
            <div class="st_search">
                <van-row>
                    <van-col span="18">
                        <van-cell-group>
                            <van-field v-model="name" placeholder="请输入企业名称查询" />
                        </van-cell-group>
                    </van-col>
                    <van-col span="6">
                        <van-button type="default" @click="getData">查询</van-button>
                    </van-col>
                </van-row>
            </div>
            <ul class="st_list">
                <li class="st_li" v-for="item in list" :key="item.id">
                    <p>
                        <span>企业名称：</span>{{item.name}}
                    </p>
                    <p>
                        <span>信用代码：</span>{{item.company_code}}
                        <van-tag 
                            :color="AUTHSTSTUS[item.status].color" 
                            plain
                            class="status_tag"
                        >
                        {{AUTHSTSTUS[item.status].name}}</van-tag>
                    </p>
                    <p><span>企业法人：</span>{{item.contacts}}</p>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InquiryName from '../../components/InquiryName'
import { Field, Row, Col, Button, Tag, Toast } from 'vant';
import { AUTHSTSTUS, SKILL_TYPE } from '../../utils/constants';
import {
    Getcompany, Getskills
} from "@/service/getData";

Vue.use(Tag);
Vue.use(Field);
Vue.use(Button);
Vue.use(Row).use(Col);
Vue.use(Toast);
export default {
    data(){
        return{
            name: '',
            AUTHSTSTUS,
            list: []
        }
    },
    computed: {
         ...mapState([
            'userInfo'
        ]),
    },
    methods: {
        async getData() {
            if(this.name === ''){
                Toast('查询内容不能为空');
                return;
            }
            const personList =  await Getcompany({ name: this.name });
            const skills = await Getskills();
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
        InquiryName,
    },
    
}

</script>

<style lang="scss">
@import '../../style/mixin/border-retina.scss';
.wap_scroll {
    height: calc(100vh - 98px);
    overflow-y: auto;
    margin: 44px 0 53px;
    background-color: #f3f6fb;
}
.st_search {
    background-color: #fff;
    .van-cell__value--alone {
        height: 36px;
        border: 1px solid #E6E6EA;
        border-radius: 8px;
    }
    .van-field__control {
        text-indent: 10px;
        font-size: 12px;
        color: #92979E;
        line-height: 36px;
    }
    .van-button {
        width: 84px;
        height: 36px;
        margin-top: 10px;
        line-height: 36px;
        background: #00BEAF;
        border-radius: 8px;
    }
    .van-button--default {
        color: #fff;
    }
}
.st_list {
    margin-top: 10px;
}
.st_li {
    position: relative;
    padding: 16px;
    font-size: 15px;
    background: #fff;
    color: #92979E;
    &:after {
        @include border-retina(bottom, #DFDFDF);
    }
    p {
        line-height: 30px;
    }
    span {
        color: #1E2227;
    }
    .status_tag {
        margin-left: 10px;
    }
}
</style>
