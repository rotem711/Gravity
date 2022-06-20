/* eslint-disable operator-linebreak */
import React, { FunctionComponent, useEffect, useState } from 'react'
import Polygon from 'public/icons/icon-polygon.svg'
import styles from './ScrollNudge.module.scss'
import IScrollNudge from './ScrollNudge.interface'

const ScrollNudge: FunctionComponent<IScrollNudge> = () => {
  const [val, setVal] = useState(0)

  const updateValue = () => {
    const { documentElement } = document
    // eslint-disable-next-line radix
    const y =
      documentElement.getBoundingClientRect().height -
      documentElement.clientHeight -
      documentElement.scrollTop

    setVal(Math.round((1 - Math.round(y) / documentElement.getBoundingClientRect().height) * 419))
  }

  useEffect(() => {
    window.addEventListener('scroll', updateValue)
    return () => {
      window.removeEventListener('scroll', updateValue)
    }
  }, [])
  return (
    <div className={`${styles.root} invisible xl:visible`}>
      <div className={styles.values}>
        <span>{`${val}`}</span>
        <span>PPM</span>
        <Polygon />
      </div>
    </div>
  )
}

export default ScrollNudge
