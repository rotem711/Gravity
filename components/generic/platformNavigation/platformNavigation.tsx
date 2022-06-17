import React, {
  useContext, useEffect, useRef, useState,
} from 'react'
import { GlobalContext } from 'pages/_app'
import useIsMobile from 'utils/hooks'
import styles from './platformNavigation.module.scss'

const PlatformNavigation = () => {
  const [height, setHeight] = useState(0)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ctx = useContext(GlobalContext)
  const platformRef = useRef(null)
  const offset = 150

  const isMobile = useIsMobile()

  const goToSection = (e) => {
    // eslint-disable-next-line max-len
    // let scrollPos = document.getElementById(e.currentTarget.dataset.section).offsetTop

    const elem = document.getElementById(e.currentTarget.dataset.section)
    const rect = elem.getBoundingClientRect()
    const { scrollTop } = document.documentElement
    const scrollPos = scrollTop + rect.top

    window.scrollTo({
      top: scrollPos - offset,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (isMobile) {
      const header = document.getElementById('header')
      setHeight(header.getBoundingClientRect().height)
    } else {
      setHeight(0)
    }
  }, [])

  return (
    <div
      className={`${styles.root} pt-25 pb-25 md:pt-35 md:pb-35`}
      ref={platformRef}
      style={{ top: height }}
    >
      <div className="container flex justify-between">
        <h2 className="typo-subhead uppercase hidden md:block">{ctx.platformNavigation.title}</h2>
        <ul className="flex w-full md:w-auto justify-between">
          {ctx.platformNavigation.platformMainNavigation.map((item) => (
            <li key={item.link.title} className="md:mr-40 last:mr-0">
              <button
                type="button"
                className="typo-subhead uppercase"
                data-section={item.link.url.replace(/[/]/g, '')}
                onClick={goToSection}
              >
                {item.link.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PlatformNavigation
