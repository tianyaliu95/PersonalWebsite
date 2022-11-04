import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script type='text/javascript' src='/analytics/tracking.js' async />
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
