import React, { FunctionComponent } from 'react'
import styles from './LogoRow.module.scss'
import ILogoRow from './LogoRow.interface'

const LogoRowModule: FunctionComponent<ILogoRow> = () => <div className={`${styles.root} hidden`} />
export default LogoRowModule
