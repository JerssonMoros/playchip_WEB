<script setup>
  import { CoBrandMinutemailer } from "@kalimahapps/vue-icons";
  import { CaPassword } from "@kalimahapps/vue-icons";
  import useAuth from '@/components/Login/composables/useAuth'
  import { useRouter } from "vue-router";
  const { credentials, loginUser, msgError } = useAuth();
  const router = useRouter();
  async function onSubmit() {
      const { ok, message } = await loginUser( credentials.value )
      console.log(ok, message);
      if ( !ok ) {
        msgError.value = message
        setTimeout(() => {
          msgError.value = ""
        }, 3000);
      }
      // if ( !ok ) Swal.fire('Error', message, 'error' )
      else {
        router.push({ name: 'panel' })
        this.$emit('closeLogin');
      }
  }
</script>

<template>
  <div class="card">
    <div class="card2">
      <form class="form" @submit.prevent="onSubmit">
        <p id="heading" class="text-center text-light m-0 py-4 h4">Digita tus datos</p>
        <hr class="text-light m-0">
        <div class="field" >
          <CoBrandMinutemailer />
          <input
            v-model="credentials.email"
            type="email"
            class="input-field"
            placeholder="Correo"
            autocomplete="on"
          />
        </div>
        <div class="field">
          <CaPassword />
          <input 
            v-model="credentials.password"
            type="password" 
            class="input-field" 
            placeholder="Contraseña" />
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-12 d-grid gap-2 py-3">
            <button class="btn bg-dark text-light">Inciar Sesión</button>
          </div>
          <div class="col-12 col-sm-6 col-md-12 d-grid gap-2 pb-3">
            <a class="btn btn-secondary border-0" style="transition: 0.4s ease-in-out;" >Olvidaste tu contraseña?</a>
          </div>
        </div>
        <div v-if="msgError" class="alert alert-warning" role="alert">
            {{ msgError }}
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

  
  .card2 {
    border-radius: 0;
    transition: all 0.2s;
  }
  
  .card {
    background-image: linear-gradient(163deg, #3700ff 0%, #00ff75 100%);
    border-radius: 22px;
    transition: all 0.3s;
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

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
  }

  .btn-secondary:hover {
    background-color: rgb(204, 13, 13);
    color: white;
  }

</style>
  