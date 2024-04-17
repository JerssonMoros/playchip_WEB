<script setup>
    import useAccounts from '../composables/useAccounts'

    const { accounts } = useAccounts();

</script>

<template>
    <div>
        <div class="d-flex justify-content-between">
            <h3>Mis Compras</h3>
            <button class="btn btn-primary fw-bold">
                <router-link to="createAccount">
                    CREAR
                </router-link>
            </button>
        </div>
        <hr>
        <template v-if="accounts">
            <div class="row">
                <div class="col-12 col-sm-6 p-2" v-for="(account, index) in accounts" :key="index">
                    <div class="rounded-4 p-2 border border-primary">
                        <p class="text-uppercase fw-bold text-center">{{ account.game.name }}</p>
                        <hr class="m-1">
                        <div class="px-2">
                            <p>
                                <span class="fw-bold">
                                    Correo 
                                </span>
                                {{ account.name }}
                            </p>
                            <p>
                                <span class="fw-bold">
                                    Contraseña: 
                                </span>
                                ************
                            </p>
                            <p>
                                <span class="fw-bold">
                                    Nickname 
                                </span>
                                {{ account.name }}
                            </p>
                            <p>
                                <span class="fw-bold">
                                    Tipo de Acceso: 
                                </span>
                                {{ account.name }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </template>    
    </div>
               
</template>

<style>

p{
    margin: 0;
}
</style>