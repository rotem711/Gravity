import { GlobalContext } from 'pages/_app'
import React, {
  useContext, useEffect, useRef, useState,
} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Fade from 'components/generic/fade/fade'
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
  const offset = useRef(4)
  const [noMore, setNoMore] = useState(false)
  const [category, setCategory] = useState('all')
  const router = useRouter()
  const postsRef = useRef<HTMLUListElement>()

  const onClickCategory = (e) => {
    if (category === e.currentTarget.dataset.category) return
    setCategory(e.currentTarget.dataset.category)
    router.query.cat = e.currentTarget.dataset.category
    offset.current = 4
    router.query.offset = offset.current.toString()
    router.push(router)
  }

  const fetchMore = () => {
    offset.current += 4
    router.query.offset = offset.current.toString()
    router.push(router)
  }

  useEffect(() => {
    setNoMore(false)
    if (insights.nodes.length % 4 !== 0) {
      setNoMore(true)
    }
    if (postsRef.current && (insights.nodes.length > 4 || category !== 'all')) {
      postsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [insights])

  return (
    <div className={`${styles.root} pb-200`}>
      <nav className={`${styles.navContainer}`}>
        <div className="container flex items-center">
          <p className="md:hidden flex items-center typo-subhead uppercase">
            Filters
            <ArrowRight />
          </p>
          <ul className={`${styles.nav} flex items-center`}>
            <li key="all">
              <button
                className={`typo-subhead uppercase ${
                  category === 'all' ? styles.active : ''
                }`}
                type="button"
                data-category="all"
                onClick={(e) => onClickCategory(e)}
              >
                All
              </button>
            </li>
            {insightsCategories.map((item) => (
              <li key={item.id} className="ml-30 md:ml-40 first:ml-0">
                <button
                  className={`typo-subhead uppercase ${
                    category === item.name.toLowerCase().replace(/[" "]/g, '-')
                      ? styles.active
                      : ''
                  }`}
                  type="button"
                  data-category={item.name.toLowerCase().replace(/[" "]/g, '-')}
                  onClick={(e) => onClickCategory(e)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="">
        {category === 'all' && (
          <TextVideoCombinationV2
            fieldGroupName="TextVideoCombinationV2"
            textVideoCombinationV2={textVideoCombinationV2}
          />
        )}
        <ul ref={postsRef} className="default-grid pt-200 container">
          {insights.nodes.map((item, index) => (
            <li
              key={item.slug}
              className={`col-span-6 xl:col-span-6 mb-180 sm:mb-180 md:mb-275 last:mb-0 ${
                category === 'all' ? styles.active : ''
              } `}
              data-category={item.categories.nodes[0].name
                .toLowerCase()
                .replace(/[" "]/g, '-')}
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
                      loading="eager"
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
          {!noMore && (
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
