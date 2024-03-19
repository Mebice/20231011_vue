<script>
import { RouterLink} from 'vue-router'
export default{
    data(){
        return{
            
        }
    },
    components:{
        RouterLink,
    }
}
</script>

<template>
    <RouterLink class="routerItem" to ="/Hw/HwHome">HwHome</RouterLink>
    <RouterLink class="routerItem" to ="/Hw/BNote">BNote</RouterLink>
</template>

<style lang="scss" scoped>
    .routerItem{
        text-decoration: none;
        color: white;
        margin: 0px 10px;
    }
</style>