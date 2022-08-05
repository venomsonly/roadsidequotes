import React from 'react'
import SearchInput from '../../SearchInput';
import styles from './RoadsideQuoteContRow.module.css';
import Image from 'next/image';
import emergencyQuote from '../../../public/assets/emergency-quote.webp';
import CallButton from '../../Buttons/CallButton';

const RoadsideQuoteContRow = ({ showCallButton = true, firstRowInlined = false, firstRowShowCallButton = true }) => {
  return (
    <section className={styles.main_cont}>
        <div className={`${styles.col} ${styles.left_col} ${firstRowInlined && styles.left_col_inlined}`}>
            <div className={styles.text_cont}>
                <h2 className={styles.heading}>Roadside Quote serving the 91356 area: </h2>
                <p className={styles.sub_text}>
                    Thank you for using our FREE service. Below you will find the best Locksmi <br/> ths in our network that serve your area.
                </p>
                <p className={styles.sub_text}>
                    <small>If you would like to search again please enter a zip code.</small>
                </p>
            </div>

            <div className={styles.input_cont}>
                {firstRowShowCallButton && (
                    <div className={styles.call_btn_cont}>
                        <CallButton color="red" style={{margin: '0px'}} />
                    </div>
                )}
                <div>
                    <SearchInput style={{border: '1px solid #000'}} />
                </div>
            </div>
        </div>

        <div className={`${styles.col} ${styles.right_col}`}>
            <div className={styles.col_6} style={{
                display: `${!showCallButton ? 'flex' : ''}`,
                alignItems: `center`,
                justifyContent: `space-between`,
                gap: `30px`,
            }}>
                <div>
                    <h2 className={styles.heading}>Tarzana Roadside Quote</h2>
                    <h4 className={styles.sub_heading}>Serving: Tarzana, CA 91356</h4>
                </div>

                <div className={styles.days_cont} style={{
                    flexBasis: `${!showCallButton ? '48%' : ''}`,
                    margin: `${!showCallButton ? '0px' : ''}`
                }}>
                    <div className={styles.days_table}>
                        <p>
                            <strong>Mon</strong>
                            <span>24hr</span>
                        </p>
                        <p>
                            <strong>Tue</strong>
                            <span>24hr</span>
                        </p>
                        <p>
                            <strong>Wed</strong>
                            <span>24hr</span>
                        </p>
                        <p>
                            <strong>Thu</strong>
                            <span>24hr</span>
                        </p>
                        <p>
                            <strong>Fri</strong>
                            <span>24hr</span>
                        </p>
                        <p>
                            <strong>Sat</strong>
                            <span>24hr</span>
                        </p>
                        <p>
                            <strong>Sun</strong>
                            <span>24hr</span>
                        </p>
                    </div>
                    {/* <table>
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
                    </table> */}
                </div>
            </div>
            
            {showCallButton && (
                <div className={`${styles.col_6} ${styles.call_btn_cont}`}>
                    <h2 className={styles.heading} style={{textAlign: 'center'}}>Call: 877-504-9447</h2>
                    <div style={{width: '70%', margin: 'auto'}}>
                        <Image
                            src={emergencyQuote}
                            alt="emergencyQuote"
                        />
                    </div>
                </div>
            )}
        </div>
    </section>
  )
}

export default RoadsideQuoteContRow