import {defineStore} from 'pinia';

export default defineStore("indexStore" ,{
    state:()=>({
        location:1
    }),
    getters:{
        locationInfo(state){
            return `現在位置${state,location}`
        }
    },
    actions:{
        getLocation(){
            console.log(this.location);
        },
        setLocation(num){
            this.location = num;
        }
    }
})