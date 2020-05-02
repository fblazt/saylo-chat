<template>
  <div class="min-h-screen w-full flex flex-col justify-between">
    <Navbar/>
    <div class="lg:flex min-h-screen w-full flex-col justify-between lg:flex-row">
      <FriendList :class="$store.getters.mobile.friendList ? 'hidden lg:block lg:w-4/12' : ''"/>
      <Chats :class="$store.getters.mobile.friendList ? 'w-4/12' : 'hidden'"/>
      <FriendsProfile class="hidden lg:block lg:w-4/12"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import FriendList from '@/components/FriendList'
import Chats from '@/components/Chats'
import FriendsProfile from '@/components/FriendsProfile'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    FriendList,
    Chats,
    FriendsProfile,
    Footer
  }
}
</script>
