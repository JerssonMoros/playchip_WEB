  <script setup>
  import Header from '../components/HeaderHome'
  import { TaExchange } from "@kalimahapps/vue-icons";
  </script>

<template>
    <Header/>
    <div class="d-flex justify-content-center align-items-center py-5">
      <div class="card bg-danger w-75 text-center text-light rounded-4">
        <h3 class="pt-4">
          Nuevas Ruletas
        </h3>
        <div class="px-4">
          <hr class="border-2 my-1">
        </div>
        <figure class="px-3 py-2 mb-0">
          <img src="https://images3.alphacoders.com/133/1332803.png" class="mw-100 rounded-4" alt="Imagen">

          <figcaption>COD MOBILE</figcaption>
        </figure>
      </div>
    </div>
    <div class="bg-dark p-0 m-0">
      <div class="home-info p-0 m-0">
       <div class="row m-0">
        <div class="col-12 col-md-6 text-center text-white p-4 pe-md-3 p-sm-5 p-md-4">
          <div class="card-info rounded-5 p-3" style="background-color: #999999c4;">
            <h4>Proximamente...</h4>
            <hr>
            <h6>VENTA DE CUENTAS</h6>
            <p>Estamos trabajando en un apartado para que puedas comprar y vender tu cuenta de juego de una forma segura mediante esta plataforma y asi se eviten robos de cuentas y estafas dentro de la comunidad.</p>
            <div class="display-1 text-dark">
              <TaExchange />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 text-center text-white p-4 ps-md-3 p-sm-5 p-md-4">
          <div class="card-info rounded-5 p-3" style="background-color: #999999c4;">
            <h4>Call Of Duty: Mobile</h4>
            <hr>
            <h6>RULETAS</h6>
            <p>Si eres jugador de COD:Mobile, y quieres saber que ruletas estan disponibles, y cuanto puede costarte cada una, da clic aqui.</p>
            <div class="mw-100 ">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfs62u4tPF21KZAGKLEBYVXJlAjOcEX2eB9D5aJTOTMQ&s" class="mw-100 w-100 rounded-bottom">
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
</template>

<style>
.card {
  border: none;
  background: rgb(0,144,205);
  background: linear-gradient(27deg, rgba(0,144,205,1) 0%, rgba(177,214,219,1) 42%, rgba(193,133,215,1) 58%, rgba(208,79,180,1) 100%);
}
.home-info{
  background-image: radial-gradient(circle, #0066ffb4, #4359fdb4, #634cfab7, #8038f4b9, #9412ebc0);
}

</style>