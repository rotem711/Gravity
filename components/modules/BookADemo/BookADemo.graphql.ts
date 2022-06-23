import { ImageComponent } from 'queries/fragments/Image'

const BookADemoFragment = (t: string) => `
  fragment BookADemo on ${t}_BookADemo {
    fieldGroupName
   bookADemo {
    subline
    headline
    checkboxDisclaimer
    ${ImageComponent()}
   }
  }
`
export default BookADemoFragment
