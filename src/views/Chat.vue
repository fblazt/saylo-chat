<template>
  <div class="h-screen w-full flex flex-col justify-between">
    <Navbar/>
    <Chats/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Chats from '@/components/Chats'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Chats,
    Footer
  }
}
</script>
