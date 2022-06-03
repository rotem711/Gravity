import Link from 'interfaces/Link'

export default interface IHeadlineSeparator {
  fieldGroupName: string
  headlineSeparator: {
    headline: string
    link: Link
    backgroundColor: string
  }
}
