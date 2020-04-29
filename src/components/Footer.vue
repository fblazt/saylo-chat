<template>
  <div class="h-16 relative mt-auto w-full px-3 py-1 flex flex-row justify-between items-center bg-gray-900 text-white lg:hidden">
    <i class="fas fa-users fa-2x"></i>
    <router-link to="/chat"><i :class="$route.name === 'Chat' ? 'text-blue-600' : 'text-white'" class="fas fa-comments fa-2x"></i></router-link>
    <router-link to="/profile">
      <img src="https://www.famousbirthdays.com/faces/henson-tim-image.jpg" width="45px" alt="User profile picture" class="rounded-full">
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
