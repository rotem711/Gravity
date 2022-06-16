import React, { FunctionComponent } from 'react'
import styles from './TextVideoCombinationV2.module.scss'
import ITextVideoCombinationV2 from './TextVideoCombinationV2.interface'

const TextVideoCombinationV2Module:FunctionComponent<ITextVideoCombinationV2> = (props) => {
  console.log('XXX', props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Textvideocombinationv2 Module
      </div>
    </div>
  )
}

export default TextVideoCombinationV2Module
