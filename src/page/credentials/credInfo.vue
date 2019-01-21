<template>
  	<div>
        <Header title="证书查询结果"></Header>
        <div class="wap_scroll">
            <div class="credInfoWrap" v-for="item in result" :key="item.id">
                <p class="credInfo"><span>证书：</span>{{item.certificate}}</p>
                <p class="credInfo"><span>证书编号：</span>{{item.certificate_no}}</p>
                <p class="credInfo"><span>姓名：</span>{{item.name}}</p>
                <p class="credInfo"><span>身份证号：</span>{{item.id_card}}</p>
                <p class="credInfo"><span>颁发机构：</span>{{item.issuing_authority}}</p>
                <p class="credInfo"><span>颁发时间：</span>{{item.issuing_date}}</p>
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
            a: 1
        }
    },
    computed: {
         ...mapState([
            'userInfo'
        ]),
    },
    created(){
        this.getParams();
    },
    methods: {
      getParams () {
        const query = this.$route.query
        this.result = query
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
