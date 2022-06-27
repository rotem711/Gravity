const ImageFragment = (t: string) => `
  fragment Image on ${t}_Image {
    fieldGroupName
  }
`
export default ImageFragment
