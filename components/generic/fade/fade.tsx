import React from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './fade.module.scss'
import IFade from './fade.interface'

const Fade = ({ children, threshold = 0.4, delay = 0 }: IFade) => {
  const { ref, inView } = useInView({
    threshold,
    delay,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={`${styles.root} ${inView ? 'fade--in' : ''}`}>
      {children}
    </div>
  )
}

export default Fade
