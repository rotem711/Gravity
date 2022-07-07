/* eslint-disable no-nested-ternary */
import React, { FunctionComponent } from 'react'
import Fade from 'components/generic/fade/fade'
import LottiePlayer from 'components/generic/LottiePlayer/LottiePlayer'
import Image from 'components/generic/image/image'
import styles from './SublineHeadlineMedia.module.scss'
import ISublineHeadlineMedia from './SublineHeadlineMedia.interface'

const SublineHeadlineMediaModule: FunctionComponent<ISublineHeadlineMedia> = (
  props,
) => {
  const { sublineHeadlineMedia } = props

  return (
    <div className={`${styles.root}`}>
      <div className="container default-grid pt-35 pb-100 md:pb-115 xl:pb-155">
        <div className="col-span-full md:col-span-7 xl:col-span-6">
          <h2 className="typo-subhead uppercase mb-75 md:mb-100 xl:mb-140">
            <Fade>{sublineHeadlineMedia.subline}</Fade>
          </h2>
          <div className="typo-headlines mb-90 md:mb-0">
            <Fade delay={200}>{sublineHeadlineMedia.headline}</Fade>
          </div>
        </div>
        <div className={`${styles.mediaContainer} col-span-6 md:col-span-5`}>
          <Fade className="h-full" delay={300}>
            {sublineHeadlineMedia.lottieSelect ? (
              <LottiePlayer
                animation={sublineHeadlineMedia.lottieSelect}
              />
            ) : sublineHeadlineMedia.vimeoVideoUrl ? (
              <video
                src={sublineHeadlineMedia.vimeoVideoUrl}
                playsInline
                muted
                loop
                preload="none"
                autoPlay
              />
            ) : (
              <Image image={sublineHeadlineMedia.image} />
            )}
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default SublineHeadlineMediaModule
