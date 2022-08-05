import Image from 'next/image';
import { useRef, useState } from 'react';
import { getSearchResults } from '../../../apis';
import { NO_RESULTS } from '../../../constants/noResults';
import HeaderImage from '../../../../public/assets/header-image.webp';
import SearchResultsModal from '../../Modal/SearchResultsModal/SearchResultsModal';
import SearchInput from '../../SearchInput';
import styles from './Header.module.css';

const Header = () => {
    const wrapperRef = useRef(null);
    const [showSearchResults, setShowResultsModal] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchClicked = async () => {
        const searchResultsResponse = await getSearchResults(searchInput);
        if (searchResultsResponse.data.length > 0)
            setSearchResults(searchResultsResponse.data);
        else setSearchResults([{ service_name: NO_RESULTS }]);
        setShowResultsModal(true);
        console.log("Result Data")
        console.log(searchResultsResponse.data);
    };
    
    return (
        <section className={styles.header_container}>
            <div>
                <div className={styles.header_info}>
                    <h2>
                        <span>
                            Find Trusted Local Roadside
                        </span>{' '}
                        Towing Professional
                    </h2>
                    <br />
                    <div className={styles.serach_btn_cont}>
                        <SearchInput
                            handleSearchInputChange={(value) => {
                                setSearchInput(value);
                            }}
                            searchInput={searchInput}
                            handleSearchClicked={handleSearchClicked}
                            handleInputFocusChange={(focus) =>
                                setShowResultsModal(focus)
                            }
                        />
                        {showSearchResults && searchResults.length > 0 && (
                            <div
                                ref={wrapperRef}
                                className={
                                    styles.search_results_modal_container
                                }
                            >
                                <SearchResultsModal
                                    searchResults={searchResults}
                                />
                            </div>
                        )}
                    </div>

                    <p>
                        24/7 Help Center <strong>1-800-555-1212</strong>
                    </p>
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default Header;
