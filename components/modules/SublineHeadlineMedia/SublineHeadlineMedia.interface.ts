import Image from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface ISublineHeadlineMedia {
  fieldGroupName?: string
  sublineHeadlineMedia: {
    headline: string
    subline: string
    image: Image
    vimeoVideoUrl: string
    lottieSelect?: string
    link: Link
  }
}
