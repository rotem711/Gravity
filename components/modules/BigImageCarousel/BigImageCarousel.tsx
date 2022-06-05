import React, { FunctionComponent } from 'react'
import styles from './BigImageCarousel.module.scss'
import IBigImageCarousel from './BigImageCarousel.interface'

const BigImageCarouselModule:FunctionComponent<IBigImageCarousel> = () => (
  <div
    className={`${styles.root} container`}
  >
    Bigimagecarousel Module
  </div>
)

export default BigImageCarouselModule
