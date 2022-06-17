import Link from 'interfaces/Link'

export default interface IMediaWithCopyAndLink {
  fieldGroupName: string
  mediaWithCopyAndLink: {
    backgroundColor: string
    lottieSelect: string
    subline: string
    headline: string
    link: Link
  }
}
