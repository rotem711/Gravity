import React, { FunctionComponent } from 'react'
import styles from './FullscreenLinkWithMedia.module.scss'
import IFullscreenLinkWithMedia from './FullscreenLinkWithMedia.interface'

const FullscreenLinkWithMediaModule:FunctionComponent<IFullscreenLinkWithMedia> = () => (
  <div
    className={`${styles.root}`}
  >
    <div className="container">
      Fullscreenlinkwithmedia Module
    </div>
  </div>
)

export default FullscreenLinkWithMediaModule
