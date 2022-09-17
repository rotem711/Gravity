import Image, { MediaItem } from 'interfaces/Image'

export default interface IInsightHeader {
  title: string
  image: Image
  videoUrl?: string
  featuredImage: MediaItem
}
