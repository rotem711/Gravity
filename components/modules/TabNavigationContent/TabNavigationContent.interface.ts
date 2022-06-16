import Image, { MediaItem } from 'interfaces/Image'

export default interface ITabNavigationContent {
  fieldGroupName: string
  tabNavigationContent: {
    mobileDefaultOpenIndex: number
    tabs: [
      {
        title: string
        titleIcon: MediaItem
        backgroundColor: string
        image: Image
        content: {
          headline: string
          copy: string
        }[]
      },
    ]
  }
}
