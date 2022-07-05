import React, { FunctionComponent, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './HeroWithAnimatedText.module.scss'
import IHeroWithAnimatedText from './HeroWithAnimatedText.interface'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const HeroWithAnimatedTextModule:FunctionComponent<IHeroWithAnimatedText> = (props) => {
  const { heroWithAnimatedText } = props

  const refs = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#team-header',
      start: 'top top',
      end: 'bottom+=300% top',
      pin: true,
      pinSpacing: true,
    })
    refs.current.forEach(() => {
      gsap.timeline({
        duration: 40,
        scrollTrigger: {
          trigger: '#team-header',
          start: 'top top',
          end: 'bottom+=300% bottom',
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      }).to('.line', {
        opacity: 1,
        duration: 4,
        stagger: 6,
        delay: -40,
      }).to('.list', {
        y: '-35%',
        delay: -4,
        duration: 2,
      }).to('.line:not(.last)', {
        opacity: 0,
        y: '-100%',
        duration: 4,
      })
    })
  }, [refs])

  return (
    <div
      id="team-header"
      className={`${styles.root} pt-180 pb-150 lg:pt-225 lg:pb-190`}
    >
      <div className="container">
        <div className={`${styles.list} list`}>
          {heroWithAnimatedText.animatingText.map((item) => (
            <div className={`${styles.line} line`} ref={(r) => refs.current.push(r)}>{item.text}</div>
          ))}
          <div className={`${styles.line} line last mt-150 lg:mt-230`} ref={(r) => refs.current.push(r)}>{heroWithAnimatedText.subline}</div>
        </div>
      </div>
      <video className={`${styles.video}`} src={heroWithAnimatedText.vimeoVideoUrl} playsInline muted loop autoPlay />
    </div>
  )
}

export default HeroWithAnimatedTextModule
