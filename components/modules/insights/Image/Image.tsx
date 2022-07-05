import React, { FunctionComponent } from 'react'
import ImageComponent from 'components/generic/image/image'
import styles from './Image.module.scss'
import IImage from './Image.interface'

const ImageModule:FunctionComponent<IImage> = ({ image }) => (
  <div
    className={`${styles.root} my-5 md:my-10`}
  >
    <div className="container-insights">
      <ImageComponent image={image} />
    </div>
  </div>
)

export default ImageModule
