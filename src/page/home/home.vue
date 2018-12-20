<template>
  	<div class="wrap">
        <Banner></Banner>
        <Nav></Nav>
        <Footer></Footer>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import {
 getCategory
} from "@/service/getData";
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
    background-color: #F0EFF4;
}
</style>
