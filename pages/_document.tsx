import React from 'react'
import Document, {
  Head, Html, Main, NextScript,
} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
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
          {process.env.NODE_ENV !== 'development' && false && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.onUsersnapCXLoad = function(api) {
              api.init();
            }
            var script = document.createElement('script');
            script.defer = 1;
            script.src = 'https://widget.usersnap.com/global/load/41370aae-428e-4105-8a41-f685a901be75?onload=onUsersnapCXLoad';
            document.getElementsByTagName('head')[0].appendChild(script);
            `,
              }}
            />
          )}
        </body>
      </Html>
    )
  }
}

export default MyDocument
