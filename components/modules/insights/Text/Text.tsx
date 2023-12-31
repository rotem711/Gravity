import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import styles from './Text.module.scss'
import IText from './Text.interface'

const TextModule: FunctionComponent<IText> = ({ text, subheader }) => (
  <div className={`${styles.root} typo-body mb-70`}>
    <div className="container-insights">
      {subheader && <h2 className={`typo-headlines-late ${styles.subheader}`}>{subheader}</h2>}
    </div>
    <div className="container-insights">{parse(text)}</div>
  </div>
)

export default TextModule
