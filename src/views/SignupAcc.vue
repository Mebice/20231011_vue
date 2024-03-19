<script>
export default{
    data(){
        return{
        }
    },
    methods: {
        register() {
            this.$router.push('/LoginAcc');
        },
        navigateToLogin() {
          this.$router.push('/LoginAcc'); // 導航回登入頁面的根路徑
        },
    },
    
}
</script>
<template>
<!-- 大區域 -->
<div class="areaSign">
    <!-- 標題文字 -->
    <div class="pageSign">
        <h1>Sign up</h1>
    </div>
    <!-- Account文字 -->
    <div class="textSign">
        <h6>Account</h6>
    </div>
    <!-- Account輸入格 -->
    <div class="blockSign">
        <input type="text" class="inputSign" placeholder="placeholder/Input text" > 
    </div>
    <!-- Password文字 -->
    <div class="textSign">
        <h6>Password</h6>
    </div>
    <!-- Password輸入格 -->
    <div class="blockSign">
        <input type="text" class="inputSign" placeholder="placeholder/Input text">
    </div>
    <!-- Repeat Password文字 -->
    <div class="textSign">
        <h6>Repeat Password</h6>
    </div>
    <!-- Repeat Password輸入格 -->
    <div class="blockSign">
        <input type="text" class="inputSign" placeholder="placeholder/Input text">
    </div>
<!-- 取消及登入按鈕 -->
    <div class="btnSignarea">
            
        <button type="button" class="btnSign" @click="navigateToLogin">Cancel</button>
        <button type="button" class="btnSign" @click="register">Sign up</button>

    </div>

</div>

</template>

<style lang="scss" scoped>
$maincolor:#204163;
//整個區域
.areaSign{
    width: 100vw;
    height: 100vh;
    background-color:$maincolor;
    position: relative;

    //標題文字
    .pageSign{
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: end;
        color: #f7f8f9;
        
    }

    //Account & password & Repeat password文字
    .textSign{
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: end;
        margin-right: 270px;
        color: white;
    }

    //Account及Password及Repeat Password輸入格
        .inputSign{
            width: 400px;
            height: 47px;
            background: $maincolor;
            border: 2px solid white;
            border-radius: 6px;
            
        }
    

    // 取消及登入按鈕
    .btnSignarea{
        width: 370px;
        height: 90px;
        display: flex;
        justify-content: center;
        margin:auto;
        align-items: center;
        
        .btnSign{
            width: 32%;
            height: 40%;
            color: $maincolor;
            border-radius: 6px;
            margin: 0px 20px;
            &:hover{
                background-color: #77748b;
                color: white;
            }
        }
    }

}

</style>