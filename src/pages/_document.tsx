import { Html, Head, Main, NextScript } from 'next/document'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || ''

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* ── Charset & Viewport já injetados pelo Next.js ── */}

        {/* ── Favicon ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ── Meta Tags SEO ── */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Terra na Bota" />
        <meta name="theme-color" content="#3B2F26" />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Terra na Bota" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://terranabota.com.br/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://terranabota.com.br/og-image.jpg" />

        {/* ── JSON-LD: Organization + WebSite ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://terranabota.com.br/#organization',
                  name: 'Terra na Bota',
                  url: 'https://terranabota.com.br',
                  logo: 'https://terranabota.com.br/assets/logo/logo-white.svg',
                  sameAs: [
                    'https://instagram.com/useterranabota',
                    'https://facebook.com/useterranabota',
                    'https://tiktok.com/@useterranabota',
                    'https://pinterest.com/useterranabota',
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    email: 'contato@terranabota.com.br',
                    contactType: 'customer service',
                    availableLanguage: 'Portuguese',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://terranabota.com.br/#website',
                  url: 'https://terranabota.com.br',
                  name: 'Terra na Bota',
                  publisher: { '@id': 'https://terranabota.com.br/#organization' },
                  inLanguage: 'pt-BR',
                },
              ],
            }),
          }}
        />

        {/* ── Fontes — preload crítico ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── GA4 ── */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* ── Meta Pixel ── */}
        {META_PIXEL_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
