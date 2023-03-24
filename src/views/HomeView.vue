<script setup>
import MapBox from '@/components/MapBox.vue'
import NavBar from '@/components/NavBar.vue'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted( () => {
  userStore.checkUserState()
})
</script>

<template>
  <NavBar />
  <MapBox />
</template>
