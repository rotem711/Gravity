import { ImageComponent } from 'queries/fragments/Image'

const TextVideoCombinationV2Fragment = (t: string) => `
  fragment TextVideoCombinationV2 on ${t}_TextVideoCombinationV2 {
    fieldGroupName
    textVideoCombinationV2 {
      items {
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
  }
`
export default TextVideoCombinationV2Fragment
