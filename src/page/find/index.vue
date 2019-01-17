<template>
  	<div>
        <Header title="找家政"></Header>
        <div class="wap_scroll">
            <FindList></FindList>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>

import {mapState, mapMutations} from 'vuex'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FindList from '../../components/FindList'
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
        FindList,
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
