import '../src/style/main.css';
import '../src/style/swiper.css';
import '../src/style/acc.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../src/style/normalize.css'
import {wrapper} from '../redux/store';
import Head from 'next/head'
function App({Component, pageProps}) {
    return <>
        <Head>
            <meta name="application-name" content="PWA App" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="PWA App" />
            <meta name="description" content="Best PWA App in the world" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#fff" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="theme-color" content="#fff" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://yourdomain.com" />
            <meta name="twitter:title" content="PWA App" />
            <meta name="twitter:description" content="Best PWA App in the world" />
            <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
            <meta name="twitter:creator" content="@DavidWShadow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="PWA App" />
            <meta property="og:description" content="Best PWA App in the world" />
            <meta property="og:site_name" content="PWA App" />
            <meta property="og:url" content="https://yourdomain.com" />
            <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />
            <title>it-industrial</title>
            <link rel="icon" href="/icon-192x192.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
            <meta name="theme-color" content="#fff"/>
        </Head>
        <Component {...pageProps}/>
    </>

}

export default wrapper.withRedux(App)
