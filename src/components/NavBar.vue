<script setup>
import { ref } from 'vue'
import LoginModal from '@/components/modals/LoginModal.vue'
import { useUserStore } from '@/stores/user'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'

const loginModalVisible = ref(false)
const userStore = useUserStore()
const isDropdownOpen = ref(false)

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function openLoginModal() {
  loginModalVisible.value = true
}

function closeLoginModal() {
  loginModalVisible.value = false
}

function logout() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error)
  })
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
      v-if="userStore.getUserInfo == null"
      class="text-xl font-bold place-self-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600"
      @click="openLoginModal"
    >
      로그인
    </button>
    <div
      v-else
      class="relative"
    >
      <button
        class="md:text-xl text-md font-bold place-self-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600"
        @click="toggleDropdown"
      >
        {{ userStore.getUserInfo.email }}
      </button>

      <Transition
        enter-active-class="transition ease-out duration-100 transform"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-100 transform"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isDropdownOpen"
          class="absolute top-full left-0 z-10 w-full mt-1"
        >
          <div class="bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 py-2">
            <!-- 드롭다운 메뉴 내용 -->
            <div class="flex justify-between">
              <a
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="logout"
              >로그아웃</a>
            </div>
            <a
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="toggleDropdown"
            >닫기</a>
          </div>
        </div>
      </Transition>
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
