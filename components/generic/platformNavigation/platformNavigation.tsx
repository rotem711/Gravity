import React, { useContext } from 'react'
import { GlobalContext } from 'pages/_app'
import styles from './platformNavigation.module.scss'

const PlatformNavigation = () => {
  const ctx = useContext(GlobalContext)
  console.log('HELLO', ctx.platformNavigation)
  return (
    <div className={`${styles.root} container flex justify-between`}>
      Hello Platform Nav
    </div>
  )
}

export default PlatformNavigation
