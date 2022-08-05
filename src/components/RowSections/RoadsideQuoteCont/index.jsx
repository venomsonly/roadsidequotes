import React from 'react'
import SearchInput from '../../SearchInput';
import styles from './RoadsideQuoteCont.module.css';
import Image from 'next/image';
import emergencyQuote from '../../../public/assets/emergency-quote.webp';
import CallButton from '../../Buttons/CallButton';

const RoadsideQuoteCont = () => {
  return (
    <section className={styles.main_cont}>
        <div className={`${styles.col} ${styles.left_col}`}>
            <h2 className={styles.heading}>Roadside Quote serving the 91356 area: </h2>
            <p className={styles.sub_text}>
                Thank you for using our FREE service. Below you will find the best Locksmi <br/> ths in our network that serve your area.
            </p>
            <p className={styles.sub_text}>
                <small>If you would like to search again please enter a zip code.</small>
            </p>

            <div style={{width: '90%', marginTop: '40px'}}>
                <SearchInput style={{border: '1px solid #000'}} />
            </div>
        </div>

        <div className={`${styles.col} ${styles.right_col}`}>
            <h2 className={styles.heading}>Tarzana Roadside Quote</h2>
            <h4 className={styles.sub_heading}>Serving: Tarzana, CA 91356</h4>

            <div className={styles.days_cont}>
                <table>
                    <thead>
                        <tr>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>24hr</td>
                            <td>24hr</td>
                            <td>24hr</td>
                            <td>24hr</td>
                            <td>24hr</td>
                            <td>24hr</td>
                            <td>24hr</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className={styles.heading} style={{textAlign: 'center'}}>Call: 877-504-9447</h2>

            <div style={{width: '70%', padding: '30px 0px', margin: 'auto'}}>
                <Image
                    src={emergencyQuote}
                    alt="emergencyQuote"
                />
            </div>
        </div>


        <div className={styles.bottom_section}>
            <p className={styles.heading}>
                as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over 
            </p>

            <div className={styles.call_btn_cont}>
                <CallButton color="red" />
            </div>
        </div>
    </section>
  )
}

export default RoadsideQuoteCont