import Image from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface ITextVideoCombination {
  fieldGroupName?: string
  textVideoCombination: {
    items: [
      {
        topHeadline: string
        headline: string
        copy: string
        link: Link
        vimeoVideoUrl: string
        image: Image
        lottieSelect: string
      },
    ]
  }
}
