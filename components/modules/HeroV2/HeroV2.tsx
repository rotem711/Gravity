import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import Fade from 'components/generic/fade/fade'
import ImageComponent from 'components/generic/image/image'
import styles from './HeroV2.module.scss'
import IHeroV2 from './HeroV2.interface'

const HeroV2Module: FunctionComponent<IHeroV2> = (props) => {
  const { heroV2 } = props
  return (
    <div className={`${styles.root}`}>
      <div className="container default-grid pt-240 pb-50 md:pt-200 xl:pt-320">
        {heroV2.subline && (
          <span className="typo-subhead uppercase col-span-3 md:col-span-12 mb-30 md:mb-45 xl:mb-55 z-10 relative text-white">
            <Fade delay={300}>{heroV2.subline}</Fade>
          </span>
        )}
        <h1 className="z-10 relative col-span-6 md:col-span-7 xl:-col-span-8 flex flex-col">
          <Fade delay={400}><h1 className="typo-headlines text-white">{heroV2.headline}</h1></Fade>
          {heroV2.link && (
            <Fade className="mt-40 xl:mt-60" delay={500}>
              <Button disableHover variant="dark" link={heroV2.link} />
            </Fade>
          )}
        </h1>

        <div className={`${styles.mediaContainer} z-0`}>
          <Fade className="h-full">
            {heroV2.vimeoVideoUrl ? (
              <video
                src={heroV2.vimeoVideoUrl}
                playsInline
                muted
                loop
                autoPlay
              />
            ) : (
              heroV2.image && <ImageComponent image={heroV2.image} />
            )}
          </Fade>
        </div>
        <div className={`${styles.assetContainer} z-10 hidden md:block`}>
          <Fade delay={150}>
            {heroV2.svgLayer && (
              <Image
                width={heroV2.svgLayer.mediaDetails.width}
                height={heroV2.svgLayer.mediaDetails.height}
                layout="responsive"
                src={heroV2.svgLayer.sourceUrl}
                loading="eager"
              />
            )}
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default HeroV2Module
