import React, { FunctionComponent } from 'react'
import Image from 'components/generic/image/image'
import styles from './SublineHeadlineMedia.module.scss'
import ISublineHeadlineMedia from './SublineHeadlineMedia.interface'

const SublineHeadlineMediaModule:FunctionComponent<ISublineHeadlineMedia> = (props) => {
  const { sublineHeadlineMedia } = props

  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container default-grid pt-35 pb-100 md:pb-115 xl:pb-155">
        <div className="md:col-span-7 xl:col-span-6">
          <h2 className="typo-subhead uppercase mb-75 md:mb-100 xl:mb-140">{sublineHeadlineMedia.subline}</h2>
          <p className="typo-headlines mb-90 md:mb-0">{sublineHeadlineMedia.headline}</p>
        </div>
        <div className={`${styles.mediaContainer} col-span-6 md:col-span-5 md:mt-35 xl:-mt-40`}>
          {
            sublineHeadlineMedia.vimeoVideoUrl
              ? (
                <video
                  src={sublineHeadlineMedia.vimeoVideoUrl}
                  playsInline
                  muted
                  loop
                  autoPlay
                />
              ) : (
                <Image
                  image={sublineHeadlineMedia.image}
                />
              )
          }
        </div>
      </div>
    </div>
  )
}

export default SublineHeadlineMediaModule
