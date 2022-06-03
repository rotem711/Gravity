import FooterInterface from 'components/generic/footer/footer.interface'
import HeaderInterface from 'components/generic/header/header.interface'
import PlatformNavigationInterface from 'components/generic/platformNavigation/platformNavigation.interface'

export interface GlobalSet {
  header: HeaderInterface
  footer: FooterInterface
  platformNavigation: PlatformNavigationInterface
}
