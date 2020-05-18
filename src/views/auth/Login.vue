<template>
  <div class="min-h-screen min-w-screen flex justify-center items-center bg-gray-700">
    <div class="w-full h-screen lg:h-auto lg:w-1/4 p-5 flex flex-col justify-center items-center bg-gray-900 shadow-md rounded-lg">
      <div class="w-full flex flex-row justify-around items-center">
        <img src="@/assets/img/saylo_transparent.png" width="120px" alt="Saylo Logo">
        <div class="ml-2 flex flex-col justify-center">
          <h1 class="text-4xl text-white font-bold">Saylo!</h1>
          <p class="text-white font-semibold">Chat and Location Sharing App</p>
        </div>
      </div>
      <hr class="w-full mt-5">
      <div v-if="error" class="mt-5 w-full p-2 bg-red-300 border-2 border-red-700 rounded-md font-bold text-gray-700">
        <p>{{ error }}</p>
      </div>
      <div class="mt-5 w-full flex flex-col">
        <form action="" id="login-form" class="w-full flex flex-col justify-center items-center">
          <input type="email" placeholder="E-mail" v-model="email" autofocus class="w-full h-12 px-5 rounded-full outline-none">
          <input type="password" placeholder="Password" v-model="password" class="w-full h-12 px-5 mt-5 rounded-full outline-none">
          <div class="w-full flex flex-row">
            <button form="login-form" @click.prevent="login" class="w-1/2 h-12 mt-5 mr-1 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-2xl">Login</button>
            <button class="w-1/2 h-12 mt-5 ml-1 flex flex-row justify-center items-center text-white bg-blue-600 hover:bg-blue-700 rounded-full text-2xl"><router-link to="/register">Register <i class="fas fa-arrow-alt-circle-right"></i> </router-link></button>
          </div>
        </form>
        <hr class="mt-5">
        <div class="mt-5 w-full flex flex-col items-center">
          <p class="text-white">Or Login with</p>
          <div @click.prevent="loginWithGoogle" class="mt-5 cursor-pointer">
            <i class="bg-blue-600 hover:bg-blue-700 p-5 rounded-full text-white fab fa-google fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          this.$router.push('/chat')
        })
        .catch(err => {
          this.error = err.message
        })
    },
    loginWithGoogle () {
      var provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

      firebase.auth().signInWithPopup(provider)
        .then(result => {
        // eslint-disable-next-line no-unused-vars
          var token = result.credential.accessToken
          // The signed-in user info.
          // eslint-disable-next-line no-unused-vars
          var user = result.user

          firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
            .set({
              name: user.displayName,
              email: user.email,
              username: user.uid,
              photo: user.photoURL,
              bio: 'Say Hello!'
            })
          this.$router.push('/chat')
        })
        .catch(error => {
          // Handle Errors here.
        // eslint-disable-next-line no-unused-vars
          var errorCode = error.code
          // eslint-disable-next-line no-unused-vars
          var errorMessage = error.message
          // The email of the user's account used.
          // eslint-disable-next-line no-unused-vars
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          // eslint-disable-next-line no-unused-vars
          var credential = error.credential
          // ...
        })
    }
  }
}
</script>
