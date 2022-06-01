import React, { FunctionComponent } from 'react'
import styles from './BigQuote.module.scss'
import IBigQuote from './BigQuote.interface'

const BigQuoteModule:FunctionComponent<IBigQuote> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root} container`}
    >
      Bigquote Module
    </div>
  )
}

export default BigQuoteModule
