import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import styles from './Quote.module.scss'
import IQuote from './Quote.interface'

const QuoteModule:FunctionComponent<IQuote> = ({ quote, author }) => (
  <div
    className={`${styles.root} my-30 md:my-50`}
  >
    <blockquote className="container-insights">
      <p className="typo-headlines">
        “
        {parse(quote)}
        ”
      </p>

      {author && (
        <cite className="block typo-captions-and-buttons mt-30">
          {parse(author)}
        </cite>
      )}
    </blockquote>
  </div>
)

export default QuoteModule
