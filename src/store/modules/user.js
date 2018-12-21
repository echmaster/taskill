import { signIn } from '../../services/api'
import auth from '../../services/auth'

export default {
  state: {
    user: {}
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    /**
     * Sign in
     * @param {string} email - user email
     * @param {string} password - user password
     * @param {object} vm - vue instance
     */
    async signIn ({ commit }, payload) {
      try {
        const res = await signIn({
          email: payload.email,
          password: payload.password
        })
        commit('SET_USER', res.data.data)
        auth.setLocalStorage(res.data.data)
      } catch (err) {}
    }
  }
}