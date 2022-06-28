import Image from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface ISliderWithMedia {
  fieldGroupName: string
  sliderWithMedia: {
    subline: string
    slides: [
      {
        title: string
        copy: string
        vimeoVideoUrl: string
        image: Image
        backgroundImage: Image
      },
    ]
    link: Link
  }
}
