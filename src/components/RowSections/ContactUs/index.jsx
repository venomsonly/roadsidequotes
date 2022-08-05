import styles from './ContactUsCont.module.css';
import contactBackground from '../../../../public/assets/contact-background.webp';
import CallButton from '../../Buttons/CallButton';

const ContactUs = () => {
    return (
        <section
            className={styles.main_cont}
            style={{
                backgroundImage: `url(${contactBackground.src})`,
            }}
        >
            <h3 className={styles.heading}>
                Call us for immediate assistance with Towing services in Los
                Angeles, CA
            </h3>

            <div className={styles.call_btn_cont}>
                <CallButton style={{ width: '100%' }} />
            </div>
        </section>
    );
};

export default ContactUs;
