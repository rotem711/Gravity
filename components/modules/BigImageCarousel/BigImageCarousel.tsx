import React, { FunctionComponent } from 'react'
import { Autoplay } from 'swiper'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
import Fade from 'components/generic/fade/fade'
import Button from 'components/generic/button/button'
import Image from 'components/generic/image/image'
import styles from './BigImageCarousel.module.scss'
import IBigImageCarousel from './BigImageCarousel.interface'

const BigImageCarouselModule: FunctionComponent<IBigImageCarousel> = (
  props,
) => {
  const { bigImageCarousel } = props

  return (
    <div className={`${styles.root} container pt-35 pb-100`}>
      <div className="default-grid">
        <h2 className="typo-headlines col-span-6 xl:col-span-5 mb-50 md:mb-60">
          <Fade>{bigImageCarousel.headline}</Fade>
        </h2>
        <div
          className={`${styles.mediaContainer} mb-40 col-span-6 md:col-span-12`}
        >
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className={`${styles.swiper}`}
            loop
            allowTouchMove={false}
            touchRatio={0}
            modules={[Autoplay]}
            preventClicks
            spaceBetween={0}
          >
            {bigImageCarousel.images.map((item) => (
              <SwiperSlide className={`${styles.swiperSlide}`}>
                <Image image={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
          <span className={`${styles.corners}`} aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
        <div
          className={`${styles.copyContainer} col-span-6 md:col-start-8 md:col-span-5 xl:col-start-9 xl:col-span-4 md:mb-60`}
        >
          <p className="typo-body mb-45 xl:mb-60">
            <Fade delay={200}>{bigImageCarousel.copy}</Fade>
          </p>
          <Fade delay={300}>
            <Button variant="light" link={bigImageCarousel.link} />
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default BigImageCarouselModule
