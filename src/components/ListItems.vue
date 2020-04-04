<template>
  <div class="listitem">
      <ghibli-film-image :title="film.title"></ghibli-film-image>
      <p>{{film.title}}</p>
  </div>
</template>

<script>
import GhibliFilmImage from "@/components/GhibliFilmImage.vue" 

export default {
    name:"List-Item",
    props:['film'],
    components: {
        "ghibli-film-image": GhibliFilmImage
    },
}
</script>

<style>
    .listitem{
    display: flex;
    flex-direction: column;
    border: solid 1px var(--yellowgrey);
    border-radius: 20px;
    width: 27vw;
    padding: 10px;
    background-color: var(--yellow);
    color: var(--darkgreen);
    font-size: 1.5em;
    margin: 15px;
    }
    p{
        margin: 0;
    }
</style>