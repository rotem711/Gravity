import React, {
  FunctionComponent, useEffect, useRef, useState,
} from 'react'
import Link from 'next/link'
import Image from 'components/generic/image/image'
import Arrow from 'public/icons/icon-arrow.svg'
import styles from './FullscreenLinkWithMedia.module.scss'
import IFullscreenLinkWithMedia from './FullscreenLinkWithMedia.interface'

const FullscreenLinkWithMediaModule: FunctionComponent<
  IFullscreenLinkWithMedia
> = (props) => {
  const { fullscreenLinkWithMedia } = props
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
    <div className={`${styles.root}`} ref={ref}>
      <div className={`${styles.itemWrapper}`}>
        <Link href={fullscreenLinkWithMedia.link.url}>
          <a>
            <div className="py-20 md:py-30 container">
              <p className="typo-headlines mb-30">
                {fullscreenLinkWithMedia.link.title}
              </p>
              <div className={`${styles.iconContainer} `}>
                <Arrow />
              </div>
            </div>
            {fullscreenLinkWithMedia.vimeoVideoUrl && inView ? (
              <video
                src={fullscreenLinkWithMedia.vimeoVideoUrl}
                playsInline
                muted
                loop
                autoPlay
              />
            ) : (
              fullscreenLinkWithMedia.image && (
                <Image image={fullscreenLinkWithMedia.image} />
              )
            )}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default FullscreenLinkWithMediaModule
