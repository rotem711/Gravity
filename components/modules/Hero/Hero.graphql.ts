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
        link
        logo {
          ...Image
        }
      }
    }
  }
`
export default HeroFragment
