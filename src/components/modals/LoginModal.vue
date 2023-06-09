<script setup>
import { ref } from 'vue'
import CloseButton from '@/components/buttons/CloseButton.vue'
import SubmitButton from '@/components/buttons/SubmitButton.vue'
import { auth } from '@/firebase'
import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from 'firebase/auth'
import RegisterModal from '@/components/modals/RegisterModal.vue'

const emits = defineEmits(['close'])

const inputEmail = ref('')
const inputPassword = ref('')
const authInvalidEmail = ref(false)
const authUserNotFound = ref(false)
const registerModalVisible = ref(false)

function login() {
  authInvalidEmail.value = false
  authUserNotFound.value = false
  setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
      })
      .then(() => {
        emits('close')
      })
      .catch((error) => {
        const errorCode = error.code
        if (errorCode === 'auth/invalid-email') {
          authInvalidEmail.value = true
        } else if (errorCode === 'auth/user-not-found') {
          authUserNotFound.value = true
        }
        console.log(errorCode)
      })
}

function openRegisterModal() {
  registerModalVisible.value = true
}

function closeRegisterModal() {
  registerModalVisible.value = false
}
</script>

<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
  >
    <div
      class="flex items-start justify-center text-center"
    >
      <div
        class="bg-white overflow-hidden rounded-lg shadow-xl p-8 2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:2/5 sm:w-1/2 w-full m-4"
      >
        <div class="flex">
          <div class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            여기가봤어?
          </div>
        </div>
        <div class="flex">
          <div class="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            로그인
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <label class="text-left font-bold text-green-500">
            이메일
          </label>
          <input
            v-model="inputEmail"
            type="email"
            class="w-full h-12 bg-slate-100 rounded mt-2 px-4 focus:ring-0 border-0"
          >
          <label
            v-if="authInvalidEmail"
            class="text-left text-sm mt-1 text-red-500"
          >
            이메일 형식이 올바르지 않습니다!
          </label>
          <label
            v-else-if="authUserNotFound"
            class="text-left text-sm mt-1 text-red-500"
          >
            이메일을 다시 한번 확인하세요!
          </label>
        </div>
        <div class="flex flex-col mt-4">
          <label class="text-left font-bold text-green-500">
            비밀번호
          </label>
          <input
            v-model="inputPassword"
            type="password"
            class="w-full h-12 bg-slate-100 rounded mt-2 px-4 focus:ring-0 border-0"
          >
        </div>
        <hr class="my-5">
        <div class="flex flex-col space-y-4">
          <SubmitButton
            text="로그인"
            @click="login"
          />
          <CloseButton @click="$emit('close')" />
        </div>
        <button
          class="text-slate-600 text-sm underline mt-6"
          @click="openRegisterModal"
        >
          회원이 아니신가요?
        </button>
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
      <RegisterModal
        v-if="registerModalVisible"
        @close="closeRegisterModal"
      />
    </Transition>
  </div>
</template>
