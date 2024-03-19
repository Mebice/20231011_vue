<script>
import { SassArgumentList } from 'sass';
import dssert from"../components/dssert.vue"

export default{
    data(){
        return{
            arr:[1,2,3,4,5],
            arr2:[
                {
                    name:"sana",
                    age:18,
                    address:"xx路10號"
                },
                {
                    name:"Lisa",
                    age:19,
                    address:"xx路15號"
                },
                {
                    name:"Linda",
                    age:20,
                    address:"xx路20號"
                },

            ]
        }
    },
    components:{
        dssert,
    }
}

</script>
<template>
    <h1>v-for</h1>
<!-- arr -->
<p v-for=" item in arr">{{  item }}</p>

<!-- arr2-->
    <ol v-for="x in arr2" >
        <li>{{ x.name }}</li>
        <li>{{ x.age }}</li>
        <li>{{ x.address }}</li>
    </ol>

</template>
<style lang="scss" scoped>

</style>