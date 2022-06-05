export default interface IHeroWithAnimatedText {
  fieldGroupName: string
  heroWithAnimatedText: {
    vimeoVideoUrl: string
    animatingText: [{
      text: string
    }]
    subline: string
  }
}
