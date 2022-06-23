import { ImageComponent } from 'queries/fragments/Image'

const InsightsWithNavigationFragment = (t: string) => `
  fragment InsightsWithNavigation on ${t}_InsightsWithNavigation {
    fieldGroupName
    textVideoCombinationV2 {
      items {
        topHeadline
        headline
        headlineBreakpoint
        anchor
        copy
        link {
          ...Link
        }
        vimeoVideoUrl
        ${ImageComponent()}
        flipHorizontally
      }
    }
  }
`
export default InsightsWithNavigationFragment
