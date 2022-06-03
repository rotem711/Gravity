import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import styles from './Hero.module.scss'
import IHero from './Hero.interface'

const HeroModule: FunctionComponent<IHero> = (props) => {
  const { hero } = props
  return (
    <div className={`${styles.root}`}>
      <div className="container pt-180 pb-110">
        <h1 className={`${styles.title} typo-headlines mb-50`}>{hero.headline}</h1>
        <Button variant="dark" link={hero.link} />
        <h2 className="typo-subhead uppercase mt-95">{hero.logoRowHeadline}</h2>
        <ul className={`${styles.logos} default-grid`}>
          {hero.logos.map((item) => (
            <li className="col-span-2" key={item.id}>
              <span className={`${styles.iconContainer} `}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left center"
                  src={item.logo.sourceUrl}
                  alt={item.logo.altText}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HeroModule
