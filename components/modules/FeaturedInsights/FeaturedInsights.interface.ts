import Post from 'interfaces/Post'

export default interface IFeaturedInsights {
  fieldGroupName: string
  featuredInsights: {
    headline: string
    backgroundColor: string
    insights: [{ insight: Post }]
  }
}
