import Axios from 'axios';

export default Axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:4,
        key:'AIzaSyCxcyyCy-k2ZXcGjE-9Yt4kQQShNbaNrs4'
    }
})