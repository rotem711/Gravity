import { MediaItem } from 'interfaces/Image'

export default interface IHeadlineCopyMediaRows {
  fieldGroupName?: string
  headlineCopyMediaRows: {
    topHeadline: string
    rows: [
      {
        headline: string
        copy: string
        image: MediaItem
        vimeoVideoUrl: string
      },
    ]
  }
}
