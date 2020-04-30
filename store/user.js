export const state = () => ({
  users: [],
  user: []
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  async get({ commit }) {
    const res = await this.$repositories.user.all()
    const { status, data } = res
    if (status === 200 && data.success && data.code) {
      const { data } = data
      commit('SET_USERS', data)
    } else {
      // Handle error here
    }
  },

  async get_user({ commit }, user) {
    const res = await this.$repositories.user.show(user)
    const { status, data } = res
    if (status === 200 && data.success && data.code) {
      const { data } = data
      commit('SET_USER', data)
    } else {
      // Handle error here
    }
  }
}
