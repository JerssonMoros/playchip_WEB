<script setup>
    defineProps({
        filter: String,
    })
</script>

<template>
    <button class="button bg-blue-pc-400">
        {{ filter }}
    </button>
</template>

<style scoped>
.button {
  border: none;
  line-height: 1;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: .75rem;
  color: #fff;
  border-radius: 10rem;
  font-weight: 600;
  padding: .75rem 1.5rem;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color .3s;
}


.button:hover {
  background-color: #0072ff;
}

.button:active{
    background-color: #0e2f5d ;
}
</style>