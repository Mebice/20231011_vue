<script>
export default {
    data() {
        return {
            info: {
                text: "",
                amount: ""
            },
            infoList: [] // 新增一個變數用來儲存多筆資料
        }
    },
    props: [
        "active"
    ],
    emits: [
        "close","add"
    ],
    methods: {
        closeInput() {
            this.$emit("close", false)
        },
        addInfo() {
            // 建立一個新資料
            const newInfo = {
                text: this.info.text,
                amount: this.info.amount
            };
            // 將新資料添加到陣列
            this.infoList.push(newInfo);
            // 清空输入框
            this.info.text = "";
            this.info.amount = "";
            // 觸發事件或执行其他邏輯
            this.$emit("add", newInfo);
        }
    }
}
</script>
<template>
    <div class="bgArea1" v-if="active">
        <div class="area1">

            <button type="button" class="btn-close1" aria-label="Close" @click="closeInput">X</button>
            <div class="areaContent1">

                <label class="contentText1" for="">Text</label>
                <div class="blockText1">
                    <input class="contentInput1" type="text" v-model="info.text" placeholder="Empty">
                </div>

                <label class="contentText1" for="">Amount</label>
                <div class="blockText1">
                    <input class="contentInput1" type="text" v-model="info.amount" placeholder="Empty">
                </div>
                <!-- 在子層面板顯示輸入資料 -->
                <!-- <p>{{ info }}</p>   -->
                <button class="btnAdd1" type="button" @click="addInfo">Add transaction</button>
            </div>
            <!--  在子層面板顯示多筆輸入資料 --> 
            <!-- <div class="info-list"> 
                <div v-for="(item, index) in infoList" :key="index"> 
                    <p>Text: {{ item.text }}</p>
                    <p>Amount: {{ item.amount }}</p> 
                </div> 
            </div>  -->
        </div>
    </div>
</template>
<style lang="scss" scoped>
$maincolor: #2e4f9b;

.bgArea1 {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .area1 {
        width: 400px;
        height: 400px;
        background-color: white;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        .btn-close1 {
            position: absolute;
            top: 20px;
            right: 30px;
            color: #000;
        }

        .areaContent1 {
            display: flex;
            flex-direction: column;
            align-items: center;

            .contentText1 {
                margin-right: 100%;
                color: $maincolor;

            }

            .contentInput1 {
                width: 200px;
                height: 35px;
                border: 2px solid $maincolor;
                border-radius: 6px;
                margin-bottom: 20px;

            }

            .btnAdd1 {
                width: 150px;
                height: 35px;
                background-color: $maincolor;
                color: white;
                border-radius: 10px;

                &:hover {
                    background-color: #8e9ba5;
                }
            }
        }
    }
}
</style>
