import Image from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface ISideBySideMedia {
  fieldGroupName: string
  sideBySideMedia: {
    media: [
      {
        vimeoVideoUrl: string
        image: Image
        headline: string
        link: Link
      },
    ]
  }
}
