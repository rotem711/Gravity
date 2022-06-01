const FeaturedInsightsFragment = (t: string) => `
  fragment FeaturedInsights on ${t}_FeaturedInsights {
    fieldGroupName
    featuredInsights {
      headline
      backgroundColor
      insights {
        insight {
          ...on Post {
            id
            title
            featuredImage {
              node {
                ...Image
              }
            }
          }
        }
      }
    }
  }
`
export default FeaturedInsightsFragment
