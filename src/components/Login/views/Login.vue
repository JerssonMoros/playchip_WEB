<script setup>
  import { CoBrandMinutemailer } from "@kalimahapps/vue-icons";
  import { CaPassword } from "@kalimahapps/vue-icons";
</script>

<template>
  <div class="card">
    <div class="card2">
      <form class="form">
        <p id="heading" class="text-center text-light m-0 py-4 h4">Digita tus datos</p>
        <hr class="text-light m-0">
        <div class="field">
          <CoBrandMinutemailer />
          <input
            type="email"
            class="input-field"
            placeholder="Correo"
            autocomplete="on"
          />
        </div>
        <div class="field">
          <CaPassword />
          <input type="password" class="input-field" placeholder="Contraseña" />
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-12 d-grid gap-2 py-3">
            <button class="btn bg-dark text-light">Inciar Sesión</button>
          </div>
          <div class="col-12 col-sm-6 col-md-12 d-grid gap-2 pb-3">
            <button class="btn btn-secondary border-0" style="transition: 0.4s ease-in-out;">Olvidaste tu contraseña?</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
  
<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    border-radius: 25px;
    transition: 0.4s ease-in-out;
  }

  .card {
    background-image: linear-gradient(163deg, #3700ff 0%, #00ff75 100%);
    border-radius: 22px;
    transition: all 0.3s;
  }

  .card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }

  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-icon {
    height: 1.3em;
    width: 1.3em;
    fill: white;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
  }

  .button1 {
    padding: 0.5em;
    padding-left: 1.1em;
    padding-right: 1.1em;
    border-radius: 5px;
    margin-right: 0.5em;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button1:hover {
    background-color: black;
    color: white;
  }

  .button2 {
    padding: 0.5em;
    padding-left: 2.3em;
    padding-right: 2.3em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button2:hover {
    background-color: black;
    color: white;
  }

  .button3 {
    margin-bottom: 3em;
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .btn-secondary:hover {
    background-color: rgb(204, 13, 13);
    color: white;
  }

</style>
  