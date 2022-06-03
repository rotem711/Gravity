import React, { FunctionComponent } from 'react'
import styles from './HeroV2.module.scss'
import IHeroV2 from './HeroV2.interface'

const HeroV2Module:FunctionComponent<IHeroV2> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Herov2 Module
      </div>
    </div>
  )
}

export default HeroV2Module
