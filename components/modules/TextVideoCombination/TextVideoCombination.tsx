/* eslint-disable no-nested-ternary */
import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import Fade from 'components/generic/fade/fade'
import Image from 'components/generic/image/image'
import LottiePlayer from 'components/generic/LottiePlayer/LottiePlayer'
import styles from './TextVideoCombination.module.scss'
import ITextVideoCombination from './TextVideoCombination.interface'

const TextVideoCombinationModule: FunctionComponent<ITextVideoCombination> = (
  props,
) => {
  const { textVideoCombination } = props
  return (
    <div className={`${styles.root}`}>
      <div className="container">
        {textVideoCombination.items.map((item) => (
          <div key={item.headline} className={`${styles.item} md:default-grid`}>
            <div className="md:col-span-6 xl:col-span-4 flex flex-col md:row-start-2">
              {item.topHeadline && (
                <span
                  className={`typo-subhead uppercase mb-90 md:mb-75 block ${styles.topHeadline}`}
                >
                  <Fade>{item.topHeadline}</Fade>
                </span>
              )}
              <h2 className="typo-headlines mb-50 md:mb-180">
                <Fade delay={200}>{item.headline}</Fade>
              </h2>
              <Fade delay={300}>
                <div
                  className="typo-body mb-45 hidden md:block md:mb-60"
                  dangerouslySetInnerHTML={{ __html: item.copy }}
                />
              </Fade>
              <div className="w-full mt-50 md:mt-0 hidden md:block">
                <Fade delay={400}>
                  <Button variant="light" link={item.link} />
                </Fade>
              </div>
            </div>
            <div
              className={`${styles.mediaItem} col-span-6 md:col-span-5 md:col-start-8 md:row-start-2`}
            >
              {(item.image.desktopImage || item.image.mobileImage) ? (
                item.image && <Image image={item.image} />
              ) : (
                item.lottieSelect ? (
                  <LottiePlayer
                    animation={item.lottieSelect}
                    triggerOnce
                  />
                ) : (
                  <video
                    src={item.vimeoVideoUrl}
                    playsInline
                    preload="none"
                    muted
                    loop
                    autoPlay
                  />
                )

              )}
            </div>
            <Fade delay={300}>
              <div
                className="typo-body mb-45 mt-50 md:hidden"
                dangerouslySetInnerHTML={{ __html: item.copy }}
              />
            </Fade>
            <div className="w-full md:hidden">
              <Button variant="light" link={item.link} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TextVideoCombinationModule
