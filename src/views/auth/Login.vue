<template>
  <div class="min-h-screen min-w-screen flex justify-center items-center bg-gray-700">
    <div class="w-full h-screen lg:h-auto lg:w-1/4 p-5 flex flex-col justify-center items-center bg-gray-900 shadow-md rounded-lg">
      <img src="@/assets/img/saylo_transparent.png" width="100px" alt="Saylo Logo">
      <div class="mt-5 w-full flex flex-col">
        <form action="" class="w-full flex flex-col justify-center items-center">
          <input type="text" placeholder="E-mail" class="w-full h-12 px-5 rounded-full">
          <input type="password" placeholder="Password" class="w-full h-12 px-5 mt-5 rounded-full">
          <div class="w-full flex flex-row">
            <button class="w-1/2 h-12 mt-5 mr-1 text-white bg-blue-600 rounded-full text-2xl">Login</button>
            <button class="w-1/2 h-12 mt-5 ml-1 text-white bg-blue-600 rounded-full text-2xl">Register</button>
          </div>
        </form>
        <hr class="mt-5">
        <div class="mt-5 w-full flex flex-col items-center">
          <p class="text-white">Or Login with</p>
          <div class="mt-5">
            <i class="bg-blue-600 p-5 rounded-full text-white fab fa-google fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
