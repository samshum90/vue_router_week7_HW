<template>
    <div class="title">
       <img src="@/assets/totologo.png" alt="studio ghibli totoro logo"> <h1>{{ title }}</h1>
       <the-navigation :films="films"></the-navigation>
    </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue"

export default {
    name:"ghibli-header",
    props:["title", "films"],
    components:{
        "the-navigation": TheNavigation,
    },
}
</script>

<style>
.title{
    width: 100%;
    display: flex;
    font: bold 1em Futura;
    color: var(--peach);
    background-color: var(--greengrey);
    border-radius: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    padding: 0;
} 
h1{
    margin-left: 20px;
}
.title img {
    height: 75px;
    width: auto;
    object-fit: cover;
    filter: saturate(0%) brightness(10000%);
    padding: 5px;
}
</style>