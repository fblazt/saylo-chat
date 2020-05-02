import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

const configOptions = {
  apiKey: 'AIzaSyCQQ4Psk-OOZSk3sCixX9g3wd3_J28hKnU',
  authDomain: 'saylo-chat.firebaseapp.com',
  databaseURL: 'https://saylo-chat.firebaseio.com',
  projectId: 'saylo-chat',
  storageBucket: 'saylo-chat.appspot.com',
  messagingSenderId: '390557447670',
  appId: '1:390557447670:web:2b49b63ee1865176c503d7'
}

firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
