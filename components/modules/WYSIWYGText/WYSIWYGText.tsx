import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import styles from './WYSIWYGText.module.scss'
import IWYSIWYGText from './WYSIWYGText.interface'

const WYSIWYGTextModule: FunctionComponent<IWYSIWYGText> = (props) => {
  const { wysiwyg } = props
  console.log(wysiwyg)

  return (
    <div className={`${styles.root} typo-body mb-70`}>
      <div className="container-insights">{parse(wysiwyg)}</div>
    </div>
  )
}

export default WYSIWYGTextModule
