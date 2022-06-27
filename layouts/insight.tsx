/* eslint-disable object-curly-newline */
import React from 'react'
import Head from 'next/head'
import renderLayout from 'utils/repeater'
import SettingsInterface from 'interfaces/Settings'
import { InsightsInterface } from 'wordpress/insights-query'
import { GlobalContextProvider } from 'pages/_app'
import FooterInterface from 'components/generic/footer/footer.interface'
import { Navigation } from 'components/generic/header/header.interface'
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
  nextPosts: []
}) => (
  <GlobalContextProvider
    value={{ header, footer }}
  >
    <div>
      {console.log(insight, settings, nextPosts)}
      <Head>
        <title>Gravity</title>
        <meta name="description" content="TBD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        data={header}
        uri={insight?.uri}
      />
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
      </main>
      <Footer data={footer} />
    </div>
  </GlobalContextProvider>
)

export default Insight
