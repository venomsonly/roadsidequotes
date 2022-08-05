import axios from 'axios';
import Image from 'next/image';
import { useRef, useState } from 'react';
import searchIcon from '../../../public/assets/search-icon.svg';
import SearchResultsModal from '../Modal/SearchResultsModal/SearchResultsModal';
import styles from './SearchInput.module.css';

const SearchInput = ({ style }) => {
    const [inputValue, setInputValue] = useState('');
    const [apidata, setApiData] = useState([]);
    const divRef = useRef(null);

    const searchMe = () => {
        divRef.current.focus();
        if(inputValue.length > 2){
            axios
            .get(`https://api.zippercity.com/search?_sk=${inputValue}`)
            .then((res) => {
                setApiData(res.data);
            });

            setInputValue("")
        } else{
            setInputValue("");
            setApiData([]);
        }
    };

    return (
        <>
            <div
                id="link-form"
                className={styles.search_input_container}
                style={style}
            >
                <div className={styles.search_input_icon_container}>
                    {/* <Image
                    src={searchIcon}
                    alt=""
                    className={styles.search_input_icon}
                /> */}
                    <input
                        placeholder='Search city/zip....'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.currentTarget.value)}
                    />
                </div>
                <button
                    className={styles.submit_btn}
                    type="button"
                    onClick={searchMe}
                >
                    GO
                </button>
            </div>
            <div ref={divRef}>
                {apidata.length > 0 ? <SearchResultsModal data={apidata} /> : <></>}
            </div>
        </>
    );
};

export default SearchInput;
