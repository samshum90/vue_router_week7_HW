<template>
  <div id="app">
      <div class="title">
        <ghibli-header :films="films" title="Studio Ghibli" />
      </div>
    <router-view  />
  </div>
</template>

<script>
import GhibliHeader from "@/components/GhibliHeader.vue";

export default {
  name:'app',
  components: {
            "ghibli-header": GhibliHeader
        },
  data() {
    return{
      films: [],
      selectedFilm: null
    }
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(json => this.films = json)

  }
}
</script>

<style>
:root{
--darkgreen: #002627;
--greengrey: #556a5b;
--yellowgrey: #6e6046;
--pink: #deacab;
--white: #f5f1e6;
--yellow: #ffea81;
--peach: #fbe5b3;
--greenwhite: #dce4cf;
--lightblue: #36b3df;
--darkblue: #0598ce;
}
html {
  color: var(--white);
  background-color: var(--darkblue);
}

#app {
  font-family: Meiryo, "Yu Gothic", YuGothic, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 30px;
}


</style>
