import './globals.css'
import ThemeWrapper from '@/wrappers/themeWrapper';
import meta from '../../next-seo.config';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeWrapper>
      <html lang="en">
        <head>
          <meta name="robots" content={meta.robots} />
          <meta name="viewport" content={meta.viewport} />
          <link rel="canonical" href={meta.canonical} />
          <meta name="theme-color" content={meta.themeColor} />
          <meta name="description" content={meta.description} />
          <meta property="og:title" content={meta.og.title} />
          <meta property="og:description" content={meta.og.description} />
          <meta property="og:url" content={meta.og.url} />
          <meta property="og:type" content={meta.og.type} />
          <meta property="og:site_name" content={meta.og.site_name} />
          <meta property="og:image" content={meta.og.image} />
          <meta property="og:locale" content={meta.og.locale} />
          <meta name="twitter:card" content={meta.twitter.card} />
          <meta name="twitter:title" content={meta.twitter.title} />
          <meta name="twitter:description" content={meta.twitter.description} />
          <meta name="twitter:site" content={meta.twitter.site} />
          <meta name="twitter:image" content={meta.twitter.image} />
          <meta name="author" content={meta.author} />
          <meta name="keywords" content={meta.keywords} />
          <meta name="referrer" content={meta.referrer} />
          <meta httpEquiv="content-language" content={meta.httpEquiv["content-language"]} />
          <meta httpEquiv="X-UA-Compatible" content={meta.httpEquiv["X-UA-Compatible"]} />
          <title>{meta.title}</title>
        </head>
        <body>{children}</body>
      </html>
    </ThemeWrapper>
  )
}