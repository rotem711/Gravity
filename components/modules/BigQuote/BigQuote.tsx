import React, { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
import useIsMobile from 'utils/hooks'
import Fade from 'components/generic/fade/fade'
import styles from './BigQuote.module.scss'
import IBigQuote from './BigQuote.interface'

const BigQuoteModule: FunctionComponent<IBigQuote> = (props) => {
  const { bigQuote } = props
  const [quoteLayout, setQuoteLayout] = useState('simple')
  const isMobile = useIsMobile()

  // eslint-disable-next-line operator-linebreak
  const topHeadline =
    isMobile && bigQuote.leftHeadlineMobile
      ? bigQuote.leftHeadlineMobile
      : bigQuote.leftHeadline

  useEffect(() => {
    for (let i = 0; i < bigQuote.quotes.length; i += 1) {
      if (bigQuote.quotes[i].logo && bigQuote.quotes[i].logo.sourceUrl !== '') {
        setQuoteLayout('with-logo')
        return
      }
    }
  }, [])

  return (
    <div
      className={`${styles.root}`}
      style={{ backgroundColor: bigQuote.backgroundColor }}
    >
      <div className="container pt-25 pb-95 xl:pt-35 xl:pb-150">
        {quoteLayout === 'simple' ? (
          <div className="sd:default-grid">
            <Fade className="col-span-full mb-85 md:mb-100 md:mb-0 md:col-span-3">
              <h2
                className={`${styles.title} typo-subhead uppercase`}
                dangerouslySetInnerHTML={{ __html: topHeadline }}
              />
            </Fade>

            {bigQuote.quotes.map((item) => (
              <blockquote
                key={item.quote}
                className={`${styles.quoteElement} typo-big-quotes ${
                  item.quote.length > 75 ? 'typo-big-quotes--long' : ''
                } col-span-full sd:col-span-5 md:col-span-8 md:col-start-5`}
              >
                <Fade delay={150}>
                  <div
                    className={`${styles.quoteElementChild}`}
                    dangerouslySetInnerHTML={{ __html: `${item.quote}”` }}
                  />
                </Fade>
                <cite
                  className={`${styles.cite} typo-captions-and-buttons mt-35 xl:mt-45`}
                >
                  <Fade delay={300}>
                    <div dangerouslySetInnerHTML={{ __html: item.subline }} />
                  </Fade>
                </cite>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="">
            <Fade className="w-full mb-95 md:mb-85 xl:mb-130">
              <h2
                className={`${styles.title} typo-subhead uppercase`}
                dangerouslySetInnerHTML={{ __html: topHeadline }}
              />
            </Fade>
            <div className={`${styles.quoteContainer}`}>
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                effect="fade"
                loop
                allowTouchMove={false}
                touchRatio={0}
                preventClicks
                spaceBetween={0}
                speed={0}
              >
                {bigQuote.quotes.map(
                  (item) => (
                    <SwiperSlide>
                      <blockquote
                        key={item.quote}
                        className={`${styles.quote} typo-big-quotes ${
                          item.quote.length > 75 ? 'typo-big-quotes--long' : ''
                        } default-grid xl:col-span-12`}
                      >
                        <div
                          className={`${styles.quoteElement} col-span-6 md:col-span-10 xl:col-span-9`}
                        >
                          <Fade delay={150}>
                            <div
                              className={`${styles.quoteElementChild}`}
                              dangerouslySetInnerHTML={{
                                __html: `${item.quote}”`,
                              }}
                            />
                          </Fade>
                          <cite
                            className={`${styles.cite} typo-captions-and-buttons mt-35 xl:mt-45`}
                          >
                            <Fade delay={300}>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.subline,
                                }}
                              />
                            </Fade>
                          </cite>
                        </div>
                        <div
                          className={`${styles.logo} ${
                            bigQuote.imageAlignment === 'bottom'
                              ? `${styles.bottom} mt-50 md:mt-0`
                              : 'mb-50 md:mb-0'
                          } col-span-2 md:col-start-11`}
                        >
                          <Fade delay={500}>
                            <Image
                              loading="lazy"
                              src={item.logo.sourceUrl}
                              alt={item.logo.altText}
                              width={item.logo.mediaDetails.width}
                              height={item.logo.mediaDetails.height}
                            />
                          </Fade>
                        </div>
                      </blockquote>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BigQuoteModule
