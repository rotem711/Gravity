import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import HeaderInterface from './header.interface'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeaderBlock = ({ data }: { data: HeaderInterface }) => (
  <div className={`${styles.root} container flex justify-between`}>
    <Link href="/">
      <a>LOGO</a>
    </Link>
  </div>
)

export default HeaderBlock
