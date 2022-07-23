/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { GlobalContext } from 'pages/_app'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import useIsMobile from 'utils/hooks'
import Link from 'next/link'
import Fade from 'components/generic/fade/fade'
import InsightsInterface from 'interfaces/Insights'
import ArrowRight from 'public/icons/icon-arrow-right.svg'
import buttonStyles from 'components/generic/button/button.module.scss'
import TextVideoCombinationV2 from 'components/modules/TextVideoCombinationV2/TextVideoCombinationV2'
import IInsightsWithNavigation from './InsightsWithNavigation.interface'
import styles from './InsightsWithNavigation.module.scss'

const InsightsWithNavigationModule = ({
  textVideoCombinationV2,
}: IInsightsWithNavigation) => {
  const ctx = useContext(GlobalContext)
  const { insights, insightsCategories } = ctx
  const [spliceIndex, setSpliceIndex] = useState(1)
  const [category, setCategory] = useState(null)
  const [filteredInsights, setFilteredInsights] = useState<InsightsInterface[]>(
    insights.nodes,
  )
  const isMobile = useIsMobile('sd')
  const [hideFilters, setHideFilters] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  const onClickCategory = (catId) => {
    setSpliceIndex(1)
    setCategory(catId)
    if (catId === null) {
      setFilteredInsights([...insights.nodes])
    } else {
      const filtered = insights.nodes.filter((x) => x.categories.nodes.find((a) => a.id === catId))
      setFilteredInsights([...filtered])
    }
  }

  const fetchMore = () => {
    setSpliceIndex(spliceIndex + 1)
  }

  useEffect(() => {
    setHideFilters(isMobile)
  }, [isMobile])

  const splicedInsights = [...filteredInsights].splice(0, spliceIndex * 4)
  return (
    <div className={`${styles.root} pb-65 md:pb-100`}>
      <nav className={`${styles.navContainer}`}>
        <div className="container flex items-center px-0 overflow-visible">
          <button
            type="button"
            onClick={() => {
              if (category && !hideFilters) {
                setCategory(null)
              } else {
                setHideFilters(false)
              }
            }}
            className="sd:hidden ml-35 pr-15 flex gap-10 items-center typo-subhead uppercase"
          >
            Filters
            <ArrowRight />
          </button>
          <ul
            className={`${styles.nav} ${
              hideFilters === true ? 'opacity-0' : ''
            } flex items-center`}
          >
            {((category === null && isMobile) || !isMobile) && (
              <li key="all">
                <Fade deactivate={!isMobile} key={`all-${hideFilters}`}>
                  <button
                    className={`typo-subhead ml-30 sd:ml-40 uppercase ${
                      category === null ? styles.active : ''
                    }`}
                    type="button"
                    onClick={() => onClickCategory(null)}
                  >
                    All
                  </button>
                </Fade>
              </li>
            )}
            {insightsCategories
              .filter((x) => insights.nodes.find((c) => c.categories.nodes.find((y) => y.id === x.id)))
              .filter((y) => category !== null && isMobile ? y.id === category : true)
              .map((item, index) => (
                <li key={item.id} className="ml-30 sd:ml-40">
                  <Fade
                    deactivate={!isMobile}
                    key={
                      isMobile
                        ? `${hideFilters}-${item.name}-${category}`
                        : null
                    }
                    delay={index * 250 + 150}
                  >
                    <button
                      className={`typo-subhead uppercase ${
                        category === item.id ? styles.active : ''
                      }`}
                      type="button"
                      onClick={() => onClickCategory(item.id)}
                    >
                      {item.name}
                    </button>
                  </Fade>
                </li>
              ))}
          </ul>
        </div>
      </nav>
      <div className="">
        {category === null && (
          <TextVideoCombinationV2
            extendedOnMobile
            clickable
            fieldGroupName="TextVideoCombinationV2"
            textVideoCombinationV2={textVideoCombinationV2}
          />
        )}
        <ul className="default-grid gap-y-100 lg:gap-y-150 container">
          {splicedInsights.map((item, index) => (
            <li
              key={`${item.slug} - ${category}`}
              className={`col-span-6 ms:col-span-3 md:col-span-6 xl:col-span-6 ${
                category === 'all' ? styles.active : ''
              } `}
            >
              <Link href={`/insights/${item.slug}`}>
                <a
                  onMouseOver={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  <Fade threshold={0} delay={index * 50 + 150}>
                    {(item.post.previewVideo || item.featuredImage) && (
                      <div
                        className={`${styles.mediaContainer} mb-30 sm:mb-50`}
                      >
                        {item.post.previewVideo ? (
                          <video
                            src={item.post.previewVideo}
                            playsInline
                            muted
                            loop
                          />
                        ) : (
                          <Image
                            loading="lazy"
                            layout="responsive"
                            src={item.featuredImage.node.sourceUrl}
                            alt={item.featuredImage.node.altText}
                            width={665}
                            height={500}
                          />
                        )}
                      </div>
                    )}
                    <time
                      className={`${styles.title} block typo-subhead uppercase mb-30`}
                    >
                      {item.post.publishedDate}
                    </time>
                    <h3 className="typo-featured-insights-headline mb-55 sd:mb-50">
                      {item.post.optionalTitle || item.title}
                    </h3>

                    <a
                      className={`${buttonStyles.root} ${buttonStyles.light} ${
                        hoveredIndex === index ? buttonStyles.hover : ''
                      }`}
                    >
                      Read More
                    </a>
                  </Fade>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="container mt-95 sd:mt-100 md:mt-150">
          {filteredInsights.length > spliceIndex * 4 && (
            <button
              onClick={fetchMore}
              type="button"
              className="typo-body custom-underline"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default InsightsWithNavigationModule
