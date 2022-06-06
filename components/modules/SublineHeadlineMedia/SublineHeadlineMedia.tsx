import React, { FunctionComponent } from 'react'
import styles from './SublineHeadlineMedia.module.scss'
import ISublineHeadlineMedia from './SublineHeadlineMedia.interface'

const SublineHeadlineMediaModule:FunctionComponent<ISublineHeadlineMedia> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Sublineheadlinemedia Module
      </div>
    </div>
  )
}

export default SublineHeadlineMediaModule
