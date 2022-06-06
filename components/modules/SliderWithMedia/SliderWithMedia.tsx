import React, { FunctionComponent, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Button from 'components/generic/button/button'
import styles from './SliderWithMedia.module.scss'
import ISliderWithMedia from './SliderWithMedia.interface'

const SliderWithMediaModule:FunctionComponent<ISliderWithMedia> = (props) => {
  const { sliderWithMedia } = props
  const [index, setIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const onClickItem = (e) => {
    setIndex(e.currentTarget.dataset.index)
  }

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
      <ul>
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
      <div className="copy-container">
        {sliderWithMedia.slides.map((item) => (
          <button type="button" className={` ${index === 0 ? 'is-active' : ''} typo-body`} onClick={onClickItem}>{item.copy}</button>
        ))}
      </div>
      <div className="media-container">
        {sliderWithMedia.slides.map((item) => (
          <div>
            {item.vimeoVideoUrl}
            {/* {item.svg.map((item) => (
              <div>
                {item.}
              </div>
            ))} */}
          </div>
        ))}
      </div>
      <Button variant="light" link={sliderWithMedia.link} />
    </div>
  )
}

export default SliderWithMediaModule
