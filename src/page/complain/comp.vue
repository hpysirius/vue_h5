<template>
  	<div>
        <Header title="投诉"></Header>
        <div class="wap_scroll">
            <h3 class="com_tit">投诉信息</h3>
            <div class="com_con">
                <van-cell-group>
                   <van-cell title="单元格">
                        <template slot="title"> 
                            <span class="comvan-title">投诉对象：</span>
                            <van-radio-group v-model="radio">
                                <van-radio name="1">家政企业</van-radio>
                                <van-radio name="2">服务人员</van-radio>
                                <van-radio name="3">雇主</van-radio>
                            </van-radio-group>
                        </template>
                   </van-cell>
                   <van-cell title="企业名称" is-link value="请选择投诉企业" />
                   <van-cell title="信用代码" value="填写企业后自动填充" />
                   <van-cell title="服务类型" is-link value="请选择服务类型" />
                   <van-cell-group>
                    <van-field
                        v-model="message"
                        label="投诉说明"
                        type="textarea"
                        placeholder="请填写投诉说明，最多不超过300字"
                        rows="4"
                        autosize
                    />
                    </van-cell-group>
                </van-cell-group>
            </div>
            <h3 class="com_tit">投诉人信息</h3>
            <div class="com_con">
                <van-cell-group>
                   <van-cell title="单元格">
                        <template slot="title"> 
                            <span class="comvan-title">投诉对象：</span>
                            <van-radio-group v-model="radio">
                                <van-radio name="1">家政企业</van-radio>
                                <van-radio name="3">雇主</van-radio>
                            </van-radio-group>
                        </template>
                   </van-cell>
                   <van-field label="投诉人" v-model="value" placeholder="请填写姓名" />
                   <van-field label="联系电话" v-model="value" placeholder="请填写联系电话" />
                   <van-field
                        v-model="sms"
                        center
                        clearable
                        label="验证码"
                        placeholder="请输入验证码"
                    >
                        <van-button slot="button" size="small" plain type="primary">获取验证码</van-button>
                    </van-field>
                </van-cell-group>
            </div>
            <div class="btn">
                <van-button size="large" type="default">查询</van-button>
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
    line-height: 40px;
    text-indent: 16px;
    font-weight: normal;
    font-size: 14px;
    color: #92979E;
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
