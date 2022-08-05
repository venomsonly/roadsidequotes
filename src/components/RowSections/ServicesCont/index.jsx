import styles from './ServicesCont.module.css';
import Image from 'next/image';
import Link from 'next/link';
import rectange1 from '../../../../public/assets/Rectangle 2.webp';
import rectange3 from '../../../../public/assets/Rectangle 3.webp';
import rectange4 from '../../../../public/assets/Rectangle 4.webp';
import rectange5 from '../../../../public/assets/Rectangle 5.webp';
import rectange30 from '../../../../public/assets/Rectangle 30.webp';
import rectange31 from '../../../../public/assets/Rectangle 31.webp';

const ServicesCont = ({ services }) => {
    return (
        <section className={styles.main_cont}>
            <h3 className={styles.heading}>Services We Offer</h3>

            <div className={styles.filters_cont}>
                <div className={styles.tags_cont}>
                    {services.map((service) => (
                        <Link
                            href={`/${service
                                .replace(/\s+/g, '-')
                                .toLowerCase()}`}
                            key={service}
                        >
                            <button className={styles.tag} type="button">
                                {service}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
<br />
            <div className={styles.images_cont}>
                <div className={styles.img_cont}>
                    <Image objectFit='contain' height={300} width={300} src={rectange1} alt="rectange1" />
                </div>
                <div className={styles.img_cont}>
                    <Image objectFit='contain' height={300} width={300} src={rectange3} alt="rectange3" />
                </div>
                <div className={styles.img_cont}>
                    <Image objectFit='contain' height={300} width={300} src={rectange4} alt="rectange4" />
                </div>
                <div className={styles.img_cont}>
                    <Image objectFit='contain' height={300} width={300} src={rectange5} alt="rectange5" />
                </div>
                <div className={styles.img_cont}>
                    <Image objectFit='contain' height={300} width={300} src={rectange30} alt="rectange30" />
                </div>
                <div className={styles.img_cont}>
                    <Image objectFit='contain' height={300} width={300} src={rectange31} alt="rectange31" />
                </div>
            </div>
        </section>
    );
};

export default ServicesCont;
