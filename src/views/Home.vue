<template>
  <div class="max-w-screen bg-gray-700 flex flex-row flex-wrap items-center justify-center">
    <div v-for="item in 100" :key="item">
      <router-link class="text-6xl text-gray-500 hover:text-white font-extrabold mr-1" to="/login">Saylo!</router-link>
      <router-link class="text-6xl text-gray-500 hover:text-blue-600 font-extrabold mr-1" to="/register">Saylo!</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
