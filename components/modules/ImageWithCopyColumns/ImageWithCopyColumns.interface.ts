import Image from 'interfaces/Image'

export default interface IImageWithCopyColumns {
  fieldGroupName: string
  imageWithCopyColumns: {
    headline: string
    columns: [
      {
        copy: string
      },
    ]
    image: Image
  }
}
