import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Fade from 'components/generic/fade/fade'
import parse from 'html-react-parser'
import styles from './LogoRow.module.scss'
import ILogoRow from './LogoRow.interface'

const LogoRowModule:FunctionComponent<ILogoRow> = (props) => {
  const {
    logoRow,
  } = props
  return (
    <div
      className={`${styles.root} pb-100`}
    >
      <div className="container flex flex-wrap h-full">
        <div
          className={`${styles.logos} default-grid w-full mt-95 lg:mt-145 items-start`}
        >
          <h2 className="typo-subhead w-full col-span-6 md:col-span-3 lg:col-span-2 uppercase">
            <Fade delay={75}>{parse(logoRow.logoRowHeadline)}</Fade>
          </h2>
          <div className="col-span-6 md:col-start-5 md:col-span-8 lg:col-start-4 lg:col-span-9 flex flex-wrap md:flex-nowrap gap-y-60 md:gap-50 lg:gap-60 mt-70 md:mt-0">
            {logoRow.logos.map((item, index) => {
              const child = (
                <span
                  key={item.logo.sourceUrl}
                  className={`${styles.iconContainer} md:flex-shrink-0`}
                >
                  <Fade delay={index * 50 + 75}>
                    <Image
                      layout="intrinsic"
                      objectFit="contain"
                      objectPosition="left top"
                      src={item.logo.sourceUrl}
                      width={item.logo.mediaDetails.width}
                      height={item.logo.mediaDetails.height}
                      alt={item.logo.altText}
                      priority
                    />
                  </Fade>
                </span>
              )
              return item.link ? (
                <a
                  key={item.logo.sourceUrl}
                  className={`${styles.iconContainer} md:flex-shrink-0`}
                  rel="noreferrer"
                  href={item.link}
                  target="_blank"
                >
                  {child}
                </a>
              ) : (
                child
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoRowModule
