<script setup>
  import baseCard from '@/components/Cards/BaseCard.vue'
  defineProps({
        news: Array
    })
</script>


<template>
  <div v-for="(item, index) in news" :key="index">
    <baseCard>
      <div class="row mx-1 p-md-3">
          <div class="col-12 col-md-6 p-2 pb-3 pb-sm-0 d-flex justify-content-center align-items-center">
            <img :src="item.img" alt="Configuracion de arma" class="mw-100 rounded-3">
          </div>
          <div class="col-12 col-md-6 text-light p-sm-2 p-md-5 d-flex align-items-center justify-content-center">
            <div>
              <div class="bg-secondary rounded-5 ps-3 text-uppercase d-flex justify-content-center align-items-center">
              <div class="w-100 text-center">
                {{ item.teaser }}
              </div>  
              <div class="rounded-5 fw-bold bg-light text-dark h-100 ms-2 px-3 py-2 text-center">
                {{ item.season ? item.season : "No aplica" }}
              </div>
            </div>
            <p class="pt-3 text-capitalize">{{ item.content }}</p>
            <p class="m-0">{{ item.source }} - {{ item.link }}</p>
            <hr class="m-0">
            <div class="text-end pt-2">
              {{ item.created_at }}
            </div>
            </div>
          </div>
        </div>
    </baseCard>
  </div>
</template>


<style scoped>

</style>