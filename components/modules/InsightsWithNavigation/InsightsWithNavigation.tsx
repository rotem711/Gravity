import { GlobalContext } from 'pages/_app'
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Fade from 'components/generic/fade/fade'
import buttonStyles from 'components/generic/button/button.module.scss'
import styles from './InsightsWithNavigation.module.scss'

const InsightsWithNavigationModule = () => {
  const ctx = useContext(GlobalContext)
  const { insights, insightsCategories } = ctx

  return (
    <div className={`${styles.root}`}>
      <div className="container">
        <nav>
          <ul className="flex typo-subhead uppercase">
            {insightsCategories.nodes.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  data-category={item.id}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="default-grid">
          {insights.map((item, index) => (
            <li
              key={item.post.id}
              className="col-span-6 xl:col-span-6 sm:mb-180 md:mb-0 last:mb-0 md:last:hidden xl:last:block"
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
                      height={
                        item.featuredImage.node.mediaDetails.height
                      }
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
                  {item.post.title}
                </h3>
                <Link href={`/insights/${item.post.slug}`}>
                  <a className={`${buttonStyles.root} ${buttonStyles.light}`}>
                    Read More
                  </a>
                </Link>
              </Fade>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="typo-body"
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default InsightsWithNavigationModule
