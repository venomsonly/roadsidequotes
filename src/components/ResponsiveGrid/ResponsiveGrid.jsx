import Link from 'next/link';
import React from 'react';
import styles from './ResponsiveGrid.module.css';
const ResponsiveGrid = ({ gridData, headerText }) => {
    return (
        <div>
            <h3 className={styles.heading}>{headerText}</h3>
            <div className={styles.grid_container}>
                {gridData.map((item) => (
                    <Link href={item.route} key={item.name}>
                        <div className={styles.grid_item}>{item.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ResponsiveGrid;
