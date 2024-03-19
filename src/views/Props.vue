<script>
import child from '../components/child.vue';

export default{
    data() {
        return {
            propsObj: {
                name: "mary",
                age: 58,
                email: "xxx@gggmail.com.tw"
            },
            page:1
        }
    },
    methods:{
        changePage(){
            this.page = 2;
        }
    },
    components: {
        child,
    },
}
</script>

<template>
    <div v-if = "page == 1" class="show">
        <!-- 填寫註冊帳戶資訊的版面 -->
        <button type="button" @click="changePage()">Next</button>
    </div>
    <div v-if = "page == 2" class="show2">
        <child
        :person="propsObj"
        />
    </div>
    
</template>

<style lang="scss" scoped>
</style>