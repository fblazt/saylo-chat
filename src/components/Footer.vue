<template>
  <div class="h-16 relative mt-auto w-full px-3 py-1 flex flex-row justify-around items-center border-t border-gray-700 bg-gray-900 text-white lg:hidden">
    <i @click="$store.commit('TOGGLE_FRIEND_LIST')" :class="!$store.getters.mobile.friendList ? 'text-blue-600' : 'text-white'" class="fas fa-users fa-2x"></i>
    <router-link to="/chat">
      <i :class="$store.getters.mobile.friendList ? 'text-blue-600' : 'text-white'" class="fas fa-comments fa-2x"></i>
    </router-link>
    <router-link to="/user-profile">
      <img :src="authUser.photoURL" width="45px" alt="User profile picture" class="rounded-full">
    </router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Footer',
  data () {
    return {
      authUser: {}
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

<style>

</style>
