import styles from './index.module.css';
import Head from "next/head";
import ContactUs from '../components/RowSections/ContactUs';
import FeaturedCont from '../components/RowSections/FeaturedCont';
import Header from '../components/Header/Header';
import ServicesCont from '../components/RowSections/ServicesCont';
import CityStateCont from '../components/RowSections/CityStateCont';
import ReviewCont from '../components/RowSections/ReviewCont';
import GlobalFooter from '../components/Footer/GlobalFooter';
import AreaWeServeCont from '../components/RowSections/AreaWeServeCont';
import RelatedTagsCont from '../components/RowSections/RelatedTagsCont';
import TrustedKeywordCont from '../components/RowSections/TrustedKeywordCont';
import { useState } from 'react';

export default function Home({ apidata }) {
    const services = apidata.map((item) => item.name);

    return (
        <main className={styles.container}>
            <Head>
                <title>Road Side Quotes</title>
                <meta name="description" content="Road Side Quotes" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://roadsidequotes.com/" />
                <meta name="keywords" content="The Best Road Side Quotes Services In USA"></meta>
            </Head>
            
            <Header />
            <FeaturedCont />
            <ContactUs />
            <CityStateCont serviceName="Towing US" />
            <ReviewCont /> 
            <ServicesCont services={services} />
            <TrustedKeywordCont />
            <GlobalFooter />
        </main>
    );
}

export async function getStaticProps() {
    const response = await fetch(
        'https://api.zippercity.com/services'
    );
    const data = await response.json();
    return {
        props: {
            apidata: data,
        },
        revalidate: 1,
    };
}
