<script setup>
import { ref } from "vue"
import CloseButton from "@/components/CloseButton.vue";
import SubmitButton from "@/components/SubmitButton.vue";

defineEmits(['close'])

const inputEmail = ref('')
const inputPassword = ref('')
</script>

<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
  >
    <div
      class="flex items-start justify-center min-h-screen pt-24 text-center"
    >
      <div
        class="bg-white overflow-hidden rounded-lg shadow-xl p-8 2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:2/5 sm:w-1/2 w-full 2xl:sm:m-0 m-8"
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
            @click="$emit('close')"
          />
          <CloseButton @click="$emit('close')" />
        </div>
      </div>
    </div>
  </div>
</template>
