<script setup>
  import btnGame from '@/components/buttons/filterButton.vue'
  import useNews from '../composables/useNews.js';
  import cardNews from '../components/CardNews.vue'
  import loader from '../../../components/Loaders/loader1.vue'
  import fontHeader from '../../../assets/img/cabecera.png';
import { ref } from 'vue';
  const { news } = useNews();
  const games = ref(['COD: Mobile', 'Warzone: Mobile'])
</script>

<template>
  <div class="">
    <div class=" header bg-black text-center text-uppercase text-ligth pb-3" :style="`background-image: url(${fontHeader});`">
      <h2 class="text-white">
        Noticias
      </h2>
      <div class="d-flex justify-content-center">
        <btnGame :filter="games" />
      </div>
    </div>
    <div class="bg-light p-2 p-sm-3 p-md-5 d-flex flex-column justify-content-center align-items-center">
      <loader v-if="!news" />
      <cardNews v-else :news="news"></cardNews>
    </div>
  </div>
</template>


<style>
</style>