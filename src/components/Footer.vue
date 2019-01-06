 <template>
    <ul class="footer_container">
        <li class="f_li">
            <router-link to="./" class="f_nav f_main">
                <i class="f_icon f_main_icon"></i>
                <span>主页</span>
            </router-link>
        </li>
        <li class="f_line"></li>
        <li class="f_li">
            <a class="f_nav f_main">
                <i class="f_icon f_me_icon"></i>
                <span>个人中心</span>
            </a>
        </li>
    </ul>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
    data(){
        return{
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
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    padding: 8px 0 2px;
    box-shadow: inset 0 1px 0 0 #DFDFDF;
    background: #ffffff;
}
.f_nav {
    display: inline-block;
    width: 100%;
    font-size: 11px;
    color: #333;
    text-align: center;
    line-height: 22px;
}
.f_li {
    width: 50%;
    text-align: center;
}
/* .f_left {
    border-right: 1px solid #DFDFDF;
} */
.f_line {
    position: relative;
    left: 0;
    top: 10px;
    width: 1px;
    height: 20px;
    background-color: #DFDFDF;
}
.f_main_icon {
    background: url('../assets/f_home.png') no-repeat;
}
.f_me_icon {
    background: url('../assets/f_me.png') no-repeat;
}
.f_icon {
    display: block;
    width: 100%;
    height: 22px;
    background-size: 22px 22px;
    background-position: center center;
}
.f_nav span {
    font-size: 11px;
    color: #333;
    text-align: center;
    line-height: 22px;
}

</style>