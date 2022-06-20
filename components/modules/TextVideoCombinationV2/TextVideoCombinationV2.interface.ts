import Image from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface ITextVideoCombinationV2 {
  fieldGroupName: string
  textVideoCombinationV2: {
    items: [
      {
        topHeadline: string
        anchor: string
        headline: string
        headlineBreakpoint: string
        copy: string
        link: Link
        vimeoVideoUrl: string
        image: Image
        flipHorizontally: boolean
      },
    ]
  }
}
