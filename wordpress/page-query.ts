import BigImageCarouselFragment from 'components/modules/BigImageCarousel/BigImageCarousel.graphql'
import BigQuoteFragment from 'components/modules/BigQuote/BigQuote.graphql'
import CountingNumbersFragment from 'components/modules/CountingNumbers/CountingNumbers.graphql'
import FeaturedInsightsFragment from 'components/modules/FeaturedInsights/FeaturedInsights.graphql'
import HeadlineSeparatorFragment from 'components/modules/HeadlineSeparator/HeadlineSeparator.graphql'
import HeroFragment from 'components/modules/Hero/Hero.graphql'
import MediaWithCopyAndLinkFragment from 'components/modules/MediaWithCopyAndLink/MediaWithCopyAndLink.graphql'
import SideBySideMediaFragment from 'components/modules/SideBySideMedia/SideBySideMedia.graphql'
import SliderWithMediaFragment from 'components/modules/SliderWithMedia/SliderWithMedia.graphql'
import TextVideoCombinationFragment from 'components/modules/TextVideoCombination/TextVideoCombination.graphql'
import TextWithFullscreenVideoFragment from 'components/modules/TextWithFullscreenVideo/TextWithFullscreenVideo.graphql'
import Image from 'queries/fragments/Image'
import Link from 'queries/fragments/Link'

const TEMPLATE_PREFIX = 'DefaultTemplate_Pagebuilder_PageBuilder'

export default `
  ${Image}
  ${Link}
  ${HeroFragment(TEMPLATE_PREFIX)}
  ${SliderWithMediaFragment(TEMPLATE_PREFIX)}
  ${TextVideoCombinationFragment(TEMPLATE_PREFIX)}
  ${TextWithFullscreenVideoFragment(TEMPLATE_PREFIX)}
  ${BigImageCarouselFragment(TEMPLATE_PREFIX)}
  ${HeadlineSeparatorFragment(TEMPLATE_PREFIX)}
  ${BigQuoteFragment(TEMPLATE_PREFIX)}
  ${MediaWithCopyAndLinkFragment(TEMPLATE_PREFIX)}
  ${FeaturedInsightsFragment(TEMPLATE_PREFIX)}
  ${CountingNumbersFragment(TEMPLATE_PREFIX)}
  ${SideBySideMediaFragment(TEMPLATE_PREFIX)}
  query page($uri: String) {
    entry: pageBy(uri: $uri) {
      id
      title
      slug
      uri
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
  template: {
    pageBuilder: {
      pageBuilder: [any]
    }
  }
}
