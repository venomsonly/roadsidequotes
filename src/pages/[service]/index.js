import React from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import ResponsiveGrid from '../../components/ResponsiveGrid/ResponsiveGrid';
import ContactUs from '../../components/RowSections/ContactUs';
import CityStateCont from '../../components/RowSections/CityStateCont';
import ReviewCont from '../../components/RowSections/ReviewCont';
import RelatedTagsCont from '../../components/RowSections/RelatedTagsCont';
import TrustedKeywordCont from '../../components/RowSections/TrustedKeywordCont';
import GlobalFooter from '../../components/Footer/GlobalFooter';
export default function Service({ apidata }) {
    const router = useRouter();
    const {service} = router.query;

    if (router.isFallback) {
        return;
        <>...</>;
    }
    const gridData = apidata.map((data) => {
        return { name: data.name, route: data.route };
    });
    return (
        <>
            <Head>
                <title>{service.toUpperCase() + ' | US'}</title>
                <meta name="description" content="Towing USA" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ResponsiveGrid gridData={gridData} headerText={'Our States'} />
            <ContactUs />
            <CityStateCont keyword={`${service} Services`} />
            <ReviewCont />
            <TrustedKeywordCont location="US" />
            <GlobalFooter />
        </>
    );
}

export async function getStaticPaths(context) {
    const { params } = context;
    console.log(params);
    const response = await fetch(
        'https://api.zippercity.com/services'
    );
    const data = await response.json();
    const paths = data.map((item) => {
        return {
            params: { service: `${item.route.slice(1)}` },
        };
    });
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    // console.log(params.service);

    const response = await fetch(
        `https://api.zippercity.com/service/state?_q1=${params.service}`
    );
    const data = await response.json();
    // console.log(data);
    return {
        props: {
            apidata: data,
        },
        revalidate: 1,
    };
}
