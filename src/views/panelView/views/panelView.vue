<script setup>
    import card from '@/components/Cards/BaseCardTwo.vue'
    import iconUser from '@/assets/img/userSoldier.png'    
    import useAuth from '../../../components/Login/composables/useAuth'

    const { checkAuthStatus } = useAuth();
    checkAuthStatus();
</script>

<template>
    <div class="bg-blue-pc-950">
        <div class="header vw-100">
            <div class="d-flex justify-content-center p-3 p-lg-5">
                <div class="row w-100">
                    <div class="col-md-4 d-none d-md-block">
                        <card class="">
                            <div class="d-flex pb-2">
                                <div class="d-flex justify-content-center align-items-center border rounded-pill h-100">
                                    <img :src="iconUser" alt="" class="p-1">
                                </div>
                                <div class="ps-4 w-100 d-flex flex-column justify-content-center">
                                    <h6>Bienvenido,</h6>
                                    <h6 class="text-info">Jersson!</h6>
                                </div>
                            </div>
                            <hr class="m-2">
                            <ul>
                                <li>
                                    <router-link :to="{name: 'profile'}">
                                        Mi Perfil
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name: 'account'}">
                                        Mis Cuentas
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name: 'purchase'}">
                                        Mis Compras
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name: 'profile'}">
                                        Mis Ordenes
                                    </router-link>
                                </li>
                            </ul>
                        </card>
                    </div>
                    <div class="col-12 col-md-8">
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>