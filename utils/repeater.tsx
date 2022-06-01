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

const renderLayout = (layout: any, prefix: string) => {
  const extractedLayout = layout.__typename.split(prefix)[1]
  console.log(extractedLayout)

  switch (extractedLayout) {
    case 'Hero':
      return <HeroModule {...layout.hero} />
    case 'SliderWithMedia':
      return <SliderWithMediaModule {...layout.sliderWithMedia} />
    case 'TextVideoCombination':
      return <TextVideoCombinationModule {...layout.textVideoCombination} />
    case 'TextWithFullscreenVideo':
      return (
        <TextWithFullscreenVideoModule {...layout.textWithFullscreenVideo} />
      )
    case 'BigImageCarousel':
      return <BigImageCarouselModule {...layout.bigImageCarousel} />
    case 'HeadlineSeparator':
      return <HeadlineSeparatorModule {...layout.headlineSeparator} />
    case 'BigQuote':
      return <BigQuoteModule {...layout.bigQuote} />
    case 'MediaWithCopyAndLink':
      return <MediaWithCopyAndLinkModule {...layout.mediaWithCopyAndLink} />
    case 'FeaturedInsights':
      return <FeaturedInsightsModule {...layout.featuredInsights} />
    case 'CountingNumbers':
      return <CountingNumbersModule {...layout.countingNumbers} />
    case 'SideBySideMedia':
      return <SideBySideMediaModule {...layout.sidebySideMedia} />
    default:
      return null
  }
}

export default renderLayout
