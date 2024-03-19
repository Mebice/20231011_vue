<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import indexState from '../stores/indexState'
export default {
    components:{
        RouterLink,
    },
    computed:{
        ...mapState(indexState, ["location","locationInfo"])
    },
    methods:{
        ...mapActions(indexState, ["getLocation","setLocation"])
    }
}
</script>

<template>
    <div class="headerShow">
        
        <RouterLink class="routerItem" to="/">Home</RouterLink>
        <RouterLink class="routerItem" to="/VtextAndVModel">V-text & V-Model</RouterLink>
        <RouterLink class="routerItem" to="/Vfor">Vfor</RouterLink>
        <RouterLink class="routerItem" to="/Von">Von</RouterLink>
        <RouterLink class="routerItem" to="/Vbind">Vbind</RouterLink>
        <RouterLink class="routerItem" to="/VifAndVshow">VifAndVshow</RouterLink>
        <RouterLink class="routerItem" to="/Hw">Hw</RouterLink>
        <RouterLink class="routerItem" to="/VueRouter">VueRouter</RouterLink>
        <RouterLink class="routerItem" to="/Props">Props</RouterLink>
        <RouterLink class="routerItem" to="/Emit">Emit</RouterLink>
        <RouterLink class="routerItem" to="/Sign">Sign</RouterLink>
        <RouterLink class="routerItem" to="/ProvideAndInject">ProvideAndInject</RouterLink>
        <RouterLink class="routerItem" to="/Accounting">Accounting</RouterLink>
        <RouterLink class="routerItem" to="/LoginAcc">LoginAcc</RouterLink>
        <RouterLink class="routerItem" to="/WatchAndComputed">WatchAndComputed</RouterLink>
        
        <!-- <p>{{locationInfo}}</p> -->
    </div>
</template>

<style lang="scss" scoped>
.headerShow{
    width: 100%;
    height:20vh;
    background-color: green;
    font-size: 24pt;
    color: white;
    display: flex;
    flex-wrap: wrap;

    .routerItem{
        text-decoration: none;
        color: white;
        margin: 0px 10px;

        &:hover {
            color: #787272;
            background-color: #fff;
        }

        .routerItemInneer{
            text-decoration: none;
            text-align: center;
            color: #000;

        }
    }
}
</style>
