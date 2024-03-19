<script>
export default{
    data(){
        return{
            text:"orange",
        }
    },
    methods:{
        emitGo(){
            //我要往父元件傳遞訊息
            //告知父元件執行 apple(,左邊的值) 暗號並給予紙條
            this.$emit("apple",this.text)
        }
    }

}
</script>
<template>
    <div class="showArea">
        <h1>Emit child</h1>
        <p>text變數:{{this.text}}</p>
        <button type="button" @click="emitGo">emitGo</button>
    </div>
</template>
<style lang="scss" scoped>
    .showArea{
        width: 600px;
        height: 600px;
        border: 1px solid #000000;

    }
</style>