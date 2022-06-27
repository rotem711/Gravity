const TextFragment = (t: string) => `
  fragment Text on ${t}_Text {
    fieldGroupName
  }
`
export default TextFragment
