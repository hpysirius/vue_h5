 <template>
    <div class="swiper-box">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in banners" :key="index">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex'
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

export default {
    data(){
        return{
            a: 1,
            banners: [
                require('../assets/banner.png'),
                require('../assets/banner.png'),
                require('../assets/banner.png'),
            ],
            notNextTick: true,
            swiperOption: {
                height: 380,
                speed: 500,//切换速度
                watchOverflow: true, //当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航等。默认不开启这个功能。
                loop: true,//开启循环模式
                slidesPerView: 1,
                spaceBetween: 30,
                preventClicksPropagation: true,//阻止click冒泡。拖动Swiper时阻止click事件。
                simulateTouch: false,//鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动。
                on: {
                    touchEnd: function (event) {
                    //你的事件
                    },
                }
            }
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
    components: {
    },
    methods: {
        closeTip(){
            this.$emit('closeTip')
        },
        callback(a){
            console.log(a)
        }
    }
}
</script>

<style lang="scss">
.swiper-box {
    height: 140px;
    .van-swipe {
        height: 100%;
        img {
            height: 100%;
        }
    }
}
</style>



