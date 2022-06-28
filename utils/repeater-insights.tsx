/* eslint-disable react/jsx-props-no-spreading */
import ImageModule from 'components/modules/insights/Image/Image'
import QuoteModule from 'components/modules/insights/Quote/Quote'
import TextModule from 'components/modules/insights/Text/Text'
import TextWithImageModule from 'components/modules/insights/TextWithImage/TextWithImage'
import React from 'react'

const renderLayout = (layout: any, prefix: string, index: number) => {
  const extractedLayout = layout.__typename.split(prefix)[1]
  switch (extractedLayout) {
    case 'Text':
      return <TextModule key={`TextModule-${index}`} {...layout} />
    case 'Image':
      return <ImageModule key={`ImageModule-${index}`} {...layout} />
    case 'TextWithImage':
      return <TextWithImageModule key={`TextWithImageModule-${index}`} {...layout} />
    case 'Quote':
      return <QuoteModule key={`TextWithImageModule-${index}`} {...layout} />

    default:
      return null
  }
}

export default renderLayout
