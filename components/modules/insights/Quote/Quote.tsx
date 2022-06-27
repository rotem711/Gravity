import React, { FunctionComponent } from 'react'
import styles from './Quote.module.scss'
import IQuote from './Quote.interface'

const QuoteModule:FunctionComponent<IQuote> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Quote Module
      </div>
    </div>
  )
}

export default QuoteModule
