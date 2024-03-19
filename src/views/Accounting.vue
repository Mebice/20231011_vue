<script>
import InputAcc from "../components/InputAcc.vue";
import DeleteAcc from "../components/DeleteAcc.vue";
export default {
  data() {
    return {
      // 預設變數為false
      inputActive: false, //控制是否彈出輸入框。
      infoList: [],  //  存儲多筆資料的陣列
      income: 0,   //  INCOME收入 初始為0
      expense: 0,   //  EXPENSE支出 初始為0
      deleteActive:false,  //控制是否彈出刪除框
      deleteIndex: -1, // 初始化 deleteIndex 為 -1，表示未選定要刪除的項目
    }
  },
  components: {
    InputAcc,
    DeleteAcc
  },
  methods: {
    // 彈出輸入框方法為點擊後變true
    openInput() {
      this.inputActive = true;
    },
    //關閉輸入框
    inputCancel(n) {
      this.inputActive = n;
    },
    //接收新的資料並添加到 infoList 陣列中，同時更新收入和支出總額
    infoShow(newInfo) {
      const info = {
        text: newInfo.text,
        amount: newInfo.amount,
        infoButton: true, // 添加来顯示按钮
      }
      this.infoList.push(info);

      // 根據金額正負來更新 INCOME 或 EXPENSE
      if (newInfo.amount > 0) {
        this.income += parseFloat(newInfo.amount);
      } else {
        this.expense -= parseFloat(newInfo.amount);
      }
    },
      //彈出刪除框
      openDelete(index) {
        this.deleteActive = true;
        this.deleteIndex = index; // 設定要刪除的項目的索引
      },
      //關閉刪除框
      deleteCancel() {
      this.deleteActive = false;
      },
      reDelete() {
    // 在這個方法中執行刪除和金額更新的操作
    // 1. 刪除清單中的項目
    // 2. 更新金額 (income 和 expense)
    if (this.deleteIndex >= 0 && this.deleteIndex < this.infoList.length) {
      // 找到要刪除的項目
      const deletedItem = this.infoList[this.deleteIndex];
      
      // 更新金額
      if (deletedItem.amount > 0) {
        this.income -= deletedItem.amount;
      } else {
        this.expense -= Math.abs(deletedItem.amount);
      }
      
      // 從 infoList 中刪除項目
      this.infoList.splice(this.deleteIndex, 1);
    }

    // 重置 deleteIndex 變數
    this.deleteIndex = -1;
  },

    },

    computed: {
      //計算屬性
      balance() {
        return this.income - this.expense;  //計算收入減去支出以計算總餘額
      },
    },
}
</script>

<template>
  <div class="bgArea">
    <div class="blueArea">
      <h1 class="Expen">Expense Tracker</h1>
      <h1 class="Kou"></h1>
      <h3 class="bgTotal">YOUR BALANCE</h3>
      <h1 class="bgTotal">${{ balance }}</h1>
    </div>
    <!-- 白色區域 -->
    <div class="whiteArea">
      <div class="top">
        <div class="topLeft">
          <h1>INCOME</h1>
          <h1>${{ income }}</h1>
        </div>
        <div class="topRight">
          <h1>EXPENSE</h1>
          <h1>${{ expense }}</h1>
        </div>
      </div>
      <!-- 點擊按鈕彈出輸入視窗:方法 -->
      <button type="button" class="numBtn" @click="openInput">
        Add transaction
      </button>
      <div class="content">
        <div
          class="contentList"
          v-for="(item, index) in infoList" :key="index"   
          >

          <p class="listText">{{ item.text }}</p>
          <div class="listArea">
            <p :class="{ 'positive': item.amount > 0, 'negative': item.amount < 0 }">${{ item.amount }}</p>
            <!-- 刪除按鈕 -->
            <button class="listBtn" @click="openDelete(index)"> Delete </button>   
          </div>
        </div>
      </div>
    </div>
    <!-- 匯入的輸入框 -->
    <div class="inputArea">
      <div class="inputInner">
        <InputAcc
          :active="inputActive"
          @close="inputCancel()"
          @add="infoShow"
        />
      </div>
    </div>
    <div class="deleteInner">
      <DeleteAcc 
      :goDelete="deleteActive"
      @close2="deleteCancel()"
      @close3="deleteCancel()"
      @deleteConfirmed="reDelete"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$maincolor: #324b76;
.bgArea {
  width: 100vw;
  height: 100vh;
  display: flex;

  .blueArea {
    width: 40vw;
    height: 100vh;
    background-color: $maincolor;

    .Expen {
      margin: 140px 100px;
      color: white;
    }

    .Kou {
      margin: 100px 150px;
      color: white;
    }

    .bgTotal {
      margin-right: 60px;
      display: flex;
      justify-content: center;
      color: white;
    }
  }

  .whiteArea {
    width: 60vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    .top {
      display: flex;
      position: absolute;
      top: 40px;
      left: 50px;
    }

    .topLeft {
      width: 30vw;
      color: rgb(65, 189, 65);
    }

    .topRight {
      color: rgb(190, 27, 27);
    }
  }

  .numBtn {
    border-radius: 10px;
    color: white;
    background-color: $maincolor;
    font-size: 18pt;
    position: absolute;
    left: 36%;
    top: 25%;

    &:hover {
      background-color: #676b71;
    }
  }

  .content {
    position: absolute;
    top: 250px;
    left: 230px;
    overflow-y: overlay;
    max-block-size: 450px;

    .contentList {
      position: relative;
      width: 400px;
      height: 50px;
      border: 3px solid $maincolor;
      border-radius: 6px;
      display: flex;
      margin-bottom: 12px;

      .listText{
        font-size: 20pt;
        position: absolute;
        left: 10px;

      }

      .positive {
        color: rgb(36, 149, 36);
        font-size: 20pt;
        position: absolute;
        right: 100px;

      }
      .negative {
          color: rgb(209, 19, 19);
          font-size: 20pt;
          position: absolute;
          right: 90px;

      }

      .listBtn{
        height: 32px;
        position: absolute;
        right: 8px;
        top: 8px;
        color: white;
        background-color: $maincolor;
        border-radius: 6px;
      }
    }
  }
}

.inputArea {
  position: fixed;
  top: 0;
  left: 0px;
}
.deleteInner{
  position: fixed;
  top: 0;
  left: 0px;
}
</style>
