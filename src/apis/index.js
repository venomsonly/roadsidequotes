import axios from 'axios';
export const getSearchResults = async (keyword) => {
    try {
        const response = await axios.get(
            `https://api.zippercity.com/search?_sk=${keyword}`
        );
        return response;
    } catch (error) {
        return error;
    }
};
