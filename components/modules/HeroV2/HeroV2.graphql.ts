import { ImageComponent } from 'queries/fragments/Image'

const HeroV2Fragment = (t: string) => `
  fragment HeroV2 on ${t}_HeroV2 {
    fieldGroupName
    heroV2 {
      subline
      headline
      vimeoVideoUrl
      svgLayer {
        ...Image
      }
      link {
        ...Link
      }
      ${ImageComponent()}
    }
  }
`
export default HeroV2Fragment
