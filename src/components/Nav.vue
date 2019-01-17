 <template>
    <ul class="nav_container">
        <li v-for="item in list" :key="item.id">
            <router-link :to="item.url">
                <img :src="item.imgUrl" />
                <p>{{item.text}}</p>
            </router-link>
        </li>
    </ul>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
    data(){
        return{
            list: [
                {
                    imgUrl: require('../assets/nav0.png'),
                    text: '找家政',
                    url: './find',
                },
                {
                    imgUrl: require('../assets/nav1.png'),
                    text: '技能培训',
                    url: './skills',
                },
                {
                    imgUrl: require('../assets/nav2.png'),
                    text: '证书查询',
                    url: './credentials',
                },
                {
                    imgUrl: require('../assets/nav3.png'),
                    text: '实名查询',
                    url: './inquiry',
                },
                {
                    imgUrl: require('../assets/nav4.png'),
                    text: '维权服务',
                    url: './complain',
                }
            ]
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
.nav_container {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;/*子元素溢出父容器时换行*/
    width: calc(100% - 10px);
    padding: 16px 5px;
    background: #ffffff;
}
.nav_container li {
    width: calc(20% - 19px);
    margin: 0 8px;
    text-align: center;
}
.nav_container a {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-decoration: none;
}
.nav_container a img {
    width: 44px;
    height: 44px;
}
.nav_container li p {
    color: #1E2227;;
    font-size: 12px;
    line-height: 20px;
}
</style>