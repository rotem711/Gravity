import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import Fade from 'components/generic/fade/fade'
import styles from './HeadlineSeparator.module.scss'
import IHeadlineSeparator from './HeadlineSeparator.interface'

const HeadlineSeparatorModule:FunctionComponent<IHeadlineSeparator> = (props) => {
  const { headlineSeparator, disableContainer = false } = props
  return (
    <div
      className={`${styles.root} pt-100 pb-100`}
      style={{ backgroundColor: headlineSeparator.backgroundColor }}
    >
      <div className={`${disableContainer ? '' : 'container'}`}>
        <div className="typo-cta-text mb-50"><Fade>{headlineSeparator.headline}</Fade></div>
        <Fade delay={200}><Button variant="dark" link={headlineSeparator.link} /></Fade>
      </div>
    </div>
  )
}

export default HeadlineSeparatorModule
