<template>
  <div class="max-h-screen w-full flex flex-col justify-between overflow-hidden">
    <Navbar/>
    <div class="lg:flex lg:flex-row">
      <FriendList class="w-4/12"/>
      <Chats class="flex-4/12"/>
      <FriendsProfile class="w-4/12"/>
      <Footer class=""/>
    </div>
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
