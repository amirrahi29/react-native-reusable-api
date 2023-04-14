import axios from 'axios';

export const fetchAllProducts = async (url) => {
    let result = await axios.get(url);
    return result;
}