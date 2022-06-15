import { useEffect, useState } from 'react'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const bpWidth = 835

  const onResize = () => {
    setIsMobile(window.innerWidth <= bpWidth)
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
