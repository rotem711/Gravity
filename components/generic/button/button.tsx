import Link from 'next/link'
import React from 'react'
import IButtonInterface from './button.interface'
import styles from './button.module.scss'

const Button = (props: IButtonInterface) => {
  const {
    link, variant, onClick, children, disableHover,
  } = props

  if (onClick) {
    return (
      <button
        onClick={onClick}
        type="submit"
        className={`${styles.root} ${styles[variant]} ${
          disableHover ? styles.disableHover : ''
        }`}
      >
        {children}
      </button>
    )
  }
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
