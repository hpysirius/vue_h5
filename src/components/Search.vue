 <template>
    <div class="search_container">
        <input class="input_search" />
        <p class="txt_wrap">
            <i class="input_icon"></i>
            <span class="txt">搜索</span>
        </p>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
    data(){
        return{
            list: []
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
.search_container {
    position: relative;
}
.input_search {
    width: 100%;
    height: 36px;
    border: 1px solid #E6E6EA;
    border-radius: 8px;
    background-color: #fff;
}
.txt_wrap {
    position: absolute;
    top: 12px;
    left: 40%;
    font-size: 14px;
    color: #92979E;
    letter-spacing: 0;
    line-height: 18px;
}
.input_icon {
    display: inline-block;
    width: 19px;
    height: 19px;
    vertical-align: middle;
    background: url(../assets/search.png) no-repeat;
    background-size: 19px 19px;
}
.txt {
    text-indent: 10px;
}

</style>