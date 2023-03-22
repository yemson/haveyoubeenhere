<script setup>
import { ref } from 'vue'
import SubmitButton from '@/components/buttons/SubmitButton.vue'
import CloseButton from '@/components/buttons/CloseButton.vue'
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'

const emits = defineEmits(['close'])

const inputEmail = ref()
const inputPassword = ref()
const inputPasswordCheck = ref()
const authAlreadyInUse = ref(false)
const authInvalidEmail = ref(false)
const authInvalidPassword = ref(false)
const authWeekPassword = ref(false)
// const initData = {
//   seoul: {},
//   busan: {},
//   daegu: {},
//   incheon: {},
//   gwangju: {},
//   Daejeon: {},
//   gyeonggi: {},
//   gangwon: {},
//   north_chungcheong: {},
//   south_chungcheong: {},
//   north_jeolla: {},
//   south_jeolla: {},
//   north_gyeongsang: {},
//   south_gyeongsang: {},
//   jeju: {},
//   sejong: {},
// }

function register() {
  authAlreadyInUse.value = false
  authAlreadyInUse.value = false
  authInvalidPassword.value = false
  authWeekPassword.value = false
  if (inputPassword.value === inputPasswordCheck.value) {
    createUserWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
        .then(() => {
          emits('close')
          signOut(auth)
        })
        .catch((error) => {
          const errorCode = error.code
          console.log(errorCode)
          if (errorCode === 'auth/email-already-in-use') {
            authAlreadyInUse.value = true
          } else if (errorCode === 'auth/invalid-email') {
            authInvalidEmail.value = true
          } else if (errorCode === 'auth/weak-password') {
            authWeekPassword.value = true
          }
        })
  } else {
    authInvalidPassword.value = true
  }
}
</script>

<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
  >
    <div
      class="flex items-start justify-center min-h-screen pt-16 text-center"
    >
      <div
        class="bg-white overflow-hidden rounded-lg shadow-xl p-8 2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:2/5 sm:w-1/2 w-full sm:m-0 m-4"
      >
        <div class="flex">
          <div class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            여기가봤어?
          </div>
        </div>
        <div class="flex">
          <div class="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            회원가입
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
            v-if="authAlreadyInUse"
            class="text-left text-sm mt-1 text-red-500"
          >
            이메일이 이미 존재합니다!
          </label>
          <label
            v-else-if="authInvalidEmail"
            class="text-left text-sm mt-1 text-red-500"
          >
            이메일 형식이 올바르지 않습니다!
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
        <div class="flex flex-col mt-4">
          <label class="text-left font-bold text-green-500">
            비밀번호 확인
          </label>
          <input
            v-model="inputPasswordCheck"
            type="password"
            class="w-full h-12 bg-slate-100 rounded mt-2 px-4 focus:ring-0 border-0"
          >
          <label
            v-if="authInvalidPassword"
            class="text-left text-sm mt-1 text-red-500"
          >
            비밀번호가 일치하지 않습니다!
          </label>
          <label
            v-else-if="authWeekPassword"
            class="text-left text-sm mt-1 text-red-500"
          >
            비밀번호 보안이 취약합니다!
          </label>
        </div>
        <hr class="my-5">
        <div class="flex flex-col space-y-4">
          <SubmitButton
            text="회원가입"
            @click="register"
          />
          <CloseButton @click="$emit('close')" />
        </div>
      </div>
    </div>
  </div>
</template>
