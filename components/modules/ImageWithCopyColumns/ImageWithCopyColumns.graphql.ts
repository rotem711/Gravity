import { ImageComponent } from 'queries/fragments/Image'

const ImageWithCopyColumnsFragment = (t: string) => `
  fragment ImageWithCopyColumns on ${t}_ImageWithCopyColumns {
    fieldGroupName
    imageWithCopyColumns {
      headline
      backgroundColor
      columns {
        headline
        copy
      }
      ${ImageComponent()}
    }
  }
`
export default ImageWithCopyColumnsFragment
