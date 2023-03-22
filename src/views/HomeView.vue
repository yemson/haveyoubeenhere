<script setup>
import MapBox from '@/components/MapBox.vue'
import NavBar from '@/components/NavBar.vue'
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue'

const authStore = useAuthStore()

onMounted(() => {
  authStore.checkLoginState()
})
</script>

<template>
  <NavBar />
  <MapBox />
</template>
