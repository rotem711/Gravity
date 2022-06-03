import React, { FunctionComponent } from 'react'
import styles from './TextVideoCombination.module.scss'
import ITextVideoCombination from './TextVideoCombination.interface'

const TextVideoCombinationModule:FunctionComponent<ITextVideoCombination> = () => (
  <div
    className={`${styles.root} container`}
  >
    ------------------------------------------------
    NOTE !!!! default: image on the right and content on the left !!!!!
    ------------------------------------------------
  </div>
)

export default TextVideoCombinationModule
