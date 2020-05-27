import Vue from 'vue'
import Vuex from 'vuex'
import axios from './services/axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      validEmail: false,
      users: null,
      singleUser: null,
      following: null,
      followers: null,
      repos: null
    },
    mutations: {
      setUsers (state, users) {
        if( Array.isArray(users) ){
          state.users = users
        }else{
          state.singleUser = users
        }
      },
      emailStatus (state, status) {
        state.validEmail = status
      }
    },
    actions: {
        list ({commit}, login) {
          let url = login ? '/users/' + login : '/users?since=20'
            axios.get(url)
                 .then(res => {
                    commit('setUsers', res.data)
            })
            .catch(error => console.error(error))
        },

        email({commit}, status) {
          commit('emailStatus', status)
        }
    },
    getters: {
      getUsers: state => {
        return state.list
      }
    }
})
