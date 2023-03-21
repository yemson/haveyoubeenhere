<script setup>
import CloseButton from "@/components/buttons/CloseButton.vue";
import SubmitButton from "@/components/buttons/SubmitButton.vue";

defineEmits(['close'])
</script>

<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
  >
    <div
      class="flex items-start justify-center min-h-screen pt-24 text-center"
    >
      <div
        class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:2/5 sm:w-1/2 w-full sm:m-0 m-4"
      >
        <div class="flex">
          <div class="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            기록 남기기
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <textarea class="bg-slate-100 rounded h-[10rem] p-2 text-slate-700 border-0 focus:ring-0" />
          <hr class="my-5">
          <SubmitButton
            text="작성"
          />
          <CloseButton
            class="mt-4"
            @click="$emit('close')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
