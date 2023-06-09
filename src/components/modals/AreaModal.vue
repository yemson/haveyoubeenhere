<script setup>
import { ref, onMounted } from 'vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import CloseButton from '@/components/buttons/CloseButton.vue'
import CreateAreaModal from '@/components/modals/CreateAreaModal.vue'
import { useUserStore } from '@/stores/user'
import { db } from '@/firebase'
import { query, collection, where, onSnapshot } from 'firebase/firestore'

const props = defineProps({
  area: {
    required: true,
    type: String,
    default: ''
  }
})

onMounted(() => {
  getAreaContent()
})

defineEmits(['close'])

const createAreaModalVisible = ref(false)
const userStore = useUserStore()
const areaContents = ref([])

function openCreateAreaModal() {
  createAreaModalVisible.value = true
}

function closeCreateAreaModal() {
  createAreaModalVisible.value = false
}

function getAreaContent() {
  if (userStore.getUserInfo !== null) {
    const q = query(collection(db, `${userStore.getUserInfo.uid}`), where('area', '==', `${props.area}`))
    onSnapshot(q, (snapshot) => {
      areaContents.value = []
      snapshot.forEach((doc) => {
        areaContents.value.push({
          id: doc.id,
          ...doc.data()
        })
      })
    })
  }
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
        class="bg-white rounded-lg text-left shadow-xl p-8 2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:2/5 sm:w-1/2 w-full m-4"
      >
        <div class="flex justify-between">
          <div class="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            {{ area }}
          </div>
          <button
            v-if="userStore.getUserInfo != null"
            @click="openCreateAreaModal"
          >
            <PlusIcon class="stroke-slate-400 hover:stroke-slate-500 w-8 h-8" />
          </button>
        </div>
        <div
          v-if="userStore.getUserInfo != null"
          class="overflow-y-scroll sm:h-[26rem] h-[20rem] mt-6 space-y-3"
        >
          <div
            v-for="areaContent in areaContents"
            :key="areaContent"
            class="border w-full h-32 rounded py-2.5 px-4"
          >
            {{ areaContent.content }}
          </div>
        </div>
        <div
          v-else
          class="sm:h-[28rem] h-[20rem] flex justify-center items-center text-slate-400"
        >
          로그인 하셨나요? 😅
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
        :area="area"
        @close="closeCreateAreaModal"
      />
    </Transition>
  </div>
</template>
