import Link from 'interfaces/Link'

export default interface IButton {
  link?: Link
  variant: 'dark' | 'light'
  onClick?: () => void
  children?: any
  disableHover?: boolean
}
