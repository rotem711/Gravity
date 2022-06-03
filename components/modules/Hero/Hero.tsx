import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import styles from './Hero.module.scss'
import IHero from './Hero.interface'

const HeroModule: FunctionComponent<IHero> = (props) => {
  const { hero } = props
  return (
    <div className={`${styles.root}`}>
      <div className="container">
        <Button variant="dark" link={hero.link} />
      </div>
    </div>
  )
}

export default HeroModule
