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
import BigHeadlineModule from 'components/modules/BigHeadline/BigHeadline'
import FullscreenLinkWithMediaModule from 'components/modules/FullscreenLinkWithMedia/FullscreenLinkWithMedia'
import TabNavigationContentModule from 'components/modules/TabNavigationContent/TabNavigationContent'
import PlatformNavigation from 'components/generic/platformNavigation/platformNavigation'
import TeamGridModule from 'components/modules/TeamGrid/TeamGrid'
import HeroWithAnimatedTextModule from 'components/modules/HeroWithAnimatedText/HeroWithAnimatedText'
import ImageWithCopyColumnsModule from 'components/modules/ImageWithCopyColumns/ImageWithCopyColumns'
import HeadlineCopyMediaRowsModule from 'components/modules/HeadlineCopyMediaRows/HeadlineCopyMediaRows'
import SublineHeadlineMediaModule from 'components/modules/SublineHeadlineMedia/SublineHeadlineMedia'
import InsightsWithNavigationModule from 'components/modules/InsightsWithNavigation/InsightsWithNavigation'

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
      return <PlatformNavigation />
    case 'BigHeadline':
      return <BigHeadlineModule {...layout} />
    case 'FullscreenLinkWithMedia':
      return <FullscreenLinkWithMediaModule {...layout} />
    case 'TabNavigationContent':
      return <TabNavigationContentModule {...layout} />
    case 'TeamGrid':
      return <TeamGridModule {...layout} />
    case 'HeroWithAnimatedText':
      return <HeroWithAnimatedTextModule {...layout} />
    case 'ImageWithCopyColumns':
      return <ImageWithCopyColumnsModule {...layout} />
    case 'HeadlineCopyMediaRows':
      return <HeadlineCopyMediaRowsModule {...layout} />
    case 'SublineHeadlineMedia':
      return <SublineHeadlineMediaModule {...layout} />
    case 'InsightsWithNavigation':
      return <InsightsWithNavigationModule />
    default:
      return null
  }
}

export default renderLayout
