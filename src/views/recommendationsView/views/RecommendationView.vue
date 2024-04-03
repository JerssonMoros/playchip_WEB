<script setup>
  import btnGame from '@/components/buttons/filterButton.vue'
  import useRecommendation from '../composables/useRecommendation.js';
  import cardRecommendations from '../components/CardRecommendations.vue'
  import loader from '../../../components/Loaders/loader1.vue'
  const { recommendations } = useRecommendation();
</script>

<template>
  <div class="container-fluid bg-dark">
    <div class="bg-black text-center text-uppercase text-ligth pb-3" style="padding-top: 6rem;">
      <h2 class="text-white">
        Recomendaciones
      </h2>
      <div>
        <btnGame filter="COD: Mobile"/>
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