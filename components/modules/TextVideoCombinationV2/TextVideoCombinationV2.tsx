import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import Fade from 'components/generic/fade/fade'
import useIsMobile from 'utils/hooks'
import ImageComponent from 'components/generic/image/image'
import styles from './TextVideoCombinationV2.module.scss'
import ITextVideoCombinationV2 from './TextVideoCombinationV2.interface'

const TextVideoCombinationV2Module: FunctionComponent<
  ITextVideoCombinationV2
> = (props) => {
  const { textVideoCombinationV2 } = props
  const isMobile = useIsMobile('lg')
  return (
    <div className={`${styles.root} py-100 lg:py-150`}>
      <div className="container">
        {textVideoCombinationV2.items.map((item, index) => {
          const { flipHorizontally, headlineBreakpoint } = item

          // eslint-disable-next-line operator-linebreak
          const headline =
            !isMobile && headlineBreakpoint ? headlineBreakpoint : item.headline
          const imageC = item.image && <ImageComponent image={item.image} />
          const videoC = item.vimeoVideoUrl && (
            <video src={item.vimeoVideoUrl} playsInline muted loop autoPlay />
          )
          const contentC = (
            <>
              <div className="col-span-6 md:col-span-5">
                <h4 className="pb-30 typo-subhead uppercase">
                  <Fade>{item.topHeadline}</Fade>
                </h4>
                <Fade delay={200}>
                  <h2
                    className="pb-75 md:pb-125 typo-headlines"
                    dangerouslySetInnerHTML={{ __html: headline }}
                  />
                </Fade>
              </div>
              <div className="col-span-6 md:col-span-5 md:col-start-7">
                <Fade delay={300}>
                  <div
                    className="pb-45 md:pb-55 typo-body"
                    style={{ fontWeight: 400 }}
                    dangerouslySetInnerHTML={{ __html: item.copy }}
                  />
                </Fade>
                <div className="hidden md:block">
                  <Fade delay={400}>
                    <Button variant="light" link={item.link} />
                  </Fade>
                </div>
              </div>
            </>
          )
          const mediaC = (
            <div className="relative">
              <div
                className={`${item.vimeoVideoUrl ? styles.absoluteImage : ''}`}
              >
                {imageC}
              </div>
              {videoC}
            </div>
          )
          return (
            <div
              id={item.anchor}
              className={`default-grid ${
                flipHorizontally ? '' : styles.flipped
              } ${index > 0 ? 'pt-170 md:pt-230 lg:pt-270' : ''}`}
            >
              {flipHorizontally || isMobile ? (
                <>
                  <div className="col-span-12 lg:col-span-6 order-2 md:order-1 mb-auto">
                    {mediaC}
                    <div className="md:hidden mt-50">
                      <Button variant="light" link={item.link} />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-4 lg:col-start-8 default-grid lg:block md:mt-60 lg:mt-0 order-1 md:order-2">
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
        })}
      </div>
    </div>
  )
}

export default TextVideoCombinationV2Module
