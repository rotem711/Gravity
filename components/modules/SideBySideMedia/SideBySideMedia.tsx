import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import Image from 'components/generic/image/image'
import Arrow from 'public/icons/icon-arrow.svg'
import styles from './SideBySideMedia.module.scss'
import ISideBySideMedia from './SideBySideMedia.interface'

const SideBySideMediaModule: FunctionComponent<ISideBySideMedia> = (props) => {
  const { sideBySideMedia } = props

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  return (
    <div className={`${styles.root} flex flex-wrap`}>
      {sideBySideMedia.media.map((item) => (
        <div key={item.headline} className={`${styles.item}`}>
          <div ref={ref} className={`${styles.itemWrapper}`}>
            <Link href={item.link.url}>
              <a>
                <div>
                  <p className="typo-headlines mb-30">{item.headline}</p>
                  <div className={`${styles.iconContainer} `}>
                    <Arrow />
                  </div>
                </div>
                {(item.vimeoVideoUrl && inView) ? (
                  <video
                    src={item.vimeoVideoUrl}
                    playsInline
                    muted
                    loop
                    autoPlay
                  />
                ) : (
                  item.image && (
                    <Image className={styles.image} image={item.image} />
                  )
                )}
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SideBySideMediaModule
