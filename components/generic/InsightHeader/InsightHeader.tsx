import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from './InsightHeader.module.scss'
import IInsightHeader from './InsightHeader.interface'

const InsightHeader:FunctionComponent<IInsightHeader> = (props) => {
  const { title, image, videoUrl } = props

  return (

    <div
      className={`${styles.root} bg-insights pt-110`}
    >
      <div className="container-insights">
        <h1 className="typo-headlines block mb-32 md:mb-24">{title}</h1>
        {!videoUrl && image?.sourceUrl && (
          <Image src={image.sourceUrl} alt={image.altText} width="665" height="380" />
        )}
        {videoUrl && (
        <video
          src={videoUrl}
          className={styles.video}
          playsInline
          muted
          loop
          autoPlay
          preload="none"
          width="665"
          height="380"
        />
        )}
      </div>

    </div>
  )
}

export default InsightHeader
