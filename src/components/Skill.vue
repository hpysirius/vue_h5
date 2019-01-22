 <template>
    <div>
        <ul class="skill_container">
            <li v-for="item in list" :key="item.id" class="sk_li">
                <div @click="showVideo(item.video_url)" class="sk_link">
                    <img :src="item.imgUrl || videoImgurl" />
                    <div class="sk_txt">
                        <h3>{{item.video_name}}</h3>
                        <p>{{item.video_info}}</p>
                    </div>
                </div>
            </li>
        </ul>
        <van-dialog
            v-model="videoShow"
            :showConfirmButton="false"
            :showCancelButton="true"
            >
            <div 
                v-on:click="playVideo()"
                class="video_wrap"
            >
                <video 
                    controls="controls"
                    :src="url" 
                    id="videoPlay"
                    class="video"
                >您的浏览器不支持 video 视屏播放。</video>
            </div>
        </van-dialog>
    </div>
</template>

<script>

import Vue from 'vue';
import {mapState, mapMutations} from 'vuex'
import { Dialog } from 'vant';

Vue.use(Dialog);

export default {
    data(){
        return{
            videoImgurl: require('../assets/video_b.png'),
            videoShow: false,
            url: ''
        }
    },
    mounted(){
    
    },
    props: ['list'],
    computed: {
        ...mapState([
            'count'
        ]),
    },
    methods: {
        closeTip(){
            this.$emit('closeTip')
        },
        showVideo(url){
            console.log(url);
            this.url = url;
            this.videoShow = true;
            // Dialog.alert({
            //     title: '标题',
            //     message: ''
            // }).then(() => {
            // // on close
            // });

        }
    }
}
</script>

<style lang="scss">
.sk_li {
    min-height: 80px;
    margin: 10px 0;
    padding: 16px 12px 16px 16px;
    background-color: #fff;

}
.sk_li img {
    float: left;
    width: 125px;
    height: 75px;
}
.sk_txt {
    width: calc(100% - 137px);
    display: inline-block;
    padding: 7px 2px 0 10px;
}
.sk_txt h3{
    font-weight: normal;
    font-size: 15px;
    color: #1E2227;
    line-height: 20px;
}
.sk_txt p {
    font-size: 12px;
    color: #92979E;
    line-height: 30px;
}
.video_wrap {
    height: 200px;
    .video {
        width: 100%;
        height: 100%;
    }
}

</style>