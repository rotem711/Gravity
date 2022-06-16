import React, {
  FunctionComponent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { useInView } from 'react-intersection-observer'
import Fade from 'components/generic/fade/fade'
import Button from 'components/generic/button/button'
import Image from 'components/generic/image/image'
import styles from './SliderWithMedia.module.scss'
import ISliderWithMedia from './SliderWithMedia.interface'

const SliderWithMediaModule: FunctionComponent<ISliderWithMedia> = (props) => {
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

  const recalculate = () => {
    for (let i = 0; i < copyRefs.current.length; i += 1) {
      if (copyRefs.current[i].clientHeight * 0.75 > copyHeight) {
        setCopyHeight(copyRefs.current[i].clientHeight * 0.75)
      }
    }
    for (let i = 0; i < mediaRefs.current.length; i += 1) {
      if (mediaRefs.current[i].clientHeight > mediaHeight) {
        setMediaHeight(mediaRefs.current[i].clientHeight)
      }
    }
  }

  // set copyContainer height
  useLayoutEffect(() => {
    recalculate()
  })

  useEffect(() => {
    window.addEventListener('orientationchange', recalculate)
    if (inView) {
      timer = setTimeout(() => {
        if (indexRef.current + 1 === mediaRefs.current.length) {
          setIndex(0)
        } else {
          setIndex(indexRef.current + 1)
        }
      }, 4000)
      return () => clearTimeout(timer)
    }
    return () => {
      window.removeEventListener('orientationchange', recalculate)
    }
  }, [inView, index])

  return (
    <div
      className={`${styles.root} container pt-35 md:pb-0 md:pt-70 lg:pt-35 lg:pb-150`}
      ref={ref}
    >
      <h2 className={`${styles.title} typo-subhead uppercase mb-85 md:mb-100`}>
        <Fade>{sliderWithMedia.subline}</Fade>
      </h2>
      <div className="md:default-grid">
        <header className="md:default-grid md:col-span-12 lg:col-span-4 md:mb-90 lg:mb-0">
          <ul className="md:col-span-6 mb-50 md:mb-0 lg:col-span-12 lg:mb-95">
            {sliderWithMedia.slides.map((item, itemIndex) => (
              <li>
                <button
                  className={`${styles.navItem} ${
                    index === itemIndex ? styles.isActive : ''
                  } typo-big-quotes`}
                  onClick={onClickItem}
                  onKeyPress={onClickItem}
                  data-index={itemIndex}
                  type="button"
                >
                  <Fade delay={itemIndex * 150}>{item.title}</Fade>
                </button>
              </li>
            ))}
          </ul>
          <div className="md:col-span-6 lg:col-span-12">
            <div
              className={`${styles.copyContainer} md:col-span-6 mb-55`}
              style={{ height: copyHeight }}
            >
              {sliderWithMedia.slides.map((item, itemIndex) => (
                <div
                  className={`${styles.copyItem} ${
                    index === itemIndex ? styles.isActive : ''
                  } typo-body`}
                  ref={(element) => {
                    copyRefs.current[itemIndex] = element
                  }}
                >
                  <Fade delay={itemIndex * 150}>{item.copy}</Fade>
                </div>
              ))}
            </div>
            <div className="w-full mt-50 md:mt-45 lg:mt-60 hidden md:block">
              <Fade>
                <Button variant="light" link={sliderWithMedia.link} />
              </Fade>
            </div>
          </div>
        </header>
        <div
          className={`${styles.mediaContainer} md:col-span-12 lg:col-start-7 lg:col-span-6 default-grid`}
        >
          {sliderWithMedia.slides.map((item, itemIndex) => (
            <div
              className={`${styles.mediaItem} col-span-full ${
                index === itemIndex ? styles.isActive : ''
              }`}
              ref={(element) => {
                mediaRefs.current[itemIndex] = element
              }}
              role="button"
            >
              {item.vimeoVideoUrl && (
                <video
                  className={`${styles.video}`}
                  src={item.vimeoVideoUrl}
                  playsInline
                  muted
                  loop
                  autoPlay
                />
              )}
              {item.image && (
                <div className={`${styles.image}`}>
                  <Image image={item.image} />
                </div>
              )}
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
