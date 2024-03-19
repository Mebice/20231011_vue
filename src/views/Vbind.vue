<script>
export default{
    data(){
        return{
            title:"cool",
            isRed:false,
            isLarge:false,
            styleArr:[],
            imgText1:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/0783062d0d860b8ae7d8e859241a700359c4d981.png",
            imgText2:"",
            imgArr:[
            "../../public/甜點圖片/5.png",
            "../../public/甜點圖片/6.png",
            "../../public/甜點圖片/7.png",
            ],
        }
    }
}
</script>
<template>
<!-- v-model ==> 綁定 標籤的 值 -->
<!-- v-bind ==> 綁定標籤 屬性 -->

    <h1 class="cool">cool1</h1>

    <h2 v-bind:class="title">cool2</h2>
    <!-- <h2 :class="title">cool2</h2> -->

    <h3>class</h3>
    <label for="">isRed</label>
    <input type="checkbox" value="true" v-model="isRed">

    <label for="">isLarge</label>
    <input type="checkbox" value="true" v-model="isLarge">

    <!-- 未啟動時，h2 無class名稱 -->
    <h2 :class="{
        red:isRed,
        Large:isLarge
    }">在這裡</h2>
    <!-- 當isRed/isLarge 為true時，立即賦予h2標籤 red/large class名稱 -->


    <!-- styleArr 是變數，記得在 data(){}之中宣告使它成為空陣列 -->
    <h3>class[]</h3>
    <label for="">Red</label>
    <input type="checkbox" value="red" v-model="styleArr">
    <label for="">Large</label>
    <input type="checkbox" value="large" v-model="styleArr">
    <label for="">bold</label>
    <input type="checkbox" value="bold" v-model="styleArr">

    <h2 :class="styleArr">在那裏</h2>


    <!-- <img src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/0783062d0d860b8ae7d8e859241a700359c4d981.png" alt=""> -->
    <img :src="imgText1" alt="">

    <p>radio</p>
    <label for="">傑尼龜</label>
    <input type="radio" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png" v-model="imgText2">
    <label for="">可達鴨</label>
    <input type="radio" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/0783062d0d860b8ae7d8e859241a700359c4d981.png" v-model="imgText2">
    <label for="">波加曼</label>
    <input type="radio" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/f3868a6a16c75d75435819deab8bab97926fc54c.png" v-model="imgText2"> 
    <img :src="imgText2" alt="">


    <div class="card" style="width: 18rem;" v-for="item in imgArr">
        <img :src="item" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    
    </div>
</template>

<style lang="scss" scoped>
.cool{
    color: #cae7ed;
}
.red{
    color: #cb2020;
}
.Large{
    color: #0cc812;

}
.bold{
    font-size: 30pt;
}
.large{
    font-weight: bold;
}
</style>