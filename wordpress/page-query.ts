import BigHeadlineFragment from 'components/modules/BigHeadline/BigHeadline.graphql'
import BigImageCarouselFragment from 'components/modules/BigImageCarousel/BigImageCarousel.graphql'
import BigQuoteFragment from 'components/modules/BigQuote/BigQuote.graphql'
import CountingNumbersFragment from 'components/modules/CountingNumbers/CountingNumbers.graphql'
import FeaturedInsightsFragment from 'components/modules/FeaturedInsights/FeaturedInsights.graphql'
import FullscreenLinkWithMediaFragment from 'components/modules/FullscreenLinkWithMedia/FullscreenLinkWithMedia.graphql'
import HeadlineCopyMediaRowsFragment from 'components/modules/HeadlineCopyMediaRows/HeadlineCopyMediaRows.graphql'
import HeadlineSeparatorFragment from 'components/modules/HeadlineSeparator/HeadlineSeparator.graphql'
import HeroFragment from 'components/modules/Hero/Hero.graphql'
import HeroV2Fragment from 'components/modules/HeroV2/HeroV2.graphql'
import HeroWithAnimatedTextFragment from 'components/modules/HeroWithAnimatedText/HeroWithAnimatedText.graphql'
import ImageWithCopyColumnsFragment from 'components/modules/ImageWithCopyColumns/ImageWithCopyColumns.graphql'
import InsightsWithNavigationFragment from 'components/modules/InsightsWithNavigation/InsightsWithNavigation.graphql'
import MediaWithCopyAndLinkFragment from 'components/modules/MediaWithCopyAndLink/MediaWithCopyAndLink.graphql'
import PlatformNavigationFragment from 'components/modules/PlatformNavigation/PlatformNavigation.graphql'
import SideBySideMediaFragment from 'components/modules/SideBySideMedia/SideBySideMedia.graphql'
import SliderWithMediaFragment from 'components/modules/SliderWithMedia/SliderWithMedia.graphql'
import SublineHeadlineMediaFragment from 'components/modules/SublineHeadlineMedia/SublineHeadlineMedia.graphql'
import TabNavigationContentFragment from 'components/modules/TabNavigationContent/TabNavigationContent.graphql'
import TeamGridFragment from 'components/modules/TeamGrid/TeamGrid.graphql'
import TextVideoCombinationFragment from 'components/modules/TextVideoCombination/TextVideoCombination.graphql'
import TextVideoCombinationV2Fragment from 'components/modules/TextVideoCombinationV2/TextVideoCombinationV2.graphql'
import TextWithFullscreenVideoFragment from 'components/modules/TextWithFullscreenVideo/TextWithFullscreenVideo.graphql'
import { MediaItem } from 'interfaces/Image'
import Image, { ImageComponent } from 'queries/fragments/Image'
import Link from 'queries/fragments/Link'

const TEMPLATE_PREFIX = 'DefaultTemplate_Pagebuilder_PageBuilder'

export default `
  ${Image}
  ${Link}
  ${HeroFragment(TEMPLATE_PREFIX)}
  ${SliderWithMediaFragment(TEMPLATE_PREFIX)}
  ${TextVideoCombinationFragment(TEMPLATE_PREFIX)}
  ${TextVideoCombinationV2Fragment(TEMPLATE_PREFIX)}
  ${TextWithFullscreenVideoFragment(TEMPLATE_PREFIX)}
  ${BigImageCarouselFragment(TEMPLATE_PREFIX)}
  ${HeadlineSeparatorFragment(TEMPLATE_PREFIX)}
  ${BigQuoteFragment(TEMPLATE_PREFIX)}
  ${MediaWithCopyAndLinkFragment(TEMPLATE_PREFIX)}
  ${FeaturedInsightsFragment(TEMPLATE_PREFIX)}
  ${CountingNumbersFragment(TEMPLATE_PREFIX)}
  ${SideBySideMediaFragment(TEMPLATE_PREFIX)}
  ${HeroV2Fragment(TEMPLATE_PREFIX)}
  ${PlatformNavigationFragment(TEMPLATE_PREFIX)}
  ${BigHeadlineFragment(TEMPLATE_PREFIX)}
  ${FullscreenLinkWithMediaFragment(TEMPLATE_PREFIX)}
  ${TabNavigationContentFragment(TEMPLATE_PREFIX)}
  ${HeroWithAnimatedTextFragment(TEMPLATE_PREFIX)}
  ${TeamGridFragment(TEMPLATE_PREFIX)}
  ${ImageWithCopyColumnsFragment(TEMPLATE_PREFIX)}
  ${HeadlineCopyMediaRowsFragment(TEMPLATE_PREFIX)}
  ${SublineHeadlineMediaFragment(TEMPLATE_PREFIX)}
  ${InsightsWithNavigationFragment(TEMPLATE_PREFIX)}

  query page($uri: String) {
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
    platformNavigation: acfOptionsPlatformNavigation {
      platformNavigation {
        title
        platformMainNavigation {
          link {
            ...Link
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
        notFound {
          link {
            ...Link
          }
          ${ImageComponent()}
        }
      }
    }
    insights: posts {
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
    insightsCategories: categories {
      nodes {
        id
        name
      }
    }
    entry: pageBy(uri: $uri) {
      id
      title
      slug
      uri
      pageOption {
        invertNavigation
      }
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
      template {
        __typename
        ... on DefaultTemplate {
          pageBuilder {
            pageBuilder {
              __typename
              ...on DefaultTemplate_Pagebuilder_PageBuilder_Hero {
                ...Hero
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_SliderWithMedia {
                ...SliderWithMedia
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_TextVideoCombination {
                ...TextVideoCombination
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_TextVideoCombinationV2 {
                ...TextVideoCombinationV2
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_TextWithFullscreenVideo {
                ...TextWithFullscreenVideo
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_BigImageCarousel {
                ...BigImageCarousel
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_HeadlineSeparator {
                ...HeadlineSeparator
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_BigQuote {
                ...BigQuote
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_MediaWithCopyAndLink {
                ...MediaWithCopyAndLink
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_FeaturedInsights {
                ...FeaturedInsights
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_CountingNumbers {
                ...CountingNumbers
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_SideBySideMedia {
                ...SideBySideMedia
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_HeroV2 {
                ...HeroV2
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_PlatformNavigation {
                ...PlatformNavigation
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_BigHeadline {
                ...BigHeadline
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_FullscreenLinkWithMedia {
                ...FullscreenLinkWithMedia
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_TabNavigationContent {
                ...TabNavigationContent
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_HeroWithAnimatedText {
                ...HeroWithAnimatedText
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_TeamGrid {
                ...TeamGrid
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_ImageWithCopyColumns {
                ...ImageWithCopyColumns
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_HeadlineCopyMediaRows {
                ...HeadlineCopyMediaRows
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_SublineHeadlineMedia {
                ...SublineHeadlineMedia
              }
              ...on DefaultTemplate_Pagebuilder_PageBuilder_InsightsWithNavigation {
                ...InsightsWithNavigation
              }
            }
          }
        }
      }
    }
  }
`

export interface PageInterface {
  id: string
  title: string
  slug: string
  uri: string
  pageOption: {
    invertNavigation: boolean
  }
  template: {
    pageBuilder: {
      pageBuilder: any[]
    }
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
