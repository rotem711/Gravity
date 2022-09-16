import React, { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import ArrowRight from 'public/icons/icon-drop-arrow.svg'
import styles from './NewsBanner.module.scss'
import INewsBanner from './NewsBanner.interface'

const NewsBanner: FunctionComponent<INewsBanner> = ({ data, onClose }) => {
  const [closed, setClosed] = useState(false)

  const onCloseAction = () => {
    setClosed(true)
    onClose()
  }
  return (
    <div className={`${styles.root} ${closed ? styles.hide : ''}`}>
      <div className="container flex items-center justify-center h-full">
        <Link href={data.newsBannerLink.url}>
          <a
            className="flex items-center justify-center px-20 md:px-0"
            target={data.newsBannerLink.target}
          >
            <div className="relative text-center">
              <span>{data.newsBannerText}</span>
            </div>
            <div className={styles.chevron}>
              <ArrowRight />
            </div>
          </a>
        </Link>
      </div>

      <button type="button" onClick={onCloseAction}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 13">
          <path stroke="#F7F7F2" d="m1 1 11 11M1 12 12 1" />
        </svg>
      </button>
    </div>
  )
}

export default NewsBanner
