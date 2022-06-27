import React, { FunctionComponent } from 'react'
import styles from './TextWithImage.module.scss'
import ITextWithImage from './TextWithImage.interface'

const TextWithImageModule:FunctionComponent<ITextWithImage> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Textwithimage Module
      </div>
    </div>
  )
}

export default TextWithImageModule
