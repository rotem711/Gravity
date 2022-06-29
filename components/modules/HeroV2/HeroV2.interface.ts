import Image, { MediaItem } from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface IHeroV2 {
  fieldGroupName?: string
  heroV2: {
    subline: string
    headline: string
    vimeoVideoUrl: string
    svgLayer: MediaItem
    image: Image
    link: Link
  }
}
