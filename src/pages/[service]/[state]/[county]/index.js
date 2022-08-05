import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ResponsiveGrid from '../../../../components/ResponsiveGrid/ResponsiveGrid';
import ContactUs from '../../../../components/RowSections/ContactUs';
import CityStateCont from '../../../../components/RowSections/CityStateCont';
import ReviewCont from '../../../../components/RowSections/ReviewCont';
import RelatedTagsCont from '../../../../components/RowSections/RelatedTagsCont';
import TrustedKeywordCont from '../../../../components/RowSections/TrustedKeywordCont';
import GlobalFooter from '../../../../components/Footer/GlobalFooter';
export default function County({ apidata }) {
    const router = useRouter();
    const { service, county } = router.query;

    if (router.isFallback) {
        return;
        <>...</>;
    }
    const gridData = apidata.map((data) => {
        return { name: data.city_name, route: data.city_route };
    });
    return (
        <>
            <Head>
                <title>{service.toUpperCase() + ' | ' + county.toUpperCase()}</title>
                <meta name="description" content="Towing USA" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ResponsiveGrid gridData={gridData} headerText={'Our Cities'} />
            <ContactUs />
            <CityStateCont keyword={`${service} in ${county}`} />
            <ReviewCont />
            <TrustedKeywordCont service={service} location={county} />
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
        `https://api.zippercity.com/service/state/county/city?_q1=${params.service}&_q2=${params.state}&_q3=${params.county}`
    );

    const data = await response.json();
    return {
        props: {
            apidata: data,
        },
        revalidate: 1,
    };
}
