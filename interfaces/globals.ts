import FooterInterface from 'components/generic/footer/footer.interface'
import { Navigation } from 'components/generic/header/header.interface'
import PlatformNavigationInterface from 'components/generic/platformNavigation/platformNavigation.interface'
import InsightsInterface, { InsightsCategory } from './Insights'
import SettingsInterface from './Settings'

export interface GlobalSet {
  header: Navigation
  footer: FooterInterface
  settings: SettingsInterface
  platformNavigation?: PlatformNavigationInterface
  insights?: {
    nodes: [InsightsInterface]
  }
  insightsCategories?: InsightsCategory[]
}
