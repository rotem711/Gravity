import React, { FunctionComponent } from 'react'
import styles from './HeroWithAnimatedText.module.scss'
import IHeroWithAnimatedText from './HeroWithAnimatedText.interface'

const HeroWithAnimatedTextModule:FunctionComponent<IHeroWithAnimatedText> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Herowithanimatedtext Module
      </div>
    </div>
  )
}

export default HeroWithAnimatedTextModule
