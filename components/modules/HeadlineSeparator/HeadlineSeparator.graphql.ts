const HeadlineSeparatorFragment = (t: string) => `
  fragment HeadlineSeparator on ${t}_HeadlineSeparator {
    fieldGroupName
    headlineSeparator {
      headline
      link {
        ...Link
      }
    }
  }
`
export default HeadlineSeparatorFragment
