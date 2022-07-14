/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Fade from 'components/generic/fade/fade'
import buttonStyles from 'components/generic/button/button.module.scss'
import styles from './FeaturedInsights.module.scss'
import IFeaturedInsights from './FeaturedInsights.interface'

const FeaturedInsightsModule: FunctionComponent<IFeaturedInsights> = (
  props,
) => {
  const { featuredInsights, reducedSpacing } = props
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  return (
    <div
      className={`${styles.root}`}
      style={{ backgroundColor: featuredInsights.backgroundColor }}
    >
      <div
        className={`container pt-25 xl:pt-35 ${
          reducedSpacing ? 'pb-100 md:pb-65' : 'pb-155 xl:pb-230'
        }`}
      >
        <h2 className={`${styles.title} typo-subhead uppercase mb-50 sm:mb-60`}>
          <Fade>{featuredInsights.headline}</Fade>
        </h2>
        <ul className="default-grid gap-y-180">
          {featuredInsights.insights.map((item, index) => (
            <Link href={`/insights/${item.insight.slug}`}>
              <a
                onMouseOver={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                className="col-span-6 sd:col-span-3 md:col-span-6 xl:col-span-4"
              >
                <li key={item.insight.id}>
                  <Fade
                    className="h-full flex flex-col"
                    delay={index * 150 + 150}
                  >
                    <div className={`${styles.mediaContainer} mb-40 md:mb-50`}>
                      {item.insight.post.previewVideo ? (
                        <video
                          src={item.insight.post.previewVideo}
                          playsInline
                          preload="none"
                          muted
                          loop
                        />
                      ) : (
                        <Image
                          loading="lazy"
                          src={item.insight.featuredImage.node.sourceUrl}
                          alt={item.insight.featuredImage.node.altText}
                          width={
                            item.insight.featuredImage.node.mediaDetails.width
                          }
                          height={
                            item.insight.featuredImage.node.mediaDetails.height
                          }
                        />
                      )}
                    </div>
                    <time
                      className={`${styles.title} block typo-subhead uppercase mb-40 md:mb-30`}
                      dateTime={item.insight.post.publishedDate.replace(
                        '.',
                        '-',
                      )}
                    >
                      {item.insight.post.publishedDate}
                    </time>
                    <h3 className="typo-featured-insights-headline mb-55 md:mb-50">
                      {item.insight.post.optionalTitle || item.insight.title}
                    </h3>
                    <a
                      className={`${buttonStyles.root} ${buttonStyles.light} ${
                        hoveredIndex === index ? buttonStyles.hover : ''
                      } mt-auto mr-auto`}
                    >
                      Read More
                    </a>
                  </Fade>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedInsightsModule
