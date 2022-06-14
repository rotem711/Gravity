import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import styles from './TextWithFullscreenVideo.module.scss'
import ITextWithFullscreenVideo from './TextWithFullscreenVideo.interface'

const TextWithFullscreenVideoModule:FunctionComponent<ITextWithFullscreenVideo> = (props) => {
  const { textWithFullscreenVideo } = props

  return (
    <div
      className={`${styles.root} container default-grid pt-30 pb-150 md:pb-200`}
    >
      <h2 className="col-span-6 typo-headlines mb-80">{textWithFullscreenVideo.headline}</h2>
      <div className="col-span-6 md:col-span-12 mb-60 md:mb-0 md:mt-75 xl:mt-130 md:order-3 default-grid">
        {
          textWithFullscreenVideo.vimeoVideoUrl && (
            <video className="col-span-6 md:col-span-8 xl:col-span-7 xl:col-start-2 mb-75 md:mb-0" src={textWithFullscreenVideo.vimeoVideoUrl} playsInline muted loop autoPlay />
          )
        }
        <span className={`${styles.iconContainer} col-span-2 pr-10 md:pr-50`}>
          <Image
            layout="responsive"
            src={textWithFullscreenVideo.logo.sourceUrl}
            alt={textWithFullscreenVideo.logo.altText}
            width={textWithFullscreenVideo.logo.mediaDetails.width}
            height={textWithFullscreenVideo.logo.mediaDetails.height}
          />
        </span>
      </div>
      <div className="col-span-6 md:col-span-5 md:col-start-8 xl:col-span-4 xl:col-start-9 md:order-2">
        <p className="typo-body mb-45 md:mb-60">{textWithFullscreenVideo.copy}</p>
        <Button variant="light" link={textWithFullscreenVideo.link} />
      </div>
    </div>
  )
}

export default TextWithFullscreenVideoModule
