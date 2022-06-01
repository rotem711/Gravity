export default interface ICountingNumbers {
  fieldGroupName: string
  countingNumbers: {
    headline: string
    backgroundColor: string
    numbers: [
      {
        value: number
        unit: string
        copy: string
      },
    ]
  }
}
