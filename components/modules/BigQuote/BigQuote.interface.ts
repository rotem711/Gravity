import { MediaItem } from 'interfaces/Image'

export default interface IBigQuote {
  fieldGroupName: string
  bigQuote: {
    backgroundColor: string
    leftHeadline: string
    quotes: [
      {
        quote: string
        subline: string
        logo: MediaItem
      },
    ]
  }
}
