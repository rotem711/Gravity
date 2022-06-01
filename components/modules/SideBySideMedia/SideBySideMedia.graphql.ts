import { ImageComponent } from 'queries/fragments/Image'

const SideBySideMediaFragment = (t: string) => `
  fragment SideBySideMedia on ${t}_SideBySideMedia {
    fieldGroupName
    sideBySideMedia {
      media {
        vimeoVideoUrl
        ${ImageComponent()}
        headline
        link {
          ...Link
        }
      }
    }
  }
`
export default SideBySideMediaFragment
