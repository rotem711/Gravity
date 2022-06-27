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
    <div>
      <Head>
        <title>Gravity</title>
        <meta name="description" content="TBD" />
        <link rel="icon" href="/favicon.ico" />
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
        {page && page.template.pageBuilder.pageBuilder.map((layout, index) => renderLayout(layout, 'DefaultTemplate_Pagebuilder_PageBuilder_', index))}
      </main>
      <Footer data={footer} />
    </div>
  </GlobalContextProvider>
)

export default Page
