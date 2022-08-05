import React from 'react';
import CallButton from '../../Buttons/CallButton';
import styles from './CityStateCont.module.css';
import MapContainer from '../../Containers/MapContainer';

const CityStateCont = ({keyword}) => {
    return (
        <section className={styles.main_cont}>
            <div className={styles.left_cont}>
                <h3 className={styles.heading}>{keyword}</h3>

                <p className={styles.text_section}>
                    {
                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purposeIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long "
                    }
                </p>

                <p className={styles.text_section}>
                    {
                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"
                    }
                </p>
            </div>

            <div className={styles.right_cont}>
                <div className={styles.heading_cont}>
                    <h3 className={styles.heading}>
                        Popular in <span>Canoga Park</span>
                    </h3>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CallButton color={'red'} />
                </div>

                <div className={styles.map_cont}>
                    <MapContainer></MapContainer>
                </div>
            </div>
        </section>
    );
};

export default CityStateCont;
