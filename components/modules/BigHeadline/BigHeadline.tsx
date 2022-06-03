import React, { FunctionComponent } from 'react'
import styles from './BigHeadline.module.scss'
import IBigHeadline from './BigHeadline.interface'

const BigHeadlineModule:FunctionComponent<IBigHeadline> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Bigheadline Module
      </div>
    </div>
  )
}

export default BigHeadlineModule
