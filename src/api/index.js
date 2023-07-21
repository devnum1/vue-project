import axios from 'axios';

export default
    axios.create({
        baseURL: 'https://reactify.theironnetwork.org/data/'
        // baseURL: 'https://dev.jufrah.com/admin/'
    });