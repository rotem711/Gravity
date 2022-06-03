import React, { FunctionComponent } from 'react'
import styles from './PlatformNavigation.module.scss'
import IPlatformNavigation from './PlatformNavigation.interface'

const PlatformNavigationModule:FunctionComponent<IPlatformNavigation> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Platformnavigation Module
      </div>
    </div>
  )
}

export default PlatformNavigationModule
