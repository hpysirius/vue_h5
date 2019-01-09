<template>
  	<div>
        <Header title="投诉"></Header>
        <div class="wap_scroll">
            <h3 class="com_tit">投诉信息</h3>
            <div class="com_con">

            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ComplainList from '../../components/ComplainList'
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
        ComplainList,
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
.com_tit {
    line-height: 40px;
    text-indent: 16px;
    font-weight: normal;
    font-size: 14px;
    color: #92979E;
}
.com_con {

}

</style>
