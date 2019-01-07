<template>
  	<div>
        <Header title="技能培训"></Header>
        <div class="wap_scroll">
            <Skill></Skill>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Skill from '../../components/Skill'
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
        Skill,
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
