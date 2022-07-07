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
  const lastLineRef = useRef<HTMLDivElement>()
  const spacerRef = useRef<HTMLDivElement>()

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#team-header',
      start: 'top top',
      end: 'bottom bottom',
    })

    // ignore the first one
    // add the last one
    const lines = refs.current.slice(1)
    lines.push(lastLineRef.current)

    gsap
      .timeline({
        scrollTrigger: {
          trigger: spacerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
        },
      })
      .fromTo(lines, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2 })
  }, [refs])

  return (
    <div
      id="team-header"
      className={`${styles.root}`}
    >
      <div
        className={`${styles.pin} pt-180 lg:pt-225 pb-150 lg:pb-190`}
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
          <div ref={lastLineRef} className={`relative ${styles.line} line last mt-150 lg:mt-230 z-[1]`}>
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
      <div ref={spacerRef} className={styles.spacer} />
    </div>
  )
}

export default HeroWithAnimatedTextModule
