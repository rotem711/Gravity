/* eslint-disable no-nested-ternary */
import React, { FunctionComponent } from 'react'
import Fade from 'components/generic/fade/fade'
import LottiePlayer from 'components/generic/LottiePlayer/LottiePlayer'
import Image from 'components/generic/image/image'
import { useInView } from 'react-intersection-observer'
import styles from './SublineHeadlineMedia.module.scss'
import ISublineHeadlineMedia from './SublineHeadlineMedia.interface'

const SublineHeadlineMediaModule: FunctionComponent<ISublineHeadlineMedia> = (
  props,
) => {
  const { sublineHeadlineMedia } = props

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <div className={`${styles.root}`}>
      <div className="container default-grid ms:grid-cols-12 pt-35 pb-100 md:pb-115 xl:pb-155">
        <div className="col-span-full ms:col-span-7 md:col-span-7 xl:col-span-6">
          <h2 className="typo-subhead uppercase mb-75 md:mb-100 xl:mb-140">
            <Fade>{sublineHeadlineMedia.subline}</Fade>
          </h2>
          <div className="typo-headlines mb-90 md:mb-0">
            <Fade delay={200}>{sublineHeadlineMedia.headline}</Fade>
          </div>
        </div>
        <div className={`${styles.mediaContainer} col-span-6 ms:col-span-5 md:col-span-5`}>
          <Fade className="h-full" delay={300}>
            {sublineHeadlineMedia.lottieSelect ? (
              <LottiePlayer
                animation={sublineHeadlineMedia.lottieSelect}
                triggerOnce
              />
            ) : (sublineHeadlineMedia.vimeoVideoUrl && inView) ? (
              <video
                src={sublineHeadlineMedia.vimeoVideoUrl}
                playsInline
                ref={ref}
                muted
                loop
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
