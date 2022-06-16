const HeroWithAnimatedTextFragment = (t: string) => `
  fragment HeroWithAnimatedText on ${t}_HeroWithAnimatedText {
    fieldGroupName
    heroWithAnimatedText {
      vimeoVideoUrl
      animatingText {
        text
      }
      subline
    }
  }
`
export default HeroWithAnimatedTextFragment
