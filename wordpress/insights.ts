import Image from 'queries/fragments/Image'

export const getPosts = `
${Image}
query Posts {
  insights: posts(
    last: 100
    where: {orderby: {field: DATE, order: DESC}}) {

    nodes {
      slug
      title
      post {
        publishedDate
        previewVideo
      }
      featuredImage {
        node {
          ...Image
        }
      }
      categories {
        nodes {
          id
          name
        }
      }
    }
  }
}`

export default getPosts
