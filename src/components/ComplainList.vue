 <template>
    <ul class="skill_container">
        <li v-for="item in list" :key="item.id" class="sk_li">
            <router-link :to="item.url" class="sk_link">
                <img :src="item.imgUrl" />
                <div class="sk_txt">
                    <h3>{{item.tit}}</h3>
                    <p>{{item.desc}}</p>
                </div>
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
                    imgUrl: require('../assets/banner.png'),
                    tit: '投诉',
                    desc: '雇主，家政人员，家政公司投诉',
                    url: './comp',
                },
                {
                    imgUrl: require('../assets/banner.png'),
                    tit: '法律咨询',
                    desc: '法律专家咨询，留言咨询',
                    url: './low',
                },
                {
                    imgUrl: require('../assets/banner.png'),
                    tit: '合同模版',
                    desc: '劳动合同，服务合同模版下载',
                    url: './contract',
                },
                {
                    imgUrl: require('../assets/banner.png'),
                    tit: '黑名单',
                    desc: '家政人员，家政公司黑名单查询',
                    url: './company',
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
.sk_li {
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
    min-height: 40px;
    margin-top: 5px;
    font-size: 12px;
    color: #92979E;
    line-height: 20px;
}

</style>