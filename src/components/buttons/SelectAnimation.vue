<script setup>
    defineProps({
        title: String,
    })
</script>

<template>
    <button class="text-uppercase">
      {{ title }}      
    </button>
</template>

<style scoped>
button {
  color: white;
  text-decoration: none;
  border: none;
  background: none;
}

button::before {
  margin-left: auto;
}

button::after, button::before {
  content: '';
  width: 0%;
  height: 2px;
  background: #0077ff;
  display: block;
  transition: 0.5s;
}

button:hover::after, button:hover::before {
  width: 100%;
}
</style>