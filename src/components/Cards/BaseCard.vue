
<script setup>

</script>

<template>
    <div class="tarjeta">
        <div class="contenido-tarjeta p-2">
            <slot></slot>
        </div>
    </div>
</template>

<style>
.tarjeta {
  background: #000000d8;
  display: inline-block;
  transition: all 0.2s;
  border-radius: 1.7rem;
}

.contenido-tarjeta {
  background:linear-gradient(135deg, #5a247a96 0%,#1bcfdf8a 100%);
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
}

.tarjeta:hover {
  transform: scale(1.02) rotate(.5deg);
}
</style>

