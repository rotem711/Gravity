/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
import React from 'react'
import Head from 'next/head'
import renderLayout from 'utils/repeater-insights'
import Post from 'interfaces/Post'
import SettingsInterface from 'interfaces/Settings'
import HeadlineSeparatorModule from 'components/modules/HeadlineSeparator/HeadlineSeparator'
import FeaturedInsightsModule from 'components/modules/FeaturedInsights/FeaturedInsights'
import FullscreenLinkWithMediaModule from 'components/modules/FullscreenLinkWithMedia/FullscreenLinkWithMedia'
import { InsightsInterface } from 'wordpress/insights-query'
import { GlobalContextProvider } from 'pages/_app'
import FooterInterface from 'components/generic/footer/footer.interface'
import { Navigation } from 'components/generic/header/header.interface'
import InsightHeader from 'components/generic/InsightHeader/InsightHeader'
import AuthorRow from 'components/generic/AuthorRow/AuthorRow'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'

const Insight = ({
  insight,
  footer,
  header,
  settings,
  nextPosts,
}: {
  settings: SettingsInterface
  insight: InsightsInterface
  footer: FooterInterface
  header: Navigation
  nextPosts: { nodes: Post[] }
}) => {
  const {
    insightsDetailPage: { headlineSeparator, fullscreenLinkWithMedia },
  } = settings

  // eslint-disable-next-line max-len
  const nextPostNodes = nextPosts.nodes.map((e: Post) => {
    return { insight: e }
  }) as [{ insight: Post }]

  console.log(insight)

  return (
    <GlobalContextProvider value={{ header, footer, settings }}>
      <div>
        <Head>
          <title>{insight.seoData.title || insight.title}</title>
          <meta property="og:type" content="website" />
          <meta name="description" content={insight.seoData.description} />
          <meta property="og:image" content={insight.seoData.ogImage?.sourceUrl} />
          <meta
            property="og:title"
            content={insight.seoData.title || insight.title}
          />
          <meta property="og:description" content={insight.seoData.description} />
          <link rel="icon" href="/static/favicon/favicon.ico" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="gravityclimate.com" />
          <meta
            property="twitter:url"
            content="https://www.gravityclimate.com/"
          />
          <meta
            name="twitter:title"
            content={insight.seoData.title || insight.title}
          />
          <meta name="twitter:description" content={insight.seoData.description} />
          <meta
            name="twitter:image"
            content={insight.seoData.ogImage?.sourceUrl}
          />
          <link rel="alternate" href="https://www.gravityclimate.com/" hrefLang="en"/>
        </Head>
        <Header data={header} uri={insight?.uri} />
        <main key={insight?.uri}>
          {true && process.env.NODE_ENV === 'development' && (
            <div className="devGrid w-full container">
              <div className="default-grid h-full">
                {Array(12)
                  .fill({})
                  .map(() => (
                    <div
                      className="col col-span-1"
                      key={new Date().getTime() + Math.random()}
                    />
                  ))}
              </div>
            </div>
          )}

          <InsightHeader
            title={insight.title}
            image={insight.post.image}
            videoUrl={insight.post.previewVideo}
            featuredImage={insight.featuredImage.node}
          />

          <AuthorRow
            author={insight.author.node}
            date={insight.post.publishedDate}
            customName={insight.post.customAuthor}
          />

          {!!insight?.post?.contentBuilder?.length &&
            insight.post.contentBuilder.map((layout, index) =>
              renderLayout(layout, 'Post_Post_ContentBuilder_', index),
            )}

          <HeadlineSeparatorModule
            disableContainer={false}
            headlineSeparator={headlineSeparator}
          />
          <FeaturedInsightsModule
            reducedSpacing
            featuredInsights={{
              insights: nextPostNodes,
              headline: 'News',
              backgroundColor: '#D97F3E',
            }}
          />
          <FullscreenLinkWithMediaModule
            fullscreenLinkWithMedia={fullscreenLinkWithMedia}
          />
        </main>
        <Footer data={footer} />
      </div>
    </GlobalContextProvider>
  )
}

export default Insight
