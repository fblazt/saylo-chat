<template>
  <div class="h-16 w-full px-3 py-1 fixed flex flex-row justify-between items-center bg-gray-900 text-white border-b border-gray-700">
    <div>
      <img src="@/assets/img/saylo_transparent.png" width="45px" alt="Saylo Logo">
    </div>
    <div v-if="$route.name !== 'Profile'" class="flex flex-row-reverse items-center bg-blue-600 p-1 rounded-full lg:flex-row lg:bg-transparent lg:p-0 lg:rounded-none">
      <img src="https://www.famousbirthdays.com/faces/henson-tim-image.jpg" width="45px" alt="User Profile Picture" class="rounded-full hidden lg:flex">
      <img src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/8/e/d/efbe-fc20-4fc6-a07e-21fd82a824e5" width="45px" alt="Partner Profile Picture" class="rounded-full lg:hidden">
      <p id="user-name" class="mx-3 text-2xl hidden lg:flex">Tim Henson</p>
      <p id="partner-name" class="mx-3 text-xl lg:hidden">Cuco</p>
      <i class="hidden lg:flex hover:text-blue-600 pointer fas fa-cog fa-lg"></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
