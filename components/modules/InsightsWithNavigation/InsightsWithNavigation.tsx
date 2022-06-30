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
  const isMobile = useIsMobile('md')
  const [hideFilters, setHideFilters] = useState(true)

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
        <div className="container flex items-center">
          <button
            type="button"
            onClick={() => setHideFilters(false)}
            className="md:hidden flex gap-10 items-center typo-subhead uppercase"
          >
            Filters
            <ArrowRight />
          </button>
          <ul
            className={`${styles.nav} ${
              hideFilters === true ? 'opacity-0' : ''
            } flex items-center`}
          >
            <li key="all">
              <button
                className={`typo-subhead uppercase ${
                  category === null ? styles.active : ''
                }`}
                type="button"
                onClick={() => onClickCategory(null)}
              >
                All
              </button>
            </li>
            {insightsCategories
              // eslint-disable-next-line max-len
              .filter((x) => insights.nodes.find((c) => c.categories.nodes.find((y) => y.id === x.id)))
              .map((item) => (
                <li key={item.id} className="ml-30 md:ml-40 first:ml-0">
                  <button
                    className={`typo-subhead uppercase ${
                      category === item.id ? styles.active : ''
                    }`}
                    type="button"
                    onClick={() => onClickCategory(item.id)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </nav>
      <div className="">
        {category === null && (
          <TextVideoCombinationV2
            extendedOnMobile
            fieldGroupName="TextVideoCombinationV2"
            textVideoCombinationV2={textVideoCombinationV2}
          />
        )}
        <ul className="default-grid pt-80 lg:pt-200 container">
          {splicedInsights.map((item, index) => (
            <li
              key={`${item.slug} - ${category}`}
              className={`col-span-6 xl:col-span-6 mb-180 sm:mb-180 md:mb-275 last:mb-0 ${
                category === 'all' ? styles.active : ''
              } `}
            >
              <Fade delay={index * 50 + 150}>
                <div className={`${styles.mediaContainer} sm:mb-50`}>
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
                      src={item.featuredImage.node.sourceUrl}
                      alt={item.featuredImage.node.altText}
                      width={665}
                      height={500}
                    />
                  )}
                </div>
                <time
                  className={`${styles.title} block typo-subhead uppercase sm:mb-30`}
                  dateTime={item.post.publishedDate.replace('.', '-')}
                >
                  {item.post.publishedDate}
                </time>
                <h3 className="typo-headlines mb-60 md:mb-50">{item.title}</h3>
                <Link href={`/insights/${item.slug}`}>
                  <a className={`${buttonStyles.root} ${buttonStyles.light}`}>
                    Read More
                  </a>
                </Link>
              </Fade>
            </li>
          ))}
        </ul>
        <div className="container mt-95 md:mt-100 lg:mt-150">
          {filteredInsights.length > spliceIndex * 4 && (
            <button
              onClick={fetchMore}
              type="button"
              className="typo-body underlinedItem"
            >
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default InsightsWithNavigationModule
