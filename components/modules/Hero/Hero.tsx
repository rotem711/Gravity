import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import useIsMobile from 'utils/hooks'
import Fade from 'components/generic/fade/fade'
import Button from 'components/generic/button/button'
import parse from 'html-react-parser'
import styles from './Hero.module.scss'
import IHero from './Hero.interface'

const HeroModule: FunctionComponent<IHero> = (props) => {
  const { hero } = props
  const isMobile = useIsMobile('')
  const isTablet = useIsMobile('lg')

  let videoSrc = hero.vimeoVideoId
  if (isTablet && hero.vimeoVideoIdTablet) {
    videoSrc = hero.vimeoVideoIdTablet
  }
  if (isMobile && hero.vimeoVideoIdMobile) {
    videoSrc = hero.vimeoVideoIdMobile
  }
  return (
    <div id="main_hero" className={`${styles.root}`}>
      <div className="container pt-130 pb-100 md:pt-100 flex flex-wrap">
        <h1
          className={`${styles.title} typo-headlines mb-40 col-span-8 xl:col-span-9 md:-mt-50 xl:-mt-0`}
        >
          <Fade>{hero.headline}</Fade>
        </h1>
        <video
          className={`${styles.video}`}
          src={videoSrc}
          playsInline
          muted
          loop
          autoPlay
        />
        <div className={`${styles.button} w-full`}>
          <Fade delay={200}>
            <Button variant="dark" link={hero.link} />
          </Fade>
        </div>
        <div
          className={`${styles.logos} default-grid w-full mt-95 lg:mt-145 items-start`}
        >
          <h2 className="typo-subhead w-full col-span-6 md:col-span-3 lg:col-span-2 uppercase">
            <Fade delay={300}>{parse(hero.logoRowHeadline)}</Fade>
          </h2>
          <div className="col-span-6 md:col-start-5 md:col-span-8 lg:col-start-4 lg:col-span-9 flex flex-wrap md:flex-nowrap gap-y-60 md:gap-50 lg:gap-60 mt-70 md:mt-0">
            {hero.logos.map((item, index) => (
              <span
                key={item.logo.sourceUrl}
                className={`${styles.iconContainer} md:flex-shrink-0`}
              >
                <Fade delay={index * 150 + 500}>
                  <Image
                    layout="intrinsic"
                    objectFit="contain"
                    objectPosition="left top"
                    src={item.logo.sourceUrl}
                    width={item.logo.mediaDetails.width}
                    height={item.logo.mediaDetails.height}
                    alt={item.logo.altText}
                    loading="eager"
                  />
                </Fade>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroModule
