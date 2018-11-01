 <template>
    <div class="alet_container">
	    banner
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
    data(){
        return{
            a: 1
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
