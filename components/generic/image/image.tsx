import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import useIsMobile from 'utils/hooks'
import IImage from './image.interface'
import styles from './image.module.scss'

const ImageComponent = ({ image, className, loading = 'lazy' }: IImage) => {
  const { desktopImage, mobileImage } = image

  const isMobile = useIsMobile('sd')
  return (
    <div className={`${styles.root} ${className} w-full`}>
      {isMobile && mobileImage ? (
        <>
          <Image
            width={desktopImage.mediaDetails.width}
            height={desktopImage.mediaDetails.height}
            layout="responsive"
            src={mobileImage.sourceUrl}
            quality={85}
            loading={loading}
          />
          <div className={styles.caption}>{parse(mobileImage.caption)}</div>
        </>
      ) : (
        desktopImage && (
          <>
            <Image
              width={desktopImage.mediaDetails.width}
              height={desktopImage.mediaDetails.height}
              layout="responsive"
              src={desktopImage.sourceUrl}
              quality={85}
              loading={loading}
            />
            <div className={styles.caption}>{parse(desktopImage.caption)}</div>
          </>
        )
      )}
    </div>
  )
}

export default ImageComponent
