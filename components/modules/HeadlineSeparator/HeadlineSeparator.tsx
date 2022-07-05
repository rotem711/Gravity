/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/no-unstable-nested-components */
import React, { FunctionComponent, useState } from 'react'
import Button from 'components/generic/button/button'
import Fade from 'components/generic/fade/fade'
import Arrow from 'public/icons/icon-arrow.svg'
import { validateEmail } from 'utils/hooks'
import styles from './HeadlineSeparator.module.scss'
import IHeadlineSeparator from './HeadlineSeparator.interface'

const HeadlineSeparatorModule: FunctionComponent<IHeadlineSeparator> = (
  props,
) => {
  const { headlineSeparator, disableContainer = false } = props
  const [activate, setActivateInput] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleClick = () => setActivateInput(true)

  const submit = () => {
    if (email && validateEmail(email)) {
      setActivateInput(false)
      setSubmitted(true)
    }
  }

  const EnableSubscribe = (
    <div className={styles.enableSubscribe}>
      <Button disableHover variant="dark" onClick={handleClick}>
        <span className={`${activate && !submitted ? styles.hide : ''}`}>
          {submitted ? 'Success!' : 'Subscribe'}
        </span>

        <div
          className={`${styles.input} ${
            activate && !submitted ? styles.show : ''
          }`}
        >
          {activate && (
            <input
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              type="email"
              placeholder="Enter Email"
            />
          )}
          <button
            onClick={submit}
            type="submit"
            className={`${styles.arrow} ${
              email && validateEmail(email) ? styles.active : ''
            }`}
          >
            <Arrow />
          </button>
        </div>
      </Button>
    </div>
  )

  return (
    <div
      className={`${styles.root} pt-100 pb-100`}
      style={{ backgroundColor: headlineSeparator.backgroundColor }}
    >
      <div className={`${disableContainer ? '' : 'container'}`}>
        <div className="typo-cta-text mb-50">
          <Fade>{headlineSeparator.headline}</Fade>
        </div>
        {headlineSeparator.enableSubscribe ? (
          EnableSubscribe
        ) : (
          <Fade delay={200}>
            <Button variant="dark" link={headlineSeparator.link} />
          </Fade>
        )}
      </div>
    </div>
  )
}

export default HeadlineSeparatorModule
