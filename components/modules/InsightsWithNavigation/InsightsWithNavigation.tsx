import { GlobalContext } from 'pages/_app'
import React, { useContext, useState } from 'react'
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
  const [category, setCategory] = useState('all')
  const [displayFilters, setDisplayFilters] = useState(false)
  const router = useRouter()

  const onClickCategory = (e) => {
    router.query.cat = e.currentTarget.dataset.category
    router.push(router)
  }

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
            {insightsCategories.nodes.map((item) => (
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
        <ul className="default-grid pt-200 container">
          {insights.map((item, index) => (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              <li
                key={item.post.id}
                className={`col-span-6 xl:col-span-6 mb-180 sm:mb-180 md:mb-275 last:mb-0 ${
                  category === 'all' ? styles.active : ''
                } `}
                data-category={item.categories.nodes[0].name
                  .toLowerCase()
                  .replace(/[" "]/g, '-')}
              >
                <Fade delay={index * 150 + 150}>
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
                        width={item.featuredImage.node.mediaDetails.width}
                        height={item.featuredImage.node.mediaDetails.height}
                      />
                    )}
                  </div>
                  <time
                    className={`${styles.title} block typo-subhead uppercase sm:mb-30`}
                    dateTime={item.post.publishedDate.replace('.', '-')}
                  >
                    {item.post.publishedDate}
                  </time>
                  <h3 className="typo-headlines mb-60 md:mb-50">
                    {item.title}
                  </h3>
                  <Link href={`/insights/${item.slug}`}>
                    <a className={`${buttonStyles.root} ${buttonStyles.light}`}>
                      Read More
                    </a>
                  </Link>
                </Fade>
              </li>
            </>
          ))}
        </ul>
        {insights.length > 4 ?? (
          <button type="button" className="typo-body">
            Learn More
          </button>
        )}
      </div>
    </div>
  )
}

export default InsightsWithNavigationModule
