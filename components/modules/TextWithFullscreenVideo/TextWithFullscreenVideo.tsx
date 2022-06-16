import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Fade from 'components/generic/fade/fade'
import Button from 'components/generic/button/button'
import styles from './TextWithFullscreenVideo.module.scss'
import ITextWithFullscreenVideo from './TextWithFullscreenVideo.interface'

const TextWithFullscreenVideoModule: FunctionComponent<
  ITextWithFullscreenVideo
> = (props) => {
  const { textWithFullscreenVideo } = props

  return (
    <div className={`${styles.root} container default-grid pb-150 md:pb-200`}>
      <Fade className="col-span-6 typo-headlines mb-80">
        <h2
          dangerouslySetInnerHTML={{ __html: textWithFullscreenVideo.headline }}
        />
      </Fade>
      <div className="col-span-6 md:col-span-12 mb-60 md:mb-0 md:mt-75 xl:mt-130 md:order-3 default-grid">
        {textWithFullscreenVideo.vimeoVideoUrl && (
          <video
            className="col-span-6 md:col-span-8 xl:col-span-7 xl:col-start-2 mb-75 md:mb-0"
            src={textWithFullscreenVideo.vimeoVideoUrl}
            playsInline
            muted
            loop
            autoPlay
          />
        )}
        {false && (
          <span className={`${styles.iconContainer} col-span-2 pr-10 md:pr-50`}>
            <Image
              layout="responsive"
              src={textWithFullscreenVideo.logo.sourceUrl}
              alt={textWithFullscreenVideo.logo.altText}
              width={textWithFullscreenVideo.logo.mediaDetails.width}
              height={textWithFullscreenVideo.logo.mediaDetails.height}
            />
          </span>
        )}
      </div>
      <div className="col-span-6 md:col-span-5 md:col-start-8 xl:col-span-4 xl:col-start-9 md:order-2">
        <p className="typo-body mb-45 md:mb-60">
          <Fade delay={200}>{textWithFullscreenVideo.copy}</Fade>
        </p>
        <Fade delay={300}>
          <Button variant="light" link={textWithFullscreenVideo.link} />
        </Fade>
      </div>
    </div>
  )
}

export default TextWithFullscreenVideoModule
