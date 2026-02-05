import './assets/main.css'

import { createApp } from 'vue'
import { createVCodeBlock } from '@wdns/vue-code-block'

import App from './App.vue'
// https://webdevnerdstuff.github.io/vue-code-block/#playground
// https://github.com/webdevnerdstuff/vue-code-block
const VCodeBlock = createVCodeBlock({
  lang: 'javascript',
  highlightjs: true,
  theme: 'atom-one-dark',
  indent: 4,
})

const app = createApp(App)

app.use(VCodeBlock)

app.mount('#app')
