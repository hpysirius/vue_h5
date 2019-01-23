<template>
  	<div>
        <Header title="法律咨询"></Header>
        <div class="wap_scroll add_low">
            <div class="ld_con">
                <p class="ld_tit">知乎是中文互联网知名知识分享平台?</p>
                <p class="ld_detail">
                    知乎是中文互联网知名知识分享平台?接一切」为愿景,致力于构建一个人人都可以便捷接入的知识分享网络,让人们便捷地与世界分享知识、经验？
                </p>
                <p class="ld_time">
                    创建时间：2019-01-06 21:23:21
                </p>
  	        </div>
            <div class="ld_reply">
                <ul class="ld_list">
                    <li class="ld_li">
                        <p class="ld_li_tit">
                            <span>回复</span>2019-01-06 21:23:21
                        </p>
                        <div class="ld_li_con">
                            <img :src="defaultUrl" />
                            <div class="ld_li_info">
                                <p class="ld_li_info_tit">昵称名字</p>
                                <p class="ld_li_info_desc">知乎是中文互联网知名知识分享平台?接一切」为愿景,致力于构建一个人人都可以便捷接入的知识分享网络,让人们便捷地与世界分享知识、经验？</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <p class="label_radio">
                <van-radio-group v-model="radio">
                    <van-radio name="1">继续咨询</van-radio>
                    <van-radio name="2">已解决</van-radio>
                </van-radio-group>
            </p>
            <van-field
                class="textarea_input"
                v-model="params.question"
                type="textarea"
                placeholder="请输入回复"
                rows="8"
                autosize
            />
            <div class="btn_wrap">
                <van-button @click="submit" size="large">提交</van-button>
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
 Postlegalconsultinginfo
} from "@/service/getData";
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
            radio: '1',
            params: {
                // uid: 0,
                title: '',
                question: ''
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
            const { uid } = this.$store.state.result
            this.loading = true;
            const params = this.$route.query;
            console.log(params);
            const data = await Postlegalconsultinginfo({ uid: params.uid || 0, qid: params.id });
            this.loading = false;
            this.list = (data && data.list) || [];
        },
        async submit(){
            const { uid } = this.$store.state.result
            if(this.params.title && this.params.question){
                const data = await Postlegalconsulting({ ...this.params, uid: uid || 0 });
                if(data.result === 'True'){
                    Toast('新建成功');
                    this.$router.push({ path: '/low' });
                }
            }else{
                Toast('标题或回复不能为空');
                return;
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
