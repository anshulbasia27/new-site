import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title: string
  description: string
  path: string
  ogType?: string
}

const SITE_URL = 'https://altorlab.com'

export function SEOHead({ title, description, path, ogType = 'article' }: SEOHeadProps) {
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${SITE_URL}/og-image.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
