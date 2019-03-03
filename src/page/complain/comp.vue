<template>
  	<div>
        <Header title="投诉"></Header>
        <div class="wap_scroll">
            <h3 class="com_tit">投诉信息</h3>
            <div class="com_con">
                   <van-cell title="单元格">
                        <template slot="title"> 
                            <span class="comvan-title">投诉对象：</span>
                            <van-radio-group v-model="form.complain_type">
                                <van-radio name="0">家政企业</van-radio>
                                <van-radio name="1">服务人员</van-radio>
                                <van-radio name="2">雇主</van-radio>
                            </van-radio-group>
                        </template>
                   </van-cell>
                <van-cell-group v-if="form.complain_type === '0'">
                    <van-cell 
                        title="企业名称" 
                        v-model="form.complain_company_name"
                        is-link 
                        value="请选择投诉企业"
                        @click="openSelectCompany"
                    />
                    <van-cell v-model="form.complain_company_code" title="信用代码" value="填写企业后自动填充" />
                    <van-cell 
                        title="服务类型"
                        is-link
                        v-model="form.complain_skillsName"
                        @click="openSelectSkills"
                    />
                        <van-field
                            v-model="form.complain_complain_info"
                            label="投诉说明"
                            type="textarea"
                            placeholder="请填写投诉说明，最多不超过300字"
                            rows="4"
                            autosize
                        />
                </van-cell-group>
                <van-cell-group v-if="form.complain_type === '1'">
                    <van-field label="姓名" v-model="form.complain_practitioner_name" placeholder="请填写姓名" />
                    <van-field label="身份证号" v-model="form.complain_id_card" placeholder="请填写身份证号" />
                    <van-field label="联系电话" v-model="form.complain_telphone" placeholder="请填写联系电话" />
                    <van-cell 
                        title="投诉原因" 
                        v-model="complain_cause_name"
                        is-link 
                        value="请选择投诉原因"
                        @click="openSelectCause"
                    />
                    <!-- <van-checkbox-group class="cause_list" v-model="form.complain_cause">
                        <van-checkbox
                            v-for="(item) in causeList"
                            :key="item.code"
                            :name="item.cause"
                        >   
                         {{ item.cause }}
                        </van-checkbox>
                    </van-checkbox-group> -->
                    <van-field
                        v-model="form.complain_complain_info"
                        label="投诉说明"
                        type="textarea"
                        placeholder="请填写投诉说明，最多不超过300字"
                        rows="4"
                        autosize
                    />
                    <van-cell>
                        <template slot="title"> 
                            <span class="comvan-title">从业人员是否有挂靠公司：</span>
                            <van-radio-group v-model="form.complain_companies">
                                <van-radio name="0">没有</van-radio>
                                <van-radio name="1">有</van-radio>
                            </van-radio-group>
                        </template>
                   </van-cell>
                   <van-cell 
                        v-if="form.complain_companies === '1'"
                        title="企业名称" 
                        v-model="form.complain_companies_company_name"
                        is-link 
                        value="请选择公司名称"
                        @click="openSelectCompany"
                    />
                    <van-cell 
                        title="事发时间" 
                        v-model="form.complain_incident_time"
                        is-link 
                        value="请选择事发时间"
                        @click="openSelectDate"
                    />
                </van-cell-group>
                <van-cell-group v-if="form.complain_type === '2'">
                    <van-field label="姓名" v-model="form.complain_employer_name" placeholder="请填写姓名" />
                    <van-field label="身份证号" v-model="form.complain_id_card" placeholder="请填写身份证号" />
                    <van-field label="联系电话" v-model="form.complain_telphone" placeholder="请填写联系电话" />
                    <van-cell 
                        title="服务类型"
                        is-link
                        v-model="form.complain_skillsName"
                        @click="openSelectSkills"
                    />
                    <!-- <van-checkbox-group class="cause_list" v-model="form.complain_cause">
                        <van-checkbox
                            v-for="(item) in causeList"
                            :key="item.code"
                            :name="item.cause"
                        >   
                         {{ item.cause }}
                        </van-checkbox>
                    </van-checkbox-group> -->
                    <van-field
                        v-model="form.complain_complain_info"
                        label="投诉说明"
                        type="textarea"
                        placeholder="请填写投诉说明，最多不超过300字"
                        rows="4"
                        autosize
                    />
                    <van-cell 
                        title="事发时间" 
                        v-model="form.complain_incident_time"
                        is-link 
                        value="请选择事发时间"
                        @click="openSelectDate"
                    />
                </van-cell-group>
            </div>
            <h3 class="com_tit">投诉人信息</h3>
            <div class="com_con">
                   <van-cell title="单元格">
                        <template slot="title"> 
                            <span class="comvan-title">投诉对象：</span>
                            <van-radio-group v-if="form.complain_type === '0'" v-model="form.plaintiff_type">
                                <van-radio name="0">家政人员</van-radio>
                                <van-radio name="1">雇主</van-radio>
                            </van-radio-group>
                            <van-radio-group v-if="form.complain_type === '1'" v-model="form.plaintiff_type">
                                <van-radio name="1">雇主</van-radio>
                                <van-radio name="2">公司</van-radio>
                            </van-radio-group>
                            <van-radio-group v-if="form.complain_type === '2'" v-model="form.plaintiff_type">
                                <van-radio name="0">家政人员</van-radio>
                                <van-radio name="2">公司</van-radio>
                            </van-radio-group>
                        </template>
                   </van-cell>
                   <van-cell-group v-if="form.plaintiff_type !== '2'">
                    <van-field label="投诉人" v-model="form.plaintiff_name" placeholder="请填写姓名" />
                    <van-field label="联系电话" v-model="form.plaintiff_telphone" placeholder="请填写联系电话" />
                   </van-cell-group>
                   <van-cell-group v-if="form.plaintiff_type === '2'">
                    <van-field label="企业名称" v-model="form.plaintiff_company_name" placeholder="请填写企业名称" />
                    <van-field label="联系人" v-model="form.paintiff_contacts" placeholder="请填写姓名" />
                    <van-field label="联系电话" v-model="form.plaintiff_telphone" placeholder="请填写联系电话" />
                   </van-cell-group>
            </div>
            <div class="btn">
                <van-button @click="submit" size="large" type="default">投诉</van-button>
            </div>
        </div>
        <Footer></Footer>
        <van-popup v-model="showDate" position="bottom" :overlay="false">
            <van-datetime-picker
                v-model="currentDate"
                type="datetime"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="confirmDate"
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
import { RadioGroup, Radio, Cell, CellGroup, 
Field, Button, Actionsheet, Toast, Checkbox, 
CheckboxGroup, DatetimePicker, Popup } from 'vant';
import { mapState, mapMutations } from 'vuex'
import {
 Pullcompany, Getskills, Postcomplaininfo, Getcause
} from "@/service/getData";
import { YMDHMS } from '@/utils/constants'
import moment from 'moment';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ComplainList from '../../components/ComplainList'

