import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='icon' href='/favicon.png' />
          <title>Денисов Евгений. Frontend разработчик. jackyapa6eu</title>
          <meta
            name='description'
            content='Денисов Евгений. Frontend разработчик. https://t.me/jackyapa6eu'
          />
          <meta
            name='google-site-verification'
            content='zqJO3khi4fmCTk3uq31wXlp_CUXE7tdgnNgrjmRlM-g'
          />
          <meta name='yandex-verification' content='0e1091a58f4ddeca' />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
               m[i].l=1*new Date();
               for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
               k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
               (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

               ym(92850603, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
               });
          `,
            }}
          />
          <script src='https://api-maps.yandex.ru/v3/?apikey=7df7c647-19ce-4160-b9ee-cf7ef1a51a53&lang=ru_RU'></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
