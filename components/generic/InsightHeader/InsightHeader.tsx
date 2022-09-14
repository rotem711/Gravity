import React, { FunctionComponent } from 'react'
import ImageComponent from 'components/generic/image/image'
import styles from './InsightHeader.module.scss'
import IInsightHeader from './InsightHeader.interface'

const InsightHeader: FunctionComponent<IInsightHeader> = (props) => {
  const { title, image, videoUrl } = props

  return (
    <div className={`${styles.root} bg-insights pt-110`}>
      <div className="container-insights flex flex-col">
        <h1 className="typo-headlines block mb-32 md:mb-24">{title}</h1>
        {!videoUrl && image && (
          <ImageComponent
            image={image}
          />
        )}
        {videoUrl && (
          <video
            src={videoUrl}
            className={styles.video}
            playsInline
            muted
            loop
            autoPlay
            width="665"
            height="380"
          />
        )}
      </div>
    </div>
  )
}

export default InsightHeader
