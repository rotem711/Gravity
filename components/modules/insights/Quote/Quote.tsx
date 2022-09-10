import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import styles from './Quote.module.scss'
import IQuote from './Quote.interface'

const QuoteModule: FunctionComponent<IQuote> = ({ quote, author }) => (
  <div className={`${styles.root} mb-70`}>
    <blockquote className="container-insights">
      <p className="typo-headlines relative">
        <span className={styles.quote_mark}>“</span>
        {parse(quote)}
        <span>”</span>
      </p>
      {author && (
        <cite
          className={`block typo-captions-and-buttons mt-30 ${styles.author}`}
        >
          {parse(author)}
        </cite>
      )}
    </blockquote>
  </div>
)

export default QuoteModule
