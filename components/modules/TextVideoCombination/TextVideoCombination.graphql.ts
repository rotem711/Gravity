const TextVideoCombinationFragment = (t: string) => `
  fragment TextVideoCombination on ${t}_TextVideoCombination {
    fieldGroupName
    textVideoCombination {
      topHeadline
      headline
      copy
      link {
        ...Link
      }
      vimeoVideoUrl
    }
  }
`
export default TextVideoCombinationFragment
