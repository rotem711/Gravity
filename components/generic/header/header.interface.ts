import Link from 'interfaces/Link'

export default interface HeaderInterface {
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
