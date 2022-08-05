import styles from './Page2Header.module.css';
import SearchInput from '../../SearchInput';
import Image from 'next/image';

const Page2Header = () => {
    return (
        <section className={styles.main_cont}>
            <p className={styles.nav_link}>Home</p>
            <p className={styles.nav_link}>Serving Canoga Park, California andthe California area.</p>
        </section>
    );
};

export default Page2Header;
