import React, { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import styles from './NewsBanner.module.scss'
import INewsBanner from './NewsBanner.interface'

const NewsBanner: FunctionComponent<INewsBanner> = ({ data, onClose }) => {
  const [closed, setClosed] = useState(false)

  const onCloseAction = () => {
    setClosed(true)
    onClose()
  }
  return (
    <div
      className={`${styles.root} ${closed ? styles.hide : ''}`}
    >
      <Link href={data.newsBannerLink.url}>
        <a target={data.newsBannerLink.target}>
          <div className="container flex items-center justify-center h-full">
            <div className="relative text-center px-20 md:px-0">
              <span>{data.newsBannerText}</span>
            </div>
          </div>
        </a>
      </Link>
      <button type="button" onClick={onCloseAction}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 13">
          <path stroke="#F7F7F2" d="m1 1 11 11M1 12 12 1" />
        </svg>
      </button>
    </div>
  )
}

export default NewsBanner
