  <script setup>
  import Header from '../components/HeaderHome'
  import { TaExchange } from "@kalimahapps/vue-icons";
  </script>

<template>
    <Header/>
    <div class="d-flex justify-content-center align-items-center pt-3">
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
        <div style="overflow: hidden;">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style="fill: #ffffff; width: 145%; height: 102px;"
          >
            <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
            <path
              d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
              opacity=".5"
            />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
        </div>
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

<style scoped>
.card {
  border: none;
  background: rgb(0,144,205);
  background: linear-gradient(27deg, rgba(0,144,205,1) 0%, rgba(177,214,219,1) 42%, rgba(193,133,215,1) 58%, rgba(208,79,180,1) 100%);
}
.home-info{
  background-image: radial-gradient(circle, #0066ffb4, #4359fdb4, #634cfab7, #8038f4b9, #9412ebc0);
}

</style>