import React, { FunctionComponent } from 'react'
import styles from './TabNavigationContent.module.scss'
import ITabNavigationContent from './TabNavigationContent.interface'

const TabNavigationContentModule:FunctionComponent<ITabNavigationContent> = () => (
  <div
    className={`${styles.root}`}
  >
    <div className="container">
      Tabnavigationcontent Module
    </div>
  </div>
)

export default TabNavigationContentModule
