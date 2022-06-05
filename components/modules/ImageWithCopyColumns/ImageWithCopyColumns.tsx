import React, { FunctionComponent } from 'react'
import styles from './ImageWithCopyColumns.module.scss'
import IImageWithCopyColumns from './ImageWithCopyColumns.interface'

const ImageWithCopyColumnsModule:FunctionComponent<IImageWithCopyColumns> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Imagewithcopycolumns Module
      </div>
    </div>
  )
}

export default ImageWithCopyColumnsModule
