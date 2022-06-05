import FooterInterface from 'components/generic/footer/footer.interface'
import HeaderInterface from 'components/generic/header/header.interface'
import PlatformNavigationInterface from 'components/generic/platformNavigation/platformNavigation.interface'
import InsightsInterface, { InsightsCategory } from './Insights'

export interface GlobalSet {
  header: HeaderInterface
  footer: FooterInterface
  platformNavigation: PlatformNavigationInterface
  insights: [InsightsInterface]
  insightsCategories: [InsightsCategory]
}
