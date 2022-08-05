import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import ContactUs from '../../../../../../components/RowSections/ContactUs';
import CityStateCont from '../../../../../../components/RowSections/CityStateCont';
import ReviewCont from '../../../../../../components/RowSections/ReviewCont';
import TrustedKeywordCont from '../../../../../../components/RowSections/TrustedKeywordCont';
import GlobalFooter from '../../../../../../components/Footer/GlobalFooter';

export default function ZipSingle({ apidata }) {
    const router = useRouter();
    const { service, city } = router.query;
    
    if (router.isFallback) {
        return;
        <>...</>;
    }
    return (
        <>
            <h1>ZipSingle</h1>
            <Head>
                <title>{service.toUpperCase() + ' | ' + city.toUpperCase()}</title>
                <meta name="description" content="Towing USA" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ContactUs />
            <CityStateCont keyword={`${service} in ${city}`} />
            <ReviewCont />
            <TrustedKeywordCont service={service} location={city} />
            <GlobalFooter />
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(
        `https://api.zippercity.com/service/state/county/city/zip?_q1=${params.service}&_q2=${params.state}&_q3=${params.county}&_q4=${params.city}&_q5=${params.zipsingle}`
    );
    const data = await response.json();
    return {
        props: {
            apidata: data,
        },
        revalidate: 1,
    };
}
