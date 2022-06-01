import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import Nav from '../nav/nav'

const HeaderBlock = () => (
  <div
    className={`${styles.root} container flex justify-between`}
  >
    <Link href="/">
      <a>LOGO</a>
    </Link>
    <Nav />
  </div>
)

export default HeaderBlock
