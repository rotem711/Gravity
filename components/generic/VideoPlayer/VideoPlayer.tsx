import React, { FunctionComponent } from 'react'
import styles from './VideoPlayer.module.scss'
import IVideoPlayer from './VideoPlayer.interface'

const VideoPlayer:FunctionComponent<IVideoPlayer> = () => (
  <div
    className={`${styles.root}`}
  />
)

export default VideoPlayer
