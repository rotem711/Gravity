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
            slug
            title
            featuredImage {
              node {
                ...Image
              }
            }
            post {
              publishedDate
              previewVideo
            }
          }
        }
      }
    }
  }
`
export default FeaturedInsightsFragment
