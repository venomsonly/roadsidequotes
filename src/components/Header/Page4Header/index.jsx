import styles from './Page4Header.module.css';
import SearchInput from '../../SearchInput';
import Image from 'next/image';
import CallButton from '../../Buttons/CallButton';
import emergencyQuote from '../../../public/assets/emergency-quote.webp';
import page4HeaderBg from '../../../public/assets/page4-header-bg.svg'

const Page4Header = () => {
    return (
        <section className={styles.main_cont} style={{backgroundImage: `url(${page4HeaderBg.src})`}}>
            <div className={styles.heading}>
                <div style={{width: '80%', padding: '30px 0px', margin: 'auto'}}>
                    <Image
                        src={emergencyQuote}
                        alt="emergencyQuote"
                    />
                </div>
                <CallButton color={"red"} style={{margin: 'auto'}} />
            </div>
        </section>
    );
};

export default Page4Header;