import Image from 'interfaces/Image'

export default interface IImageWithCopyColumns {
  fieldGroupName: string
  imageWithCopyColumns: {
    headline: string
    backgroundColor: string
    columns: [
      {
        headline: string
        copy: string
      },
    ]
    image: Image
  }
}
