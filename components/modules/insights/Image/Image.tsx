import React, { FunctionComponent } from 'react'
import styles from './Image.module.scss'
import IImage from './Image.interface'

const ImageModule:FunctionComponent<IImage> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Image Module
      </div>
    </div>
  )
}

export default ImageModule
