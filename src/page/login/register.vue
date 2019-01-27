<template>
  	<div>
        <Header title="注册"></Header>
        <div class="wap_scroll">
            <h3 class="com_tit"></h3>
            <div class="com_con">
                <van-cell-group>
                   <van-cell title="单元格">
                        <template slot="title"> 
                            <span class="comvan-title">用户名:</span>
                            <van-radio-group v-model="params.user_type">
                                <van-radio name="0">普通用户</van-radio>
                                <van-radio name="1">家政企业</van-radio>
                                <van-radio name="2">家政从业人员</van-radio>
                            </van-radio-group>
                        </template>
                   </van-cell>
                   <!-- <van-cell title="登录名" value="请输入用户名登录名" />
                   <van-cell title="密码" value="请输入用户登录新密码" />
                   <van-cell title="确认密码" value="请再次输入密码" /> -->
                </van-cell-group>
                <van-field
                    label="登录名"
                    v-model="params.username"
                    placeholder="请输入用登录名"
                    :error="false"
                />
                <van-field
                    label="手机号"
                    v-model="params.telphone"
                    placeholder="请输入用手机号"
                    :error="false"
                />
                <van-field
                    label="密码"
                    v-model="params.pwd"
                    type="password"
                    placeholder="请输入用密码"
                    :error="false"
                />
                <van-field
                    label="确认密码"
                    v-model="params.confirm"
                    type="password"
                    placeholder="请输入用确认密码"
                    :error="false"
                />
            </div>
            <div class="btn">
                <van-button 
                    size="large"
                    type="default"
                    @click="submit"
                    
                >提交</van-button>
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
 Register
} from "@/service/getData";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ComplainList from '../../components/ComplainList'

Vue.use(Button);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Cell).use(CellGroup);
Vue.use(Toast);
Vue.use(Field);
export default {
    data(){
        return{
            a: 1,
            radio: '1',
            params: {
                user_type: '0',
                username: '',
                pwd: '',
                telphone: ''
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
                    const data = await Register(this.params);
                    if(data.result === 'False'){
                        Toast(data.msg || '请求错误');
                    }else{
                        Toast(data.msg || '注册成功');
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
