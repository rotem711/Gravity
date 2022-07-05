import Image from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface IFullscreenLinkWithMedia {
  fieldGroupName?: string
  fullscreenLinkWithMedia: {
    link: Link
    vimeoVideoUrl: string
    image: Image
  }
}
