import FooterInterface from 'components/generic/footer/footer.interface'
import { Navigation } from 'components/generic/header/header.interface'
import PlatformNavigationInterface from 'components/generic/platformNavigation/platformNavigation.interface'
import InsightsInterface, { InsightsCategory } from './Insights'

export interface GlobalSet {
  header: Navigation
  footer: FooterInterface
  platformNavigation?: PlatformNavigationInterface
  insights?: {
    nodes: [InsightsInterface]
  }
  insightsCategories?: InsightsCategory[]
}
