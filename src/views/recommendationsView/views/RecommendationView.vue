<script setup>
  import btnGame from '@/components/buttons/filterButton.vue'
  import useRecommendation from '../composables/useRecommendation.js';
  import cardRecommendations from '../components/CardRecommendations.vue'
  import loader from '../../../components/Loaders/loader1.vue'
  import { ref } from 'vue';
  import fontHeader from '../../../assets/img/cabecera.png';
  const { recommendations } = useRecommendation();
  const games = ref(['COD: Mobile', 'Warzone: Mobile'])
  
</script>

<template>
  <div class="">
    <div class="header bg-black text-center text-uppercase text-ligth pb-3" :style="`background-image: url(${fontHeader});`">
      <h2 class="text-white">
        Recomendaciones
      </h2>
      <div class="d-flex justify-content-center">
        <btnGame :filter="games" />
      </div>
    </div>
    <div class="bg-light p-5 d-flex justify-content-center align-items-center">
      <loader v-if="!recommendations" />
      <cardRecommendations v-else :recommendations="recommendations"></cardRecommendations>
    </div>
  </div>
</template>


<style>

</style>