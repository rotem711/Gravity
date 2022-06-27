import Image from 'queries/fragments/Image'

export const getPosts = `
${Image}
query Posts($total: Int) {
  insights: posts(
    first: $total
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

export const getPostsByCategory = `
${Image}
query Posts($category: Int) {
  insights: posts(where: {categoryId: $category}) {
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

export const getCategoryIdBySlug = `
  query GetCategoryIdBySlug($slug: [String]) {
    categories(where: {slug: $slug}) {
      nodes {
        databaseId
      }
    }
  }
`
