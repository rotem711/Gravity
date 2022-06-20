import React, { FunctionComponent, useEffect, useState } from 'react'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import { useInView } from 'react-intersection-observer'
import styles from './LottiePlayer.module.scss'
import ILottiePlayer from './LottiePlayer.interface'

const LottiePlayer: FunctionComponent<ILottiePlayer> = (props) => {
  const { animation } = props
  const [animationData, setAnimationData] = useState()
  const [offsetY, setOffsetY] = useState(-1)
  const [offsetX, setOffsetX] = useState(-1)

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const calculate = () => {
    const svgParent = document.getElementById(animation).querySelector('svg')
    const x = svgParent?.childNodes[1] as Element
    if (x) {
      const pRect = svgParent.getBoundingClientRect()
      const { height, width } = x.getBoundingClientRect()

      const offset = (pRect.height - height) / 2 + 5
      const offsetLeft = (pRect.width - width) / 2
      setOffsetY(offset * -1)
      if (animation !== 'simplify-carbon-accounting') {
        setOffsetX(offsetLeft * -1)
      }
    }
  }
  useEffect(() => {
    window.addEventListener('orientationchange', calculate)
    import(`public/animations/${animation}.json`).then(setAnimationData)
    return () => {
      window.removeEventListener('orientationchange', calculate)
    }
  }, [])

  return (
    <div
      id={animation}
      className={`${styles.root} ${styles[animation]} ${
        inView ? styles.fadeIn : ''
      }`}
      style={{ transform: `translateX(${offsetX}px) translateY(${offsetY}px)` }}
      ref={ref}
    >
      <Lottie
        loop={false}
        animationData={animationData}
        goTo={inView ? 0 : 100}
        play={inView}
        onLoad={() => {
          setTimeout(() => {
            calculate()
          }, 1000)
        }}
      />
    </div>
  )
}

export default LottiePlayer
