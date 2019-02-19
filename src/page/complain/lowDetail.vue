<template>
  	<div>
        <Header title="法律咨询"></Header>
        <div class="wap_scroll add_low">
            <div class="ld_con">
                <p class="ld_tit">{{item.title}}</p>
                <p class="ld_detail">
                    {{item.question}}
                </p>
                <p class="ld_time">
                    创建时间：{{item.creat_time}}
                </p>
  	        </div>
            <div class="ld_reply">
                <ul class="ld_list">
                    <li class="ld_li" v-for="item in list" :key="item.id">
                        <p class="ld_li_tit">
                            <span>{{Q_TYPE[item.type]}}</span>{{item.creat_time}}
                        </p>
                        <div class="ld_li_con">
                            <img :src="defaultUrl" />
                            <div class="ld_li_info">
                                <p class="ld_li_info_tit">{{item.uid}}</p>
                                <p class="ld_li_info_desc">{{item.information}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-if="+item.status === 0">
                <p class="label_radio">
                    <van-radio-group v-model="params.type">
                        <van-radio name="0">继续咨询</van-radio>
                        <van-radio name="1">已解决</van-radio>
                    </van-radio-group>
                </p>
                <van-field
                    class="textarea_input"
                    v-model="params.information"
                    type="textarea"
                    placeholder="请输入回复"
                    rows="8"
                    autosize
                />
                <div class="btn_wrap">
                    <van-button @click="submit" size="large">提交</van-button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex'
import { Field, Cell, CellGroup, Button, Toast, RadioGroup, Radio } from 'vant';
import {
 Getlegalconsultinginfo,
 Postlegalconsultinginfo,
 Updatelegalconsulting
} from "@/service/getData";
import { Q_TYPE } from '@/utils/constants';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

Vue.use(Field);
Vue.use(Cell).use(CellGroup);
Vue.use(Button);
Vue.use(Toast);
Vue.use(RadioGroup);
Vue.use(Radio);
export default {
    data(){
        return{
            Q_TYPE,
            radio: '1',
            list: [],
            params: {
                type: '0',
                information: ''
            }
        }
    },
    computed: {
         ...mapState([
            'defaultUrl', 'result'
        ]),
    },
    created() {
        this.getData();
    },
    methods: {
        async getData(){
            const { user_type, ufid, uid } = JSON.parse(window.localStorage.getItem('result'));
            this.loading = true;
            const params = this.$route.query;
            this.item = params;
            const data = await Getlegalconsultinginfo({ qid:  params.id });
            this.loading = false;
            this.list = (data && data.list) || [];
        },
        async submit(){
            const params = this.$route.query;
            if(this.params.type === '0'){
                if(this.params.information){
                    const data = await Postlegalconsultinginfo({ ...this.params, uid: params.uid, qid: params.id, type: 0 });
                    // if(this.params.type === '1'){
                    // await Updatelegalconsulting({ status: this.params.type, qid: params.id });
                    // }
                    if(data.result === 'True'){
                        Toast('操作成功');
                        this.$router.push({ path: '/low' });
                    }
                }else{
                    Toast('回复不能为空');
                    return;
                }
            }
            if(this.params.type === '1'){
                await Postlegalconsultinginfo({ ...this.params, uid: params.uid, qid: params.id, type: 0 });
                const data = await Updatelegalconsulting({ status: this.params.type, qid: params.id });
                if(data.result === 'True'){
                    Toast('操作成功');
                    this.$router.push({ path: '/low' });
                }
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
@import '../../style/mixin/border-retina.scss';
.ld_con {
    background-color: #fff;
    padding: 16px;
}
.ld_tit {
    font-weight: bold;
    font-size: 16px;
    color: #1E2227;
    line-height: 40px;
}
.ld_detail {
    font-size: 14px;
    color: #333;
    line-height: 20px;
}
.ld_time {
    font-size: 12px;
    color: #92979E;
    line-height: 24px;
}
.ld_reply {
    margin-top: 10px;
    background-color: #fff;
}
.ld_li {
    position: relative;
    padding: 16px;
    &:after {
        @include border-retina(bottom, #DFDFDF);
    }
}
.ld_li_tit {
    font-size: 12px;
    color: #333;
    line-height: 30px;
    span {
        margin-right: 5px;
        font-size: 15px;
        color: #1E2227;
    }
}
.ld_li_con {
    display: flex;
    margin-top: 10px;
    img {
        width: 40px;
        height: 40px;
    }
    .ld_li_info {
        padding-left: 10px;

    }
}
.ld_li_info_tit {
    font-weight: bold;
    font-size: 12px;
    color: #1E2227;
    line-height: 12px;
}
.ld_li_info_desc {
    margin-top: 10px;
    font-size: 12px;
    color: #333;
    line-height: 16px;
}

.add_low {
    .label_radio {
        display: flex;
        padding: 10px 0 0;
        // padding: 0 15px;
        font-size: 15px;
        color: #1E2227;
        // line-height: 44px;
        background-color: #fff;
        .van-radio-group {
            display: flex;
        }
        .van-radio {
            margin-left: 10px;
        }
        .van-radio__label {
            margin-left: 4px!important;
        }
    }
    .textarea_input {
        .van-field__control {
            padding: 8px;
            background: #FBFBFD;
            border: 1px solid #DFDFDF;
            border-radius: 4px;
        }
    }
}
.btn_wrap {
    padding: 6px 16px 10px;
    background-color: #fff;
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
.wap_scroll {
    height: calc(100vh - 98px);
    overflow-y: auto;
    margin: 44px 0 53px;
    background-color: #f3f6fb;
}

</style>
