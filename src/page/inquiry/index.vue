<template>
  	<div>
        <Header title="实名查询"></Header>
        <div class="wap_scroll">
            <InquiryName></InquiryName>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>

import {mapState, mapMutations} from 'vuex'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InquiryName from '../../components/InquiryName'
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
    components: {
        Footer,
        Header,
        InquiryName,
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
