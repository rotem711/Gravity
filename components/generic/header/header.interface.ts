import Link from 'interfaces/Link'

export default interface HeaderInterface {
  data: Navigation
  inverted?: boolean
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
