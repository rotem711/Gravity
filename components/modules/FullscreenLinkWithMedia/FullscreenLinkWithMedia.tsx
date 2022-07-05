import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'components/generic/image/image'
import Arrow from 'public/icons/icon-arrow.svg'
import styles from './FullscreenLinkWithMedia.module.scss'
import IFullscreenLinkWithMedia from './FullscreenLinkWithMedia.interface'

const FullscreenLinkWithMediaModule:FunctionComponent<IFullscreenLinkWithMedia> = (props) => {
  const { fullscreenLinkWithMedia } = props

  return (
    <div
      className={`${styles.root}`}
    >
      <div className={`${styles.itemWrapper}`}>
        <Link href={fullscreenLinkWithMedia.link.url}>
          <a>
            <div className="py-20 md:py-30 container">
              <p className="typo-headlines mb-30">{fullscreenLinkWithMedia.link.title}</p>
              <div className={`${styles.iconContainer} `}>

                <Arrow />
              </div>
            </div>
            {
            fullscreenLinkWithMedia.vimeoVideoUrl
              ? (
                <video
                  src={fullscreenLinkWithMedia.vimeoVideoUrl}
                  playsInline
                  preload="none"
                  muted
                  loop
                  autoPlay
                />
              )
              : (
                fullscreenLinkWithMedia.image && (
                  <Image image={fullscreenLinkWithMedia.image} />
                )
              )
            }
          </a>
        </Link>
      </div>
    </div>
  )
}

export default FullscreenLinkWithMediaModule
