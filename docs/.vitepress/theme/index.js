import DefaultTheme from 'vitepress/theme'
import { useWaline } from 'vitepress-theme-website'
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
      useRoute
    })
    // useLive2d()
  }
}
