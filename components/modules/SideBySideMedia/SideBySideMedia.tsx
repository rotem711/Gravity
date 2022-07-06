import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'components/generic/image/image'
import Arrow from 'public/icons/icon-arrow.svg'
import styles from './SideBySideMedia.module.scss'
import ISideBySideMedia from './SideBySideMedia.interface'

const SideBySideMediaModule:FunctionComponent<ISideBySideMedia> = (props) => {
  const { sideBySideMedia } = props

  return (
    <div
      className={`${styles.root} flex flex-wrap`}
    >
      {sideBySideMedia.media.map((item) => (
        <div
          key={item.headline}
          className={`${styles.item}`}
        >
          <div className={`${styles.itemWrapper}`}>
            <Link href={item.link.url}>
              <a>
                <div>
                  <p className="typo-headlines mb-30">{item.headline}</p>
                  <div className={`${styles.iconContainer} `}>
                    <Arrow />
                  </div>
                </div>
                {
                item.vimeoVideoUrl
                  ? <video preload="none" src={item.vimeoVideoUrl} playsInline muted loop autoPlay />
                  : (
                    item.image && (
                      <Image className={styles.image} image={item.image} />
                    )
                  )
                }
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SideBySideMediaModule
