import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'http://192.168.0.108:5050',
    headers: {
        'content-type': 'application/json'
    }
});

api.interceptors.request.use(async function (config) {
    config.headers.Authorization = `Bearer ${await AsyncStorage.getItem('token')}`
    return config;
}, function (error) {
    return Promise.reject(error);
});

class UserRequests {

    static logIn(data) {
        return api.post('/users/auth/login', data)
    }

    static signUp (data) {
        return api.post('/users/register', data)
    }

    static getProfile () {
        return api.get('/users/profile')
    }

    static updateUser (data) {
        return api.put('/users/profile', data)
    }
}

export default UserRequests;