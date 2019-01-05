 <template>
    <div class="header_container">
        宣汉家政平台
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
    data(){
        return{
            list: []
        }
    },
    mounted(){
    
    },
    props: ['alertText'],
    computed: {
        ...mapState([
            'count'
        ]),
    },
    methods: {
        closeTip(){
            this.$emit('closeTip')
        }
    }
}
</script>

<style lang="scss">
@import '../style/mixin/border-retina.scss';
.header_container {
    position: relative;
    height: 44px;
    background-color: #fff;
    font-size: 18px;
    color: #1E2227;
    text-align: center;
    line-height: 44px;
    // box-shadow: 0 1px 0 0 #DFDFDF;
    &:after {
        @include border-retina(bottom, #DFDFDF);
    }
}
</style>