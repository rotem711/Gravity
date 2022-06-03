import React, { FunctionComponent } from 'react'
import styles from './BigQuote.module.scss'
import IBigQuote from './BigQuote.interface'

const BigQuoteModule:FunctionComponent<IBigQuote> = (props) => {
  const { bigQuote } = props

  return (
    <div
      className={`${styles.root}`}
      style={{backgroundColor: bigQuote.backgroundColor}}
    >
      <div className="container pt-25 pb-155 xl:pt-35 xl:pb-230">
        <div className="xl:default-grid">
          <h2 className={`${styles.title} typo-subhead uppercase sm:mb-85`}>{bigQuote.leftHeadline}</h2>
          <blockquote className={`${styles.quote} typo-big-quotes`}>
            {bigQuote.quote}
            <cite className={`${styles.cite} typo-captions-and-buttons mt-35 xl:mt-45`}>{bigQuote.subline}</cite>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default BigQuoteModule
