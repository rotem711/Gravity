import Image, { MediaItem } from 'interfaces/Image'
import Link from 'interfaces/Link'

export default interface ITabNavigationContent {
  fieldGroupName: string
  tabNavigationContent: {
    mobileDefaultOpenIndex: number
    headlineSeparator: {
      headline: string
      link: Link
    }
    tabs: [
      {
        title: string
        titleIcon: MediaItem
        backgroundColor: string
        image: Image
        vimeoVideoUrl: string
        content: {
          headline: string
          copy: string
        }[]
      },
    ]
  }
}
