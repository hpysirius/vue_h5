<template>
  	<div>
        1111222
        {{userInfo}}
        {{res.msg}}
  	    <div>
            
  	    </div>
        <banner></banner>
        <Swiper></Swiper>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import {
 getCategory
} from "@/service/getData";
import banner from '../../components/banner'
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
        banner,
        Swiper
    },
    
}

</script>

<style lang="scss" scoped>
</style>
