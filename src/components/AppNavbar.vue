<script setup>
    import playChip from '@/assets/img/playchip_Logo.png';
    import Login from '../components/Login/layouts/authLayout.vue';
    import { ByMenu } from "@kalimahapps/vue-icons";
    import { ref } from 'vue';
    import { FaUserLarge } from "@kalimahapps/vue-icons";
    import btnAnimated from './buttons/SelectAnimation';
    const isLoginOpen = ref(false)
</script>
<template>
  <div class="navbar px-3 px-sm-5 py-3 w-100">
    <nav class="content-navbar px-4 px-sm-5 p-3 w-100 d-flex align-items-center justify-content-between">
      <div>
        <img :src="playChip" alt="PlayChip Logo" height="45">
      </div>

      <ul class="d-none d-md-block">
        <li class="d-inline mx-1">
          <router-link to="/">
            <btnAnimated title="Inicio" />
          </router-link>
        </li>
        <li class="d-inline mx-1">
          <router-link to="/recommendations">
            <btnAnimated title="Recomendaciones"/>
          </router-link>
        </li>
        <li class="d-inline mx-1">
          <router-link to="/news">
            <btnAnimated title="Noticias"/>
          </router-link>
        </li>
      </ul>

      <div class="row">
        <div class="col-6 d-md-none mx-sm-2 dropdown">
          <button class="btn text-light text-decoration-none" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            <ByMenu class="display-5"/>
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li>
              <router-link to="/" class="dropdown-item">
                Inicio
              </router-link>
            </li>
            <li>
              <router-link to="/recommendations" class="dropdown-item">
                Recomendaciones
              </router-link>
            </li>
            <li>
              <router-link to="/news" class="dropdown-item">
                Noticias
              </router-link>
            </li>
          </ul>
        </div>
      
        <button class="col-6 btn text-light w-auto" title="Inicio de sesión" @click="isLoginOpen = true">
          <FaUserLarge style="font-size: 1.5rem;"/>
        </button>
      </div>
    </nav>
  </div>

  <!-- Componente del Login -->
  <transition name="slide-fade">
    <Login v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </transition>
</template>

  <style scoped>
    .navbar {
        position: fixed;
        z-index: 1000;
    }
    
    .content-navbar{
      border-radius: 2rem;
      height: 4.5rem;
      background: rgba(0, 0, 0, 0.28);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(9px);
      -webkit-backdrop-filter: blur(9px);
      border: 1px solid #07356d;

    }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .slide-fade-enter-active {
    transition: all 0.7s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

  </style>./Login/views/Login.vue
