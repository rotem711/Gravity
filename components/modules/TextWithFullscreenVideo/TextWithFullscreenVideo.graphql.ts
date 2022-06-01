const TextWithFullscreenVideoFragment = (t: string) => `
  fragment TextWithFullscreenVideo on ${t}_TextWithFullscreenVideo {
    fieldGroupName
    textWithFullscreenVideo {
      headline
      copy
      link {
        ...Link
      }
      logo {
        ...Image
      }
      vimeoVideoUrl
    }
  }
`
export default TextWithFullscreenVideoFragment
