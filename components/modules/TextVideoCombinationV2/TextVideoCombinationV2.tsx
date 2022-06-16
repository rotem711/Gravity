import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import useIsMobile from 'utils/hooks'
import ImageComponent from 'components/generic/image/image'
import styles from './TextVideoCombinationV2.module.scss'
import ITextVideoCombinationV2 from './TextVideoCombinationV2.interface'

const TextVideoCombinationV2Module: FunctionComponent<
  ITextVideoCombinationV2
> = (props) => {
  const { textVideoCombinationV2 } = props
  const isMobile = useIsMobile('xl')
  return (
    <div className={`${styles.root} pt-0 pb-100 lg:pb-150`}>
      <div className="container">
        {textVideoCombinationV2.items.map((item, index) => {
          const { flipHorizontally } = item

          const imageC = item.image && <ImageComponent image={item.image} />
          const videoC = item.vimeoVideoUrl && (
            <video src={item.vimeoVideoUrl} playsInline muted loop autoPlay />
          )
          const contentC = (
            <>
              <div className="col-span-6 md:col-span-5">
                <h4 className="pb-30 typo-subhead uppercase">
                  {item.topHeadline}
                </h4>
                <h2 className="pb-75 md:pb-125 typo-headlines">
                  {item.headline}
                </h2>
              </div>
              <div className="col-span-6 md:col-span-5 md:col-start-7">
                <div
                  className="pb-45 md:pb-55 typo-body"
                  style={{ fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ __html: item.copy }}
                />
                <div className="hidden md:block">
                  <Button variant="light" link={item.link} />
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
              className={`default-grid ${true ? styles.flipped : ''} ${
                index > 0 ? 'pt-170 md:pt-230 lg:pt-270' : ''
              }`}
            >
              {(flipHorizontally || isMobile) ? (
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
