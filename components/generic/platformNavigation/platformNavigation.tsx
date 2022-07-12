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

  const debounce = (func) => {
    let timer
    return (event) => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(func, 250, event)
    }
  }

  const goToSection = (e) => {
    setActiveIndex(-1)
    const elem = document.getElementById(e.currentTarget.dataset.section)
    const rect = elem.getBoundingClientRect()
    const scrollPos = window.pageYOffset + rect.top
    window.scrollTo({
      top: scrollPos - offset,
      behavior: 'smooth',
    })
    document.getElementById('header').classList.add('fadeOut')
  }

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    const off = offset + 80
    return rect.top < off && rect.bottom > off && rect.top < document.documentElement.clientHeight
  }

  const checkActiveElement = () => {
    if (document.getElementById('tabNavigationContent').getBoundingClientRect().top < 80) {
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
    window.addEventListener('scroll', debounce(checkActiveElement))
    return () => {
      window.removeEventListener('scroll', debounce(checkActiveElement))
    }
  }, [])

  return (
    <div className={`${styles.root} ${endTrigger ? styles.hide : ''}`} ref={platformRef}>
      <div className="container flex justify-between my-auto">
        <h2 role="none" onClick={() => window.scroll({ top: 0, behavior: 'smooth' })} className="typo-subhead uppercase hidden ms:block cursor-pointer">
          {ctx.platformNavigation.title}
        </h2>
        <ul className="flex w-full ms:w-auto justify-between">
          {ctx.platformNavigation.platformMainNavigation.map((item, index) => (
            <li key={item.link.title} className="ms:mr-40 last:mr-0">
              <button
                type="button"
                className={`typo-subhead uppercase ${index === activeIndex ? styles.active : ''}`}
                data-section={item.link.url.replace(/[/]/g, '')}
                onClick={(e) => goToSection(e)}
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
