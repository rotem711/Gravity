import React, { FunctionComponent } from 'react'
import styles from './MediaWithCopyAndLink.module.scss'
import IMediaWithCopyAndLink from './MediaWithCopyAndLink.interface'

const MediaWithCopyAndLinkModule:FunctionComponent<IMediaWithCopyAndLink> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root} container`}
    >
      Mediawithcopyandlink Module
    </div>
  )
}

export default MediaWithCopyAndLinkModule
