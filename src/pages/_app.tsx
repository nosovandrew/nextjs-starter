import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/styles.global';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* add fonts and other global seo tags */}
                {/* <link rel="shortcut icon" href="/icon.png" type="image/png" /> */}
                <title>Nosov Dev Space</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;