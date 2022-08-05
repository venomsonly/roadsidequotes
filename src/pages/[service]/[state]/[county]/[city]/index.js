import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ResponsiveGrid from '../../../../../components/ResponsiveGrid/ResponsiveGrid';
import ContactUs from '../../../../../components/RowSections/ContactUs';
import CityStateCont from '../../../../../components/RowSections/CityStateCont';
import ReviewCont from '../../../../../components/RowSections/ReviewCont';
import RelatedTagsCont from '../../../../../components/RowSections/RelatedTagsCont';
import TrustedKeywordCont from '../../../../../components/RowSections/TrustedKeywordCont';
import GlobalFooter from '../../../../../components/Footer/GlobalFooter';
export default function County({ apidata }) {
    const router = useRouter();
    const { service, city } = router.query;

    if (router.isFallback) {
        return;
        <>...</>;
    }
    const gridData = apidata.map((data) => {
        console.log(data)
        return { name: data.zip_name, route: data.zip_route };
    });
    return (
        <>
            <Head>
                <title>{service.toUpperCase() + ' | ' + city.toUpperCase()}</title>
                <meta name="description" content="Towing USA" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ResponsiveGrid gridData={gridData} headerText={'Our Zips'} />
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
        `https://api.zippercity.com/service/state/county/city/zips?_q1=${params.service}&_q2=${params.state}&_q3=${params.county}&_q4=${params.city}`
        // "http://149.56.27.98:786/service/state/county/city/zips?_q1=fuel-delivery&_q2=California&_q3=los-angeles-county&_q4=agoura-hills"
    );

    const data = await response.json();
    return {
        props: {
            apidata: data,
        },
        revalidate: 1,
    };
}


