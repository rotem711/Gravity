import React from 'react'
import { PageInterface } from 'wordpress/page-query'
import Head from 'next/head'
import renderLayout from 'utils/repeater'
import { GlobalContextProvider } from 'pages/_app'
import FooterInterface from 'components/generic/footer/footer.interface'
import HeaderInterface from 'components/generic/header/header.interface'
import PlatformNavigationInterface from 'components/generic/platformNavigation/platformNavigation.interface'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'

const Page = ({
  page,
  footer,
  header,
  platformNavigation,
}: {
  page: PageInterface
  footer: FooterInterface
  header: HeaderInterface
  platformNavigation: PlatformNavigationInterface
}) => (
  <GlobalContextProvider value={{ header, footer, platformNavigation }}>
    <div>
      <Head>
        <title>Gravity</title>
        <meta name="description" content="TBD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header data={header} />
      <main>
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
        {page.template.pageBuilder.pageBuilder.map((layout) => renderLayout(layout, 'DefaultTemplate_Pagebuilder_PageBuilder_'))}
      </main>
      <Footer data={footer} />
    </div>
  </GlobalContextProvider>
)

export default Page
