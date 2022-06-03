import React, { FunctionComponent } from 'react'
import styles from './FullscreenLinkWithMedia.module.scss'
import IFullscreenLinkWithMedia from './FullscreenLinkWithMedia.interface'

const FullscreenLinkWithMediaModule:FunctionComponent<IFullscreenLinkWithMedia> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Fullscreenlinkwithmedia Module
      </div>
    </div>
  )
}

export default FullscreenLinkWithMediaModule
