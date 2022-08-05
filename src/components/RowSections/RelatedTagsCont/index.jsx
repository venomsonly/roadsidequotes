import React from 'react'
import styles from './RelatedTagsCont.module.css'
import Image from 'next/image';
import backgorundImage from '../../../../public/assets/related-tags.webp';

const RelatedTagsCont = () => {
  return (
    <section className={styles.main_cont} style={{backgroundImage: `url('${backgorundImage.src}')`}}>
      <div className={styles.inner_cont}>
        <h3 className={styles.heading}>related tags</h3>
        <div className={styles.tags_cont}>
          {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,].map(i=>(
            <p key={i} className={styles.tag}>
              Text Input
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedTagsCont