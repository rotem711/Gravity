/* eslint-disable operator-linebreak */
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GlobalContext } from 'pages/_app'
import { Router, useRouter } from 'next/router'
import Button from 'components/generic/button/button'
import Logo from 'public/gravity-logo.svg'
import navBackground from 'public/nav-bg-tiny.jpg'
import styles from './header.module.scss'
import HeaderInterface from './header.interface'
import NewsBanner from '../NewsBanner/NewsBanner'

const HeaderBlock = ({ data, inverted, uri }: HeaderInterface) => {
  const [deployed, setDeployed] = useState(false)
  const [scrollDir, setScrollDir] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const { rightSideNavigation, mobileMenuCta } = data
  const router = useRouter()
  const ctx = useContext(GlobalContext)
  const {
    settings: { newsBanner },
  } = ctx
  const [newsBannerActive, setNewsBannerActive] = useState(
    newsBanner.newsBannerActive && router.asPath === '/',
  )

  const isFooterNotVisible = () => {
    const footer = document.querySelector('footer')
    return (
      window.innerHeight +
        window.scrollY +
        footer.getBoundingClientRect().height <
      document.body.scrollHeight
    )
  }

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => setDeployed(false))

    let prevPos = 0
    setTimeout(() => {
      window.onscroll = () => {
        if (window.scrollY === 0) {
          setScrollDir('')
          setScrolled(false)
        } else {
          setScrolled(true)
        }

        if (prevPos >= window.scrollY && window.scrollY > 1) {
          if (prevPos >= window.scrollY + document.documentElement.clientHeight / 3) {
            if (window.innerWidth < 768 && !isFooterNotVisible()) return
            setScrollDir('up')
            prevPos = window.scrollY
          }
          return
        }
        if (window.scrollY > 1 && prevPos > 0) {
          setScrollDir('down')
        }
        prevPos = window.scrollY
      }
    }, 10)
  }, [])

  useEffect(() => {
    if (deployed) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [deployed])

  useEffect(() => {
    setNewsBannerActive(router.asPath === '/')
  }, [router.asPath])

  useEffect(() => {
    setScrolled(false)
    setScrollDir('')
    setDeployed(false)
  }, [uri])

  return (
    <>
      {newsBanner.newsBannerActive && router.asPath === '/' && (
        <NewsBanner
          onClose={() => setNewsBannerActive(false)}
          data={newsBanner}
        />
      )}
      <header
        id="header"
        className={`${styles.root} ${newsBannerActive ? styles.offset : ''} ${
          scrolled ? styles.scrolled : ''
        } ${deployed && styles['is-deployed']} ${
          inverted ? styles['is-inverted'] : ''
        }`}
        data-scroll-dir={scrollDir}
      >
        <div className="relative container flex items-center justify-between pt-30 pb-30 md:pt-25 md:pb-25">
          <Link href="/">
            <button
              type="button"
              onClick={() => (uri === '/' ? setDeployed(false) : () => {})}
              className={`${styles.logo}`}
            >
              <Logo />
            </button>
          </Link>
          <div
            className={`${styles.navContainer} ${
              deployed && styles['is-deployed']
            }`}
          >
            <div className="container">
              <nav className={`${rightSideNavigation ? styles.navCenter : ''}`}>
                <ul className="md:flex">
                  {data?.mainNavigation?.map((subItem) => {
                    const url = subItem.link.url.replace(/\/+$/, '')
                    const activeItem = router.asPath.includes(url)
                    return (
                      <li key={subItem.link.title}>
                        <Link href={subItem.link.url}>
                          <a
                            className={`${styles.navItem} ${
                              activeItem ? styles.active : ''
                            }`}
                            target={subItem.link.target}
                          >
                            {subItem.link.title}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
              {rightSideNavigation && (
                <nav>
                  <ul className="md:flex">
                    {rightSideNavigation.map((subItem) => {
                      const url = subItem.link.url.replace(/\/+$/, '')
                      const activeItem = router.asPath.includes(url)
                      return (
                        <li
                          role="none"
                          onClick={() => setDeployed(false)}
                          key={subItem.link.title}
                        >
                          <Link href={subItem.link.url}>
                            <a
                              className={`${styles.navItem} ${
                                activeItem ? styles.active : ''
                              } ${
                                subItem.link.title === 'Get Started'
                                  ? 'hidden md:block'
                                  : ''
                              } last:mr-0`}
                              target={subItem.link.target}
                            >
                              {subItem.link.title}
                            </a>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                  {mobileMenuCta && (
                    <div
                      className={`${styles.button} col-span-6 md:hidden md:mt-80`}
                    >
                      <Button link={mobileMenuCta} variant="dark" />
                    </div>
                  )}
                </nav>
              )}
            </div>
            <div className={`${styles.navBackground} md:hidden`}>
              <Image
                src={navBackground.src}
                alt="descriptive alt tag"
                layout="responsive"
                width={834}
                height={1195}
                loading="eager"
              />
            </div>
          </div>
          <div className="md:hidden z-10">
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
    </>
  )
}

export default HeaderBlock
