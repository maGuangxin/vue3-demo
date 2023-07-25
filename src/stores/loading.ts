import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ElLoading } from 'element-plus'
export const useLoadingStore = defineStore('globalLoading', () => {
  const loading = ref(false)
  const loadingIns = ref(null)

  const toggle = () => {
    loading.value = !loading.value
    if (loading.value) {
      if (!loadingIns.value) {
        loadingIns.value = ElLoading.service()
      } else {
        loadingIns.value.close()
        loadingIns.value = null
      }
    } else {
      if (loadingIns.value) {
        loadingIns.value.close()
        loadingIns.value = null
      }
    }
    return loadingIns
  }
  const close = () => {
    loading.value = false
    if (loadingIns.value) {
      loadingIns.value.close()
      loadingIns.value = null
    }
  }
  return { value: loading, toggle, close }
})
