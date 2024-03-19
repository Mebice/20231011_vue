<script>
import { RouterLink,RouterView } from 'vue-router';
export default{
    components:{
        RouterLink,
        RouterView
    }
}
</script>

<template>
    <p>子路由們</p>
    <RouterLink to="VueRouter/RouterComA">ComA</RouterLink>
    <RouterLink to="VueRouter/RouterComB">ComB</RouterLink>
    <RouterView />
</template>

<style lang="scss" scoped>
</style>