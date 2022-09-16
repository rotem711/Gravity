export const ImageComponent = (key: string = 'image') => `
${key} {
  mobileImage {
    ...Image
  }
  desktopImage {
   ...Image
  }
  caption
}`

export default `
  fragment Image on MediaItem {
      altText
      sourceUrl
      mediaDetails {
        width
        height
      }
      caption
  }
`
