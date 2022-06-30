import React from 'react'
import Image from 'next/image'
import useIsMobile from 'utils/hooks'
import IImage from './image.interface'
import styles from './image.module.scss'

const ImageComponent = ({ image, className }: IImage) => {
  const { desktopImage, mobileImage } = image

  const isMobile = useIsMobile()
  return (
    <div className={`${styles.root} ${className} w-full`}>
      {isMobile && mobileImage ? (
        <Image
          width={desktopImage.mediaDetails.width}
          height={desktopImage.mediaDetails.height}
          layout="responsive"
          src={mobileImage.sourceUrl}
          quality={100}
          loading="lazy"
        />
      ) : (
        desktopImage && (
          <Image
            width={desktopImage.mediaDetails.width}
            height={desktopImage.mediaDetails.height}
            layout="responsive"
            src={desktopImage.sourceUrl}
            quality={100}
            loading="lazy"
          />
        )
      )}
    </div>
  )
}

export default ImageComponent
