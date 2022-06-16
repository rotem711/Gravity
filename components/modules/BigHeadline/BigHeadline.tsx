import React, { FunctionComponent } from 'react'
import Fade from 'components/generic/fade/fade'
import styles from './BigHeadline.module.scss'
import IBigHeadline from './BigHeadline.interface'

const BigHeadlineModule: FunctionComponent<IBigHeadline> = (props) => {
  const {
    bigHeadline: { headline },
  } = props
  return (
    <div className={`${styles.root}`}>
      <div className="container">
        <div className="default-grid">
          <h2 className="col-span-6 md:col-span-12 xl:col-span-7 typo-headlines">
            <Fade>{headline}</Fade>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default BigHeadlineModule
