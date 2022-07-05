import Author from './Author'
import { MediaItem } from './Image'

export default interface InsightsInterface {
  title: string
  slug: string
  uri: string
  featuredImage: {
    node: MediaItem
  }
  author: {
    node: Author
  }
  post: {
    publishedDate: string
    previewVideo: string
  }
  categories: {
    nodes: [
      {
        id: string
        name: string
      },
    ]
  }
}

export interface InsightsCategory {
  id: string
  name: string
}
