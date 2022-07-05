export default interface ICountingNumbers {
  fieldGroupName?: string
  countingNumbers: {
    headline: string
    backgroundColor: string
    numbers: [
      {
        prefix: string
        value: number
        unit: string
        copy: string
      },
    ]
  }
}
