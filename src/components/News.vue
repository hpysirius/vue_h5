 <template>
    <div class="news_container">
        <div class="new_nav">
            <span>行业资讯</span>
            <router-link to="./news" class="link"></router-link>
        </div>
        <ul class="news_list">
            <li 
                v-for="(item, index) in newsList" :key="item.id" 
                :class="index < newsList.length - 1 ? 'news_li' : ''"
            >
                <a :href="item.news_url" class="sk_link">
                    <h3 class="news_tit">{{item.news_title}}</h3>
                    <!-- <p class="news_desc">{{item.news_url}}</p> -->
                    <img v-show="item.img" class="news_img" :src="item.cover_picture" />
                    <p class="news_time">{{item.creat_time}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
    data(){
        return{
            list: [
                {
                    id: 0,
                    tit: '技能培训合格家政人员名单公示',
                    desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道…',
                    date: '2019-01-04 23:23:09'
                },
                {
                    id: 1,
                    tit: '技能培训合格家政人员名单公示',
                    img: require('../assets/banner.png'),
                    date: '2019-01-04 23:23:09'
                }
            ]
        }
    },
    mounted(){
    
    },
    props: ['alertText', 'newsList'],
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
.news_container {
    margin-top: 10px;
    background-color: #fff;
}
.new_nav {
    position: relative;
    display:flex;
    justify-content: space-between;
    height: 45px;
    line-height: 45px;
    padding: 0 16px;
    &:after {
        @include border-retina(bottom, #DFDFDF);
    }
    span {
        display: inline-block;
        font-size: 16px;
        color: #1E2227;
    }
    .link {
        display: inline-block;
        width: 8px;
        height: 45px;
        background: url('../assets/back.png') no-repeat center center;
        background-size: 8px 14px;
    }
}
.news_list {
    padding: 2px 16px;
}
.news_li {
    position: relative;
    padding: 10px 0;
    &:after {
        @include border-retina(bottom, #DFDFDF);
    }
}
.news_tit {
    font-weight: normal;
    font-size: 15px;
    line-height: 32px;
    color: #333;
}
.news_desc {
    line-height: 21px;
    font-size: 13px;
    color: #999;
}
.news_time {
    line-height: 30px;
    font-size: 13px;
    color: #CECECE;
}
.news_img{
    width: 343px;
    height: 120px;
}
</style>