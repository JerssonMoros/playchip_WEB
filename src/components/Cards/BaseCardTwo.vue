
<script setup>

</script>

<template>
    <div class="
      card 
      text-light
      p-3
      border-0
      d-flex 
      justify-content-center 
      align-items-center">
        <slot />
    </div>
</template>

<style scoped>
.card {
  background: rgb(17, 4, 134);
  box-shadow: rgb(0,0,0,0.7) 5px 10px 50px ,rgb(0,0,0,0.7) -5px 0px 250px;
  background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));
  overflow: hidden;
}
</style>
