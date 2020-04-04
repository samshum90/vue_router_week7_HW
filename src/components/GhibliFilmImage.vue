<template>
    <img :src="imageName" @error="imgError" id="film-image">
</template>

<script>
import noImage from '@/assets/filmimages/noimgfnd.jpeg'

export default {
    name: 'ghibli-film-image',
    props:['title'],
    data(){
  return{
    defaultImg: ('require(@/assets/filmimages/noimgfnd.jpeg')
  }
    },
    computed: {
        imageName() {
            const image = require("@/assets/filmimages/" + this.title + ".jpg");
            return image != undefined ? image : noImage;
        }
    },
    methods:{
      imgError(){
        this.src = this.defaultImg;
      } 
    }
}
</script>

<style>
  #film-image{
    height: 25vh;
    object-fit: scale-down;
  }

</style>