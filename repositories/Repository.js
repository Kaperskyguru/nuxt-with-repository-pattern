import PostRepository from '~/repositories/PostRepository'
import UserRepository from '~/repositories/UserRepository'
import CommentRepository from '~/repositories/CommentRepository'
import AlbumRepository from '~/repositories/AlbumRepository'
import PhotoRepository from '~/repositories/PhotoRepository'
import TodoRepository from '~/repositories/TodoRepository'

export default ($axios) => ({
  post: PostRepository($axios),
  user: UserRepository($axios),
  comment: CommentRepository($axios),
  album: AlbumRepository($axios),
  photo: PhotoRepository($axios),
  todo: TodoRepository($axios)
})
