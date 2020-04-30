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
    // const { status, data } = res
    if (res.status === 200 && res.data) {
      //   const { data } = data
      commit('SET_USERS', res.data)
    } else {
      // Handle error here
    }
  },

  async get_user({ commit }, user) {
    const res = await this.$repositories.user.show(user)
    // const { status, data } = res
    if (res.status === 200 && res.data) {
      //   const { data } = data
      commit('SET_USER', res.data)
    } else {
      // Handle error here
    }
  }
}
