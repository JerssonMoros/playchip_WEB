<script setup>
  import { CaCloseFilled } from "@kalimahapps/vue-icons";
  import LoginView from '../views/Login.vue'
  function handleLoginSuccess() {
    // emit('closeLogin')
    console.log('Se emitio el evento');
  }
</script>

<template>
  <div class="modal-overlay h-100 w-100 pt-2">
    <div class="text-light py-5 py-sm-0 py-md-4 w-100 d-flex justify-content-center align-items-center">
      <button class="btn btn rounded-5 btn-outline-info p-1" @click="$emit('closeLogin')" >
        <CaCloseFilled class="display-3" />
      </button>
    </div>
    <div class="w-100 p-5 p-sm-2 p-md-5 pt-2 d-flex justify-content-center">
      <LoginView @loginSuccess="handleLoginSuccess"/>
    </div>
  </div>  

</template>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    overflow-y: hidden;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(7.7px);
    -webkit-backdrop-filter: blur(7.7px);
    z-index: 1001;
  }  
  </style>
  