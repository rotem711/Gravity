import Link from 'next/link'
import React from 'react'
import SimpleLogo from 'public/gravity-logo-simple.svg'
import FooterInterface from './footer.interface'
import styles from './footer.module.scss'

const FooterBlock = ({ data }: { data: FooterInterface }) => (
  <footer className={`${styles.root} container pt-30 pb-45 md:pt-40 md:pb-45`}>
    <Link href="/">
      <a>
        <SimpleLogo className={`${styles.logo} mb-100 md:mb-125`} />
      </a>
    </Link>
    <div className="default-grid">
      <div
        className={`${styles.contact} col-span-6 md:col-span-5 typo-footer-headline ${styles.copy}`}
        dangerouslySetInnerHTML={{ __html: data.contact }}
      />
      <ul className="col-span-6  md:col-span-6 md:col-start-7 mt-150  md:mt-0 default-grid gap-y-75">
        {data.navigation.map((item) => (
          <li className="col-span-3 md:col-span-4" key={item.label}>
            <span className="typo-footer-headline">{item.label}</span>
            <ul className={`${styles.list} `}>
              {item.links.map((subItem) => (
                <li className="typo-captions-and-buttons" key={subItem.link.title}>
                  <a
                    className={`${styles.navItem} `}
                    target={subItem.link.target}
                    href={subItem.link.url}
                  >
                    {subItem.link.title}
                  </a>
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
