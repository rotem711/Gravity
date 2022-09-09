import React, { FunctionComponent } from 'react'
import useIsMobile from 'utils/hooks'
import Fade from 'components/generic/fade/fade'
import Button from 'components/generic/button/button'
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
      <div className="container flex flex-wrap h-full">
        <div className={`flex flex-col ${styles.upperArea}`}>
          <h1
            className={`${styles.title} typo-headlines mb-40 col-span-8 xl:col-span-9 md:-mt-50`}
          >
            <Fade delay={0}>{hero.headline}</Fade>
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
            <Fade delay={50}>
              <Button variant="dark" link={hero.link} />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroModule
