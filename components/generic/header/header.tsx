import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from 'components/generic/button/button'
import Logo from 'public/gravity-logo.svg'
import navBackground from 'public/nav-bg-tiny.jpg'
import styles from './header.module.scss'
import HeaderInterface from './header.interface'

const HeaderBlock = ({ data, inverted }: HeaderInterface) => {
  const [deployed, setDeployed] = useState(false)
  const [scrollDir, setScrollDir] = useState('up')
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    let prevPos = 0
    window.onscroll = () => {
      if (window.innerWidth <= 1024) {
        setScrollDir('up')
      } else if (prevPos >= window.scrollY) {
        setScrollDir('up')
      } else {
        setScrollDir('down')
      }
      if (window.scrollY === 0) {
        setScrollDir('')
        setScrolled(false)
      } else {
        setScrolled(true)
      }
      prevPos = window.scrollY
    }
  }, [])

  return (
    <header
      className={`${styles.root} ${scrolled ? styles.scrolled : ''} ${deployed && styles['is-deployed']} ${
        inverted ? styles['is-inverted'] : ''
      } bg-white xl:bg-opacity-0`}
      data-scroll-dir={scrollDir}
    >
      <div className="container flex items-center justify-between pt-30 pb-30 xl:pt-35 xl:pb-35">
        <Link href="/">
          <a className={`${styles.logo}`}>
            <Logo />
          </a>
        </Link>
        <div
          className={`${styles.navContainer} ${
            deployed && styles['is-deployed']
          }`}
        >
          <div className="container">
            <nav className={`${styles.navCenter}`}>
              <ul className="xl:flex">
                {data?.mainNavigation?.map((subItem) => (
                  <li key={subItem.link.title}>
                    <Link href={subItem.link.url}>
                      <a
                        className={`${styles.navItem}`}
                        target={subItem.link.target}
                      >
                        {subItem.link.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <ul className="xl:flex">
                {data.rightSideNavigation.map((subItem) => (
                  <li key={subItem.link.title}>
                    <Link href={subItem.link.url}>
                      <a
                        className={`${styles.navItem} ${
                          subItem.link.title === 'Get Started'
                            ? 'hidden xl:block'
                            : ''
                        } last:mr-0`}
                        target={subItem.link.target}
                      >
                        {subItem.link.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={`${styles.button} col-span-6 xl:hidden md:mt-80`}>
                <Button link={data.mobileMenuCta} variant="dark" />
              </div>
            </nav>
          </div>
          <div className={`${styles.navBackground} xl:hidden`}>
            <Image
              src={navBackground.src}
              alt="descriptive alt tag"
              layout="responsive"
              width={834}
              height={1195}
            />
          </div>
        </div>
        <div className="xl:hidden z-10">
          <button
            type="button"
            className={`${styles.navSubItem} mr-0`}
            onClick={() => setDeployed(!deployed)}
          >
            <span className={`${deployed && 'hidden'}`}>Menu</span>
            <span className={`${!deployed && 'hidden'}`}>Close</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default HeaderBlock
