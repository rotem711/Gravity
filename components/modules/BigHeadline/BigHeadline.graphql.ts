const BigHeadlineFragment = (t: string) => `
  fragment BigHeadline on ${t}_BigHeadline {
    fieldGroupName
    bigHeadline {
      headline
    }
  }
`
export default BigHeadlineFragment
