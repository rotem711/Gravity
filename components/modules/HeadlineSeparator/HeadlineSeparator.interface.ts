import Link from 'interfaces/Link'

export default interface IHeadlineSeparator {
  fieldGroupName?: string
  disableContainer: boolean
  headlineSeparator: {
    headline: string
    enableSubscribe: boolean
    link: Link
    backgroundColor: string
  }
}
