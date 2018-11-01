 <template>
    <div class="swiper-box">
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" @someSwiperEvent="callback">
            <div class="swiper-slide" :key="item.id" v-for="item in banners">
                <img :src="item" width="100%" height="100%">
            </div>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
         </swiper>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    data(){
        return{
            a: 1,
            banners: [
                'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=642797576,3722215470&fm=173&app=49&f=JPEG?w=218&h=146&s=06C39A43C6013555116948B80300E090',
                'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=669898793,2439508718&fm=173&app=25&f=JPEG?w=218&h=146&s=7EA19F470FFB1E0508489807030080C2', 
                'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4169999273,4207642710&fm=173&app=25&f=JPEG?w=218&h=146&s=2C409F4FE03ABE7F12780CAB0300A002' 
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
                pagination: {
                    el: '.swiper-pagination',
                },
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
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
        swiper,
        swiperSlide
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

<style>
  .swiper-box .swiper {
    width: 100%;
    height: 100%;
  }
 
  .swiper-box .swiper-pagination {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
 
  .swiper .swiper-slide {
    background-color: #ffffff;
    box-shadow: 0.02rem 0.1rem 1.78rem 0.02rem rgba(0, 0, 0, 0.09);
  }
 
  .item-img {
    width: 100%;
    height: 17.5rem;
    position: relative;
  }
 
  .item-title {
    position: absolute;
    right: 2rem;
    bottom: 0.5rem;
    font-size: 1.7rem;
    color: #d3a359;
  }
 
  .b {
    background-color: #d3a359;
    width: 2rem;
    height: 0.2rem;
    position: absolute;
    right: 2rem;
    bottom: 0;
  }
 
  .item-text {
    width: 100%;
    height: 17.5rem;
    position: relative;
  }
 
  .item-text p {
    width: 80%;
    height: 15.5rem;
    margin: 0 auto;
    padding: 2rem 0 0;
    line-height: 2rem;
  }
 
  .item-btn {
    width: 7.5rem;
    height: 2.5rem;
    border-radius: 0.3rem;
    border: solid 0.1rem #d3a359;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4rem;
    margin: auto;
    font-size: 1.2rem;
    color: #d3a359;
  }
</style>



