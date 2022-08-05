import styles from './Page3Header.module.css';
import SearchInput from '../../SearchInput';
import Image from 'next/image';
import page3HeaderBg from '../../../public/assets/page3-header-bg.svg'

const Page3Header = () => {
    return (
        <section className={styles.main_cont} style={{backgroundImage: `url(${page3HeaderBg.src})`}}>
            <h2 className={styles.heading}>
                find trusted local roadside towing professional
            </h2>
        </section>
    );
};

export default Page3Header;
