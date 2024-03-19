<!-- 練習三宮格刻板 -->
<!-- 匯入至HomeView或其他views -->

<script>
export default{
    data(){
        return{
            arr:[1,2,3],
            item:""
        }
    }
}
</script>
<template>
    <div class="area">
        <div class="header">

        </div>
        <div class="squareArea">
            <div class="squR1" v-for="item in arr"></div>
            {{ item }}
        </div>
        <div class="main">
            <div class="mainLeft">

            </div>
            <div class="mainRight">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam inventore. Officiis numquam obcaecati totam est praesentium. Necessitatibus, repellendus sit?</p>
            </div>
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<style lang="scss" scoped>
$maincolor:#54eac7;
.area{
    width: 100vw;
    height: 200vh;

    .header{
        width: 100%;
        height: 30vh;
        background-color:$maincolor;
        }

    .squareArea{
        width: 100%;
        height: 60vh;
        display: flex;
        justify-content:space-between;
        align-items:center;
        
        .squR1{
            width: 300px;
            height: 300px;
            background-color: $maincolor;
            margin: 0 40px;
        }
    }
    .main{
        width: 100%;
        height: 60vh;
        display: flex;
        align-items: center;
        .mainLeft{
            width: 50%;
            height: 60vh;
            background-color: $maincolor;
        }
        .mainRight{
            width: 40%;
            height: 25vh;
            margin-left: 100px;
        }
    }
    .footer{
        width: 100%;
        height: 15vh;
        background-color: $maincolor;
        margin-top: 80px;
    }
    
}
</style>