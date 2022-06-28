/* eslint-disable operator-linebreak */
import React, {
  FunctionComponent, useEffect, useRef, useState,
} from 'react'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import styles from './LottiePlayer.module.scss'
import ILottiePlayer from './LottiePlayer.interface'

const LottiePlayer: FunctionComponent<ILottiePlayer> = (props) => {
  const { animation } = props
  const [animationData, setAnimationData] = useState()
  const [offsetY, setOffsetY] = useState(-1)
  const [offsetX, setOffsetX] = useState(-1)
  const [render, setRender] = useState(false)
  const [inView, setInView] = useState(false)
  const [svgHeight, setSVGHeight] = useState(0)
  const innerRef = useRef<HTMLDivElement>()
  const ref = useRef<HTMLDivElement>()

  const isInViewport = () => {
    const rect = ref.current.getBoundingClientRect()
    setInView(
      rect.top < document.documentElement.clientHeight / 1.5 &&
        rect.bottom <= document.documentElement.clientHeight &&
        rect.bottom > -100,
    )
  }

  useEffect(() => {
    document.addEventListener('scroll', isInViewport)
    return () => {
      document.removeEventListener('scroll', isInViewport)
    }
  }, [])

  const calculate = () => {
    setOffsetX(-1)
    setOffsetY(-1)
    setSVGHeight(0)
    setTimeout(() => {
      const svgParent = document.getElementById(animation).querySelector('svg')
      const x = svgParent?.childNodes[1] as Element
      if (x) {
        const pRect = svgParent.getBoundingClientRect()
        const { height, width } = x.getBoundingClientRect()
        const offset = (pRect.height - height) / 2 + 5
        const offsetLeft = (pRect.width - width) / 2
        setOffsetY(offset * -1)
        setOffsetX(offsetLeft * -1)
        if (animation === 'simplify-carbon-accounting') {
          if (window.innerWidth < 834) {
            setSVGHeight(
              pRect.height - innerRef.current.getBoundingClientRect().height,
            )
          }
          setOffsetY((offset + 8) * -1)
        }
        setRender(true)
      }
    }, 1)
  }
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const hook = typeof screen.orientation !== 'undefined' ? 'resize' : 'orientationchange'
    window.addEventListener(hook, calculate)
    import(`public/animations/${animation}.json`)
      .then(setAnimationData)
      .then(() => {
        setTimeout(() => {
          calculate()
        }, 1000)
      })
    return () => {
      window.removeEventListener(hook, calculate)
    }
  }, [])

  return (
    <div
      id={animation}
      className={`${styles.root} ${styles[animation]} ${
        inView && render ? styles.fadeIn : ''
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
          goTo={inView && render ? 0 : 100}
          play={inView && render}
        />
      </div>
    </div>
  )
}

export default LottiePlayer