Vue.use(Button);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Cell).use(CellGroup);
Vue.use(Field);
Vue.use(Actionsheet);
Vue.use(Toast);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(DatetimePicker);
Vue.use(Popup);
export default {
    data(){
        return{
            showDate: false,
            show: false,
            showType: '',
            selectList: [],
            companyList: [],
            killsList: [],
            causeList: '',
            selected: [],
            selectedName: [],
            complain_cause_name: '',
            currentDate: new Date(),
            minDate: new Date(2010, 10, 1),
            maxDate: new Date(),
            form: {
                // 投诉企业填写信息
                complain_type: '0',
                complain_company_name: '', // 企业名称
                complain_company_code: '', // 信用代码
                complain_skills: '',    // 服务类型
                complain_complain_info: '', // 
                // 投投诉从业人员填写信息:
                complain_practitioner_name: '',
                complain_id_card: '',
                complain_telphone: '',
                complain_cause: '',
                // complain_complain_info: '',
                complain_companies: '0',
                complain_companies_company_name: '',
                complain_incident_time: '',
                // 投诉雇主填写信息
                complain_employer_name: '',
                // 投诉人类型：0家政人员,1雇主,2公司
                // 家政人员或雇主填写信息
                plaintiff_type: '0',
                plaintiff_name: '',
                plaintiff_telphone: ''
                // 
                // complain_id_card: '',
                // complain_telphone: '',
                // complain_skills: '',
                // complain_complain_info: '',
                // complain_incident_time: ''

            }
        }
    },
    computed: {
        ...mapState([
            'userInfo'
        ]),
    },
    created() {
        this.getData();
    },
    methods: {
        async getData(){
            // const { uid } = this.$store.state.result
            const { uid } = JSON.parse(window.localStorage.getItem('result'));
            const params = this.$route.query;
            const companyData = await Pullcompany({ uid: params.uid || 0, qid: params.id });
            this.companyList = (companyData && companyData.list) || [];
            const killsData = await Getskills();
            const killsList = (killsData && killsData.list) || [];
            const causeData = await Getcause();
            const causeList = (causeData && causeData.list) || [];
            this.causeList = causeList.map(item => { 
                item.name = item.cause 
                return item;
            });

            this.killsList = killsList.map(item => { return {name: item.skill, code:item.code } });
            console.log(this.causeList);
        },
        openSelectCompany(){
            this.showType = 'company';
            this.selectList = this.companyList;
            this.show = true;
        },
        openSelectSkills(){
            this.showType = 'skill';
            this.selectList = this.killsList;
            this.show = true;
        },
        openSelectCause(){
            this.showType = 'cause';
            this.selectList = this.causeList;
            this.show = true;
        },
        openSelectDate(){
            this.showDate = true;
        },
        confirmDate(date){
            this.form.complain_incident_time = moment(date).format(YMDHMS);
            this.showDate = false;
        },
        onSelect(item){
            switch(this.showType){
                case 'company': 
                    this.form.complain_companies_company_name = item.name;
                    this.form.complain_company_name = item.name;
                    this.form.complain_company_code = item.company_code;
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
                        console.log(this.causeList);
                        this.selectList = this.causeList;
                    }
                    console.log(this.selectedName);
                    this.complain_cause_name = this.selectedName.join(',');
                    this.form.complain_cause = this.selected.join('|');
                    break;
                default:
                    break;
            }
            
        },
        async submit(){
            // const params = this.$route.query;
            const data = await Postcomplaininfo({ ...this.form });
            if(data.result === 'True'){
                Toast('操作成功');
                this.$router.push({ path: '/complain' });
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
        ComplainList,
    },
    
}

</script>

<style lang="scss">
.cause_list {
    // display: flex;
    .van-checkbox {
        display: inline-block;
    }
    .van-checkbox__label {
        font-size: 12px;
        color: #323233;
    }
}
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
