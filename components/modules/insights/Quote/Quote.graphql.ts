const QuoteFragment = (t: string) => `
  fragment Quote on ${t}_Quote {
    fieldGroupName
  }
`
export default QuoteFragment
