<script>
export default{
    data(){
        return{
        }
    },
    props:[
        "name",
        "age",
        "pageChan"
    ]
}
</script>

<template>
    <div class="inputArea">
            <h2>SignChild2</h2>
        <p>姓名是:{{this.name}}</p>
        <p>年齡是:{{this.age}}</p>
        <input type="text" name="" id="" :value="age" @input="$emit('update:age',$event.target.value)">
        <!-- <button type="button" @click = "pageChan('cool')">資料</button> -->
        <button type="button" @input = "console.log($event)">資料</button>
        <!-- <input type="text" @input = "console.log($event)"> -->
    </div>
</template>
<style lang="scss" scoped>
.inputArea{
    width: 200px;
    height: 200px;
    border: 1px solid #000;
}
</style>