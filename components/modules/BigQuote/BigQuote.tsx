import React, {
  FunctionComponent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import Image from 'next/image'
import useIsMobile from 'utils/hooks'
import Fade from 'components/generic/fade/fade'
import { useInView } from 'react-intersection-observer'
import styles from './BigQuote.module.scss'
import IBigQuote from './BigQuote.interface'

const BigQuoteModule: FunctionComponent<IBigQuote> = (props) => {
  const { bigQuote } = props
  const [index, setIndex] = useState(0)
  const [quoteLayout, setQuoteLayout] = useState('simple')
  const [quoteHeight, setQuoteHeight] = useState(0)
  const quoteRefs = useRef([])
  const isMobile = useIsMobile()

  // eslint-disable-next-line operator-linebreak
  const topHeadline =
    isMobile && bigQuote.leftHeadlineMobile
      ? bigQuote.leftHeadlineMobile
      : bigQuote.leftHeadline

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
        } else {
          setIndex(indexRef.current + 1)
        }
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
      <div className="container pt-25 pb-95 xl:pt-35 xl:pb-230">
        {quoteLayout === 'simple' ? (
          <div className="md:default-grid">
            <Fade className="col-span-full sm:mb-85 md:col-span-3">
              <h2
                className={`${styles.title} typo-subhead uppercase`}
                dangerouslySetInnerHTML={{ __html: topHeadline }}
              />
            </Fade>

            {bigQuote.quotes.map((item) => (
              <blockquote
                key={item.quote}
                className={`${styles.quoteElement} typo-big-quotes md:col-span-10 md:col-span-8 md:col-start-5`}
              >
                <Fade delay={150}>
                  <div
                    className={`${styles.quoteElementChild}`}
                    dangerouslySetInnerHTML={{ __html: `${item.quote}”` }}
                  />
                </Fade>
                <cite
                  className={`${styles.cite} typo-captions-and-buttons mt-35 xl:mt-45`}
                >
                  <Fade delay={300}>
                    <div dangerouslySetInnerHTML={{ __html: item.subline }} />
                  </Fade>
                </cite>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="">
            <Fade className="w-full sm:mb-85">
              <h2
                className={`${styles.title} typo-subhead uppercase`}
                dangerouslySetInnerHTML={{ __html: topHeadline }}
              />
            </Fade>
            <div
              className={`${styles.quoteContainer}`}
              style={{ height: quoteHeight }}
            >
              {bigQuote.quotes.map((item, itemIndex) => (
                <blockquote
                  key={item.quote}
                  className={`${styles.quote} ${
                    index === itemIndex ? styles.isActive : ''
                  } typo-big-quotes default-grid xl:col-span-12`}
                  ref={(element) => {
                    quoteRefs.current[itemIndex] = element
                  }}
                >
                  <div
                    className={`${styles.quoteElement} col-span-6 md:col-span-10 xl:col-span-9 xl:pr-10`}
                  >
                    <Fade delay={150}>
                      <div
                        className={`${styles.quoteElementChild}`}
                        dangerouslySetInnerHTML={{ __html: `${item.quote}”` }}
                      />
                    </Fade>
                    <cite
                      className={`${styles.cite} typo-captions-and-buttons mt-35 xl:mt-45`}
                    >
                      <Fade delay={300}>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.subline }}
                        />
                      </Fade>
                    </cite>
                  </div>
                  <div
                    className={`${styles.logo} col-span-2 md:col-start-11 mb-50 md:mb-0`}
                  >
                    <Fade delay={500}>
                      <Image
                        loading="eager"
                        src={item.logo.sourceUrl}
                        alt={item.logo.altText}
                        width={item.logo.mediaDetails.width}
                        height={item.logo.mediaDetails.height}
                      />
                    </Fade>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BigQuoteModule
