import type { WalineInitOptions, WalineInstance } from '@waline/client'
import { onMounted, onBeforeUnmount, watch } from 'vue'
import type { Route } from 'vitepress'
import Waline from './components/Waline'

export interface WalineOptions extends WalineInitOptions {
  selector?: string // 非Waline参数，el挂载的容器，默认.VPDoc .content-container。
  useRouteVitepress: () => Route
}

export const useWaline = (walineOptions: WalineOptions) => {
  let waline: WalineInstance
  const route = walineOptions.useRouteVitepress()

  onMounted(() => {
    updateWaline()
  })

  onBeforeUnmount(() => waline?.destroy())

  function updateWaline() {
    if (waline) {
      waline?.destroy()
    }
    setTimeout(() => {
      if (!document) return
      waline = Waline.newInstance({ walineOptions })
    }, 500)
  }

  watch(() => route.path, updateWaline)
}

export default useWaline
