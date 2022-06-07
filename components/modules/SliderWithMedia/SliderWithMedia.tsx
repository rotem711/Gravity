import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Button from 'components/generic/button/button'
import styles from './SliderWithMedia.module.scss'
import ISliderWithMedia from './SliderWithMedia.interface'

const SliderWithMediaModule:FunctionComponent<ISliderWithMedia> = (props) => {
  const { sliderWithMedia } = props
  const [index, setIndex] = useState(0)
  const [copyHeight, setCopyHeight] = useState(0)
  const [mediaHeight, setMediaHeight] = useState(0)
  const copyRefs = useRef([])
  const mediaRefs = useRef([])

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const onClickItem = (e) => {
    setIndex(e.currentTarget.dataset.index)
  }

  // set copyContainer height
  useEffect(() => {
    for (let i = 0; i < copyRefs.current.length; i += 1) {
      if (copyRefs.current[i].clientHeight > mediaHeight) {
        setMediaHeight(copyRefs.current[i].clientHeight)
      }
    }
  })

  // set mediaContainer height
  useEffect(() => {
    for (let i = 0; i < mediaRefs.current.length; i += 1) {
      if (mediaRefs.current[i].clientHeight > mediaHeight) {
        setMediaHeight(mediaRefs.current[i].clientHeight)
      }
    }
  })

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        // if(index < )
        // return index
      }, 1000)
    }
  }, [inView, index])

  return (
    <div
      className={`${styles.root} container pt-35 pb-150`}
      ref={ref}
    >
      <h2 className={`${styles.title} typo-subhead uppercase sm:mb-85`}>{sliderWithMedia.subline}</h2>
      <ul className="">
        {sliderWithMedia.slides.map((item, itemIndex) => (
          <li
            className={`${styles.navItem} ${index == itemIndex ? styles.isActive : ''} typo-big-quotes`}
            onClick={onClickItem}
            data-index={itemIndex}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div
        className={`${styles.copyContainer}`}
        style={{ height: mediaHeight }}
      >
        {sliderWithMedia.slides.map((item, itemIndex) => (
          <div
            className={`${styles.copyItem} ${index == itemIndex ? styles.isActive : ''} typo-body`}
            ref={(element) => { copyRefs.current[itemIndex] = element }}
            role="button"
          >
            {item.copy}
          </div>
        ))}
      </div>
      <div
        className={`${styles.mediaContainer}`}
        style={{ height: mediaHeight }}
      >
        {sliderWithMedia.slides.map((item, itemIndex) => (
          <div
            className={`${styles.mediaItem} ${index == itemIndex ? styles.isActive : ''}`}
            ref={(element) => { mediaRefs.current[itemIndex] = element }}
            role="button"
          >
            {
              item.vimeoVideoUrl
                ? <video src={item.vimeoVideoUrl} playsInline muted loop autoPlay />
                : (
                  <div>image</div>
                  // <Image
                  //   src={item.svg.sourceUrl}
                  //   alt={item.svg.altText}
                  //   width={item.svg.mediaDetails.width}
                  //   height={item.svg.mediaDetails.height}
                  // />
                )
            }
          </div>
        ))}
      </div>
      <div className="w-full mt-50">
        <Button variant="light" link={sliderWithMedia.link} />
      </div>
    </div>
  )
}

export default SliderWithMediaModule
