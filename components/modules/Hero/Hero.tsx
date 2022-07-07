import React, { FunctionComponent, useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import useIsMobile from 'utils/hooks'
import Fade from 'components/generic/fade/fade'
import Button from 'components/generic/button/button'
import parse from 'html-react-parser'
import styles from './Hero.module.scss'
import IHero from './Hero.interface'

const HeroModule: FunctionComponent<IHero> = (props) => {
  const { hero } = props
  const [videoLoaded, setVideoLoaded] = useState(false)
  const isMobile = useIsMobile('')
  const isTablet = useIsMobile('lg')

  let videoSrc = hero.vimeoVideoId
  if (isTablet && hero.vimeoVideoIdTablet) {
    videoSrc = hero.vimeoVideoIdTablet
  }
  if (isMobile && hero.vimeoVideoIdMobile) {
    videoSrc = hero.vimeoVideoIdMobile
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      setVideoLoaded(true)
    }, 10)
  }, [])

  return (
    <div
      id="main_hero"
      className={`${styles.root} ${
        videoLoaded ? 'opacity-100' : 'opacity-0'
      }  pb-100`}
    >
      <div className="container flex flex-wrap h-full">
        <div className={`flex flex-col ${styles.upperArea}`}>
          {videoLoaded && (
            <video
              className={`${styles.video}`}
              src={videoSrc}
              playsInline
              muted
              preload="none"
              loop
              autoPlay
            />
          )}
          <h1
            className={`${styles.title} typo-headlines mb-40 col-span-8 xl:col-span-9 md:-mt-50 xl:-mt-0`}
          >
            <Fade delay={0} disable={!videoLoaded}>
              {hero.headline}
            </Fade>
          </h1>

          <div className={`${styles.button} w-full`}>
            <Fade disable={!videoLoaded} delay={50}>
              <Button variant="dark" link={hero.link} />
            </Fade>
          </div>
        </div>
        <div
          className={`${styles.logos} default-grid w-full mt-95 lg:mt-145 items-start`}
        >
          <h2 className="typo-subhead w-full col-span-6 md:col-span-3 lg:col-span-2 uppercase">
            <Fade disable={!videoLoaded} delay={75}>
              {parse(hero.logoRowHeadline)}
            </Fade>
          </h2>
          <div className="col-span-6 md:col-start-5 md:col-span-8 lg:col-start-4 lg:col-span-9 flex flex-wrap md:flex-nowrap gap-y-60 md:gap-50 lg:gap-60 mt-70 md:mt-0">
            {hero.logos.map((item, index) => {
              const child = (
                <span
                  key={item.logo.sourceUrl}
                  className={`${styles.iconContainer} md:flex-shrink-0`}
                >
                  <Fade disable={!videoLoaded} delay={index * 50 + 75}>
                    <Image
                      layout="intrinsic"
                      objectFit="contain"
                      objectPosition="left top"
                      src={item.logo.sourceUrl}
                      width={item.logo.mediaDetails.width}
                      height={item.logo.mediaDetails.height}
                      alt={item.logo.altText}
                      priority
                    />
                  </Fade>
                </span>
              )
              return item.link ? (
                <a
                  key={item.logo.sourceUrl}
                  className={`${styles.iconContainer} md:flex-shrink-0`}
                  rel="noreferrer"
                  href={item.link}
                  target="_blank"
                >
                  {child}
                </a>
              ) : (
                child
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroModule
