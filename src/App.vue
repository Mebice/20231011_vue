<script setup>
import Header from "./components/Header.vue";
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="headerShow">

    <Header />
  </div>
  <div class="contentShow">
    <!-- <HomeView /> -->
    <RouterView />

  </div>

</template>

<style lang="scss" scoped>
.contentShow{
  width: 100vw;
  text-align: center;
}

</style>
