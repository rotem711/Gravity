const CountingNumbersFragment = (t: string) => `
  fragment CountingNumbers on ${t}_CountingNumbers {
    fieldGroupName
    countingNumbers {
      headline
      backgroundColor
      numbers {
        value
        unit
        copy
      }
    }
  }
`
export default CountingNumbersFragment
