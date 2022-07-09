/* eslint-disable operator-linebreak */
import React, {
  FunctionComponent, useEffect, useRef, useState,
} from 'react'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import { useInView } from 'react-intersection-observer'
import styles from './LottiePlayer.module.scss'
import ILottiePlayer from './LottiePlayer.interface'

const LottiePlayer: FunctionComponent<ILottiePlayer> = (props) => {
  const { animation, triggerOnce = false } = props
  const [animationData, setAnimationData] = useState()
  const [offsetY, setOffsetY] = useState(-1)
  const [offsetX, setOffsetX] = useState(-1)
  const [render, setRender] = useState(false)
  const [svgHeight, setSVGHeight] = useState(0)
  const innerRef = useRef<HTMLDivElement>()
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce,
    trackVisibility: true,
    delay: 500,
  })

  const debounce = (func) => {
    const timeX = 250 // 100 by default if no param
    let timer
    return (event) => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(func, timeX, event)
    }
  }
  const calculate = () => {
    setRender(false)
    setOffsetX(-1)
    setOffsetY(-1)
    setSVGHeight(0)
    setTimeout(() => {
      const svgParent = document.getElementById(animation)?.querySelector('svg')
      const x = svgParent?.childNodes[1] as Element
      if (svgParent && x) {
        const pRect = svgParent.getBoundingClientRect()
        const { height, width } = x.getBoundingClientRect()
        const offset = (pRect.height - height) / 2 + 5
        const offsetLeft = (pRect.width - width) / 2
        setOffsetY(offset * -1)
        if (animation !== 'careers') setOffsetX(offsetLeft * -1)
        if (animation === 'simplify-carbon-accounting') {
          if (window.innerWidth < 835) {
            setSVGHeight(
              pRect.height - innerRef.current.getBoundingClientRect().height,
            )
          }
          setOffsetY((offset + 8) * -1)
        }
        setRender(true)
      }
    }, 250)
  }
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const hook = typeof screen.orientation !== 'undefined' ? 'resize' : 'orientationchange'
    window.addEventListener(hook, debounce(calculate))
    try {
      import(`public/animations/${animation}.json`)
        .then(setAnimationData)
        .then(() => {
          setTimeout(() => {
            calculate()
          }, 1000)
        })
    } catch (e) {
      console.log(e)
    }
    return () => {
      window.removeEventListener(hook, debounce(calculate))
    }
  }, [])

  return (
    <div
      id={animation}
      className={`${styles.root} ${styles[animation]} ${
        render && inView ? styles.fadeIn : ''
      }`}
      style={{
        transform: `translateX(${offsetX}px) translateY(${offsetY}px)`,
        paddingBottom: `${svgHeight}px`,
      }}
      ref={ref}
    >
      <div ref={innerRef}>
        <Lottie
          loop={false}
          animationData={animationData}
          goTo={render && inView ? 0 : 100}
          play={render && inView}
        />
      </div>
    </div>
  )
}

export default LottiePlayer
