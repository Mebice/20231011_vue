<script>
import ProvideChild2 from '../components/ProvideChild2.vue'

export default{
    data(){
        return{
            
        }
    },
    components:{
        ProvideChild2
    }

}
</script>

<template>
<div class="wrap">
    <h1>這是父層</h1>
    <ProvideChild2 />
</div>
</template>

<style lang="scss" scoped>
.wrap{
    width: 400px;
    height: 400px;
    border: 1px solid #000;
}

</style>