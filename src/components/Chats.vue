<template>
  <div class="h-screen lg:max-h-screen w-full flex flex-col bg-gray-800 overflow-hidden">
    <div class="hidden lg:flex w-full h-16 mt-16 flex-row items-center p-2 bg-gray-900">
      <img src="https://lh3.googleusercontent.com/a-/AOh14GhwuslFhC6Ci-lYFNu989rH-pfDwbrjq8OtoRrLJQ=s96-c-rg-br100" width="45px" alt="Partner Profile Picture" class="rounded-full">
      <div class="ml-3 text-white">
        <h3 class="text-xl">Firman</h3>
        <p class="text-sm text-green-400">Online</p>
      </div>
    </div>
    <div class="h-full w-full px-5 overflow-y-auto flex flex-col justify-end">
      <!-- <div id="partner-chat" class="my-5 flex flex-row items-start">
        <img src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/8/e/d/efbe-fc20-4fc6-a07e-21fd82a824e5" width="40px" alt="Partner Profile Picture" class="rounded-full">
        <p class="p-3 ml-3 bg-blue-300 rounded-lg text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam modi quasi ipsum necessitatibus consequuntur, deleniti est repellendus adipisci iste ratione incidunt obcaecati id, dicta quo delectus natus omnis nemo dolorum.</p>
      </div> -->
      <div v-for="message in chats" :key="message.id" class="h-auto w-full overflow-y-auto flex flex-col justify-end">
        <div :class="message.profilePicture === authUser.photoURL ? 'my-3 self-end flex flex-row items-start' : 'my-5 flex flex-row-reverse items-start self-start'">
          <p :class="message.profilePicture === authUser.photoURL ? 'p-3 bg-blue-600 rounded-lg text-white rounded-br-none' : 'p-3 ml-3 bg-blue-300 rounded-lg text-black'" class="">{{ message.message }}</p>
          <img :src="message.profilePicture" width="40px" alt="User Profile Picture" :class="message.profilePicture === authUser.photoURL ? 'hidden' : 'rounded-full'" class="">
        </div>
      </div>
    </div>
    <div class="w-full mt-auto h-16 px-2 py-3 flex items-center bg-gray-900">
      <input @keyup.enter="sendMessage" type="text" placeholder="Type here..." v-model="message" class="h-full w-10/12 lg:w-11/12 px-5 rounded-full outline-none">
      <button class="w-2/12 lg:w-1/12 text-white"><i class="fas fa-paper-plane fa-lg"></i></button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Chats',
  data () {
    return {
      authUser: {},
      message: null,
      chats: []
    }
  },
  methods: {
    sendMessage () {
      this.$db.collection('chats').add({
        message: this.message,
        user: this.authUser.displayName,
        profilePicture: this.authUser.photoURL,
        createdAt: new Date()
      })
      this.message = null
    },
    getMessage () {
      this.$db.collection('chats').orderBy('createdAt').onSnapshot((querySnapshot) => {
        var allMessage = []
        querySnapshot.forEach(doc => {
          allMessage.push(doc.data())
        })
        this.chats = allMessage
      })
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authUser = user
      } else {
        this.authUser = {}
      }
    })
    this.getMessage()
  }
}
</script>
