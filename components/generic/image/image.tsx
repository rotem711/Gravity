import React from 'react'
import Image from 'next/image'
import useIsMobile from 'utils/hooks'
import IImage from './image.interface'
import styles from './image.module.scss'

const ImageComponent = ({ image }: IImage) => {
  const { desktopImage, mobileImage } = image

  const isMobile = useIsMobile()
  return (
    <div className={`${styles.root} w-full`}>
      {isMobile && mobileImage ? (
        <Image
          width={desktopImage.mediaDetails.width}
          height={desktopImage.mediaDetails.height}
          layout="responsive"
          src={mobileImage.sourceUrl}
        />
      ) : (
        desktopImage && (
          <Image
            width={desktopImage.mediaDetails.width}
            height={desktopImage.mediaDetails.height}
            layout="responsive"
            src={desktopImage.sourceUrl}
          />
        )
      )}
    </div>
  )
}

export default ImageComponent
