import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { collection, where, query, onSnapshot} from 'firebase/firestore'
import { auth, db } from '@/firebase'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref()
  const gangwonAreaData = ref([])
  const seoulAreaData = ref([])
  const busanAreaData = ref([])
  const incheonAreaData = ref([])
  const daeguAreaData = ref([])
  const gwangjuAreaData = ref([])
  const jejuAreaData = ref([])
  const sejongAreaData = ref([])
  const ulsanAreaData = ref([])
  const jeonbukAreaData = ref([])
  const jeonnamAreaData = ref([])
  const gyeongbukAreaData = ref([])
  const gyeonggiAreaData = ref([])
  const gyeongnamAreaData = ref([])
  const chungcheongnamAreaData = ref([])
  const chungcheongbukAreaData = ref([])
  const daejeonAreaData = ref([])

  function checkUserState() {
    auth.onAuthStateChanged(async user => {
      if (user) {
        userInfo.value = user
        getAreaData(gangwonAreaData, '강원도', user)
        getAreaData(seoulAreaData, '서울특별시', user)
        getAreaData(busanAreaData, '부산광역시', user)
        getAreaData(incheonAreaData, '인천광역시', user)
        getAreaData(daeguAreaData, '대구광역시', user)
        getAreaData(daejeonAreaData, '대전광역시', user)
        getAreaData(gwangjuAreaData, '광주광역시', user)
        getAreaData(ulsanAreaData, '울산광역시', user)
        getAreaData(sejongAreaData, '세종특별자치시', user)
        getAreaData(jejuAreaData, '제주특별자치도', user)
        getAreaData(gyeonggiAreaData, '경기도', user)
        getAreaData(jeonbukAreaData, '전라북도', user)
        getAreaData(jeonnamAreaData, '전라남도', user)
        getAreaData(gyeongbukAreaData, '경상북도', user)
        getAreaData(gyeongnamAreaData, '경상남도', user)
        getAreaData(chungcheongnamAreaData, '충청남도', user)
        getAreaData(chungcheongbukAreaData, '충청북도', user)
      } else {
        userInfo.value = null
        gangwonAreaData.value = []
        seoulAreaData.value = []
        busanAreaData.value = []
        incheonAreaData.value = []
        daeguAreaData.value = []
        daejeonAreaData.value = []
        gwangjuAreaData.value = []
        ulsanAreaData.value = []
        jejuAreaData.value = []
        sejongAreaData.value = []
        jeonbukAreaData.value = []
        jeonnamAreaData.value = []
        gyeongbukAreaData.value = []
        gyeonggiAreaData.value = []
        gyeongnamAreaData.value = []
        chungcheongnamAreaData.value = []
        chungcheongbukAreaData.value = []
      }
    })
  }

  function getAreaData(areaData, area, user) {
    const q = query(collection(db, `${user.uid}`), where('area', '==', `${area}`))
    onSnapshot(q, (snapshot) => {
      areaData.value = []
      snapshot.forEach((doc) => {
        areaData.value.push({
          id: doc.id,
          ...doc.data()
        })
      })
    })
  }

  const getUserInfo = computed(() => userInfo.value)

  return {
    checkUserState,
    getUserInfo,
    gangwonAreaData,
    seoulAreaData,
    busanAreaData,
    incheonAreaData,
    daeguAreaData,
    daejeonAreaData,
    gwangjuAreaData,
    jejuAreaData,
    jeonbukAreaData,
    gyeonggiAreaData,
    jeonnamAreaData,
    sejongAreaData,
    ulsanAreaData,
    gyeongbukAreaData,
    gyeongnamAreaData,
    chungcheongnamAreaData,
    chungcheongbukAreaData
  }
})
