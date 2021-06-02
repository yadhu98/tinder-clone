import axios from 'axios'

const instance = axios.create({
    baseURL : "https://tinder-backend-yadhu.herokuapp.com/"
})

export default instance;