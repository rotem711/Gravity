import Image from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface IBigImageCarousel {
  fieldGroupName: string
  bigImageCarousel: {
    headline: string
    customHeadline: string
    copy: string
    link: Link
    images: [
      {
        image: Image
        vimeoVideoUrl: string
      },
    ]
  }
}
