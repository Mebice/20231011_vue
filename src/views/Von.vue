<script>
export default {
    //data : function(){}
    //ES6 語法糖
    data() {
        return {
            title:"cool",
            text:""
        }
            
    },
    method:{
        print(){   //變數名稱 : function(){}
        console.log(this.title)
        },
        sky(){    //變數名稱 : function(){}
            console.log(this.sky)
        },
        write(){
            console.log(this.text)
        },
        goOtherWay(){
            this.$router.push("/Vfor")
        },
}
}
</script>

<template>
    <h1>v-on</h1>
    <!-- <button type="button" v-on:click="print()">btn</button -->
    <button type="button" @click="print()">btn</button>

    <select name="" id="" @change="sky()">
        <option value="1">1</option>
        <option value="2">2</option>
    </select>

    <input type="text" v-model="this.text">
    <button type="button" @click="write()">write</button>

    <button type="button" @click="goOtherWay()">goOtherWat</button>

    <i class="fa-solid fa-mobile"></i>

</template>


<style lang="scss" scoped></style>
