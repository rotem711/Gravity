import { MediaItem } from 'interfaces/Image'

export default interface IImage {
  image: {
    desktopImage: MediaItem
    mobileImage: MediaItem
  }
  layout?: string
  className?: string
  loading?: 'eager' | 'lazy'
}
