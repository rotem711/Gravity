const TextWithImageFragment = (t: string) => `
  fragment TextWithImage on ${t}_TextWithImage {
    fieldGroupName
  }
`
export default TextWithImageFragment
