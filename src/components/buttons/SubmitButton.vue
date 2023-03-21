<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button
    class="w-full h-12 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 rounded font-extrabold text-white"
  >
    {{ text }}
  </button>
</template>
