import React from 'react'
import styles from './ReviewCont.module.css'
import Image from 'next/image';
import doubleQuoteIcon from '../../../../public/assets/double-quote.svg';
import starSetIcon from '../../../../public/assets/star-set.svg';

const ReviewCont = () => {
  return (
    <section className={styles.main_cont}>
        <Image
            src={doubleQuoteIcon}
            alt="doubleQuoteIcon"
            height={60} width={60}
        />
        <br />
        <h4 className={styles.heading}>SEE WHAT ALL THE BUZZ IS ABOUT</h4>
        <br />
        <Image
            src={starSetIcon}
            alt="starSetIcon"
            height={60} width={250}
        />
        <br />
        <p className={styles.sub_heading}>“ I’ll never need to look or another towing service assitance comapny again. ”</p>
    </section>
  )
}

export default ReviewCont