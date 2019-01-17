<template>
  	<div>
        <Header title="实名认证"></Header>
        <div class="wap_scroll">
            <h3 class="com_tit">基础信息</h3>
            <div class="com_con">
                <van-cell-group>
                   <van-cell title="姓名" is-link value="请输入姓名" />
                   <van-cell title="身份证号" value="请输入身份证号码" />
                   <van-cell title="性别" is-link value="请选择性别" />
                   <van-cell-group>
                    <van-field
                        v-model="message"
                        label="联系地址"
                        type="textarea"
                        placeholder="请输入联系地址"
                        rows="4"
                        autosize
                    />
                    </van-cell-group>
                </van-cell-group>
            </div>
            <h3 class="com_tit">证件信息</h3>
            <div class="com_con">
                <van-cell-group>
                   <van-uploader :after-read="onRead">
                        111
                    </van-uploader>
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
import { RadioGroup, Radio, Cell, CellGroup, Field, Button, Uploader } from 'vant';
import { mapState, mapMutations } from 'vuex'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ComplainList from '../../components/ComplainList'

Vue.use(Button);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Cell).use(CellGroup);
Vue.use(Field);
Vue.use(Uploader);
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
