<template>
  <div class="max-h-screen w-full flex flex-col">
    <Navbar/>
    <div class="min-h-screen min-w-full mt-16 flex justify-center items-center bg-gray-700">
      <div class="w-full h-screen overflow-y-auto lg:h-auto lg:w-3/4 px-5 py-10 flex flex-col justify-around items-center bg-gray-900 shadow-md rounded-none lg:rounded-lg shadow-md">
        <div class="mt-40 lg:mt-0 flex flex-col lg:flex-row justify-around w-full">
          <div class="flex flex-col justify-center items-center">
            <img :src="authUser.photoURL" width="200px" alt="User Profile Picture" class="rounded-full">
            <input type="file" name="" id="" class="mt-5 text-white rounded-full bg-gray-700">
          </div>
          <div class="mt-5 lg:mt-0">
            <div class="flex flex-row justify-center items-center">
              <h1 :class="!nameChange ? 'text-white text-4xl lg:text-6xl' : 'hidden'">{{ authUser.displayName }}</h1>
              <input type="text" name="name" id="name" :value="authUser.displayName" :class="nameChange ? ' bg-transparent text-gray-600 outline-none text-6xl h-16 w-64 mt-5 mb-3 mx-10' : 'hidden'">
              <i @click="nameChange = !nameChange" class="cursor-pointer ml-10 mt-5 text-white hover:text-blue-600 fas fa-edit fa-lg"></i>
            </div>
            <hr>
            <div class="text-white mt-5">
              <div class="mt-5 flex flex-row">
                <p class="w-32">Bio</p>
                <h4>Ngabuburit sambil minum es enak nih.,.,</h4>
              </div>
              <div class="mt-5 flex flex-row">
                <p class="w-32">Username</p>
                <h4>{{ authUser.uid }}</h4>
              </div>
              <div class="mt-5 flex flex-row">
                <p class="w-32">Phone</p>
                <h4>102030405060</h4>
              </div>
              <div class="mt-5 flex flex-row">
                <p class="w-32">Email</p>
                <h4>{{ authUser.email}}</h4>
              </div>
            </div>
          </div>
        </div>
        <hr class="w-full my-10">
        <div class="w-full flex flex-col justify-center items-center text-white">
          <h3 class="text-4xl">Your Location</h3>
          <div class="w-full h-64 mt-5 rounded-lg bg-blue-200 overflow-hidden">
            <GmapMap
            :center="myCoordinates"
            :zoom="zoom"
            style="width:100%; height:100%;"
            ref="mapRef"
            @dragend="handleDrag"
            ></GmapMap>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import firebase from 'firebase'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'UserProfile',
  data () {
    return {
      authUser: {},
      // user: [],
      nameChange: false,
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0
      },
      zoom: 7
    }
  },
  components: {
    Navbar,
    Footer
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authUser = user
      } else {
        this.authUser = {}
      }
    })
    // does the user have a saved center? use it instead of the default
    if (localStorage.center) {
      this.myCoordinates = JSON.parse(localStorage.center)
    } else {
      // get user's coordinates from browser request
      this.$getLocation({})
        .then(coordinates => {
          this.myCoordinates = coordinates
        })
        .catch(error => alert(error))
    }
    // does the user have a saved zoom? use it instead of the default
    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom)
    }
  },
  mounted () {
    // add the map to a data object
    // eslint-disable-next-line no-return-assign
    this.$refs.mapRef.$mapPromise.then(map => this.map = map)
  },
  methods: {
    handleDrag () {
      // get center and zoom level, store in localstorage
      const center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng()
      }
      const zoom = this.map.getZoom()
      localStorage.center = JSON.stringify(center)
      localStorage.zoom = zoom
    }
  },
  computed: {
    mapCoordinates () {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0
        }
      }
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next()
        } else {
          vm.$router.push('/login')
        }
      })
    })
  }
}
</script>
