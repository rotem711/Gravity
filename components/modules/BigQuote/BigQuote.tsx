import React, {
  FunctionComponent, useEffect, useLayoutEffect, useRef, useState,
} from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import styles from './BigQuote.module.scss'
import IBigQuote from './BigQuote.interface'

const BigQuoteModule:FunctionComponent<IBigQuote> = (props) => {
  const { bigQuote } = props
  const [index, setIndex] = useState(0)
  const [quoteLayout, setQuoteLayout] = useState('simple')
  const [quoteHeight, setQuoteHeight] = useState(0)
  const quoteRefs = useRef([])

  let timer = null
  const indexRef = useRef(index)
  indexRef.current = index

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  useEffect(() => {
    for (let i = 0; i < bigQuote.quotes.length; i += 1) {
      if (bigQuote.quotes[i].logo && bigQuote.quotes[i].logo.sourceUrl !== '') {
        setQuoteLayout('with-logo')
        return
      }
    }
  }, [])

  // set quoteContainer height
  useLayoutEffect(() => {
    for (let i = 0; i < quoteRefs.current.length; i += 1) {
      if (quoteRefs.current[i].clientHeight > quoteHeight) {
        setQuoteHeight(quoteRefs.current[i].clientHeight)
      }
    }
  })

  useEffect(() => {
    if (inView) {
      timer = setTimeout(() => {
        if (indexRef.current + 1 === quoteRefs.current.length) {
          setIndex(0)
        } else { setIndex(indexRef.current + 1) }
      }, 4000)
      return () => clearTimeout(timer)
    }
    return null
  }, [inView, index])

  return (
    <div
      className={`${styles.root}`}
      style={{ backgroundColor: bigQuote.backgroundColor }}
      ref={ref}
    >
      <div className="container pt-25 pb-155 xl:pt-35 xl:pb-230">
        {
          quoteLayout === 'simple' ? (
            <div className="xl:default-grid">
              <h2 className={`${styles.title} typo-subhead uppercase sm:mb-85 xl:col-span-3`}>{bigQuote.leftHeadline}</h2>
              {bigQuote.quotes.map((item) => (
                <blockquote className={`${styles.quoteElement} typo-big-quotes xl:col-span-8 xl:col-start-5`}>
                  {item.quote}
                  <i aria-hidden="true">”</i>
                  <cite className={`${styles.cite} typo-captions-and-buttons mt-35 xl:mt-45`}>
                    <p>{item.subline}</p>
                  </cite>
                </blockquote>
              ))}
            </div>
          ) : (
            <div className="">
              <h2 className={`${styles.title} typo-subhead uppercase sm:mb-85 w-full`}>{bigQuote.leftHeadline}</h2>
              <div
                className={`${styles.quoteContainer}`}
                style={{ height: quoteHeight }}
              >
                {bigQuote.quotes.map((item, itemIndex) => (
                  <blockquote
                    className={`${styles.quote} ${index === itemIndex ? styles.isActive : ''} typo-big-quotes default-grid xl:col-span-12`}
                    ref={(element) => { quoteRefs.current[itemIndex] = element }}
                  >
                    <div className={`${styles.quoteElement} col-span-6 md:col-span-9`}>
                      {item.quote}
                      <i aria-hidden="true">”</i>
                      <cite className={`${styles.cite} typo-captions-and-buttons mt-35 xl:mt-45`}>
                        <p>{item.subline}</p>
                      </cite>
                    </div>
                    <div className={`${styles.logo} col-span-2 md:col-start-11 mb-50 md:mb-0`}>
                      <Image
                        src={item.logo.sourceUrl}
                        alt={item.logo.altText}
                        width={item.logo.mediaDetails.width}
                        height={item.logo.mediaDetails.height}
                      />
                    </div>
                  </blockquote>
                ))}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default BigQuoteModule
