<!-- 練習九宮格刻板 -->
<!-- 匯入至HomeView或其他views -->
<script>
export default{
    data(){
        return{
            arr:[1,2,3,4,5,6,7,8,9],
            item:""
        }
    }
}
</script>
<template>
<div class="area">

    <div class="header">

    </div>
    <div class="second">

    </div>
    <div class="main">
        <div class="mainLeft">

        </div>
        <div class="mainRight">

            <div class="rightText">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro quo et nemo cum, quidem libero ullam dolorum autem sed.</p>
            </div>
            <div class="rightNineblock">
                <div class="blockSqu" v-for="item in arr">
                    <div class="squColor">

                    </div>
                    <p>product</p>


                </div>
                {{ item }}
            </div>

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
    height: 100vw;

    .header{
        width: 100%;
        height: 15vh;
        background-color: $maincolor;
    }
    .second{
        width: 100%;
        height: 45vh;
        background-color: #9bf5e0;

    }
    .main{
        width: 100%;
        height: 150vh;
        display: flex;
        align-items: center;
        .mainLeft{
            width: 20%;
            height: 90%;
            background-color: $maincolor;
        }
        .mainRight{
            width: 70%;
            height: 80%;
            margin-left: 50px;

            .rightText{
                width: 80%;
                height: 20%;
                display: flex;
                
            }
            .rightNineblock{
                width:100%;
                height: 80%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .blockSqu{
                    width: 30%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;

                    .squColor{
                    width: 100%;
                    height: 100%;
                    background-color: $maincolor;

                    }
                }
            }
        }

    }
    .footer{
        width: 100%;
        height: 20vh;
        background-color:$maincolor;

    }


}
</style>