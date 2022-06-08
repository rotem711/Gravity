import React, {
  FunctionComponent, useEffect, useLayoutEffect, useRef, useState,
} from 'react'
import { useInView } from 'react-intersection-observer'
import Button from 'components/generic/button/button'
import Image from 'next/image'
import styles from './SliderWithMedia.module.scss'
import ISliderWithMedia from './SliderWithMedia.interface'

const SliderWithMediaModule:FunctionComponent<ISliderWithMedia> = (props) => {
  const { sliderWithMedia } = props
  const [index, setIndex] = useState(0)
  const [copyHeight, setCopyHeight] = useState(0)
  const [mediaHeight, setMediaHeight] = useState(0)
  const copyRefs = useRef([])
  const mediaRefs = useRef([])

  let timer = null
  const indexRef = useRef(index)
  indexRef.current = index

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const onClickItem = (e) => {
    clearTimeout(timer)
    setIndex(parseInt(e.currentTarget.dataset.index, 10))
  }

  // set copyContainer height
  useLayoutEffect(() => {
    for (let i = 0; i < copyRefs.current.length; i += 1) {
      if (copyRefs.current[i].clientHeight > copyHeight) {
        setCopyHeight(copyRefs.current[i].clientHeight)
      }
    }
  })

  // set mediaContainer height
  useLayoutEffect(() => {
    for (let i = 0; i < mediaRefs.current.length; i += 1) {
      if (mediaRefs.current[i].clientHeight > mediaHeight) {
        setMediaHeight(mediaRefs.current[i].clientHeight)
      }
    }
  })

  useEffect(() => {
    if (inView) {
      timer = setTimeout(() => {
        if (indexRef.current + 1 === mediaRefs.current.length) {
          setIndex(0)
        } else { setIndex(indexRef.current + 1) }
      }, 4000)
      return () => clearTimeout(timer)
    }
    return null
  }, [inView, index])

  return (
    <div
      className={`${styles.root} container pt-35 pb-100 md:pt-70xl:pt-35 xl:pb-150`}
      ref={ref}
    >
      <h2 className={`${styles.title} typo-subhead uppercase sm:mb-85`}>{sliderWithMedia.subline}</h2>
      <div className="xl:default-grid">
        <header className="md:default-grid xl:block xl:col-span-6 md:mb-90">
          <ul className="md:col-span-6 xl:w-full sm:mb-55 md:mb-0 xl:mb-95">
            {sliderWithMedia.slides.map((item, itemIndex) => (
              <li>
                <button
                  className={`${styles.navItem} ${index === itemIndex ? styles.isActive : ''} typo-big-quotes`}
                  onClick={onClickItem}
                  onKeyPress={onClickItem}
                  data-index={itemIndex}
                  type="button"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="md:col-span-5 xl:col-span-3">
            <div
              className={`${styles.copyContainer} md:col-span-6 mb-55`}
              style={{ height: copyHeight }}
            >
              {sliderWithMedia.slides.map((item, itemIndex) => (
                <div
                  className={`${styles.copyItem} ${index === itemIndex ? styles.isActive : ''} typo-body`}
                  ref={(element) => { copyRefs.current[itemIndex] = element }}
                >
                  {item.copy}
                </div>
              ))}
            </div>
            <div className="w-full mt-50 xl:mt-60 sm:hidden md:block">
              <Button variant="light" link={sliderWithMedia.link} />
            </div>
          </div>
        </header>
        <div
          className={`${styles.mediaContainer} xl:col-span-6`}
          style={{ height: mediaHeight }}
        >
          {sliderWithMedia.slides.map((item, itemIndex) => (
            <div
              className={`${styles.mediaItem} ${index === itemIndex ? styles.isActive : ''}`}
              ref={(element) => { mediaRefs.current[itemIndex] = element }}
              role="button"
            >
              {
                item.vimeoVideoUrl
                  ? <video src={item.vimeoVideoUrl} playsInline muted loop autoPlay />
                  : (
                    item.svg && (
                      <Image
                        src={item.svg.sourceUrl}
                        alt={item.svg.altText}
                        width={item.svg.mediaDetails.width}
                        height={item.svg.mediaDetails.height}
                      />
                    )
                  )
              }
            </div>
          ))}
        </div>
        <div className="w-full mt-50 md:hidden">
          <Button variant="light" link={sliderWithMedia.link} />
        </div>
      </div>
    </div>
  )
}

export default SliderWithMediaModule
