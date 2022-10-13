import React, { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image'
import { formatDate } from 'utils/hooks'
import Facebook from 'public/icons/icon-facebook.svg'
import Twitter from 'public/icons/icon-twitter.svg'
import LinkedIn from 'public/icons/icon-linkedin.svg'
import styles from './AuthorRow.module.scss'
import IAuthorRow from './AuthorRow.interface'

const AuthorRow:FunctionComponent<IAuthorRow> = (props) => {
  const { author, date, customName } = props
  const { avatar: { url: avatarUrl }, name } = author

  const [url, setUrl] = useState('')
  useEffect(() => setUrl(encodeURIComponent(window.location.toString())), [])

  return (
    <div
      className={`${styles.root} py-30 md:py-40`}
    >
      <div className="container-insights flex items-center">
        <div className="shrink-0 mr-16">
          <Image
            src={avatarUrl}
            width="32"
            height="32"
            layout="fixed"
            className="rounded-full overflow-hidden"
          />
        </div>
        <div className="typo-small-meta mr-auto">
          <p className={styles.name}>{customName || name}</p>
          {date && <p className={styles.date}>{formatDate(date)}</p>}
        </div>

        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">
          <Facebook className="w-32 h-32 ml-10" />
        </a>

        <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" rel="noopener noreferrer">
          <Twitter className="w-32 h-32 ml-10" />
        </a>

        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noopener noreferrer">
          <LinkedIn className="w-32 h-32 ml-10" />
        </a>
      </div>
    </div>
  )
}

export default AuthorRow
