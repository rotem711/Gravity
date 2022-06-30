const BigQuoteFragment = (t: string) => `
  fragment BigQuote on ${t}_BigQuote {
    fieldGroupName
    bigQuote {
      leftHeadline
      leftHeadlineMobile
      backgroundColor
      imageAlignment
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
