const BigQuoteFragment = (t: string) => `
  fragment BigQuote on ${t}_BigQuote {
    fieldGroupName
    bigQuote {
      leftHeadline
      leftHeadlineMobile
      backgroundColor
      quotes {
        quote
        subline
        logo {
          ...Image
        }
      }
    }
  }
`
export default BigQuoteFragment
