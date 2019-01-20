<template>
  	<div>
        <Header title="证书查询结果"></Header>
        <div class="wap_scroll">
            <div class="credInfoWrap">
                <p class="credInfo"><span>证书：</span>{{result.certificate}}</p>
                <p class="credInfo"><span>证书编号：</span>{{result.certificate_no}}</p>
                <p class="credInfo"><span>姓名：</span>{{result.name}}</p>
                <p class="credInfo"><span>身份证号：</span>{{result.id_card}}</p>
                <p class="credInfo"><span>颁发机构：</span>{{result.issuing_authority}}</p>
                <p class="credInfo"><span>颁发时间：</span>{{result.issuing_date}}</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default {
    data(){
        return{
            a: 1,
            result: {
                id: 1,
                certificate: '从业资格证',
                certificate_no: '513455555555555585858',
                name: '张小二',
                id_card: '510129********6756',
                issuing_authority: 'XXXX家政协会',
                issuing_date: '2018-11-02' 
            }
        }
    },
    computed: {
         ...mapState([
            'result', 'userInfo'
        ]),
    },
    created(){
        this.getParams();
    },
    methods: {
      getParams () {
        // 取到路由带过来的参数 
        const params = this.$route.params
        console.log(this.$route);
        // // 将数据放在当前组件的数据内
        // this.params = params
      }
    },
    watch: {
        '$route': 'getParams'
    },
    components: {
        Footer,
        Header,
    },
    
}

</script>

<style lang="scss" scoped>
.wap_scroll {
    height: calc(100vh - 98px);
    overflow-y: auto;
    margin: 44px 0 53px;
    background-color: #f3f6fb;
    .credInfoWrap {
        padding: 16px;
        background-color: #fff;
    }
    .credInfo {
        font-size: 15px;
        line-height: 40px;
        color: #92979E;
        span {
            color: #1E2227;
        }
    }
}
.ss_con {
    padding: 0 8px;
}
</style>
