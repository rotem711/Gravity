const SliderWithMediaFragment = (t: string) => `
  fragment SliderWithMedia on ${t}_SliderWithMedia {
    fieldGroupName
    sliderWithMedia {
      subline
      slides {
        title
        copy
        vimeoVideoUrl
        svg {
          ...Image
        }
      }
      link {
        ...Link
      }
    }
  }
`
export default SliderWithMediaFragment
