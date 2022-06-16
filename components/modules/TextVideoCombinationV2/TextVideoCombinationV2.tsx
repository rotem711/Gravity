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
    <div className={`${styles.root} pt-0 pb-100 xl:pb-150`}>
      <div className="container">
        {textVideoCombinationV2.items.map((item, index) => {
          const { flipHorizontally } = item
          const imageC = item.image && <ImageComponent image={item.image} />
          const contentC = (
            <>
              <div className="col-span-5">
                <h4 className="pb-30 typo-subhead uppercase">
                  {item.topHeadline}
                </h4>
                <h2 className="pb-125 typo-headlines">{item.headline}</h2>
              </div>
              <div className="col-span-5 col-start-7">
                <div
                  className="pb-55 typo-body"
                  style={{ fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ __html: item.copy }}
                />
                <div className="md:hidden">
                  <Button variant="light" link={item.link} />
                </div>
              </div>
            </>
          )
          return (
            <div
              className={`default-grid ${index > 0 ? 'pt-230 xl:pt-270' : ''}`}
            >
              {flipHorizontally || isMobile ? (
                <>
                  <div className="col-span-12 xl:col-span-6">{imageC}</div>
                  <div className="col-span-12 xl:col-span-4 xl:col-start-8 default-grid xl:block mt-60 xl:mt-0">
                    {contentC}
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-5">{contentC}</div>
                  <div className="col-span-6 col-start-7">{imageC}</div>
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
