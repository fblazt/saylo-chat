<template>
  <div class="h-screen w-full flex flex-col justify-between">
    <Navbar/>
    <!-- <Profiles/> -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
// import Profiles from '@/components/Profiles'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    // Profiles,
    Footer
  }
}
</script>
