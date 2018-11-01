<template>
  	<div>
        1111222
        {{userInfo}}
        {{res.msg}}
  	    <div>
            
  	    </div>
        <banner></banner>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import {
 getCategory
} from "@/service/getData";
import banner from '../../components/banner'

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
    },
    
}

</script>

<style lang="scss" scoped>
</style>
