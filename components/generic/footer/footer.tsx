import React from 'react'
import FooterInterface from './footer.interface'
import styles from './footer.module.scss'

const FooterBlock = ({ data }: { data: FooterInterface }) => {
  console.log(data)

  return <footer className={`${styles.root} container`}>FOOTER</footer>
}
export default FooterBlock
