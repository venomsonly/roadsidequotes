import { useState } from 'react';
import Head from 'next/head';
import GlobalNavbar from '../components/Navbars/GlobalNavbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar((sidebar) => !sidebar);
    };

    return (
        <>
            <Head>
                {/* <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                /> */}
                {/* <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
            </Head>
            <GlobalNavbar toggleSidebar={toggleSidebar} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
