import { ImageComponent } from 'queries/fragments/Image'

const SublineHeadlineMediaFragment = (t: string) => `
  fragment SublineHeadlineMedia on ${t}_SublineHeadlineMedia {
    fieldGroupName
    sublineHeadlineMedia {
      headline
      subline
      ${ImageComponent()}
      vimeoVideoUrl
      lottieSelect
      link {
        ...Link
      }
    }
  }
`
export default SublineHeadlineMediaFragment
