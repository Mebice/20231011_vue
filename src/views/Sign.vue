<script>
import SignChild1 from '../components/SignChild1.vue'
import SignChild2 from '../components/SignChild2.vue'
export default{
    data(){
        return{
            obj:{
                name:""
                
            },
            page:false
        }
    },
    components:{
        SignChild1,
        SignChild2
    },
    methods:{
        infoGet(info){
            this.obj = info;
        },
        pageChange(parm){
            console.log(parm)
            this.page = true
        }
    }
}
</script>

<template>
    <h1>{{ this.obj }}</h1>
    <div v-show="page == false" class="show">
        <SignChild1 @get="infoGet" />
        <button type="button" @click="pageChange">pageChange</button>
    </div>
    <div v-show="page == true" class="show2">
        <SignChild2 :name="obj.name" v-model:age="obj.age" pageChan="pageChan"/>

        <!-- <SignChild2 v-bind="this.obj" :pageChan="pageChange"/>
        <button type="button" @click="pageChange">pageChange</button> -->
    </div>

</template>

<style lang="scss" scoped>
</style>