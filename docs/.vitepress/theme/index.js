import DefaultTheme from 'vitepress/theme'
import { useWaline, useLive2d } from 'vitepress-waline-live2d'
import { useRoute } from 'vitepress'

export default {
  ...DefaultTheme,
  // Layout() {
  //   return h(DefaultTheme.Layout, null, {
  //     'home-features-after': () => h(HomeSponsors),
  //   })
  // },
  enhanceApp(ctx) { },
  setup() {
    useWaline({
      serverURL: 'https://waline.xinlei3166.com',
      vitepressUseRoute: useRoute
    })
    useLive2d({
      vitepressUseRoute: useRoute
    })
  }
}
