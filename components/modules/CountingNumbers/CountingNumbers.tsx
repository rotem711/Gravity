import React, { useEffect, useRef, FunctionComponent } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Fade from 'components/generic/fade/fade'
import parse from 'html-react-parser'
import ICountingNumbers from './CountingNumbers.interface'
import styles from './CountingNumbers.module.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const CountingNumbersModule: FunctionComponent<ICountingNumbers> = (props) => {
  const { countingNumbers } = props

  const refs = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    refs.current.forEach((ref: HTMLSpanElement, index) => {
      const zero = { val: 0 }
      const num = parseInt(ref?.getAttribute('data-value'), 10)

      gsap.to(zero, {
        val: num,
        duration: 2.5,
        scrollTrigger: {
          trigger: ref,
          start: 'top center',
        },
        ease: 'expo.out',
        onUpdate: () => {
          refs.current[index].innerHTML = zero.val.toFixed().toString()
        },
      })
    })
  }, [refs])

  return (
    <div
      className={`${styles.root}`}
      style={{ backgroundColor: countingNumbers.backgroundColor }}
    >
      <div className="container pt-25 pb-95 sd:pb-100 xl:pt-35 xl:pb-145">
        <h2 className={`${styles.title} typo-subhead uppercase col-span-12`}>
          <Fade>{countingNumbers.headline}</Fade>
        </h2>
        <dl className={`${styles.numbers} default-grid`}>
          {countingNumbers.numbers.map((item, index) => (
            <div
              key={item.copy}
              className={`${styles.number} col-span-6 sd:col-span-3 md:col-span-4 mt-75 sd:mt-95 xl:mt-110`}
            >
              <Fade delay={index * 150}>
                <dt className="mb-20">
                  {item?.prefix}
                  <span
                    data-value={item.value}
                    ref={(r) => refs.current.push(r)}
                  >
                    0
                  </span>
                  {item?.unit}
                </dt>
              </Fade>
              <dd className="typo-body">
                <Fade delay={index * 150 + 50}>{parse(item.copy)}</Fade>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default CountingNumbersModule
