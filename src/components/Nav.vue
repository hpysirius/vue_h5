 <template>
    <ul class="nav_container">
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
                    url: 'http://cx.jztx.com/cx/Content/Templates/Jztx/WeiXin/img/icon-GwCert.png',
                    text: '资格职业证书查询'
                },
                {
                    url: 'http://cx.jztx.com/cx/Content/Templates/Jztx/WeiXin/img/icon-ZyCert.png',
                    text: '岗位培训证书查询'
                },
                {
                    url: 'http://cx.jztx.com/cx/Content/Templates/Jztx/WeiXin/img/icon-CreaditEx.png',
                    text: '实名认证入口'
                },
                {
                    url: 'http://cx.jztx.com/cx/Content/Templates/Jztx/WeiXin/img/icon-Member.png',
                    text: '会员单位查询'
                },
                {
                    url: 'http://cx.jztx.com/cx/Content/Templates/Jztx/WeiXin/img/icon-Complaint.png',
                    text: '投诉入口'
                },
                {
                    url: 'http://cx.jztx.com/cx/Content/Templates/Jztx/WeiXin/img/icon-Layer.png',
                    text: '法律咨询'
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
    width: calc(100% - 40px);
    /* height: 200px; */
    padding: 20px;
    background: #ffffff;
}
.nav_container li {
    width: calc(100% /3);
    text-align: center;
}
.nav_container a {
    text-decoration: none;
}
.nav_container a img {
    width: 40%;
}
.nav_container li p {
    color: #8f8f94;
    font-size: 12px;
    margin-bottom: 20px;
}
</style>