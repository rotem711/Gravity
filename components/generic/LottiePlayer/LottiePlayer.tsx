/* eslint-disable operator-linebreak */
import React, { FunctionComponent, useEffect, useState } from 'react'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import { useInView } from 'react-intersection-observer'
import styles from './LottiePlayer.module.scss'
import ILottiePlayer from './LottiePlayer.interface'

const LottiePlayer: FunctionComponent<ILottiePlayer> = (props) => {
  const { animation } = props
  const [animationData, setAnimationData] = useState()
  const [play, setPlay] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.25,
  })

  useEffect(() => {
    try {
      import(`public/animations/${animation}.json`).then(setAnimationData)
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    setPlay(inView)
  }, [inView])

  return (
    <div
      id={animation}
      className={`${styles.root} ${styles[animation]} ${
        inView || isPlaying ? styles.fadeIn : ''
      }`}
      ref={ref}
    >
      <Lottie
        onComplete={() => setIsPlaying(false)}
        loop={false}
        onEnterFrame={() => setIsPlaying(true)}
        animationData={animationData}
        goTo={play ? 0 : 100}
        play={play && inView}
      />
    </div>
  )
}

export default LottiePlayer
