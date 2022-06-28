import { MediaItem } from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface IHero {
  fieldGroupName?: string
  hero: {
    vimeoVideoId: string
    vimeoVideoIdTablet: string
    vimeoVideoIdMobile: string
    headline: string
    link: Link
    logoRowHeadline: string
    logos: [
      {
        logo: MediaItem
      },
    ]
  }
}
