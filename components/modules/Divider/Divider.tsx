import React, { FunctionComponent } from 'react'
import styles from './Divider.module.scss'
import IDivider from './Divider.interface'

const DividerModule: FunctionComponent<IDivider> = () => (
  <div className={`${styles.root}`} />
)

export default DividerModule
