<script>
import { RouterLink, RouterView } from 'vue-router';
import HwHeader from '../components/HwHeader.vue';
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        HwHeader,
        RouterView,
    }
}
</script>

<template>
    <div class="topArea">
        <HwHeader />
    </div>
    <div class="contentArea">
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
.topArea {
    width: 100%;
    height: 10vh;
    background-color: #486482;
}

.contentArea {
    width: 100%;
    height: 30vh;
    background-color: #e3a5a5;
}
</style>