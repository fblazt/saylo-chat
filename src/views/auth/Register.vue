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
      <div class="my-5 w-full flex flex-col">
        <form action="" id="register-form" class="w-full flex flex-col justify-center items-center">
          <input type="text" placeholder="Name" v-model="name" autofocus class="w-full h-12 px-5 rounded-full outline-none">
          <input type="text" placeholder="Username" v-model="username" class="w-full h-12 px-5 mt-5 rounded-full outline-none">
          <input type="email" placeholder="E-mail" v-model="email" class="w-full h-12 px-5 mt-5 rounded-full outline-none">
          <input type="password" placeholder="Password" v-model="password" class="w-full h-12 px-5 mt-5 rounded-full outline-none">
          <button form="register-form" @click.prevent="register" class="w-full h-12 mt-5 ml-1 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-2xl outline-none">Create account</button>
        </form>
      </div>
      <p class="text-white">Please <router-link class="text-blue-600 hover:text-blue-700" to="/login">Login</router-link> if you already have an account.</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Register',
  data () {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    register () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
            .set({
              name: this.name,
              email: this.email,
              username: this.username,
              photo: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
              bio: 'Say Hello!'
            })
          this.$router.push('/chat')
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>
