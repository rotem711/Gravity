import React from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './fade.module.scss'
import IFade from './fade.interface'

const Fade = ({
  children,
  threshold = 0.2,
  delay = 0,
  className = '',
  disable = false,
  deactivate = false,
}: IFade) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  if (deactivate) return children
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
