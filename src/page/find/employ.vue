<template>
  	<div>
        <Header title="申请服务"></Header>
        <div class="wap_scroll">
            <van-loading type="spinner" v-if="loading" />
            <h3 class="com_tit">基础信息</h3>
            <div class="emp_con">
                <van-checkbox-group v-model="params.result">
                    <van-checkbox
                        v-for="(item, index) in skillList"
                        :key="index"
                        :name="item.code"
                        shape="square"
                    >
                        {{ item.skill }}
                    </van-checkbox>
                </van-checkbox-group>
            </div>
            <h3 class="com_tit">时间信息</h3>
            <van-cell 
                title="服务开始时间" 
                v-model="form.start_time"
                is-link 
                value="请选择服务开始时间"
                @click="openSelectDate('start_time')"
            />
            <van-cell 
                title="服务结束时间" 
                v-model="form.end_time"
                is-link 
                value="请选择服务结束时间"
                @click="openSelectDate('end_time')"
            />
            <van-cell 
                title="服务时间合计" 
                v-model="form.days"
            />
            <h3 class="com_tit">公司信息</h3>
            <van-cell 
                v-if="type === 'company'"
                title="家政公司" 
                v-model="form.company"
                is-link 
                value="请选择家政公司"
                @click="openSelectCompany"
            />
            <van-cell 
                v-if="type === 'person'"
                title="家政人员" 
                v-model="form.oner"
                is-link 
                value="请选择家政人员"
                @click="openSelectPerson"
            />
            <van-field
                v-model="form.requires"
                label="服务要求"
                type="textarea"
                placeholder="请填写服务要求，最多不超过300字"
                rows="4"
                autosize
            />
            <div class="com_btn_wrap">
                <van-button @click="submit" size="large">提交申请</van-button>
            </div>
        </div>
        <Footer></Footer>
         <van-popup v-model="showStartDate" position="bottom" :overlay="true">
            <van-datetime-picker
                v-model="currentDate"
                type="datetime"
                :min-date="minStartDate"
                :max-date="maxDate"
                @confirm="confirmDate"
                :formatter="formatter"
            />
        </van-popup>
        <van-popup v-model="showEndDate" position="bottom" :overlay="true">
            <van-datetime-picker
                v-model="currentDate"
                type="datetime"
                :min-date="minEndDate"
                :max-date="maxDate"
                @confirm="confirmDate"
                :formatter="formatter"
            />
        </van-popup>
        <van-actionsheet
            v-model="show"
            :actions="selectList"
            cancel-text="取消"
            @select="onSelect"
        />
    </div>
</template>
<script>
import Vue from 'vue';
import { Cell, 
CellGroup, Tag, 
Rate, Field, 
Loading, Toast,
Checkbox, CheckboxGroup,
Popup, DatetimePicker,
Actionsheet } from 'vant';
import { mapState, mapMutations } from 'vuex'
import {
    Getuserinfo, 
    Getskills,
    Pullcompany,
    Creatorder,
    Pullpractitioner
} from "@/service/getData";
import { YMDH } from '@/utils/constants'
import moment from 'moment';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FindList from '../../components/FindList'
import { AUTHSTSTUS } from '../../utils/constants';

Vue.use(Cell).use(CellGroup);
Vue.use(Tag);
Vue.use(Rate);
Vue.use(Field);
Vue.use(Loading);
Vue.use(Toast);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Popup);
Vue.use(Actionsheet);
Vue.use(DatetimePicker);

