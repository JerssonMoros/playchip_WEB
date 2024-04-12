<script setup>
    import card from '../../../components/Cards/BaseCardTwo.vue';
    import iconUser from '@/assets/img/userSoldier.png'    
    import useAuth from '@/components/Login/composables/useAuth'

    const { userInfo } = useAuth();
</script>

<template>
    <div>
        <card>
            <div>
                <div class="w-100 d-flex justify-content-center align-items-center">
                    <img :src="iconUser" alt="" height="100"> 
                </div>
                <h3>Datos Personales</h3>
                <hr>
                <div v-if="userInfo" class="p-2">
                    <p>
                        <span class="fw-bold">
                            Tu nombre es: 
                        </span>
                        {{ userInfo.name }}
                    </p>
                    <p>
                        <span class="fw-bold">
                            Tu Whatsapp es: 
                        </span>
                        {{ userInfo.number_phone }}
                    </p>
                    <p>
                        <span class="fw-bold">
                            Tu email es: 
                        </span>
                        {{ userInfo.email }}
                    </p>
                    <p>
                        <span class="fw-bold">
                            Tu fecha de nacimiento es:  
                        </span>
                        {{ userInfo.birthday }}
                        <span>

                        </span>
                    </p>

                </div>
                

            </div>
                
        </card>
    </div>
</template>
