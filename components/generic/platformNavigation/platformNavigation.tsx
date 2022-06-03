import React, { useContext } from 'react'
import { GlobalContext } from 'pages/_app'
import styles from './platformNavigation.module.scss'

const PlatformNavigation = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ctx = useContext(GlobalContext)
  return (
    <div className={`${styles.root} container flex justify-between`}>
      Hello Platform Nav
    </div>
  )
}

export default PlatformNavigation
