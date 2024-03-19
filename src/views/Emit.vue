<script>
import child2 from "../components/child2.vue"
export default{
    data(){
        return{
            childText:"",
        }
    },
    components:{
        child2
    },
    methods:{
        emitObj(params){
            console.log(params)
            this.childText = params
        }
    }
}
</script>

<template>
    <h1>Emit</h1>
    {{ this.childText }}
<div class="show">
    <!-- 告知子元件，想要父元件做什麼事就傳遞 apple 紙條-->
    <child2 @apple="emitObj"/>

</div>
</template>

<style>
</style>