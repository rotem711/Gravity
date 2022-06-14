import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from 'components/generic/button/button'
import styles from './FeaturedInsights.module.scss'
import buttonStyles from 'components/generic/button/Button.module.scss'
import IFeaturedInsights from './FeaturedInsights.interface'

const FeaturedInsightsModule:FunctionComponent<IFeaturedInsights> = (props) => {
  const { featuredInsights } = props
  return (
    <div
      className={`${styles.root}`}
      style={{ backgroundColor: featuredInsights.backgroundColor }}
    >
      <div className="container pt-25 pb-155 xl:pt-35 xl:pb-230">
        <h2 className={`${styles.title} typo-subhead uppercase sm:mb-60`}>{featuredInsights.headline}</h2>
        <ul className="default-grid">
          {featuredInsights.insights.map((item) => (
            <li
              key={item.insight.id}
              className="col-span-6 xl:col-span-4 sm:mb-180 md:mb-0 last:mb-0 md:last:hidden xl:last:block"
            >
              <div className={`${styles.mediaContainer} sm:mb-50`}>
                {
                  item.insight.post.previewVideo
                    ? <video src={item.insight.post.previewVideo} playsInline muted loop />
                    : (
                      <Image
                        src={item.insight.featuredImage.node.sourceUrl}
                        alt={item.insight.featuredImage.node.altText}
                        width={item.insight.featuredImage.node.mediaDetails.width}
                        height={item.insight.featuredImage.node.mediaDetails.height}
                      />
                    )
                }
              </div>
              <time className={`${styles.title} block typo-subhead uppercase sm:mb-30`} dateTime={item.insight.post.publishedDate.replace('.', '-')}>{item.insight.post.publishedDate}</time>
              <h3 className="typo-headlines mb-60 md:mb-50">{item.insight.title}</h3>
              <Link href={`/insights/${item.insight.slug}`}>
                <a className={`${buttonStyles.root}`}>
                  Read more
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedInsightsModule
