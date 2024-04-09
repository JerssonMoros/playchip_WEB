<script setup>
    import card from '../../../components/Cards/BaseCardTwo.vue'
</script>

<template>
    <div class="bg-blue-pc-950">
        <div class="header">
            <div class="d-flex justify-content-center p-2">

                <card>
                    <h6>Bienvenido,</h6>
                    <h6 class="text-info">Jersson!</h6>
                    <hr class="">
                    <ul>
                        <li>
                            <router-link >
                                Mi Perfil
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'profile'}">
                                Mis Cuentas
                            </router-link>
                        </li>
                        <li>
                            <router-link >
                                Mis Ordenes
                            </router-link>
                        </li>
                        <li>
                            <router-link >
                                Mis Ordenes
                            </router-link>
                        </li>
                    </ul>
                </card>
                
                <card>
                    <h3>Datos Personales</h3>
                    <hr>
                      
                </card>
            </div>
        </div>
    </div>
</template>

<style>

</style>