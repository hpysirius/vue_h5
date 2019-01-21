 <template>
    <van-nav-bar
        class="header_container"
        :title="title"
        left-arrow
        @click-left="onClickLeft"
    />
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { mapState, mapMutations } from 'vuex'

Vue.use(NavBar)
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
        },
        onClickLeft(){
            window.history.go(-1);
        }
    }
}
</script>

<style lang="scss">
@import '../style/mixin/border-retina.scss';
.header_container {
    position: fixed!important;
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
.van-nav-bar .van-icon {
    color: #00BEAF;
}
</style>