import Image from './Image'
import Link from './Link'

export default interface SettingsInterface {
  insightsDetailPage: {
    fullscreenLinkWithMedia: {
      vimeoVideoUrl: string
      link: Link
      image: Image
    }
    headlineSeparator: {
      backgroundColor: string
      enableSubscribe: boolean
      headline: string
      link: Link
    }
  }
  notFound: {
    image: Image
    link: Link
  }
  newsBanner: {
    newsBannerText: string
    newsBannerLink: Link
    newsBannerActive: boolean
  }
}
