/* eslint-disable object-curly-newline */
import React from 'react'
import { PageInterface } from 'wordpress/page-query'
import Head from 'next/head'
import renderLayout from 'utils/repeater'
import { GlobalContextProvider } from 'pages/_app'
import ScrollNudge from 'components/generic/ScrollNudge/ScrollNudge'
import FooterInterface from 'components/generic/footer/footer.interface'
import { Navigation } from 'components/generic/header/header.interface'
import InsightsInterface, { InsightsCategory } from 'interfaces/Insights'
import PlatformNavigationInterface from 'components/generic/platformNavigation/platformNavigation.interface'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'

const Page = ({
  page,
  footer,
  header,
  platformNavigation,
  insights,
  insightsCategories,
}: {
  page: PageInterface
  footer: FooterInterface
  header: Navigation
  platformNavigation: PlatformNavigationInterface
  insights: {
    nodes: [InsightsInterface]
  }
  insightsCategories: [InsightsCategory]
}) => (
  <GlobalContextProvider
    value={{ header, footer, platformNavigation, insights, insightsCategories }}
  >
    {console.log(insights)}
    <div>
      <Head>
        <title>{page.seoData.title || page.title}</title>
        <meta name="description" content={page.seoData.description} />
        <link rel="icon" href="/static/favicon/favicon.ico" />
        <meta
          property="og:image"
          content={`/_next/image?url=${encodeURIComponent(page.seoData.ogImage?.sourceUrl)}&w=1200&h=630&q=75`}
        />
      </Head>
      <Header
        inverted={page?.pageOption?.invertNavigation}
        data={header}
        uri={page?.uri}
      />
      <main key={page?.uri}>
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
        {page && page.uri === '/' && <ScrollNudge />}
        {page &&
          page.template.pageBuilder.pageBuilder.map((layout, index) =>
            renderLayout(
              layout,
              'DefaultTemplate_Pagebuilder_PageBuilder_',
              index,
            ),
          )}
      </main>
      <Footer data={footer} />
    </div>
  </GlobalContextProvider>
)

export default Page
