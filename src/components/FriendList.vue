<template>
  <div class="min-h-screen px-2 border-l-0 border-t lg:border-r bg-gray-900 border-gray-700">
    <h1 class="mt-16 ml-1 text-white text-4xl">Friends</h1>
    <div class="mt-2 w-full">
      <input type="text" name="" id="" placeholder="Search here.." class="h-8 w-10/12 px-3 rounded-full outline-none">
      <button class="w-2/12 text-white"><i class="fas fa-search"></i></button>
    </div>
    <hr class="my-5">
    <div class="overflow-y-auto max-h-screen flex flex-col">
      <div v-for="friend in friends" :key="friend.id" class="flex flex-row items-center p-1 rounded-full hover:bg-gray-800">
        <img :src="friend.photo" width="50px" alt="Friend Picture Profile" class="rounded-full">
        <div class="ml-3 flex flex-col justify-center pb-1">
          <h4 class="text-xl text-white">{{ friend.name }}</h4>
          <p class="lg:w-56 text-gray-500 lg:truncate">Most recent message from chat should be here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendList',
  data () {
    return {
      friends: []
    }
  },
  methods: {
    getUser () {
      this.$db.collection('users').onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {
          this.friends.push(doc.data())
        })
      })
    }
  },
  created () {
    console.log(this.friends)
    this.getUser()
  }
}
</script>
