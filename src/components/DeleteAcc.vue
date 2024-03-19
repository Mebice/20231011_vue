<script>
export default{
    data(){
        return{
        }
    },
    props: [
        "goDelete"  //從父層傳遞的一個布林值,控制刪除視窗的顯示或隱藏
    ],
    methods:{
        sureDelete() {
            // 當按下"確認刪除"按鈕時，執行以下操作
            // 1. 刪除清單中的項目
            // 2. 更新金額 (income 和 expense)
            // 3. 關閉刪除視窗
            this.$emit("deleteConfirmed"); // 觸發一個自定義事件，通知父層進行刪除和金額更新操作
            this.$emit("close2", false); // 關閉刪除視窗
        },
        //關閉刪除視窗
        closeDelete() {
            this.$emit("close3", false)
        },
    }
}   
</script> 

<template>
    <div class="bgDelete" v-if="goDelete">
        <div class="areaDelete" >
            <button class="closeDelete" @click="closeDelete"><i class="fa-solid fa-xmark"></i></button>
            <h3 class="textDelete">Sure to Delete?</h3>
            <button class="btnDelete" @click="sureDelete" > Delete </button>
        </div>

    </div>

</template>

<style lang="scss" scoped>

.bgDelete {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .areaDelete{
        width: 300px;
        height: 150px;
        background: white;
        border-radius: 15px;
        position: relative;
        .closeDelete{
        background-color: transparent; /* 設置按钮背景為透明 */
        border: none; /* 移除按钮邊框 */
        cursor: pointer; /* 鼠標指针樣式為手型 */
        position: absolute;
        right: 5px;
        }
        .closeDelete i {
        font-size: 30px; /* 設置圖標大小 */
        color: rgb(32, 58, 131); /* 設置圖標颜色 */
        }
        .textDelete{
            color: rgb(32, 58, 131);
            position: absolute;
            top: 35px;
            left: 50px;
        }
        .btnDelete{
            background-color: #932121;
            color: white;
            position: absolute;
            right: 115px;
            top: 90px;
            border-radius: 6px;
        }
    }
}
</style>