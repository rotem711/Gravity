import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import styles from './Hero.module.scss'
import IHero from './Hero.interface'

const HeroModule: FunctionComponent<IHero> = (props) => {
  const { hero } = props
  return (
    <div className={`${styles.root}`}>
      <div className="container pt-130 pb-75 md:pt-180 md:pb-110 flex flex-wrap">
        <h1 className={`${styles.title} typo-headlines mb-60 md:mt-125 col-span-8`}>{hero.headline}</h1>
        <video className={`${styles.video} mb-55 md:mb-0`} src={hero.vimeoVideoId} playsInline muted loop autoPlay />
        <div className={`${styles.button} w-full`}>
          <Button variant="dark" link={hero.link} />
        </div>
        <ul className={`${styles.logos} default-grid w-full mt-95`}>
          <h2 className="typo-subhead w-full col-span-6 md:col-span-3 xl:col-span-2 mb-45 md:mb-25 xl:mb-45 uppercase">{hero.logoRowHeadline}</h2>
          {hero.logos.map((item) => (
            <li className="col-span-3 md:col-span-2 mt-25 mb-25 md:mt-0" key={item.id}>
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
