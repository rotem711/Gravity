import Image from 'interfaces/Image'

export default interface ITextWithImage {
  fieldGroupName?: string
  text: string
  image: Image
  subheader?: string
}
