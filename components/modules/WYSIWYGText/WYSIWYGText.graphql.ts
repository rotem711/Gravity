const WYSIWYGTextFragment = (t: string) => `
  fragment Wysiwyg on ${t}_Wysiwyg {
    fieldGroupName
    wysiwyg
  }
`
export default WYSIWYGTextFragment
