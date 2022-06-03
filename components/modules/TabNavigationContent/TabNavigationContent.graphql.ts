import { ImageComponent } from 'queries/fragments/Image'

const TabNavigationContentFragment = (t: string) => `
  fragment TabNavigationContent on ${t}_TabNavigationContent {
    fieldGroupName
    tabNavigationContent {
      mobileDefaultOpenIndex
      tabs {
        title
        titleIcon {
          ...Image
        }
        backgroundColor
        ${ImageComponent()}
        content {
          headline
          copy
        }
      }
    }
  }
`
export default TabNavigationContentFragment
