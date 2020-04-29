<template>
  <div class="px-2 border-l-0 border-t border-r bg-gray-900 border-gray-700">
    <h1 class="mt-16 text-white text-4xl">Friends</h1>
    <div class="mt-2 w-full">
      <input type="text" name="" id="" class="h-8 w-10/12 px-3 rounded-full outline-none">
      <button class="w-2/12 text-white"><i class="fas fa-search"></i></button>
    </div>
    <hr class="my-5">
    <div class="overflow-y-auto max-h-screen flex flex-col">
      <div v-for="item in 20" :key="item" class="flex flex-row items-center">
        <img src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/8/e/d/efbe-fc20-4fc6-a07e-21fd82a824e5" width="50px" alt="Friend Picture Profile" class="rounded-full">
        <div class="ml-3 flex flex-col justify-center pb-1">
          <h4 class="text-xl text-white">Cuco</h4>
          <p class="text-gray-500">Ngabuburit skuy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
