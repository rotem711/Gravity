const TextWithFullscreenVideoFragment = (t: string) => `
  fragment TextWithFullscreenVideo on ${t}_TextWithFullscreenVideo {
    fieldGroupName
    textWithFullscreenVideo {
      headline
      copy
      link {
        ...Link
      }
      lottieSelect
      logos {
        logo {
          ...Image
        }
      }
    }
  }
`
export default TextWithFullscreenVideoFragment
