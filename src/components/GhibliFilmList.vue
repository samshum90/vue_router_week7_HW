<template>
    <div class="film-list" v-if="films.length">
        <list-item 
        v-for="(item, index) in films" 
        :film="item"
        :key="index">
        </list-Item>
    </div>
</template>

<script>
import ListItem from '@/components/ListItems'

export default {
    name:"Film-List",
    props:['films'],
    components:{
        'list-item': ListItem
    }
}

</script>

<style>
    .film-list{
        display: flex;
        flex-wrap: wrap;

        width: 100%;
        padding: 0px 20px;
    }
</style>