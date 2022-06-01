import React, { FunctionComponent } from 'react'
import styles from './HeadlineSeparator.module.scss'
import IHeadlineSeparator from './HeadlineSeparator.interface'

const HeadlineSeparatorModule:FunctionComponent<IHeadlineSeparator> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root} container`}
    >
      Headlineseparator Module
    </div>
  )
}

export default HeadlineSeparatorModule
