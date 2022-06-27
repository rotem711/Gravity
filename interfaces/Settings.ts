import Image from './Image'
import Link from './Link'

export default interface SettingsInterface {
  insightsDetailPage: {
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
}
