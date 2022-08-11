import React, {
  FunctionComponent, useEffect, useRef, useState,
} from 'react'
import useIsMobile from 'utils/hooks'
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
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)
  const isMobile = useIsMobile()

  const isInView = () => {
    if (ref.current.getBoundingClientRect().top < window.innerHeight * 2) {
      setInView(true)
    }
  }

  const onMouseEnter = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.play()
    }
  }

  const onMouseLeave = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.pause()
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
      <div
        className={`${styles.itemWrapper}`}
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
      >
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
                autoPlay={isMobile}
                ref={videoRef}
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
