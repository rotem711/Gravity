import Link from 'interfaces/Link'

export default interface HeaderInterface {
  data: Navigation
  inverted?: boolean
  uri: string
}

export interface Navigation {
  mainNavigation: [
    {
      link: Link
    },
  ]
  rightSideNavigation: [
    {
      link: Link
    },
  ]
  mobileMenuCta: Link
}
