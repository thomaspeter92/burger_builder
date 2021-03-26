import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-4b4fb-default-rtdb.firebaseio.com/'
})

export default instance;