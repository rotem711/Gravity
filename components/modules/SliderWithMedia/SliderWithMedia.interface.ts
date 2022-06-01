import { MediaItem } from 'interfaces/Image'
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
        svg: MediaItem
      },
    ]
    link: Link
  }
}
