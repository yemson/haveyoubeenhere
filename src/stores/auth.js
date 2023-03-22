import { defineStore } from 'pinia'
import { ref } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref()

  function checkLoginState() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userInfo.value = user
      } else {
        userInfo.value = null
      }
    })
  }

  return { checkLoginState, userInfo }
})
