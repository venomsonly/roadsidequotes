import React from 'react'
import styles from './CallButton.module.css';
import Image from 'next/image';
import PhoneIcon from '../../../../public/assets/phone.svg';


const CallButton = ({ color, style }) => {
  return (
    <a href='tel:18002464998'>
        {color === "red" ? (
            <button className={`${styles.call_btn} ${styles.color_red}`} style={style}>
                <div className={styles.call_btn_img_cont}>
                    <Image
                        src={PhoneIcon}
                        alt="PhoneIcon"
                        className={`${styles.call_btn_img} ${styles.high_brightness}`}
                        width={50}
                    />
                </div>
                <p>
                    <span>CLICK TO CALL</span> <br />
                    <strong>18002464998</strong>
                </p>
            </button>
        ) : (
            <button className={`${styles.call_btn}`} style={style}>
                <div className={styles.call_btn_img_cont}>
                    <Image
                        src={PhoneIcon}
                        alt="PhoneIcon"
                        className={styles.call_btn_img}
                        width={55}
                    />
                </div>
                <p>
                    <span>CLICK TO CALL</span> <br />
                    <strong>18002464998</strong>
                </p>
            </button>
        )}
    </a>
  )
}

export default CallButton;