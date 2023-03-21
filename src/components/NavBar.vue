<script setup>
import { ref, onMounted } from "vue";
import { auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import LoginModal from "@/components/modals/LoginModal.vue";

const loginModalVisible = ref(false)
const userInfo = ref()

onMounted(() => {
  checkLoginState()
})

function checkLoginState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userInfo.value = user
    } else {
      userInfo.value = null
    }
  })
}

function openLoginModal() {
  loginModalVisible.value = true
}

function closeLoginModal() {
  loginModalVisible.value = false
}
</script>

<template>
  <div class="flex justify-between py-4 px-4 container mx-auto">
    <router-link
      to="/"
      class="place-self-center font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500"
    >
      여기가봤어?
    </router-link>
    <button
      v-if="userInfo == null"
      class="text-xl font-bold place-self-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600"
      @click="openLoginModal"
    >
      로그인
    </button>
    <div
      v-else
      class="text-xl font-bold place-self-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600"
    >
      {{ userInfo.email }}
    </div>
  </div>
  <Transition
    enter-active-class="transition ease-out duration-200 transform"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-200 transform"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <LoginModal
      v-if="loginModalVisible"
      @close="closeLoginModal"
    />
  </Transition>
</template>
