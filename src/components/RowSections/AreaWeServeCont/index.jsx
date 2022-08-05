import React from 'react'
import styles from './AreaWeServeCont.module.css';

const AreaWeServeCont = () => {
  return (
    <section className={styles.main_cont}>
      <h3 className={styles.heading}>Area We Serve</h3>

      <div className={styles.items_cont}>
        <ul className={styles.item_list}>
          <li>Alaska</li>
          <li>Alabama</li>
          <li>Arkansas</li>
          <li>Arizona</li>
          <li>California</li>
          <li>Colorado</li>
          <li>Connecticut</li>
          <li>District Of Columbia</li>
          <li>Delaware</li>
          <li>Florida</li>
          <li>Georgia</li>
          <li>Hawaii</li>
          <li>Iowa</li>
        </ul>
        <ul className={styles.item_list}>
          <li>Idaho</li>
          <li>Illinois</li>
          <li>Indiana</li>
          <li>Kansas</li>
          <li>Kentucky</li>
          <li>Louisiana</li>
          <li>Massachusetts</li>
          <li>Maryland</li>
          <li>Maine</li>
          <li>Michigan</li>
          <li>Minnesota</li>
          <li>Missouri</li>
          <li>Mississippi</li>
        </ul>
        <ul className={styles.item_list}>
          <li>Montana</li>
          <li>North Carolina</li>
          <li>North Dakota</li>
          <li>Nebraska</li>
          <li>New Hampshire</li>
          <li>New Jersey</li>
          <li>New Mexico</li>
          <li>Nevada</li>
          <li>New York</li>
          <li>Ohio</li>
          <li>Oklahoma</li>
          <li>Oregon</li>
          <li>Pennsylvania</li>
        </ul>
        <ul className={styles.item_list}>
          <li>Rhode Island</li>
          <li>South Carolina</li>
          <li>South Dakota</li>
          <li>Tennessee</li>
          <li>Texas</li>
          <li>Utah</li>
          <li>Virginia</li>
          <li>Vermont</li>
          <li>Washington</li>
          <li>Wisconsin</li>
          <li>West Virginia</li>
          <li>Wyoming</li>
        </ul>
      </div>
    </section>
  )
}

export default AreaWeServeCont