<template>
    <div class="film-list-container">
        <ghibli-film-list :films="this.$route.params.films"> </ghibli-film-list>
    </div>
</template>

<script>
import GhibliFilmList from '@/components/GhibliFilmList'
export default {
    name: "Films",
    props: ['films'],
    components: {
        'ghibli-film-list': GhibliFilmList
    }

}
</script>

<style>

</style>