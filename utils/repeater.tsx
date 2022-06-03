/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import HeroModule from 'components/modules/Hero/Hero'
import SliderWithMediaModule from 'components/modules/SliderWithMedia/SliderWithMedia'
import TextVideoCombinationModule from 'components/modules/TextVideoCombination/TextVideoCombination'
import TextWithFullscreenVideoModule from 'components/modules/TextWithFullscreenVideo/TextWithFullscreenVideo'
import BigImageCarouselModule from 'components/modules/BigImageCarousel/BigImageCarousel'
import HeadlineSeparatorModule from 'components/modules/HeadlineSeparator/HeadlineSeparator'
import BigQuoteModule from 'components/modules/BigQuote/BigQuote'
import MediaWithCopyAndLinkModule from 'components/modules/MediaWithCopyAndLink/MediaWithCopyAndLink'
import FeaturedInsightsModule from 'components/modules/FeaturedInsights/FeaturedInsights'
import CountingNumbersModule from 'components/modules/CountingNumbers/CountingNumbers'
import SideBySideMediaModule from 'components/modules/SideBySideMedia/SideBySideMedia'
import HeroV2Module from 'components/modules/HeroV2/HeroV2'
import PlatformNavigationModule from 'components/modules/PlatformNavigation/PlatformNavigation'
import BigHeadlineModule from 'components/modules/BigHeadline/BigHeadline'
import FullscreenLinkWithMediaModule from 'components/modules/FullscreenLinkWithMedia/FullscreenLinkWithMedia'
import TabNavigationContentModule from 'components/modules/TabNavigationContent/TabNavigationContent'

const renderLayout = (layout: any, prefix: string) => {
  const extractedLayout = layout.__typename.split(prefix)[1]
  console.log(extractedLayout)

  switch (extractedLayout) {
    case 'Hero':
      return <HeroModule {...layout} />
    case 'SliderWithMedia':
      return <SliderWithMediaModule {...layout} />
    case 'TextVideoCombination':
      return <TextVideoCombinationModule {...layout} />
    case 'TextWithFullscreenVideo':
      return <TextWithFullscreenVideoModule {...layout} />
    case 'BigImageCarousel':
      return <BigImageCarouselModule {...layout} />
    case 'HeadlineSeparator':
      return <HeadlineSeparatorModule {...layout} />
    case 'BigQuote':
      return <BigQuoteModule {...layout} />
    case 'MediaWithCopyAndLink':
      return <MediaWithCopyAndLinkModule {...layout} />
    case 'FeaturedInsights':
      return <FeaturedInsightsModule {...layout} />
    case 'CountingNumbers':
      return <CountingNumbersModule {...layout} />
    case 'SideBySideMedia':
      return <SideBySideMediaModule {...layout} />
    case 'HeroV2':
      return <HeroV2Module {...layout} />
    case 'PlatformNavigation':
      return <PlatformNavigationModule {...layout} />
    case 'BigHeadline':
      return <BigHeadlineModule {...layout} />
    case 'FullscreenLinkWithMedia':
      return <FullscreenLinkWithMediaModule {...layout} />
    case 'TabNavigationContent':
      return <TabNavigationContentModule {...layout} />

    default:
      return null
  }
}

export default renderLayout
