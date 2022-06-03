const HeadlineSeparatorFragment = (t: string) => `
  fragment HeadlineSeparator on ${t}_HeadlineSeparator {
    fieldGroupName
    headlineSeparator {
      headline
      backgroundColor
      link {
        ...Link
      }
    }
  }
`
export default HeadlineSeparatorFragment
