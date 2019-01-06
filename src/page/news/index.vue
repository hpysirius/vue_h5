<template>
  	<div>
        <Header title="行业资讯"></Header>
        <div class="wap_scroll">
            <div class="ss_con">
                <div class="scorll">
                    <Swiper></Swiper>
                </div>
                <News></News>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import Header from '../../components/Header'
import Swiper from '../../components/Swiper'
import News from '../../components/News'
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
    components: {
        Footer,
        Header,
        Swiper,
        News,
    },
    
}

</script>

<style lang="scss" scoped>
.wap_scroll {
    overflow-y: auto;
    margin: 44px 0 53px;
}
.ss_con {
    padding: 10px 8px 0;
    background-color: #f3f6fb;
}
</style>
