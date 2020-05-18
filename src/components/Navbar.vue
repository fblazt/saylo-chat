<template>
  <div class="h-16 w-full px-3 py-1 fixed flex flex-row justify-between items-center bg-gray-900 text-white border-b border-gray-700">
    <div>
      <img src="@/assets/img/saylo_transparent.png" width="45px" alt="Saylo Logo">
    </div>
    <div class="flex items-center p-1 flex-row lg:bg-transparent lg:p-0 lg:rounded-none">
      <div :class="$route.name === 'UserProfile' ? 'hidden' : 'flex flex-row items-center p-1'">
        <img :src="authUser.photoURL" width="45px" alt="User Profile Picture" class="rounded-full hidden lg:flex">
        <p id="user-name" class="mx-3 text-2xl hidden lg:flex">{{ authUser.displayName }}</p>
        <router-link to="/user-profile"><i class="hidden lg:flex hover:bg-blue-800 px-2 py-3 bg-blue-600 rounded-full fas fa-cog fa-lg"></i></router-link>
      </div>
      <router-link to="/chat" v-if="$route.name === 'UserProfile'"><i class="hidden lg:flex hover:bg-blue-800 px-2 py-3 bg-blue-600 rounded-full fas fa-comments fa-lg"></i></router-link>
      <i @click.prevent="logout" class="ml-3 cursor-pointer hidden lg:flex hover:bg-blue-800 px-2 py-3 bg-blue-600 rounded-full fas fa-power-off fa-lg"></i>
    </div>
    <div v-if="$route.name !== 'UserProfile'" class="lg:hidden flex flex-row-reverse items-center p-1 bg-blue-600 rounded-full">
      <img src="https://lh3.googleusercontent.com/a-/AOh14GhwuslFhC6Ci-lYFNu989rH-pfDwbrjq8OtoRrLJQ=s96-c-rg-br100" width="45px" alt="Partner Profile Picture" class="rounded-full lg:hidden">
      <p id="partner-name" class="mx-3 text-xl lg:hidden">Firman</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data () {
    return {
      authUser: {}
    }
  },
  methods: {
    logout () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'Login'
          })
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
  }
}
</script>
