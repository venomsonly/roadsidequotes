import styles from './FeaturedCont.module.css';
import Image from 'next/image';

import irex from '../../../../public/assets/irex-image.webp';
import ecopayz from '../../../../public/assets/ecopayz-image.webp';
import eso from '../../../../public/assets/eso-image.webp';
import google from '../../../../public/assets/google-image.webp';
import serc from '../../../../public/assets/serc-image.webp';

const FeaturedCont = () => {
    return (
        <section className={styles.main_cont}>
            <h3 className={styles.heading}>As Featured In</h3>

            <div className={styles.images_cont}>
                <Image 
                    src={irex}
                    alt="irex"
                    height={50}
                    width={100}
                    objectFit={'contain'}
                />
                <Image
                height={50}
                    width={100}
                    objectFit={'contain'} 
                    src={ecopayz}
                    alt="irex"
                />
                <Image
                height={50}
                    width={100}
                    objectFit={'contain'} 
                    src={eso}
                    alt="irex"
                />
                <Image
                height={50}
                    width={100}
                    objectFit={'contain'} 
                    src={google}
                    alt="irex"
                />
                <Image
                height={50}
                    width={100}
                    objectFit={'contain'} 
                    src={serc}
                    alt="irex"
                />
                <Image
                height={50}
                    width={100}
                    objectFit={'contain'} 
                    src={ecopayz}
                    alt="irex"
                />
            </div>
        </section>
    );
};

export default FeaturedCont;
