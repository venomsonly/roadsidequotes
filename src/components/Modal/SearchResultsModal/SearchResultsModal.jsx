import React, { useEffect, useRef, useState } from 'react';
import { NO_RESULTS } from '../../../constants/noResults';
import styles from './SearchResultsModal.module.css';
import Link from 'next/link';

const SearchResultsModal = ({ data }) => {
    const [divs, setDivs] = useState([]);

    const locSection = useRef(null);

    useEffect(() => {
        let d = [];
        data.map((item, key) => {
            d.push(
                <Link key={key} href={item['zip_route']}>
                    <a>
                        <section className={styles.searchResult}>
                            <h3 className={styles.title}>
                                Serving {item['city_name']}
                            </h3>
                            <div className={styles.searchResultTop}>
                                <div>
                                    <br />
                                    <p className={styles.texts}>
                                        <div>
                                            Service:{' '}
                                            <b>{item['service_name']}</b>{' '}
                                        </div>
                                        <div>State: {item['state_name']}</div>{' '}
                                        <div>
                                            County: {item['county_name']}{' '}
                                        </div>{' '}
                                        <div>Zip-Code: {item['zip_name']}</div>
                                    </p>
                                </div>
                                <button>
                                    <a href="tel:18002464998">
                                        Call:18002464998
                                    </a>
                                </button>
                            </div>
                            <div className={styles.searchResultBottom}>
                                <div>
                                    <b>Mon</b> <br /> 24hr
                                </div>
                                <div>
                                    <b>Tue</b> <br /> 24hr
                                </div>
                                <div>
                                    <b>Wed</b> <br /> 24hr
                                </div>
                                <div>
                                    <b>Thu</b> <br /> 24hr
                                </div>
                                <div>
                                    <b>Fri</b> <br /> 24hr
                                </div>
                                <div>
                                    <b>Sat</b> <br /> 24hr
                                </div>
                                <div>
                                    <b>Sun</b> <br /> 24hr
                                </div>
                            </div>
                        </section>
                    </a>
                </Link>
            );
        });
        setDivs(d);
    }, [data]);
    return (
        <div className={styles.container}>
            <div className={styles.resultBox}>
                <div className={styles.blur}></div>
                {divs}
                <div className={styles.blurBottom}></div>
            </div>
        </div>
    );
};

export default SearchResultsModal;
