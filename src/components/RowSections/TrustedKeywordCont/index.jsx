import React from 'react';
import styles from './TrustedKeywordCont.module.css';

const TrustedKeywordCont = ({service, location}) => {
    return (
        <section className={styles.main_cont}>
            <h3 className={styles.heading}>Your Trusted {service} Services In {location}</h3>

            <p className={`${styles.para_text} ${styles.first_para}`}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for.
            </p>

            <p className={styles.para_text}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for l
            </p>
        </section>
    );
};

export default TrustedKeywordCont;
