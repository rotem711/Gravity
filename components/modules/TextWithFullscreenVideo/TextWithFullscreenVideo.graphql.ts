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
      lottieSelect
    }
  }
`
export default TextWithFullscreenVideoFragment
