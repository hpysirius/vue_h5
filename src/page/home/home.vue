<template>
  	<div>
        1111222
        {{userInfo}}
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
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
    }
    
}

</script>

<style lang="scss" scoped>
</style>