export default {
    data(){
        return{
            params: {
                result: []
            },
            show: false,
            selectList: [],
            skillList: [],
            showType: '',
            user_type: '',
            loading: false,
            AUTHSTSTUS,
            item: {},
            form: {
                days: '',
                company: '',
                company_id: 0,
                start_time: '',
                end_time: '',
                oner: '', // 服务家政人员
                ufid: 0, // 家政人员id
            },
            showStartDate: false,
            showEndDate: false,
            showDateType: '',
            currentDate: new Date(),
            minStartDate: new Date(),
            minEndDate: new Date(),
            maxDate: new Date(2030, 10, 1),
        }
    },
    computed: {
         ...mapState([
            'userInfo', 'result', 'defaultUrl'
        ]),
    },
    created() {
        this.getData();
        this.type = this.$route.query.type;
        const name = this.$route.query.name;
        const id = this.$route.query.id;
        if(this.type === 'person'){
            this.form.oner = name;
            this.form.ufid = id;
        }
        if(this.type === 'company'){
            this.form.company = name;
            this.form.company_id = id;
        }
    },
    methods: {
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            } else if (type === 'month') {
                return `${value}月`
            } else if( type === 'day') {
                return `${value}日`
            } else if( type === 'hour') {
                return `${value}时`
            } else if( type === 'minute') {
                return `${value}分`
            }
            return value;
        },
        async getData() {
            const { user_type, ufid, uid } = JSON.parse(window.localStorage.getItem('result'));
            this.user_type = user_type;
            this.loading = true;
            const data =  await Getuserinfo({ user_type, ufid });
            const skills = await Getskills();
            this.skillList = skills.list || [];
            const companyData = await Pullcompany();
            const personList =  await Pullpractitioner();
            this.companyList = (companyData && companyData.list) || [];
            this.personList = (personList && personList.list) || [];
            this.loading = false;
            if(data.result === 'True'){
                if(data.skills){
                    const { list } = await Getskills({ uid: uid || 0 });
                    data.skills = data.skills.split('|').map(item => {
                        const findItem = list.find(skill => skill.code === item)
                        return findItem.skill
                    }).join(',')
                }
                this.item = data;
            }else{
                this.item = {};
                Toast('暂无数据');
            }
        },
        openSelectDate(type){
            // this.showDate = true;
            this.showDateType = type;
            if(type === 'start_time'){
                this.showStartDate = true;
            }else{
                this.showEndDate = true;
            }
        },
        confirmDate(date){
            console.log(this.showDateType);
            this.form[this.showDateType] = moment(date).format(YMDH);
            if(this.showDateType === 'start_time'){
                this.minEndDate = date;
            }
            if(this.form.start_time && this.form.end_time){
                const m2 = moment(this.form.end_time);
                const m1 = moment(this.form.start_time);
                this.form.days = (moment.duration(m2 - m1, 'ms')/86400000).toFixed(1);
            }
            this.showStartDate = false;
            this.showEndDate = false;
            this.showDateType = '';
        },
        openSelectCompany(){
            this.showType = 'company';
            this.selectList = this.companyList;
            this.show = true;
        },
        openSelectPerson(){
            this.showType = 'person';
            this.selectList = this.personList;
            this.show = true;
        },
        onSelect(item){
            switch(this.showType){
                case 'company': 
                    this.form.company = item.name;
                    this.form.company_id = item.id;
                    this.show = false;
                    break;
                case 'person':
                    this.form.oner = item.name;
                    this.form.ufid = item.id;
                    this.show = false;
                    break;
                case 'skill':
                    this.form.complain_skills = item.code;
                    this.form.complain_skillsName = item.name;
                    this.show = false;
                    break;
                case 'cause':
                    const arr = this.selected;
                    if(arr.includes(item.code)){
                        const index = arr.findIndex(val => item.code === val);
                        arr.splice(index, 1);
                        this.selectedName.splice(index, 1);
                        this.selected = arr;
                    }else{
                        this.selected.push(item.code);
                        this.selectedName.push(item.name);
                        const index = this.causeList.findIndex(cause => item.code === cause.code);
                        this.causeList[index].className = 'active';
                        this.selectList = this.causeList;
                    }
                    this.complain_cause_name = this.selectedName.join(',');
                    this.form.complain_cause = this.selected.join('|');
                    break;
                default:
                    break;
            }
            
        },
        async submit(){
            const { uid } = JSON.parse(window.localStorage.getItem('result'));
            const params = this.$route.query;
            this.form.skills = this.params.result.join('|');
            const data = await Creatorder({ ...this.form, uid });
            if(data.result === 'True'){
                Toast(data.msg || '操作成功');
                window.history.go(-1);
                // this.$router.push({ path: '/person' });
            }
            // if((this.params.information && this.params.type === '0') || this.params.type === '1'){
                
            // }else{
            //     Toast('回复不能为空');
            //     return;
            // }
        }
    },
    components: {
        Footer,
        Header,
        FindList,
    },
    
}

</script>

<style lang="scss">
.com_btn_wrap {
    padding: 15px 16px 20px;
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
.com_tit {
    line-height: 40px;
    text-indent: 16px;
    font-weight: normal;
    font-size: 14px;
    color: #92979E;
}
.emp_con {
    background-color: #fff;
    .van-checkbox-group {
        display: flex;
        flex-wrap: wrap;
    }
    .van-checkbox { 
        width: 33%;
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
}
.wap_scroll {
    height: calc(100vh - 98px);
    overflow-y: auto;
    margin: 44px 0 53px;
    background-color: #f3f6fb;
}
.ss_con {
    padding: 0 8px;
}
.me_vancel {
    margin-bottom: 1px;
    font-weight: normal;
    font-size: 15px;
    color: #fff;
    background: #00BEAF;
    .van-cell__value {
        color: #fff!important;
    }
    .van-cell__right-icon {
        color: #fff!important;
    }
}
.me_vancel:not(:last-child)::after {
    border-bottom: none!important;
}
.per_list {
    .per_li {
        display: flex;
        background-color: #fff;
        padding: 20px 20px 10px 16px;
        // margin-bottom: 10px;
    }
    .per_img {
        width: 40px;
        height: 40px;
        border-radius: 4px;
    }
    .per_info {
        width: 100%;
        padding-left: 10px;
    }
    .per_wrap {
        display: flex;
        justify-content: space-between;
        .per_left {
            h3 {
                font-size: 14px;
                color: #1E2227;
                line-height: 24px;
            }
            .level {
                display: flex;
                font-size: 11px;
                color: #555;
                line-height: 26px;
            }
            .phone {
                font-size: 12px;
                color: #00BEAF;
                line-height: 20px;
            }
        }
        .per_right {
            .van-button--primary {
                width: 64px;
                height: 32px;
                line-height: 32px;
                background: #00BEAF;
                border-radius: 4px;
            }
        }
    }
    .per_desc {
        padding: 10px 0 5px;
        font-size: 13px;
        color: #333;
        letter-spacing: 0;
        line-height: 18px;
    }
}
.me_celtit {
    .van-cell__title {
        font-weight: bold;
    }
}
.end {
    margin-bottom: 20px;
}
</style>
