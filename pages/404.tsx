import Button from 'components/generic/button/button'
import FooterBlock from 'components/generic/footer/footer'
import FooterInterface from 'components/generic/footer/footer.interface'
import { Navigation } from 'components/generic/header/header.interface'
import SettingsInterface from 'interfaces/Settings'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import useIsMobile from 'utils/hooks'
import { getWpStaticProps } from 'wordpress/wp'
import Header from '../components/generic/header/header'

export const getStaticProps = getWpStaticProps
// pages/404.js
/* eslint react/jsx-props-no-spreading: "off", curly: "error" */
/* eslint react/prop-types: "off", curly: "error" */
const Custom404 = ({
  settings,
  footer,
  header,
}: {
  settings: SettingsInterface
  footer: FooterInterface
  header: Navigation
}) => {
  const { notFound } = settings
  const isMobile = useIsMobile()
  const {
    image: { mobileImage, desktopImage },
  } = notFound
  return (
    <div className="notFound">
      <Head>
        <title>Gravity</title>
        <meta name="description" content="TBD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header inverted data={header} uri="/404" />
      <div className="children">
        <div className="image">
          {isMobile && mobileImage ? (
            <Image
              layout="fill"
              src={mobileImage.sourceUrl}
              quality={100}
              loading="eager"
              objectFit="cover"
              objectPosition="bottom"
            />
          ) : (
            desktopImage && (
              <Image
                layout="fill"
                src={desktopImage.sourceUrl}
                quality={100}
                loading="eager"
                objectFit="cover"
                objectPosition="center"
              />
            )
          )}
        </div>
        <div className="content text-center">
          <h1 className="mb-65">404</h1>
          <Button link={notFound.link} variant="dark" />
        </div>
      </div>
      <FooterBlock data={footer} />
    </div>
  )
}
export default Custom404
