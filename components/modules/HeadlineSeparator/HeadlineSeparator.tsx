import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import styles from './HeadlineSeparator.module.scss'
import IHeadlineSeparator from './HeadlineSeparator.interface'

const HeadlineSeparatorModule:FunctionComponent<IHeadlineSeparator> = (props) => {
  const { headlineSeparator } = props

  return (
    <div
      className={`${styles.root} container pt-100 pb-100`}
    >
      <p className="typo-cta-text mb-50">{headlineSeparator.headline}</p>
      <Button variant="dark" link={headlineSeparator.link} />
    </div>
  )
}

export default HeadlineSeparatorModule
