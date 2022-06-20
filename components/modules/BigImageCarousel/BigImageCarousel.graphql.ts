import { ImageComponent } from 'queries/fragments/Image'

const BigImageCarouselFragment = (t: string) => `
  fragment BigImageCarousel on ${t}_BigImageCarousel {
    fieldGroupName
    bigImageCarousel {
      headline
      customHeadline
      copy
      link {
        ...Link
      }
      images {
       ${ImageComponent()}
       vimeoVideoUrl
      }
    }
  }
`
export default BigImageCarouselFragment
