const HeroFragment = (t: string) => `
  fragment Hero on ${t}_Hero {
    fieldGroupName
    hero {
      vimeoVideoId
      vimeoVideoIdTablet
      vimeoVideoIdMobile
      headline
      link {
        ...Link
      }
      logoRowHeadline
      logos {
        logo {
          ...Image
        }
      }
    }
  }
`
export default HeroFragment
