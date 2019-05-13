import axios from 'axios';

const KEY = 'AIzaSyD2Lv8UvqV04w3w0QUjL9GYZr9KS5LW4lM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
