<template>
  	<div>
        <Header title="新建咨询"></Header>
        <div class="wap_scroll add_low">
            <p class="label">回复</p>
            <van-cell-group>
                <van-field label="标题" v-model="params.title" placeholder="请输入标题" />
            </van-cell-group>
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
import { Field, Cell, CellGroup, Button, Toast } from 'vant';
import {
 Postlegalconsulting
} from "@/service/getData";
import Header from '../../components/Header'
import Footer from '../../components/Footer'

Vue.use(Field);
Vue.use(Cell).use(CellGroup);
Vue.use(Button);
Vue.use(Toast);
export default {
    data(){
        return{
            params: {
                // uid: 0,
                title: '',
                question: ''
            }
        }
    },
    computed: {
         ...mapState([
            'userInfo', 'result'
        ]),
    },
    methods: {
        async submit(){
            // const { uid } = this.$store.state.result
            const { uid } = JSON.parse(window.localStorage.getItem('result'));
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
.add_low {
    .label {
        padding: 0 15px;
        font-size: 15px;
        color: #1E2227;
        line-height: 44px;
        background-color: #fff;
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
