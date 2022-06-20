import { ImageComponent } from 'queries/fragments/Image'

const TextVideoCombinationFragment = (t: string) => `
  fragment TextVideoCombination on ${t}_TextVideoCombination {
    fieldGroupName
    textVideoCombination {
      items {
        topHeadline
        headline
        copy
        link {
          ...Link
        }
        vimeoVideoUrl
        lottieSelect
        ${ImageComponent()}
      }
    }
  }
`
export default TextVideoCombinationFragment
