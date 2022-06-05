import { ImageComponent } from 'queries/fragments/Image'

const ImageWithCopyColumnsFragment = (t: string) => `
  fragment ImageWithCopyColumns on ${t}_ImageWithCopyColumns {
    fieldGroupName
    imageWithCopyColumns {
      headline
      columns {
        copy
      }
      ${ImageComponent()}
    }
  }
`
export default ImageWithCopyColumnsFragment
