import { ImageComponent } from 'queries/fragments/Image'

const TabNavigationContentFragment = (t: string) => `
  fragment TabNavigationContent on ${t}_TabNavigationContent {
    fieldGroupName
    tabNavigationContent {
      mobileDefaultOpenIndex
      headlineSeparator {
        headline
        link {
          ...Link
        }
      }
      tabs {
        title
        titleIcon {
          ...Image
        }
        backgroundColor
        ${ImageComponent()}
        vimeoVideoUrl
        content {
          headline
          copy
        }
      }
    }
  }
`
export default TabNavigationContentFragment
