import React, { FunctionComponent, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './HeroWithAnimatedText.module.scss'
import IHeroWithAnimatedText from './HeroWithAnimatedText.interface'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const HeroWithAnimatedTextModule: FunctionComponent<IHeroWithAnimatedText> = (
  props,
) => {
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
      gsap
        .timeline({
          duration: 40,
          scrollTrigger: {
            trigger: '#team-header',
            start: 'top top',
            end: 'bottom+=300% bottom',
            pin: true,
            scrub: 1,
            pinSpacing: true,
          },
        })
        .to('.line', {
          opacity: 1,
          duration: 6,
          stagger: 6,
          delay: -40,
        })
        .to('.list', {
          y: '-35%',
          delay: -6,
          duration: 8,
        })
        .to('.items', {
          opacity: 0,
          duration: 6,
          delay: -6,
        })
    })
  }, [refs])

  return (
    <div
      id="team-header"
      className={`${styles.root} pt-180 lg:pt-225 pb-150 lg:pb-190`}
    >
      <div className="container">
        <div className={`${styles.list} list`}>
          <div className={`${styles.items} items`}>
            {heroWithAnimatedText.animatingText.map((item) => (
              <div
                className={`${styles.line} line`}
                ref={(r) => refs.current.push(r)}
                key={item.text}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className={`relative ${styles.line} line last mt-150 lg:mt-230 z-[1]`}>
          {heroWithAnimatedText.subline}
        </div>
      </div>
      <video
        className={`${styles.video}`}
        src={heroWithAnimatedText.vimeoVideoUrl}
        playsInline
        muted
        loop
        autoPlay
      />
    </div>
  )
}

export default HeroWithAnimatedTextModule
