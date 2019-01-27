<template>
  	<div>
        <Header title="忘记密码"></Header>
        <div class="wap_scroll">
            <h3 class="com_tit"></h3>
            <div class="com_con">
                <van-field
                    label="用户名"
                    v-model="params.username"
                    placeholder="请输入用用户名"
                    :error="false"
                />
                <van-field
                    label="联系电话"
                    v-model="params.telphone"
                    placeholder="请输入用联系电话"
                    :error="false"
                />
                <van-field
                    label="密码"
                    v-model="params.pwd"
                    type="password"
                    placeholder="请输入用户密码"
                    :error="false"
                />
                <van-field
                    label="确认密码"
                    v-model="params.confirm"
                    type="password"
                    placeholder="请输入用户确认密码"
                    :error="false"
                />
            </div>
            <div class="btn">
                <van-button @click="submit" size="large" type="default">提交</van-button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { RadioGroup, Radio, Cell, CellGroup, Field, Button, Toast } from 'vant';
import { mapState, mapMutations } from 'vuex'
import {
 Updatepwd
} from "@/service/getData";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ComplainList from '../../components/ComplainList'

Vue.use(Button);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Cell).use(CellGroup);
Vue.use(Field);
Vue.use(Toast);
export default {
    data(){
        return{
            a: 1,
            radio: '1',
            params: {

            }
        }
    },
    computed: {
         ...mapState([
            'userInfo'
        ]),
    },
    methods: {
        async submit(){
            if(this.params.username && this.params.pwd){
                if(this.params.pwd === this.params.confirm){
                    delete this.params.confirm;
                    const data = await Updatepwd(this.params);
                    if(data.result === 'False'){
                        Toast(data.msg || '请求错误');
                    }else{
                        Toast(data.msg || '操作成功');
                        // this.$store.commit("SET_RESULT", data);
                        // window.localStorage.setItem('isLogin', '1')
                        // window.localStorage.setItem('result', JSON.stringify(data))
                        this.$router.push({ path: '/login', query: data });
                    }
                }else{
                    Toast('两次密码不一致');
                    return;
                }
                
            }else{
                Toast('用户名或密码不能为空');
                return;
            }
        }
    },
    components: {
        Footer,
        Header,
        ComplainList,
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
.com_tit {
    margin-top: 10px;
    line-height: 40px;
    text-indent: 16px;
    font-weight: normal;
    font-size: 14px;
    color: #92979E;
}
.btn {
    margin: 10px 0;
    padding: 16px;
    // background-color: #fff;
    .van-button--large {
        background: #00BEAF;
        border-radius: 8px;
        .van-button__text {
            color: #fff;
        }
    }
}
.com_con {
    .van-radio-group {
        display: inline-block;
    }
    .van-radio, .comvan-title {
        float: left;
        display: inline-block;
        height: 22px;
    }
    .van-radio__label {
        margin-left: 4px!important;
    }
    .van-radio {
        margin-left: 10px;
    }
}

</style>
