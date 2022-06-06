import Link from 'next/link'
import React from 'react'
import IButtonInterface from './button.interface'
import styles from './button.module.scss'

const Button = (props: IButtonInterface) => {
  const { link, variant } = props

  if (!link) return null
  return (
    <Link href={link.url}>
      <a target={link.target} className={`${styles.root} ${styles[variant]}`}>
        {link.title}
      </a>
    </Link>
  )
}

export default Button
