import { ImageComponent } from 'queries/fragments/Image'

const BigImageCarouselFragment = (t: string) => `
  fragment BigImageCarousel on ${t}_BigImageCarousel {
    fieldGroupName
    bigImageCarousel {
      headline
      copy
      link {
        ...Link
      }
      images {
       ${ImageComponent()}
      }
    }
  }
`
export default BigImageCarouselFragment
