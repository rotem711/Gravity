import Link from 'next/link'
import React from 'react'
import SimpleLogo from 'public/gravity-logo-simple.svg'
import FooterInterface from './footer.interface'
import styles from './footer.module.scss'

const FooterBlock = ({ data }: { data: FooterInterface }) => (
  <footer className={`${styles.root} container pt-30 pb-45 md:pt-35 md:pb-75 xl:pt-40 xl:pb-45`}>
    <SimpleLogo className={`${styles.logo} mb-100 md:mb-110 xl:mb-125`} />
    <div className="default-grid">
      <div className={`${styles.contact} col-span-6 md:col-span-5 typo-captions-and-buttons`} dangerouslySetInnerHTML={{ __html: data.contact }} />
      <ul className="col-span-6 md:col-span-12 xl:col-span-6 xl:col-start-7 sm:mt-150 md:mt-100 xl:mt-0 default-grid typo-captions-and-buttons">
        {data.navigation.map((item) => (
          <li className="col-span-3 xl:col-span-4 mb-75 last:mb-0 md:mb-0" key={item.label}>
            <span>{item.label}</span>
            <ul className={`${styles.list} `}>
              {item.links.map((subItem) => (
                <li key={subItem.link.title}>
                  <Link href={subItem.link.url}>
                    <a className={`${styles.navItem} `} target={subItem.link.target}>
                      {subItem.link.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </footer>
)
export default FooterBlock
