import { MediaItem } from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface IMediaWithCopyAndLink {
  fieldGroupName: string
  mediaWithCopyAndLink: {
    vimeoVideoUrl: string
    backgroundColor: string
    lottie: MediaItem
    subline: string
    headline: string
    link: Link
  }
}
