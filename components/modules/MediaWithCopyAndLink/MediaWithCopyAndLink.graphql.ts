const MediaWithCopyAndLinkFragment = (t: string) => `
  fragment MediaWithCopyAndLink on ${t}_MediaWithCopyAndLink {
    fieldGroupName
    mediaWithCopyAndLink {
      lottieSelect
      subline
      headline
      link {
        ...Link
      }
      backgroundColor
    }
  }
`
export default MediaWithCopyAndLinkFragment
