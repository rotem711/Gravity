const CountingNumbersFragment = (t: string) => `
  fragment CountingNumbers on ${t}_CountingNumbers {
    fieldGroupName
    countingNumbers {
      headline
      backgroundColor
      numbers {
        prefix
        value
        unit
        copy
      }
    }
  }
`
export default CountingNumbersFragment
