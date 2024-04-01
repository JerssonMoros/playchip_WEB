<script setup>
    import playChip from '@/assets/img/playchip_Logo.png';
    import hamburgMenu from '../components/hamburgerMenu.vue'
    import { ByMenu } from "@kalimahapps/vue-icons";
    import { ref } from 'vue';
    import buttonLogin from './buttons/btnLogin.vue';
    import btnAnimated from './buttons/SelectAnimation';
    const isMenuOpen = ref(false)
</script>
<template>
  <div class="navbar px-3 px-sm-5 py-3 w-100">
    <nav class="content-navbar px-4 px-sm-5 p-3 border border-dark w-100 d-flex align-items-center justify-content-between">
      <div>
        <img :src="playChip" alt="PlayChip Logo" height="45">
      </div>

      <div class="d-md-none">
        <!-- <button class="btn" @click="isMenuOpen = true">
          <ByMenu class="text-light display-3"/>
        </button> -->
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
      </div>
      
      <ul class="d-none d-md-block">
        <li>
          <router-link to="/">
            <btnAnimated title="Inicio"/>
          </router-link>
        </li>
        <li><router-link to="/recommendations" :active="$route.path === '/recommendations'"><btnAnimated title="Recomendaciones"/></router-link></li>
        <li><router-link to="/news"><btnAnimated title="Noticias"/></router-link></li>
      </ul>

      <div class="d-none d-md-block">
        <buttonLogin />
      </div>
    </nav>
  </div>

  <!-- Componente del menú hamburguesa -->
  <transition name="slide-fade">
    <hamburgMenu v-if="isMenuOpen" @close-menu="isMenuOpen = false" />
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
      border: 1px solid rgba(0, 0, 0, 0.22);

    }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: inline;
    margin-right: 10px;
  }

  .slide-fade-enter-active {
    transition: all 0.5s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

  </style>
  