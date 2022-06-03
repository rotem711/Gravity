import { ImageComponent } from 'queries/fragments/Image'

const FullscreenLinkWithMediaFragment = (t: string) => `
  fragment FullscreenLinkWithMedia on ${t}_FullscreenLinkWithMedia {
    fieldGroupName
    fullscreenLinkWithMedia {
      link {
        ...Link
      }
      vimeoVideoUrl
      ${ImageComponent()}
    }
  }
`
export default FullscreenLinkWithMediaFragment
