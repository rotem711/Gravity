import React, {
  useContext, useEffect, useRef, useState,
} from 'react'
import { GlobalContext } from 'pages/_app'
import styles from './platformNavigation.module.scss'

const PlatformNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [endTrigger, setEndTrigger] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ctx = useContext(GlobalContext)
  const platformRef = useRef(null)
  const offset = 120

  const goToSection = (e, index) => {
    const elem = document.getElementById(e.currentTarget.dataset.section)
    const rect = elem.getBoundingClientRect()
    const scrollPos = window.pageYOffset + rect.top

    setActiveIndex(index)
    window.scrollTo({
      top: scrollPos - offset,
      behavior: 'smooth',
    })
  }

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    const off = offset + 80
    return rect.top < off && rect.bottom > off && rect.top < document.documentElement.clientHeight
  }

  const checkActiveElement = () => {
    if (document.getElementById('tabNavigationContent').getBoundingClientRect().top < 0) {
      setEndTrigger(true)
    } else {
      setEndTrigger(false)
    }
    let found = false
    const items = ctx.platformNavigation.platformMainNavigation.map((item) => item.link.url.replace(/[/]/g, ''))
    if (items) {
      items.forEach((x, index) => {
        const elem = document.getElementById(x)
        if (isElementInViewport(elem)) {
          setActiveIndex(index)
          found = true
        }
      })
    }
    if (!found) setActiveIndex(-1)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkActiveElement)
    return () => {
      window.removeEventListener('scroll', checkActiveElement)
    }
  }, [])

  return (
    <div className={`${styles.root} ${endTrigger ? styles.hide : ''}`} ref={platformRef}>
      <div className="container flex justify-between my-auto">
        <h2 className="typo-subhead uppercase hidden md:block">
          {ctx.platformNavigation.title}
        </h2>
        <ul className="flex w-full md:w-auto justify-between">
          {ctx.platformNavigation.platformMainNavigation.map((item, index) => (
            <li key={item.link.title} className="md:mr-40 last:mr-0">
              <button
                type="button"
                className={`typo-subhead uppercase ${index === activeIndex ? styles.active : ''}`}
                data-section={item.link.url.replace(/[/]/g, '')}
                onClick={(e) => goToSection(e, index)}
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
