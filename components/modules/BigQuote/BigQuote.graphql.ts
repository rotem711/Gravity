const BigQuoteFragment = (t: string) => `
  fragment BigQuote on ${t}_BigQuote {
    fieldGroupName
    bigQuote {
      leftHeadline
      quote
      subline
      backgroundColor
    }
  }
`
export default BigQuoteFragment
