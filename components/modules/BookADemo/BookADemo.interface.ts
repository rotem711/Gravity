import Image from 'interfaces/Image'

export default interface IBookADemo {
  fieldGroupName?: string
  bookADemo: {
    subline: string
    headline: string
    checkboxDisclaimer: string
    image: Image
  }
}
