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
        <form action="" class="w-full flex flex-col justify-center items-center">
          <input type="text" placeholder="Name" autofocus class="w-full h-12 px-5 rounded-full outline-none">
          <input type="text" placeholder="Username" class="w-full h-12 px-5 mt-5 rounded-full outline-none">
          <input type="email" placeholder="E-mail" class="w-full h-12 px-5 mt-5 rounded-full outline-none">
          <input type="password" placeholder="Password" class="w-full h-12 px-5 mt-5 rounded-full outline-none">
          <button class="w-full h-12 mt-5 ml-1 text-white bg-blue-600 rounded-full text-2xl">Create account</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
