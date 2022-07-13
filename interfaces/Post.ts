import { MediaItem } from './Image'

export default interface Post {
  id: string
  slug: string
  title: string
  featuredImage: {
    node: MediaItem
  }
  post: {
    publishedDate: string
    previewVideo: string
    optionalTitle: string
    customAuthor: string
  }
}
