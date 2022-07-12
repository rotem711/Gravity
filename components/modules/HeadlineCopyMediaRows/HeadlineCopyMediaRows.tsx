import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Fade from 'components/generic/fade/fade'
import styles from './HeadlineCopyMediaRows.module.scss'
import IHeadlineCopyMediaRows from './HeadlineCopyMediaRows.interface'

const HeadlineCopyMediaRowsModule:FunctionComponent<IHeadlineCopyMediaRows> = (props) => {
  const { headlineCopyMediaRows } = props

  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  const isInView = () => {
    if (ref.current.getBoundingClientRect().top < window.innerHeight * 2) {
      setInView(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', isInView)
    return () => {
      window.removeEventListener('scroll', isInView)
    }
  }, [])
  return (
    <div
      ref={ref}
      className={`${styles.root} pt-35 pb-140 md:pb-160 lg:pb-260`}
    >
      <div className="container default-grid">
        <h2 className="col-span-6 md:col-span-12 typo-subhead uppercase mb-110 lg:mb-155"><Fade>{headlineCopyMediaRows.topHeadline}</Fade></h2>
        {headlineCopyMediaRows.rows.map((item, index) => (
          <Fade
            delay={index * 150 + 100}
            key={item.copy}
            className="default-grid col-span-6 md:col-span-12 mb-145 md:mb-115 lg:mb-150 last:mb-0"
          >
            <h3 className="col-span-6 md:col-span-4 lg:col-span-3 typo-headlines mb-55 md:mb-0">{item.headline}</h3>
            <p className="col-span-6 md:col-span-5 lg:col-span-4 typo-body mt-5 mb-50 md:md-0">{item.copy}</p>
            <div className={`col-span-6 md:col-start-10 md:col-end-13 mt-10 md:mt-0 relative ${styles.mediaContainer}`}>
              {
              (item.vimeoVideoUrl && inView)
                ? <video src={item.vimeoVideoUrl} playsInline muted loop autoPlay />
                : (
                  item.image && (
                    <Image
                      className={styles.gatsbyImage}
                      layout="fill"
                      src={item.image.sourceUrl}
                    />
                  )
                )
              }
            </div>
          </Fade>
        ))}
      </div>
    </div>
  )
}

export default HeadlineCopyMediaRowsModule
