import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
        @font-face {
          font-family: 'Modern Gothic';
          src: url('/fonts/ModernGothic-Regular.woff2') format('woff2'),
            url('/fonts/ModernGothic-Regular.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'Modern Gothic';
          src: url('/fonts/ModernGothic-Light.woff2') format('woff2'),
            url('/fonts/ModernGothic-Light.woff') format('woff');
          font-weight: 300;
          font-style: normal;
        }

        @font-face {
          font-family: 'So:hne Mono';
          src: url('/fonts/SohneMono-Buch.woff2') format('woff2'),
            url('/fonts/SohneMono-Buch.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }`,
            }}
          />
        </Head>

        <body className="loading">
          <Main />
          <NextScript />
          {process.env.NODE_ENV !== 'development' && (
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
          )}
          {process.env.NODE_ENV !== 'development' && (
            <script
              dangerouslySetInnerHTML={{
                __html: ` (function () {
              var zi = document.createElement('script');
              zi.type = 'text/javascript';
              zi.async = true;
              zi.referrerPolicy = 'unsafe-url';
              zi.src = 'https://ws.zoominfo.com/pixel/62e2ce36953f3e008e0c4b33';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(zi, s);
                  })();`,
              }}
            />
          )}
          {process.env.NODE_ENV !== 'development' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          )}
        </body>
        {process.env.NODE_ENV !== 'development' && (
          <noscript>
            <img
              src="https://ws.zoominfo.com/pixel/62e2ce36953f3e008e0c4b33"
              width="1"
              height="1"
              style={{ display: 'none' }}
              alt="websights"
            />
          </noscript>
        )}
      </Html>
    )
  }
}

export default MyDocument
