 <template>
    <div class="alet_container">
	    <div>{{ count }}</div>
    </div>
</template>

<script>
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


const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}