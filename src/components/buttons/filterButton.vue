<script setup>
    defineProps({
        filter: Array,
    })
</script>

<template>
    <div v-for="(name, index) in filter" :key="index" class="px-2">
        <button class="button bg-blue-pc-400 ">
            {{ name }}
        </button>
    </div>
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