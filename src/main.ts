import { createApp } from 'vue'
import Game from './Game.vue'
import './game.css'

window.addEventListener('resize', onResize)
onResize()

function onResize() {
  document.body.style.setProperty('--vh', window.innerHeight + 'px')
}

createApp(Game).mount('#app')
