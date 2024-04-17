<script setup>
    import card from '../../../components/Cards/BaseCardTwo.vue'
    import usePurchases from '../composables/usePurchases.js'

    const { purchases } = usePurchases();
</script>

<template>
    
    <card>
            <div>

                <h3>Mis Compras</h3>
                <hr>
                {{ purchases }}
            </div>
                
        </card>
    
</template>

<style>

</style>