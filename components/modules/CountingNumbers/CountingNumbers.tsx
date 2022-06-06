import React, { useEffect, useRef, FunctionComponent } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ICountingNumbers from './CountingNumbers.interface'
import styles from './CountingNumbers.module.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const useArrayRef = () => {
  const refs = useRef([])
  refs.current = []
  return [refs, (ref) => ref && refs.current.push(ref)]
}

const CountingNumbersModule:FunctionComponent<ICountingNumbers> = (props) => {
  const { countingNumbers } = props
  const [refs, setRef] = useArrayRef()

  useEffect(() => {
    refs.current.map((ref, index) => {
      const zero = { val: 0 }
      const num = parseInt(ref.innerHTML, 10)

      gsap.to(zero, {
        val: num,
        duration: 1.5,
        scrollTrigger: ref,
        ease: 'expo.out',
        delay: index * 0.2,
        onUpdate() {
          ref.innerHTML = zero.val.toFixed()
        },
      })
    })
  }, [])

  return (
    <div
      className={`${styles.root}`}
      style={{ backgroundColor: countingNumbers.backgroundColor }}
    >
      <div className="container pt-25 pb-155 xl:pt-35 xl:pb-145">
        <div className="xl:default-grid">
          <h2 className={`${styles.title} typo-subhead uppercase sm:mb-85`}>{countingNumbers.headline}</h2>
          <dl className={`${styles.numbers} default-grid`}>
            {countingNumbers.numbers.map((item, index) => (
              <div key={index} className={`${styles.number} col-span-4 md:col-span-6 xl:col-span-6 mt-75 md:mt-95 xl:mt-110`}>
                <dt className="mb-20">
                  <span ref={setRef}>{item.value}</span>
                  {item.unit}
                </dt>
                <dd className="typo-body">{item.copy}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default CountingNumbersModule
