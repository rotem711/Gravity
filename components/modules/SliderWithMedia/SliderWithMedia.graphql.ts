import { ImageComponent } from 'queries/fragments/Image'

const SliderWithMediaFragment = (t: string) => `
  fragment SliderWithMedia on ${t}_SliderWithMedia {
    fieldGroupName
    sliderWithMedia {
      subline
      slides {
        title
        copy
        vimeoVideoUrl
        ${ImageComponent()}
        ${ImageComponent('backgroundImage')}
      }
      link {
        ...Link
      }
    }
  }
`
export default SliderWithMediaFragment
