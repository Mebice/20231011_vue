<script>
export default{
    data(){
        return{
            point: 0,
            ntd: 0
        }
    },
    methods:{
        addPoint(){
            this.point += 1;
        }
    },
    watch:{
        point(){
            this.ntd = this.point * 10;
        }
    },
    computed:{
        jyp(){
            return this.ntd * 4.63;
        }
    },
    beforeCreate(){
        console.log("beforeCreate"+this.point)
    },
    created(){
        console.log("created"+this.point)
    },
    beforeMonut(){
        console.log("beforeMonut"+this.point)
    },
    mounted(){
        console.log("mounted"+this.point)
    },
    beforeUpdate(){
        console.log("beforeUpdate"+this.point)
    },
    updated(){
        console.log("updated"+this.point)
    },
    beforeDestroy(){
        console.log("beforeCreate"+this.point)
    },
    destroyed(){
        console.log("destroyed"+this.point)
    },
}

</script>

<template>
    <p>Point : {{ this.point }}</p>
    <p>ntd : {{ this.ntd }}</p>
    <p>ntd : {{ this.jyp }}</p>
    <div class="circle" @click="addPoint()">

    </div>
</template>

<style lang="scss" scoped>
.circle{
    width: 200px;
    height: 200px;
    background-color: #d97f7f;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        scale: 1.05;
    }
    &::after{
        scale: 0.95;
    }

}
</style>