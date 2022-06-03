import React, { FunctionComponent } from 'react'
import styles from './MediaWithCopyAndLink.module.scss'
import IMediaWithCopyAndLink from './MediaWithCopyAndLink.interface'

const MediaWithCopyAndLinkModule:FunctionComponent<IMediaWithCopyAndLink> = () => (
  <div
    className={`${styles.root} container`}
  >
    Mediawithcopyandlink Module
  </div>
)

export default MediaWithCopyAndLinkModule
