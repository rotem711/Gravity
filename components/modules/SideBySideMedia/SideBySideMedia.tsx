import React, { FunctionComponent } from 'react'
import styles from './SideBySideMedia.module.scss'
import ISideBySideMedia from './SideBySideMedia.interface'

const SideBySideMediaModule:FunctionComponent<ISideBySideMedia> = () => (
  <div
    className={`${styles.root} container`}
  >
    Sidebysidemedia Module
  </div>
)

export default SideBySideMediaModule
