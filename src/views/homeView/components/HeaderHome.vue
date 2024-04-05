<script setup>
    import fontHeader from '@/assets/img/fondo-homeP.png';
    import arma from '@/assets/img/arma.png';
    import codMobile from '@/assets/img/CODM_Logo.svg'
    import wzMobile from '@/assets/img/WZM_Logo.webp'
</script>

<template>
    <div class="container-fluid p-0 vh-100 pb-5" :style="`background-image: url(${fontHeader})`" >
      <div class="header vh-100 d-flex flex-column justify-content-between">
        <div class="row mx-0 h-100 d-flex align-items-center justify-content-center">
            <div class="col-12 col-sm-4 col-md-6 order-last order-sm-first">
              <img :src="arma" class="arma mw-100" alt="Arma Vista Home">
            </div>
            <div class="col-12 col-sm-8 col-md-6 text-center pe-md-5 text-lg-end text-white">
              <h1 class="title-custom display-5 fw-bold text-uppercase">
                Novedades de tu juego favorito 😎.
              </h1>
              <h5 class="pt-4 pt-sm-0 pt-md-4">Estas en en lugar donde te podras mantener al tanto de noticias, novedades y armamentos top, junto a la mejor comunidad que podras encontrar.</h5>
            </div>
        </div>

        <div class="w-100 d-flex justify-content-center py-4" style="background-color: rgba(0, 0, 0, 0.65);">
          <img :src="codMobile" alt="Logo CODMobile" height="60" class="px-3">
          <img :src="wzMobile" alt="Logo WarzoneMobile" height="60" class="px-3">
        </div>
      </div>  
      
    </div>
  </template>


<style scoped>
.container-fluid {
    background-size: cover;
}
.box {
  padding-top: 7rem;
}
.arma {
    transform: rotate(-10deg);
    filter:drop-shadow(20px 14px 20px orange);
}
.title-custom {
    font-family: 'Josefin Sans', sans-serif;
    /* font-size: 3rem; */
    /* padding-right: 3rem; */
}

</style>