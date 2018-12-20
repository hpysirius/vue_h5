 <template>
    <div class="banner">
	    <img src="http://cx.jztx.com/cx/Content/Templates/Jztx/WeiXin/img/Extarnce_banner.png" />
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
    data(){
        return{
            a: 1
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

<style scoped>
.banner {
    height: 210px;
}
.banner img {
    width: 100%;
    height: 100%;
}
</style>