import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from 'public/gravity-logo.svg'
import styles from './header.module.scss'
import HeaderInterface from './header.interface'

const HeaderBlock = ({ data, inverted }: HeaderInterface) => {
  const [deployed, setDeployed] = useState(false)
  const [scrollDir, setScrollDir] = useState('up')
  console.log(inverted)
  useEffect(() => {
    let prevPos = 0;
    window.onscroll = () => {
      if (window.innerWidth <= 1024) {
        setScrollDir('up')
      } else if (prevPos >= window.scrollY) {
        setScrollDir('up')
      } else {
        setScrollDir('down')
      }
      prevPos = window.scrollY
    }
  }, [])

  return (
    <header className={`${styles.root} container flex items-center justify-between pt-30 pb-30 xl:pt-35 xl:pb-35 bg-white xl:bg-opacity-0`} data-scroll-dir={scrollDir}>
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <div className={`${styles.navContainer}`}>
        <nav className={`${styles.navCenter}`}>
          <ul className="flex">
            {data.mainNavigation.map((subItem) => (
              <li key={subItem.link.title}>
                <Link href={subItem.link.url}>
                  <a className={`${styles.navItem} `} target={subItem.link.target}>
                    {subItem.link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul className="flex">
            {data.rightSideNavigation.map((subItem) => (
              <li key={subItem.link.title}>
                <Link href={subItem.link.url}>
                  <a className={`${styles.navItem} last:mr-0`} target={subItem.link.target}>
                    {subItem.link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="xl:hidden">
        <button type="button" className={`${styles.navItem} mr-0`} onClick={() => setDeployed(!deployed)}>
          <span>Menu</span>
          <span>Close</span>
        </button>
      </div>
    </header>
  )
}

export default HeaderBlock
