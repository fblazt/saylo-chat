<template>
  <div class="max-h-screen w-full flex">
    <Navbar/>
    <div class="min-h-screen min-w-full flex justify-center items-center bg-gray-700">
      <div class="w-full h-screen lg:h-auto lg:w-3/4 px-5 py-10 flex flex-row justify-around items-center bg-gray-900 shadow-md rounded-lg">
        <div class="flex flex-col justify-center items-center">
          <img src="https://www.famousbirthdays.com/faces/henson-tim-image.jpg" width="200px" alt="User Profile Picture" class="rounded-full">
          <input type="file" name="" id="" class="mt-5 text-white rounded-full bg-gray-700">
        </div>
        <div>
          <div class="flex flex-row justify-center items-center">
            <h1 :class="!nameChange ? 'text-white text-6xl' : 'hidden'">Tim Henson</h1>
            <input type="text" name="name" id="name" :class="nameChange ? 'bg-gray-700 h-16 w-64 mt-5 mx-10' : 'hidden'">
            <i @click="nameChange = !nameChange" class="cursor-pointer ml-10 mt-5 text-white hover:text-blue-600 fas fa-edit fa-lg"></i>
          </div>
          <hr>
          <div class="text-white mt-5">
            <div class="mt-5 flex flex-row">
              <p class="w-32">Bio</p>
              <h4>Ngabuburit sambil minum es enak nih.,.,</h4>
            </div>
            <div class="mt-5 flex flex-row">
              <p class="w-32">Phone</p>
              <h4>102030405060</h4>
            </div>
            <div class="mt-5 flex flex-row">
              <p class="w-32">Email</p>
              <h4>tim@hens.on</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'UserProfile',
  data () {
    return {
      nameChange: false
    }
  },
  components: {
    Navbar
  }
}
</script>
