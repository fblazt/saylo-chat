import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      authUser: null
    },
    mobile: {
      friendList: true,
      friendProfile: false,
      userProfile: false
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    mobile: state => state.mobile
  },
  mutations: {
    SET_LOGGED_IN (state, value) {
      state.user.loggedIn = value
    },
    SET_AUTH_USER (state, data) {
      state.user.authUser = data
    },
    SET_USER (state, data) {
      state.user.data = data
    },
    TOGGLE_FRIEND_LIST (state) {
      state.mobile.friendList = !state.mobile.friendList
    },
    TOGGLE_FRIEND_PROFILE (state) {
      state.mobile.friendProfile = !state.mobile.friendProfile
    },
    TOGGLE_USER_PROFILE (state) {
      state.mobile.userProfile = !state.mobile.userProfile
    }
  },
  actions: {
    fetchUser ({ commit }, user) {
      commit('SET_LOGGED_IN', user !== null)
      if (user) {
        commit('SET_USER', {
          email: user.email
        })
      } else {
        commit('SET_USER', null)
      }
    }
  },
  modules: {
  }
})
