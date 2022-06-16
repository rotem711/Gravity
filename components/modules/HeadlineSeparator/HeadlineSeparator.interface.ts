import Link from 'interfaces/Link'

export default interface IHeadlineSeparator {
  fieldGroupName: string
  headlineSeparator: {
    headline: string
    enableSubscribe: boolean
    link: Link
    backgroundColor: string
  }
}
