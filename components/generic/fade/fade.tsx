import React from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './fade.module.scss'
import IFade from './fade.interface'

const Fade = ({
  children,
  threshold = 0.5,
  delay = 0,
  className = '',
  disable = false,
}: IFade) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`${styles.root} ${className} ${(inView && !disable) ? styles['fade--in'] : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Fade
