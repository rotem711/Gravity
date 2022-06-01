const MediaWithCopyAndLinkFragment = (t: string) => `
  fragment MediaWithCopyAndLink on ${t}_MediaWithCopyAndLink {
    fieldGroupName
    mediaWithCopyAndLink {
      vimeoVideoUrl
      lottie {
        ...Image
      }
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
