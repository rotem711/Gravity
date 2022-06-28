import Link from 'interfaces/Link'

export default interface INewsBanner {
  data: {
    newsBannerText: string
    newsBannerLink: Link
    newsBannerActive: boolean
  }
  onClose: () => void
}
