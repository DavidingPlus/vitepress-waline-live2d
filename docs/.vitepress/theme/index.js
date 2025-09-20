import DefaultTheme from 'vitepress/theme'
import { useWaline, useLive2d } from '@davidingplus/vitepress-waline-live2d'
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
      vitepressUseRoute: useRoute,
      enable: true,
      model: {
        url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json'
      },
      display: {
        position: 'right',
        width: '135px',
        height: '300px',
        xOffset: '35px',
        yOffset: '5px'
      },
      mobile: {
        show: true
      },
      react: {
        opacity: 0.8
      }
    })
  }
}
