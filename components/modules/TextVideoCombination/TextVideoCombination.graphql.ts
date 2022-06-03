import { ImageComponent } from 'queries/fragments/Image'

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
      ${ImageComponent()}
      flipHorizontally
    }
  }
`
export default TextVideoCombinationFragment
