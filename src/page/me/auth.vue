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
                <van-cell-group class="upload_con">
                   <van-uploader class="upload_item" :after-read="onRead">
                        <img :src="uploadUrl" />
                        <p>上传身份证人像面</p>
                    </van-uploader>
                    <van-uploader class="upload_item" :after-read="onRead">
                        <img :src="uploadUrl" />
                        <p>上传身份证人像面</p>
                    </van-uploader>
                </van-cell-group>
            </div>
            <h3 class="com_tit">证件信息</h3>   
            <div class="com_con">
                <van-checkbox-group v-model="result">
                    <van-checkbox
                        v-for="(item) in list"
                        :key="item"
                        :name="item"
                        shape="square"
                    >
                        {{ item }}
                    </van-checkbox>
                </van-checkbox-group>
            </div>
            <van-field
                v-model="sms"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
                class="code"
            >
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
            <div class="btn">
                <van-button size="large" type="default">查询</van-button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { RadioGroup, Radio, Cell, CellGroup, Field, 
Button, Uploader, Checkbox, CheckboxGroup } from 'vant';
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
Vue.use(Checkbox).use(CheckboxGroup);
export default {
    data(){
        return{
            uploadUrl: require('../../assets/upload.png'),
            list: ['住家保姆', '不住家保姆', '月嫂', '住家保姆', '不住家保姆', '月嫂', '住家保姆', '不住家保姆', '月嫂'],
            result: ['a', 'b'],
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
.upload_con {
    display: flex;
    padding: 0 8px;
    .upload_item {
        position: relative;
        padding: 16px 8px 8px;
        flex: 1;
        img {

            width: 100%;
        }
        p {
            position: absolute;
            left: 0;
            width: 100%;
            bottom: 30px;
            display: block;
            font-size: 12px;
            color: #00BEAF;
            text-align: center;
            line-height: 24px;
        }
    }
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
    background-color: #fff;
    .van-checkbox-group {
        display: flex;
        flex-wrap: wrap;
    }
    .van-checkbox { 
        padding: 0 16px;
        font-size: 14px;
        color: #333;
        line-height: 40px;
        .van-checkbox__icon--checked .van-icon {
            background-color: #00BEAF;
            border-color: #00BEAF;
        }
    }
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
.code {
    margin-top: 10px;
    .van-button--primary {
        background-color: #00BEAF;
    }

}

</style>
