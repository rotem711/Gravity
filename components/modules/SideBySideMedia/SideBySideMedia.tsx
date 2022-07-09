import React, {
  FunctionComponent, useEffect, useRef, useState,
} from 'react'
import Link from 'next/link'
import Image from 'components/generic/image/image'
import Arrow from 'public/icons/icon-arrow.svg'
import styles from './SideBySideMedia.module.scss'
import ISideBySideMedia from './SideBySideMedia.interface'

const SideBySideMediaModule: FunctionComponent<ISideBySideMedia> = (props) => {
  const { sideBySideMedia } = props
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  const isInView = () => {
    if (ref.current.getBoundingClientRect().top < window.innerHeight * 2) {
      setInView(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', isInView)
    return () => {
      window.removeEventListener('scroll', isInView)
    }
  }, [])

  return (
    <div ref={ref} className={`${styles.root} flex flex-wrap`}>
      {sideBySideMedia.media.map((item) => (
        <div key={item.headline} className={`${styles.item}`}>
          <div className={`${styles.itemWrapper}`}>
            <Link href={item.link.url}>
              <a>
                <div>
                  <p className="typo-headlines mb-30">{item.headline}</p>
                  <div className={`${styles.iconContainer} `}>
                    <Arrow />
                  </div>
                </div>
                {item.vimeoVideoUrl && inView ? (
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
