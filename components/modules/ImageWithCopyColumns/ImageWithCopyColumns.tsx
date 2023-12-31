/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React, { FunctionComponent } from 'react'
import Image from 'components/generic/image/image'
import Fade from 'components/generic/fade/fade'
import styles from './ImageWithCopyColumns.module.scss'
import IImageWithCopyColumns from './ImageWithCopyColumns.interface'

const ImageWithCopyColumnsModule: FunctionComponent<IImageWithCopyColumns> = (
  props,
) => {
  const {
    imageWithCopyColumns: { headline, backgroundColor, columns, image },
  } = props
  return (
    <div style={{ backgroundColor }} className={`${styles.root}`}>
      <div className="container">
        <div className="default-grid pb-170 md:pb-145">
          <div className="col-span-6 md:col-span-12 xl:col-span-4">
            <h2 className="typo-subhead uppercase mb-115 md:mb-70 xl:mb-0">
              <Fade>{headline}</Fade>
            </h2>
          </div>
          {columns &&
            columns.map((e, index) => (
              <Fade
                delay={index * 150 + 200}
                key={e.copy}
                className="flex md:block gap-x-15 col-span-6 md:col-span-3 xl:col-span-2 typo-body last-of-type:mb-0 mb-65"
              >
                <h3 className="w-1/2 md:w-full md:mb-20 xl:mb-30">
                  {e.headline}
                </h3>
                <div
                  className="w-1/2 md:w-full "
                  dangerouslySetInnerHTML={{ __html: e.copy }}
                />
              </Fade>
            ))}
        </div>
        {image && (
          <div className="relative">
            <Image layout="responsive" className={styles.image} image={image} />
            <span className={`${styles.corners}`} aria-hidden="true">
              <i style={{ backgroundColor }} />
              <i style={{ backgroundColor }} />
              <i style={{ backgroundColor }} />
              <i style={{ backgroundColor }} />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageWithCopyColumnsModule
