import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Fade from 'components/generic/fade/fade'
import styles from './HeadlineCopyMediaRows.module.scss'
import IHeadlineCopyMediaRows from './HeadlineCopyMediaRows.interface'

const HeadlineCopyMediaRowsModule:FunctionComponent<IHeadlineCopyMediaRows> = (props) => {
  const { headlineCopyMediaRows } = props

  return (
    <div
      className={`${styles.root} pt-35 pb-140 md:pb-160 lg:pb-260`}
    >
      <div className="container default-grid">
        <h2 className="col-span-6 md:col-span-12 typo-subhead uppercase mb-110 lg:mb-155"><Fade>{headlineCopyMediaRows.topHeadline}</Fade></h2>
        {headlineCopyMediaRows.rows.map((item, index) => (
          <Fade
            delay={index * 150 + 200}
            key={item.copy}
            className="default-grid col-span-6 md:col-span-12 mb-145 md:mb-115 lg:mb-150 last:mb-0"
          >
            <h3 className="col-span-6 md:col-span-4 lg:col-span-3 typo-headlines mb-55 md:mb-0">{item.headline}</h3>
            <p className="col-span-6 md:col-span-5 lg:col-span-3 typo-body mt-5 mb-50 md:md-0">{item.copy}</p>
            <div className={`col-span-6 md:col-start-10 md:col-end-13 mt-10 md:mt-0 relative ${styles.mediaContainer}`}>
              {
              item.vimeoVideoUrl
                ? <video preload="none" src={item.vimeoVideoUrl} playsInline muted loop autoPlay />
                : (
                  item.image && (
                    <Image
                      className={styles.gatsbyImage}
                      layout="fill"
                      src={item.image.sourceUrl}
                    />
                  )
                )
              }
            </div>
          </Fade>
        ))}
      </div>
    </div>
  )
}

export default HeadlineCopyMediaRowsModule
