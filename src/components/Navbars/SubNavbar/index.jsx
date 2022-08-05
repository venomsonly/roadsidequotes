import React from 'react';
import styles from './SubNavbar.module.css';

const SubNavbar = ({ centerAligned }) => {
  return (
    <section className={styles.main_cont}>
        <p className={styles.nav_link}>Home</p>
        <p className={styles.nav_link} style={centerAligned && {flex: '1 0 50%', textAlign: 'center'}}>Serving Canoga Park, California andthe California area.</p>
    </section>
  )
}

export default SubNavbar