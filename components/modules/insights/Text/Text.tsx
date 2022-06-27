import React, { FunctionComponent } from 'react'
import styles from './Text.module.scss'
import IText from './Text.interface'

const TextModule:FunctionComponent<IText> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Text Module
      </div>
    </div>
  )
}

export default TextModule
