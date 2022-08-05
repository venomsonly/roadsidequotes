import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ResponsiveGrid from '../../../components/ResponsiveGrid/ResponsiveGrid';
import ContactUs from '../../../components/RowSections/ContactUs';
import CityStateCont from '../../../components/RowSections/CityStateCont';
import ReviewCont from '../../../components/RowSections/ReviewCont';
import AreaWeServeCont from '../../../components/RowSections/AreaWeServeCont';
import RelatedTagsCont from '../../../components/RowSections/RelatedTagsCont';
import TrustedKeywordCont from '../../../components/RowSections/TrustedKeywordCont';
import GlobalFooter from '../../../components/Footer/GlobalFooter';
export default function State({ apidata }) {
    const router = useRouter();
    const { service, state } = router.query;

    if (router.isFallback) {
        return;
        <>...</>;
    }

    const gridData = apidata.map((data) => {
        return { name: data.county_name, route: data.county_route };
    });
    return (
        <>
            <Head>
                <title>{service.toUpperCase() + ' | ' + state.toUpperCase()}</title>
                <meta name="description" content="Towing USA" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ResponsiveGrid gridData={gridData} headerText={'Our Counties'} />
            <ContactUs />
            <CityStateCont keyword={`${service} in ${state}`}  />
            <ReviewCont />
            <TrustedKeywordCont service={service} location={state} />
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
        `https://api.zippercity.com/service/state/county?_q1=${params.service}&_q2=${params.state}`
    );
    const data = await response.json();
    return {
        props: {
            apidata: data,
        },
        revalidate: 1,
    };
}
