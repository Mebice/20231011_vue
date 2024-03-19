<script>
import { vModelCheckbox } from "vue";
import test from "../components/test.vue"
export default{
    data(){
        return{
        // 變數名稱 : value
        //V-text
        title:"Title",
        address:"xx路xx號",
        info:{
            name:"John",
            age:18,
        },
        arr:[1,2,"text",true],
        
        //V-model  //雙向綁定
        cool:"",
        age:18,

        selectText:"",

        lazyText:"",
        numberText:0,
        trimText:"",

        checkText:[],
        radioText:""
        }
    },
    components:{
        test
    },
    methods:{

    }
}
</script>

<template>
    <h1>V-text</h1>

    <p v-text="title"></p>
    <p>{{ this.title }}</p>
    <p v-text="address"></p>
    <p>{{ this.address }}</p>
    <p v-text="info"></p>
    <p>{{ this.info }}</p>
    <p v-text="arr"></p>
    <p>{{ this.arr }}</p>

    <test v-text="address"/>
    <test v-text="info"/>

    <!-- 空一行 -->
    <br/>
    
    <h1>V-model</h1>
    <input type="text" v-model="cool">
    <h4>{{this.cool}}</h4>
    <input type="number" v-model="age">
    <!-- <h4 v-text="'age'+age"></h4> -->
    <h4>{{ 'age'+this.age }}</h4>

    <select name="" id="" v-model="selectText">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <p>{{ this.selectText }}</p>


    <!-- lazy,number,trim -->
    <p>v-model.lazy</p>
    <input type="text" v-model.lazy="lazyText">
    <p>{{ this.lazyText }}</p>

    <p>v-model.number</p>
    <input type="number" v-model.number="numberText">
    <p>{{ this.numberText }}</p>

    <p>v-model.trim</p>
    <input type="text" v-model.trim="trimText">
    <p>{{ this.trimText }}</p>

    <p>checkbox</p>
    <label for="">早餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="breakfast" id="breakfast">
    <label for="">午餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="lunch" id="lunch">
    <label for="">晚餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="dinner" id="dinner">
    <h3>{{ this.checkText }}</h3>

    <p>radio</p>
    <label for="">早餐</label>
    <input type="radio" v-model="radioText" name="food" value="pork">
    <label for="">午餐</label>
    <input type="radio" v-model="radioText" name="food" value="beef">
    <label for="">晚餐</label>
    <input type="radio" v-model="radioText" name="food" value="chicken">
    <h3>{{ this.radioText }}</h3>


</template>

<style></style>