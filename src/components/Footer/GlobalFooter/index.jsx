import React from 'react'
import styles from './GlobalFooter.module.css'
import Image from 'next/image';
import starSet from '../../../../public/assets/star-set-large.svg';
import bankCards from '../../../../public/assets/bank-cards.svg';
import CallButton from '../../Buttons/CallButton';

const GlobalFooter = () => {
  return (
    <section className={styles.main_cont}>
      <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.heading}>5 Star Review!</p>

        <div className={styles.star_icon_cont}>
          <Image
            className={styles.star_icon}
            height={50} width={250}
            objectFit="contain"
            src={starSet}
            alt="starSet"
          />
        </div>

        <p className={styles.sub_text}>
          Everyday Locksmith provides a 24/7 locksmith services. We are licensed and insured, and all of our locksmiths are up to date with the latest security technology.
        </p>
      </div>

      <div className={styles.item}>
        <p className={styles.heading}>We Accept All Major credit Cards!</p>

        <div style={{marginTop: '30px'}}>
          <Image
            src={bankCards}
            alt="bankCards"
            height={100} width={350}
          />
        </div>
      </div>

      <div className={styles.item}>
        <CallButton color="red" style={{width: '100%', margin: '0px'}} />
      </div>
      </div>
    </section>
  )
}

export default GlobalFooter