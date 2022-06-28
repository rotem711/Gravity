import React, { FunctionComponent, useState } from 'react'
import useIsMobile from 'utils/hooks'
import Link from 'next/link'
import styles from './NewsBanner.module.scss'
import INewsBanner from './NewsBanner.interface'

const NewsBanner: FunctionComponent<INewsBanner> = ({ data, onClose }) => {
  const isNotDesktop = useIsMobile('lg')

  const [closed, setClosed] = useState(false)

  const onCloseAction = () => {
    setClosed(true)
    onClose()
  }
  return (
    <div className={`${styles.root} ${(closed || isNotDesktop) ? styles.hide : ''}`}>
      <div className="container flex items-center justify-center h-full">
        <div className="relative">
          <span>{data.newsBannerText}</span>
          {data.newsBannerLink && (
            <Link href={data.newsBannerLink.url}>
              <a target={data.newsBannerLink.target}>
                {data.newsBannerLink.title}
              </a>
            </Link>
          )}
        </div>
      </div>
      <button type="button" onClick={onCloseAction}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12">
          <path stroke="#F7F7F2" d="m1.4.6 11 11M.6 11.6l11-11" />
        </svg>
      </button>
    </div>
  )
}

export default NewsBanner
