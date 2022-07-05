import Author from 'interfaces/Author'
import { MediaItem } from 'interfaces/Image'
import Image, { ImageComponent } from 'queries/fragments/Image'
import Link from 'queries/fragments/Link'

export default `
  ${Image}
  ${Link}

  query post($uri: String, $databaseId: [ID]) {
    header: acfOptionsHeader {
      header {
        rightSideNavigation {
          link {
            ...Link
          }
        }
        mainNavigation {
          link {
            ...Link
          }
        }
        mobileMenuCta {
          ...Link
        }
      }
    }
    footer: acfOptionsFooter {
      footer {
        contact
        navigation {
          label
          links {
            link {
              ...Link
            }
          }
        }
      }
    }
    settings: themeGeneralSettings {
      globalSettings {
        newsBanner {
          newsBannerActive
            newsBannerText
            newsBannerLink {
              ...Link
            }
         }
        insightsDetailPage {
          fullscreenLinkWithMedia {
            vimeoVideoUrl
            link {
              ...Link
            }
            ${ImageComponent()}
          }
          headlineSeparator {
            backgroundColor
            enableSubscribe
            headline
            link {
              ...Link
            }
          }
        }
        notFound {
          link {
            ...Link
          }
          ${ImageComponent()}
        }
      }
    }
    nextPosts: posts(last: 3, where: {notIn: $databaseId}) {
      nodes {
        id
        title
        featuredImage {
          node {
            ...Image
          }
        }
        post {
          publishedDate
        }
      }
    }
    entry: postBy(slug: $uri) {
      id
      title
      slug
      uri
      featuredImage {
        node {
          ...Image
        }
      }
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
      post {
        previewVideo
        publishedDate
        contentBuilder {
           __typename
          ...on Post_Post_ContentBuilder_Text {
            fieldGroupName
            text
          }
          ...on Post_Post_ContentBuilder_Quote {
            fieldGroupName
            author
            quote
          }
          ...on Post_Post_ContentBuilder_Image {
            fieldGroupName
            ${ImageComponent()}
          }
          ...on Post_Post_ContentBuilder_TextWithImage {
            fieldGroupName
            text
            ${ImageComponent()}
          }
        }
      }
    }
  }
`

export interface InsightsInterface {
  id: string
  title: string
  slug: string
  uri: string
  author: {
    node: Author
  }
  featuredImage: {
    node: MediaItem
  }
  post: {
    previewVideo: string
    publishedDate: string
    contentBuilder: any[]
  }
}
