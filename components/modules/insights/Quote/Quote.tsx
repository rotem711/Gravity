import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'
import styles from './Quote.module.scss'
import IQuote from './Quote.interface'

const QuoteModule: FunctionComponent<IQuote> = ({
  quote,
  author,
  anchorLink,
}) => (
  <div className={`${styles.root} mb-70`}>
    <blockquote className="container-insights">
      {console.log(anchorLink, author)}
      {anchorLink && (
        <Link href={anchorLink}>
          <a className="typo-headlines relative">
            <span className={styles.quote_mark}>“</span>
            {parse(quote)}
            <span>”</span>
          </a>
        </Link>
      )}
      {!anchorLink && (
        <p className="typo-headlines relative">
          <span className={styles.quote_mark}>“</span>
          {parse(quote)}
          <span>”</span>
        </p>
      )}
      {author && (
        <cite className="block typo-captions-and-buttons mt-30">
          {parse(author)}
        </cite>
      )}
    </blockquote>
  </div>
)

export default QuoteModule
