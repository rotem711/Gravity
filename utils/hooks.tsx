import { useEffect, useState } from 'react'

const { theme } = require('../tailwind.config')

export default function useIsMobile(
  breakPoint?: string,
  defaultTrue: boolean = false,
) {
  const [isMobile, setIsMobile] = useState(defaultTrue)
  const bpWidth = theme.screens[breakPoint || 'md'].replace('px', '')

  const onResize = () => {
    setIsMobile(window.innerWidth < bpWidth)
  }

  const events = ['resize', 'orientationchange']

  useEffect(() => {
    // trigger callback once after initial rendering
    onResize()
    // add event listeners for all events from the array above
    events.forEach((e) => {
      window.addEventListener(e, () => {
        onResize()
      })
    })
    // remove event listeners for all events from the array above
    return () => {
      events.forEach((e) => {
        window.removeEventListener(e, () => {})
      })
    }
  }, [])

  return isMobile
}

export const validateEmail = (email: string) => {
  const regexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regexp.test(email)
}

/**
 * format date
 * @param _date expects Ymd date (YYYYMMDD)
 * @returns formatted string
 */
export const formatDate = (_date: number | string) =>
  new Date(_date).toLocaleString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
