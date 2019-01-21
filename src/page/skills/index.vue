<template>
  	<div>
        <Header title="技能培训"></Header>
        <div class="wap_scroll">
            <van-loading type="spinner" v-if="loading" />
            <Skill :list="list"></Skill>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue';
import {mapState, mapMutations} from 'vuex'
import { Loading } from 'vant';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Skill from '../../components/Skill'
import {
    Getlearnvideo
} from "@/service/getData";

Vue.use(Loading);



export default {
    data(){
        return{
            a: 1,
            loading: false
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
        async getData() {
            this.loading = true;
           const personList =  await Getlearnvideo();
            // const skills = await Getskills();
            this.loading = false;
            const list = (personList && personList.list) || [];
            if(list.length){
                // list.map((val, index) => {
                //     const skillStr = (val.skills && val.skills.split("|").map(skill => SKILL_TYPE[skill]).join(",")) || '';
                //     val.desc = skillStr;
                //     return val;
                // });
                this.list = list;
                console.log(this.list);
            }else{
                this.list = [];
                Toast('暂无数据');
            }
        }
    },
    components: {
        Footer,
        Header,
        Skill,
    },
    
}

</script>

<style lang="scss" scoped>
.wap_scroll {
    height: calc(100vh - 98px);
    overflow-y: auto;
    margin: 44px 0 53px;
    background-color: #f3f6fb;
}
.ss_con {
    padding: 0 8px;
}
</style>
