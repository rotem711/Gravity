/* eslint-disable no-nested-ternary */
import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import Fade from 'components/generic/fade/fade'
import Image from 'components/generic/image/image'
import { useInView } from 'react-intersection-observer'
import LottiePlayer from 'components/generic/LottiePlayer/LottiePlayer'
import styles from './TextVideoCombination.module.scss'
import ITextVideoCombination from './TextVideoCombination.interface'

const TextVideoCombinationModule: FunctionComponent<ITextVideoCombination> = (
  props,
) => {
  const { textVideoCombination } = props

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  return (
    <div ref={ref} className={`${styles.root}`}>
      <div className="container">
        {textVideoCombination.items.map((item) => (
          <div key={item.headline} className={`${styles.item} ms:default-grid`}>
            {item.topHeadline && (
              <span
                className={`col-span-full typo-subhead uppercase mb-100 hidden ms:block md:hidden ${styles.topHeadline}`}
              >
                <Fade>{item.topHeadline}</Fade>
              </span>
            )}
            <div className="flex ms:col-span-3 md:col-span-6 xl:col-span-5 flex-col md:row-start-2">
              {item.topHeadline && (
                <span
                  className={`ms:hidden typo-subhead uppercase mb-90 md:mb-75 md:block ${styles.topHeadline}`}
                >
                  <Fade>{item.topHeadline}</Fade>
                </span>
              )}
              <h2 className="typo-headlines mb-50 sd:mb-125 md:mb-180">
                <Fade delay={200}>{item.headline}</Fade>
              </h2>
              <Fade delay={300}>
                <div
                  className={`typo-body mb-45 hidden ms:block md:mb-60 ${styles.desktopCopy}`}
                  dangerouslySetInnerHTML={{ __html: item.copy }}
                />
              </Fade>
              <div className="w-full mt-50 sd:mt-0 hidden ms:block">
                <Fade delay={400}>
                  <Button variant="light" link={item.link} />
                </Fade>
              </div>
            </div>
            <div
              className={`${styles.mediaItem} col-span-6 ms:col-span-3 md:col-span-5 md:col-start-8 md:row-start-2`}
            >
              {item.image.desktopImage || item.image.mobileImage ? (
                item.image && <Image image={item.image} />
              ) : item.lottieSelect ? (
                <LottiePlayer animation={item.lottieSelect} />
              ) : (
                inView && (
                  <video
                    src={item.vimeoVideoUrl}
                    playsInline
                    muted
                    loop
                    autoPlay
                  />
                )
              )}
            </div>
            <Fade delay={300}>
              <div
                className={`typo-body mb-45 mt-50 ms:hidden ${styles.copy}`}
                dangerouslySetInnerHTML={{ __html: item.copy }}
              />
            </Fade>
            <div className="w-full ms:hidden">
              <Button variant="light" link={item.link} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TextVideoCombinationModule
