import React, { FunctionComponent } from 'react'
import styles from './SliderWithMedia.module.scss'
import ISliderWithMedia from './SliderWithMedia.interface'

const SliderWithMediaModule:FunctionComponent<ISliderWithMedia> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root} container`}
    >
      Sliderwithmedia Module
    </div>
  )
}

export default SliderWithMediaModule
