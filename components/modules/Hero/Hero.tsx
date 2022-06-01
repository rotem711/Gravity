import React, { FunctionComponent } from 'react'
import styles from './Hero.module.scss'
import IHero from './Hero.interface'

const HeroModule: FunctionComponent<IHero> = (props) => {
  console.log(props)
  return <div className={`${styles.root} container`}>Hero Module</div>
}

export default HeroModule
