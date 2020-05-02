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
      <hr class="w-full my-5">
      <div class="my-5 w-full flex flex-col">
        <form action="" id="register-form" class="w-full flex flex-col justify-center items-center">
          <input type="text" placeholder="Name" v-model="name" autofocus class="w-full h-12 px-5 rounded-full outline-none">
          <input type="text" placeholder="Username" class="w-full h-12 px-5 mt-5 rounded-full outline-none">
          <input type="email" placeholder="E-mail" v-model="email" class="w-full h-12 px-5 mt-5 rounded-full outline-none">
          <input type="password" placeholder="Password" v-model="password" class="w-full h-12 px-5 mt-5 rounded-full outline-none">
          <button form="register-form" @click.prevent="register" class="w-full h-12 mt-5 ml-1 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-2xl outline-none">Create account</button>
        </form>
      </div>
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
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.name
            })
            .then(() => {})
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>
