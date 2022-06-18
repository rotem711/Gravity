import React, { FunctionComponent, useEffect, useState } from 'react'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import { useInView } from 'react-intersection-observer'
import styles from './LottiePlayer.module.scss'
import ILottiePlayer from './LottiePlayer.interface'

const LottiePlayer:FunctionComponent<ILottiePlayer> = (props) => {
  const { animation } = props
  const [animationData, setAnimationData] = useState()

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  useEffect(() => {
    import(`public/animations/${animation}.json`).then(setAnimationData)
  }, [])

  return (
    <div
      className={`${styles.root}`}
      ref={ref}
    >
      <Lottie
        loop={false}
        animationData={animationData}
        play={inView}
        goTo={0}
      />
    </div>
  )
}

export default LottiePlayer
