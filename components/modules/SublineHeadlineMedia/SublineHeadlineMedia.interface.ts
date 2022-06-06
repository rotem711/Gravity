import Image from 'interfaces/Image'

export default interface ISublineHeadlineMedia {
  fieldGroupName: string
  sublineHeadlineMedia: {
    headline: string
    subline: string
    image: Image
    vimeoVideoUrl: string
  }
}
