import React, { FunctionComponent } from 'react'
import styles from './CountingNumbers.module.scss'
import ICountingNumbers from './CountingNumbers.interface'

const CountingNumbersModule:FunctionComponent<ICountingNumbers> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root} container`}
    >
      Countingnumbers Module
    </div>
  )
}

export default CountingNumbersModule
