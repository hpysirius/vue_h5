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
                            <van-radio-group v-model="radio">
                                <van-radio name="1">普通用户</van-radio>
                                <van-radio name="2">家政企业</van-radio>
                                <van-radio name="3">家政从业人员</van-radio>
                            </van-radio-group>
                        </template>
                   </van-cell>
                   <van-cell title="登录名" value="请输入用户名登录名" />
                   <van-cell title="密码" value="请输入用户登录新密码" />
                   <van-cell title="确认密码" value="请再次输入密码" />
                </van-cell-group>
            </div>
            <div class="btn">
                <van-button size="large" type="default">提交</van-button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { RadioGroup, Radio, Cell, CellGroup, Field, Button } from 'vant';
import { mapState, mapMutations } from 'vuex'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ComplainList from '../../components/ComplainList'

Vue.use(Button);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Cell).use(CellGroup);
Vue.use(Field);
export default {
    data(){
        return{
            a: 1,
            radio: '1'
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
