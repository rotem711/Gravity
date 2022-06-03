import React, { FunctionComponent } from 'react'
import styles from './CountingNumbers.module.scss'
import ICountingNumbers from './CountingNumbers.interface'

const CountingNumbersModule:FunctionComponent<ICountingNumbers> = () => (
  <div
    className={`${styles.root} container`}
  >
    Countingnumbers Module
  </div>
)

export default CountingNumbersModule
