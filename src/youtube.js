import axios from 'axios';

//autrization untuk link api youtube
const keys = 'AIzaSyAtvaykPdLzabbnluYrGRP8TuKKa0Uv4iY'

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   //untuk mangambil desribsi dan title serta menbatasi data yang diambil
   params: {
      part: "snippet",
      maxResults: 5,
      key: keys
      
   },
})