import Link from 'interfaces/Link'

export default interface ITextVideoCombination {
  fieldGroupName: string
  textVideoCombination: {
    topHeadline: string
    headline: string
    copy: string
    link: Link
    vimeoVideoUrl: string
  }
}
