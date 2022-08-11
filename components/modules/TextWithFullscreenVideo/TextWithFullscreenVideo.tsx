import React, { FunctionComponent } from 'react'
import Fade from 'components/generic/fade/fade'
import Button from 'components/generic/button/button'
import LottiePlayer from 'components/generic/LottiePlayer/LottiePlayer'
import styles from './TextWithFullscreenVideo.module.scss'
import ITextWithFullscreenVideo from './TextWithFullscreenVideo.interface'

const TextWithFullscreenVideoModule: FunctionComponent<
  ITextWithFullscreenVideo
> = (props) => {
  const { textWithFullscreenVideo } = props
  return (
    <div className={`${styles.root} container default-grid mb-170 lg:mb-230 xl:mb-285`}>
      <Fade className="col-span-6 ms:col-span-3 md:col-span-6 typo-headlines mb-80">
        <h2
          dangerouslySetInnerHTML={{ __html: textWithFullscreenVideo.headline }}

        />

      </Fade>
      <div className="col-span-6 md:col-span-11 xl:col-span-11 md:mt-75 xl:mt-130 ms:order-3 xl:col-start-2 mb-30 md:mb-0">
        <LottiePlayer
          animation={textWithFullscreenVideo.lottieSelect}
        />
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
