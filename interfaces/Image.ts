export default interface Image {
  desktopImage: {
    sourceUrl: string
    altText: string
    mediaDetails: {
      width: number
      height: number
    }
    caption?: string
  }
  mobileImage: {
    sourceUrl: string
    altText: string
    mediaDetails: {
      width: number
      height: number
    }
    caption?: string
  }
}

export interface MediaItem {
  sourceUrl: string
  altText: string
  mediaDetails: {
    width: number
    height: number
  }
  caption?: string
}
