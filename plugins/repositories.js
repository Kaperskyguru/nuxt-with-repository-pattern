import createRepository from '~/repositories/Repository'

export default (ctx, inject) => {
  inject('repositories', createRepository(ctx.$axios))
}
