import React, { FunctionComponent } from 'react'
import styles from './TextWithFullscreenVideo.module.scss'
import ITextWithFullscreenVideo from './TextWithFullscreenVideo.interface'

const TextWithFullscreenVideoModule:FunctionComponent<ITextWithFullscreenVideo> = () => (
  <div
    className={`${styles.root} container`}
  >
    Textwithfullscreenvideo Module
  </div>
)

export default TextWithFullscreenVideoModule
