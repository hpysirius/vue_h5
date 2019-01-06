 <template>
    <div class="header_container">
        {{title}}
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
    props: ['title'],
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    height: 44px;
    background-color: #fff;
    font-size: 18px;
    color: #1E2227;
    text-align: center;
    line-height: 44px;
    &:after {
        @include border-retina(bottom, #DFDFDF);
    }
}
</style>