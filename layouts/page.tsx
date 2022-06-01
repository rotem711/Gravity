import React from 'react'
import { PageInterface } from 'wordpress/page-query'
import Head from 'next/head'
import renderLayout from 'utils/repeater'
import { GlobalContextProvider } from 'pages/_app'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'

const Page = ({ page }: { page: PageInterface }) => {
  console.log(page)
  return (
    <GlobalContextProvider value={{}}>
      <div>
        <Head>
          <title>Gravity</title>
          <meta name="description" content="TBD" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
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
        <Footer />
      </div>
    </GlobalContextProvider>
  )
}
export default Page
