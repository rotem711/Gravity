import React, { FunctionComponent } from 'react'
import styles from './Divider.module.scss'
import IDivider from './Divider.interface'

const DividerModule: FunctionComponent<IDivider> = () => (
  <div className={`${styles.root}`}>
    <div className="container">Divider Module</div>
  </div>
)

export default DividerModule
