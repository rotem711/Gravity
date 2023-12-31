import Author from 'interfaces/Author'
import ImageInterface, { MediaItem } from 'interfaces/Image'
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
        slug
        featuredImage {
          node {
            ...Image
          }
        }
        post {
          publishedDate
          optionalTitle
          customAuthor
        }
      }
    }
    entry: postBy(slug: $uri) {
      id
      title
      slug
      uri
      seoData {
        description
        fieldGroupName
        ogDescription
        ogImage {
          ...Image
        }
        ogLocale
        ogSiteName
        ogTitle
        ogType
        title
        ogUrl
        twitterCard
        twitterDescription
        twitterSite
        twitterTitle
        twitterImage {
          ...Image
        }
      }
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
        ${ImageComponent()}
        previewVideo
        publishedDate
        optionalTitle
        customAuthor
        contentBuilder {
           __typename
          ...on Post_Post_ContentBuilder_Text {
            fieldGroupName
            text
            subheader
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
            subheader
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
    image: ImageInterface
    previewVideo: string
    publishedDate: string
    optionalTitle: string
    customAuthor: string
    contentBuilder: any[]
  }
  seoData: {
    description: string
    fieldGroupName: string
    ogDescription: string
    ogImage: MediaItem
    ogLocale: string
    ogSiteName: string
    ogTitle: string
    ogType: string
    title: string
    ogUrl: string
    twitterCard: string
    twitterDescription: string
    twitterSite: string
    twitterTitle: string
    twitterImage: MediaItem
  }
}
