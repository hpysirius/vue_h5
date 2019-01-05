<template>
  	<div class="wrap">
        <Header></Header>
        <div class="ss_con">
            <Search></Search>
            <div class="scorll">
                <Swiper></Swiper>
            </div>
        </div>
        <Nav></Nav>
        <Footer></Footer>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import {
 getCategory
} from "@/service/getData";
import Header from '../../components/Header'
import Search from '../../components/Search'
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Swiper from '../../components/Swiper'

export default {
    data(){
        return{
            res: {}
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
            let res = await getCategory({ name: 'huanghui' });
            this.res = res;
            console.log(res);
        }
    },
    components: {
        Header,
        Search,
        Banner,
        Footer,
        Swiper,
        Nav
    },
    
}

</script>

<style lang="scss" scoped>
.wrap {
    height: 100vh;
    background-color: #f3f6fb;
}
.ss_con {
    padding: 10px 8px 0;
    background-color: #f3f6fb;
}
.scorll {
    padding: 10px 0;
}
</style>
