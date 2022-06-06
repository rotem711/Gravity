import Image, { MediaItem } from 'interfaces/Image'

export default interface IHeroV2 {
  fieldGroupName: string
  heroV2: {
    subline: string
    headline: string
    vimeoVideoUrl: string
    svgLayer: MediaItem
    image: Image
  }
}
