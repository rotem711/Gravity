import React, { FunctionComponent } from 'react'
import styles from './TextVideoCombination.module.scss'
import ITextVideoCombination from './TextVideoCombination.interface'

const TextVideoCombinationModule:FunctionComponent<ITextVideoCombination> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root} container`}
    >
      ------------------------------------------------
      NOTE !!!! default: image on the right and content on the left !!!!!
      ------------------------------------------------
    </div>
  )
}

export default TextVideoCombinationModule
