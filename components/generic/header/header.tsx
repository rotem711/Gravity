import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import HeaderInterface from './header.interface'

const HeaderBlock = ({ data }: { data: HeaderInterface }) => {
  console.log(data)
  return (
    <div className={`${styles.root} container flex justify-between`}>
      <Link href="/">
        <a>LOGO</a>
      </Link>
    </div>
  )
}

export default HeaderBlock
