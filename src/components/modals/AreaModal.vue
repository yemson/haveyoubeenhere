<script setup>
import { ref } from "vue"
import PlusIcon from "@/components/icons/PlusIcon.vue";
import CloseButton from "@/components/buttons/CloseButton.vue";
import CreateAreaModal from "@/components/modals/CreateAreaModal.vue";

defineProps({
  area: {
    required: true,
    type: String,
    default: ''
  }
})

defineEmits(['close'])

const createAreaModalVisible = ref(false)

function openCreateAreaModal() {
  createAreaModalVisible.value = true
}

function closeCreateAreaModal() {
  createAreaModalVisible.value = false
}
</script>

<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
  >
    <div
      class="flex items-start justify-center min-h-screen pt-24 text-center"
    >
      <div
        class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:2/5 sm:w-1/2 w-full 2xl:sm:m-0 m-4"
      >
        <div class="flex justify-between">
          <div class="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            {{ area }}
          </div>
          <button @click="openCreateAreaModal">
            <PlusIcon class="stroke-slate-400 hover:stroke-slate-500 w-8 h-8" />
          </button>
        </div>
        <CloseButton
          class="mt-4"
          @click="$emit('close')"
        />
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
      <CreateAreaModal
        v-if="createAreaModalVisible"
        @close="closeCreateAreaModal"
      />
    </Transition>
  </div>
</template>
