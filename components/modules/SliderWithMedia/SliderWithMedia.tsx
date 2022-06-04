import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import styles from './SliderWithMedia.module.scss'
import ISliderWithMedia from './SliderWithMedia.interface'

const SliderWithMediaModule:FunctionComponent<ISliderWithMedia> = (props) => {
  const { sliderWithMedia } = props

  return (
    <div
      className={`${styles.root} container pt-35 pb-150`}
    >
      <h2 className={`${styles.title} typo-subhead uppercase sm:mb-85`}>{sliderWithMedia.subline}</h2>
      <ul>
        {sliderWithMedia.slides.map((item) => (
          <li className="typo-big-quotes">{item.title}</li>
        ))}
      </ul>
      <div className="copy-container">
        {sliderWithMedia.slides.map((item) => (
          <div className="typo-body">{item.copy}</div>
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
      <Button variant="light" link={sliderWithMedia.link}/>
    </div>
  )
}

export default SliderWithMediaModule
