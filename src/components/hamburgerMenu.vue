<script setup>
  import { CaCloseFilled } from "@kalimahapps/vue-icons";
  import buttonLogin from './buttons/btnLogin.vue'

</script>

<template>
  <div class="modal-overlay h-100 w-100 d-flex flex-column justify-content-between">
    <div class="row h-25 text-light" >
      <div class="col-6 d-flex align-items-center justify-content-center">
        <div class="btn text-light" @click="$emit('closeMenu')">
          <CaCloseFilled class="display-3"/>
        </div>
      </div>
      <div class="col-6 d-flex align-items-center justify-content-center">
        <buttonLogin />
      </div>
    </div>
    <div class="menu d-flex flex-column">
      <!-- Aquí puedes colocar el contenido de tu modal -->
      <ul class="text-uppercase">
        <li class="btn py-3"><router-link to="/" class="text-light text-decoration-none">Inicio → </router-link></li>
        <li class="btn py-3"><router-link to="/recommendations" class="text-light text-decoration-none">Recomendaciones → </router-link></li>
        <li class="btn py-3"><router-link to="/news" class="text-light text-decoration-none">Noticias → </router-link></li>
      </ul>
    </div>
    <div class="">
    </div>
  </div>
</template>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    overflow-y: hidden;
    background-color: rgb(0,30,67); /* Fondo semitransparente */
    z-index: 1001;
  }  
  li {
    font-size: 1.5rem;
    text-align: start;
    width: 100vw;
  }
  </style>
  