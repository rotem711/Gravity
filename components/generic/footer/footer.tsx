import React from 'react'
import FooterInterface from './footer.interface'
import styles from './footer.module.scss'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FooterBlock = ({ data }: { data: FooterInterface }) => <footer className={`${styles.root} container`}>FOOTER</footer>
export default FooterBlock
