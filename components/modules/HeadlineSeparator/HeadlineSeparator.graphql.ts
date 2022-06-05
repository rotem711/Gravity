const HeadlineSeparatorFragment = (t: string) => `
  fragment HeadlineSeparator on ${t}_HeadlineSeparator {
    fieldGroupName
    headlineSeparator {
      headline
      backgroundColor
      enableSubscribe
      link {
        ...Link
      }
    }
  }
`
export default HeadlineSeparatorFragment
