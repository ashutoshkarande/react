import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID hCra63XwOjkqldAEX6NleUIyXDhzhfOCSeQ1MRdUn9A'
    }
});