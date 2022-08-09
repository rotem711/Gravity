import { MediaItem } from 'interfaces/Image'

export default interface ILogoRow {
  fieldGroupName?: string
  logoRow: {
    logoRowHeadline: string
    logos: [
      {
        logo: MediaItem
        link: string
      },
    ]
  }
}
