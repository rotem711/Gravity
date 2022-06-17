import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import Fade from 'components/generic/fade/fade'
import styles from './MediaWithCopyAndLink.module.scss'
import IMediaWithCopyAndLink from './MediaWithCopyAndLink.interface'

const MediaWithCopyAndLinkModule:FunctionComponent<IMediaWithCopyAndLink> = (props) => {
  const { mediaWithCopyAndLink } = props

  return (
    <div
      className={`${styles.root}`}
      style={{ backgroundColor: mediaWithCopyAndLink.backgroundColor }}
    >
      <div className="container default-grid pt-30 pb-180 md:pb-200">
        <div className="col-span-6 md:col-span-8 xl:col-span-7 xl:col-start-5">
          {
            mediaWithCopyAndLink.vimeoVideoUrl && (
              <video src={mediaWithCopyAndLink.vimeoVideoUrl} playsInline muted loop autoPlay />
            )
          }
        </div>
        <div className="col-span-5 md:col-span-5 xl:col-span-3 xl:col-start-5 xl:-top-75 relative z-1">
          <h2 className="typo-subhead uppercase mb-50"><Fade>{mediaWithCopyAndLink.subline}</Fade></h2>
          <div className="typo-body mb-50"><Fade delay={150}>{mediaWithCopyAndLink.headline}</Fade></div>
          <Fade delay={300}><Button variant="light" link={mediaWithCopyAndLink.link} /></Fade>
        </div>
      </div>
    </div>
  )
}

export default MediaWithCopyAndLinkModule
