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
import DividerModule from 'components/modules/Divider/Divider'
import TextVideoCombinationV2Module from 'components/modules/TextVideoCombinationV2/TextVideoCombinationV2'

const renderLayout = (layout: any, prefix: string, index: number) => {
  const extractedLayout = layout.__typename.split(prefix)[1]
  switch (extractedLayout) {
    case 'Hero':
      return <HeroModule key="HeroModule" {...layout} />
    case 'SliderWithMedia':
      return <SliderWithMediaModule key="SliderWithMediaModule" {...layout} />
    case 'TextVideoCombination':
      return <TextVideoCombinationModule key="TextVideoCombination" {...layout} />
    case 'TextWithFullscreenVideo':
      return <TextWithFullscreenVideoModule key="TextWithFullscreenVideo" {...layout} />
    case 'BigImageCarousel':
      return <BigImageCarouselModule key="BigImageCarousel" {...layout} />
    case 'HeadlineSeparator':
      return <HeadlineSeparatorModule key={`HeadlineSeparator-${index}`} {...layout} />
    case 'BigQuote':
      return <BigQuoteModule key="BigQuote" {...layout} />
    case 'MediaWithCopyAndLink':
      return <MediaWithCopyAndLinkModule key="MediaWithCopyAndLink" {...layout} />
    case 'FeaturedInsights':
      return <FeaturedInsightsModule key="FeaturedInsights" {...layout} />
    case 'CountingNumbers':
      return <CountingNumbersModule key="CountingNumbers" {...layout} />
    case 'SideBySideMedia':
      return <SideBySideMediaModule key="SideBySideMedia" {...layout} />
    case 'HeroV2':
      return <HeroV2Module key="HeroV2" {...layout} />
    case 'PlatformNavigation':
      return <PlatformNavigation key="PlatformNavigation" />
    case 'BigHeadline':
      return <BigHeadlineModule key="BigHeadline" {...layout} />
    case 'FullscreenLinkWithMedia':
      return <FullscreenLinkWithMediaModule key="FullscreenLinkWithMedia" {...layout} />
    case 'TabNavigationContent':
      return <TabNavigationContentModule key="TabNavigationContent" {...layout} />
    case 'TeamGrid':
      return <TeamGridModule key="TeamGrid" {...layout} />
    case 'HeroWithAnimatedText':
      return <HeroWithAnimatedTextModule key="HeroWithAnimatedText" {...layout} />
    case 'ImageWithCopyColumns':
      return <ImageWithCopyColumnsModule key="ImageWithCopyColumns" {...layout} />
    case 'HeadlineCopyMediaRows':
      return <HeadlineCopyMediaRowsModule key="HeadlineCopyMediaRows" {...layout} />
    case 'SublineHeadlineMedia':
      return <SublineHeadlineMediaModule key="SublineHeadlineMedia" {...layout} />
    case 'InsightsWithNavigation':
      return <InsightsWithNavigationModule key="InsightsWithNavigation" />
    case 'Divider':
      return <DividerModule key={`Divider-${index}`} {...layout} />
    case 'TextVideoCombinationV2':
      return <TextVideoCombinationV2Module key={`TextVideoCombinationV2-${index}`} {...layout} />
    default:
      return null
  }
}

export default renderLayout
