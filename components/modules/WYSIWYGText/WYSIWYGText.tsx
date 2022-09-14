import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import styles from './WYSIWYGText.module.scss'
import IWYSIWYGText from './WYSIWYGText.interface'

const WYSIWYGTextModule: FunctionComponent<IWYSIWYGText> = (props) => {
  const { wysiwyg } = props

  return (
    <div className={`${styles.root}`}>
      <div className="container-insights">{parse(wysiwyg)}</div>
    </div>
  )
}

export default WYSIWYGTextModule
