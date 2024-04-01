<script setup>
import { ref } from 'vue';

    const anio = ref(new Date().getFullYear());
</script>

<template>
    <div class="bg-dark text-light text-center p-4">
        <div class="row">
            <div class="col-12 col-md-6">
                <h2 class="pb-2">PlayChip COLOMBIA</h2>
                <p class="px-xl-5">Somos una tienda de video juegos, el proposito de este sitio web es mantener actualizada a la comunidad de video gamers sobre los nuevos contenidos y novedades que se desarrollan en los juegos mas populares.</p>
            </div>
            <div class="col-12 col-md-6">
                <div class="row">
                    <div class="col-6">
                        <h5>Contenidos</h5>
                        <ul class="">
                            <li><router-link to="/">Inicio</router-link></li>
                            <li><router-link to="/news">Noticias</router-link></li>
                            <li><router-link to="/recommendations">Recomendaciones</router-link></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <h5>Enlaces</h5>
                        <ul class="">
                            <li><a href="https://wa.link/1b1ktf" target="_blank">Whatsapp</a></li>
                            <li><a href="https://www.instagram.com/playchip_co?igsh=NDIwN3ZiYjY3dm5q" target="_blank">Instagram</a></li>
                            <li><a href="" target="_blank">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <p class="m-0 w-50 mw-50">Diseñado por <a href="" class="fw-bold">PagesDesing</a></p>
            <p class="m-0 w-50 mw-50 pt-3 pt-sm-0">© PlayChipCO {{ anio }}</p>
        </div>
    </div>
</template>


<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding-top: .5rem;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
</style>