import React, { FunctionComponent } from 'react'
import styles from './LogoRow.module.scss'
import ILogoRow from './LogoRow.interface'

const LogoRowModule:FunctionComponent<ILogoRow> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Logorow Module
      </div>
    </div>
  )
}

export default LogoRowModule
