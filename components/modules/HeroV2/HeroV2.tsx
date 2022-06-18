import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Fade from 'components/generic/fade/fade'
import ImageComponent from 'components/generic/image/image'
import styles from './HeroV2.module.scss'
import IHeroV2 from './HeroV2.interface'

const HeroV2Module: FunctionComponent<IHeroV2> = (props) => {
  const { heroV2 } = props

  return (
    <div className={`${styles.root}`}>
      <div className="container default-grid pt-240 pb-95 md:pt-200 md:pb-55 xl:pt-320 xl:pb-40">
        {heroV2.subline && (
          <span className="typo-subhead uppercase col-span-3 md:col-span-12 mb-30 md:mb-45 xl:mb-55 z-10 relative text-white">
            <Fade>{heroV2.subline}</Fade>
          </span>
        )}
        <h1 className="typo-headlines z-10 relative text-white col-span-6 md:col-span-12 xl:col-span-8">
          <Fade delay={150}>{heroV2.headline}</Fade>
        </h1>
        <div className={`${styles.mediaContainer} z-0`}>
          {heroV2.vimeoVideoUrl ? (
            <video src={heroV2.vimeoVideoUrl} playsInline muted loop autoPlay />
          ) : (
            heroV2.image && <ImageComponent image={heroV2.image} />
          )}
        </div>
        <div className={`${styles.assetContainer} z-10 hidden xl:block`}>
          {heroV2.svgLayer && (
            <Image
              width={heroV2.svgLayer.mediaDetails.width}
              height={heroV2.svgLayer.mediaDetails.height}
              layout="responsive"
              src={heroV2.svgLayer.sourceUrl}
              loading="eager"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroV2Module
