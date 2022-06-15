import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from 'pages/_app'

import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import styles from './platformNavigation.module.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

const PlatformNavigation = () => {
  const [isFixed, setIsFixed] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ctx = useContext(GlobalContext)
  const platformRef = useRef(null)
  const el = useRef()
  const q = gsap.utils.selector(el)
  const sectionBtn = useRef(null)

  // const goToSection = () => {
  //   // const section = document.getElementById(`#${e.currentTarget.dataset.section}`)
  //   // const section = ctx.getElementById(`#${sectionBtn.current.dataset.section}`)
  //   const section = q(`#${sectionBtn.current.dataset.section}`)
    
  //   gsap.to(window, {
  //     scrollTo: { y: section.getBoundingClientRect().top, autoKill: true, ease: 'power3.out' },
  //     duration: 0.5,
  //   })
  // }

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > platformRef.current.offsetTop) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
  }, [])

  return (
    <div className={`${styles.root} ${styles['isFixed']} container flex justify-between pt-35 pb-35`} ref={platformRef}>
      <h2 className="typo-subhead uppercase">{ctx.platformNavigation.title}</h2>
      <ul className="flex">
        {ctx.platformNavigation.platformMainNavigation.map((item) => (
          <li key={item.link.title} className="mr-40 last:mr-0">
            <a
              href={`#${item.link.url.replace(/[/]/g, '')}`}
              ref={sectionBtn}
              type="button"
              className="typo-subhead uppercase"
              data-section={item.link.url.replace(/[/]/g, '')}
              // onClick={goToSection}
            >
              {item.link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlatformNavigation
