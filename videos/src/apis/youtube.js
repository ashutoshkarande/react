import axios from "axios";
const KEY = 'AIzaSyCg1RABoD--d_iNeAk4V8fM3NfrnLkpL5o';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});