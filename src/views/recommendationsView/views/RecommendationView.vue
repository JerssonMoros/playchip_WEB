<script setup>
  import useRecommendation from '../composables/useRecommendation.js';
  const { recommendations } = useRecommendation();

</script>

<template>
  <div class="container-fluid bg-dark">
    <div class="bg-black text-center text-uppercase text-ligth pb-3" style="padding-top: 6rem;">
      <h2 class="text-white">
        Recomendaciones
      </h2>
      <button class="btn bg-blue-pc-950 text-blue-pc-600">
        Call of duty: mobile
      </button>
    </div>
    <div class="bg-light p-5">
      <div class="bg-dark rounded-4 p-3" v-for="(item, index) in recommendations" :key="index">
        <div class="row mx-1">
          <div class="col-12 col-sm-6 p-2 d-flex justify-content-center align-items-center">
            <img :src="item.img" alt="Configuracion de arma" class="mw-100">
          </div>
          <div class="col-12 col-sm-6 text-light">
            <div class="bg-secondary rounded-5 ps-3 text-uppercase d-flex justify-content-center align-items-center">
                {{ item.weapon }}
              <div class="rounded-5 fw-bold bg-light text-dark w-100 h-100 ms-2 px-3 py-2">
                {{ item.mode_game }}
              </div>
            </div>
            <p>{{ item.description }}</p>
            <p>{{ item.nickname }} - {{ item.uid_game }}</p>
            <hr>
            <div class="text-end">
              {{ item.created_at }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>

</style>../composables/useRecommendation.js