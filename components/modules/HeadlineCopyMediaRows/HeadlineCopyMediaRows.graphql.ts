const HeadlineCopyMediaRowsFragment = (t: string) => `
  fragment HeadlineCopyMediaRows on ${t}_HeadlineCopyMediaRows {
    fieldGroupName
    headlineCopyMediaRows {
      topHeadline
      rows {
        headline
        copy
        image {
          ...Image
        }
        vimeoVideoUrl
      }
    }
  }
`
export default HeadlineCopyMediaRowsFragment
