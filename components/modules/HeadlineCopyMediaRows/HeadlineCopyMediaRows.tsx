import React, { FunctionComponent } from 'react'
import styles from './HeadlineCopyMediaRows.module.scss'
import IHeadlineCopyMediaRows from './HeadlineCopyMediaRows.interface'

const HeadlineCopyMediaRowsModule:FunctionComponent<IHeadlineCopyMediaRows> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Headlinecopymediarows Module
      </div>
    </div>
  )
}

export default HeadlineCopyMediaRowsModule
