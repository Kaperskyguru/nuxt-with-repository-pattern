export const state = () => ({
  posts: [],
  post: []
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_POST(state, post) {
    state.post = post
  }
}

export const actions = {
  async get_posts({ commit }) {
    const res = await this.$repositories.post.all()
    const { status, data } = res
    if (status === 200 && data.success && data.code) {
      const { data } = data
      commit('SET_POSTS', data)
    } else {
      // Handle error here
    }
  },

  async get_post({ commit }, post) {
    const res = await this.$repositories.post.show(post)
    const { status, data } = res
    if (status === 200 && data.success && data.code) {
      const { data } = data
      commit('SET_POST', data)
    } else {
      // Handle error here
    }
  },

  async create_post({ commit }, id, post) {
    const res = await this.$repositories.post.create(id, post)
    const { status, data } = res
    if (status === 200 && data.success && data.code) {
      const { data } = data
      commit('SET_POST', data)
    } else {
      // Handle error here
    }
  },

  async update_post({ commit }, id, post) {
    const res = await this.$repositories.post.update(id, post)
    const { status, data } = res
    if (status === 200 && data.success && data.code) {
      const { data } = data
      commit('SET_POST', data)
    } else {
      // Handle error here
    }
  },

  async delete_post({ commit }, id) {
    const res = await this.$repositories.post.delete(id)
    const { status, data } = res
    if (status === 200 && data.success && data.code) {
      // Remove from store
    } else {
      // Handle error here
    }
  }
}
