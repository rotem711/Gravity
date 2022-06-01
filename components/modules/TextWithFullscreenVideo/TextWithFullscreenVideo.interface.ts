import { MediaItem } from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface ITextWithFullscreenVideo {
  fieldGroupName: string
  textWithFullscreenVideo: {
    headline: string
    copy: string
    link: Link
    logo: MediaItem
    vimeoVideoUrl: string
  }
}
