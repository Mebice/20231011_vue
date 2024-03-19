<script>
import ProvideChild1 from '../components/ProvideChild1.vue'
import { ref , provide} from 'vue';
export default{
    data(){
        return{
            dataMsg:"message",
            dataArr:['str','arr','ass']
        }
    },
    components:{
        ProvideChild1
    },
    methods:{
        addItem(){
            this.dataArr.push('xxx')
        }
    },
    provide(){
        return{
            msg:this.dataMsg,
            cool:"cool",
            arr:this.dataArr,
        }
    },
    setup(){
        let setupMsg = ref('setupMsg')
        provide('setupMSG',setupMsg)
        return{
            setupMsg
        }
    }
}
</script>

<template>
<div class="wrap">
    <h1>這是爺爺</h1>
    <p>這是爺爺的變數 dataMsg :{{ this.dataMsg }}</p>
    <input type="text" v-model="this.dataMsg">
    <input type="text" v-model="this.setupMsg">
    <p>{{ this.dataArr }}</p>
    <button type="button" @click="addItem">addItem</button>
    <ProvideChild1 />

</div>
</template>

<style lang="scss" scoped>
.wrap{
    width: 600px;
    height: 600px;
    border: 1px solid #000;
}
</style>