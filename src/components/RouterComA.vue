<script>
export default{
    methods:{
        goOtherWay(){
            this.$router.push('/Von')
        }
    }
}
</script>

<template>
    <h1>ComA</h1>

    <h2>利用this.$router.push 的工具，把使用者推向其他路由點</h2>
    <button type="button" @click="goOtherWay">goOtherRouter</button>
</template>

<style lang="scss" scoped>
</style>