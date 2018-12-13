import axios from 'axios';

const API_KEY = 'AIzaSyDY4VaungExZn-kcFee1yswh-VU2NhI4yE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY
  }
});
