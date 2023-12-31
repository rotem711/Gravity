/* eslint-disable operator-linebreak */
import React, { FunctionComponent, useState } from 'react'
import Button from 'components/generic/button/button'
import buttonStyles from 'components/generic/button/button.module.scss'
import Link from 'next/link'
import Fade from 'components/generic/fade/fade'
import useIsMobile from 'utils/hooks'
import ImageComponent from 'components/generic/image/image'
import styles from './TextVideoCombinationV2.module.scss'
import ITextVideoCombinationV2 from './TextVideoCombinationV2.interface'

const TextVideoCombinationV2Module: FunctionComponent<
  ITextVideoCombinationV2
> = (props) => {
  const {
    textVideoCombinationV2,
    extendedOnMobile = false,
    clickable = false,
  } = props
  const isMobile = useIsMobile('md')
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  return (
    <div className={`${styles.root} py-100 md:py-150`}>
      <div className="container">
        {textVideoCombinationV2.items.map((item, index) => {
          const { flipHorizontally, headlineBreakpoint } = item
          const fullHeight =
            ((item.image && !item.vimeoVideoUrl) ||
              (!item.image && item.vimeoVideoUrl)) &&
            !extendedOnMobile
              ? 'h-full'
              : ''
          // eslint-disable-next-line operator-linebreak
          const headline =
            !isMobile && headlineBreakpoint ? headlineBreakpoint : item.headline
          const imageC = item.image && (
            <ImageComponent className={fullHeight} image={item.image} />
          )
          const videoC = item.vimeoVideoUrl && (
            <video
              preload="none"
              src={item.vimeoVideoUrl}
              playsInline
              muted
              loop
              autoPlay
            />
          )
          const contentC = (
            <>
              <div
                className={`col-span-6 ${
                  extendedOnMobile
                    ? 'md:col-span-8'
                    : 'sd:col-span-3 md:col-span-5'
                }`}
              >
                <h4 className="pb-30 typo-subhead uppercase">
                  <Fade>{item.topHeadline}</Fade>
                </h4>
                <Fade delay={200}>
                  <h2
                    className="pb-75 md:pb-125 typo-insights-headline"
                    dangerouslySetInnerHTML={{ __html: headline }}
                  />
                </Fade>
              </div>
              <div
                className={`col-span-6 ${
                  extendedOnMobile
                    ? 'md:col-span-7'
                    : 'sd:col-span-3 md:col-span-5 md:col-start-7'
                }`}
              >
                <Fade delay={300}>
                  <div
                    className="typo-body"
                    dangerouslySetInnerHTML={{ __html: item.copy }}
                    style={{ maxWidth: '44rem' }}
                  />
                </Fade>
                {item.link && (
                  <div
                    className={`${
                      !extendedOnMobile ? 'hidden sd:block' : ''
                    } pt-45 md:pt-55`}
                  >
                    <Fade delay={400}>
                      {clickable ? (
                        <a
                          className={`${buttonStyles.root} ${
                            buttonStyles.light
                          } ${
                            hoveredIndex === index ? buttonStyles.hover : ''
                          } mt-auto mr-auto`}
                        >
                          Read More
                        </a>
                      ) : (
                        <Button variant="light" link={item.link} />
                      )}
                    </Fade>
                  </div>
                )}
              </div>
            </>
          )
          const mediaC = (
            <div
              className={`relative ${
                extendedOnMobile ? `-mx-40 md:mx-0 ${fullHeight}` : ''
              }`}
            >
              <Fade className={fullHeight} delay={400}>
                <div
                  className={`${fullHeight} ${styles.img} ${
                    item.vimeoVideoUrl ? styles.absoluteImage : ''
                  }`}
                >
                  {imageC}
                </div>
                {videoC}
              </Fade>
            </div>
          )

          const component = (
            <div
              key={`${item.topHeadline}-${item.headline}-${item.copy}`}
              id={item.anchor}
              className={`default-grid ${
                flipHorizontally ? '' : styles.flipped
              } ${index > 0 ? 'mt-170 sm:mt-60 md:mt-270' : ''}`}
            >
              {flipHorizontally || isMobile ? (
                <>
                  <div
                    className={`col-span-12 md:col-span-6 ${
                      extendedOnMobile ? 'order-2' : 'order-2 sd:order-1'
                    } mb-auto`}
                  >
                    {mediaC}
                    {item.link && (
                      <div
                        className={`${
                          extendedOnMobile ? 'hidden' : 'sd:hidden mt-50'
                        }`}
                      >
                        <Button variant="light" link={item.link} />
                      </div>
                    )}
                  </div>
                  <div
                    className={`col-span-12 md:col-span-4 md:col-start-8 default-grid sd:mt-60 md:mt-0 md:block ${
                      extendedOnMobile
                        ? 'mb-50 md:mb-60'
                        : 'order-1 xl:order-2 mb-45 md:mb-0'
                    }`}
                  >
                    {contentC}
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-5">{contentC}</div>
                  <div className="col-span-6 col-start-7">{mediaC}</div>
                </>
              )}
            </div>
          )

          return clickable ? (
            <Link href={item.link.url}>
              <a
                onFocus={() => {}}
                onMouseOver={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {component}
              </a>
            </Link>
          ) : (
            component
          )
        })}
      </div>
    </div>
  )
}

export default TextVideoCombinationV2Module
