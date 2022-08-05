/* eslint-disable function-paren-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React from 'react'
import { PageInterface } from 'wordpress/page-query'
import Head from 'next/head'
import renderLayout from 'utils/repeater'
import { GlobalContextProvider } from 'pages/_app'
import ScrollNudge from 'components/generic/ScrollNudge/ScrollNudge'
import SettingsInterface from 'interfaces/Settings'
import FooterInterface from 'components/generic/footer/footer.interface'
import { Navigation } from 'components/generic/header/header.interface'
import InsightsInterface, { InsightsCategory } from 'interfaces/Insights'
import PlatformNavigationInterface from 'components/generic/platformNavigation/platformNavigation.interface'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'
import { useRouter } from 'next/router'

const Page = ({
  page,
  footer,
  header,
  platformNavigation,
  insights,
  insightsCategories,
  settings,
}: {
  page: PageInterface
  footer: FooterInterface
  header: Navigation
  platformNavigation: PlatformNavigationInterface
  insights: {
    nodes: [InsightsInterface]
  }
  insightsCategories: [InsightsCategory]
  settings: SettingsInterface
}) => {
  const { asPath } = useRouter()
  const renderHotjar =
    asPath === '/' ||
    asPath === '/product' ||
    asPath === '/team' ||
    asPath === '/blog'
  return (
    <GlobalContextProvider
      value={{
        header,
        footer,
        platformNavigation,
        insights,
        insightsCategories,
        settings,
      }}
    >
      <div>
        <Head>
          <title>{page.seoData.title || page.title}</title>
          <meta property="og:type" content="website" />
          <meta name="description" content={page.seoData.description} />
          <meta property="og:image" content={page.seoData.ogImage?.sourceUrl} />
          <meta
            property="og:title"
            content={page.seoData.title || page.title}
          />
          <meta property="og:description" content={page.seoData.description} />
          <link rel="icon" href="/static/favicon/favicon.ico" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="gravityclimate.com" />
          <meta
            property="twitter:url"
            content="https://www.gravityclimate.com/"
          />
          <meta
            name="twitter:title"
            content={page.seoData.title || page.title}
          />
          <meta name="twitter:description" content={page.seoData.description} />
          <meta
            name="twitter:image"
            content={page.seoData.ogImage?.sourceUrl}
          />
        </Head>
        {process.env.NODE_ENV !== 'development' && renderHotjar && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3094525,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
        )}
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
              // eslint-disable-next-line implicit-arrow-linebreak
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
}

export default Page
