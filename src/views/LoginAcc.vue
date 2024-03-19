<script>
export default{
    data(){
        return{  
            
        }
    },
    methods: {
        navigateToSignup() {
        this.$router.push('/SignupAcc'); // 導航到註冊頁面
        },
        navigateToAccounting2() {
            this.$router.push('/Accounting'); // 導航到記帳頁面
        }
    }
}
    


</script>
<template>
<!-- 大區域 -->
<div class="areaLogin">
    <!-- 標題文字 -->
    <div class="pageLogin">
        <h1>Expense Tracker</h1>
    </div>
    <!-- 文字+輸入內容 -->
    <div class="contentLogin">
        <!-- Account文字 -->
        <div class="textLogin">
            <h6>Account</h6>
        </div>
        <!-- Account輸入格 -->
        <div class="blockLogin">
            <input type="text" class="inputLogin" placeholder="placeholder/Input text" > 
        </div>
        <!-- Password文字 -->
        <div class="textLogin">
            <h6>Password</h6>
        </div>
        <!-- Password輸入格 -->
        <div class="blockLogin">
            <input type="text" class="inputLogin" placeholder="placeholder/Input text">
        </div>
    </div>
    <!-- 註冊及登入按鈕 -->
    <div class="btnLoginarea">
        
        <button type="button" class="btnLogin"  @click="navigateToSignup">Sign Up</button>
        <button type="button" class="btnLogin" @click="navigateToAccounting2">Log In</button>

    </div>

</div>

</template>

<style lang="scss" scoped>
$maincolor:#174469;

    //整個區域
.areaLogin{
    width: 100vw;
    height: 100vh;
    position: relative;

    //標題文字
    .pageLogin{
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: end;
        color: $maincolor;
        
    }
    //文字+輸入內容
    .contentLogin{
        margin-top: 40px;

        .textLogin{
            margin-right: 20%;
            color: #7e8690;
        }
            .inputLogin{
                width: 400px;
                height: 47px;
                border-radius: 6px;
                border: 2px solid #7e8690;
                margin-bottom: 30px;
            }

    }

    //註冊及登入按鈕
    .btnLoginarea{
        width: 370px;
        height: 90px;
        display: flex;
        justify-content: center;
        margin:auto;
        align-items: center;
        
        .btnLogin{
            width: 32%;
            height: 40%;
            color: white;
            background-color: $maincolor;
            border-radius: 6px;
            margin: 0px 20px;
            &:hover{
                background-color: #9992c5;

            }
        }
            
    }

}

</style>