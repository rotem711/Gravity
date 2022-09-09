import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Fade from 'components/generic/fade/fade'
import Button from 'components/generic/button/button'
import LottiePlayer from 'components/generic/LottiePlayer/LottiePlayer'
import styles from './TextWithFullscreenVideo.module.scss'
import ITextWithFullscreenVideo from './TextWithFullscreenVideo.interface'

const TextWithFullscreenVideoModule: FunctionComponent<
  ITextWithFullscreenVideo
> = (props) => {
  const { textWithFullscreenVideo } = props
  console.log(textWithFullscreenVideo)
  return (
    <div
      className={`${styles.root} container default-grid mb-170 lg:mb-230 xl:mb-285`}
    >
      <Fade className="col-span-6 ms:col-span-3 md:col-span-6 typo-headlines mb-80">
        <h2
          dangerouslySetInnerHTML={{ __html: textWithFullscreenVideo.headline }}
        />
      </Fade>
      <div className="col-span-6 md:col-span-12 xl:col-span-12 md:mt-75 xl:mt-130 ms:order-3 mb-30 md:mb-0">
        <div className="default-grid">
          <div className="col-span-6 md:col-span-6 xl:col-span-7  mt-55 sm:mt-0 ms:mt-55 md:mt-0">
            <LottiePlayer animation={textWithFullscreenVideo.lottieSelect} />
          </div>
          <div className="col-span-6 md:col-start-8 md:col-span-5 xl:col-start-9 xl:col-span-4 grid gap-x-15 md:gap-x-30 gap-y-25 md:gap-y-60 lg:gap-y-90 grid-cols-2 mt-70 md:mt-0">
            {textWithFullscreenVideo.logos.map((item, index) => {
              const child = (
                <span
                  key={item.logo.sourceUrl}
                  className={`${styles.iconContainer} ${Math.abs(item.logo.mediaDetails.width - item.logo.mediaDetails.height) < 10 ? styles.circleLogo : styles.longLogo} md:flex-shrink-0`}
                >
                  <Fade delay={index * 50 + 75}>
                    <Image
                      objectFit="contain"
                      src={item.logo.sourceUrl}
                      width={item.logo.mediaDetails.width}
                      height={item.logo.mediaDetails.height}
                      alt={item.logo.altText}
                    />
                  </Fade>
                </span>
              )
              return item.link ? (
                <a
                  key={item.logo.sourceUrl}
                  className={`${styles.iconContainer} md:flex-shrink-0`}
                  rel="noreferrer"
                  href={item.link}
                  target="_blank"
                >
                  {child}
                </a>
              ) : (
                child
              )
            })}
          </div>
        </div>
      </div>
      <div className="col-span-6 ms:col-span-3 md:col-span-5 md:col-start-8 xl:col-span-4 xl:col-start-9 ms:order-2">
        <div className="typo-body mb-45 md:mb-60">
          <Fade delay={200}>{textWithFullscreenVideo.copy}</Fade>
        </div>
        <Fade delay={300}>
          <Button variant="light" link={textWithFullscreenVideo.link} />
        </Fade>
      </div>
    </div>
  )
}

export default TextWithFullscreenVideoModule
