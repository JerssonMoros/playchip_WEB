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
            <div class="">
              <div class="text-uppercase p-1">
                {{ item.weapon }}
              </div>
              <div class="rounded-1 p-1 bg-light text-dark text-uppercase w-auto">
                {{ item.mode_game }}
              </div>
            </div>
            <!-- <div class="row">
              <div class="col-6 text-uppercase p-1">
                {{ item.weapon }}
              </div>
              <div class="col-6 rounded-1 p-1 bg-light text-dark text-uppercase w-auto">
                {{ item.mode_game }}
              </div>
            </div> -->

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