// src/stores/modules/useCounterStore.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'count',
  () => {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    return {
      count,
      increment
    }
  },
  {
    persist: true
  }
)
