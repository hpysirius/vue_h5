 <template>
    <ul class="footer_container">
        <li v-for="item in list" :key="item.id">
            <a href="#">
                <img :src="item.url">
                <p>{{item.text}}</p>
            </a>
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
                    url: 'http://cx.jztx.com/cx/Content/Templates/Jztx/WeiXin/img/icon-NurseFindJob.png',
                    text: '家政员求职'
                },
                {
                    url: 'http://cx.jztx.com/cx/Content/Templates/Jztx/WeiXin/img/icon-companyJoin.png',
                    text: '公司入驻'
                },
                {
                    url: 'http://cx.jztx.com/cx/Content/Templates/Jztx/WeiXin/img/icon-userCenter.png',
                    text: '个人中心'
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
.footer_container {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap; /*子元素溢出父容器时换行*/
    width: calc(100% - 40px);
    padding: 20px;
    margin-top: 10px;
    background: #ffffff;
}
.footer_container li {
    width: calc(100% /3);
    text-align: center;
}
.footer_container a {
    text-decoration: none;
}
.footer_container a img {
    width: 40%;
}
.footer_container li p {
    color: #8f8f94;
    font-size: 12px;
    margin-bottom: 20px;
    
}
</style>