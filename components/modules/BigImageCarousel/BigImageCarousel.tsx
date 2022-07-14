import React, { FunctionComponent } from 'react'
import { Autoplay } from 'swiper'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
import { useInView } from 'react-intersection-observer'
import Fade from 'components/generic/fade/fade'
import Button from 'components/generic/button/button'
import useIsMobile from 'utils/hooks'
import Image from 'components/generic/image/image'
import styles from './BigImageCarousel.module.scss'

import IBigImageCarousel from './BigImageCarousel.interface'

const BigImageCarouselModule: FunctionComponent<IBigImageCarousel> = (
  props,
) => {
  const { bigImageCarousel } = props
  const isMobile = useIsMobile('lg')

  // eslint-disable-next-line operator-linebreak
  const headline =
    !isMobile && bigImageCarousel.customHeadline
      ? bigImageCarousel.customHeadline
      : bigImageCarousel.headline

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })
  return (
    <div ref={ref} className={`${styles.root} pb-175 md:pb-225 lg:pb-100`}>
      <div className="container">
        <div className="default-grid">
          <Fade className="col-span-7  mb-50 md:mb-60">
            <h2
              className="typo-headlines"
              dangerouslySetInnerHTML={{ __html: headline }}
            />
          </Fade>
          <div
            className={`${styles.mediaContainer} mb-40 md:mb-0 col-span-6 md:col-span-12`}
          >
            <Fade>
              <Swiper
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                effect="fade"
                className={`${styles.swiper}`}
                loop
                allowTouchMove={false}
                touchRatio={0}
                modules={[Autoplay]}
                preventClicks
                spaceBetween={0}
                speed={0}
              >
                {bigImageCarousel.images.map((item) => (
                  <SwiperSlide
                    key={
                      item?.image?.desktopImage?.sourceUrl || item.vimeoVideoUrl
                    }
                    className={`${styles.swiperSlide} pointer-events-none`}
                  >
                    {(item.vimeoVideoUrl && inView) ? (
                      <video
                        src={item.vimeoVideoUrl}
                        playsInline
                        muted
                        loop
                        autoPlay
                      />
                    ) : (
                      <Image image={item.image} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </Fade>
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
            <div className="typo-body mb-45 xl:mb-60">
              <Fade delay={200}>{bigImageCarousel.copy}</Fade>
            </div>
            {bigImageCarousel.link && (
              <Fade delay={300}>
                <Button variant="light" link={bigImageCarousel.link} />
              </Fade>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigImageCarouselModule
